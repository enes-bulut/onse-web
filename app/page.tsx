import Image from "next/image";

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
        "Technical research and working experimental prototype examples on extracting domain concepts, clarifying semantic ambiguities, and reviewing traceable ontologies.",
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}#webpage`,
      url: siteUrl,
      name: "Ontology-Native Software Engineering | Ontology-Native Engineering Research",
      description:
        "Technical research and working experimental prototype examples on extracting domain concepts, clarifying semantic ambiguities, and reviewing traceable ontologies.",
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
          <a href="#prototype">Working Prototype</a>
          <a href="#problem">Research Motivation</a>
          <a href="#premise">Research Approach</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-main">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">Applied technical research</p>
              <h1>Own the meaning behind your systems.</h1>
              <p className="hero-deck">
                We study how business meaning can be made explicit in software. Our working experimental prototype
                focuses on extracting domain concepts from code and documentation, clarifying ambiguities with human
                input, and reviewing the resulting ontology.
              </p>
              <div className="hero-actions">
                <a className="button button-accent" href="#prototype">View prototype examples</a>
                <a className="text-link" href="#premise">
                  Read the research approach <span aria-hidden="true">↓</span>
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

        </section>

        <section className="section prototype-section" id="prototype" aria-labelledby="prototype-title">
          <div className="section-index"><strong>01 / WORKING EXPERIMENTAL PROTOTYPE</strong></div>
          <div className="section-intro prototype-intro">
            <div>
              <h2 id="prototype-title">From semantic extraction to ontology refinement.</h2>
              <p className="section-lead">
                The current prototype investigates an initial step: extracting and clarifying system meaning from
                existing software and documentation.
              </p>
            </div>
          </div>
          <article className="prototype-stage" aria-labelledby="extraction-title">
            <h3 id="extraction-title">One term, two business concepts.</h3>
            <p>
              <strong>Problem.</strong> In the example shown, “merchant” refers both to a business and to an account
              belonging to that business.
            </p>
            <p>
              <strong>Method.</strong> The clarification workflow presents the ambiguity alongside source references
              and asks a person to explain the distinction.
            </p>
            <p>
              <strong>Model shown.</strong> Merchant and MerchantAccount are represented as separate concepts,
              connected by a hasAccount relationship.
            </p>
            <p className="prototype-result">Merchant → hasAccount → MerchantAccount</p>
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
              <figcaption><em>Clarification interface showing the Merchant / MerchantAccount example. Human clarification and source references are shown.</em></figcaption>
            </figure>
            <div className="experiment-note">
              <p className="eyebrow">Example scope</p>
              <p>
                The interface shows a code-and-documentation example with a human clarification decision.
                The scope is one concept distinction, supported by source references and a human decision.
                This example is not a quantitative evaluation of extraction accuracy.
              </p>
            </div>
          </article>
          <article className="prototype-stage" aria-labelledby="refinement-title">
            <h3 id="refinement-title">Ontology Review &amp; Refinement</h3>
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
              <figcaption><em>Ontology review interface showing concepts, relationships, suggested changes, and source references.</em></figcaption>
            </figure>
          </article>
        </section>

        <section className="section problem-section" id="problem">
          <div className="section-index">02 / Research Motivation</div>
          <div className="section-intro">
            <p className="eyebrow">The translation tax</p>
            <div>
              <h2>Why do complex systems repeatedly reconstruct the same meaning?</h2>
              <p className="section-lead">
                In complex organizations, business meaning is often distributed across software, policies, data
                structures, documentation, and human expertise.
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
          <div className="section-index section-index-light">03 / The Research Hypothesis</div>
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

          <div className="hero-thesis">
            <span>Research Hypothesis</span>
            <strong>The ontology is the software.</strong>
            <p>Code is its compiled form.</p>
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
          <div className="section-index">04 / Further research scenarios</div>
          <div className="section-intro questions-intro">
            <p className="eyebrow">Three research questions</p>
            <div>
              <h2>Where could an ontology-native approach make a difference?</h2>
            </div>
          </div>
          <div className="question-grid">
            {researchScenarios.map((item) => (
              <article className="question-card" key={item.label}>
                <p>{item.label}</p>
                <h3>{item.question}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="conversation-section" aria-labelledby="conversation-title">
          <div>
            <div className="section-index">05 / Scope and open questions</div>
            <p className="eyebrow">From prototype to further experiments</p>
            <h2 id="conversation-title">What does the current work investigate?</h2>
          </div>
          <div className="conversation-copy">
            <h3>Current prototype scope</h3>
            <p>
              The working experimental prototype focuses on concept identification from existing software and
              documentation, human-guided semantic clarification, and ontology review with source references.
              The example above makes one concept distinction visible; it is not a quantitative evaluation.
            </p>
            <h3>Open research questions</h3>
            <p>
              Further experiments would need to examine how semantic models relate to code, APIs, data structures,
              and tests, and whether implementation behavior can be compared against explicitly defined intent.
            </p>
            <p>
              Generating applications from ontologies, preserving behavior through controlled changes, and maintaining
              agent authority remain research questions. The prototype examples on this page do not validate those hypotheses.
            </p>
          </div>
        </section>

        <section className="engagement-section" id="contact">
          <div className="section-index">06 / Continue the inquiry</div>
          <p className="eyebrow">For researchers and practitioners</p>
          <h2>Continue the technical inquiry.</h2>
          <p className="engagement-lead">
            The next step is to examine the approach through bounded experiments: tracing concepts to supporting
            sources, reviewing unresolved ambiguities, and comparing model changes with intended behavior.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="footer-brand">Ontology-Native Software Engineering</p>
          <p className="footer-tagline">Own the meaning behind your systems.</p>
          <p className="footer-description">
            This page presents selected technical experiments and prototype examples from ongoing research.
          </p>
          <p className="footer-expansion">Ontology-Native Software Engineering · Research Exploration</p>
        </div>
        <p className="footer-legal">Ontology-Native Software Engineering · 2026</p>
      </footer>
    </>
  );
}
