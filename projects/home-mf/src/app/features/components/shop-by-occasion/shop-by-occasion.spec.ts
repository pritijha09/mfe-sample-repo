import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByOccasion } from './shop-by-occasion';

describe('ShopByOccasion', () => {
  let component: ShopByOccasion;
  let fixture: ComponentFixture<ShopByOccasion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopByOccasion],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopByOccasion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
