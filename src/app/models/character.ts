// class vs interface

import { Abilities } from "./ability";

export class Character {
    id?: number;
    name?: string;
    originOne?: string;
    originTwo?: string;
    trait?: string;
    power?: string;

    abilities?: Abilities = new Abilities();
    
    strength?: number;
    dexterity?: number;
    constitution?: number;
    intelegence?: number;
    wisdom?: number;
    charisma?: number;

    skill?: string;
    gear?: string;
    hitpoints?: number;
    bloodied?: number;
    secondWind?: number;
    speed?: number;
    armourClass?: number;
    fortitude?: number;
    reflex?: number;
    will?: number;
    initiative?: number;
    attack?: number;
}