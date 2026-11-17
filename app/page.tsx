import Image from "next/image";
import { SemanticDiagnostic } from "./semantic-diagnostic";

import { basePath, siteUrl } from "../site-config.mjs";

const problemCards = [
  {
    number: "01",
    title: "Change starts with archaeology",
    copy: "Understanding a change may require reconstructing intent from code, policies, data, documentation, and the knowledge of experienced people.",
  },
  {
    number: "02",
    title: "Context is translated repeatedly",
    copy: "Different disciplines may interpret the same business requirement through separate technical, operational, and organizational perspectives.",
  },
  {
    number: "03",
    title: "Assurance arrives too late",
    copy: "Relationships between approved intent, implementation, dependencies, and verification evidence may only become visible after changes have been implemented.",
  },
];

const principles = [
  {
    number: "01",
    title: "Own the meaning",
    copy: "Explore how critical system intent can be represented explicitly rather than remaining implicit within particular implementations.",
  },
  {
    number: "02",
    title: "Make implementation replaceable",
    copy: "Investigate whether business meaning and behavioral constraints can remain stable while underlying technologies change.",
  },
  {
    number: "03",
    title: "Keep change accountable",
    copy: "Examine how approved intent, implementation changes, and verification evidence might remain connected throughout software evolution.",
  },
];

