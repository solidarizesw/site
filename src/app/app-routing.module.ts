import { ContatoComponent } from './pages/contato/contato.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// a partir daqui
import { HeaderComponent } from './pages/header/header.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ParticipantesComponent } from './pages/participantes/participantes.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { VoluntariosComponent } from './pages/voluntarios/voluntarios.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { VoluntsComponent } from './pages/admin/tabelas/volunts/volunts/volunts.component';
import { ProjsComponent } from './pages/admin/tabelas/projs/projs/projs.component';


const routes: Routes = [
  {path : '', component: HeaderComponent},
  {path : 'sobre', component: SobreComponent },
  {path : 'participantes', component : ParticipantesComponent},
  {path : 'servicos', component: ServicosComponent},
  {path : 'voluntarios', component : VoluntariosComponent},
  {path : 'cadastro_proj', component : CadastroComponent},
  {path : 'contato', component: ContatoComponent},
  {path : 'admin', component: AdminComponent},
  {path : 'login', component: LoginComponent},
  {path : 'volunts', component: VoluntsComponent},
  {path : 'projs', component: ProjsComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
