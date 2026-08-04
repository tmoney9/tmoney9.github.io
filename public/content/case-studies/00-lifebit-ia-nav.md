---
title: "Lifebit: Information Architecture & Systems Design"
client: "Lifebit"
project: "Information Architecture & Systems Design"
year: "2025"
image: "img/lifebit.png"
description: "Led platform architecture and design for Lifebit, unblocking 10+ new roadmap features while unifying design tokens between Figma and Storybook."
link: "lifebit.html"
---

## Impact
Led the information architecture redesign for Lifebit’s biomedical analytics platform, restructuring how researchers navigate complex genomic tools.

* Redesigned the object hierarchy to fit 10+ new features without cluttering platform settings.
* Connected Figma component libraries directly to Storybook to eliminate hardcoded CSS bugs.
* Added Design QA reviews and standardised user stories to align design specs with engineering sprints.

## Challenges
The redesign was driven by user interviews (journey mapping) and roadmap expansion needs. Researchers struggled to navigate complex multi-omic workflows, while product managers faced structural scalability limits.

Key problem areas included:
* **Task resumption friction:** Most participants found it difficult to pick up where they left off after logging out or switching tasks.
* **Navigational redundancy:** Users relied on only 1–2 items in the primary sidebar, leaving remaining nav items redundant.
* **Illogical object relationships:** Related entities lacked clear hierarchy (e.g. pipelines and interactive notebooks sat under projects, but cohorts sat at the top level without rationale).
* **Abstract iconography:** Nav items were displayed as icon-only buttons, so users forgot where features were located and dreaded having to relearn the interface.
* **Unscalable workspace settings:** Workspace settings had become a dumping ground for related and unrelated configuration options, leaving new features nowhere to go.

## Project details
* **Role:** Lead Product Designer (Leading qualitative research, OOUX object mapping, navigation wireframing, prototype testing, and developer hand-off)
* **Timeframe:** ~2 months
* **Tools & Frameworks:** Figma, FigJam, Storybook, Maze, OOUX (Object-Oriented UX)

### Understanding user behaviour
The design process began by analysing existing user data and running user interviews structured as a collaborative journey mapping exercise. These research sessions uncovered the mental models scientists bring to multi-omic analysis and highlighted critical friction points in their daily routines.

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-journey-map.png" alt="Qualitative user journey mapping exercise" />
    </div>
    <figcaption>Qualitative user journey mapping exercise highlighting scientist friction points</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-existing-app-map.png" alt="Legacy platform architecture app map" />
    </div>
    <figcaption>Legacy platform architecture showing unscalable settings and shallow object hierarchy</figcaption>
</figure>

### Scope and goals
Working alongside the project team, we converged on 3 core project objectives:
1. **Create a scalable system:** Future-proof our information architecture so our software can continue to scale.
2. **Eliminate friction:** Reduce the steps it takes for a user to jump back into their previous workflow.
3. **Improve accessibility and visual design:** Make it clear to users where to go and pave the way for a new visual style for the app.

### Exploratory research
To gain a deeper understanding of the problem space, we conducted three primary research activities:
* **Heuristic analysis & IA Review:** Analysed our existing navigation against best-practice usability principles to identify baseline failures.
* **Competitor & market analysis:** Analysed how market leaders structured information, focusing on hierarchy, labelling, and nested links.
* **Card sorting with existing users:** Ran card sorting workshops across diverse user cohorts to uncover how researchers categorised platform content.

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-ia-review.png" alt="Heuristic evaluation and IA review" />
    </div>
    <figcaption>Heuristic evaluation of existing navigation and iconography</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-card-sort.png" alt="Card sorting workshop results" />
    </div>
    <figcaption>Card sorting workshop results across user cohorts</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-market-analysis.png" alt="Competitive SaaS market analysis" />
    </div>
    <figcaption>Competitive audit of navigation patterns across data-heavy SaaS platforms</figcaption>
</figure>

### Designing a new information architecture
After deepening our understanding of the problem space, we modeled our system and mapped relationships between different entities using **Object-Oriented UX (OOUX)**. This enabled us to synthesize research findings into a clear structure aligned directly with user mental models.

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-system-model.png" alt="OOUX System Model" />
    </div>
    <figcaption>Object-Oriented UX (OOUX) system model mapping core platform entities</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-object-maps.png" alt="Detailed Object Maps" />
    </div>
    <figcaption>Detailed object relationship mapping across workspace and project objects</figcaption>
