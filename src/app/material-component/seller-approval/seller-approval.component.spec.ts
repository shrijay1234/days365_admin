import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerApprovalComponent } from './seller-approval.component';

describe('SellerApprovalComponent', () => {
  let component: SellerApprovalComponent;
  let fixture: ComponentFixture<SellerApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
