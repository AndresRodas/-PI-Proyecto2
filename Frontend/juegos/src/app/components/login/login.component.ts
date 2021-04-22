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

  Ingresar():void{
    this.LoginService.GetUsers().subscribe((res:Usuario[])=>{
      console.log(res)

    })
  }
  NewUser():void{
    this.LoginService.GetUsers().subscribe((res:Usuario[])=>{
      console.log(res)

    })
  }

  ngOnInit(): void { 
    //this.Ingresar()
  }

}
