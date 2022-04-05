import { Component, OnInit } from '@angular/core';
import { Pacient } from 'src/app/Pacient';
import { PacientService } from 'src/app/services/pacient.service';

@Component({
  selector: 'app-pacienti',
  templateUrl: './pacienti.component.html',
  styleUrls: ['./pacienti.component.css'],
})
export class PacientiComponent implements OnInit {
  pacienti: Pacient[] = [];

  constructor(private pacientService: PacientService) {}

  ngOnInit(): void {
    this.pacientService
      .getPacienti()
      .subscribe((pacienti) => (this.pacienti = pacienti));
  }

  deletePacient(pacient: Pacient) {
    if (confirm('Doriti sa stergeti pacientul din baza de date?')) {
      this.pacientService
        .deletePacient(pacient)
        .subscribe(
          () =>
            (this.pacienti = this.pacienti.filter((p) => p.id !== pacient.id))
        );
    } else {
      console.log('pacientul nu a fost scos din baza de date');
    }
  }

  addPacient(pacient: Pacient) {
    this.pacientService
      .addPacient(pacient)
      .subscribe((pacient) => this.pacienti.push(pacient));
  }
}
