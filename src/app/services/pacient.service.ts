import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pacient } from '../Pacient';
import { PACIENTI } from '../mock-pacients';

@Injectable({
  providedIn: 'root'
})
export class PacientService {

  constructor() { }

  getPacienti(): Observable<Pacient[]> {
    const pacienti = of(PACIENTI)
    return pacienti;
  }
}
