// ===== GSAP ScrollTrigger Animations =====
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Wait for DOM
  gsap.config({ nullTargetWarn: false });

  // ── Hero Pin ──
  ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: '+=150',
    pin: true,
    pinSpacing: false,
  });

  // ── Section headings reveal ──
  gsap.utils.toArray('.section-heading').forEach(heading => {
    gsap.from(heading, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: heading,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // ── Service Cards Stagger ──
  const serviceCards = gsap.utils.toArray('.service-card');
  if (serviceCards.length) {
    gsap.from(serviceCards, {
      opacity: 0,
      y: 60,
      scale: 0.95,
      duration: 0.7,
      stagger: 0.1,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 75%',
        once: true,
      },
    });
  }

  // ── Case Study Cards (alternating L/R) ──
  gsap.utils.toArray('.case-study-card').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      x: i % 2 === 0 ? -60 : 60,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        once: true,
      },
    });
  });

  // ── Stats Section ──
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    gsap.from('.stat-block', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 75%',
        once: true,
      },
    });
  }

  // ── Innovation Section ──
  const innovGrid = document.querySelector('.innovation-grid');
  if (innovGrid) {
    gsap.from('.innovation-text', {
      opacity: 0,
      x: -50,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.innovation-grid',
        start: 'top 75%',
        once: true,
      },
    });
    gsap.from('.innovation-visual', {
      opacity: 0,
      x: 50,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.innovation-grid',
        start: 'top 75%',
        once: true,
      },
    });
  }

  // ── About Teaser ──
  const aboutGrid = document.querySelector('.about-grid');
  if (aboutGrid) {
    gsap.from('.about-text', {
      opacity: 0,
      x: -50,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-grid',
        start: 'top 75%',
        once: true,
      },
    });
    gsap.from('.about-image', {
      opacity: 0,
      x: 50,
      scale: 0.95,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-grid',
        start: 'top 75%',
        once: true,
      },
    });
  }

  // ── Testimonials ──
  gsap.utils.toArray('.testimonial-card').forEach(card => {
    gsap.from(card, {
      opacity: 0,
      scale: 0.9,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // ── Blog Cards ──
  const blogCards = gsap.utils.toArray('.blog-card');
  if (blogCards.length) {
    gsap.from(blogCards, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.blog-grid',
        start: 'top 80%',
        once: true,
      },
    });
  }

  // ── FAQ Items ──
  gsap.utils.toArray('.accordion-item').forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: i * 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.faq-list',
        start: 'top 80%',
        once: true,
      },
    });
  });

  // ── Footer Columns ──
  const footerCols = gsap.utils.toArray('.footer__col');
  if (footerCols.length) {
    gsap.from(footerCols, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
        once: true,
      },
    });
  }

  // ── CTA Banner ──
  const ctaBanner = document.querySelector('.cta-banner');
  if (ctaBanner) {
    gsap.from('.cta-banner h2, .cta-banner p, .cta-banner .btn', {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.cta-banner',
        start: 'top 80%',
        once: true,
      },
    });
  }

  // ── Generic reveal elements (fallback) ──
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });
}
