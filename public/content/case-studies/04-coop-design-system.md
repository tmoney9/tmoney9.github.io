---
title: "Building a design system for the Co-op Bank"
tagline: "Before the design system, Daly, our products had no cohesive look and feel. Design files were stored locally, making collaboration and consistency a challenge. We used Sketch and Jira to move designs into development. Our design process was slow and inefficient, and our development process was costly."
threadId: "thread-4"
---

We wanted Daly to tackle three major problems:

1. the incohesive look and feel of our products,
2. our slow inefficient design process, and
3. our development process was costly due to duplicate efforts.

We started by gathering user feedback about our current design to validate the need for a more cohesive experience. We audited every component that made up our digital experience to show all the glaring inconsistencies. Finally, we spoke to different stakeholders to gather different points of view on how a design system could help in their daily lives.

![Current UI](img/current-ui.png)

Before diving in, we needed to decide on our core beliefs, so we came up with these five principles:

1. tokens over specs,
2. clarity over depth,
3. content over graphics,
4. feedback over expertise, and
5. evidence over tradition.

Design tokens are a way to keep our products and services looking and feeling the same while making development faster. We stored values for typography, color, spacing, and layout as tokens. We used design tokens as a way to maintain consistency across third-party platforms.

![Design Tokens](img/design-tokens.png)

To speed up our process, we created a component library. This Figma file houses every style and component we use in Daly. Designers can drag and drop components into their own projects without reinventing the wheel every time.

![Components](img/components.png)

Developers used the component library, along with the design tokens, to create component repositories. These repos lived on Bitbucket, meaning other teams within the bank could use them. We used React to build components and Storybook for documentation.

![Workflow](img/workflow.png)

Content was a big part of Daly. Backed by research, our content designers drafted guidelines on how to create, write, and use different types of content. Systemizing our content turned Daly into a pretty effective content designer.

![Do Don't](img/do-dont.png)

We pitched Daly on the basis that everything we built had a solid base, a defined purpose, and was evidence-based. In the end, Daly became an expansive design system that was accessible to the entire organization. Figma was a big enabler for the bank, and we estimate that it saved us thousands of pounds in duplicate efforts.
