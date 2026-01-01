import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Part } from '../../models/part';
import { viewPart } from '../../store/part.action';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'part',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './part.component.html',
  styleUrl: './part.component.scss',
})
export class PartComponent implements OnInit {

  @Input() part: Part | null = null;
  @Output() onClick: EventEmitter<Part> = new EventEmitter<Part>();

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void { }

  view() {
    if (this.part) {
      this.store.dispatch(
        viewPart({
          part: this.part
        })
      );
      this.router.navigate(['/part', this.part.id]);
    }
  }
}
