import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cat } from '../models/cat.model'

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private catApi: string;
  constructor(
    private http: HttpClient
    ) {
      this.catApi = `${environment.apiUrl}api/cats`;
    }

    getAllCats() {
      return this.http.get<Cat[]>(`${this.catApi}/index`);
    }
}
