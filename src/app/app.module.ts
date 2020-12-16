import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { VoluntariosComponent } from './pages/voluntarios/voluntarios.component';
import { ParticipantesComponent } from './pages/participantes/participantes.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { TableVoluntComponent } from './pages/table-volunt/table-volunt.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent,
    ContatoComponent,
    ServicosComponent,
    SobreComponent,
    VoluntariosComponent,
    ParticipantesComponent,
    AdminComponent,
    LoginComponent,
    TableVoluntComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
