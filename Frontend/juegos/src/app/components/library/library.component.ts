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
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  Biblioteca: Library[] = []
  Juegos: Game[] = []
  User: Usuario

  constructor(public GameService: GamesService) { }

  ngOnInit(): void { 
    //llenando usuario
    this.User = this.getCurrentUser('UsuarioLogeado')
    //llenado de juegos
    this.LlenarJuegos()
    //llenado de biblioteca
    this.LlenarBiblioteca()
  }

  LlenarBiblioteca() {
    //llenando usuario
    this.GameService.GetLibrary().subscribe((res: Library[]) => {
      //recorriendo las biblios
      for (var lib of res) {
        if (lib.id_usuario == this.User.id) {
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
