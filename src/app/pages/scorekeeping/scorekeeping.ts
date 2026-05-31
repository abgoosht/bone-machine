import { Component, OnInit, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { GameConfig } from '../../models/game-config';
import { ScoreNotation } from '../../components/score-notation/score-notation';

@Component({
  selector: 'bm-scorekeeping',
  imports: [ScoreNotation],
  templateUrl: './scorekeeping.html',
  styleUrl: './scorekeeping.scss',
})
export class Scorekeeping implements OnInit {
  config = signal<GameConfig | null>(null);
  scores = signal<number[]>([]);

  winner = computed(() => {
    const gameConfig = this.config();
    if (!gameConfig) return -1;
    return this.scores().findIndex(score => score >= gameConfig.targetScore);
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    const state = history.state as { config: GameConfig } | undefined;
    if (state?.config) {
      this.config.set(state.config);
      this.scores.set(state.config.playerNames.map(() => 0));
    }
  }

  increment(playerIndex: number): void {
    if (this.winner() !== -1) return;
    this.scores.update(currentScores => {
      const updatedScores = [...currentScores];
      updatedScores[playerIndex] += 5;
      return updatedScores;
    });
  }

  decrement(playerIndex: number): void {
    this.scores.update(currentScores => {
      const updatedScores = [...currentScores];
      updatedScores[playerIndex] = Math.max(0, updatedScores[playerIndex] - 5);
      return updatedScores;
    });
  }

  playAgain(): void {
    this.router.navigate(['/']);
  }
}
