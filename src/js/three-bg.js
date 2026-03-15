// ===== Three.js Starfield Background =====
import * as THREE from 'three';

export function initStarfield() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 100;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  // Create starfield
  const starCount = 2000;
  const positions = new Float32Array(starCount * 3);
  const sizes = new Float32Array(starCount);
  const opacities = new Float32Array(starCount);
  const speeds = new Float32Array(starCount);

  for (let i = 0; i < starCount; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 600;  // x
    positions[i * 3 + 1] = (Math.random() - 0.5) * 600;  // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 600;  // z

    const depth = (positions[i * 3 + 2] + 300) / 600;
    sizes[i] = 0.5 + depth * 1.5;
    opacities[i] = 0.4 + depth * 0.6;
    speeds[i] = 0.05 + Math.random() * 0.15;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('aOpacity', new THREE.BufferAttribute(opacities, 1));

  // Custom shader for stars with varying size/opacity
  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    },
    vertexShader: `
      attribute float aSize;
      attribute float aOpacity;
      varying float vOpacity;
      uniform float uPixelRatio;

      void main() {
        vOpacity = aOpacity;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = aSize * uPixelRatio * (200.0 / -mvPosition.z);
        gl_PointSize = max(gl_PointSize, 0.5);
      }
    `,
    fragmentShader: `
      varying float vOpacity;

      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float strength = 1.0 - (dist * 2.0);
        strength = pow(strength, 1.5);
        gl_FragColor = vec4(1.0, 1.0, 1.0, strength * vOpacity);
      }
    `,
  });

  const stars = new THREE.Points(geometry, material);
  scene.add(stars);

  // Mouse tracking
  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let scrollSpeed = 0;
  let baseSpeed = 1;

  document.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Scroll velocity boost
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY || 0;
    scrollSpeed = Math.abs(currentScroll - lastScroll);
    lastScroll = currentScroll;
  }, { passive: true });

  // Fade canvas when hero is out of view
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        canvas.style.opacity = entry.isIntersecting ? '1' : '0';
      });
    }, { threshold: 0.05 });
    heroObserver.observe(heroSection);
  }

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    material.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Lerp mouse
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    // Camera parallax
    camera.position.x = mouse.x * 15;
    camera.position.y = -mouse.y * 15;
    camera.lookAt(scene.position);

    // Drift speed with scroll boost
    const currentSpeed = baseSpeed + Math.min(scrollSpeed * 0.3, 8);
    scrollSpeed *= 0.95; // decay

    // Move stars toward camera
    const posArray = geometry.attributes.position.array;
    for (let i = 0; i < starCount; i++) {
      posArray[i * 3 + 2] += speeds[i] * currentSpeed;

      // Reset stars that pass camera
      if (posArray[i * 3 + 2] > 300) {
        posArray[i * 3 + 2] = -300;
        posArray[i * 3]     = (Math.random() - 0.5) * 600;
        posArray[i * 3 + 1] = (Math.random() - 0.5) * 600;
      }
    }
    geometry.attributes.position.needsUpdate = true;

    // Slow global rotation
    stars.rotation.z += 0.0001;

    renderer.render(scene, camera);
  }

  animate();
}
