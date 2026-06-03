import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);

  // Cursor-following spotlight. Restrained, ambient — not animated starfield.
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let mx = 50;
    let my = 30;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      if (Number.isFinite(x) && Number.isFinite(y)) {
        mx = Math.max(0, Math.min(100, x));
        my = Math.max(0, Math.min(100, y));
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.setProperty('--mx', `${mx}%`);
          el.style.setProperty('--my', `${my}%`);
        });
      }
    };
    el.addEventListener('pointermove', onMove);
    return () => {
      el.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__spotlight" aria-hidden="true" />
      <div className="container">
        <div className="hero__eyebrow eyebrow">
          <span className="dot" />
          <span>Open to opportunities · 2026</span>
        </div>

        <h1 className="hero__title">
          Engineer by training.<br />
          <em>Builder</em> by choice.
        </h1>

        <p className="hero__lede">
          I&apos;m Suyash — an IT engineer and MERN-stack developer who cares
          about how software feels. I design and ship thoughtful web products,
          from machine-learning experiments to tools that quietly do their job.
        </p>

        <div className="hero__meta" aria-label="At a glance">
          <div>
            <span className="label">Based in</span>
            <span className="value">Mumbai, India</span>
          </div>
          <div>
            <span className="label">Focus</span>
            <span className="value">Full-stack · Product · ML</span>
          </div>
          <div>
            <span className="label">Currently</span>
            <span className="value">
              Building <span className="now">●</span>
            </span>
          </div>
        </div>

        <div>
          <a href="#work" className="hero__cta">
            <span>See selected work</span>
            <svg
              className="arrow"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 13L13 3M13 3H5.5M13 3V10.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#contact" className="hero__secondary">
            Or just say hello →
          </a>
        </div>
      </div>
    </section>
  );
}
