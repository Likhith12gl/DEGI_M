// ===== Service Page — Query Param Content Swap =====

const serviceData = {
  performance: {
    eyebrow: 'Performance Marketing',
    title: 'Performance Marketing That <span class="text-gradient">Delivers ROI</span>',
    subtitle: 'Data-driven campaigns across Google, Meta, and programmatic that maximize every dollar spent.',
    breadcrumb: 'Performance Marketing',
  },
  branding: {
    eyebrow: 'Branding',
    title: 'Brand Identities That <span class="text-gradient">Resonate</span>',
    subtitle: 'From logos to complete brand systems — we forge identities that stand the test of time.',
    breadcrumb: 'Branding',
  },
  uiux: {
    eyebrow: 'UI/UX Design',
    title: 'Interfaces That <span class="text-gradient">Convert & Delight</span>',
    subtitle: 'User-centered design with pixel-perfect execution and research-backed decisions.',
    breadcrumb: 'UI/UX Design',
  },
  webdev: {
    eyebrow: 'Web Development',
    title: 'Websites That <span class="text-gradient">Perform & Impress</span>',
    subtitle: 'Lightning-fast, responsive websites engineered with modern tech stacks for maximum impact.',
    breadcrumb: 'Web Development',
  },
  seo: {
    eyebrow: 'SEO',
    title: 'Search Rankings That <span class="text-gradient">Drive Growth</span>',
    subtitle: 'Technical SEO, content strategy, and authority building that puts you on page one.',
    breadcrumb: 'SEO',
  },
  photography: {
    eyebrow: 'Photography',
    title: 'Visual Stories That <span class="text-gradient">Captivate</span>',
    subtitle: 'Product shoots, events, and creative campaigns — imagery that elevates your brand.',
    breadcrumb: 'Photography',
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const serviceKey = params.get('service');

  if (serviceKey && serviceData[serviceKey]) {
    const data = serviceData[serviceKey];

    document.title = `${data.breadcrumb} — DEGIMarketing`;

    const eyebrow = document.getElementById('service-eyebrow');
    const title = document.getElementById('service-title');
    const subtitle = document.getElementById('service-subtitle');
    const breadcrumb = document.getElementById('breadcrumb-service');

    if (eyebrow) eyebrow.textContent = data.eyebrow;
    if (title) title.innerHTML = data.title;
    if (subtitle) subtitle.textContent = data.subtitle;
    if (breadcrumb) breadcrumb.textContent = data.breadcrumb;

    // Highlight active nav link
    document.querySelectorAll('.dropdown a').forEach(link => {
      if (link.href.includes(`service=${serviceKey}`)) {
        link.style.color = 'var(--color-accent)';
        link.style.fontWeight = '600';
      }
    });
  }
});
