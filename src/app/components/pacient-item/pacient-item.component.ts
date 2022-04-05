import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pacient } from 'src/app/Pacient';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { PacientService } from 'src/app/services/pacient.service';

@Component({
  selector: '[app-pacient-item]',
  templateUrl: './pacient-item.component.html',
  styleUrls: ['./pacient-item.component.css'],
})
export class PacientItemComponent implements OnInit {
  @Input() pacient!: Pacient;
  @Output() onDeletePacient: EventEmitter<Pacient> = new EventEmitter();
  faTimes = faTimes;
  showEditPacient!: boolean;
  subscription!: Subscription;
  subscriptionEdit!: Subscription;

  constructor(
    private uiService: UiService,
    private pacientService: PacientService
  ) {
    this.subscription = this.uiService
      .onToggleEdit()
      .subscribe((value) => (this.showEditPacient = value));
    this.subscriptionEdit = this.pacientService
      .getPacienti()
      // .subscribe((pacienti) => {
      //   return pacienti.find((p) => p.id == this.pacient.id);
      // });
      .subscribe((pacienti) => pacienti.find((p) => p.id == this.pacient.id));
  }

  ngOnInit(): void {}

  onDelete(pacient) {
    this.onDeletePacient.emit(pacient);
  }

  toggleEditPacient(id) {
    let pacientId = this.subscriptionEdit;
    this.uiService.toggleEditPacient(pacientId);
  }
}
