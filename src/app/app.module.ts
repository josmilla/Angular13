import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoreModule } from './core/core.module';
 
 
 
import { MatTableModule, } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DemoApisComponent } from './demo-apis/demo-apis.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditarComponent } from './editar/editar.component';
import { CargasigaComponent } from './cargasiga/cargasiga.component';
import { SquadComponent } from './squad/squad.component';
import { TribucoeComponent } from './tribucoe/tribucoe.component';
import { RolComponent } from './rol/rol.component';
import { EditarsquadComponent } from './squad/editarsquad/editarsquad.component';
import { AgregarsquadComponent } from './squad/agregarsquad/agregarsquad.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { EditarrolComponent } from './rol/editarrol/editarrol.component';
import { AgregarrolComponent } from './rol/agregarrol/agregarrol.component';
import { AplicativoComponent } from './aplicativo/aplicativo.component';
import { AgregaraplicativoComponent } from './aplicativo/agregaraplicativo/agregaraplicativo.component';
import { EditaraplicativoComponent } from './aplicativo/editaraplicativo/editaraplicativo.component';
import { NgChartsModule } from 'ng2-charts';
 

import { AgregartribuComponent } from './tribucoe/agregartribu/agregartribu.component';
import { EditartribuComponent } from './tribucoe/editartribu/editartribu.component';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DemoApisComponent,
    DashboardComponent,
    EditarComponent,
    CargasigaComponent,
    SquadComponent,
    TribucoeComponent,
    RolComponent,
    EditarsquadComponent,
    AgregarsquadComponent,
    AgregarComponent,
    DialogoConfirmacionComponent,
    EditarrolComponent,
    AgregarrolComponent,
    AplicativoComponent,
    AgregaraplicativoComponent,
    EditaraplicativoComponent,
    AgregartribuComponent,
    EditartribuComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatIconModule,
    NgChartsModule,
    
 
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
