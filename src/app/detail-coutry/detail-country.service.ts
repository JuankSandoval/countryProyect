import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DetailCountryService {

  constructor(private http: HttpClient) { }
  getDetilCountry(url: string) {
    return this.http.get(url);
  }

}
