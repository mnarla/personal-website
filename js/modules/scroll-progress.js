/**
 * Top Scroll Progress Line (GPU-Accelerated Telemetry Indicator)
 */
export function initScrollProgress() {
  const progressLine = document.getElementById('scroll-progress-line');
  if (!progressLine) return;

  function updateProgress() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      progressLine.style.transform = 'scaleX(0)';
      return;
    }
    const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
    progressLine.style.transform = `scaleX(${progress})`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}
