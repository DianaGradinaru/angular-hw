import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddPacient: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddPacient(): void {
    this.showAddPacient = !this.showAddPacient;
    this.subject.next(this.showAddPacient);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
