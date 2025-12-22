import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Part } from '../../models/part';
import { viewPart } from '../../store/part.action';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'part',
  imports: [],
  templateUrl: './part.component.html',
  styleUrl: './part.component.scss',
})
export class PartComponent implements OnInit {
  @Input() part: Part | null = null;
  @Output() onClick: EventEmitter<Part> = new EventEmitter<Part>();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void { }

  clicked() {
    if (this.part) {
      this.store.dispatch(
        viewPart({
          partId: this.part.id,
          viewCount: this.part.viewCount + 1
        })
      );
    }
  }
}
