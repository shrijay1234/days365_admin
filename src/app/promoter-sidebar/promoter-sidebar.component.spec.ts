import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterSidebarComponent } from './promoter-sidebar.component';

describe('PromoterSidebarComponent', () => {
  let component: PromoterSidebarComponent;
  let fixture: ComponentFixture<PromoterSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoterSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
