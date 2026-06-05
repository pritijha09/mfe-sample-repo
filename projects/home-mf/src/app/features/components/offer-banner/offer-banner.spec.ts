import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBanner } from './offer-banner';

describe('OfferBanner', () => {
  let component: OfferBanner;
  let fixture: ComponentFixture<OfferBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(OfferBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
