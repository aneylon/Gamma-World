import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent implements OnInit {
  character: Character = new Character()
  constructor() { }

  ngOnInit(): void {
  }

}
