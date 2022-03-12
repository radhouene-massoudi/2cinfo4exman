import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowonedoctorComponent } from './showonedoctor.component';

describe('ShowonedoctorComponent', () => {
  let component: ShowonedoctorComponent;
  let fixture: ComponentFixture<ShowonedoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowonedoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowonedoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
