import { Component, OnInit, signal } from '@angular/core';
import { GameConfig } from '../../models/game-config';

@Component({
  selector: 'bm-scorekeeping',
  imports: [],
  templateUrl: './scorekeeping.html',
  styleUrl: './scorekeeping.scss',
})
export class Scorekeeping implements OnInit {
  config = signal<GameConfig | null>(null);

  ngOnInit(): void {
    const state = history.state as { config: GameConfig } | undefined;
    if (state?.config) {
      this.config.set(state.config);
    }
  }
}
