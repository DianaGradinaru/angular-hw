import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-add-pacient',
  templateUrl: './add-pacient.component.html',
  styleUrls: ['./add-pacient.component.css'],
})
export class AddPacientComponent implements OnInit {
  nume!: string;
  prenume!: string;
  dataNasterii!: Date;
  sex!: string;
  cnp!: number;
  telefon!: number;

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    if (!this.nume || !this.prenume || !this.dataNasterii || !this.sex) {
      alert('Campurile Nume, Prenume, Data Nașterii, Sex sunt obligatorii');
    }
    if (this.cnp && this.cnp.toString().length != 13) {
      alert('Campul CNP trebuie sa aiba 13 caractere numerice');
    }
    const dateDifferenceinDays = moment().diff(
      moment(this.dataNasterii.valueOf()),
      'days'
    );
    if (dateDifferenceinDays <= 0) {
      alert('Data nasterii trebuie sa fie in trecut');
    }
  }
}
