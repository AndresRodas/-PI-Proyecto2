import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class GamesService {

  constructor( private http: HttpClient ) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })
  
  //Obtener usuarios
  GetUsers(){
    const url = 'http://localhost:3600/getUsers';
    return this.http.get(url);
  }
  //obtener publicaciones
  GetPosts(){ 
    const url = 'http://localhost:3600/getPosts';
    return this.http.get(url);
  }
  //obtener publicaciones por filtro usuarios
  GetPostsUsers(username:string){ 
    const url = 'http://localhost:3600/getPubliUsers'+username;
    return this.http.get(url);
  }

  //obtener publicaciones por filtro juegos
  GetPostsGames(nombre:string){ 
    const url = 'http://localhost:3600/getPubliGames'+nombre;
    return this.http.get(url);
  }

  //obtener comentarios
  GetComments(){ 
    const url = 'http://localhost:3600/getComments';
    return this.http.get(url);
  }

  //crear usuarios
  SetUsers(name: string, last_name:string, user:string, email: string, pass: string, bio: string, fecha: string){
    const url = 'http://localhost:3600/setUsers'
    return this.http.post(
      url, 
      {
        "name": name,
        "last_name": last_name,
        'user': user,
        'email': email,
        'pass': pass,
        'bio': bio,
        'fecha': fecha,
      },
      {
        headers: this.headers
      }
    ).pipe(map(data => data))   
  }

  //crear comentarios
  SetComment(user: number, post: number, comment: string){
    const url = 'http://localhost:3600/setComments'
    return this.http.post(
      url, 
      {
        'id_usuario': user,
        'id_publicacion': post,
        'comentario': comment
      },
      {
        headers: this.headers
      }
    ).pipe(map(data => data))
  }

  //crear publicaciones
  SetPost(user:number, juego:number, fecha:string, cuerpo:string){
    const url = 'http://localhost:3600/setPosts'
    return this.http.post(
      url, 
      {
        'id_usuario': user,
        'id_juego': juego,
        'fecha': fecha,
        'comentario':cuerpo
      },
      {
        headers: this.headers
      }
    ).pipe(map(data => data))
  }



}
