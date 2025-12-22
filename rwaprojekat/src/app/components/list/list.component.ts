import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Part } from '../../models/part';
import { AppState } from '../../app.state';
import { AsyncPipe } from '@angular/common';
import { PartComponent } from "../part/part.component";
import { loadParts } from '../../store/part.action';
import { selectPartList } from '../../store/part.selector';
import { PartsService } from '../../services/parts.service';

@Component({
  selector: 'list',
  imports: [AsyncPipe, PartComponent],
  providers:[PartsService, Store],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {

  part$: Observable<Part[]> = of([]);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadParts());
    this.part$ = this.store.select(selectPartList);
  }

}
