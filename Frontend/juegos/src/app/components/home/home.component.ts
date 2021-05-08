import { Component, OnInit, ViewChild } from '@angular/core';
//importacion de servicios
import { GamesService } from '../../services/games.service'

//importacion de modelos
import { Usuario } from '../../models/user.interface'
import { Publicacion } from '../../models/post.interface'
import { Comentario } from '../../models/comment.interface'
import { Game } from '../../models/game.interface'

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
  @ViewChild('newComment') newCom;

  SearchUser: string = ''
  SearchGame: string = ''
  Post: Publicacion[] = []
  Comment: Comentario[] = []
  User: Usuario
  Publicacion: string
  Games: Game[] = []

  constructor(public GameService: GamesService, private router: Router) { }

  ngOnInit(): void {
    //se llenan las publicaciones, comentarios y juegos
    this.ActualzarPublicaciones()
    this.ActualizarComentarios()
    this.ActualizarJuegos()

  }

  Buscar() {
    console.log('Buscar')
  }

  //TODO: limpiar los comentarios

  //funcion para agregar comentarios nuevos
  Comentar(pub: Publicacion, Comment: string) {
    if (Comment == '') {
      alert('El cuerpo del comentario no puede estar vacío...')
    } else {
      this.User = this.getCurrentUser('UsuarioLogeado')
      this.GameService.SetComment(this.User.id, pub.id, Comment).subscribe((res: Publicacion) => {
        console.log(res)
        alert('Comentario agregado correctamente!')
        //limpiando input
        Comment = ''
        //actualizando comentarios
        this.ActualizarComentarios()
      })
    }
  }

  Publicar(game: string) {
    if (this.Publicacion == undefined || this.Publicacion == '') {
      alert('Antes escribe algo interesante...')
    } else if (game == 'Seleccione un juego para la publicacion') {
      alert('Antes seleccione algun juego...')
    } else {
      //obteniendo fecha actual
      let date: Date = new Date();
      let fecha:string = date.toISOString().split('T',1)[0]
      //obteniendo usuario actual
      this.User = this.getCurrentUser('UsuarioLogeado')

      this.GameService.SetPost(this.User.id, game, fecha, this.Publicacion)
        .subscribe((res: Publicacion) => {
          console.log(res)
          alert('Tu Publicacion ha sido agregada!')
          //limpiando input
          this.Publicacion = ''
          //actualizando
          this.ActualzarPublicaciones()
          this.ActualizarComentarios()
          this.ActualizarJuegos()
        })
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

  ActualzarPublicaciones() {
    //se llenan los post al iniciar el componente
    this.GameService.GetPosts().subscribe((res: Publicacion[]) => {
      console.log(res)
      this.Post = []
      this.Post = res
    })

  }
  ActualizarComentarios() {
    //se llenan los comebtarios al iniciar el componte
    this.GameService.GetComments().subscribe((res: Comentario[]) => {
      console.log(res)
      this.Comment = []
      this.Comment = res
    })
  }
  ActualizarJuegos() {
    //se llenan los juegos para una nueva publicacion
    this.GameService.GetGames().subscribe((res: Game[]) => {
      console.log(res)
      this.Games = []
      this.Games = res
    })
  }

  FiltrarUsuarios() {
    //se llenan los post al iniciar el componente
    this.GameService.GetPostsUsers(this.SearchUser).subscribe((res: Publicacion[]) => {
      console.log(res)
      this.Post = []
      this.Post = res
    })
    this.SearchUser = ''
  }
  FiltrarJuegos() {
    //se llenan los post al iniciar el componente
    this.GameService.GetPostsGames(this.SearchGame).subscribe((res: Publicacion[]) => {
      console.log(res)
      this.Post = []
      this.Post = res
    })
    this.SearchGame = ''
  }

  Home() {
    //se llenan las publicaciones y los comentarios
    this.ActualzarPublicaciones()
    this.ActualizarComentarios()
  }


}
