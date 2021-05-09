import { Component, OnInit } from '@angular/core';
//importacion de servicios
import { GamesService } from '../../services/games.service'

//importacion de modelos
import { Game } from '../../models/game.interface'
import { Consola } from '../../models/consola.interface'
import { Usuario } from '../../models/user.interface';
import { Library } from 'src/app/models/library.interface';

//router
import { ActivatedRoute, RouterLink, Router } from '@angular/router'
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id_user: number
  Biblioteca: Library[] = []
  Juegos: Game[] = []
  User: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    username: '',
    correo: '',
    password: '',
    biografia: '',
    fecha: ''
  }

  constructor(public GameService: GamesService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //obteniendo el parametro
    this.id_user = this.activedRoute.snapshot.params.id;
    //llenando usuario
    this.LlenarUsuario()
    //llenando biblioteca de usuario
    this.LlenarBiblioteca()
    //llenando juegos
    this.LlenarJuegos()
  }

  LlenarUsuario() {
    //llenando usuario
    this.GameService.GetUsers().subscribe((res: Usuario[]) => {
      //recorriendo los usuarios
      for (var us of res) {
        if (us.id == this.id_user) {
          this.User = us
        }
      }
    })
  }

  LlenarBiblioteca() {
    //llenando usuario
    this.GameService.GetLibrary().subscribe((res: Library[]) => {
      //recorriendo las biblios
      for (var lib of res) {
        if (lib.id_usuario == this.id_user) {
          //add bilbiotecas
          this.Biblioteca.push(lib)
        }
      }
    })
  }

  LlenarJuegos() {
    //llenando usuario
    this.GameService.GetGames().subscribe((res: Game[]) => {
      //recorriendo los usuarios
      this.Juegos = res
    })
  }


}
