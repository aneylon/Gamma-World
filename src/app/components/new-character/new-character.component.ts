import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';
import { RandomService } from '../../services/random.service'

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent implements OnInit {
  character: Character = new Character()
  constructor(
    private randomService: RandomService
  ) { }

  ngOnInit(): void {
  }

  createRandomCharacter(): void {
    // create and rank five ability scores
    let abilities = []
    for(let i = 0; i < 5; i++){
      abilities.push(this.randomService.rollThreeDSix())
    }
    abilities = abilities.sort(function(a, b){return b-a})
    console.log(abilities)
    // Determine origins.
    // assign major and minor 18 / 16 respectively, or 20 if same.
    // assign others randomly
    
  }

}
