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
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  user_input:string = ''
  email_input:string = ''
  Usuario: Usuario
  Users: Usuario[] = []


  constructor(public LoginService: GamesService, private router: Router) { }

  ngOnInit(): void {
    this.LlenarUsuarios()
  }

  LlenarUsuarios(){
    this.LoginService.GetUsers().subscribe((res: Usuario[]) => {
      this.Users = res
    })
  }

  Verificar(){
    let flag: boolean = false
    for (let user of this.Users) {
      if (this.user_input == user.username && this.email_input == user.correo) {
        flag = true
        this.router.navigate(['/restore/',user.id])
      }
    }
    if(flag == false){
      //no tal hay usuario
      alert('Usuario no encontrado...')
      this.email_input = ''
      this.user_input = ''
    }

  }

}
