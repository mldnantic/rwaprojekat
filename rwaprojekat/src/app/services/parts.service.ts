import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Part } from '../models/part';

@Injectable({
  providedIn: 'root',
})
export class PartsService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Part[]>("localhost:3000" + "/parts");
  }

}
