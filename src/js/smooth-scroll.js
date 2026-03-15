// ===== Smooth Scroll (Lerp-based) =====
// Disabled on mobile — native touch scroll is better

export function initSmoothScroll() {
  // Disable on mobile/tablet
  if (window.innerWidth < 768) return;

  // For this implementation, we'll use native smooth scrolling
  // and enhance with scroll-triggered effects instead of
  // hijacking the scroll entirely, which can feel jarring.
  // The smooth feeling comes from GSAP ScrollTrigger's scrub
  // and our CSS transitions.

  // Smooth anchor link scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}
