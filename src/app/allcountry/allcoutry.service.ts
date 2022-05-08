import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AllcoutryService {

  constructor(private http: HttpClient) { }
  getAllCountry(url: string) {
    return this.http.get(url);
  }
}
