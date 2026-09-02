/**
 * MAIN JAVASCRIPT ENTRY POINT
 * Coordinates modular telemetry and interaction subsystems
 */

import { initScrollProgress } from './modules/scroll-progress.js';
import { initNumberTickers } from './modules/tickers.js';
import { initProjectFilters } from './modules/filters.js';
import { initCustomCursor } from './modules/cursor.js';
import { initEmailCopy } from './modules/clipboard.js';
import { initArchitectureDrawers } from './modules/architecture-drawer.js';

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initNumberTickers();
  initProjectFilters();
  initCustomCursor();
  initEmailCopy();
  initArchitectureDrawers();
});
