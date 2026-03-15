// ===== Magnetic Button Module =====

export function initMagnetic() {
  if (window.innerWidth < 768) return; // Disable on mobile

  const buttons = document.querySelectorAll('.btn-magnetic');
  if (!buttons.length) return;

  document.addEventListener('mousemove', (e) => {
    buttons.forEach(btn => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) +
        Math.pow(e.clientY - centerY, 2)
      );

      const radius = 80;

      if (distance < radius) {
        const strength = 1 - (distance / radius);
        const offsetX = (e.clientX - centerX) * strength * 0.4;
        const offsetY = (e.clientY - centerY) * strength * 0.4;

        btn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        btn.style.transition = 'transform 150ms ease';

        // Inner text parallax
        const textEl = btn.querySelector('.btn-text');
        if (textEl) {
          textEl.style.transform = `translate(${offsetX * 0.2}px, ${offsetY * 0.2}px)`;
          textEl.style.transition = 'transform 150ms ease';
        }
      } else {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';

        const textEl = btn.querySelector('.btn-text');
        if (textEl) {
          textEl.style.transform = 'translate(0, 0)';
          textEl.style.transition = 'transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }
      }
    });
  });

  // Add ripple effect on buttons
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      btn.style.setProperty('--ripple-x', `${x}%`);
      btn.style.setProperty('--ripple-y', `${y}%`);
    });
  });
}
