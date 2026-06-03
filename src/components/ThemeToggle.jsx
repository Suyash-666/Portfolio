import { useEffect, useState } from 'react';

const STORAGE_KEY = 'sp-theme';

function getInitial() {
  if (typeof window === 'undefined') return 'system';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return 'system';
}

function applyTheme(mode) {
  const root = document.documentElement;
  if (mode === 'system') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', mode);
  }
}

export default function ThemeToggle() {
  const [mode, setMode] = useState(getInitial);

  useEffect(() => {
    applyTheme(mode);
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* noop */
    }
  }, [mode]);

  const next = mode === 'light' ? 'dark' : mode === 'dark' ? 'system' : 'light';
  const label =
    mode === 'light' ? 'Light' : mode === 'dark' ? 'Dark' : 'System';

  return (
    <button
      type="button"
      className="nav__cta"
      onClick={() => setMode(next)}
      aria-label={`Theme: ${label}. Click to switch.`}
      title={`Theme: ${label}`}
    >
      <span>{label === 'System' ? 'Auto' : label}</span>
    </button>
  );
}
