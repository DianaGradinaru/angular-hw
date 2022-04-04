import { Component, OnInit, Input } from '@angular/core';
import { Pacient } from 'src/app/Pacient';

@Component({
  selector: '[app-pacient-item]',
  templateUrl: './pacient-item.component.html',
  styleUrls: ['./pacient-item.component.css']
})
export class PacientItemComponent implements OnInit {

  @Input() pacient!: Pacient;

  constructor() { }

  ngOnInit(): void {
  }

}
