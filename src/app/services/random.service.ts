import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }
  randomBetween(low: number, high: number): number {
    let randomNumber = Math.floor((Math.random() * high) + low)
    return randomNumber
  }

  rollThreeDSix() : number {
    let rollOne = this.randomBetween(1,6)
    let rollTwo = this.randomBetween(1,6)
    let rollThree = this.randomBetween(1,6)
    return rollOne + rollTwo + rollThree
  }
}
