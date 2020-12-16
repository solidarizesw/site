import { Component, OnInit } from '@angular/core';
import { Projetos } from './../../models/projetos';
import { ProjetosService } from './../../services/projetos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  proj = {} as Projetos;
  projs: Projetos[];

  constructor(private projServ: ProjetosService) {}

 ngOnInit(){
   this.getProj();
  }

  // apenas salvar o projeto
  salvarProjeto(form: NgForm){
    if(this.proj.id !== undefined){
      this.projServ.updateProj(this.proj).subscribe(() => {
        this.cleanForm(form);
      });
    }else{
      this.projServ.saveProj(this.proj).subscribe(() => {
        this.cleanForm(form);
      });
    }
  } // fim do salvarProjeto

  // mostra todos os projetos registrados
  getProj(){
    this.projServ.getProj().subscribe((projs: Projetos[]) => {
      this.projs = projs;
    });
  } // fim do getProj


  // limpar o formulario
  cleanForm(form: NgForm){
    this.getProj();
    form.resetForm();
    this.proj = {} as Projetos;
  }


} // fim da classe
