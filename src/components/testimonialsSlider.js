// src/components/testimonialsSlider.js

export function TestimonialsSlider(testimonials) {
  return `
    <div class="testimonials-slider">
      <div class="testimonials-track">
        ${testimonials.map((testimonial, index) => `
          <div class="testimonial-slide" data-index="${index}">
            <div class="testimonial-image">
              <img src="${testimonial.image || testimonial.avatar}" alt="${testimonial.name}">
            </div>
            <div class="testimonial-content">
              <h3 class="testimonial-name">${testimonial.name}</h3>
              <p class="testimonial-text">${testimonial.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
      
      <!-- Navigation dots -->
      <div class="testimonials-dots">
        ${testimonials.map((_, index) => `
          <button class="testimonial-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
        `).join('')}
      </div>
    </div>
  `;
}

export function initTestimonialsSlider() {
  const slider = document.querySelector('.testimonials-slider');
  if (!slider) return;

  const track = slider.querySelector('.testimonials-track');
  const slides = slider.querySelectorAll('.testimonial-slide');
  const dots = slider.querySelectorAll('.testimonial-dot');
  
  let currentIndex = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  let startTranslate = 0;

  // Update slider position
  function updateSlider(index, animate = true) {
    currentIndex = index;
    const offset = -index * 100;
    
    if (animate) {
      track.style.transition = 'transform 0.5s ease-out';
    } else {
      track.style.transition = 'none';
    }
    
    track.style.transform = `translateX(${offset}%)`;
    
    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  // Dot click handlers
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index);
      updateSlider(index);
    });
  });

  // Touch/Mouse drag handlers
  function handleStart(e) {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    startTranslate = -currentIndex * track.offsetWidth;
    track.style.transition = 'none';
  }

  function handleMove(e) {
    if (!isDragging) return;
    
    e.preventDefault();
    currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const diff = currentX - startX;
    const newTranslate = startTranslate + diff;
    
    track.style.transform = `translateX(${newTranslate}px)`;
  }

  function handleEnd() {
    if (!isDragging) return;
    
    isDragging = false;
    const diff = currentX - startX;
    const threshold = track.offsetWidth * 0.2; // 20% of width
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex > 0) {
        // Swipe right - go to previous
        updateSlider(currentIndex - 1);
      } else if (diff < 0 && currentIndex < slides.length - 1) {
        // Swipe left - go to next
        updateSlider(currentIndex + 1);
      } else {
        // Return to current position
        updateSlider(currentIndex);
      }
    } else {
      // Return to current position
      updateSlider(currentIndex);
    }
  }

  // Mouse events
  track.addEventListener('mousedown', handleStart);
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('mouseup', handleEnd);

  // Touch events
  track.addEventListener('touchstart', handleStart, { passive: true });
  track.addEventListener('touchmove', handleMove, { passive: false });
  track.addEventListener('touchend', handleEnd);

  // Prevent text selection during drag
  track.addEventListener('dragstart', (e) => e.preventDefault());

  // Initial position
  updateSlider(0, false);
}