import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public mensagem;
  public nome;
  public cpf;
  public celular;
  public email;
  public senha;
  public confirmarsenha;
  public data;
  public formulario;

  constructor() { }

  public salvar(){
    this.formulario = this.nome;
    this.formulario = this.cpf;
    this.formulario = this.celular;
    this.formulario = this.email;
    this.formulario = this.senha;
    this.formulario = this.confirmarsenha;
    this.formulario = this.data;
    
 
    if (this.formulario == null){
      this.mensagem = "CADASTRO INCOMPLETO...";
    }
    else {
      this.mensagem  = "CADASTRO CONCLUÍDO!";
    }
  }

  public apagar (){
    this.mensagem = null;
    this.nome = null;
    this.cpf = null;
    this.celular = null;
    this.email = null;
    this.senha = null;
    this.confirmarsenha = null;
    this.data = null;
  }

  ngOnInit() {
  }

}