import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMiniComponent } from './product-mini.component';

describe('ProductMiniComponent', () => {
  let component: ProductMiniComponent;
  let fixture: ComponentFixture<ProductMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMiniComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
