import { Injectable } from '@angular/core'
import { Character } from '../models/character'
import { Characters } from '../mock-characters'
import { Observable, of } from 'rxjs'
import { LoggingService } from '../services/logging.service'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private loggingService: LoggingService
  ) { }

  getCharacters(): Observable<Character[]> {
    this.loggingService.add('Character Service: Get Characters')
    return of(Characters)
  }

  getCharacter(id: number) {
    return of(Characters.find(character => character.id === id))
  }
}
