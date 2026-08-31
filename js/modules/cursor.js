/**
 * Kinetic Custom Cursor Tracker
 */
export function initCustomCursor() {
  const cursor = document.getElementById('cursor-tracker');
  if (!cursor || window.matchMedia('(hover: none)').matches) return;

  const crosshair = cursor.querySelector('.cursor-crosshair');
  const label = cursor.querySelector('.cursor-label');

  let mouseX = -100;
  let mouseY = -100;
  let cursorX = -100;
  let cursorY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.25;
    cursorY += (mouseY - cursorY) * 0.25;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Interactive Hover states
  const interactables = document.querySelectorAll('a, button, .project-card, .metric-card, .exp-card');
  interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (el.tagName === 'A' || el.classList.contains('project-link') || el.classList.contains('project-ext-btn')) {
        crosshair.textContent = '↗';
        label.textContent = 'OPEN';
      } else if (el.tagName === 'BUTTON') {
        crosshair.textContent = '✦';
        label.textContent = 'ACTIVATE';
      } else {
        crosshair.textContent = '+';
        label.textContent = 'INSPECT';
      }
    });

    el.addEventListener('mouseleave', () => {
      crosshair.textContent = '+';
      label.textContent = '';
    });
  });
}
