import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterService } from '../../services/character.service'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character: Character
  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCharacter()
  }
  getCharacter() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.characterService.getCharacter(id)
      .subscribe(character => this.character = character)
  }

}
