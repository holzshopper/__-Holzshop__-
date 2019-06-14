import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLoginRegistrationComponent } from './landing-login-registration.component';

describe('LandingLoginRegistrationComponent', () => {
  let component: LandingLoginRegistrationComponent;
  let fixture: ComponentFixture<LandingLoginRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingLoginRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingLoginRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
