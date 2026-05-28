import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Slider } from './slider';

describe('Slider', () => {
  let fixture: ComponentFixture<Slider>;
  let component: Slider;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slider],
    }).compileComponents();

    fixture = TestBed.createComponent(Slider);
    component = fixture.componentInstance;
    component.options = [150, 200, 250, 300, 500];
    component.value = 250;
    fixture.detectChanges();
  });

  it('displays the current value', () => {
    const label = fixture.nativeElement.querySelector('span');
    expect(label.textContent.trim()).toBe('250');
  });

  it('sets slider position to match current value index', () => {
    const input = fixture.nativeElement.querySelector('input');
    expect(Number(input.value)).toBe(2);
  });

  it('emits correct option when slider moves', () => {
    const emitted: number[] = [];
    component.valueChange.subscribe((v: number) => emitted.push(v));

    const input = fixture.nativeElement.querySelector('input');
    input.value = '3';
    input.dispatchEvent(new Event('input'));

    expect(emitted).toEqual([300]);
  });

  it('updates index correctly for each option', () => {
    component.value = 500;
    expect(component.index).toBe(4);
  });
});
