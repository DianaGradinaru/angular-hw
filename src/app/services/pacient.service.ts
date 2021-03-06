import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pacient } from '../Pacient';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PacientService {
  private apiUrl = 'http://localhost:5000/pacienti';

  constructor(private http: HttpClient) {}

  getPacienti(): Observable<Pacient[]> {
    return this.http.get<Pacient[]>(this.apiUrl);
  }

  getPacient(id: number): Observable<Pacient> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pacient>(url);
  }

  deletePacient(pacient: Pacient): Observable<Pacient> {
    const url = `${this.apiUrl}/${pacient.id}`;
    return this.http.delete<Pacient>(url);
  }

  addPacient(pacient: Pacient): Observable<Pacient> {
    return this.http.post<Pacient>(this.apiUrl, pacient, httpOptions);
  }

  editPacient(pacient: Pacient): Observable<Pacient> {
    const url = `${this.apiUrl}/${pacient.id}`;
    return this.http.put<Pacient>(url, pacient, httpOptions);
  }
}
