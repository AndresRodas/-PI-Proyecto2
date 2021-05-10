import { Component, OnInit } from '@angular/core';
//importacion de servicios
import { GamesService } from '../../services/games.service'

//importacion de modelos
import { Game } from '../../models/game.interface'

@Component({
  selector: 'app-crud-games',
  templateUrl: './crud-games.component.html',
  styleUrls: ['./crud-games.component.css']
})
export class CrudGamesComponent implements OnInit {


  //datos create juego
  new_consola: number = undefined
  new_nombre: string = ''
  new_descripcion: string = ''
  new_cartucho: string = ''
  new_fecha: string = ''


  //datos update juego
  up_id: number = undefined
  up_consola: number = undefined
  up_nombre: string = ''
  up_descripcion: string = ''
  up_cartucho: string = ''
  up_fecha: string = ''

  //datos delete user
  del_id: number = undefined

  Games: Game[] = []

  constructor(public GameService: GamesService) { }

  ngOnInit(): void {
    //llenando read inicial
    this.ReadGames()
  }

  //validando los datos de entrada
  CreateGame() {
    if (this.new_consola != undefined && this.new_nombre != '' && this.new_descripcion != '' && this.new_cartucho != '' && this.new_fecha != '') {
      //creando juego
      this.CrearGame()
    } else {
      alert('Los campos no pueden estar vacíos!')
    }
  }

  //Creacion de nuevo juego
  CrearGame() {
    this.GameService.SetGame(this.new_consola, this.new_nombre, this.new_descripcion, this.new_cartucho, this.new_fecha)
      .subscribe((res: Game[]) => {
        this.Games = res;
        this.new_consola = undefined
        this.new_nombre = ''
        this.new_descripcion = ''
        this.new_cartucho = ''
        this.new_fecha = ''
        alert('Juego registrado con exito!! ')
      })

  }

  //lectura de juegos
  ReadGames() {
    //limpiando juegos
    this.Games = []
    //agregando a la lista
    this.GameService.GetGames().subscribe((res: Game[]) => {
      
      this.Games = res
    })
  }

  //modificar update game
  UpdateGame() {
    //validaciones
    if (this.up_id != undefined && this.up_consola != undefined && this.up_nombre != '' && this.up_descripcion != '' && this.up_cartucho != '' && this.up_fecha != '') {
      this.Modificar()
    } else {
      alert('¡Ningun campo puede estar vacío!')
    }
  }
  Modificar() {
    this.GameService.UpdateGame(this.up_id, this.up_consola, this.up_nombre, this.up_descripcion, this.up_cartucho, this.up_fecha)
      .subscribe((res: Game[]) => {
        this.ReadGames()
        this.up_id = undefined
        this.up_consola = undefined
        this.up_nombre = ''
        this.up_descripcion = ''
        this.up_cartucho = ''
        this.up_fecha = ''
        alert('Juego actualizado con exito!! ')
      })
  }

  DeleteGame() {
    this.GameService.DeleteGame(this.del_id).subscribe((res: Game[]) => {
      this.del_id = undefined
      this.ReadGames()
      alert('Juego eliminado con exito!! ')

    })

  }
}
