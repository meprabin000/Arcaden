import { Transaction } from './Transaction';

// User prototype
export interface User {
  id: number,
  name: string,
  balance: number,
  availableTokens: number,
  transactions: Transaction[]
}