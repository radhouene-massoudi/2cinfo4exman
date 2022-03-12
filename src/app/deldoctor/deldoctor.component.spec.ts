import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeldoctorComponent } from './deldoctor.component';

describe('DeldoctorComponent', () => {
  let component: DeldoctorComponent;
  let fixture: ComponentFixture<DeldoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeldoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeldoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
