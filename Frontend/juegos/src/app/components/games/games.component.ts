import { Component, OnInit } from '@angular/core';
//importacion de servicios
import { GamesService } from '../../services/games.service'

//importacion de modelos
import { Game } from '../../models/game.interface'
import { Consola } from '../../models/consola.interface'

//router
import { Router } from '@angular/router'
import { RouterLink } from '@angular/router';
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
  }

  FiltrarConsola(){
    console.log('consola')
  }
  FiltrarJuego(){
    console.log('juego')
  }



}
