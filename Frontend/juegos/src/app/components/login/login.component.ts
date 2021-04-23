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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //del NgModel
  user_input: string = ''
  pass_input: string = ''
  //de la interfaz
  Users: Usuario[] = []

  constructor( public LoginService: GamesService, private router: Router ) { }

  //funcion para ingresar usuario
  Ingresar():void{
    this.LoginService.GetUsers().subscribe((res:Usuario[])=>{

      let name_temp = ''
      let user_valid:boolean
      this.Users = res
      //se recorren los resultados de la consulta a los usuarios
      for(let user of this.Users){
        console.log(user.nombre)
        if (user.username == this.user_input) {
          if(user.password == this.pass_input) {
            //Se valida el usuario y la contraseña
            user_valid = true
            name_temp = user.username
            //se guarda en el storage
            this.setCurrentUser(user)
          }
        }
      }
      if(user_valid){
        console.log('El Usuario '+name_temp+' es valido')
        alert('Bienvenido de nuevo '+name_temp)
        //Se dirige a la pagina de inicio 
        this.router.navigate(['/home'])
      }else {
        alert('El usuario o la contraseña son incorrectos...')
        this.user_input = ''
        this.pass_input = ''
        console.log('Datos incorrectos')
      }
    })
  }

  NewUser():void{
    this.router.navigate(['/registro'])
  }

  RecoverUser():void{
    this.router.navigate(['/recover'])
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

  ngOnInit(): void { 
    //this.Ingresar()
  }

}
