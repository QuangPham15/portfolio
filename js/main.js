// ===== AOS =====
AOS.init({
  duration: 600,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
});

// ===== TYPED.JS =====
new Typed('#typed', {
  strings: [
    'Full-Stack Engineer',
    'React + Nest.js Engineer',
    'AI-Powered Developer',
    'TypeScript Enthusiast',
  ],
  typeSpeed: 60,
  backSpeed: 35,
  backDelay: 2000,
  loop: true,
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===== SCROLL SPY =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

const observerOptions = {
  root: null,
  rootMargin: '-40% 0px -55% 0px',
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
      });
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// ===== GALLERY TABS =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

const archZoom = document.getElementById('archZoom');
const archImg  = document.getElementById('archImg');
if (archZoom && archImg) {
  const archView = archImg.parentElement;
  archView.addEventListener('click', (e) => {
    if (e.target !== archZoom && !archZoom.contains(e.target)) {
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
      lightboxImg.src = archImg.src;
      lightboxImg.alt = 'System Architecture';
      lightboxCap.textContent = 'System Architecture';
      lightboxCtr.textContent = '';
    }
  });
  archZoom.addEventListener('click', () => {
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lightboxImg.src = archImg.src;
    lightboxImg.alt = 'System Architecture';
    lightboxCap.textContent = 'System Architecture';
    lightboxCtr.textContent = '';
  });
}

// ===== SCREENSHOT GALLERY =====
const thumbs       = document.querySelectorAll('.thumb');
const mainImg      = document.getElementById('mainScreenshotImg');
const zoomBtn      = document.getElementById('screenshotZoom');
const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightboxImg');
const lightboxCap  = document.getElementById('lightboxCaption');
const lightboxCtr  = document.getElementById('lightboxCounter');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const backdrop     = document.getElementById('lightboxBackdrop');

const screenshots = Array.from(thumbs).map(t => ({
  src:     t.dataset.src,
  caption: t.dataset.caption,
}));

let currentIndex = 0;

function setMainImage(index) {
  currentIndex = index;
  const { src, caption } = screenshots[index];
  thumbs.forEach((t, i) => t.classList.toggle('active', i === index));

  if (mainImg) {
    const placeholder = mainImg.nextElementSibling;
    mainImg.style.display = 'none';
    if (placeholder) placeholder.style.display = 'flex';

    mainImg.onload = () => {
      mainImg.style.display = 'block';
      if (placeholder) placeholder.style.display = 'none';
    };
    mainImg.onerror = () => {
      mainImg.style.display = 'none';
      if (placeholder) placeholder.style.display = 'flex';
    };
    mainImg.src = src;
    mainImg.alt = caption;
  }
}

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  resetZoom();
}

// ===== LIGHTBOX ZOOM =====
let scale = 1, dragX = 0, dragY = 0;
let isDragging = false, startX = 0, startY = 0;
const imgWrap = document.querySelector('.lightbox-img-wrap');

function applyTransform() {
  lightboxImg.style.transform = `translate(${dragX}px, ${dragY}px) scale(${scale})`;
  lightboxImg.style.cursor = scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in';
}

function resetZoom() {
  scale = 1; dragX = 0; dragY = 0;
  if (lightboxImg) {
    lightboxImg.style.transform = '';
    lightboxImg.style.cursor = 'zoom-in';
  }
}

if (imgWrap) {
  // Scroll to zoom tại vị trí con trỏ
  imgWrap.addEventListener('wheel', (e) => {
    e.preventDefault();
    const rect = imgWrap.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    const newScale = Math.min(Math.max(scale + delta, 1), 5);

    // Giữ điểm dưới con trỏ cố định khi zoom
    dragX = mouseX - (mouseX - dragX) * (newScale / scale);
    dragY = mouseY - (mouseY - dragY) * (newScale / scale);
    scale = newScale;

    if (scale === 1) { dragX = 0; dragY = 0; }
    applyTransform();
  }, { passive: false });

  // Double click để toggle zoom nhanh
  imgWrap.addEventListener('dblclick', (e) => {
    const rect = imgWrap.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const newScale = scale > 1 ? 1 : 2.5;

    if (newScale === 1) {
      dragX = 0; dragY = 0;
    } else {
      dragX = mouseX - (mouseX - dragX) * (newScale / scale);
      dragY = mouseY - (mouseY - dragY) * (newScale / scale);
    }
    scale = newScale;
    lightboxImg.style.transition = 'transform 0.25s ease';
    applyTransform();
    setTimeout(() => lightboxImg.style.transition = '', 250);
  });

  // Drag để pan
  imgWrap.addEventListener('mousedown', (e) => {
    if (scale <= 1) return;
    e.preventDefault();
    isDragging = true;
    startX = e.clientX - dragX;
    startY = e.clientY - dragY;
    applyTransform();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    dragX = e.clientX - startX;
    dragY = e.clientY - startY;
    applyTransform();
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    applyTransform();
  });
}

function updateLightbox() {
  const { src, caption } = screenshots[currentIndex];
  lightboxImg.src = src;
  lightboxImg.alt = caption;
  lightboxCap.textContent = caption;
  lightboxCtr.textContent = `${currentIndex + 1} / ${screenshots.length}`;
}

thumbs.forEach((thumb, i) => {
  thumb.addEventListener('click', () => setMainImage(i));
});

if (zoomBtn) {
  zoomBtn.addEventListener('click', () => openLightbox(currentIndex));
}

const mainWrap = document.getElementById('screenshotMain');
if (mainWrap) {
  mainWrap.addEventListener('click', (e) => {
    if (e.target !== zoomBtn && !zoomBtn.contains(e.target)) {
      openLightbox(currentIndex);
    }
  });
}

lightboxClose?.addEventListener('click', closeLightbox);
backdrop?.addEventListener('click', closeLightbox);

lightboxPrev?.addEventListener('click', () => {
  resetZoom();
  currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
  updateLightbox();
});

lightboxNext?.addEventListener('click', () => {
  resetZoom();
  currentIndex = (currentIndex + 1) % screenshots.length;
  updateLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')  { currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length; updateLightbox(); }
  if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % screenshots.length; updateLightbox(); }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
