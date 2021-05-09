import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { combineAll, map } from "rxjs/operators";
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

  //obtener juegos
  GetGames(){ 
    const url = 'http://localhost:3600/getGames';
    return this.http.get(url);
  }
  //obtener biblioteca
  GetLibrary(){ 
    const url = 'http://localhost:3600/getLibrary';
    return this.http.get(url);
  }

  //obtener juego
  GetGame(id:number){ 
    const url = 'http://localhost:3600/getJuego'+id;
    return this.http.get(url);
  }

  //obtener consolas
  GetConsolas(){ 
    const url = 'http://localhost:3600/getConsola';
    return this.http.get(url);
  }
  //obtener consola especifica
  GetConsola(nombre:string){ 
    const url = 'http://localhost:3600/getCon'+nombre;
    return this.http.get(url);
  }
  //obtener juego
  GetJuego(nombre:string){ 
    const url = 'http://localhost:3600/getGam'+nombre;
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
  SetPost(user:number, juego:string, fecha:string, cuerpo:string){
    const url = 'http://localhost:3600/setPosts'
    console.log(user, juego, fecha, cuerpo)
    return this.http.post(
      url, 
      {
        'id_usuario': user,
        'juego': juego,
        'fecha': fecha,
        'comentario':cuerpo
      },
      {
        headers: this.headers
      }
    ).pipe(map(data => data))
  }

  //crear Bilbioteca
  SetLibrary(id_usuario:number, id_juego:number, puntuacion:number, opinion:string){
    const url = 'http://localhost:3600/setLibrary'
    console.log(id_usuario, id_juego, puntuacion, opinion)
    return this.http.post(
      url, 
      {
        'id_usuario': id_usuario,
        'id_juego': id_juego,
        'puntuacion': puntuacion,
        'opinion':opinion
      },
      {
        headers: this.headers
      }
    ).pipe(map(data => data))
  }

  UpdateUser(id:number, nombre: string, apellido: string, username: string, correo: string, password: string, biografia: string, fecha: string){
    const url = 'http://localhost:3600/upUser/'+id
    return this.http.put(
      url,
      {
        'nombre': nombre,
        'apellido': apellido,
        'username': username,
        'correo': correo,
        'password': password,
        'biografia': biografia,
        'fecha': fecha
      },
      {
        headers: this.headers
      }
    ).pipe(map(data => data))
  }


}
