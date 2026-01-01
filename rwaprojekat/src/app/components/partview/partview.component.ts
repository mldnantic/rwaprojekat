import { Component } from '@angular/core';
import { Part } from '../../models/part';
import { ActivatedRoute } from '@angular/router';
import { PartsService } from '../../services/parts.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'partview',
  imports: [AsyncPipe],
  templateUrl: './partview.component.html',
  styleUrl: './partview.component.scss',
})
export class PartViewComponent {

  partId!: string;
  part$: Observable<Part> = of();

  constructor(private route: ActivatedRoute,
    // private store: Store<AppState>,
    private servis: PartsService) { }

  ngOnInit(): void {

    this.partId = this.route.snapshot.paramMap.get('id')!;
    this.part$ = this.servis.getPart(this.partId);

    // this.store.dispatch(
    //   loadPart({
    //     partId: this.partId
    //   })
    // );
  }
}
