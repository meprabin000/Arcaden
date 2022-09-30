import { Arcade } from './../arcades';
import { Component, OnInit } from '@angular/core';
import arcades from '../arcades';

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.css']
})
export class ArcadeComponent implements OnInit {

  j!: Arcade[];
  constructor() { }

  ngOnInit(): void {
    this.j = arcades;
  }

}
