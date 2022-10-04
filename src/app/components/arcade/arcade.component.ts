import { ArcadeService } from './../../services/arcade/arcade.service';
import { Component, OnInit } from '@angular/core';
import { Arcade } from 'src/app/models/Arcade';

// Play Arcades page
@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.css'],
  providers: [ ArcadeService ]
})
export class ArcadeComponent implements OnInit {

  allArcades!: Arcade[];
  constructor(private arcadeService: ArcadeService) { }

  // Gets all the arcades in the database (a list in this case), and makes it available for components
  ngOnInit(): void {
    this.allArcades = this.arcadeService.getAllArcades();
  }



}
