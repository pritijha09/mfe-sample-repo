import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCakes } from './trending-cakes';

describe('TrendingCakes', () => {
  let component: TrendingCakes;
  let fixture: ComponentFixture<TrendingCakes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingCakes],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendingCakes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
