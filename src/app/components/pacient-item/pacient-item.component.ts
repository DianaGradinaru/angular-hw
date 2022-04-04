import { Component, OnInit, Input } from '@angular/core';
import { Pacient } from 'src/app/Pacient';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-pacient-item]',
  templateUrl: './pacient-item.component.html',
  styleUrls: ['./pacient-item.component.css']
})
export class PacientItemComponent implements OnInit {

  @Input() pacient!: Pacient;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
