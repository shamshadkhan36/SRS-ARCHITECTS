// ==========================================================================
// SRS ARCHITECTS - JAVASCRIPT APPLICATION LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTypologyFilter();
  initProjectsGallery();
  initModals();
  initOfficeSwitcher();
  initContactForm();
  initHeaderScrollSpy();
  initMobileNav();
});

/* --------------------------------------------------------------------------
   1. TYPOLOGY STACK FILTER (Matches User Image Directly Below Hero)
   -------------------------------------------------------------------------- */
let activeTypology = 'all';

function initTypologyFilter() {
  const typologyGrid = document.getElementById('typologyFilterGrid');
  if (!typologyGrid) return;

  const typologies = siteData.typologies;
  
  // Render clean, centered vertical stack matching user screenshot:
  // Residential, Healthcare, Landscape, Urban Planning, Educational, Hospitality, Commercial, Culture
  typologyGrid.innerHTML = typologies.map((t, idx) => `
    <div class="typology-stack-item">
      <button class="typology-stack-btn ${idx === 0 ? 'active' : ''}" onclick="setTypologyFilter('${t.id}', this, '${t.name}')">
        <span>${t.name}</span>
      </button>
    </div>
  `).join('');

  // Default to first typology or all
  activeTypology = typologies[0].id;
  updateActiveCategoryHeading(typologies[0].name);
}

window.setTypologyFilter = function(typologyId, btnElement, categoryName) {
  activeTypology = typologyId;
  
  document.querySelectorAll('.typology-stack-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }

  updateActiveCategoryHeading(categoryName || typologyId);
  renderProjects();
};

function updateActiveCategoryHeading(name) {
  const heading = document.getElementById('activeTypologyHeading');
  if (heading) {
    heading.textContent = `${name} Architecture`;
  }
}

function initProjectsGallery() {
  renderProjects();
}

function renderProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  const filteredProjects = activeTypology === 'all'
    ? siteData.projects
    : siteData.projects.filter(p => p.typology === activeTypology);

  if (filteredProjects.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--color-gray-mid);">
        <p style="font-size: 1.15rem;">Curating featured works in this typology. Contact our Indirapuram studio to view the complete architectural portfolio archive.</p>
        <a href="#contact" class="btn-submit-form" style="display: inline-block; width: auto; margin-top: 1.5rem; padding: 0.75rem 1.5rem;">Inquire About This Typology</a>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredProjects.map(project => `
    <div class="project-card" onclick="openProjectModal('${project.id}')">
      <div class="project-card-image-box">
        <img src="${project.thumbnail}" alt="${project.title}" class="project-card-img" loading="lazy">
        <div class="project-card-overlay"></div>
        <span class="project-card-badge">${project.typologyName}</span>
      </div>
      <div class="project-card-content">
        <h3 class="project-card-title">${project.title}</h3>
        <div class="project-card-meta">
          <span>${project.location}</span>
          <span>${project.year}</span>
        </div>
      </div>
    </div>
  `).join('');
}


/* --------------------------------------------------------------------------
   2. MODALS (Project Detail & SCRUM Explainer)
   -------------------------------------------------------------------------- */
function initModals() {
  const scrumTrigger = document.getElementById('scrumModalTrigger');
  const scrumModal = document.getElementById('scrumModal');

  if (scrumTrigger && scrumModal) {
    scrumTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      openScrumModal();
    });
  }

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal-backdrop').classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach(modal => {
        modal.classList.remove('active');
      });
      document.body.style.overflow = '';
    }
  });
}

