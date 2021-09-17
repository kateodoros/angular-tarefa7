import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { HorariosService } from './horarios.service';
import { NotasComponent } from './notas/notas.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'disciplinas', component: DisciplinasComponent },
      { path: 'notas', component: NotasComponent }
    ]) 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    HomeComponent,
    NavbarComponent,
    DisciplinasComponent,
    NotasComponent   ],

  bootstrap:    [ AppComponent ],
  providers: [ HorariosService ]
})
export class AppModule { }
