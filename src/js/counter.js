// ===== Stats Counter Module =====

export function initCounters() {
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection) return;

  const counters = statsSection.querySelectorAll('[data-count]');

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCounter(el, target, duration = 2200) {
    if (el.dataset.animated === 'true') return;
    el.dataset.animated = 'true';

    const start = performance.now();
    const suffix = el.dataset.suffix || '';
    const hasComma = target >= 1000;

    function formatNumber(n) {
      if (hasComma) return n.toLocaleString();
      return n.toString();
    }

    function update(time) {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const current = Math.floor(eased * target);

      el.textContent = formatNumber(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = formatNumber(target);
      }
    }

    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(el => {
          const target = parseInt(el.dataset.count, 10);
          animateCounter(el, target);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}
