import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { Pacient } from 'src/app/Pacient';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { PacientService } from 'src/app/services/pacient.service';

@Component({
  selector: 'app-edit-pacient',
  templateUrl: './edit-pacient.component.html',
  styleUrls: ['./edit-pacient.component.css'],
})
export class EditPacientComponent implements OnInit {
  @Output() onEditPacient: EventEmitter<Pacient> = new EventEmitter();
  @Output() pacient: EventEmitter<Pacient> = new EventEmitter();

  nume!: string;
  prenume!: string;
  dataNasterii!: Date;
  sex!: string;
  cnp!: number;
  telefon!: number;
  showEditPacient!: boolean;
  subscription!: Subscription;
  id!: number;

  constructor(
    private uiService: UiService,
    private pacientService: PacientService
  ) {
    this.subscription = this.uiService
      .onToggleEdit()
      .subscribe((value) => (this.showEditPacient = value));
    // this.subscription = this.pacientService.getPacient(this.id).subscribe();
  }

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

    const editedPacient = {
      id: this.id,
      nume: this.nume,
      prenume: this.prenume,
      dataNasterii: this.dataNasterii,
      sex: this.sex,
      cnp: this.cnp,
      telefon: this.telefon,
    };

    this.onEditPacient.emit(editedPacient);

    form.resetForm();
  }
}
