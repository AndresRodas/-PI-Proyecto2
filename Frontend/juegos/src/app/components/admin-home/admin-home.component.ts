import { Component, OnInit } from '@angular/core';
//importacion de servicios
import { GamesService } from '../../services/games.service'

//importacion de modelos
import { Query1 } from '../../models/query1.interface'
import { Query2 } from '../../models/query2.interface'
import { Query3 } from '../../models/query3.interface'
import { Query4 } from 'src/app/models/query4.interface';

//router
import { Router } from '@angular/router'
import { RouterLink } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  consulta1: Query1[] = []
  consulta2: Query2[] = []
  consulta3: Query3[] = []
  consulta4: Query4[] = []



  constructor(public GameService: GamesService) { }

  ngOnInit(): void {
    this.Query1()
    this.Query2()
    this.Query3()
    this.Query4()
  }

  Query1() {
    this.consulta1 = []
    //se llenan la consulta 1
    this.GameService.Query1().subscribe((res: Query1[]) => {
      this.consulta1 = res
    })
  }
  Query2() {
    this.consulta2 = []
    //se llenan la consulta 2
    this.GameService.Query2().subscribe((res: Query2[]) => {
      this.consulta2 = res
    })
  }
  Query3() {
    this.consulta3 = []
    //se llenan la consulta 3
    this.GameService.Query3().subscribe((res: Query3[]) => {
      this.consulta3 = res
    })
  }
  Query4() {
    this.consulta4 = []
    //se llena la consulta 4
    this.GameService.Query4().subscribe((res: Query4[]) => {
      this.consulta4 = res
    })
  }

}
