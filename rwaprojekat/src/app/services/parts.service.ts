import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Part } from '../models/part';

@Injectable({
  providedIn: 'root',
})
export class PartsService {

  API_URL: string = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Part[]>(this.API_URL + "/parts");
  }

}
