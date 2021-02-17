import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }
  randomBetween(low: number, high: number): number {
    return 1
  }
}
