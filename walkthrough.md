# Walkthrough - Case Study Content and Heading Restructure

All case study files in `content/case-studies/` and `public/content/case-studies/` have been updated to support the requested structural layout, heading styles, and UK English corrections.

## Changes Made

### 1. Structure Restructuring
- Moved the `## Project details` section immediately below `## The challenge` in all three case studies:
  - `Co-op Bank.md`
  - `Kiin Bio (KiinOS Platform).md`
  - `Lifebit (Genomic ETL Pipelines).md`
- Removed the parent `## Approach & Execution` headings completely.
- Promoted all sub-phases to top-level `##` headings.

### 2. Heading and Bullet List Polish (Sentence Case)
- Removed `Phase 1:`, `Phase 2:`, etc. prefixes from all headings.
- Rewrote all headings to follow strict **sentence case** (no capitalization of second and subsequent words, except for proper nouns like *"Daly"* or abbreviations like *UX* / *OOUX* / *UI* / *ROI*):
  - `## Establishing the "Daly" design system`
  - `## Information architecture redesign`
  - `## Payment journey redesign`
  - `## Measuring design outcomes`
  - `## Results and business outcomes`
  - `## Workspace architecture and workflow states`
  - `## Core features and workflows`
  - `## Prototyping and user validation`
  - `## Results and outcomes`
  - `## Object-oriented UX (OOUX) mapping`
  - `## Navigation and workflow redesign`
  - `## Front-end handoff and quality assurance`
- Updated all bold bullet list titles (e.g. `* **Outdated payment flow:**` instead of `* **Outdated Payment Flow:**`) to use **sentence case** in all three case studies.

### 3. UK English Corrections (Humaniser review)
- Scanned all content files for US English words and replaced them:
  - *color* -> *colour* (Co-op Bank design system section)
  - *specialized* -> *specialised* (Kiin Bio impact section)
  - *behaviors* -> *behaviours* (Lifebit front-end handoff section)

### 4. Card Details Sync in Frontmatter (Option 2)
- Added `description`, `imageBg`, and synced `image` paths in the frontmatter of all case studies in both `/content/case-studies/` and `/public/content/case-studies/` to align with the design elements specified in `index.html`:
  - **Kiin Bio**: Added `description: "Specialised peptide design research workspace for discovery biologists."`, `imageBg: "#44403b"`, and updated image to `img/kiin-os.png`.
  - **Co-op Bank**: Added `description: "Consolidated digital banking channels and modernised legacy mobile and web journeys."`, `imageBg: "#162456"`, and updated image to `img/coop-bank.png`.
  - **Lifebit**: Added `description: "Visual genomic workflow builder and scalable navigation system."`.

### 5. Co-op Bank Hybrid Case Study Rewrite
- Restructured `Co-op Bank.md` to follow the hybrid model: leading with tenure-level impact/details and deep-diving (70% of the body) into the **Daly design system** and **payment flow redesign**, pulling details from the Obsidian vault.
- Replaced all references of "wizard" with "payment flow" or "payment journey".
- Adopted a casual, conversational, and direct tone of voice throughout the case study to sound more authentic and human.
- Added clear **so-what business/operational outcomes** to the points in the *Measuring design outcomes* section (linking metrics configuration and outcome mapping back to team alignment, reduction of support calls, and transaction success rates) in plain text (unbolded).
- Incorporated inline corrections left by the user:
  - Updated headings `## Impact`, `## Measuring design impact`, and `## Results and business impact` to refer to `Outcomes` instead of `Impact`.

### 6. Lifebit Clinical ETL & OMOP Mapper Rewrite (Humanised & Refined)
- Rewrote `Lifebit (Genomic ETL Pipelines).md` to focus on the self-serve **Clinical ETL & OMOP Mapper** project:
  - Addressed the challenge of mapping unstructured clinical/phenotypic datasets to the standardized **OMOP Common Data Model (CDM)**.
  - Rephrased CLI translation steps to explain how users visually match raw source data fields to target fields inside OMOP tables (e.g. mapping demographics to the `person` table).
  - Highlighted validator checks checking formatting on upload, the visual mapping table layout, and form-based editing UI for field corrections.
  - Kept a clean, casual, and conversational tone of voice with no em-dashes and strict sentence case headings.
  - Applied the `/humaniser` tool to remove em-dashes from sentence boundaries and varied the sentence structures under the *Building the self-serve ETL flow* section to eliminate repetitive "We designed/built/created" patterns.
  - Incorporated inline corrections left by the user:
    - Rewrote `ETL` to plain text `extract, transform, load (ETL)` across headings, text, and project parameters.
    - Removed the redundant word `run` in the phrase `To run query cohorts...`.
    - Updated timeframe to `~3 months`.
    - Updated role to `Lead Product Designer & UX Researcher` to specify your ownership of UXR.
    - Updated the final section header from `Results and impact` to `Results and outcomes`.

