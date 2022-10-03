/* Transaction prototype */
export interface Transaction {
    id: number,
    description: string,
    tokensUsed: number,
    timeStamp: Date,
    balanceAdded: number
  };