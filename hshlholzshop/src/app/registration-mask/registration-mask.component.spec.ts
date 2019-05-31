import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMaskComponent } from './registration-mask.component';

describe('RegistrationMaskComponent', () => {
  let component: RegistrationMaskComponent;
  let fixture: ComponentFixture<RegistrationMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
