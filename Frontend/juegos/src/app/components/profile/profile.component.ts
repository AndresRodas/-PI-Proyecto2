import { Component, OnInit } from '@angular/core';
//importacion de servicios
import { GamesService } from '../../services/games.service'

//importacion de modelos
import { Usuario } from '../../models/user.interface'

//router
import { Router } from '@angular/router'
import { RouterLink } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:Usuario

  constructor(public UserService: GamesService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.getCurrentUser('UsuarioLogeado')
    console.log(this.user.nombre)
  }

   //set Storage
   setCurrentUser(user:Usuario){
    let user_string = JSON.stringify(user)
      localStorage.setItem('UsuarioLogeado',user_string) 
    }
  
    //get Storage
    getCurrentUser(storage:string){
      let userCurrent = localStorage.getItem(storage)
      if (!isNullOrUndefined(userCurrent)) {
        let user_json = JSON.parse(userCurrent)
        return user_json
      } else {
        return null
      }
    }
  Modificar(){
    console.log('Modificando usuario...')
  }
  ToGames(){
    this.router.navigate(['/games'])
  }
  ToUsers(){
    this.router.navigate(['/users'])
  }
  ToLibrary(){
    this.router.navigate(['/library'])
  }
  ToProfile(){
    this.router.navigate(['/profile'])
  }
  Logout(){
    this.router.navigate(['/login'])
  }


}
