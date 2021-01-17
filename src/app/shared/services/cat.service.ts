import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    this.catApi = `${environment.apiUrl}/public/animals/search/availabe/cats`;
  }

  getCatbyId(params: { id: any; }) {
    return this.http.get<any>(`${this.catApi}/?id=${params.id}`)
  }

  getAllCats() {
    const headers = new HttpHeaders({
      'content_type': 'application/vnd.api+json',
      'authorization': '1ByRL1lJ',
    })
    return this.http.get<Cat[]>(`${this.catApi}`, { headers });
  }

}
