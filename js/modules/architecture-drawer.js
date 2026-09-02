/**
 * Expandable System Architecture Drawer Controller
 */
export function initArchitectureDrawers() {
  const toggleButtons = document.querySelectorAll('.arch-toggle-btn');
  if (!toggleButtons.length) return;

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute('data-target');
      const drawer = document.getElementById(targetId);
      if (!drawer) return;

      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded);
      drawer.classList.toggle('open', !isExpanded);

      const indicator = btn.querySelector('.arch-toggle-indicator');
      if (indicator) {
        indicator.textContent = !isExpanded ? '▾' : '▸';
      }
    });
  });
}
