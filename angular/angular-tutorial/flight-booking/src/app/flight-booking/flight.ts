export interface Flight {
  id: number;
  from: string;
  to: string;
  date: string;
  delayed: boolean;
  distance?: number;
  calcPrice?(): number;
}
