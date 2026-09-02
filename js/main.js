/**
 * MAIN JAVASCRIPT ENTRY POINT
 * Coordinates modular subsystems and smooth multi-page navigation
 */

import { initScrollProgress } from './modules/scroll-progress.js';
import { initNumberTickers } from './modules/tickers.js';
import { initProjectFilters } from './modules/filters.js';
import { initCustomCursor } from './modules/cursor.js';
import { initEmailCopy } from './modules/clipboard.js';
import { initArchitectureDrawers } from './modules/architecture-drawer.js';
import { initPageTransitions } from './modules/page-transition.js';

document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initScrollProgress();
  initNumberTickers();
  initProjectFilters();
  initCustomCursor();
  initEmailCopy();
  initArchitectureDrawers();
});
