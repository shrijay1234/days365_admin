import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTextPortComponent } from './add-text-port.component';

describe('AddTextPortComponent', () => {
  let component: AddTextPortComponent;
  let fixture: ComponentFixture<AddTextPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTextPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTextPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
