import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { Pacient } from 'src/app/Pacient';

@Component({
  selector: 'app-add-pacient',
  templateUrl: './add-pacient.component.html',
  styleUrls: ['./add-pacient.component.css'],
})
export class AddPacientComponent implements OnInit {
  @Output() onAddPacient: EventEmitter<Pacient> = new EventEmitter();

  nume!: string;
  prenume!: string;
  dataNasterii!: Date;
  sex!: string;
  cnp!: number;
  telefon!: number;

  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
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

    const newPacient = {
      nume: this.nume,
      prenume: this.prenume,
      dataNasterii: this.dataNasterii,
      sex: this.sex,
      cnp: this.cnp,
      telefon: this.telefon,
    };

    this.onAddPacient.emit(newPacient);

    form.resetForm();
  }
}
