import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Character } from '../models/character'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const characters = [
      { id: 2, name: 'Dude' },
      { id: 3, name: 'Bro' },
      { id: 4, name: 'DudeBro'}
    ]
    return { characters }
  }

  genId(characters: Character[]): number {
    return characters.length > 0 ? Math.max(...characters.map(character => character.id)) + 1 : 11
  }
  constructor() { }
}
