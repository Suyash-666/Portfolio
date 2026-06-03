export default function Contact() {
  return (
    <section className="contact reveal" id="contact" aria-label="Contact">
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: 24 }}>
          <span className="dot" />
          <span>Let&apos;s build something</span>
        </div>
        <h2 className="contact__title">
          Have an idea? <em>I&apos;d love to hear it.</em>
        </h2>
        <p className="contact__lede">
          I&apos;m currently open to full-time roles and selective freelance
          work. The fastest way to reach me is email — I usually reply within
          a day.
        </p>

        <div className="contact__row">
          <a className="contact__pill" href="mailto:sp4367475@gmail.com">
            <span className="dot" />
            <span>sp4367475@gmail.com</span>
          </a>
          <a
            className="contact__pill"
            href="https://www.linkedin.com/in/suyash-pawar-539741202/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="contact__pill"
            href="https://github.com/Suyash-666"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="contact__pill"
            href="https://leetcode.com/u/Suyash_666/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LeetCode</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <footer className="container" style={{ marginTop: 96 }}>
        <div className="footer">
          <div>© {new Date().getFullYear()} Suyash Pawar</div>
          <div className="footer__links">
            <a href="mailto:sp4367475@gmail.com">sp4367475@gmail.com</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
