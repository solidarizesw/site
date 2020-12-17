import { Component, OnInit } from '@angular/core';
import { Voluntarios } from './../../models/voluntarios';
import { VoluntariosService } from './../../services/voluntarios.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.css']
})

export class VoluntariosComponent implements OnInit {
  volunt = {} as Voluntarios;
  volunts: Voluntarios[];

  constructor(private voluntServ: VoluntariosService) {}

 ngOnInit(){
   this.getVolunt();
  }

  // apenas salvar o voluntario
  salvarVoluntario(form: NgForm){
    if(this.volunt.id !== undefined){
      this.voluntServ.updateVolunt(this.volunt).subscribe(() => {
        this.cleanForm(form);
      });
    }else{
      this.voluntServ.saveVolunt(this.volunt).subscribe(() => {
        alert(`O voluntário foi cadastrado com sucesso.`);
        this.cleanForm(form);
      });
    }
  } // fim do sakvarVoluntario

  // mostra todos os voluntarios registrados
  getVolunt(){
    this.voluntServ.getVolunt().subscribe((volunts: Voluntarios[]) => {
      this.volunts = volunts;
    });
  } // fim do getVolunt


  // limpar o formulario
  cleanForm(form: NgForm){
    this.getVolunt();
    form.resetForm();
    this.volunt = {} as Voluntarios;
  }


} // fim da classe
