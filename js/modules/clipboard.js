/**
 * Email Clipboard Action & Feedback Toast
 */
export function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  if (!copyBtn || !toast) return;

  copyBtn.addEventListener('click', async () => {
    const email = copyBtn.getAttribute('data-email') || 'narla.mayank@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      const copyTextEl = document.getElementById('copy-text');
      const originalText = copyTextEl ? copyTextEl.textContent : 'COPY EMAIL';
      if (copyTextEl) copyTextEl.textContent = 'COPIED!';
      toast.classList.add('show');

      setTimeout(() => {
        if (copyTextEl) copyTextEl.textContent = originalText;
        toast.classList.remove('show');
      }, 2500);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  });
}
