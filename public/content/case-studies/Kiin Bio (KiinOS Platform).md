---
title: "Kiin Bio: Product & Interaction Design for KiinOS"
client: "Kiin Bio"
project: "Product & Interaction Design for KiinOS"
year: "2026"
image: "img/kb-experiment.png"
imageBg: "#44403b"
description: "Led product strategy and design for KiinOS from concept through to launch, turning an AI chat tool into a structured workspace for discovery scientists."
link: "kiin-bio.html"
---

## Impact
I turned Kiin Bio’s early AI chat tool into a structured workspace for discovery biologists and chemists to design peptides and analyse targets.

* Helped secure a $2.2 million initial funding round through working platform prototypes.
* Replaced empty prompt boxes with guided onboarding parameters and starting templates to cut time-to-first-insight by 40%.
* Added source links to AI summaries and status monitors for long compute jobs so scientists could verify results.

## Challenges
The initial proof of concept was a standard chat interface: a scientist typed a prompt, and the AI outputted text. This fell short for complex biological research.

Key problem areas included:
* **Empty prompt blank states:** First-time users landed on an empty chat input with no suggestions on how to frame complex molecular queries.
* **Invisible background computations:** Intensive runs (like protein structure predictions) took several minutes, but offered no status indicators when jobs timed out or encountered errors.
* **Scattered experiment context:** Key decisions and parameters were buried inside long conversational threads. Because there was no single workspace to review the active experiment, researchers lost track of variables as the chat grew.
* **Scepticism around citations:** AI summaries presented without clear provenance made researchers hesitant to trust and act on the findings.

## Project details
* **Role:** Founding Designer (Leading UX research, product strategy, interaction design, and front-end prototyping)
* **Timeframe:** ~6 months
* **Tools:** Figma, Framer, Claude Code, Codex, Tailwind, Linear

## Workspace architecture and workflow states
The single chat window was replaced with a two-zone layout: the research assistant on the left and a living experiment overview in the main content area to the right. A side panel view lets scientists peek in and out of nested objects (like specific plans or tasks) without losing the context of their main workspace.

The interface adapts dynamically to key stages of the research scenario, from onboarding and reviewing initial findings to monitoring long-running computations.

## Core features and workflows
Key capabilities built into the platform:
* **Guided experiment onboarding:** Rather than starting from a blank page, the system guides scientists through setting up their experiment parameters and offers suggested starting points to kick off their search.
* **Living experiment profile:** The overview tab—the first view a scientist sees when returning to an experiment—displays the core research question with a constantly updated answer alongside defined success criteria.
* **Actionable recommendations:** A ranked feed surfaces suggested next steps rooted in completed work, active experiment profiles, and success criteria to leverage the combined knowledge of the experiment.
* **Background monitors:** Custom automations continuously monitor recent literature, patents, and clinical trials while the user is away, bringing back current field findings that directly impact their experiment.
* **Source attribution layer:** Full provenance is provided for every finding, linking claims directly back to their source—whether a published study citation or an execution run from a Nextflow pipeline.

## Prototyping and user validation
To test AI behaviour with real biological data, we built working prototypes using Claude Code and Tailwind CSS. We then ran a three-month beta study with active research biologists and chemists to benchmark task speeds, usability, and trust.

## Results and outcomes
* **Massive time savings:** Beta testing confirmed that scientists executed multi-step peptide design pipelines in **15 minutes** that previously took **six months** of manual work.
* **Faster time-to-insight:** Guided onboarding and suggested starting points cut time-to-first-insight by **40%** compared to the original chat application, removing first-run friction.
* **Improved user trust:** Embedded citation links and clear status indicators for long-running compute jobs eliminated silent failures and built user confidence.
* **Streamlined implementation:** Code-based prototyping allowed us to evaluate complex UI states before handing off clean, tested structures to production engineering.


<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/kb-projects.png" alt="Projects" />
        <img src="img/kb-experiments.png" alt="Experiments" />
    </div>
    <figcaption>Projects and Experiments</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/kb-new-exp.png" alt="Experiment onboarding screen 1" />
        <img src="img/kb-new-exp-chat.png" alt="Experiment onboarding screen 2" />
    </div>
    <figcaption>Experiment onboarding</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/kb-plans.png" alt="Experiment Plan" />
    </div>
    <figcaption>Experiment Plan</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/kb-plan-sheet.png" alt="Plan Detail" />
        <img src="img/kb-files.png" alt="Associated Files" />
    </div>
    <figcaption>Plan Detail and Associated Files</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/kb-tasks.png" alt="Tasks" />
        <img src="img/kb-task-detail.png" alt="Task Detail" />
    </div>
    <figcaption>Task and Task Detail</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images" style="margin-bottom: 16px;">
        <img src="img/prov-citation.png" alt="Citation Provenance" />
        <img src="img/prov-task.png" alt="Task Provenance" />
    </div>
    <div class="case-study-supporting-figure__images">
        <img src="img/prov-term.png" alt="Term Provenance" />
        <img src="img/prov-tool.png" alt="Tool Provenance" />
    </div>
    <figcaption>UI Provenance</figcaption>
</figure>

