/**
 * Smooth Page Transition Handler
 * Intercepts internal link clicks for seamless opacity transitions
 */
export function initPageTransitions() {
  document.body.classList.add('page-loaded');

  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    const href = link.getAttribute('href');
    // Check if link is an internal HTML page navigation
    if (
      href &&
      !href.startsWith('#') &&
      !href.startsWith('http') &&
      !href.startsWith('mailto:') &&
      !href.endsWith('.pdf') &&
      link.target !== '_blank'
    ) {
      link.addEventListener('click', (e) => {
        // Allow cmd/ctrl click to open in new tab
        if (e.metaKey || e.ctrlKey) return;
        
        e.preventDefault();
        document.body.classList.add('page-transitioning');
        
        setTimeout(() => {
          window.location.href = href;
        }, 140);
      });
    }
  });

  // Handle pages loaded from browser back/forward cache
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      document.body.classList.remove('page-transitioning');
      document.body.classList.add('page-loaded');
    }
  });
}
