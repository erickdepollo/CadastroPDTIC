from django.contrib import admin

from .models import PDTIC, Meta, Acao

@admin.register(PDTIC)
class PDTICAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'vigencia_inicio', 'vigencia_fim', 'criado_em', 'atualizado_em')
    search_fields = ('titulo',)
    list_filter = ('vigencia_inicio', 'vigencia_fim')

@admin.register(Meta)
class MetaAdmin(admin.ModelAdmin):
    list_display = ('descricao', 'pdsystem', 'concluida')
    search_fields = ('descricao',)
    list_filter = ('concluida', 'pdsystem')

@admin.register(Acao)
class AcaoAdmin(admin.ModelAdmin):
    list_display = ('descricao', 'meta', 'concluida')
    search_fields = ('descricao',)
    list_filter = ('concluida', 'meta')
