// src/router.js
import { About } from './pages/about.js';
import { Home } from './pages/home.js';
import { Catalog, initCatalogSort, initLoadMore } from './pages/catalog.js';
import { ProductDetail, initProductDetail } from './pages/productDetail.js';
import { Blog } from './pages/blog.js';
import { BlogPost } from './pages/blogPost.js';
import { Header, initHeader } from './components/header.js';
import { Footer, initFooter } from './components/footer.js';
import { initTestimonialsSlider } from './components/testimonialsSlider.js';
import { Contacts, initContactsForm } from './pages/contacts.js';
import { Cart, initCart } from './pages/cart.js';
import { updateCartBadge } from './utils/cart.js';
import { initAddToCart } from './pages/catalog.js';
import { initHomeAddToCart } from './pages/home.js';
import { Profile, initProfile } from './pages/profile.js';
import { Login, Signup, initAuth, isLoggedIn } from './pages/auth.js';
import { Checkout, initCheckout } from './pages/checkout.js';
import { Search, initSearch } from './pages/search.js';
import { ShippingPage, initShippingPage } from './pages/shipping.js';
import { CandleCarePage, initCandleCarePage } from './pages/candleCare.js';
import { RefundPolicyPage, initRefundPolicyPage } from './pages/refundPolicy.js';
import { PrivacyPolicyPage, initPrivacyPolicyPage } from './pages/privacyPolicy.js';
import { TermsOfServicePage, initTermsOfServicePage } from './pages/termsOfService.js';
import { PressPage, initPressPage } from './pages/press.js';
import { SustainabilityPage, initSustainabilityPage } from './pages/sustainability.js';
import { PromotionsPage, initPromotionsPage } from './pages/promotions.js';
import { WholesalePage, initWholesalePage } from './pages/wholesale.js';
import { AffiliatePage, initAffiliatePage } from './pages/affiliate.js';

// Маршрути додатку
const routes = {
  '/': Home,
  '/catalog/:category': Catalog,
  '/product/:id': ProductDetail,
  '/blog': Blog,
  '/blog/:id': BlogPost,
  '/about': About,
  '/contact': Contacts,
  '/cart': Cart,
  '/login': Login,
  '/signup': Signup,
  '/profile': Profile,
  '/profile/:section': Profile,
  '/checkout': Checkout,
  '/checkout/step/:step': Checkout,
  '/search/:query': Search,
  '/shipping': ShippingPage,
  '/candle-care': CandleCarePage,
  '/refund-policy': RefundPolicyPage,
  '/privacy-policy': PrivacyPolicyPage,
  '/terms-of-service': TermsOfServicePage,
  '/press': PressPage,
  '/sustainability': SustainabilityPage,
  '/promotions': PromotionsPage,
  '/wholesale': WholesalePage,
  '/affiliate': AffiliatePage
};

// Парсинг URL з параметрами
function parseRoute(hash) {
  const path = hash.replace('#', '') || '/';

  // Перевіряємо кожен маршрут
  for (const [route, handler] of Object.entries(routes)) {
    const routeParts = route.split('/');
    const pathParts = path.split('/');

    if (routeParts.length !== pathParts.length) continue;

    const params = {};
    let match = true;

    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i].startsWith(':')) {
        // Це параметр (наприклад :category)
        const paramName = routeParts[i].slice(1);
        params[paramName] = pathParts[i];
      } else if (routeParts[i] !== pathParts[i]) {
        match = false;
        break;
      }
    }

    if (match) {
      return { handler, params };
    }
  }

  return null;
}

