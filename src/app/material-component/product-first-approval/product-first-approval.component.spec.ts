import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFirstApprovalComponent } from './product-first-approval.component';

describe('ProductFirstApprovalComponent', () => {
  let component: ProductFirstApprovalComponent;
  let fixture: ComponentFixture<ProductFirstApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFirstApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFirstApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
