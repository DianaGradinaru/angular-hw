import { Component, OnInit } from '@angular/core';
import { Pacient } from 'src/app/Pacient';
import { PACIENTI } from 'src/app/mock-pacients';

@Component({
  selector: 'app-pacienti',
  templateUrl: './pacienti.component.html',
  styleUrls: ['./pacienti.component.css']
})
export class PacientiComponent implements OnInit {

  pacienti: Pacient[] = PACIENTI;
  
  constructor() { }

  ngOnInit(): void {
  }

}
