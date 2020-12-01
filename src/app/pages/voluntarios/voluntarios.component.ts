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

 constructor() {}

  ngOnInit(){

  }


} // fim da classe
