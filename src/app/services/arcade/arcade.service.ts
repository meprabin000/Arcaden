import { Injectable } from '@angular/core';
import { Arcade } from 'src/app/models/Arcade';

// all arcade games
let arcades: Arcade[] = [
  {
      id: 1,
      name: "Pacrac Man",
      description: "Guess the game",
      tokenToPlay: 3
  },
  {
      id: 2,
      name: "Mortal Kombat",
      description: "Guess the game",
      tokenToPlay: 5
  },
  {
      id: 3,
      name: "Space Invaders",
      description: "Guess the game",
      tokenToPlay: 2
  },
  {
      id: 4,
      name: "Golden Axe",
      description: "Guess the game",
      tokenToPlay: 3
  }
];

// Arcade Service
@Injectable({
  providedIn: 'root'
})
export class ArcadeService {
  arcades!: Arcade[];

  constructor() {
   }

   getAllArcades(): Arcade[] {
    return arcades;
   }
}