import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pacient } from 'src/app/Pacient';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-pacient-item]',
  templateUrl: './pacient-item.component.html',
  styleUrls: ['./pacient-item.component.css']
})
export class PacientItemComponent implements OnInit {

  @Input() pacient!: Pacient;
  @Output() onDeletePacient: EventEmitter<Pacient> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(pacient) {
    this.onDeletePacient.
      emit(pacient)
  }

}
