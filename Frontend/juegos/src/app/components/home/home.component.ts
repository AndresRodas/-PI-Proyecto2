import { Component, OnInit } from '@angular/core';
//importacion de servicios
import { GamesService } from '../../services/games.service'

//importacion de modelos
import { Usuario } from '../../models/user.interface'
import { Publicacion } from '../../models/post.interface'
import { Comentario } from '../../models/comment.interface'

//router
import { Router } from '@angular/router'
import { RouterLink } from '@angular/router';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search: string = ''
  Post: object[] = []
  Comment: object[] = []
  Comentario: object[] = [
    {
      user: 'Juan',
      coment: 'Me gusta mucho tambien pero la segunda version fue decepcionante..'
    },
    {
      user: 'Alu',
      coment: 'Concuerdo con juan!'
    },
  ]

  constructor(public ProductService: GamesService, private router: Router) { }

  ngOnInit(): void {
    //se llenan los post al iniciar el componente
    this.ProductService.GetPosts().subscribe((res:Publicacion[])=>{
      console.log(res)
      this.Post = res
    })
    //se llenan los comebtarios al iniciar el componte
    this.ProductService.GetComments().subscribe((res:Comentario[])=>{
      console.log(res)
      this.Comment = res
    })
  }
  Buscar(){
    console.log('Buscar')
  }
  Detalle(pub: object){
    console.log(pub)
  }
  addCar(name: string){
    console.log(name)
  }

}