const researchScenarios = [
  {
    label: "System modernization",
    question: "What must remain true when the technology changes?",
    context:
      "Can explicit semantic models help preserve essential business behavior when an implementation is replaced or modernized?",
  },
  {
    label: "Regulated change",
    question: "Can systems, controls, and obligations be traced before implementation?",
    context:
      "Could ontology-based representations help identify dependencies and consistency requirements associated with a proposed change?",
  },
  {
    label: "AI agent authority",
    question: "What defines the boundaries of an agent's permitted actions?",
    context:
      "Can independently defined semantic rules and constraints help preserve an agent's intended authority when prompts, models, or tool configurations change?",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Ontology-Native Software Engineering",
      description:
        "An independent, non-commercial technical research project exploring how ontologies could guide software design, implementation, verification, and evolution.",
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}#webpage`,
      url: siteUrl,
      name: "Ontology-Native Software Engineering | Ontology-Native Engineering Research",
      description:
        "An independent, non-commercial technical research project exploring how ontologies could guide software design, implementation, verification, and evolution.",
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ontology-Native Software Engineering home">
          <span>Ontology-Native Software Engineering</span>
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#problem">Research Motivation</a>
          <a href="#premise">Research Hypothesis</a>
          <a href="#prototype">Working Prototype</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-main">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">Independent technical research</p>
              <h1>Own the meaning behind your systems.</h1>
              <p className="hero-deck">
                Ontology-Native Software Engineering explores the hypothesis that ontologies could serve as an authoritative semantic
                foundation for software systems, guiding their design, implementation, and evolution.
              </p>
              <p className="hero-deck">
                The research investigates how explicitly modeled meaning might remain consistent as technologies,
                implementations, and requirements change.
              </p>
              <div className="hero-actions">
                <a className="button button-accent" href="#premise">Explore the Research</a>
                <a className="text-link" href="#diagnostic">
                  Take the Research Self-Assessment <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <span className="visual-orbit visual-orbit-one" />
              <span className="visual-orbit visual-orbit-two" />
              <span className="visual-rail visual-rail-one" />
              <span className="visual-rail visual-rail-two" />
              <span className="visual-rail visual-rail-three" />
              <span className="signal-line signal-line-one" />
              <span className="signal-line signal-line-two" />
              <span className="signal-line signal-line-three" />
              <span className="signal-line signal-line-four" />
              <span className="signal-line signal-line-five" />
              <span className="signal-line signal-line-six" />
              <span className="signal-fragment fragment-one" />
              <span className="signal-fragment fragment-two" />
              <span className="signal-fragment fragment-three" />
              <span className="signal-fragment fragment-four" />
              <span className="signal-fragment fragment-five" />
              <span className="signal-core" />
              <span className="output-line output-line-one" />
              <span className="output-line output-line-two" />
              <span className="output-line output-line-three" />
            </div>
          </div>

          <div className="hero-thesis">
            <span>Research Hypothesis</span>
            <strong>The ontology is the software.</strong>
            <p>Code is its compiled form.</p>
          </div>
        </section>

        <section className="section problem-section" id="problem">
          <div className="section-index">01 / Research Motivation</div>
          <div className="section-intro">
            <p className="eyebrow">The translation tax</p>
            <div>
              <h2>Why do complex systems repeatedly reconstruct the same meaning?</h2>
              <p className="section-lead">
                In complex organizations, business meaning is often distributed across software, policies, data
                structures, documentation, and human expertise.
              </p>
              <p className="section-lead">
                When systems evolve, the intent behind their behavior may need to be reconstructed from these fragmented
                representations.
              </p>
              <p className="section-lead">
                This recurring translation of meaning motivates the research behind Ontology-Native Software Engineering.
              </p>
            </div>
          </div>

          <div className="problem-grid">
            {problemCards.map((card) => (
              <article className="problem-card" key={card.number}>
                <span>{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>

          <blockquote className="statement">
            <span>Research Observation</span>
            Software systems encode business meaning, but that meaning is not always explicitly represented, independently accessible, or preserved across implementations.
          </blockquote>
        </section>

        <section className="premise-section" id="premise">
          <div className="section-index section-index-light">02 / The Research Hypothesis</div>
          <div className="premise-heading">
            <p className="eyebrow eyebrow-light">From implementation to intent</p>
            <h2>What if meaning became the authoritative foundation of software?</h2>
            <p>
              Ontology-Native Software Engineering investigates whether essential system meaning can be represented explicitly,
              maintained independently of implementation, and used to guide software evolution.
            </p>
            <p>
              The central hypothesis is that an ontology could become the authoritative representation of intended system
              behavior, while implementation artifacts are generated, adapted, or validated against it.
            </p>
            <p>
              This is an evolving methodological proposition, subject to experimentation and technical validation.
            </p>
          </div>

          <div className="principle-list">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="method-note">A bounded, well-defined system change provides a useful starting point for investigating this hypothesis.</p>
        </section>

        <section className="section questions-section" id="questions">
          <div className="section-index">03 / Research Scenarios</div>
          <div className="section-intro questions-intro">
            <p className="eyebrow">Three research questions</p>
            <div>
              <h2>Where could an ontology-native approach make a difference?</h2>
              <p className="section-lead">
                The hypothesis can be explored through scenarios involving system modernization, regulated change, and
                AI agent behavior.
              </p>
              <p className="section-lead">
                These scenarios help identify open technical questions and potential experimental directions.
              </p>
            </div>
          </div>
          <div className="question-grid">
            {researchScenarios.map((item) => (
              <article className="question-card" key={item.label}>
                <p>{item.label}</p>
                <h3>{item.question}</h3>
                <span>{item.context}</span>
              </article>
            ))}
          </div>
        </section>

        <SemanticDiagnostic />

        <section className="conversation-section" aria-labelledby="conversation-title">
          <div>
            <div className="section-index">04 / Exploring the Hypothesis</div>
            <p className="eyebrow">From hypothesis to experiment</p>
            <h2 id="conversation-title">How could the hypothesis be investigated?</h2>
          </div>
          <div className="conversation-copy">
            <p>
              The ideas behind Ontology-Native Software Engineering can be explored through conceptual models, controlled experiments,
              and illustrative software scenarios.
            </p>
            <p>
              A possible experimental approach begins with a bounded system capability and investigates whether its
              essential business meaning can be represented explicitly, connected to implementation artifacts, and
              preserved through a controlled change.
            </p>
            <p>Such experiments may examine:</p>
            <ul>
              <li>How business concepts, rules, and constraints are represented.</li>
              <li>How semantic models relate to code, APIs, data structures, and tests.</li>
              <li>How proposed changes affect dependent system components.</li>
              <li>How implementation behavior can be compared against explicitly defined intent.</li>
              <li>Which limitations, ambiguities, and verification challenges remain unresolved.</li>
            </ul>
            <p>
              The purpose is to investigate the technical feasibility, limitations, and implications of ontology-native
              software engineering.
            </p>
            <p>
              The hypothesis remains open to technical experimentation, critical discussion, and further validation.
            </p>
          </div>
        </section>

        <section className="section prototype-section" id="prototype" aria-labelledby="prototype-title">
          <div className="section-index"><strong>05 / EXPERIMENTAL RESEARCH PROTOTYPE</strong></div>
          <div className="section-intro prototype-intro">
            <div>
              <h2 id="prototype-title">From semantic extraction to ontology refinement.</h2>
              <p className="section-lead">
                To investigate the Ontology as Software hypothesis, we have developed a working experimental prototype
                that explores how domain knowledge can be extracted, represented, and refined from existing software artifacts.
              </p>
              <p className="section-lead">
                The prototype combines automated concept identification, human-guided semantic clarification, and ontology
                review within a unified research environment.
              </p>
            </div>
          </div>
          <article className="prototype-stage" aria-labelledby="extraction-title">
            <h3 id="extraction-title">01 — Ontology Extraction &amp; Semantic Clarification</h3>
            <p>
              The first stage focuses on identifying domain concepts and relationships from source code and documentation,
              while detecting ambiguities that require human interpretation.
            </p>
            <p>
              The prototype enables researchers to examine conflicting meanings, review supporting sources, and provide
              clarification that guides the resulting ontology.
            </p>
            <p>
              In the example shown, the distinction between Merchant and MerchantAccount is resolved through human input,
              allowing the concepts and their relationship to be explicitly defined.
            </p>
            <figure className="prototype-figure">
              <a
                href={`${basePath}/images/onse-ontology-clarification-dashboard.png`}
                aria-label="View the experimental ontology clarification dashboard at full size"
              >
                <Image
                  src={`${basePath}/images/onse-ontology-clarification-dashboard.png`}
                  alt="Experimental ontology clarification dashboard reviewing Merchant and MerchantAccount as separate classes connected by a hasAccount relationship, with human feedback and source references."
                  width={1243}
                  height={1266}
                  sizes="(max-width: 1100px) 100vw, 1180px"
                />
              </a>
              <figcaption><em>Ontology extraction and semantic clarification interface from the working research prototype.</em></figcaption>
            </figure>
          </article>
          <article className="prototype-stage" aria-labelledby="refinement-title">
            <h3 id="refinement-title">02 — Ontology Review &amp; Refinement</h3>
            <p>
              The second stage focuses on examining and refining the resulting semantic model through an interactive ontology graph.
            </p>
            <p>
              The prototype enables researchers to explore concepts, properties, and relationships, review suggested changes,
              investigate uncertain mappings, and trace semantic elements to their supporting sources.
            </p>
            <p>
              This review process helps identify inconsistencies and refine the ontology before proceeding with further
              experiments in ontology-native software engineering.
            </p>
            <figure className="prototype-figure">
              <a
                href={`${basePath}/images/ontology_review_refinement.png`}
                aria-label="View the experimental ontology review dashboard at full size"
              >
                <Image
                  src={`${basePath}/images/ontology_review_refinement.png`}
                  alt="Ontology review dashboard showing a graph of payment concepts and relationships, accepted concepts, suggested changes, low-confidence mappings, and source-backed evidence."
                  width={1536}
                  height={1024}
                  sizes="(max-width: 1100px) 100vw, 1180px"
                />
              </a>
              <figcaption><em>Ontology graph, semantic review, and source traceability interfaces from the working research prototype.</em></figcaption>
            </figure>
          </article>
          <div className="prototype-status">
            <p className="eyebrow"><strong>RESEARCH STATUS</strong></p>
            <p>Working experimental prototype · Ongoing, non-commercial technical research.</p>
            <p>
              The prototype is being developed to investigate the feasibility and limitations of ontology-native software
              engineering. It is not a production deployment or a commercial product offering.
            </p>
          </div>
        </section>

        <section className="engagement-section" id="contact">
          <div className="section-index">06 / Continue the inquiry</div>
          <p className="eyebrow">For researchers and practitioners</p>
          <h2>Explore the research hypothesis.</h2>
          <p className="engagement-lead">
            Ontology-Native Software Engineering is an evolving technical exploration of how ontologies could guide software design,
            implementation, and evolution.
          </p>
          <p className="engagement-lead">
            The ideas presented here are intended to encourage technical discussion, critical examination, and further
            research.
          </p>

          <div className="engagement-outcomes" aria-label="Areas of inquiry">
            <div>
              <span>01</span>
              <strong>Conceptual Foundations</strong>
              <p>Ontologies, semantic authority, and the representation of system intent.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Research Hypotheses</strong>
              <p>Ontology-native engineering, implementation independence, and semantic consistency.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Experimental Directions</strong>
              <p>Illustrative scenarios, verification challenges, and opportunities for technical investigation.</p>
            </div>
          </div>

        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="footer-brand">Ontology-Native Software Engineering</p>
          <p className="footer-tagline">Own the meaning behind your systems.</p>
          <p className="footer-description">
            An independent, non-commercial technical research project exploring ontology-native software engineering.
          </p>
          <p className="footer-description">
            The concepts presented are exploratory and do not constitute a commercial product or service offering.
          </p>
          <p className="footer-expansion">Ontology-Native Software Engineering · Research Exploration</p>
        </div>
        <p className="footer-legal">Ontology-Native Software Engineering · 2026</p>
      </footer>
    </>
  );
}