</figure>

We mapped these objects to a redesigned application map. Compared to the legacy map, the proposed design introduced clear vertical hierarchy and logical grouping, replacing dumping grounds with a scalable architecture.

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-proposed-app-map.png" alt="Redesigned Application Map" />
    </div>
    <figcaption>Redesigned application map featuring scalable vertical hierarchy</figcaption>
</figure>

> **Note on validation:**  
> While we would typically validate the app map using a tree test, tight project deadlines led us to consolidate testing into the navigation redesign phase, supported by high confidence from research findings.

## Navigation redesign and prototyping
We kicked off the next phase by analysing visual navigation patterns across battle-tested SaaS applications, establishing 6 guiding design principles:
1. **Preserve sidebar navigation:** Sidebar navigation remains preferred for data-heavy applications.
2. **Icons + explicit labels:** Combine clear iconography with text labels for all nav items.
3. **Account identification:** Include an avatar or initials for the account link.
4. **Contextual navigation:** Implement dynamic secondary nav items based on the active page or level.
5. **Smart landing page:** Ensure initial login directs users to relevant active contexts based on where they left off.
6. **Multi-path navigation:** Provide alternative navigation shortcuts beyond the main sidebar.

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-content-wireframes.png" alt="Content wireframes for navigation redesign" />
    </div>
    <figcaption>Content wireframes mapped objects into spatial layouts</figcaption>
</figure>

### Sketching and wireframes
We elaborated on our object maps by defining detailed object attributes: call-to-actions, user-generated content, system metadata, and nested objects. Spatially arranging these objects produced content wireframes for all required pages.

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-wireframes.png" alt="Medium-Fidelity Wireframes" />
    </div>
    <figcaption>Medium-fidelity wireframes testing navigation placement and hierarchy</figcaption>
</figure>

### Prototyping and testing
We developed three functional prototype directions in Figma (devoid of colour or branding to focus user feedback strictly on hierarchy and tasks). All three options used the redesigned app map, with variations in navigation patterns (Option 1: strict hierarchy; Options 2 & 3: rapid project/workspace switching).

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-concept-wireframes.png" alt="Concept Wireframes" />
    </div>
    <figcaption>Initial spatial layout exploration for content wireframes</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-concept-directions.png" alt="Navigation Prototype Directions" />
    </div>
    <figcaption>Three navigation prototype directions evaluated during usability testing</figcaption>
</figure>

### Next steps & unmoderated benchmarking
Usability testing was done in Maze. We tested with 20 participants, combining task completion rate with a user satisfaction score to converge on a single direction.

### Predictable team cadence
To maintain momentum without meeting fatigue, we established bi-weekly 15–20 minute syncs. Each sync presented data-driven recommendations from the design team, directly generating actionable backlog items for subsequent rounds.

### Drafting developer-focused user stories
Having converged on a direction, we drafted detailed user stories detailing screen states, edge cases, and flow documentation so engineers could pick up tickets without ambiguity.

### Detailed design & token library
We produced exhaustive screen specs broken into page layouts and component states. To bridge design and development, we collaborated with engineers to create a shared **design token library**, ensuring UI components in Storybook matched Figma mockups exactly.

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-component-api.png" alt="Design System Component API" />
    </div>
    <figcaption>Design system token API and layout component specifications</figcaption>
</figure>

### Implementation & Design QA
During build sprints, tech representatives validated feasibility while design provided continuous support to unblock development. The process concluded with a mandatory **Design QA sign-off** step prior to production deployment.

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-component-documentation.png" alt="Storybook Component Documentation" />
    </div>
    <figcaption>Storybook component documentation and developer hand-off specs</figcaption>
</figure>

## Results and outcomes
* **Scalable information architecture:** Future-proofed the platform hierarchy, providing dedicated homes for new roadmap features and removing settings dumping grounds.
* **Reduced navigational friction:** Added explicit labels, contextual menus, and task resumption pathways to cut context-switching overhead.
* **Design token integration:** Created a shared token library synced between Figma and Storybook, eliminating hardcoded CSS values and reducing implementation bugs.
* **Design QA governance:** Established mandatory Design QA sign-offs and bi-weekly data syncs to align engineering and design execution.

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/lb-ux-framework.png" alt="System UX & Governance Framework" />
    </div>
    <figcaption>System UX measurement and design QA governance framework</figcaption>
</figure>
