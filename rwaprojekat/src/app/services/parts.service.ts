import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Part } from '../models/part';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PartsService {

  API_URL: string = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Part[]>(this.API_URL + "/parts");
  }

  viewPart(part: Part): Observable<Part>
  {
    return this.httpClient.put<Part>(this.API_URL + "/parts/" + part.id, part);
  }

}
