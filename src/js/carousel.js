// ===== Testimonial Carousel Module =====

export function initCarousel() {
  const wrappers = document.querySelectorAll('.carousel-wrapper');

  wrappers.forEach(wrapper => {
    const track = wrapper.querySelector('.carousel-track');
    const prevBtn = wrapper.querySelector('.carousel-prev');
    const nextBtn = wrapper.querySelector('.carousel-next');
    const dotsContainer = wrapper.querySelector('.carousel-dots');

    if (!track) return;

    const cards = track.querySelectorAll('.carousel-card');
    const cardWidth = cards[0]?.offsetWidth || 380;
    const gap = 24;
    let currentIndex = 0;
    const maxIndex = Math.max(0, cards.length - Math.floor(track.offsetWidth / (cardWidth + gap)));

    // Create dots
    if (dotsContainer) {
      cards.forEach((_, i) => {
        if (i <= maxIndex) {
          const dot = document.createElement('button');
          dot.classList.add('carousel-dot');
          if (i === 0) dot.classList.add('active');
          dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
          dot.addEventListener('click', () => scrollToIndex(i));
          dotsContainer.appendChild(dot);
        }
      });
    }

    function scrollToIndex(index) {
      currentIndex = Math.max(0, Math.min(index, maxIndex));
      track.scrollTo({
        left: currentIndex * (cardWidth + gap),
        behavior: 'smooth'
      });
      updateDots();
    }

    function updateDots() {
      if (!dotsContainer) return;
      dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    // Prev / Next
    if (prevBtn) {
      prevBtn.addEventListener('click', () => scrollToIndex(currentIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => scrollToIndex(currentIndex + 1));
    }

    // Update dots on manual scroll
    let scrollTimeout;
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = track.scrollLeft;
        const newIndex = Math.round(scrollLeft / (cardWidth + gap));
        if (newIndex !== currentIndex) {
          currentIndex = newIndex;
          updateDots();
        }
      }, 100);
    }, { passive: true });

    // Auto-play
    let autoPlayInterval = setInterval(() => {
      if (currentIndex >= maxIndex) {
        scrollToIndex(0);
      } else {
        scrollToIndex(currentIndex + 1);
      }
    }, 5000);

    wrapper.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    wrapper.addEventListener('mouseleave', () => {
      autoPlayInterval = setInterval(() => {
        if (currentIndex >= maxIndex) {
          scrollToIndex(0);
        } else {
          scrollToIndex(currentIndex + 1);
        }
      }, 5000);
    });
  });
}
