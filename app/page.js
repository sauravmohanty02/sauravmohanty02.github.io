export default function Home() {
  return (
    <main className="page">
      <header className="hero" id="top">
        <nav className="nav">
          <div className="logo">SM</div>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact" className="btn btn-ghost">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <div>
            <p className="eyebrow">Software Engineer</p>
            <h1>Saurav Mohanty</h1>
            <p className="subhead">
              Software engineer focused on automation, backend APIs, DevOps and machine learning.
              Currently pursuing an M.S. in Computer Science at UC Davis (Sep 2025 – May 2027).
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Let&apos;s Talk</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-top">
              <span className="pill">Available for internships</span>
              <span className="pill pill-muted">Bay Area • Remote</span>
            </div>
            <div className="hero-card-body">
              <p className="stat-label">Focus</p>
              <p className="stat">Backend • DevOps • MLOps • ML Systems • ML</p>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="about">
        <div className="section-head">
          <p className="eyebrow">About</p>
          <h2>Building reliable systems with measurable impact.</h2>
        </div>
        <div className="grid-two">
          <p className="body">
            I like solving problems that sit at the intersection of engineering and product impact.
            My work spans CI/CD automation, backend services, and machine learning systems that
            ship fast and scale cleanly.
          </p>
          <div className="highlight">
            <p className="highlight-title">Focus areas</p>
            <ul className="list">
              <li>Developer productivity via automation and tooling.</li>
              <li>RESTful APIs and metadata management.</li>
              <li>Applied ML for content moderation and classification.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-head">
          <h2> Projects</h2>
        </div>
        <div className="section-actions">
          <a
            className="btn btn-ghost"
            href="https://github.com/sauravmohanty02"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="card-grid">
          <article className="card">
            <div className="card-meta">Machine Learning</div>
            <h3>Few-Shot Handwritten Character Classification</h3>
            <p>
              Prototypical Network CNN encoder for few-shot classification with episodic N-way K-shot
              training. Achieved 81% accuracy on 5-way 1-shot and 89.8% on 5-shot tasks.
            </p>
            <div className="card-tags">
              <span>Python</span>
              <span>PyTorch</span>
              <span>TensorFlow</span>
              <span>Scikit-learn</span>
            </div>
          </article>
          <article className="card">
            <div className="card-meta">Realtime Systems</div>
            <h3>Multi-Room Chat Platform</h3>
            <p>
              Built a socket-based chat platform with concurrent connections, persistent message
              history, and support for 100k+ user profiles.
            </p>
            <div className="card-tags">
              <span>Socket Programming</span>
              <span>Concurrency</span>
              <span>Database</span>
            </div>
          </article>
          <article className="card">
            <div className="card-meta">NLP</div>
            <h3>Hate Speech & Offensive Language Detection</h3>
            <p>
              NLP pipeline with TF-IDF features for real-time flagging under 200ms latency, integrated
              into a chat application used by 30,000+ employees.
            </p>
            <div className="card-tags">
              <span>Python</span>
              <span>TF-IDF</span>
              <span>Moderation</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2>Shipping automation, APIs, and ML in production.</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div>
              <p className="timeline-role">Software Engineer</p>
              <p className="timeline-company">HSBC • Maharashtra</p>
            </div>
            <p className="timeline-date">Jul 2024 – Sep 2024</p>
            <ul className="timeline-detail list-compact">
              <li>
                Automated and optimized CI/CD pipelines using Groovy scripts, reducing deployment time by 40% and increasing
                team velocity by 20%
              </li>
              <li>
                Designed RESTful APIs to manage baseline metadata, improving traceability data
                retrieval by 50%.
              </li>
              <li>
                Created deployment pipelines from scratch to integrate automated security scans, enhancing compliance and early
                vulnerability detection.
              </li>
              <li>
                Automated the creation of Jenkins pipelines along with YAML and CODEOWNERS file generation, cutting manual
                configuration effort by 80%, reducing errors by 50%, and accelerating deployment cycles for 75+ capabilities
              </li>
            </ul>
          </div>
          <div className="timeline-item">
            <div>
              <p className="timeline-role">SWE Intern</p>
              <p className="timeline-company">Bajaj Finserv • Pune, Maharashtra</p>
            </div>
            <p className="timeline-date">Aug 2023 – Nov 2023</p>
            <ul className="timeline-detail list-compact">
              <li>
                Built an NLP-based machine learning model to detect hate speech and offensive
                language in text, improving moderation efficiency.
              </li>
              <li>
                Preprocessed large datasets with tokenization, stemming, stop-word removal, and
                TF-IDF vectorization.
              </li>
              <li>
                Enabled real-time hate speech flagging with less than 200ms latency, integrating
                into a chat application used by 30,000+ employees.
              </li>
            </ul>
          </div>
          <div className="timeline-item">
            <div>
              <p className="timeline-role">SWE Intern</p>
              <p className="timeline-company">Bajaj Finserv • Pune, Maharashtra</p>
            </div>
            <p className="timeline-date">Mar 2023 – May 2023</p>
            <ul className="timeline-detail list-compact">
              <li>
                Developed a real-time multi-user chat application with support for multiple chat
                rooms using socket programming, handling concurrent connections with low latency.
              </li>
              <li>
                Integrated a backend database to store 100k+ user profiles, chat history, and
                timestamps, enabling persistent message tracking.
              </li>
              <li>
                Implemented scalability and concurrency mechanisms to support multiple simultaneous
                users with minimal latency.
              </li>
            </ul>
          </div>
        </div>
        
      </section>

      <section className="section" id="education">
        <div className="section-head">
          {/* <p className="eyebrow">Education</p> */}
          <h2>Education</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div>
              <p className="timeline-role">M.S. in Computer Science</p>
              <p className="timeline-company">University of California, Davis</p>
            </div>
            <p className="timeline-date">Sep 2025 – May 2027</p>
            <p className="timeline-detail">Graduate studies focused on systems, ML, and scalable software.</p>
          </div>
          <div className="timeline-item">
            <div>
              <p className="timeline-role">B.E. in Information Technology </p>
              <p className="timeline-company">Pune Institute of Technology, Pune</p>
            </div>
            <p className="timeline-date">Jul 2020 – Jun 2024</p>
            <p className="timeline-detail">Core CS coursework in DSA, OOP, DBMS, CNS and distributed systems.</p>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-head">
          <p className="eyebrow">Skills</p>
          <h2>Languages, frameworks, and systems I build with.</h2>
        </div>
        <div className="tag-grid">
          <span>Java</span>
          <span>Python</span>
          <span>Groovy</span>
          <span>C/C++</span>
          <span>SQL</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Golang</span>
          <span>Rust</span>
          <span>Node.js</span>
          <span>ExpressJS</span>
          <span>Flask</span>
          <span>Django</span>
          <span>FastAPI</span>
          <span>Jenkins</span>
          <span>NextJS</span>
          <span>React</span>
          <span>MongoDB</span>
          <span>Redis</span>
          <span>PostgreSQL</span>
          <span>MySQL</span>
          <span>SQL Server</span>
          <span>NoSQL</span>
          <span>GraphQL</span>
          <span>Scikit-learn</span>
          <span>TensorFlow</span>
          <span>Keras</span>
          <span>OpenCV</span>
          <span>NumPy</span>
          <span>Pandas</span>
          <span>PyTorch</span>
          <span>AWS (ECS, EC2, S3, RDS)</span>
          <span>Jenkins CI/CD</span>
          <span>CI/CD</span>
          <span>Docker</span>
          <span>GCP</span>
          <span>Azure</span>
          <span>Microservices</span>
          <span>Agile</span>
          <span>Kubernetes</span>
          <span>Terraform</span>
          <span>Ansible</span>
          <span>Linux</span>
          <span>UNIX</span>
          <span>Jira</span>
          <span>Redux</span>
          <span>Datadog</span>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-head">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s connect.</h2>
        </div>
        <div className="contact-card">
          <p>
            Open to internships and collaborative projects. Feel free to reach out.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:samohany@ucdavis.edu">samohany@ucdavis.edu</a>
            <a className="btn btn-ghost" href="tel:+12063917546">+1 (206) 391-7546</a>
            <a
              className="btn btn-secondary"
              href="https://github.com/sauravmohanty02"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-secondary"
              href="https://www.linkedin.com/in/saurav-mohanty2002/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Saurav Mohanty</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}
