import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VoluntariosService } from './../../../../../services/voluntarios.service';
import { Voluntarios } from './../../../../../models/voluntarios';


@Component({
  selector: 'app-volunts',
  templateUrl: './volunts.component.html',
  styleUrls: ['./volunts.component.scss']
})
export class VoluntsComponent implements OnInit {

  volunt = {} as Voluntarios;
  volunts: Voluntarios[];

  constructor(private voluntServ: VoluntariosService) { }

  ngOnInit() {
    this.getVolunt();
  }

  saveVolunt(form: NgForm){
    if(this.volunt.id !== undefined){
      this.voluntServ.updateVolunt(this.volunt).subscribe(() => {
        this.cleanForm(form);
      });
    }else{
      this.voluntServ.saveVolunt(this.volunt).subscribe(() => {
        this.cleanForm(form);
      });
    }
  } // fim do saveVolunt

  // mostra todos os voluntarios registrados
  getVolunt(){
    this.voluntServ.getVolunt().subscribe((volunts: Voluntarios[]) => {
      this.volunts = volunts;
    });
  } // fim do getVolunt

  // servico para apagar um dos voluntarios
  deleteVolunt(volunt: Voluntarios){
    this.voluntServ.deleteVolunt(volunt).subscribe(() =>{
    this.getVolunt();
   });
  } // fim do deleteVolunt

  // edição de algum dado fornecido pelo voluntario
  editVolunt(volunt: Voluntarios){
    this.volunt = { ...volunt };
  } // fim do editVolunt

  // limpar o formulario
  cleanForm(form: NgForm){
    this.getVolunt();
    form.resetForm();
    this.volunt = {} as Voluntarios;
  }

} // fim da classe
