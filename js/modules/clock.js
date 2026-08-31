/**
 * Live Pacific Time Telemetry Clock
 */
export function initLiveClock() {
  const clockEl = document.getElementById('live-pt-clock');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    const options = {
      timeZone: 'America/Los_Angeles',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    clockEl.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
  }

  updateClock();
  setInterval(updateClock, 1000);
}
