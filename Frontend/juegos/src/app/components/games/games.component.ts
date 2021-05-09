import { Component, OnInit } from '@angular/core';
//importacion de servicios
import { GamesService } from '../../services/games.service'

//importacion de modelos
import { Game } from '../../models/game.interface'
import { Consola } from '../../models/consola.interface'

//router
import { ActivatedRoute, RouterLink, Router } from '@angular/router'
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit { 
  
  img:string = 'assets/img/supermario3.jpg'
  SearchGame:string = ''
  SearchConsola:string = ''
  Consolas: Consola[] = []
  Games: Game[] = []

  constructor(public GameService: GamesService, private router: Router) { }

  ngOnInit(): void {
    //se llenan consolas y juegos
    this.ActualzarConsolas()
    this.ActualzarJuegos()
  }

  FiltrarConsola(){
    console.log(this.SearchConsola)
    this.GameService.GetConsola(this.SearchConsola).subscribe((res: Consola[]) => {
      console.log(res)
      this.Consolas = []
      this.Consolas = res
    })
    this.SearchConsola = ''
  }
  FiltrarJuego(){
    this.GameService.GetJuego(this.SearchGame).subscribe((res: Game[]) => {
      console.log(res)
      this.Games = []
      this.Games = res
      if(this.Games.length == 0){
        this.Consolas = []
      }
    })
    this.SearchGame = ''
    
  }

  ActualzarConsolas() {
    //se llenan las consolas al iniciar el componente
    this.GameService.GetConsolas().subscribe((res: Consola[]) => {
      console.log(res)
      this.Consolas = []
      this.Consolas = res
    })
  }
  ActualzarJuegos() {
    //se llenan las consolas al iniciar el componente
    this.GameService.GetGames().subscribe((res: Game[]) => {
      console.log(res)
      this.Games = []
      this.Games = res
    })
  }


}
