import { Component, Input } from '@angular/core';

@Component({
  selector: 'bm-score-notation',
  imports: [],
  templateUrl: './score-notation.html',
  styleUrl: './score-notation.scss',
})
export class ScoreNotation {
  @Input() score: number = 0;

  get completeClusters(): number[] {
    return Array.from({ length: Math.floor(this.score / 50) }, (_, index) => index);
  }

  get partialTens(): number {
    return Math.floor((this.score % 50) / 10);
  }

  get hasFive(): boolean {
    return this.score % 10 === 5;
  }

  get showPartialCluster(): boolean {
    return this.partialTens > 0 || this.hasFive;
  }
}
