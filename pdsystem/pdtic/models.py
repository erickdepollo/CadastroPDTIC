from django.db import models
from django.contrib.auth.models import User

class PDTIC(models.Model):
    titulo = models.CharField(max_length=200)
    vigencia_inicio = models.DateField()
    vigencia_fim = models.DateField()
    criado_em = models.DateTimeField(auto_now_add=True)
    atualizado_em = models.DateTimeField(auto_now=True)   
    

    def __str__(self):
        return self.titulo


class Meta(models.Model):
    pdsystem = models.ForeignKey(PDTIC, on_delete=models.CASCADE, related_name='metas')
    descricao = models.TextField()
    concluida = models.BooleanField(default=False)

    def __str__(self):
        return self.descricao

class Acao(models.Model):
    meta = models.ForeignKey(Meta, on_delete=models.CASCADE, related_name='acoes')
    descricao = models.TextField()
    concluida = models.BooleanField(default=False)

    def __str__(self):
        return self.descricao
    
class DocumentoPDF(models.Model):
    pdtic = models.ForeignKey(PDTIC, related_name='documentos', on_delete=models.CASCADE, null=True)
    pdf_arquivo = models.FileField(upload_to='pdfs/', null=True, blank=True)

    def __str__(self):
        return self.pdf_arquivo
  