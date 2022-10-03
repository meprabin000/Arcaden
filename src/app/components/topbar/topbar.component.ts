import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  tokenRate: number;
  amount!: number;
  
  constructor(public userService: UserService) { 
    this.tokenRate = UserService.tokenCost;
  }

  ngOnInit(): void {
  }



}
