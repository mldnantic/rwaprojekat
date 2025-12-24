import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Part } from '../models/part';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PartsService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Part[]>(environment.APIURL + "/parts");
  }

  viewPart(part: Part): Observable<Part>
  {
    return this.httpClient.put<Part>(environment.APIURL + "/parts/" + part.id, part);
  }

}
