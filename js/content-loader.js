const parseMd = (str, opts) => (window.marked ? window.marked.parse(str, opts) : (str || ''));
const parseMdInline = (str) => (window.marked ? window.marked.parseInline(str) : (str || ''));
const getRenderer = () => (window.marked && window.marked.Renderer ? new window.marked.Renderer() : {});

// Utility to parse frontmatter from markdown files
function parseFrontmatter(text) {
    const result = { frontmatter: {}, content: text };
    if (text.startsWith('---')) {
        const parts = text.split(/^---$/m);
        if (parts.length >= 3) {
            const yamlText = parts[1].trim();
            result.content = parts.slice(2).join('---').trim();
            let currentKey = null;
            yamlText.split('\n').forEach(line => {
                const trimmed = line.trim();
                if (!trimmed) return;
                if (trimmed.startsWith('- ') && currentKey) {
                    const val = trimmed.slice(2).trim().replace(/^["']|["']$/g, '');
                    if (!Array.isArray(result.frontmatter[currentKey])) {
                        result.frontmatter[currentKey] = [];
                    }
                    result.frontmatter[currentKey].push(val);
                    return;
                }
                const colonIdx = line.indexOf(':');
                if (colonIdx !== -1) {
                    const key = line.slice(0, colonIdx).trim();
                    let value = line.slice(colonIdx + 1).trim();
                    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                        value = value.slice(1, -1);
                    }
                    currentKey = key;
                    if (value) {
                        if (value.startsWith('-')) {
                            result.frontmatter[key] = [value.replace(/^-/, '').trim().replace(/^["']|["']$/g, '')];
                        } else {
                            result.frontmatter[key] = value;
                        }
                    } else {
                        result.frontmatter[key] = [];
                    }
                }
            });
        }
    }
    return result;
}

// Chevron SVG helper
const chevronSVG = `<svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m5 10l7 7l7-7"/></svg>`;

// Stub: watchForMarkdownChanges is a no-op in production
function watchForMarkdownChanges(mdPath) {}

// Load Profile
async function loadProfile() {
    const profileContainer = document.getElementById('profile-container');
    if (!profileContainer) return;
    const path = 'content/profile.md';
    watchForMarkdownChanges(path);
    try {
        const res = await fetch(path);
        if (!res.ok) return;
        const text = await res.text();
        const { frontmatter, content } = parseFrontmatter(text);
        
        let parsedBio = '';
        if (content && content.trim()) {
            parsedBio = parseMd(content.trim()).replace(/<p>\s*~\s*<\/p>/g, '');
        } else {
            parsedBio = `
                <p>I’m Shane, a product designer based in Wirral. I was most recently Founding Designer at Kiin Bio, where I focused on crafting powerful, elegant experiences for scientists.</p>
                <p>I spend my off-hours working on DIY home projects and visiting National Trust sites.</p>
            `;
        }
        
        profileContainer.innerHTML = `
            <div class="profile-about">
                <div class="profile-pic">
                    <img class="profile-pic__img profile-pic__img--dark" src="${frontmatter.avatar || 'img/profile-pic.png'}" alt="${frontmatter.name || 'Profile'}" />
                    <img class="profile-pic__img profile-pic__img--light" src="${frontmatter.avatarLight || 'img/profile-pic-light.png'}" alt="${frontmatter.name || 'Profile'}" />
                </div>
                <div class="profile-about__content">
                    ${parsedBio}
                    <p class="contact-sentence">You can find me on <a href="https://uk.linkedin.com/in/%F0%9F%92%86-shane-fadden-508581110" target="_blank" rel="noopener noreferrer" class="contact-sentence__link">LinkedIn</a> or reach out at <button type="button" id="copy-email-btn" class="contact-link contact-link--copy" aria-label="Copy email address"><span class="email-text">faddenero@gmail.com</span><span class="copy-icon-wrapper"><svg class="copy-icon copy-icon--default" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><svg class="copy-icon copy-icon--check" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span></button></p>
                </div>
            </div>
        `;
    } catch (e) {
        console.error('Error loading profile.md:', e);
    }
}

// Load Work Experience
async function loadWorkExperience() {
    const container = document.getElementById('work-experience-container');
    if (!container) return;
    const path = 'content/work-experience.md';
    watchForMarkdownChanges(path);
    try {
        const res = await fetch(path);
        if (!res.ok) return;
        const text = await res.text();
        const { content } = parseFrontmatter(text);
        
        const cleanContent = content.replace(/^# .*$/m, '').trim();
        const sections = cleanContent.split(/^## /m).filter(s => s.trim().length > 0);
        
        let html = '<h2 class="section-heading">Experience</h2>';
        sections.forEach((section, index) => {
            const lines = section.trim().split('\n');
            const headerLine = lines[0].trim();
            
            let company = headerLine;
            let period = '';
            
            if (headerLine.includes('|')) {
                const parts = headerLine.split('|');
                company = parts[0].trim();
                period = parts[1].trim();
            } else if (headerLine.includes('  ')) {
                const parts = headerLine.split(/\s{2,}/);
                company = parts[0].trim();
                period = parts[1].trim();
            }

            const rest = lines.slice(1).join('\n').trim();
            
            // Extract role (### Role)
            let role = '';
            let bodyText = rest;
            const roleMatch = rest.match(/^###\s+(.*)$/m);
            if (roleMatch) {
                role = roleMatch[1].trim();
                bodyText = rest.replace(/^###\s+.*$/m, '').trim();
            }

            // Separate intro text and bullet points
            const bulletStart = bodyText.search(/^\s*-\s+/m);
            let introText = '';
            let bulletsText = '';
            
            if (bulletStart !== -1) {
                introText = bodyText.substring(0, bulletStart).trim();
                bulletsText = bodyText.substring(bulletStart).trim();
            } else {
                introText = bodyText.trim();
            }
            
            // Extract bullets and cap at max 3
            let bulletsArray = [];
            if (bulletsText) {
                bulletsArray = bulletsText
                    .split(/^\s*-\s+/m)
                    .map(b => b.trim())
                    .filter(b => b.length > 0)
                    .slice(0, 3);
            }
            
            const introHtml = introText ? parseMdInline(introText.replace(/\n+/g, ' ')) : '';
            
            let bulletsListHtml = '';
            if (bulletsArray.length > 0) {
                const itemsHtml = bulletsArray.map(item => `<li>${parseMdInline(item)}</li>`).join('');
                bulletsListHtml = `<ul class="experience-item__bullets">${itemsHtml}</ul>`;
            }
            
            if (index > 0) {
                html += '<hr class="experience-hr" />';
            }

            html += `
                <details class="experience-item">
                    <summary class="experience-item__summary">
                        <div class="experience-item__header-top">
                            <span class="experience-item__company">
                                ${parseMdInline(company)}
                                ${role ? ` <span class="experience-item__title-role">${parseMdInline(role)}</span>` : ''}
                            </span>
                            <div class="experience-item__header-right">
                                ${period ? `<span class="experience-item__period">${period}</span>` : ''}
                                <svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/>
                                </svg>
                            </div>
                        </div>
                    </summary>
                    <div class="experience-item__body">
                        ${introHtml ? `<p class="experience-item__intro">${introHtml}</p>` : ''}
                        ${bulletsListHtml}
                    </div>
                </details>
            `;
        });
        
        container.innerHTML = html;
    } catch (e) {
        console.error('Error loading work-experience.md:', e);
    }
}

// Load Skills, Tools & Education
async function loadSkillsTools() {
    const container = document.getElementById('skills-tools-container');
    if (!container) return;
    const path = 'content/skills-tools.md';
    watchForMarkdownChanges(path);
    try {
        const res = await fetch(path);
        if (!res.ok) return;
        const text = await res.text();
        const { content } = parseFrontmatter(text);
        
        const cleanContent = content.replace(/^# .*$/m, '').trim();
        const sections = cleanContent.split(/^## /m).filter(s => s.trim().length > 0);
        let html = '';
        
        sections.forEach(section => {
            const lines = section.trim().split('\n');
            const title = lines[0].replace(/^#+\s*/, '').trim();
            const body = lines.slice(1).join('\n').trim();
            
            if (title.toLowerCase() === 'education') {
                return;
            }
            
            if (title.toLowerCase() === 'contact') {
                const contactHtml = parseMd(body);
                html += `
                    <div class="grid-row grid-list__item">
                        <div class="grid-row__lead">
                            <p class="job-row__label">Contact</p>
                        </div>
                        <div class="grid-row__content grid-list__content grid-list__content--light">
                            ${contactHtml}
                        </div>
                    </div>
                `;
                return;
            }
            
            if (title.toLowerCase() === 'tools') {
                const toolLines = body.split('\n').filter(l => l.trim().startsWith('-'));
                let toolsHtml = '';
                toolLines.forEach(line => {
                    const cleanLine = line.replace(/^- /, '').trim();
                    const colonIdx = cleanLine.indexOf(':');
                    if (colonIdx !== -1) {
                        const namePart = cleanLine.slice(0, colonIdx).replace(/\*\*/g, '').trim();
                        const descPart = cleanLine.slice(colonIdx + 1).trim();
                        toolsHtml += `<p>${namePart}: <span>${descPart}</span></p>`;
                    } else {
                        toolsHtml += `<p>${cleanLine}</p>`;
                    }
                });
                html += `
                    <div class="grid-row grid-list__item">
                        <div class="grid-row__lead">
                            <p class="job-row__label">Tools</p>
                        </div>
                        <div class="grid-row__content grid-list__content">
                            ${toolsHtml}
                        </div>
                    </div>
                `;
                return;
            }
            
            const parsedBody = parseMd(body);
            let itemsHtml = '';
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = parsedBody;
            const lis = tempDiv.querySelectorAll('li');
            if (lis.length > 0) {
                lis.forEach(li => {
                    itemsHtml += `<p>${li.innerHTML}</p>`;
                });
            } else {
                itemsHtml = parsedBody;
            }
            
            html += `
                <div class="grid-row grid-list__item">
                    <div class="grid-row__lead">
                        <p class="job-row__label">${title}</p>
                    </div>
                    <div class="grid-row__content grid-list__content grid-list__content--light">
                        ${itemsHtml}
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    } catch (e) {
        console.error('Error loading skills-tools.md:', e);
    }
}

// Load Work List Entries (Some Work section)
async function loadWorkList() {
    const container = document.getElementById('work-list-container');
    if (!container) return;
    
    const caseStudies = [
        { path: 'content/case-studies/Kiin Bio (KiinOS Platform).md', defaultLink: 'kiin-bio.html' },
        { path: 'content/case-studies/00-lifebit-ia-nav.md', defaultLink: 'lifebit.html' },
        { path: 'content/case-studies/Co-op Bank.md', defaultLink: 'coop-bank.html' }
    ];
    
    let html = '';
    for (let i = 0; i < caseStudies.length; i++) {
        const item = caseStudies[i];
        watchForMarkdownChanges(item.path);
        try {
            const res = await fetch(item.path);
            if (!res.ok) continue;
            const text = await res.text();
            const { frontmatter } = parseFrontmatter(text);
            
            const project = frontmatter.project || frontmatter.title || '';
            const client = frontmatter.client || '';
            const description = frontmatter.description || '';
            const image = frontmatter.image || 'img/design-process/proposed-app-map.png';
            const link = frontmatter.link || item.defaultLink;
            const tags = frontmatter.tags || [];
            
            const imageBg = frontmatter.imageBg || '';
            const isBleed = client === 'Co-op Bank' || client === 'Lifebit';
            const wrapperClass = isBleed ? 'work-card__image-wrapper work-card__image-wrapper--bleed' : 'work-card__image-wrapper';
            const imgClass = isBleed ? 'work-card__image work-card__image--cover' : 'work-card__image';

            html += `
                <a class="work-card group" href="${link}">
                    <div class="${wrapperClass}" ${imageBg ? `style="background-color: ${imageBg} !important;"` : ''}>
                        <div class="work-card__image-inner">
                            <img src="${image}" alt="${project}" class="${imgClass}" loading="lazy" />
                        </div>
                    </div>
                    <div class="work-card__details">
                        <div class="work-card__title-row">
                            <h3 class="work-card__title">${project}</h3>
                        </div>
                        <p class="work-card__description">${description}</p>
                    </div>
                </a>
            `;
        } catch (e) {
            console.error(`Error loading work list item ${item.path}:`, e);
        }
    }
    
    container.innerHTML = html;
}

// Load Modal Case Study Threads
async function loadThreadModals() {
    const threadFiles = [
        { id: 'thread-0', path: 'content/case-studies/00-lifebit-ia-nav.md' },
        { id: 'thread-1', path: 'content/case-studies/01-coop-payments.md' },
        { id: 'thread-2', path: 'content/case-studies/02-coop-ia-redesign.md' },
        { id: 'thread-3', path: 'content/case-studies/03-coop-ux-metrics.md' },
        { id: 'thread-4', path: 'content/case-studies/04-coop-design-system.md' }
    ];
    
    for (const thread of threadFiles) {
        const dialog = document.querySelector(`dialog.${thread.id}`);
        if (!dialog) continue;
        watchForMarkdownChanges(thread.path);
        
        try {
            const res = await fetch(thread.path);
            if (!res.ok) continue;
            const text = await res.text();
            const { frontmatter, content } = parseFrontmatter(text);
            
            const container = dialog.querySelector('.container');
            if (!container) continue;
            
            let headerHtml = `
                <div class="profile">
                    <p class="name text-l text-bold">${frontmatter.title || ''}</p>
                    <p class="tagline text-m text-medium">${frontmatter.tagline || frontmatter.subtitle || ''}</p>
                </div>
            `;
            
            const renderer = getRenderer();
            if (renderer.paragraph) {
                renderer.paragraph = function (token) {
                    const inlineText = this.parser ? this.parser.parseInline(token.tokens || []) : (token.text || '');
                    if (inlineText.trim().startsWith('<img') || inlineText.trim().startsWith('<video')) {
                        return `<div class="job-thumb">${inlineText}</div>`;
                    }
                    return `<p>${inlineText}</p>`;
                };
            }

            const parsedHtml = parseMd(content, { renderer });
            
            container.innerHTML = `
                <section class="thread post">
                    ${headerHtml}
                    <div class="job">
                        <div class="job-content">
                            <div class="job-description">
                                ${parsedHtml}
                            </div>
                        </div>
                    </div>
                </section>
            `;
            wrapImages(container);
        } catch (e) {
            console.error(`Error loading ${thread.path}:`, e);
        }
    }
}

// Load Full Case Study Page (lifebit.html, kiin-bio.html, coop-bank.html, design-process.html, etc.)
async function loadFullCaseStudy() {
    const caseStudyBody = document.querySelector('.case-study__body');
    const threadPost = document.querySelector('section.thread.post');
    
    if (!caseStudyBody && !threadPost) return;
    
    let mdPath = caseStudyBody ? caseStudyBody.getAttribute('data-case-study') : null;
    
    if (!mdPath) {
        const pathName = window.location.pathname.toLowerCase();
        if (pathName.includes('kiin-bio')) {
            mdPath = 'content/case-studies/Kiin Bio (KiinOS Platform).md';
        } else if (pathName.includes('lifebit-etl')) {
            mdPath = 'content/case-studies/Lifebit (Genomic ETL Pipelines).md';
        } else if (pathName.includes('lifebit')) {
            mdPath = 'content/case-studies/00-lifebit-ia-nav.md';
        } else if (pathName.includes('coop-bank')) {
            mdPath = 'content/case-studies/Co-op Bank.md';
        } else {
            mdPath = 'content/case-studies/00-lifebit-ia-nav.md';
        }
    }
    
    watchForMarkdownChanges(mdPath);
    
    try {
        const res = await fetch(mdPath);
        if (!res.ok) return;
        const text = await res.text();
        const { frontmatter, content } = parseFrontmatter(text);
        
        const renderer = getRenderer();
        if (renderer.paragraph) {
            renderer.paragraph = function (token) {
                const inlineText = this.parser ? this.parser.parseInline(token.tokens || []) : (token.text || '');
                if (inlineText.trim().startsWith('<img') || inlineText.trim().startsWith('<video')) {
                    return `<div class="job-thumb">${inlineText}</div>`;
                }
                return `<p>${inlineText}</p>`;
            };
        }

        const parsedHtml = parseMd(content, { renderer });
        
        if (caseStudyBody) {
            let heroImageHtml = '';
            if (frontmatter.image) {
                const isBleed = frontmatter.client === 'Co-op Bank' || frontmatter.client === 'Lifebit';
                const heroClass = isBleed ? 'case-study-hero case-study-hero--bleed' : 'case-study-hero';
                const imgClass = isBleed ? 'case-study-hero__image case-study-hero__image--cover' : 'case-study-hero__image';
                const imageBgStyle = frontmatter.imageBg ? `style="background-color: ${frontmatter.imageBg} !important;"` : '';
                heroImageHtml = `
                    <div class="${heroClass}" ${imageBgStyle}>
                        <div class="case-study-hero__inner">
                            <img src="${frontmatter.image}" alt="${frontmatter.title || 'Case study image'}" class="${imgClass}" />
                        </div>
                    </div>
                `;
            }
            caseStudyBody.innerHTML = heroImageHtml + parsedHtml;
            wrapImages(caseStudyBody);
            const cover = document.querySelector('.case-study__cover');
            if (cover && frontmatter.title) {
                const tags = frontmatter.tags || [];
                const tagsHtml = Array.isArray(tags) && tags.length > 0
                    ? tags.map(tag => `<span class="case-study-tag">${tag}</span>`).join('')
                    : '';
                const client = frontmatter.client || '';
                const project = frontmatter.project || '';
                const year = frontmatter.year || '';
                const subtitle = [client, project, year].filter(Boolean).join(' ∙ ');
                cover.innerHTML = `
                    <h1 class="case-study-title">${frontmatter.title}</h1>
                    ${tagsHtml ? `<div class="case-study-tags">${tagsHtml}</div>` : ''}
                `;
            }
        } else if (threadPost) {
            threadPost.innerHTML = parsedHtml;
            wrapImages(threadPost);
        }
    } catch (e) {
        console.error(`Error loading case study ${mdPath}:`, e);
    }
}

// Wrap case study images in a container
function wrapImages(root) {
    const images = root.querySelectorAll('img');
    images.forEach(img => {
        if (img.closest('.case-study-hero') || img.classList.contains('profile-pic-img') || img.closest('.profile-pic') || img.closest('.work-card')) return;
        if (img.parentElement.classList.contains('case-study-image-wrapper') || img.parentElement.classList.contains('job-thumb') || img.parentElement.classList.contains('case-study__image')) return;
        
        const wrapper = document.createElement('div');
        wrapper.className = 'case-study-image-wrapper';
        
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
    });
}

// Copy email to clipboard handler
document.addEventListener('click', function (e) {
    const copyBtn = e.target.closest('#copy-email-btn, .contact-link--copy');
    if (copyBtn) {
        e.preventDefault();
        const email = 'faddenero@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            copyBtn.classList.add('is-copied');
            setTimeout(() => {
                copyBtn.classList.remove('is-copied');
            }, 1800);
        }).catch(err => {
            console.error('Failed to copy email:', err);
        });
    }
});

// Image fullscreen expansion and keyboard navigation
function initImageFullscreen() {
    document.addEventListener("click", function (e) {
        let img = e.target.closest("img");
        if (!img) {
            const wrapper = e.target.closest(".case-study-image-wrapper, .job-thumb, .case-study__image");
            if (wrapper) {
                img = wrapper.querySelector("img");
            }
        }
        
        if (img && !img.classList.contains("profile-pic-img") && !img.closest(".profile-pic") && !img.closest(".work-card")) {
            img.classList.toggle("img-fullscreen");
            document.body.classList.toggle("no-scroll");
        }
    });

    document.addEventListener("keydown", function (e) {
        const expandedImg = document.querySelector("img.img-fullscreen");
        if (!expandedImg) return;

        if (e.key === "Escape") {
            expandedImg.classList.remove("img-fullscreen");
            document.body.classList.remove("no-scroll");
            return;
        }

        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            const dialog = expandedImg.closest('dialog');
            const container = dialog && dialog.open ? dialog : document.body;

            const eligibleImages = Array.from(container.querySelectorAll('img')).filter(i => {
                return !i.classList.contains('profile-pic-img') && 
                       !i.closest('.profile-pic') && 
                       !i.closest('.work-card');
            });

            if (eligibleImages.length <= 1) return;

            const currentIndex = eligibleImages.indexOf(expandedImg);
            if (currentIndex === -1) return;

            let nextIndex;
            if (e.key === "ArrowRight") {
                nextIndex = (currentIndex + 1) % eligibleImages.length;
            } else {
                nextIndex = (currentIndex - 1 + eligibleImages.length) % eligibleImages.length;
            }

            expandedImg.classList.remove("img-fullscreen");
            eligibleImages[nextIndex].classList.add("img-fullscreen");
            e.preventDefault();
        }
    });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        loadProfile(),
        loadWorkExperience(),
        loadSkillsTools(),
        loadWorkList(),
        loadThreadModals(),
        loadFullCaseStudy()
    ]);
    initImageFullscreen();
});
