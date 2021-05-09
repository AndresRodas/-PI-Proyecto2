import { Component, OnInit } from '@angular/core';
//importacion de servicios
import { GamesService } from '../../services/games.service'

//importacion de modelos
import { Usuario } from '../../models/user.interface'



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Users: Usuario[] = []

  constructor(public GameService: GamesService) { }

  ngOnInit(): void {
    this.LlenarUsers()
  }

  LlenarUsers(){
    this.GameService.GetUsers().subscribe((res:Usuario[])=>{
      console.log(res)
      console.log(res.slice(1))
      this.Users = res.slice(1)
    })
  }

}