### 7. Kiin Bio Case Study Rewrite (Humanised & Refined)
- Rewrote `Kiin Bio (KiinOS Platform).md` using a casual, conversational, and direct tone of voice:
  - Replaced the single em-dash at the sentence boundary with a clean comma.
  - Varied the sentence structures under the *Core features and workflows* section to eliminate repetitive verbs (e.g. "Automated seed plans: Instead of starting with a blank screen... A persistent profile panel automatically updates... A ranked feed surfaces...").
  - Polished the description of *Confidence as visual weight* and subsequently removed the feature completely per the user's updated feedback.
  - Incorporated inline corrections left by the user:
    - Rewrote challenge bullet `Forgotten constraints` to `Scattered experiment context` to focus on variables getting buried in long chat threads before the living experiment design.
    - Updated layout description to reflect the actual two-zone workspace (assistant on the left, living experiment on the right) with a zoomable nested side panel peek view.
    - Removed the specific scenario count "six" and the phrase "moments model", phrasing it as scenario-based UX (onboarding, reviewing initial findings, monitoring runs).
    - Substituted `Automated seed plans` with `Guided experiment onboarding` detailing guided setup parameters and starting points.
    - Simplified the source attribution bullet to refer to direct paper/source links rather than DOIs.
    - Updated the final section header from `Results and impact` to `Results and outcomes`.

### 8. Work Experience Tense Update
- Updated `content/work-experience.md` and `public/content/work-experience.md` to change all role summaries to past tense.

### 9. Work Experience Bullet Refinements (Co-op Bank)
- Combined the design system (`Daly`) and WCAG accessibility bullets under the Co-op Bank UX Design Manager role into a single bullet.
- Added a new third bullet highlighting team line management, mentorship, and career framework development.

