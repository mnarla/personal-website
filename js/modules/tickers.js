/**
 * Numerical Digital Tickers (Count-up on scroll with mechanical ease)
 */
export function initNumberTickers() {
  const metricValues = document.querySelectorAll('.metric-value');
  if (!metricValues.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target') || '0');
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        animateValue(el, 0, target, 1200, decimals);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  metricValues.forEach(el => observer.observe(el));

  function animateValue(element, start, end, duration, decimals) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Fast mechanical ease-out
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeProgress;
      element.textContent = current.toFixed(decimals);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = end.toFixed(decimals);
      }
    };
    window.requestAnimationFrame(step);
  }
}
