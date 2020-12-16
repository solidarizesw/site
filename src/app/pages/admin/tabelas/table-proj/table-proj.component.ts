import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Projetos } from './../../../../models/projetos';
import { ProjetosService } from './../../../../services/projetos.service';

@Component({
  selector: 'app-table-proj',
  templateUrl: './table-proj.component.html',
  styleUrls: ['./table-proj.component.scss']
})
export class TableProjComponent implements OnInit {

  proj = {} as Projetos;
  projs: Projetos[];

  constructor(private projServ: ProjetosService) { }

  ngOnInit() {
    this.getProj();
  }
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
  } // fim do saveProj

  // mostra todos os projetos registrados
  getProj(){
    this.projServ.getProj().subscribe((projs: Projetos[]) => {
      this.projs = projs;
    });
  } // fim do getProj

  // servico para apagar um dos projetos
deleteProj(proj: Projetos){
  this.projServ.deleteProj(proj).subscribe(() =>{
    this.getProj();
  });
} // fim do deleteProj

// edição de algum dado fornecido pelo voluntario
editProj(proj: Projetos){
  this.proj = { ...proj };
} // fim do editVolunt

// limpar o formulario
cleanForm(form: NgForm){
  this.getProj();
  form.resetForm();
  this.proj = {} as Projetos;
}

} // fim da classe
