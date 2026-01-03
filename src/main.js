// src/main.js
import './styles/variables.css';
import './styles/productDetail.css';
import './styles/main.css';
import './styles/components.css';
import './styles/catalog.css';
import './styles/blog.css';
import './styles/testimonials.css';
import { initRouter } from './router.js';
import { updateCartBadge} from './utils/cart.js';
import './styles/about.css';
import './styles/contacts.css';
import './styles/modal.css';
import './styles/cart.css';
import './styles/profile.css';
import './styles/auth.css';
import './styles/checkout.css';
import './styles/search.css';
import './styles/infoPages.css';
import './styles/brandPages.css';

// Ініціалізація додатку
document.addEventListener('DOMContentLoaded', () => {
  console.log('App starting...');
  
  // Запуск роутера
  initRouter();

 updateCartBadge();
  
  console.log('App initialized');
});