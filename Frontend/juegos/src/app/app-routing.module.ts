import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

//importar a mano!
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

//aqui se colocan las rutas!
const routes: Routes = [
  {
    path:'home', 
    component:HomeComponent
  },{
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
