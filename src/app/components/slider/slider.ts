import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bm-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
})
export class Slider {
  @Input() options: number[] = [];
  @Input() value!: number;
  @Output() valueChange = new EventEmitter<number>();

  get index(): number {
    return this.options.indexOf(this.value);
  }

  onSlide(event: Event): void {
    const selectedIndex = Number((event.target as HTMLInputElement).value);
    this.valueChange.emit(this.options[selectedIndex]);
  }
}
