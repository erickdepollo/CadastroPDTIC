from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', views.login_view, name='login'),
    path('home/', views.home, name='home'),
    path('logout/', views.logout_view, name='logout'),
    path('pdtic/<int:pdsystem_id>/', views.detalhes_pdsystem, name='detalhes_pdsystem'),
    path('pdtic/<int:pdsystem_id>/nova_meta/', views.nova_meta, name='nova_meta'),
    path('meta/<int:meta_id>/nova_acao/', views.nova_acao, name='nova_acao'),
    path('pdtic/novo/', views.novo_pdsystem, name='novo_pdsystem'),
    path('pdsystem/editar/<int:pdsystem_id>/', views.editar_pdsystem, name='editar_pdsystem'),
    path('pdsystem/excluir/<int:pdsystem_id>/', views.excluir_pdsystem, name='excluir_pdsystem'),
    path('meta/editar/<int:meta_id>/', views.editar_meta, name='editar_meta'),
    path('meta/excluir/<int:meta_id>/', views.excluir_meta, name='excluir_meta'),
    path('acao/editar/<int:acao_id>/', views.editar_acao, name='editar_acao'),
    path('acao/excluir/<int:acao_id>/', views.excluir_acao, name='excluir_acao'),
    path('upload_pdf/<int:pdsystem_id>', views.upload_pdf, name='upload_pdf')
]

