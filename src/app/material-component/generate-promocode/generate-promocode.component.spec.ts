import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePromocodeComponent } from './generate-promocode.component';

describe('GeneratePromocodeComponent', () => {
  let component: GeneratePromocodeComponent;
  let fixture: ComponentFixture<GeneratePromocodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratePromocodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePromocodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
