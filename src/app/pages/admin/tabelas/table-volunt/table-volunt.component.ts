import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Voluntarios } from './../../../../models/voluntarios';
import { VoluntariosService } from './../../../../services/voluntarios.service';

@Component({
  selector: 'app-table-volunt',
  templateUrl: './table-volunt.component.html',
  styleUrls: ['./table-volunt.component.scss']
})
export class TableVoluntComponent implements OnInit {

  volunt = {} as Voluntarios;
  volunts: Voluntarios[];

  constructor(private voluntServ: VoluntariosService) { }

  ngOnInit() {
    this.getVolunt();
  }

  salvarVoluntario(form: NgForm){
    if(this.volunt.id !== undefined){
      this.voluntServ.updateVolunt(this.volunt).subscribe(() => {
        alert(`O voluntário foi atualizado com sucesso.`);
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
