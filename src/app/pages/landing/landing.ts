import { Component, signal } from '@angular/core';
import { Slider } from '../../components/slider/slider';

@Component({
  selector: 'bm-landing',
  imports: [Slider],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  readonly scoreOptions = [150, 200, 250, 300, 500];
  readonly playerCountOptions = [2, 3, 4];

  targetScore = signal(300);
  playerCount = signal(2);
}
