import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pacient } from 'src/app/Pacient';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: '[app-pacient-item]',
  templateUrl: './pacient-item.component.html',
  styleUrls: ['./pacient-item.component.css'],
})
export class PacientItemComponent implements OnInit {
  @Input() pacient!: Pacient;
  @Output() onDeletePacient: EventEmitter<Pacient> = new EventEmitter();
  @Output() onEditPacient: EventEmitter<Pacient> = new EventEmitter();

  faTimes = faTimes;
  showEditPacient!: boolean;
  subscription!: Subscription;
  subscriptionEdit!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggleEdit()
      .subscribe((value) => (this.showEditPacient = value));
  }

  ngOnInit(): void {}

  onDelete(pacient) {
    this.onDeletePacient.emit(pacient);
  }

  editPacient(pacient) {
    console.log(pacient);
    this.onEditPacient.emit(pacient);
  }

  toggleEditPacient() {
    console.log(this.pacient.id);
    this.uiService.toggleEditPacient();
  }
}
