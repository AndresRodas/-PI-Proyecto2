import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";

//se van agregando componentes segun se crean
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< Updated upstream
=======
import { RegistroComponent } from './components/registro/registro.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { GamesComponent } from './components/games/games.component';
import { UsersComponent } from './components/users/users.component';
import { LibraryComponent } from './components/library/library.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GameComponent } from './components/game/game.component';
import { UserComponent } from './components/user/user.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CrudUsersComponent } from './components/crud-users/crud-users.component';
import { CrudGamesComponent } from './components/crud-games/crud-games.component';
import { RestablecerComponent } from './components/restablecer/restablecer.component';
>>>>>>> Stashed changes

@NgModule({  
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< Updated upstream
    HomeComponent
=======
    HomeComponent,
    RegistroComponent,
    RecuperarComponent,
    GamesComponent,
    UsersComponent,
    LibraryComponent,
    ProfileComponent,
    GameComponent,
    UserComponent,
    AdminHomeComponent,
    CrudUsersComponent,
    CrudGamesComponent,
    RestablecerComponent  
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
