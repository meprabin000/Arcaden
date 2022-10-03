import { Transaction } from './Transaction';

/* User prototype */
// export class User {
//     id: number;
//     name: string;
//     balance: number;
//     availableTokens: number;
//     transactions: Transaction[];

//     constructor(id: number, name: string, balance: number, availableTokens: number, transactions: Transaction[]) {
//       this.id = id;
//       this.name = name;
//       this.balance = balance;
//       this.availableTokens = availableTokens;
//       this.transactions = transactions;
//     }
//   };

export interface User {
  id: number,
  name: string,
  balance: number,
  availableTokens: number,
  transactions: Transaction[]
}