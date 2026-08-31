/**
 * Top Scroll Progress Line (Telemetry Indicator)
 */
export function initScrollProgress() {
  const progressLine = document.getElementById('scroll-progress-line');
  if (!progressLine) return;

  function updateProgress() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressLine.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}
