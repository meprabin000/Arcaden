import { ArcadeService } from './../../services/arcade/arcade.service';
import { Component, OnInit } from '@angular/core';
import { Arcade } from 'src/app/models/Arcade';

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.css'],
  providers: [ ArcadeService ]
})
export class ArcadeComponent implements OnInit {

  allArcades!: Arcade[];
  constructor(private arcadeService: ArcadeService) { }

  ngOnInit(): void {
    this.allArcades = this.arcadeService.getAllArcades();
  }



}
