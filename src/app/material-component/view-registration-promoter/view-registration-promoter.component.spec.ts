import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegistrationPromoterComponent } from './view-registration-promoter.component';

describe('ViewRegistrationPromoterComponent', () => {
  let component: ViewRegistrationPromoterComponent;
  let fixture: ComponentFixture<ViewRegistrationPromoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRegistrationPromoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegistrationPromoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
