import { Component, signal, effect } from '@angular/core';
import { Slider } from '../../components/slider/slider';
import { defaultPlayerNames } from './landing.constants';

@Component({
  selector: 'bm-landing',
  imports: [Slider],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  readonly scoreOptions = [150, 200, 250, 300, 500];
  readonly playerCountOptions = [2, 3, 4];

  targetScore = signal(150);
  playerCount = signal(2);
  playerNames = signal([...defaultPlayerNames[2]]);

  constructor() {
    effect(() => {
      this.playerNames.set([...defaultPlayerNames[this.playerCount()]]);
    });
  }

  updatePlayerName(index: number, event: Event): void {
    const name = (event.target as HTMLInputElement).value;
    this.playerNames.update(names => {
      const updatedNames = [...names];
      updatedNames[index] = name;
      return updatedNames;
    });
  }
}
