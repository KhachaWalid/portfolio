import { projects, skills } from './data/projects.js';

/* =============================================
   Render Projects
   ============================================= */
const grid = document.getElementById('projects-grid');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');

function renderProjects() {
  grid.innerHTML = projects.map((project, i) => `
    <article class="project-card reveal-card" data-project-id="${project.id}">
      <div class="project-card-thumb">
        ${project.image
          ? `<img src="${project.image}" alt="${project.title}" class="project-card-img" loading="lazy" />`
          : `<div class="project-card-thumb-bg">${project.title[0]}</div>`
        }
        <div class="project-card-thumb-overlay">
          <div class="project-card-links" data-stop-propagation>
            ${project.liveUrl
              ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-card-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Live
                </a>`
              : ''}
            ${project.githubUrl
              ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-card-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  Code
                </a>`
              : ''}
          </div>
        </div>
      </div>
      <div class="project-card-body">
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-description">${project.description}</p>
        <div class="project-card-tech">
          ${project.tech.map(t => `<span class="project-card-tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-stop-propagation]')) return;
      const id = card.dataset.projectId;
      openProjectModal(id);
    });
  });
}

function openProjectModal(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  modalBody.innerHTML = `
    <h2 class="modal-project-title">${project.title}</h2>
    <div class="modal-project-tech">
      ${project.tech.map(t => `<span class="modal-project-tech-tag">${t}</span>`).join('')}
    </div>
    <div class="modal-project-description">
      <p>${project.description}</p>
    </div>
    <div class="modal-project-links">
      ${project.liveUrl
        ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="modal-project-link modal-project-link-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            View Live
          </a>`
        : ''}
      ${project.githubUrl
        ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="modal-project-link modal-project-link-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            View Code
          </a>`
        : ''}
    </div>
  `;

  modal.showModal();
  document.body.style.overflow = 'hidden';
}

modal.addEventListener('close', () => {
  document.body.style.overflow = '';
});

modal.querySelector('.modal-close').addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.close();
});

/* =============================================
   Render Skills (flat logo grid)
   ============================================= */
const skillsGrid = document.getElementById('skills-grid');

function renderSkills() {
  const iconUrl = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

  skillsGrid.innerHTML = skills.map(skill => `
    <div class="skill-logo reveal-card" title="${skill.name}">
      <img src="${iconUrl(skill.icon)}" alt="${skill.name}" class="skill-logo-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" />
      <span class="skill-logo-fallback">${skill.name}</span>
      <span class="skill-logo-label">${skill.name}</span>
    </div>
  `).join('');
}

/* =============================================
   Intersection Observer (Scroll Reveals)
   ============================================= */
function initReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px',
  });

  document.querySelectorAll('.reveal-up, .reveal-card, .reveal-stagger').forEach(el => {
    observer.observe(el);
  });
}

/* =============================================
   Navigation Dots
   ============================================= */
function initNavDots() {
  const sections = document.querySelectorAll('.section[id]');
  const dots = document.querySelectorAll('.nav-dot');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        dots.forEach(d => d.classList.remove('is-active'));
        const active = document.querySelector(`.nav-dot[href="#${entry.target.id}"]`);
        if (active) active.classList.add('is-active');
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-10% 0px -10% 0px',
  });

  sections.forEach(s => observer.observe(s));

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(dot.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* =============================================
   Cursor Glow
   ============================================= */
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;

  let rafId = null;

  document.addEventListener('mousemove', (e) => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      glow.style.setProperty('--cursor-x', `${e.clientX}px`);
      glow.style.setProperty('--cursor-y', `${e.clientY}px`);
      rafId = null;
    });
  });
}

/* =============================================
   Footer Year
   ============================================= */
document.getElementById('footer-year').textContent = new Date().getFullYear();

/* =============================================
   Init
   ============================================= */
renderProjects();
renderSkills();
initReveals();
initNavDots();
initCursorGlow();
