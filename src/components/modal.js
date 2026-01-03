// src/components/modal.js

export function showModal(title, message, type = 'success') {
  // Видаляємо попереднє модальне вікно, якщо є
  const existingModal = document.querySelector('.modal-overlay');
  if (existingModal) {
    existingModal.remove();
  }

  // Іконка залежно від типу
  const icons = {
    success: `
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="#4CAF50" stroke-width="3"/>
        <path d="M17 30L26 39L43 22" stroke="#4CAF50" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    error: `
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="#f44336" stroke-width="3"/>
        <path d="M20 20L40 40M40 20L20 40" stroke="#f44336" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,
    info: `
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="#2196F3" stroke-width="3"/>
        <path d="M30 20V32M30 40V42" stroke="#2196F3" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `
  };

  // HTML модального вікна
  const modalHTML = `
    <div class="modal-overlay">
      <div class="modal-container">
        <div class="modal-icon ${type}">
          ${icons[type]}
        </div>
        <h2 class="modal-title">${title}</h2>
        <p class="modal-message">${message}</p>
        <button class="modal-button" id="modalCloseBtn">OK</button>
      </div>
    </div>
  `;

  // Додаємо в body
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Отримуємо елементи
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  // Анімація появи
  setTimeout(() => {
    modalOverlay.classList.add('modal-show');
  }, 10);

  // Закриття модального вікна
  const closeModal = () => {
    modalOverlay.classList.remove('modal-show');
    setTimeout(() => {
      modalOverlay.remove();
    }, 300);
  };

  // Обробники подій
  modalCloseBtn.addEventListener('click', closeModal);
  
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Закриття на ESC
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', handleEsc);
    }
  };
  document.addEventListener('keydown', handleEsc);
}