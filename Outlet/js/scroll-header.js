// Slider automático
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  // Cambia de slide cada 5 segundos
  setInterval(nextSlide, 5000);
  
  // Header scroll (mantener tu código actual)
  const header = document.querySelector('header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.style.transform = 'translateY(-100%)';
    } 
    else if (currentScroll < lastScroll) {
      header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
  });
});