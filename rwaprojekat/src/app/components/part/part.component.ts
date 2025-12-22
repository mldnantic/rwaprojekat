import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Part } from '../../models/part';

@Component({
  selector: 'part',
  imports: [],
  templateUrl: './part.component.html',
  styleUrl: './part.component.scss',
})
export class PartComponent implements OnInit {
  @Input() part: Part | null = null;
  @Output() onClick: EventEmitter<Part> = new EventEmitter<Part>();

  constructor() { }

  ngOnInit(): void { }

  clicked()
  {
    if(this.part){
      this.onClick.emit(this.part);
    }
  }
}
