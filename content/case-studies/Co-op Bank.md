---
title: "Co-op Bank: Digital Strategy & Design System"
client: "Co-op Bank"
project: "Digital Strategy & Design System"
year: "2021"
image: "img/coop.png"
imageBg: "#162456"
description: "Led digital product design for Co-op Bank, unifying isolated web and mobile teams around a shared design system to modernise high-traffic customer flows."
link: "coop-bank.html"
---

## Impact
I led digital design across retail and business banking, creating the bank's first unified design system ("Daly") and redesigning our primary payment flow.

* Navigation findability increased from 61% to 87% with a simpler mobile-first menu structure.
* Redesigned the primary payment form into a step-by-step flow with live error checking for over 800,000 monthly visitors.
* Synced Figma components with engineering repositories to stop duplicated work across web and mobile teams.

## Challenges
The bank's digital services operated in silos. Web and mobile teams worked independently with separate codebases and design assets stored locally in Sketch. This led to an inconsistent customer experience and a lot of duplicated engineering effort.

Key problem areas included:
* **Outdated payment flow:** The core payments page had remained unchanged for five years. New customers found it clunky and outdated, causing high drop-off rates when trying to pay someone for the first time.
* **Fragmented navigation:** The menu structure had grown organically over time, creating a cluttered setup that made basic tools hard for customers to find.
* **Subjective metrics:** Design success was tracked primarily through generic NPS scores, which made it hard for the design team to prove the real business or operational value of our work.

## Project details
* **Role:** UX Design Manager (Leading design strategy, system architecture, and research)
* **Timeframe:** ~6 weeks
* **Tools:** Figma, Sketch, React, Storybook, UserZoom, Adobe Analytics, Bitbucket

## Establishing the "Daly" design system
To build a unified experience, we first needed to get everyone speaking the same design language. We audited every screen to document inconsistencies and talked to teams across the bank to see where their workflows were breaking down. This led to the creation of **Daly**, the bank's first centralised design system, built around five simple principles: *tokens over specs, clarity over depth, content over graphics, feedback over expertise, and evidence over tradition*:
* **Tokenisation:** We mapped design values for typography, colour, spacing, and layout to global tokens so our styles would stay consistent, even on third-party platforms.
* **Figma to Storybook pipeline:** We built the component library in Figma for designers and synced it with React repositories in Bitbucket, documented via Storybook so engineers could easily reuse them.
* **Built-in accessibility:** We built WCAG compliance rules directly into the default tokens, ensuring new components were accessible out of the box.

## Redesigning the payment journey
Once Daly was in place, we used it to redesign our highest-priority flow: payments. The legacy page was a long, confusing single-page form with completely different layouts on web and mobile. We spent six weeks researching, testing, and redesigning the flow:
* **Task analysis:** We benchmarked competitors and mapped out different payment tasks, like paying someone new, making repeat transfers, or scheduling future payments.
* **Bite-sized steps:** We broke the long, overwhelming form into a simple, step-by-step payment flow. This made the process much easier for customers setting up new transaction details.
* **Real-time feedback:** We designed inline validation and clear state feedback to catch input errors immediately, preventing transaction failures before they happened.

## Measuring design outcomes
To prove the business value of the new design, we moved away from generic NPS scores and built a straightforward UX metrics framework:
* **Outcome mapping:** We ran workshops with people from different teams, including product, fraud, and customer service, to connect customer behaviour to actual business outcomes. This got everyone aligned on what success looked like, shifting design discussions away from subjective opinions and towards evidence-based choices.
* **Telemetry tracking:** We set up custom dashboards in Adobe Analytics to watch things like payment completion rates and form errors. This gave us a clear, real-time view of where people were dropping off, allowing us to see exactly how our design changes reduced customer mistakes and cut support call volumes.

## Results and business outcomes
* **Improved findability:** Tree-testing success rates rose from a baseline of **61%** to **87%** under the flatter, mobile-first navigation model.
* **Engineering efficiency:** Daly eliminated component duplication across teams, saving significant front-end development and maintenance overhead.
* **Seamless payments:** The step-by-step payment flow cut down input errors and transaction drop-offs across 800,000+ monthly visits.
* **Data-backed ROI:** Adobe Analytics dashboards linked our design changes directly to lower payment failure rates and a measurable drop in customer support calls.

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/existing-payments.png" alt="Old UI" />
    </div>
    <figcaption>Old UI</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/card-sort.png" alt="Card Sort Results" />
    </div>
    <figcaption>Card sort results</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/treejack-before.png" alt="Treejack Test Before" class="bg-white" />
        <img src="img/treejack-after.png" alt="Treejack Test After" class="bg-white" />
    </div>
    <figcaption>Treejack tests, before and after</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/new-ui.png" alt="New UI Design" class="bg-white" />
    </div>
    <figcaption>New UI</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__images">
        <img src="img/desktop-mockup-1.png" alt="Desktop Mockup Add Payee" />
        <img src="img/desktop-mockup-2.png" alt="Desktop Mockup Payee Confirmation" />
    </div>
    <figcaption>Desktop mockups</figcaption>
</figure>

<figure class="case-study-supporting-figure">
    <div class="case-study-supporting-figure__video">
        <div class="case-study-supporting-figure__video-wrapper">
            <video src="vid/payments.mp4" controls autoplay muted loop playsinline></video>
        </div>
    </div>
    <figcaption>Interactive payment flow prototype demonstration</figcaption>
</figure>
