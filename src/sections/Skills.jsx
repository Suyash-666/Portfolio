const SKILLS = [
  { label: 'JavaScript', meta: 'ES2024 / TypeScript' },
  { label: 'React', meta: 'Hooks · Suspense · RSC' },
  { label: 'Node.js', meta: 'Express · Fastify' },
  { label: 'Supabase', meta: 'Auth · Realtime · RLS' },
  { label: 'PostgreSQL', meta: 'Schema · RLS · RPCs' },
  { label: 'MongoDB', meta: 'Atlas · Aggregations' },
  { label: 'Python', meta: 'Flask · Pandas · scikit' },
  { label: 'C++', meta: 'DSA · Systems' },
  { label: 'SQL', meta: 'Postgres · MySQL' },
  { label: 'Firebase', meta: 'Auth · Firestore' },
  { label: 'AWS', meta: 'EC2 · S3 · Lambda' },
  { label: 'Docker', meta: 'Compose · Images' },
  { label: 'Linux', meta: 'Bash · Servers' },
  { label: 'Figma', meta: 'UI · Prototyping' },
];

// Marquee list (duplicated for seamless loop)
const MARQUEE = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express',
  'Supabase', 'PostgreSQL', 'MongoDB', 'Python', 'Flask',
  'C++', 'Firebase', 'AWS', 'Docker', 'Linux', 'Figma',
];

export default function Skills() {
  return (
    <>
      <section className="section section--tight reveal" id="skills" aria-label="Skills">
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...MARQUEE, ...MARQUEE].map((s, i) => (
              <span className="marquee__item" key={`${s}-${i}`}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" aria-label="Capabilities">
        <div className="container">
          <div className="section__head">
            <div>
              <div className="section__index">02 — Capabilities</div>
              <h2 className="section__title">
                A pragmatic stack, <em style={{ fontStyle: 'italic', color: 'var(--muted)' }}>chosen</em> with intent.
              </h2>
            </div>
            <p style={{ color: 'var(--muted)', maxWidth: 38 + 'ch', fontSize: 14.5, lineHeight: 1.55 }}>
              I pick tools that disappear. The list below covers what I reach
              for most often — production-grade, well-understood, and
              boring on purpose.
            </p>
          </div>

          <div className="skills">
            {SKILLS.map((s) => (
              <div className="skill" key={s.label}>
                <div className="skill__label">{s.label}</div>
                <div className="skill__meta">{s.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
