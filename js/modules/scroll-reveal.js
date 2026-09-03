/**
 * SCROLL-TRIGGERED ENTRANCE REVEAL SYSTEM
 * Smooth, hardware-accelerated entrance animations with staggered cascades.
 * Uses native IntersectionObserver for 60fps performance without layout shift.
 * Respects prefers-reduced-motion automatically.
 */

export function initScrollReveal() {
  // Respect OS reduced-motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // Target card groups and their respective item selectors
  const targetGroups = [
    { container: '.hero-metrics-column', items: '.metric-card' },
    { container: '.experience-list', items: '.exp-card' },
    { container: '.skills-matrix-grid', items: '.matrix-card' },
    { container: '.projects-grid', items: '.project-card' },
    { container: '.contact-actions-grid', items: '.contact-channel-card' },
  ];

  const elementsToObserve = [];

  targetGroups.forEach(({ container, items }) => {
    const parents = document.querySelectorAll(container);
    parents.forEach((parent) => {
      const cards = parent.querySelectorAll(items);
      cards.forEach((card, index) => {
        // Assign stagger index (80-120ms standard: 100ms per sibling)
        card.style.setProperty('--reveal-stagger', index);
        card.classList.add('scroll-reveal');
        elementsToObserve.push(card);
      });
    });
  });

  if (elementsToObserve.length === 0) return;

  // Single-fire IntersectionObserver triggering at ~15-20% visibility
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('is-revealed');
          obs.unobserve(el);

          // Clear delay once revealed so future hover interactions respond instantly
          el.addEventListener(
            'transitionend',
            (e) => {
              if (e.propertyName === 'transform') {
                el.style.transitionDelay = '0s';
              }
            },
            { once: true }
          );
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elementsToObserve.forEach((el) => observer.observe(el));
}
