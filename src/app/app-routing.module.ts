import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DemoApisComponent } from './demo-apis/demo-apis.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditarComponent } from './editar/editar.component';
import { CargasigaComponent } from './cargasiga/cargasiga.component';
import { SquadComponent } from './squad/squad.component';
import { EditarsquadComponent } from './squad/editarsquad/editarsquad.component';
import { AgregarsquadComponent } from './squad/agregarsquad/agregarsquad.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarrolComponent } from './rol/editarrol/editarrol.component';
import { RolComponent } from './rol/rol.component';
import { AgregarrolComponent } from './rol/agregarrol/agregarrol.component';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { TribucoeComponent } from './tribucoe/tribucoe.component';
import { AplicativoComponent } from './aplicativo/aplicativo.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'demo-apis', component: DemoApisComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/:id', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'editar/:id', component: EditarComponent, canActivate: [AuthGuard] },
  { path: 'squad/editarsquad/:id', component: EditarsquadComponent, canActivate: [AuthGuard] },
  { path: 'rol/editarrol/:id', component: EditarrolComponent, canActivate: [AuthGuard] },
  { path: 'cargasiga', component: CargasigaComponent, canActivate: [AuthGuard] },
  { path: 'squad', component: SquadComponent, canActivate: [AuthGuard] },
  { path: 'agregarsquad', component: AgregarsquadComponent, canActivate: [AuthGuard] },
  { path: 'agregarrol', component: AgregarrolComponent, canActivate: [AuthGuard] },
  { path: 'rol', component: RolComponent, canActivate: [AuthGuard] },
  {path:  'createAsignar',component: EditarComponent, canActivate: [AuthGuard] },
  { path: 'agregar/:id', component: AgregarComponent, canActivate: [AuthGuard] },
  { path: 'tribucoe', component: TribucoeComponent, canActivate: [AuthGuard] },
  { path: 'aplicativo', component: AplicativoComponent, canActivate: [AuthGuard] },
  { path: 'dialogo-confirmacion', component: DialogoConfirmacionComponent, canActivate: [AuthGuard] },
  {
    path: 'management',
    loadChildren: () =>
      import('./management/management.module').then((m) => m.ManagementModule),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
