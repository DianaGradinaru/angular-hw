import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pacient } from '../Pacient';

@Injectable({
  providedIn: 'root'
})
export class PacientService {

  private apiUrl = 'http://localhost:5000/pacienti'

  constructor(private http:HttpClient) { }

  getPacienti(): Observable<Pacient[]> {
    return this.http
      .get<Pacient[]>(this.apiUrl);
  }

  deletePacient(pacient: Pacient): Observable<Pacient> {
    const url = `${this.apiUrl}/${pacient.id}`;
    return this.http
      .delete<Pacient>(url)
  }
}
