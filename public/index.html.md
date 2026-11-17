# Ontology-Native Software Engineering

> Own the meaning behind your systems.

## Applied technical research

We study how business meaning can be made explicit in software. Our working experimental prototype focuses on extracting domain concepts from code and documentation, clarifying ambiguities with human input, and reviewing the resulting ontology.

- [View prototype examples](__SITE_URL__#prototype)
- [Read the research approach](__SITE_URL__#premise)
- Canonical URL: __SITE_URL__
- Language: English

## 01 / WORKING EXPERIMENTAL PROTOTYPE

### From semantic extraction to ontology refinement.

The current prototype investigates an initial step: extracting and clarifying system meaning from existing software and documentation.

### One term, two business concepts.

**Problem.** In the example shown, “merchant” refers both to a business and to an account belonging to that business.

**Method.** The clarification workflow presents the ambiguity alongside source references and asks a person to explain the distinction.

**Model shown.** Merchant and MerchantAccount are represented as separate concepts, connected by a hasAccount relationship.

Merchant → hasAccount → MerchantAccount

![Experimental ontology clarification dashboard reviewing Merchant and MerchantAccount as separate classes connected by a hasAccount relationship, with human feedback and source references.](__SITE_URL__images/onse-ontology-clarification-dashboard.png)

*Clarification interface showing the Merchant / MerchantAccount example. Human clarification and source references are shown.*

**Example scope.** The interface shows a code-and-documentation example with a human clarification decision. The scope is one concept distinction, supported by source references and a human decision. This example is not a quantitative evaluation of extraction accuracy.

### Ontology Review & Refinement

The second stage focuses on examining and refining the resulting semantic model through an interactive ontology graph.

The prototype enables researchers to explore concepts, properties, and relationships, review suggested changes, investigate uncertain mappings, and trace semantic elements to their supporting sources.

This review process helps identify inconsistencies and refine the ontology before proceeding with further experiments in ontology-native software engineering.

![Ontology review dashboard showing a graph of payment concepts and relationships, accepted concepts, suggested changes, low-confidence mappings, and source-backed evidence.](__SITE_URL__images/ontology_review_refinement.png)

*Ontology review interface showing concepts, relationships, suggested changes, and source references.*


## 02 / Research Motivation

### The translation tax

### Why do complex systems repeatedly reconstruct the same meaning?

In complex organizations, business meaning is often distributed across software, policies, data structures, documentation, and human expertise.

1. **Change starts with archaeology**

   Understanding a change may require reconstructing intent from code, policies, data, documentation, and the knowledge of experienced people.

2. **Context is translated repeatedly**

   Different disciplines may interpret the same business requirement through separate technical, operational, and organizational perspectives.

3. **Assurance arrives too late**

   Relationships between approved intent, implementation, dependencies, and verification evidence may only become visible after changes have been implemented.

### Research Observation

Software systems encode business meaning, but that meaning is not always explicitly represented, independently accessible, or preserved across implementations.

## 03 / The Research Hypothesis

### From implementation to intent

### What if meaning became the authoritative foundation of software?

Ontology-Native Software Engineering investigates whether essential system meaning can be represented explicitly, maintained independently of implementation, and used to guide software evolution.

The central hypothesis is that an ontology could become the authoritative representation of intended system behavior, while implementation artifacts are generated, adapted, or validated against it.

This is an evolving methodological proposition, subject to experimentation and technical validation.

**Research Hypothesis**

The ontology is the software.

Code is its compiled form.

1. **Own the meaning**

   Explore how critical system intent can be represented explicitly rather than remaining implicit within particular implementations.

2. **Make implementation replaceable**

   Investigate whether business meaning and behavioral constraints can remain stable while underlying technologies change.

3. **Keep change accountable**

   Examine how approved intent, implementation changes, and verification evidence might remain connected throughout software evolution.

A bounded, well-defined system change provides a useful starting point for investigating this hypothesis.

## 04 / Further research scenarios

### Three research questions

### Where could an ontology-native approach make a difference?

### System modernization

#### What must remain true when the technology changes?

### Regulated change

#### Can systems, controls, and obligations be traced before implementation?

### AI agent authority

#### What defines the boundaries of an agent's permitted actions?

## 05 / Scope and open questions

### What does the current work investigate?

### Current prototype scope

The working experimental prototype focuses on concept identification from existing software and documentation, human-guided semantic clarification, and ontology review with source references. The example above makes one concept distinction visible; it is not a quantitative evaluation.

### Open research questions

Further experiments would need to examine how semantic models relate to code, APIs, data structures, and tests, and whether implementation behavior can be compared against explicitly defined intent.

Generating applications from ontologies, preserving behavior through controlled changes, and maintaining agent authority remain research questions. The prototype examples on this page do not validate those hypotheses.

## 06 / Continue the Inquiry

### For researchers and practitioners

### Continue the technical inquiry.

The next step is to examine the approach through bounded experiments: tracing concepts to supporting sources, reviewing unresolved ambiguities, and comparing model changes with intended behavior.

## Ontology-Native Software Engineering

Own the meaning behind your systems.

This page presents selected technical experiments and prototype examples from ongoing research.

Ontology-Native Software Engineering · Research Exploration


Ontology-Native Software Engineering · 2026
