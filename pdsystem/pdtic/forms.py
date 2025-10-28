from django import forms
from .models import PDTIC, Meta, Acao, DocumentoPDF

class PDTICForm(forms.ModelForm):
    class Meta:
        model = PDTIC
        fields = ['titulo', 'vigencia_inicio', 'vigencia_fim']

class MetaForm(forms.ModelForm):
    class Meta:
        model = Meta
        fields = ['descricao', 'concluida']

class AcaoForm(forms.ModelForm):
    class Meta:
        model = Acao
        fields = ['descricao', 'concluida']

class DocumentoPDFForm(forms.ModelForm):
    class Meta:
        model = DocumentoPDF
        fields = ['pdf_arquivo']
        
    def clean_arquivo(self):
        pdf_arquivo = self.cleaned_data.get('pdf_arquivo', False)
        if pdf_arquivo:
            if not pdf_arquivo.name.endswith('.pdf'):
                raise forms.ValidationError("Somente arquivos PDF são permitidos.")
            if pdf_arquivo.size > 5*1024*1024:
                raise forms.ValidationError("O arquivo não pode ser maior que 5MB.")
        return pdf_arquivo