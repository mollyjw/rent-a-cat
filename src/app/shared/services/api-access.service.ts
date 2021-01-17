import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Token } from '../models/token.model';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class ApiAccessService {
  apiUrl: string = 'https://test1-api.rescuegroups.org/v5';
  constructor(
    private http: HttpClient,
  ) {}

    getApiToken() {
      const headers = new HttpHeaders({
        'content_type': 'application/vnd.api+json',
        'authorization': '1ByRL1lJ',

      })

      return this.http.get(`${this.apiUrl}`, {headers})
    };

}
