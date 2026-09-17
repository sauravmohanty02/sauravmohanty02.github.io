const skills = [
  "Python",
  "TypeScript",
  "JavaScript (ES6+)",
  "Java",
  "C/C++",
  "SQL",
  "Groovy",
  "Bash/Shell",
  "REST APIs",
  "Distributed Systems",
  "Concurrency",
  "Data Structures & Algorithms",
  "OOP",
  "DBMS",
  "Django",
  "FastAPI",
  "Node.js",
  "React",
  "Next.js",
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "MongoDB",
  "Redis",
  "AWS (EKS, ECS, S3, RDS)",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "CI/CD",
  "ArgoCD/GitOps",
  "Terraform",
  "Linux/UNIX",
  "SonarQube",
  "OWASP ZAP",
  "Trivy",
  "HashiCorp Vault",
  "Prometheus",
  "Grafana",
  "LLM APIs",
  "RAG",
  "LangChain",
  "ChromaDB",
  "Scikit-learn",
  "PyTorch",
  "TensorFlow",
  "Claude Code",
  "Cursor",
];

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
              Full-stack and platform engineer building backend services, CI/CD and cloud infrastructure,
              and LLM-powered systems. Currently a Software Engineer at UC Davis while pursuing an M.S. in
              Computer Science (Sep 2025 – Mar 2027).
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Let&apos;s Talk</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-top">
              <span className="pill">Open to opportunities</span>
              <span className="pill pill-muted">Davis, CA • Remote</span>
            </div>
            <div className="hero-card-body">
              <p className="stat-label">Focus</p>
              <p className="stat">Backend • Full Stack • Platform & DevSecOps • AI Systems</p>
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
            I build production systems end to end: from API contracts and database schemas to the
            pipelines that ship them and the observability that keeps them honest. My work spans
            enterprise CI/CD and Kubernetes platforms at HSBC, full-stack research services at UC Davis,
            and applied ML and LLM systems.
          </p>
          <div className="highlight">
            <p className="highlight-title">Focus areas</p>
            <ul className="list">
              <li>Backend services, async job pipelines, and REST API design.</li>
              <li>CI/CD, GitOps, and DevSecOps on AWS and Kubernetes.</li>
              <li>RAG, LLM agents, and observability for AI systems.</li>
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
            <div className="card-meta">Observability • LLM Agents</div>
            <h3>Aura: Selective Telemetry for Multi-Agent Systems</h3>
            <p>
              Policy-driven observability layer for a multi-step LLM agent pipeline that escalates from
              lightweight to maximal logging on runtime failure signals like tool errors, LLM failures, and
              node faults. Validated with a 300-run fault-injection campaign across 6 failure categories,
              reaching 85% stage-level fault-localization accuracy.
            </p>
            <div className="card-tags">
              <span>Python</span>
              <span>REST</span>
              <span>Prometheus</span>
              <span>Grafana</span>
              <span>Loki</span>
              <span>Docker</span>
            </div>
          </article>
          <article className="card">
            <div className="card-meta">RAG • Hackathon Winner (1st of 40)</div>
            <h3>Dental AI</h3>
            <p>
              Retrieval-Augmented Generation pipeline with ChromaDB top-K similarity search and
              metadata-filtered retrieval, tuned to suppress hallucinations and reach 80%+ accuracy. Shipped
              as a containerized full-stack decision-support app with sub-second multi-document queries in
              24 hours.
            </p>
            <div className="card-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>FastAPI</span>
              <span>ChromaDB</span>
              <span>Docker</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2>Shipping backend services, platforms, and ML in production.</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div>
              <p className="timeline-role">Software Engineer (Full Stack)</p>
              <p className="timeline-company">UC Davis • Davis, CA</p>
            </div>
            <p className="timeline-date">Jun 2026 – Present</p>
            <ul className="timeline-detail list-compact">
              <li>
                Designed an asynchronous job-processing pipeline (Python asyncio, Django management commands)
                that queues simulation requests and dispatches them over TCP sockets to an external C++
                compute process.
              </li>
              <li>
                Built the surrounding production service (Django REST Framework, PostgreSQL, Next.js/React),
                translating researcher requirements into system design, API contracts, and schema decisions
                with trade-offs across latency, reliability, and cost.
              </li>
              <li>
                Wrote tests, API documentation, and runbooks, and used AI-assisted tooling (Claude Code,
                Cursor) for code generation and refactoring, reviewing and validating all output before merge.
              </li>
            </ul>
          </div>
          <div className="timeline-item">
            <div>
              <p className="timeline-role">Software Engineer (Platform, Infrastructure & Security)</p>
              <p className="timeline-company">HSBC • Pune, India</p>
            </div>
            <p className="timeline-date">Jul 2024 – Sep 2025</p>
            <ul className="timeline-detail list-compact">
              <li>
                Designed RESTful APIs and relational schemas for centralized pipeline metadata serving 5+
                teams, improving end-to-end traceability and cutting data retrieval time by 50%.
              </li>
              <li>
                Engineered global CI/CD pipelines (Groovy, Jenkins Shared Libraries) with automated
                Infrastructure-as-Code generation across 75+ enterprise capabilities, cutting deployment
                latency 40% and manual toil 80%.
              </li>
              <li>
                Migrated Kubernetes deployments on AWS EKS to a GitOps framework with ArgoCD, cutting
                deployment failures 30%.
              </li>
              <li>
                Implemented DevSecOps across enterprise pipelines with SonarQube (SAST), OWASP ZAP (DAST),
                Trivy image scanning, and HashiCorp Vault, shifting vulnerability detection left of deployment.
              </li>
            </ul>
          </div>
          <div className="timeline-item">
            <div>
              <p className="timeline-role">Software Engineer Intern (ML & Backend)</p>
              <p className="timeline-company">Bajaj Finserv • Pune, India</p>
            </div>
            <p className="timeline-date">Aug 2023 – Nov 2023</p>
            <ul className="timeline-detail list-compact">
              <li>
                Deployed a production NLP classification service (Scikit-learn, TF-IDF) behind a REST
                inference API to flag abusive content in real time at sub-200ms latency for 30,000+ users.
              </li>
              <li>
                Tuned preprocessing and evaluated the model against precision/recall targets on held-out data
                before rollout, cutting manual moderation effort 60%.
              </li>
            </ul>
          </div>
          <div className="timeline-item">
            <div>
              <p className="timeline-role">Software Engineer Intern (Backend)</p>
              <p className="timeline-company">Bajaj Finserv • Pune, India</p>
            </div>
            <p className="timeline-date">Mar 2023 – May 2023</p>
            <ul className="timeline-detail list-compact">
              <li>
                Built a high-concurrency, low-latency messaging service using WebSockets and raw socket
                programming, supporting multiple rooms, read receipts, and concurrent connections across
                100,000+ user profiles.
              </li>
              <li>
                Optimized database schemas and added asynchronous processing for chat history and message
                state, reducing API timeouts 15% and sustaining availability under peak traffic.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="section-head">
          <h2>Education</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div>
              <p className="timeline-role">M.S. in Computer Science</p>
              <p className="timeline-company">University of California, Davis</p>
            </div>
            <p className="timeline-date">Sep 2025 – Mar 2027</p>
            <p className="timeline-detail">Graduate studies focused on systems, ML, and scalable software.</p>
          </div>
          <div className="timeline-item">
            <div>
              <p className="timeline-role">B.E. in Information Technology</p>
              <p className="timeline-company">Pune Institute of Computer Technology, Pune</p>
            </div>
            <p className="timeline-date">Jul 2020 – Jun 2024</p>
            <p className="timeline-detail">GPA: 3.8/4.0</p>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-head">
          <p className="eyebrow">Skills</p>
          <h2>Languages, frameworks, and systems I build with.</h2>
        </div>
        <div className="tag-grid">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-head">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s connect.</h2>
        </div>
        <div className="contact-card">
          <p>
            Open to software engineering roles and collaborative projects. Feel free to reach out.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:samohanty@ucdavis.edu">samohanty@ucdavis.edu</a>
            <a className="btn btn-ghost" href="tel:+12063917546">+1-(206)391-7546</a>
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
