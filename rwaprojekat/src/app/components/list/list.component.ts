import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { PartsService } from '../../services/parts.service';
import { Store } from '@ngrx/store';
import { Part } from '../../models/part';
import { AppState } from '../../app.state';
import { PartComponent } from "../part/part.component";
import { loadParts } from '../../store/part.action';
import { selectPartList } from '../../store/part.selector';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'list',
  imports: [AsyncPipe, PartComponent, MatGridListModule, MatListModule, MatCardModule],
  providers:[PartsService, Store],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {

  part$: Observable<Part[]> = of([]);

  constructor(private store: Store<AppState>) { }

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  ngOnInit(): void {
    this.store.dispatch(loadParts());
    this.part$ = this.store.select(selectPartList);
  }

}
