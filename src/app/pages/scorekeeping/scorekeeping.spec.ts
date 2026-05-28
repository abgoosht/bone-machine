import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scorekeeping } from './scorekeeping';

describe('Scorekeeping', () => {
  let component: Scorekeeping;
  let fixture: ComponentFixture<Scorekeeping>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scorekeeping],
    }).compileComponents();

    fixture = TestBed.createComponent(Scorekeeping);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
