import { Component, Input, OnInit } from '@angular/core';
import { Arcade } from '../arcades';

@Component({
  selector: 'app-arcade-detail',
  templateUrl: './arcade-detail.component.html',
  styleUrls: ['./arcade-detail.component.css']
})
export class ArcadeDetailComponent implements OnInit {

  @Input() arcade!: Arcade;
  constructor() { }

  ngOnInit(): void {
  }

}
