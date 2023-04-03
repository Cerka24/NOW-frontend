export interface StudentListModel {
  id:number | null;
  student:string;
  joined_on:string | null;
  email: string;
  rate: string;
  completed:number;
  points?: number;
}
