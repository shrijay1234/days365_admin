import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterDashboardComponent } from './promoter-dashboard.component';

describe('PromoterDashboardComponent', () => {
  let component: PromoterDashboardComponent;
  let fixture: ComponentFixture<PromoterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