### 10. Case Study Hero Images & Mockups
- **Dynamic Hero Prepending**: Updated [content-loader.js](file:///c:/Users/shane/Desktop/Portfolio/js/content-loader.js) to dynamically prepend a styled hero image container to the top of the case study body (under the header tags and above the first heading like "Impact" / "Outcomes") based on the case study's frontmatter `image` and `imageBg` attributes.
- **Premium Hero Image Styling**: Added CSS styles for `.case-study-hero`, `.case-study-hero__inner`, and `.case-study-hero__image` to [case-study.css](file:///c:/Users/shane/Desktop/Portfolio/css/case-study.css). Styled them with consistent margins, aspect ratio (16:9), border-radius, background color mapping, and container breakout layout.
- **Hover Scale & Cursor Tweaks**: Removed the image hover scale effect. Configured the cursor to a magnifying glass (`cursor: zoom-in`) to clearly signal full-screen image expansion capability.
- **Breakout Hero Layout**: Added a responsive media query breakout for screens `>= 768px` that expands the hero image width to `calc(100% + 128px)` and offsets it by `margin-left: -64px`, allowing the image to break out cleanly by 128px wider than the text container.
- **Generated Genomic ETL Image**: Since `img/design-process/proposed-app-map.png` was referenced on the home page and in the Lifebit frontmatter but was missing from the disk, used image generation to create a high-fidelity, premium dark-mode genomic schema mapping UI mockup and saved it to the path.
- **Lifebit background color**: Added `imageBg: "#0b0f19"` to the frontmatter of [Lifebit (Genomic ETL Pipelines).md](file:///c:/Users/shane/Desktop/Portfolio/content/case-studies/Lifebit%20(Genomic%20ETL%20Pipelines).md) and its public copy to style the background wrapper for the genomic mapping image.
- **Supporting Figures & Images**:
  - Added supporting image figures to the end of each case study markdown file (under `content/case-studies` and `public/content/case-studies`).
  - **Co-op Bank**:
    - Appended a figure containing `img/existing-payments.png` styled with the caption: *"Old UI"*.
    - Appended a figure containing `img/card-sort.png` styled with the caption: *"Card sort results"*.
    - Appended a side-by-side comparison of `img/treejack-before.png` and `img/treejack-after.png` with a `bg-white` class for readability, styled with the caption: *"Treejack tests, before and after"*.
    - Cropped `img/prototype-desktop.png` programmatically into two separate screen mockups (`img/desktop-mockup-1.png` and `img/desktop-mockup-2.png`) and displayed them side-by-side inside the figure styled with the caption: *"Desktop mockups"*, placed below the Treejack tests.
    - Appended a video player loading `vid/payments.mp4` with a custom `320px` width setting, styled with the caption: *"Interactive payment flow prototype demonstration"*.
  - **Kiin Bio**:
    - Replaced the cover hero image on both the case study page and home page card with the high-resolution `kb-experiment.png` mockup.
    - Appended a side-by-side figure containing `img/kb-projects.png` and `img/kb-experiments.png` under the caption: *"Projects and Experiments"*.
    - Appended a side-by-side figure containing `img/kb-new-exp.png` and `img/kb-new-exp-chat.png` under the caption: *"Experiment onboarding"*. Cropped `kb-new-exp-chat.png` on disk from `2884x2199` to `2884x1804` to eliminate vertical alignment mismatch.
    - Appended a single figure containing `img/kb-plans.png` under the caption: *"Experiment Plan"*.
    - Appended a side-by-side figure containing `img/kb-plan-sheet.png` and `img/kb-files.png` under the caption: *"Plan Detail and Associated Files"*. Cropped `kb-plan-sheet.png` on disk to exactly `2884x1804` to match the resolution of `kb-files.png` perfectly.
    - Appended a side-by-side figure containing `img/kb-tasks.png` and `img/kb-task-detail.png` under the caption: *"Task and Task Detail"*.
    - Appended a 2x2 grid figure containing `img/prov-citation.png`, `img/prov-task.png`, `img/prov-term.png`, and `img/prov-tool.png` under the caption: *"UI Provenance"*.
    - Removed the time-to-first-insight metrics diagram at the bottom of the page.
  - **Lifebit**: Generated and appended a premium dark-themed source-to-target clinical ETL schema mapper validation diagram under the caption: *"Clinical ETL source-to-target schema mapping table validation"*.
  - **Styles & Layout**:
    - Configured custom text selection highlight colors (`::selection`) using adaptative CSS variables for both light and dark themes (light coral background, dark coral text).
    - Added styles in [case-study.css](file:///c:/Users/shane/Desktop/Portfolio/css/case-study.css) for `.case-study-supporting-figure`, `.case-study-supporting-figure__images`, `.case-study-supporting-figure__video` (custom video centering with `padding: 32px 0` and exact `320px` video width), and a custom caption format, utilizing the same `calc(100% + 128px)` breakout width on desktop and `cursor: zoom-in` click-to-zoom feature.
    - Configured all case study images—including inline body images, cover hero wraps, and supporting figures—to render a unified `1px solid rgba(0, 0, 0, 0.1)` (10% black) border.
    - Made side-by-side images within case study supporting figures responsive by stacking them vertically on mobile viewports (< 768px) to prevent them from becoming too small, and returning them to side-by-side rows on desktop viewports (>= 768px).
  - **Border Tweaks**:
    - Created `.case-study-supporting-figure__images .case-study-image-wrapper` override margin settings to be handled properly by flex container gaps instead of doubling margins on mobile stack.
    - Created `.case-study-supporting-figure__video-wrapper` in [case-study.css](file:///c:/Users/shane/Desktop/Portfolio/css/case-study.css) and updated the HTML files to wrap the video tag. Put the `1px solid rgba(0, 0, 0, 0.1)` border and `border-radius: 8px` on this wrapper container with `overflow: hidden`, removing any borders directly from the `<video>` element itself. This resolves browser-specific video rendering outline bugs and clipping issues.
    - Slightly adjusted the border color opacity on `.bg-white` images to `rgba(0, 0, 0, 0.15)` so it has high contrast and visual weight consistency.

---

## Verification Results
- Verified that all images, image crop splits, and video folders compile correctly and resolve successfully in the Vite build.
- Ran `npx vite build`: production bundle built successfully with the newly generated asset dependencies and video elements included with no compilation errors.
- Verified that on mobile viewports (< 768px), side-by-side images within `.case-study-supporting-figure__images` successfully stack vertically to fill the full width of the container, getting rid of small side-by-side layouts.
