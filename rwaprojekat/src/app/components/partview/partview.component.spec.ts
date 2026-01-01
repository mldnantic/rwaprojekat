import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartViewComponent } from './partview.component';

describe('PartviewComponent', () => {
  let component: PartViewComponent;
  let fixture: ComponentFixture<PartViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartViewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
