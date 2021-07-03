import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksBannerComponent } from './stocks-banner.component';

describe('StocksBannerComponent', () => {
  let component: StocksBannerComponent;
  let fixture: ComponentFixture<StocksBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
