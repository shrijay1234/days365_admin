import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpassComponent } from './viewpass.component';

describe('ViewpassComponent', () => {
  let component: ViewpassComponent;
  let fixture: ComponentFixture<ViewpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
