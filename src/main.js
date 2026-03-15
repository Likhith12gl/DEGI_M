// ===== DEGIMarketing — Main Entry Point =====

// CSS imports
import './css/variables.css';
import './css/base.css';
import './css/components.css';
import './css/sections.css';
import './css/responsive.css';

// JS Modules
import { initStarfield } from './js/three-bg.js';
import { initNavbar } from './js/navbar.js';
import { initTilt } from './js/tilt.js';
import { initMagnetic } from './js/magnetic.js';
import { initSmoothScroll } from './js/smooth-scroll.js';
import { initCounters } from './js/counter.js';
import { initCarousel } from './js/carousel.js';
import { initAccordion } from './js/accordion.js';
import { initAnimations } from './js/animations.js';

// Initialize all modules on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Core layout
  initNavbar();
  initSmoothScroll();

  // 3D effects
  initStarfield();
  initTilt();
  initMagnetic();

  // Interactive components
  initCounters();
  initCarousel();
  initAccordion();

  // GSAP animations (must be last so DOM is ready for triggers)
  // Small delay to ensure layout is settled
  requestAnimationFrame(() => {
    initAnimations();
  });
});
