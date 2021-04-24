import { Component, OnInit } from '@angular/core';
//importacion de servicios
import { GamesService } from '../../services/games.service'

//importacion de modelos
import { Usuario } from '../../models/user.interface'

//router
import { Router } from '@angular/router'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //datos de entrada
  name_in: string = ''
  lname_in: string = ''
  user_in: string = ''
  email_in: string = ''
  pass_in: string = ''
  pass_in_v: string = ''
  fecha_in: string = ''
  bio_in: string = ''
  Users: Usuario[] = []

  constructor( public LoginService: GamesService, private router: Router ) { }

  ngOnInit(): void {
  }
  //verificacion de datos de nuevo usuario
  VerificarUser(){
    //consultando users
    this.LoginService.GetUsers().subscribe((res:Usuario[])=>{

      let user_valid:boolean
      this.Users = res
      //comprobando que usuario no exista
      for(let user of this.Users){
        console.log(user.nombre)
        if (user.username == this.user_in) {
          user_valid = true;
        }
      }
      //validando que las contraseñas sean iguales
      if(this.pass_in == this.pass_in_v){
        //validando user
        if (user_valid){
          alert('El nombre de usuario no esta disponible!')
          this.user_in = ''
        }else{
          //creando usuario
          this.CrearUser()
        }
      }else{
        alert('Las constraseñas no coinciden!')
        this.pass_in = ''
        this.pass_in_v = ''
      }
    })
    
  }
  //Creacion de nuevo usuario
  CrearUser(){
    console.log('Crear usuario!!')
    this.LoginService.SetUsers(this.name_in, this.lname_in, this.user_in, this.email_in, this.pass_in, this.bio_in,this.fecha_in)
    .subscribe((res: Usuario[]) =>{
      this.Users = res;
      console.log(this.Users)
      this.name_in = ''
      this.lname_in = ''
      this.user_in = ''
      this.email_in = ''
      this.pass_in = ''
      this.pass_in_v = ''
      this.fecha_in = ''
      this.bio_in = ''
      alert('Usuario registrado con exito!! ')
      this.router.navigate(['/login'])
    })
    
  }

}
