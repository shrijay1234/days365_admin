import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSecondApprovalComponent } from './product-second-approval.component';

describe('ProductSecondApprovalComponent', () => {
  let component: ProductSecondApprovalComponent;
  let fixture: ComponentFixture<ProductSecondApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSecondApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSecondApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
