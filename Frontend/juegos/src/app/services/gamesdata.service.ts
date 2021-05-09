import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesdataService {

  @Output() DataJuegos: EventEmitter <any> = new EventEmitter();

  constructor() { }
}