window.openProjectModal = function(projectId) {
  const project = siteData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const content = document.getElementById('projectModalContainer');
  if (!modal || !content) return;

  content.innerHTML = `
    <button class="modal-close-btn" onclick="closeModal('projectModal')" aria-label="Close modal">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
    <div class="project-modal-gallery">
      <img src="${project.gallery[0]}" alt="${project.title}" class="project-modal-main-img" id="projectModalHeroImg">
    </div>
    <div class="project-modal-body">
      <div class="project-modal-header">
        <span class="project-modal-eyebrow">${project.typologyName} &bull; ${project.status}</span>
        <h2 class="project-modal-title">${project.title}</h2>
        <p style="color: var(--color-gray-mid); font-size: 0.95rem;">Client: <strong>${project.client}</strong></p>
      </div>

      <div class="project-modal-specs-grid">
        <div>
          <span class="spec-cell-label">Location</span>
          <div class="spec-cell-value">${project.location}</div>
        </div>
        <div>
          <span class="spec-cell-label">Built-up Area</span>
          <div class="spec-cell-value">${project.area}</div>
        </div>
        <div>
          <span class="spec-cell-label">Year</span>
          <div class="spec-cell-value">${project.year}</div>
        </div>
        <div>
          <span class="spec-cell-label">Firm</span>
          <div class="spec-cell-value">SRS ARCHITECTS</div>
        </div>
      </div>

      <p class="project-modal-desc">${project.description}</p>

      <div class="project-modal-highlights">
        <h4>Key Architectural Highlights & Innovations</h4>
        <ul class="highlights-list">
          ${project.highlights.map(h => `
            <li class="highlight-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="margin-top: 2.5rem; display: flex; flex-wrap: wrap; gap: 1rem;">
        <button class="btn-submit-form" style="width: auto; padding: 0.85rem 2rem;" onclick="openConsultationModal('${project.title}')">
          Request Project Consultation
        </button>
        <a href="tel:07303415617" class="btn-direct-call">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
          <span>Call 073034 15617</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.openScrumModal = function() {
  const modal = document.getElementById('scrumModal');
  const container = document.getElementById('scrumModalContainer');
  if (!modal || !container) return;

  const scrum = siteData.scrumProcess;

  container.innerHTML = `
    <button class="modal-close-btn" onclick="closeModal('scrumModal')" aria-label="Close modal">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
    <div class="scrum-modal-header">
      <span class="section-eyebrow">Agile Architectural Framework</span>
      <h2 style="font-size: 2.25rem; margin-top: 0.25rem; color: var(--color-primary);">${scrum.title}</h2>
      <p style="font-size: 1.1rem; color: var(--color-gray-dark); margin-top: 0.5rem;">${scrum.tagline}</p>
    </div>
    <div class="scrum-modal-body">
      <p style="font-size: 1.05rem; line-height: 1.75; color: var(--color-gray-dark); margin-bottom: 2rem;">
        SRS ARCHITECTS implements agile SCRUM sprint methodology for architectural design and building delivery, breaking multi-stage design cycles into transparent 2-week stakeholder sprints with 3D BIM integration and value engineering.
      </p>

      <div class="scrum-steps-timeline">
        ${scrum.phases.map(phase => `
          <div class="scrum-step-card">
            <div class="scrum-step-number">${phase.step}</div>
            <div>
              <h3 class="scrum-step-title">${phase.title}</h3>
              <div class="scrum-step-duration">${phase.duration}</div>
              <p class="scrum-step-desc">${phase.description}</p>
              <div class="deliverables-tag-list">
                ${phase.keyDeliverables.map(d => `
                  <span class="deliverable-tag">&bull; ${d}</span>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};


/* --------------------------------------------------------------------------
   3. MULTI-OFFICE LOCATOR SWITCHER
   -------------------------------------------------------------------------- */
function initOfficeSwitcher() {
  const tabsContainer = document.getElementById('officeTabs');
  const detailsContainer = document.getElementById('officeDetailsCard');

  if (!tabsContainer || !detailsContainer) return;

  const offices = siteData.offices;

  tabsContainer.innerHTML = offices.map((office, idx) => `
    <button class="office-tab-btn ${idx === 0 ? 'active' : ''}" onclick="selectOffice('${office.id}', this)">
      ${office.city.split('(')[0]}
    </button>
  `).join('');

  renderOfficeCard(offices[0]);
}

window.selectOffice = function(officeId, btnElement) {
  document.querySelectorAll('.office-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const office = siteData.offices.find(o => o.id === officeId);
  if (office) renderOfficeCard(office);
};

function renderOfficeCard(office) {
  const container = document.getElementById('officeDetailsCard');
  if (!container) return;

  container.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
      <h3 class="office-city-title" style="margin-bottom: 0;">${office.city}</h3>
      <span class="rating-badge-pill">★ 4.7 (11 Reviews)</span>
    </div>
    <p style="color: var(--color-primary); font-weight: 700; font-size: 0.9rem; margin-bottom: 1rem;">${office.building}</p>
    
    <div class="office-info-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
      <span>${office.address}</span>
    </div>
    
    <div class="office-info-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
      <div>
        <a href="tel:${office.phone}" style="font-weight: 700; color: var(--color-dark); font-size: 1.05rem;">${office.phone}</a>
        <span style="color: var(--color-gray-mid); font-size: 0.85rem; margin-left: 0.5rem;">(Direct Line)</span>
      </div>
    </div>

    <div class="office-info-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      <span>${office.hours}</span>
    </div>

    <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
      <a href="https://maps.google.com/?q=SRS+ARCHITECTS+One+Square+Indirapuram+Ghaziabad" target="_blank" rel="noopener" class="btn-office-action">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
        <span>Get Directions</span>
      </a>
      <a href="https://wa.me/${office.whatsapp}?text=Hello%20SRS%20ARCHITECTS,%20I%20would%20like%20to%20inquire%20about%20architectural%20design%20services." target="_blank" rel="noopener" class="btn-office-whatsapp">
        <span>WhatsApp Studio</span>
      </a>
    </div>
  `;
}


/* --------------------------------------------------------------------------
   4. CONTACT & INQUIRY FORM
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('consultationForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('formName')?.value || 'Client';
    const typology = document.getElementById('formTypology')?.value;

    showToast(`Thank you, ${name}! Your architectural inquiry for ${typology} has been received. SRS ARCHITECTS will connect with you at 073034 15617.`);
    form.reset();
  });
}

window.openConsultationModal = function(projectName) {
  closeModal('projectModal');
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    const textarea = document.getElementById('formMessage');
    if (textarea && projectName) {
      textarea.value = `I am interested in architectural consultation with SRS ARCHITECTS inspired by "${projectName}".`;
    }
  }
};


/* --------------------------------------------------------------------------
   5. HEADER SCROLL & MOBILE NAV
   -------------------------------------------------------------------------- */
function initHeaderScrollSpy() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (header) {
      header.classList.toggle('scrolled', scrollY > 30);
    }

    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      const secHeight = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else if (link.getAttribute('href')?.startsWith('#')) {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { passive: true });
}

function initMobileNav() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuToggle || !mobileDrawer) return;

  menuToggle.addEventListener('click', () => {
    mobileDrawer.classList.toggle('open');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f06434" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <span>${message}</span>
  `;

  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 4500);
}
