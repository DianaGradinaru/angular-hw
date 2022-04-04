import { Component, OnInit } from '@angular/core';
import { Pacient } from 'src/app/Pacient';
import { PacientService } from 'src/app/services/pacient.service';

@Component({
  selector: 'app-pacienti',
  templateUrl: './pacienti.component.html',
  styleUrls: ['./pacienti.component.css']
})
export class PacientiComponent implements OnInit {

  pacienti: Pacient[] = [];
  
  constructor(private pacientService: PacientService) { }

  ngOnInit(): void {
    this.pacientService
      .getPacienti()
      .subscribe((pacienti) => this.pacienti = pacienti)
  }

}
