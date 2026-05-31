import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreNotation } from './score-notation';

describe('ScoreNotation', () => {
  let fixture: ComponentFixture<ScoreNotation>;
  let component: ScoreNotation;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreNotation],
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreNotation);
    component = fixture.componentInstance;
  });

  it('calculates complete clusters correctly', () => {
    component.score = 150;
    expect(component.completeClusters.length).toBe(3);

    component.score = 85;
    expect(component.completeClusters.length).toBe(1);

    component.score = 35;
    expect(component.completeClusters.length).toBe(0);
  });

  it('calculates partial tens correctly', () => {
    component.score = 85;
    expect(component.partialTens).toBe(3);

    component.score = 50;
    expect(component.partialTens).toBe(0);

    component.score = 15;
    expect(component.partialTens).toBe(1);
  });

  it('detects five correctly', () => {
    component.score = 35;
    expect(component.hasFive).toBe(true);

    component.score = 30;
    expect(component.hasFive).toBe(false);

    component.score = 85;
    expect(component.hasFive).toBe(true);
  });

  it('handles 0 score', () => {
    component.score = 0;
    expect(component.completeClusters.length).toBe(0);
    expect(component.partialTens).toBe(0);
    expect(component.hasFive).toBe(false);
  });
});
