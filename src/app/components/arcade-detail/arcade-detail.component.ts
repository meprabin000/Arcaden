import { UserService } from './../../services/user/user.service';
import { ArcadeService } from './../../services/arcade/arcade.service';
import { Component, Input, OnInit } from '@angular/core';
import { Arcade } from 'src/app/models/Arcade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arcade-detail',
  templateUrl: './arcade-detail.component.html',
  styleUrls: ['./arcade-detail.component.css']
})
export class ArcadeDetailComponent implements OnInit {
  arcade?: Arcade;
  error!: string;
  won!: Boolean;
  winNumber!: number;
  constructor(private arcadeService: ArcadeService, private userService: UserService, private route: ActivatedRoute) { 
    this.error = "";
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null)
      this.arcade = this.arcadeService.getAllArcades().find((a) => a.id === +id);
    if(this.arcade === undefined)
      this.error = "Not found";
  }

  play(guess: number): void {
    this.winNumber = Math.floor(Math.random() * 10);
    this.arcade && this.userService.removeTokens(this.arcade.tokenToPlay, this.arcade)
    if( this.winNumber == guess && this.arcade) {
      this.won = true;
      this.userService.addTokens(this.arcade.tokenToPlay * 2, this.arcade)
    } else {
      this.won = false;
    }
  }

  // returns true if there is enough tokens to play
  canPlay(): Boolean{
    return this.arcade ? this.userService.getCurrentUser().availableTokens >= this.arcade.tokenToPlay: false;
  }
}
