import { User } from './../../models/User';
import { Arcade } from './../../models/Arcade';
import { ArcadeService } from './../arcade/arcade.service';
import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';
import { map } from 'rxjs';
import { makeBindingParser } from '@angular/compiler';

let users: Map<string, User> = new Map<string, User>();

// UserService implementation
@Injectable({
  providedIn: 'root'
})
export class UserService {
  static transactionIdGenerator: number = 1;
  static userIdGenerator: number = 2;
  static tokenCost: number = 0.25;
  user: User;

  constructor(private arcadeService: ArcadeService) { 
    this.user = {
      id: 1,
      name: "defaultUser",
      balance: 20,
      availableTokens: 0,
      transactions: []
    };
    users.set("defaultUser", this.user)
  }

  // computing the tokens from the transactions
  getTokens(): number {
    return this.user.transactions
              .map((t: Transaction) => t.tokensUsed)                       
              .reduce((prev: number, next: number) => prev + next, 0)
  }

  changeUser(username: string): void {
    if(users.has(username)) {
      this.user = users.get(username) ?? this.user;
    } else {
      const newUser: User = {
        id: 1,
        name: username,
        balance: 20,
        availableTokens: 0,
        transactions: []
      };

      users.set(username, newUser);
      this.user = newUser;
    }
  }

  // add tokens
  addTokens(numOfTok: number, arcade: Arcade): void {
    this.user.availableTokens += numOfTok;
    this.addTransaction(`Congratulations! You won ${numOfTok} tokens in ${arcade.name}.`, numOfTok);
  }

  removeTokens(numOfTok: number, arcade: Arcade): void {
    this.user.availableTokens -= numOfTok;
    this.addTransaction(`You played ${numOfTok} tokens in ${arcade.name}`, -numOfTok);
  }

  // get User
  getCurrentUser(): User {
    return this.user;
  }

  // adds the balance
  addBalance(amount: number): void {
    this.user.balance += amount;
    this.addTransaction(`\$${amount} balance was added.`, 0, amount);
  }

  // user purchases the tokens
  purchaseToken(numberOfTokens: number): void {
    const cost = numberOfTokens * UserService.tokenCost;
    if(cost <= this.user.balance) {
      this.user.availableTokens += numberOfTokens;
      this.user.balance -= cost;
      this.addTransaction(`${numberOfTokens} tokens purchased for \$${cost}.`, numberOfTokens, -cost);
    } else {
      alert(`You cannot afford ${numberOfTokens} tokens. The maximum you can afford is ${Math.floor(this.user.balance / UserService.tokenCost)}.`)
    }
  }

  // user adds the transaction
  addTransaction(description: string, tokensUsed: number = 0, balanceAdded: number = 0): void {
    this.user.transactions.push(
      {
        id: UserService.transactionIdGenerator++,
        description: description,
        tokensUsed: tokensUsed,
        timeStamp: new Date(),
        balanceAdded: balanceAdded
      }
    )
  }
}
