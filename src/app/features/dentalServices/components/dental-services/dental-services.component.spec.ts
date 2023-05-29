import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenatalServicesComponent } from './dental-services.component';

describe('DenatalServicesComponent', () => {
  let component: DenatalServicesComponent;
  let fixture: ComponentFixture<DenatalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DenatalServicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DenatalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
