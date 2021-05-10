import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

//importar a mano!
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< Updated upstream
=======
import { RegistroComponent } from './components/registro/registro.component'
import { RecuperarComponent } from './components/recuperar/recuperar.component'
import { GamesComponent } from './components/games/games.component'
import { LibraryComponent } from './components/library/library.component'
import { ProfileComponent } from './components/profile/profile.component'
import { UsersComponent } from './components/users/users.component'
import { GameComponent } from './components/game/game.component'
import { UserComponent } from './components/user/user.component'
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CrudUsersComponent } from './components/crud-users/crud-users.component';
import { CrudGamesComponent } from './components/crud-games/crud-games.component';
import { RestablecerComponent } from './components/restablecer/restablecer.component';

>>>>>>> Stashed changes

//aqui se colocan las rutas!
const routes: Routes = [
  {
<<<<<<< Updated upstream
    path:'home', 
    component:HomeComponent
  },{
    path:'login',
    component: LoginComponent
=======
    path:'', 
    component:LoginComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'registro',
    component: RegistroComponent
  }, {
    path: 'recover',
    component: RecuperarComponent
  }, {
    path: 'restore/:id',
    component: RestablecerComponent
  }, {
    path: 'games',
    component: GamesComponent
  },{
    path: 'game/:id',
    component: GameComponent
  },{
    path: 'library',
    component: LibraryComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: 'users',
    component: UsersComponent
  }, {
    path: 'user/:id',
    component: UserComponent
  }, {
    path: 'admin',
    component: AdminHomeComponent
  }, {
    path: 'CRUD/users',
    component: CrudUsersComponent
  }, {
    path: 'CRUD/games',
    component: CrudGamesComponent
>>>>>>> Stashed changes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
