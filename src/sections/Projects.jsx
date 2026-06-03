const PROJECTS = [
  {
    name: 'Real-Time Video Meeting Platform',
    desc:
      'A full-mesh WebRTC conferencing app for up to six participants — per-peer connections, glare-free handshakes, RLS-secured Supabase rooms.',
    stack: ['React', 'TypeScript', 'WebRTC', 'Supabase', 'Postgres', 'TensorFlow.js'],
    year: '2025',
    href: 'https://video-calling-sable.vercel.app',
    featured: true,
  },
  {
    name: 'ML Healthcare System',
    desc:
      'A recommendation engine that suggests care pathways from patient symptoms. Data, model, API, UI.',
    stack: ['Python', 'Flask', 'scikit-learn', 'Tailwind'],
    year: '2024',
    href: 'https://medical-recommendation-system-f037.onrender.com',
  },
  {
    name: 'Expense Tracker',
    desc:
      'A real-time personal finance app — categorised spending, monthly trends, a clean dashboard that respects your attention.',
    stack: ['React', 'Firebase', 'Charts', 'PWA'],
    year: '2024',
    href: 'https://suyash-666.github.io/finance-tracker/',
  },
  {
    name: 'This Site',
    desc:
      'A quiet, editorial portfolio — built with Vite, React, and restraint. No 3D, no neon, no parallax.',
    stack: ['Vite', 'React', 'CSS variables', 'Inter / Fraunces'],
    year: '2026',
    href: 'https://github.com/Suyash-666/Portfolio',
  },
];

export default function Projects() {
  return (
    <section className="section reveal" id="work" aria-label="Selected work">
      <div className="container">
        <div className="section__head">
          <div>
            <div className="section__index">01 — Selected work</div>
            <h2 className="section__title">
              Things I&apos;ve built, shipped, and learned from.
            </h2>
          </div>
          <a
            href="https://github.com/Suyash-666"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__link"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            All on GitHub →
          </a>
        </div>

        <div className="projects">
          {PROJECTS.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project"
              aria-label={`${p.name} — open project`}
            >
              <div className="project__index">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <span className="project__name">
                  {p.name}
                  <svg
                    className="arrow"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 14L14 4M14 4H6M14 4V12"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="project__desc">{p.desc}</p>
                <div className="project__stack">
                  {p.stack.map((s) => (
                    <span className="project__chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div /> {/* spacer on wide grid */}
              <div className="project__year">
                {p.featured ? (
                  <span className="project__now">
                    <span className="dot" aria-hidden="true" />
                    Now · {p.year}
                  </span>
                ) : (
                  p.year
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
