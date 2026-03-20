// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

reveals.forEach(el => revealObserver.observe(el));

// ===== NAV SCROLL SHADOW =====
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.boxShadow =
    window.scrollY > 50 ? '0 4px 30px rgba(0,53,148,0.08)' : 'none';
});
