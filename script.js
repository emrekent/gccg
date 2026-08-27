/**
 * GLOBAL COLLECTIVE CAPITAL GROUP (GCCG) — PROTOTYPE ENGINE
 * GoHighLevel Compatible Custom Logic & Multi-Step Concierge
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initModalConcierge();
  initPathwayCards();
  initMobileStickyBanner();
});

/* 1. Header Scroll Effect */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* 2. Mobile Navigation Toggle */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-menu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('mobile-open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close when clicking nav links or dropdown items
  navMenu.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* 3. Mobile Sticky Bottom CTA Banner (Appears after 150px scroll) */
function initMobileStickyBanner() {
  const stickyBanner = document.getElementById('mobile-sticky-cta');
  if (!stickyBanner) return;

  const handleStickyScroll = () => {
    if (window.scrollY > 150) {
      stickyBanner.classList.add('visible');
    } else {
      stickyBanner.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleStickyScroll, { passive: true });
  handleStickyScroll();
}

/* 4. Interactive Multi-Step Concierge Modal */
let currentStep = 1;
const totalSteps = 3;

function initModalConcierge() {
  const modal = document.getElementById('intake-modal');
  const openButtons = document.querySelectorAll('[data-open-modal]');
  const closeButtons = document.querySelectorAll('[data-close-modal]');

  if (!modal) return;

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPathway = btn.getAttribute('data-pathway');
      if (targetPathway) {
        preselectPathway(targetPathway);
      }
      openModal();
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => closeModal());
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Option choice cards in step 1
  document.querySelectorAll('.option-choice-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.option-choice-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  // Step navigation buttons
  const btnStep1Next = document.getElementById('btn-step1-next');
  const btnStep2Prev = document.getElementById('btn-step2-prev');
  const btnStep2Next = document.getElementById('btn-step2-next');
  const btnStep3Prev = document.getElementById('btn-step3-prev');
  const conciergeForm = document.getElementById('concierge-form');

  if (btnStep1Next) {
    btnStep1Next.addEventListener('click', () => setStep(2));
  }
  if (btnStep2Prev) {
    btnStep2Prev.addEventListener('click', () => setStep(1));
  }
  if (btnStep2Next) {
    btnStep2Next.addEventListener('click', () => setStep(3));
  }
  if (btnStep3Prev) {
    btnStep3Prev.addEventListener('click', () => setStep(2));
  }

  if (conciergeForm) {
    conciergeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSubmission();
    });
  }
}

function openModal() {
  const modal = document.getElementById('intake-modal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  setStep(1);
}

function closeModal() {
  const modal = document.getElementById('intake-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function setStep(step) {
  currentStep = step;
  
  // Update step visibility
  document.querySelectorAll('.intake-step').forEach(el => {
    el.classList.toggle('active', parseInt(el.getAttribute('data-step')) === currentStep);
  });

  // Update progress indicators
  document.querySelectorAll('.step-pill').forEach((pill, idx) => {
    pill.classList.toggle('active', (idx + 1) <= currentStep);
  });
}

function preselectPathway(pathwayValue) {
  document.querySelectorAll('.option-choice-card').forEach(card => {
    const radio = card.querySelector('input[type="radio"]');
    if (radio && radio.value === pathwayValue) {
      card.classList.add('selected');
      radio.checked = true;
    } else {
      card.classList.remove('selected');
    }
  });
}

function handleFormSubmission() {
  const submitBtn = document.getElementById('btn-submit-form');
  const formContent = document.getElementById('modal-form-content');
  const successState = document.getElementById('modal-success-state');

  if (submitBtn) {
    submitBtn.textContent = 'Routing to GCCG Concierge...';
    submitBtn.disabled = true;
  }

  setTimeout(() => {
    if (formContent && successState) {
      formContent.style.display = 'none';
      successState.style.display = 'block';
    }
  }, 900);
}

/* 5. Pathway Cards Trigger */
function initPathwayCards() {
  document.querySelectorAll('.pathway-item-card').forEach(card => {
    card.addEventListener('click', () => {
      const pathway = card.getAttribute('data-pathway');
      preselectPathway(pathway);
      openModal();
    });
  });
}
