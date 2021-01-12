import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiAccessService {

  private apiUrl: string

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.apiUrl = 'https://api.petfinder.com/v2'



    }

    getApiToken(params) {
      const body = {
        grant_type: 'client_credentials',
        client_id: 'zDYpd9z7tNEDZztbAvjHMYfFps6OluN2787iRFriNMWafm5yki',
        client_secret: 'YvfMl9wC6FxSl3gPCi6PFKbMa80GgX9gtTQh33du'
      }

      return this.http.get(`${this.apiUrl}/oauth2/token`, params )
        // .subscribe(res => res.json)

    }
   }
}
