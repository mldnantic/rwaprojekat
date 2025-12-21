import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Part } from '../../models/part';
import { AppState } from '../../app.state';

@Component({
  selector: 'list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {

  part$: Observable<Part[]> = of([]);

  constructor(private store: Store<AppState>) { }

  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
