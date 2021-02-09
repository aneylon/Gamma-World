import { Component, OnInit } from '@angular/core'
import { Character } from '../../models/character'
import { CharacterService } from '../../services/character.service'
import { LoggingService } from '../../services/logging.service'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[]
  selectedCharacter: Character

  constructor(
    private characterService: CharacterService,
    private loggingService: LoggingService,
  ) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters)
  }
  selectCharacter(character): void {
    this.selectCharacter = character
  }
}
