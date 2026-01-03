// src/components/footer.js

// Замість статичного імпорту, використовуємо fetch
let contentData = null;

async function loadContent() {
  if (!contentData) {
    const response = await fetch('/src/data/content.json');
    contentData = await response.json();
  }
  return contentData;
}

export function Footer() {
  // Тимчасові дані на час завантаження
  const footer = {
    newsletter: {
      title: 'Newsletter',
      description: 'Subscribe for updates and get 10% off your first order.',
      placeholder: 'E-Mail',
      buttonText: 'SUBSCRIBE'
    },
    customerCare: {
      title: 'Customer Care',
      links: [
        { text: 'Shipping & Returns', url: '#/shipping' },
        { text: 'Candle Care', url: '#/candle-care' },
        { text: 'Refund Policy', url: '#/refund-policy' },
        { text: 'Privacy Policy', url: '#/privacy-policy' },
        { text: 'Terms of Service', url: '#/terms-of-service' }
      ]
    },
    ourBrand: {
      title: 'Our Brand',
      links: [
        { text: 'About Us', url: '#/about' },
        { text: 'Press Enquiries', url: '#/press' },
        { text: 'Sustainability & Ethically', url: '#/sustainability' },
        { text: 'Promotions', url: '#/promotions' },
        { text: 'Wholesale Disclosure', url: '#/wholesale' },
        { text: 'Affiliate Program', url: '#/affiliate' },
        { text: 'Sustainability Efforts', url: '#/sustainability' }
      ]
    },
    contact: {
      title: 'Need Help? You Can Call Us',
      phone: '+XX (X) XXXXXXXXX',
      hours: [
        { days: 'Monday - Friday', time: '09:00 - 21:00' },
        { days: 'Saturday - Sunday', time: '10:00 - 18:00' }
      ]
    },
    copyright: '2025 AURA. All rights reserved.'
  };

  return `
    <footer class="footer">
      <div class="footer-content container">
        <!-- Newsletter -->
        <div class="footer-section emoji">
          <h3>${footer.newsletter.title}</h3>
          <p>${footer.newsletter.description}</p>
          <input 
            type="email" 
            class="newsletter-input" 
            placeholder="${footer.newsletter.placeholder}"
            id="newsletterEmail"
          >
          <button class="btn btn-light subscribe-btn" id="subscribeBtn">
            ${footer.newsletter.buttonText}
          </button>
           <!-- Contact -->
        <div class="smaylik">
          <h3>${footer.contact.title}</h3>
          <p>${footer.contact.phone}</p>
          ${footer.contact.hours.map(hour => `
            <p>
              <strong>${hour.days}</strong>
              ${hour.time}
            </p>
          `).join('')}
        </div>
        </div>

        <!-- Customer Care -->
        <div class="footer-section domik">
          <h3>${footer.customerCare.title}</h3>
          <ul class="footer-links">
            ${footer.customerCare.links.map(link => `
              <li><a href="${link.url}">${link.text}</a></li>
            `).join('')}
          </ul>
        </div>

        <!-- Our Brand -->
        <div class="footer-section">
          <h3>${footer.ourBrand.title}</h3>
          <ul class="footer-links">
            ${footer.ourBrand.links.map(link => `
              <li><a href="${link.url}">${link.text}</a></li>
            `).join('')}
          </ul>
        </div>

       
      </div>

      <div class="footer-bottom">
        <p>${footer.copyright}</p>
      </div>
    </footer>
  `;
}

// Ініціалізація Footer
export async function initFooter() {
  const subscribeBtn = document.getElementById('subscribeBtn');
  const emailInput = document.getElementById('newsletterEmail');

  // Завантажуємо дані
  const data = await loadContent();

  if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener('click', () => {
      const email = emailInput.value.trim();
      
      if (!email) {
        showSubscribeModal('error', 'Please enter your email');
        return;
      }

      if (!isValidEmail(email)) {
        showSubscribeModal('error', 'Please enter a valid email address');
        return;
      }

      // TODO: Відправити email на сервер
      console.log('Subscribe email:', email);
      showSubscribeModal('success', data.messages.subscribeSuccess);
      emailInput.value = '';
    });

    // Enter key support
    emailInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        subscribeBtn.click();
      }
    });
  }
}

// Валідація email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Функція для показу модального вікна
function showSubscribeModal(type, message) {
  // Видалити стару модалку якщо є
  const existingModal = document.getElementById('subscribeModal');
  if (existingModal) {
    existingModal.remove();
  }

  // Створити нову модалку
  const modal = document.createElement('div');
  modal.id = 'subscribeModal';
  modal.className = 'subscribe-modal';
  modal.innerHTML = `
    <div class="subscribe-modal-overlay"></div>
    <div class="subscribe-modal-content ${type === 'success' ? 'subscribe-modal-success' : 'subscribe-modal-error'}">
      <div class="subscribe-modal-icon">
        ${type === 'success' ? '✓' : '✕'}
      </div>
      <h3 class="subscribe-modal-title">${type === 'success' ? 'Success!' : 'Error'}</h3>
      <p class="subscribe-modal-message">${message}</p>
      <button class="subscribe-modal-btn" onclick="document.getElementById('subscribeModal').remove()">
        OK
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  // Автоматично закрити через 3 секунди для success
  if (type === 'success') {
    setTimeout(() => {
      if (document.getElementById('subscribeModal')) {
        modal.remove();
      }
    }, 3000);
  }

  // Закрити при кліку на overlay
  const overlay = modal.querySelector('.subscribe-modal-overlay');
  overlay.addEventListener('click', () => {
    modal.remove();
  });

  // Закрити на ESC
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', handleEsc);
    }
  };
  document.addEventListener('keydown', handleEsc);
}