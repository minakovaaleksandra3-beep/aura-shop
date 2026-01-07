

let contentData = null;

async function loadContent() {
  if (!contentData) {
    const response = await fetch(`${import.meta.env.BASE_URL}data/content.json`);
    contentData = await response.json();
  }
  return contentData;
}

export function Header() {
  const nav = {
    home: 'Home',
    shop: 'Shop',
    about: 'About',
    contact: 'Contact',
    cart: 'Cart',
    account: 'Account'
  };
  
  return `
    <header class="header">
      <nav class="header-nav">
        <a href="#/" class="nav-link">${nav.home}</a>
        <a href="#/catalog/all" class="nav-link">${nav.shop}</a>
        <a href="#/about" class="nav-link">${nav.about}</a>
        <a href="#/contact" class="nav-link">${nav.contact}</a>
      </nav>
      
      <div class="header-icons">
      <!-- Inline Search Form -->
        <div class="header-search-inline" id="headerSearchInline">
          <form class="header-search-form-inline" id="searchFormInline">
            <input 
              type="text" 
              class="header-search-input-inline" 
              id="searchInputInline" 
              placeholder="Search products..." 
              autocomplete="off"
            >
            <button type="button" class="header-search-close-inline" id="searchCloseInline">×</button>
          </form>
        </div>
        <button class="icon-btn" id="searchBtn" aria-label="Search">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
        
        <button class="icon-btn" id="cartBtn" aria-label="${nav.cart}">
          <a href="#/cart" class="header-icon header-cart" aria-label="Shopping Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white">
              <path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 6H21" stroke-width="2"/>
              <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          <span class="header-cart-badge">0</span> <!-- ← ДОДАЙ ЦЕ -->
          </a>
        </button>
        
        <button class="icon-btn" id="userBtn" aria-label="${nav.account}">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>
      </div>
<button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    </header>
  `;
}

export function initHeader() {
  const searchBtn = document.getElementById('searchBtn');
  const cartBtn = document.getElementById('cartBtn');
  const userBtn = document.getElementById('userBtn');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const header = document.querySelector('.header');
  const searchCloseInline = document.getElementById('searchCloseInline');
  const headerSearchInline = document.getElementById('headerSearchInline');
  const searchFormInline = document.getElementById('searchFormInline');
  const searchInputInline = document.getElementById('searchInputInline');

  // Search button - toggle search bar
  if (searchBtn && headerSearchInline && searchInputInline) {
    searchBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = headerSearchInline.classList.contains('active');
      
      if (isActive) {
        // If already open, submit search if there's a query
        const query = searchInputInline.value.trim();
        if (query) {
          headerSearchInline.classList.remove('active');
          window.location.hash = `#/search/${encodeURIComponent(query)}`;
          searchInputInline.value = '';
        }
      } else {
        // Open search bar
        headerSearchInline.classList.add('active');
        setTimeout(() => searchInputInline.focus(), 100);
      }
    });
  }

  // Close search bar
  if (searchCloseInline && headerSearchInline) {
    searchCloseInline.addEventListener('click', (e) => {
      e.stopPropagation();
      headerSearchInline.classList.remove('active');
      searchInputInline.value = '';
    });
  }

  // Search form submit
  if (searchFormInline && searchInputInline) {
    searchFormInline.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const query = searchInputInline.value.trim();
      
      if (query) {
        // Close search bar
        headerSearchInline.classList.remove('active');
        
        // Navigate to search results
        window.location.hash = `#/search/${encodeURIComponent(query)}`;
        
        // Clear input
        searchInputInline.value = '';
      }
    });
  }

  // Close search on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && headerSearchInline && headerSearchInline.classList.contains('active')) {
      headerSearchInline.classList.remove('active');
      searchInputInline.value = '';
    }
  });

  // Close search when clicking outside
  document.addEventListener('click', (e) => {
    if (headerSearchInline && headerSearchInline.classList.contains('active')) {
      if (!headerSearchInline.contains(e.target) && !searchBtn.contains(e.target)) {
        headerSearchInline.classList.remove('active');
        searchInputInline.value = '';
      }
    }
  });

  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      console.log('Cart clicked');
      window.location.hash = '#/cart';
    });
  }

  if (userBtn) {
    userBtn.addEventListener('click', () => {
      console.log('User clicked');
      // Перевірити чи залогінений
    import('../pages/auth.js').then(({ isLoggedIn }) => {
      if (isLoggedIn()) {
        window.location.hash = '#/profile';
      } else {
        window.location.hash = '#/login';
      }
    });
    });
  }

  if (mobileMenuBtn && header) {
    mobileMenuBtn.addEventListener('click', () => {
      header.classList.toggle('mobile-menu-open');
    });
  }

// Scroll effect - ТІЛЬКИ для головної сторінки
window.addEventListener('scroll', () => {
  const currentHash = window.location.hash;
  
  // Скрол працює ТІЛЬКИ на головній
  if (currentHash === '' || currentHash === '#' || currentHash === '#/') {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      if (header) {
        header.classList.add('header-scrolled');
        header.classList.remove('header-transparent');
      }
    } else {
      if (header) {
        header.classList.remove('header-scrolled');
        header.classList.add('header-transparent');
      }
    }
  }
  // На інших сторінках скрол нічого не робить
});

// Встановлюємо початковий стиль залежно від сторінки
const currentHash = window.location.hash;
if (currentHash === '' || currentHash === '#' || currentHash === '#/') {
  // На головній - прозорий (скрол змінюватиме)
  if (header) {
    header.classList.add('header-transparent');
    header.classList.remove('header-scrolled');
  }
} else {
  // На інших сторінках - завжди коричневий (скрол НЕ змінюватиме)
  if (header) {
    header.classList.remove('header-transparent');
    header.classList.add('header-scrolled');
  }
}
}

export function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    const total = getTotalItems();
    cartCount.textContent = total;
    cartCount.style.display = total > 0 ? 'flex' : 'none';
  }
}