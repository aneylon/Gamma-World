import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Character } from '../models/character'
import { DiscussionItem } from '../models/discussionItem';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const discussionItems: DiscussionItem[] = [
      { id: 0, parent: null, title: 'Thing one', content: 'Stuff is here', likes: 1, views: 3, replies: 3, dateWritten: 1234, dateModified: 1234, creator: 1 },
      { id: 1, parent: null, title: 'Thing two', content: 'Moar stuff is here', likes: 0, views: 4, replies: 7, dateWritten: 1234, dateModified: 1234, creator: 42 },
      { id: 2, parent: null, title: 'Thing three', content: 'The most stuffs is here', likes: 2, views: 1, replies: 4, dateWritten: 1234, dateModified: 1234, creator: 3 },
    ]

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
    return { characters, origins, discussionItems }
  }

  genId(characters: Character[]): number {
    return characters.length > 0 ? Math.max(...characters.map(character => character.id)) + 1 : 11
  }
  constructor() { }
}
