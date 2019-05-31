import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInMaskComponent } from './log-in-mask.component';

describe('LogInMaskComponent', () => {
  let component: LogInMaskComponent;
  let fixture: ComponentFixture<LogInMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
