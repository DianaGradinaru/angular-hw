export interface Pacient {
  id?: number;
  nume: string;
  prenume: string;
  dataNasterii: Date;
  sex: string;
  cnp?: number;
  telefon?: number;
}