// Встановлюємо header стиль залежно від сторінки
const header = document.querySelector('.header');
if (header) {
  if (hash === '' || hash === '#' || hash === '#/') {
    // На головній - прозорий (бо є hero з фоном)
    header.classList.add('header-transparent');
    header.classList.remove('header-scrolled');
  } else {
    // На інших сторінках - відразу коричневий (бо білий фон)
    header.classList.remove('header-transparent');
    header.classList.add('header-scrolled');
  }
}
// Рендер сторінки
export async function renderPage() {
  const app = document.getElementById('app');
  if (!app) return;

  const hash = window.location.hash;
  const route = parseRoute(hash);

  if (hash.includes('/profile') && !isLoggedIn()) {
    window.location.hash = '#/login';
    return;
  }

  let content;
  if (route) {
    // Викликаємо обробник з параметрами
    content = await route.handler(route.params);
  } else {
    // 404 - сторінка не знайдена
    content = '<div class="container" style="padding: 150px 0;"><h2>Page not found</h2></div>';
  }

  // Рендеримо структуру
  app.innerHTML = `
    ${Header()}
    ${content}
    ${Footer()}
  `;

  // Ініціалізація компонентів
  initHeader();
  initFooter();
  // Ініціалізація testimonials каруселі (тільки на головній)
  if (hash === '' || hash === '#' || hash === '#/') {
    setTimeout(() => {
      initTestimonialsSlider();
      initHomeAddToCart();
    }, 100);
  }

  if (hash.includes('/catalog/')) {
    setTimeout(() => {
      initCatalogSort();
      initLoadMore();
      initAddToCart();
    }, 100);
  }

  // Ініціалізація product detail
  if (hash.includes('/product/')) {
    setTimeout(() => {
      initProductDetail();
    }, 100);
  }
  if (hash.includes('/contact')) {
    setTimeout(() => {
      initContactsForm();
    }, 100);
  }
  if (hash.includes('/cart')) {
    setTimeout(() => {
      initCart();
    }, 100);
  }
  if (hash.includes('/checkout')) {
    setTimeout(() => {
      initCheckout();
    }, 100);
  }
  if (hash.includes('/profile')) {
    setTimeout(() => {
      initProfile();
    }, 100);
  }
  if (hash.includes('/login') || hash.includes('/signup')) {
    setTimeout(() => {
      initAuth();
    }, 100);
  }
  if (hash.includes('/search/')) {
    setTimeout(() => {
      initSearch();
    }, 100);
  }
  if (hash.includes('/shipping')) {
    setTimeout(() => {
      initShippingPage();
    }, 100);  
  }
  if (hash.includes('/candle-care')) {
    setTimeout(() => {
      initCandleCarePage();
    }, 100);  
  }
  if (hash.includes('/refund-policy')) {
    setTimeout(() => {
      initRefundPolicyPage();
    }, 100);
  }
  if (hash.includes('/privacy-policy')) {
    setTimeout(() => {
      initPrivacyPolicyPage();
    }, 100);
  }
  if (hash.includes('/terms-of-service')) {
    setTimeout(() => {
      initTermsOfServicePage();
    }, 100);  
  }
  // Press page
if (hash === '/press' || hash === '/#/press') {
  setTimeout(() => {
    initPressPage();
  }, 100);
}

// Sustainability page
if (hash === '/sustainability'||  hash === '/#/sustainability') {
  setTimeout(() => {
    initSustainabilityPage();
  }, 100);
}

// Promotions page
if (hash === '/promotions' || hash === '/#/promotions') {
  setTimeout(() => {
    initPromotionsPage();
  }, 100);
}

// Wholesale page
if (hash === '/wholesale' || hash === '/#/wholesale') {
  setTimeout(() => {
    initWholesalePage();
  }, 100);
}

// Affiliate page
if (hash === '/affiliate' || hash === '/#/affiliate') {
  setTimeout(() => {
    initAffiliatePage();
  }, 100);
}
  

  updateCartBadge();
  // Прокрутка вгору при зміні сторінки
  window.scrollTo(0, 0);

  // Встановлюємо header стиль залежно від сторінки
  setTimeout(() => {
    const header = document.querySelector('.header');
    const currentHash = window.location.hash; // ← Беремо актуальний hash

    if (header) {
      if (currentHash === '' || currentHash === '#' || currentHash === '#/') {
        // На головній - прозорий
        header.classList.add('header-transparent');
        header.classList.remove('header-scrolled');
      } else {
        // На інших сторінках - коричневий
        header.classList.remove('header-transparent');
        header.classList.add('header-scrolled');
      }
    }
  }, 0);
}

// Ініціалізація роутера
export function initRouter() {
  // Обробка зміни hash
  window.addEventListener('hashchange', renderPage);

  // Обробка кліків по посиланнях
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');
      window.location.hash = href;
    }
  });

  // Початковий рендер
  renderPage();
}