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

    const origins = [
      "Android",
      "Cockroach",
      "Doppelganger",
      "Electrokinetic",
      "Empath",
      "Felinoid",
      "Giant",
      "Gravity Controller",
      "Hawkoid",
      "Hypercognitive",
      "Mind Breaker",
      "Mind Coercer",
      "Plant",
      "Pyrokinetic",
      "Radioactive",
      "Rat swarm",
      "Seismic",
      "Speedster",
      "Telekinetic",
      "Yeti"
    ]
    return { characters, origins }
  }

  genId(characters: Character[]): number {
    return characters.length > 0 ? Math.max(...characters.map(character => character.id)) + 1 : 11
  }
  constructor() { }
}
