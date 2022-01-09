import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandListingComponent } from './brand-listing.component';

describe('BrandListingComponent', () => {
  let component: BrandListingComponent;
  let fixture: ComponentFixture<BrandListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
