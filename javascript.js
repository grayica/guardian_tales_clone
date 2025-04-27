// Menu toggle untuk mobile (jika mau dikembangkan)
document.getElementById('menu-toggle').addEventListener('click', function() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('active');
});

// Animasi karakter muncul
window.addEventListener('scroll', function() {
  const img = document.getElementById('character-img');
  const rect = img.getBoundingClientRect();
  if (rect.top <= window.innerHeight) {
    img.style.opacity = 1;
    img.style.transform = 'translateY(0)';
  }
});

console.log('Ini JS untuk index')