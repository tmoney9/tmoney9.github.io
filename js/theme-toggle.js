/**
 * Theme Toggle — light / dark
 *
 * Classes applied to <html>:
 *   theme-light | theme-dark → controls color palette and icon visibility
 */

(function () {
  const STORAGE_KEY = 'theme-mode';
  const html = document.documentElement;
  const mq = window.matchMedia('(prefers-color-scheme: dark)');

  function getEffectiveTheme() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch {
      // localStorage unavailable
    }
    return mq.matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.classList.remove('theme-light', 'theme-dark');
    html.classList.add('theme-' + theme);
  }

  function toggleTheme() {
    const currentTheme = html.classList.contains('theme-dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // localStorage unavailable
    }
    applyTheme(newTheme);
  }

  // Listen for OS theme changes (only if no explicit stored preference)
  mq.addEventListener('change', function () {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') return;
    } catch {
      // localStorage unavailable
    }
    applyTheme(mq.matches ? 'dark' : 'light');
  });

  // Apply theme on load
  applyTheme(getEffectiveTheme());

  // Use event delegation so it works even when content-loader replaces DOM
  document.addEventListener('click', function (e) {
    if (e.target.closest('#theme-toggle')) {
      toggleTheme();
    }
  });
})();
