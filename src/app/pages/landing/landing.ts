import { Component, signal, effect } from '@angular/core';
import { Router } from '@angular/router';
import { Slider } from '../../components/slider/slider';
import { defaultPlayerNames } from './landing.constants';
import { GameConfig } from '../../models/game-config';

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

  constructor(private router: Router) {
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

  startGame(): void {
    const config: GameConfig = {
      targetScore: this.targetScore(),
      playerCount: this.playerCount(),
      playerNames: this.playerNames().slice(0, this.playerCount()),
    };
    this.router.navigate(['/game'], { state: { config } });
  }
}
