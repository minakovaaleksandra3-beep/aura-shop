// src/pages/contacts.js
import { showModal } from '../components/modal.js';
export async function Contacts() {
  return `
    <main class="contacts-main">
    <!-- Hero Section -->
    <!-- Breadcrumbs -->
    <div class="container contacts-breadcrumbs-container">
      <div class="contacts-breadcrumbs">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span class="breadcrumb-separator"> / </span>
        <span class="breadcrumb-current">Contact</span>
      </div>
    </div>
      <section class="contacts-hero">
        <div class="container"> <!-- ← Використовуємо стандартний container -->
          <div class="contacts-hero-content">
            <h1 class="contacts-hero-title">Get in Touch</h1>
            <p class="contacts-hero-subtitle">We'd love to hear from you</p>
          </div>
        </div>
      </section>
      <!-- Contact Info & Form Section -->
      <section class="container contacts-content-section">
        <div class="contacts-content-grid">
          
          <!-- Contact Information -->
          <div class="contacts-info">
            <h2 class="contacts-info-title">Contact Information</h2>
            
            <div class="contacts-info-block">
              <h3 class="contacts-info-label">Email</h3>
              <a href="mailto:hello@aura.com" class="contacts-info-link">hello@aura.com</a>
            </div>
            
            <div class="contacts-info-block">
              <h3 class="contacts-info-label">Phone</h3>
              <a href="tel:+380XXXXXXXXX" class="contacts-info-link">+380 (XX) XXX-XX-XX</a>
            </div>
            
            <div class="contacts-info-block">
              <h3 class="contacts-info-label">Working Hours</h3>
              <p class="contacts-info-text">Monday - Friday: 09:00 - 21:00</p>
              <p class="contacts-info-text">Saturday - Sunday: 10:00 - 18:00</p>
            </div>
            
            <div class="contacts-info-block">
              <h3 class="contacts-info-label">Address</h3>
              <p class="contacts-info-text">Rivne, Ukraine</p>
            </div>
            
            <div class="contacts-social">
              <h3 class="contacts-info-label">Follow Us</h3>
              <div class="contacts-social-links">
                <a href="#" class="contacts-social-link" aria-label="Instagram">
                  <img src="../../public/icons/instagram.svg" style= width="24" height="24" viewBox="0 0 24 24" fill="none" style="filter: brightness(0) saturate(100%) invert(60%);">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                    <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15Z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" class="contacts-social-link" aria-label="Facebook">
                  <img src="../../public/icons/facebook.svg" style= width="24" height="24" viewBox="0 0 24 24" fill="none" style="filter: brightness(0) saturate(100%) invert(60%);">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" class="contacts-social-link" aria-label="Pinterest">
                <img src="../../public/icons/pinterest.svg" style= width="24" height="24" viewBox="0 0 24 24" fill="none" style="filter: brightness(0) saturate(100%) invert(60%);">
                </a>
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 16.03 4.43 19.48 7.96 20.87C7.91 20.22 7.87 19.28 8.02 18.57L8.83 15.14C8.83 15.14 8.61 14.7 8.61 14.03C8.61 12.97 9.26 12.17 10.06 12.17C10.74 12.17 11.07 12.67 11.07 13.26C11.07 13.92 10.64 14.93 10.42 15.86C10.24 16.63 10.8 17.26 11.56 17.26C12.93 17.26 13.99 15.8 13.99 13.66C13.99 11.77 12.64 10.47 11.95 10.47C10.95 10.47 10.31 11.24 10.31 12.13C10.31 12.82 10.59 13.36 10.93 13.71C11.01 13.8 11.02 13.88 11 13.99L10.8 14.78C10.77 14.93 10.68 14.97 10.53 14.9C9.56 14.45 8.97 13.05 8.97 12.1C8.97 10.19 10.39 8.47 12.12 8.47C13.52 8.47 14.63 9.49 14.63 11.72C14.63 14.05 13.38 15.93 11.55 15.93C10.74 15.93 9.98 15.51 9.72 15C9.72 15 9.32 16.61 9.23 16.96C9.05 17.61 8.58 18.43 8.27 18.95C9.12 19.2 10.03 19.33 10.97 19.33C16.49 19.33 21 14.82 21 9.3C21 3.78 16.49 2 10.97 2H12Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contacts-form-container">
            <h2 class="contacts-form-title">Send us a Message</h2>
            <form class="contacts-form" id="contactForm">
              
              <div class="contacts-form-row">
                <div class="contacts-form-group">
                  <label for="firstName" class="contacts-form-label">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    class="contacts-form-input" 
                    required
                  >
                </div>
                
                <div class="contacts-form-group">
                  <label for="lastName" class="contacts-form-label">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    class="contacts-form-input" 
                    required
                  >
                </div>
              </div>
              
              <div class="contacts-form-group">
                <label for="email" class="contacts-form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  class="contacts-form-input" 
                  required
                >
              </div>
              
              <div class="contacts-form-group">
                <label for="subject" class="contacts-form-label">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  class="contacts-form-input" 
                  required
                >
              </div>
              
              <div class="contacts-form-group">
                <label for="message" class="contacts-form-label">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  class="contacts-form-textarea" 
                  rows="6" 
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="contacts-form-submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
          
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="contacts-faq-section">
        <div class="container">
          <h2 class="contacts-faq-title">Frequently Asked Questions</h2>
          
          <div class="contacts-faq-grid">
            <div class="contacts-faq-item">
              <h3 class="contacts-faq-question">How long does shipping take?</h3>
              <p class="contacts-faq-answer">
                Standard shipping takes 3-5 business days within Ukraine. 
                Express shipping is available for next-day delivery.
              </p>
            </div>
            
            <div class="contacts-faq-item">
              <h3 class="contacts-faq-question">Do you offer custom fragrances?</h3>
              <p class="contacts-faq-answer">
                Yes! We offer custom fragrance consultations. 
                Contact us to discuss your unique scent vision.
              </p>
            </div>
            
            <div class="contacts-faq-item">
              <h3 class="contacts-faq-question">What is your return policy?</h3>
              <p class="contacts-faq-answer">
                We accept returns within 30 days of purchase. 
                Products must be unused and in original packaging.
              </p>
            </div>
            
            <div class="contacts-faq-item">
              <h3 class="contacts-faq-question">Are your products eco-friendly?</h3>
              <p class="contacts-faq-answer">
                Absolutely. We use natural, sustainable materials and 
                recyclable packaging for all our products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

// Ініціалізація форми контактів
export function initContactsForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Отримуємо дані форми
    const formData = new FormData(contactForm);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    
    console.log('Form submitted:', data);
    
    // Тут можна додати відправку на сервер
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    
  // Показуємо модальне вікно ← ЗАМІСТЬ alert
    showModal(
      'Thank You!',
      'Your message has been sent successfully. We will get back to you soon.',
      'success'
    );
    
    // Очищаємо форму
    contactForm.reset();
  });
}