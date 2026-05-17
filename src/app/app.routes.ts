import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Scorekeeping } from './pages/scorekeeping/scorekeeping';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'game', component: Scorekeeping },
];
