from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.db.models import Q
from .models import PDTIC, DocumentoPDF, Meta, Acao     
from .forms import MetaForm, AcaoForm, PDTICForm, DocumentoPDFForm 



def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home') 
        else:
            return render(request, 'pdtic/login.html', {'error': 'Usuário ou senha incorretos.'})
    return render(request, 'pdtic/login.html')

def logout_view(request):
    logout(request)
    return redirect('login')  

@login_required
def home(request):
    ultimo_pdsystem = PDTIC.objects.last()
    pdsystems = PDTIC.objects.all() 
    query = request.GET.get('q', '')
    if query:
        pdsystems = pdsystems.filter(
            Q(titulo__icontains=query) | Q(vigencia_inicio__icontains=query) | Q(vigencia_fim__icontains=query)
            )

    return render(request, 'pdtic/home.html', {
        'pdsystems': pdsystems,
        'ultimo_pdsystem': ultimo_pdsystem,
        'query': query,
    })

@login_required
def novo_pdsystem(request):
    if request.method == 'POST':
        form = PDTICForm(request.POST, request.FILES)
        if form.is_valid():
            pdtic = form.save()

            pdf_arquivo = request.FILES.get('pdf_arquivo')  
            if pdf_arquivo:

                documento_pdf = DocumentoPDF(pdf_arquivo=pdf_arquivo, pdtic=pdtic)
                documento_pdf.save()
                
            return redirect('detalhes_pdsystem', pdsystem_id=pdtic.id)
    else:
        form = PDTICForm()
    return render(request, 'pdtic/novo_pdsystem.html', {'form': form})


@login_required
def editar_pdsystem(request, pdsystem_id):
    pdsystem = get_object_or_404(PDTIC, id=pdsystem_id)
    if request.method == 'POST':
        form = PDTICForm(request.POST, instance=pdsystem)
        if form.is_valid():
            form.save()
            return redirect('detalhes_pdsystem', pdsystem_id=pdsystem.id)
    else:
        form = PDTICForm(instance=pdsystem)
    return render(request, 'pdtic/editar_pdsystem.html', {'form': form, 'pdsystem': pdsystem})

@login_required
def excluir_pdsystem(request, pdsystem_id):
    pdsystem = get_object_or_404(PDTIC, id=pdsystem_id)
    if request.method == 'POST':
        pdsystem.delete()
        return redirect('home')
    return render(request, 'pdtic/excluir_pdsystem.html', {'pdsystem': pdsystem})

@login_required
def detalhes_pdsystem(request, pdsystem_id):
    pdsystem = get_object_or_404(PDTIC, id=pdsystem_id)
    metas = pdsystem.metas.all()  
    return render(request, 'pdtic/detalhes_pdsystem.html', {'pdsystem': pdsystem, 'metas': metas})

@login_required
def nova_meta(request, pdsystem_id):
    pdsystem = get_object_or_404(PDTIC, id=pdsystem_id) 
    if request.method == 'POST':
        form = MetaForm(request.POST)
        if form.is_valid():
            nova_meta = form.save(commit=False)
            nova_meta.pdsystem = pdsystem  #Associa a nova meta ao PDTIC
            nova_meta.save()
            return redirect('detalhes_pdsystem', pdsystem_id=pdsystem.id)
    else:
        form = MetaForm()
    return render(request, 'pdtic/nova_meta.html', {'form': form, 'pdsystem': pdsystem})

@login_required
def editar_meta(request, meta_id):
    meta = get_object_or_404(Meta, id=meta_id)
    if request.method == 'POST':
        form = MetaForm(request.POST, instance=meta)
        if form.is_valid():
            form.save()
            return redirect('detalhes_pdsystem', pdsystem_id=meta.pdsystem.id)
    else:
        form = MetaForm(instance=meta)
    return render(request, 'pdtic/editar_meta.html', {'form': form, 'meta': meta})

@login_required
def excluir_meta(request, meta_id):
    meta = get_object_or_404(Meta, id=meta_id)
    if request.method == 'POST':
        meta.delete()
        return redirect('detalhes_pdsystem', pdsystem_id=meta.pdsystem.id)
    return render(request, 'pdtic/excluir_meta.html', {'meta': meta})

@login_required
def nova_acao(request, meta_id):  
    meta = get_object_or_404(Meta, id=meta_id)
    if request.method == 'POST':
        form = AcaoForm(request.POST)
        if form.is_valid():
            nova_acao = form.save(commit=False)
            nova_acao.meta = meta  #Associa a nova ação à meta
            nova_acao.save()
            return redirect('detalhes_pdsystem', pdsystem_id=meta.pdsystem.id)  #Redireciona para os detalhes do PDTIC
    else:
        form = AcaoForm()
    return render(request, 'pdtic/nova_acao.html', {'form': form, 'meta': meta})

@login_required
def editar_acao(request, acao_id):
    acao = get_object_or_404(Acao, id=acao_id)
    if request.method == 'POST':
        form = AcaoForm(request.POST, instance=acao)
        if form.is_valid():
            form.save()
            return redirect('detalhes_pdsystem', pdsystem_id=acao.meta.pdsystem.id)
    else:
        form = AcaoForm(instance=acao)
    return render(request, 'pdtic/editar_acao.html', {'form': form, 'acao': acao})

@login_required
def excluir_acao(request, acao_id):
    acao = get_object_or_404(Acao, id=acao_id)
    if request.method == 'POST':
        acao.delete()
        return redirect('detalhes_pdsystem', pdsystem_id=acao.meta.pdsystem.id)
    return render(request, 'pdtic/excluir_acao.html', {'acao': acao})

@login_required
def upload_pdf(request, pdsystem_id):
    pdsystem = get_object_or_404(PDTIC, id=pdsystem_id) 
    if request.method == 'POST':
        form = DocumentoPDFForm(request.POST, request.FILES)
        if form.is_valid():
            documento_pdf = form.save(commit=False)  
            documento_pdf.pdtic = pdsystem 
            documento_pdf.save()  
            return redirect('detalhes_pdsystem', pdsystem_id=pdsystem.id) 
    else:
        form = DocumentoPDFForm()
    return render(request, 'pdtic/upload_pdf.html', {'form': form, 'pdsystem': pdsystem})