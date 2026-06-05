import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCake } from './custom-cake';

describe('CustomCake', () => {
  let component: CustomCake;
  let fixture: ComponentFixture<CustomCake>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCake],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomCake);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
