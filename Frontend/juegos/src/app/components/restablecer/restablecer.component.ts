import { Component, OnInit } from '@angular/core';
//importacion de servicios
import { GamesService } from '../../services/games.service'

//importacion de modelos
import { Game } from '../../models/game.interface'
import { Usuario } from '../../models/user.interface'

//router
import { ActivatedRoute, RouterLink, Router } from '@angular/router'
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.component.html',
  styleUrls: ['./restablecer.component.css']
})
export class RestablecerComponent implements OnInit {

  id:number = undefined
  pass1: string = ''
  pass2: string = ''


  constructor(public GameService: GamesService, private activedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
     //obteniendo el parametro
     this.id = this.activedRoute.snapshot.params.id;
     console.log(this.id)
  }

  Restablecer(){
    if(this.pass1 != '' && this.pass2 != '' && this.pass2 == this.pass1){
      this.GameService.UpdatePass(this.id, this.pass1)
      .subscribe((res: Usuario[]) => {
        alert('La contraseña se ha restablecido!! ')
        this.router.navigate(['/'])
      })
    }else{
      alert('Las contraseñas deben ser iguales...')
      this.pass1 = ''
      this.pass2 = ''
    }
  }

}
