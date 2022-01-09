import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterLoginComponent } from './promoter-login.component';

describe('PromoterLoginComponent', () => {
  let component: PromoterLoginComponent;
  let fixture: ComponentFixture<PromoterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoterLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
