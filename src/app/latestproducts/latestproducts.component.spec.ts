import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestproductsComponent } from './latestproducts.component';

describe('LatestproductsComponent', () => {
  let component: LatestproductsComponent;
  let fixture: ComponentFixture<LatestproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
