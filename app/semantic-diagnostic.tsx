"use client";

import { useState } from "react";

const questions = [
  "Can you point to where a critical business rule is authoritatively defined?",
  "Can you see its affected systems, teams, and controls before changing it?",
  "Could you move a capability without rediscovering its business logic?",
  "Can you explain why production behavior conforms to approved intent?",
  "Could a prompt or tool configuration quietly change an agent's authority?",
];

export function SemanticDiagnostic() {
  const [difficult, setDifficult] = useState<boolean[]>(() => questions.map(() => false));
  const score = difficult.filter(Boolean).length;

  function toggleQuestion(index: number) {
    setDifficult((current) => current.map((value, itemIndex) => (itemIndex === index ? !value : value)));
  }

  function reset() {
    setDifficult(questions.map(() => false));
  }

  return (
    <section className="diagnostic-section" id="diagnostic" aria-labelledby="diagnostic-title">
      <div className="diagnostic-heading">
        <div>
          <p className="eyebrow">90-second research self-assessment</p>
          <h2 id="diagnostic-title">How well is business meaning represented across systems?</h2>
        </div>
        <p>
          Consider the following questions about semantic consistency, traceability, and system evolution. Mark those
          that would be difficult to answer in your current environment.
        </p>
      </div>

      <div className="diagnostic-layout">
        <ol className="diagnostic-questions">
          {questions.map((question, index) => (
            <li key={question} className={difficult[index] ? "is-difficult" : ""}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{question}</p>
              <button
                type="button"
                aria-pressed={difficult[index]}
                aria-label={`${difficult[index] ? "Unmark" : "Mark"} question ${index + 1} as difficult`}
                onClick={() => toggleQuestion(index)}
              >
                {difficult[index] ? "Marked" : "Difficult"}
              </button>
            </li>
          ))}
        </ol>

        <aside className="diagnostic-result" aria-live="polite">
          <p>Your reflection</p>
          <div className="score">
            <strong>{String(score).padStart(2, "0")}</strong>
            <span>/ 05</span>
          </div>
          <p className="result-copy">Questions marked as difficult.</p>
          <p>
            This informal self-assessment is intended to encourage reflection on semantic challenges in complex
            systems. It is not a formal evaluation or a validated research instrument.
          </p>
          {score > 0 ? (
            <button className="reset-button" type="button" onClick={reset}>
              Reset self-assessment
            </button>
          ) : null}
          <small>Nothing is submitted or stored. This self-assessment runs entirely in your browser.</small>
        </aside>
      </div>
    </section>
  );
}
