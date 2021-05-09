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
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  id_game: number
  Opinion: string = ''
  User: Usuario
  Juego: Game = {
    id: 0,
    id_consola: 0,
    nombre: '',
    descripcion: '',
    cartucho: '',
    fecha: ''
  }
  Consola: string = ''

  constructor(public GameService: GamesService, private activedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //obteniendo el parametro
    this.id_game = this.activedRoute.snapshot.params.id;
    //llenando contenido de juego
    this.LlenarJuego()
    //llenado de consolas
    this.LlenarConsolas()
    //obteniendo usuario actual
    this.User = this.getCurrentUser('UsuarioLogeado')
  }

  LlenarJuego() {
    this.GameService.GetGame(this.id_game).subscribe((res: Game) => {
      this.Juego = res[0]
    })
  }

  LlenarConsolas() {
    this.GameService.GetConsolas().subscribe((res: Consola[]) => {
      //for para capturar el nombre de consola
      for (var consola of res) {
        if (this.Juego.id_consola == consola.id) {
          this.Consola = consola.nombre
        }
      }
    })
  }

  GuardarJuego(valor:number){
    if(this.Opinion != '' && valor > 0){
      this.GameService.SetLibrary(this.User.id, this.Juego.id, valor, this.Opinion).subscribe((res: Library) => {
        console.log(res)
        alert('El juego ha sido agregado a tu biblioteca!!')
      })
    }else{
      alert('Antes escribe una opinión y selecciona una puntuacion...')
    }
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
