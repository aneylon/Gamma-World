import { Component, OnInit } from '@angular/core';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-personality-generator',
  templateUrl: './personality-generator.component.html',
  styleUrls: ['./personality-generator.component.css']
})
export class PersonalityGeneratorComponent implements OnInit {

  trusts = ["Gullible", "Open-minded", "Skeptical", "Suspicious", "Obstinate"]
  outlooks = ["Hopeful", "Enthusiastic", "Self-assured", "Grim", "Self-doubting"]
  decisions = ["Forceful", "Adaptable", "Timid", "Easygoing", "Impatient"]
  conscientiousness = ["Scrupulous", "Pragmatic", "Dutiful", "Flexible", "Scofflaw"]
  empathies = ["Kind", "Hard-hearted", "Charitable", "Oblivious", "Thieving"]
  courageousness = ["Cautious", "Daring", "Fearful", "Reckless", "Fierce"]
  trust: string
  outlook: string
  decision: string
  conscientious: string
  empathy: string
  courage: string 

  constructor(
    private randomService: RandomService
  ) { }

  ngOnInit(): void {
  }

  generatePersonality(): void {
    console.log('Personality!')
    this.trust = this.trusts[this.randomService.randomBetween(0,5)]
    this.outlook = this.outlooks[this.randomService.randomBetween(0,5)]
    this.decision = this.decisions[this.randomService.randomBetween(0,5)]
    this.conscientious = this.conscientiousness[this.randomService.randomBetween(0,5)]
    this.empathy = this.empathies[this.randomService.randomBetween(0,5)]
    this.courage = this.courageousness[this.randomService.randomBetween(0,5)]
  }
}
