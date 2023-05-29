import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalServicesDetailComponent } from './dental-services-detail.component';

describe('DentalServieDetailComponent', () => {
  let component: DentalServicesDetailComponent;
  let fixture: ComponentFixture<DentalServicesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DentalServicesDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DentalServicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
