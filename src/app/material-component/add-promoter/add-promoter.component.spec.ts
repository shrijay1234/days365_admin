import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromoterComponent } from './add-promoter.component';

describe('AddPromoterComponent', () => {
  let component: AddPromoterComponent;
  let fixture: ComponentFixture<AddPromoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPromoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPromoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
