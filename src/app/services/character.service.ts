import { Injectable } from '@angular/core'
import { Character } from '../models/character'
import { Characters } from '../mock-characters'
import { Observable, of } from 'rxjs'
import { LoggingService } from '../services/logging.service'
import { HttpHeaders, HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private url = 'api/characters'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
  ) { }

  getCharacters(): Observable<Character[]> {
    this.loggingService.add('Character Service: Get Characters')
    // return of(Characters)
    return this.http.get<Character[]>(this.url)
  }

  getCharacter(id: number) {
    // return of(Characters.find(character => character.id === id))
    const url = `${this.url}/${id}`
    return this.http.get<Character>(url)
  }
}
