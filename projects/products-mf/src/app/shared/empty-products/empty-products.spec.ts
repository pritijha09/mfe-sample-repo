import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyProducts } from './empty-products';

describe('EmptyProducts', () => {
  let component: EmptyProducts;
  let fixture: ComponentFixture<EmptyProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyProducts],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
