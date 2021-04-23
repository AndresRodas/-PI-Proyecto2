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
  
  GetUsers(){
    const url = 'http://localhost:3600/getUsers';
    return this.http.get(url);
  }

  SetUsers(name: string, last_name:string, user:string, email: string, pass: string, bio: string, fecha: string){
    console.log(name+' NOMBREEE')
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






}
