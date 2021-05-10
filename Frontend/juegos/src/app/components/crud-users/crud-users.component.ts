import { Component, OnInit } from '@angular/core';
//importacion de servicios
import { GamesService } from '../../services/games.service'

//importacion de modelos
import { Usuario } from '../../models/user.interface'


@Component({
  selector: 'app-crud-users',
  templateUrl: './crud-users.component.html',
  styleUrls: ['./crud-users.component.css']
})
export class CrudUsersComponent implements OnInit {

  //datos create user
  new_nombre: string = ''
  new_apellido: string = ''
  new_username: string = ''
  new_correo: string = ''
  new_pass1: string = ''
  new_pass2: string = ''
  new_fecha: string = ''
  new_bio: string = ''

  //datos update user
  up_id: number = undefined
  up_nombre: string = ''
  up_apellido: string = ''
  up_username: string = ''
  up_correo: string = ''
  up_pass1: string = ''
  up_pass2: string = ''
  up_fecha: string = ''
  up_bio: string = ''

  //datos delete user
  del_id:number = undefined

  Users:Usuario[] = []

  constructor(public GameService: GamesService) { }

  ngOnInit(): void {
    //llenando read inicial
    this.ReadUsers()
  }

  //validando los datos de entrada
  CreateUser(){
    if(this.new_nombre != '' && this.new_apellido != '' && this.new_username != '' && this.new_correo != '' && this.new_pass1 != '' && this.new_pass2 != '' && this.new_bio != '' && this.new_fecha != ''){
      this.VerificarUser()
    }else{
      alert('Los campos no pueden estar vacíos!')
    }
  }
  //verificacion de datos de nuevo usuario
  VerificarUser(){
    //consultando users
    this.GameService.GetUsers().subscribe((res:Usuario[])=>{

      let user_valid:boolean
      this.Users = res
      //comprobando que usuario no exista
      for(let user of this.Users){
        console.log(user.nombre)
        if (user.username == this.new_username) {
          user_valid = true;
        }
      }
      //validando que las contraseñas sean iguales
      if(this.new_pass1 == this.new_pass2){
        //validando user
        if (user_valid){
          alert('El nombre de usuario no esta disponible!')
          this.new_username = ''
        }else{
          //creando usuario
          this.CrearUser()
        }
      }else{
        alert('Las constraseñas no coinciden!')
        this.new_pass1 = ''
        this.new_pass2 = ''
      }
    })
    
  }
  //Creacion de nuevo usuario
  CrearUser(){
    console.log('Crear usuario!!')
    this.GameService.SetUsers(this.new_nombre, this.new_apellido, this.new_username, this.new_correo, this.new_pass1, this.new_bio,this.new_fecha)
    .subscribe((res: Usuario[]) =>{
      this.Users = res;
      console.log(this.Users)
      this.new_nombre = ''
      this.new_apellido = ''
      this.new_username = ''
      this.new_correo = ''
      this.new_pass1 = ''
      this.new_pass2 = ''
      this.new_fecha = ''
      this.new_bio = ''
      alert('Usuario registrado con exito!! ')
    })
    
  }

  //lectura de usuers
  ReadUsers(){
    //limpiando usuarios
    this.Users = []
    //agregando a la lista
    this.GameService.GetUsers().subscribe((res:Usuario[])=>{
      console.log(res)
      console.log(res.slice(1))
      this.Users = res.slice(1)
    })
  }

  //modificar update user
  UpdateUser() {
    //validaciones
    if (this.up_nombre != '' && this.up_apellido != '' && this.up_correo != '' && this.up_username != '' && this.up_pass1 != '' && this.up_pass2 != '' && this.up_fecha != undefined && this.up_bio != '') {
      if (this.up_pass1 == this.up_pass2) {
        //realizar actualizacion de datos..
        this.Modificar()
      } else {
        alert('¡La contraseña no coincide!')
      }
    } else {
      alert('¡Ningun campo puede estar vacío!')
    }
  }
  Modificar() {
    console.log('actualizar')
    console.log(this.up_id, this.up_nombre, this.up_apellido, this.up_username, this.up_correo, this.up_pass1, this.up_bio, this.up_fecha)
    this.GameService.UpdateUser(this.up_id, this.up_nombre, this.up_apellido, this.up_username, this.up_correo, this.up_pass1, this.up_bio, this.up_fecha)
      .subscribe((res: Usuario[]) => {
        console.log(res)
        this.ReadUsers()
        this.up_id = undefined
        this.up_nombre = ''
        this.up_apellido = ''
        this.up_username = ''
        this.up_correo = ''
        this.up_pass1 = ''
        this.up_pass2 = ''
        this.up_bio = ''
        this.up_fecha = ''
        alert('Perfil actualizado con exito!! ')
      })
  }
  
  DeleteUser(){

    console.log('Eliminando')
    this.GameService.DeleteUser(this.del_id).subscribe((res:Usuario[])=>{
      console.log(res) 
      this.del_id = undefined
      this.ReadUsers()
      alert('Usuario eliminado con exito!! ')

    })

  }

}
