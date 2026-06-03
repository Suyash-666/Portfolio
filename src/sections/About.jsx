const TIMELINE = [
  {
    when: '2026 — Now',
    role: 'Building in public',
    org: 'Independent · Side projects',
    tag: 'Ongoing',
  },
  {
    when: '2023 — 2027',
    role: 'B.E. Information Technology',
    org: 'ARMIET · Mumbai University',
    tag: 'CGPA 7.44',
  },
  {
    when: '2024',
    role: 'ML Healthcare Recommendation',
    org: 'Research project · Python · Flask',
    tag: 'Capstone',
  },
  {
    when: '2023',
    role: 'Expense Tracker',
    org: 'MERN · Firebase · Charts',
    tag: 'Shipped',
  },
];

export default function About() {
  return (
    <section className="section reveal" id="about" aria-label="About">
      <div className="container">
        <div className="section__head">
          <div>
            <div className="section__index">03 — About</div>
            <h2 className="section__title">
              A short version of a long story.
            </h2>
          </div>
        </div>

        <div className="about">
          <div className="about__copy">
            <p>
              I&apos;m an IT engineer from Mumbai who treats the web as a craft.
              I love the parts nobody sees — the empty state, the 200&nbsp;ms
              that decides whether a product feels alive, the way a single
              typeface can change the temperature of an interface.
            </p>
            <p>
              I&apos;ve built ML prototypes, full-stack apps, and the small
              everyday tools that hold a product together. My favorite kind of
              work is the kind that makes someone&apos;s day a little calmer.
            </p>
            <p className="quiet">
              Outside of code: long walks, stronger coffee, slower websites.
            </p>
          </div>

          <div className="timeline" aria-label="Selected timeline">
            {TIMELINE.map((row) => (
              <div className="timeline__row" key={row.role}>
                <div className="timeline__when">{row.when}</div>
                <div className="timeline__what">
                  <strong>{row.role}</strong>
                  <span>{row.org}</span>
                </div>
                <div className="timeline__tag">{row.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
