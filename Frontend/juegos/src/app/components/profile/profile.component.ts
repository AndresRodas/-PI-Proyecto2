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

  user: Usuario
  new_nombre: string = ''
  new_apellido: string = ''
  new_username: string = ''
  new_correo: string = ''
  new_password1: string = ''
  new_password2: string = ''
  new_biografia: string = ''
  new_fecha: string = ''

  constructor(public UserService: GamesService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.getCurrentUser('UsuarioLogeado')
    console.log(this.user.nombre)
  }


  Modificar() {
    //validaciones
    if (this.new_nombre != '' && this.new_apellido != '' && this.new_correo != '' && this.new_username != '' && this.new_password1 != '' && this.new_password2 != '' && this.new_fecha != undefined && this.new_biografia != '') {
      if (this.new_password1 == this.new_password2) {
        //realizar actualizacion de datos..
        this.Update()
      } else {
        alert('¡La contraseña no coincide!')
      }
    } else {
      alert('¡Ningun campo puede estar vacío!')
    }
  }

  Update() {
    console.log('actualizar')
    console.log(this.user.id, this.new_nombre, this.new_apellido, this.new_username, this.new_correo, this.new_password1, this.new_biografia, this.new_fecha)
    this.UserService.UpdateUser(this.user.id, this.new_nombre, this.new_apellido, this.new_username, this.new_correo, this.new_password1, this.new_biografia, this.new_fecha)
      .subscribe((res: Usuario[]) => {
        console.log(res)
        this.ActualizarUser()
        this.new_nombre = ''
        this.new_apellido = ''
        this.new_username = ''
        this.new_correo = ''
        this.new_password1 = ''
        this.new_password2 = ''
        this.new_biografia = ''
        this.new_fecha = ''
        alert('Perfil actualizado con exito!! ')
      })
  }

  ActualizarUser() {
    //solicita todos los users
    this.UserService.GetUsers().subscribe((res: Usuario[]) => {
      //se recorren los resultados de la consulta a los usuarios
      for(let user of res){
        if(this.user.id == user.id){
          //se setea en storage el usuario nuevo
          this.setCurrentUser(user)
          this.user = user
        }
      }
    })
  }

  //set Storage
  setCurrentUser(user: Usuario) {
    let user_string = JSON.stringify(user)
    localStorage.setItem('UsuarioLogeado', user_string)
  }

  //get Storage
  getCurrentUser(storage: string) {
    let userCurrent = localStorage.getItem(storage)
    if (!isNullOrUndefined(userCurrent)) {
      let user_json = JSON.parse(userCurrent)
      return user_json
    } else {
      return null
    }
  }



}
