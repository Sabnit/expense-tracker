export interface ITransaction {
  date: string;
  amount: number;
  categoryName: string;
  categoryType: string;
  note?: string;
}
