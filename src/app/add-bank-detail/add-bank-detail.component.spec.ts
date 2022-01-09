import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankDetailComponent } from './add-bank-detail.component';

describe('AddBankDetailComponent', () => {
  let component: AddBankDetailComponent;
  let fixture: ComponentFixture<AddBankDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBankDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBankDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
