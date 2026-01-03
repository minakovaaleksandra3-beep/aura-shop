// src/pages/catalog.js
import { getProductsByCategory, getCategoryBySlug } from '../data/product.js';
import { addToCart } from '../utils/cart.js';
import { showModal } from '../components/modal.js';

let currentProducts = []; // Зберігаємо продукти
let displayedCount = 8; // Скільки показуємо спочатку
const loadMoreCount = 4; // Скільки додавати при кліку

export async function Catalog(params) {
  const categorySlug = params.category;
  const category = getCategoryBySlug(categorySlug);
  
  if (!category) {
    return `
      <main class="catalog-main">
        <div class="container catalog-not-found">
          <h2>Category not found</h2>
          <a href="#/" class="btn btn-primary">Back to home</a>
        </div>
      </main>
    `;
  }
  
  currentProducts = getProductsByCategory(categorySlug);
  displayedCount = 8;
  
  return `
    <main class="catalog-main">
      <!-- Breadcrumbs -->
      <div class="container catalog-breadcrumbs-container">
        <div class="catalog-breadcrumbs">
          <a href="#/" class="breadcrumb-link">Home</a>
          <span class="breadcrumb-separator"> / </span>
          <a href="#/catalog/all" class="breadcrumb-link">Shop</a>
          <span class="breadcrumb-separator"> / </span>
          <span class="breadcrumb-current">${category.name}</span>
        </div>
      </div>

      <!-- Page Header -->
      <div class="container catalog-header">
        <h1 class="catalog-title">${category.name}</h1>
      </div>
      
      <!-- Sort Section -->
      <div class="container catalog-sort-container">
        <span class="sort-label">Sort by</span>
        <div class="sort-select-wrapper">
          <select class="sort-select" id="sortSelect">
            <option value="default">Highlights</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
          <svg class="sort-arrow" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4L6 8L10 4" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <!-- Products Grid -->
      <section class="container catalog-products-section">
        ${currentProducts.length > 0 ? `
          <div class="catalog-products-grid" id="productsGrid">
            ${currentProducts.slice(0, displayedCount).map(product => createProductCard(product)).join('')}
          </div>
          
          <!-- Load More Button -->
            <div class="catalog-load-more" id="loadMoreContainer">
                  ${currentProducts.length > displayedCount ? `
                <button class="btn-load-more" id="loadMoreBtn">
                  LOAD MORE
                </button>
              ` : ''}
            </div>
          
       `  : `
          <div class="catalog-empty">
            <p>No products found</p>
            <a href="#/" class="btn btn-primary">Continue shopping</a>
          </div>
        `}
      </section>
    </main>
  `;
}

function createProductCard(product) {
  return `
    <div class="catalog-product-card">
      <!-- Product Image - клікабельне -->
      <a href="#/product/${product.id}" class="catalog-product-link">
        <div class="catalog-product-image" style="background-image: url('${product.image}');"></div>
      </a>
      
      <!-- Product Info -->
      <div class="catalog-product-info">
        <a href="#/product/${product.id}" class="catalog-product-name-link">
          <h3 class="catalog-product-name">${product.name}</h3>
        </a>
        <p class="catalog-product-category">${product.categoryLabel}</p>
        <p class="catalog-product-price">$${product.price.toFixed(2)}</p>
        
        <!-- Buttons -->
        <div class="catalog-product-buttons">
          <button 
            class="catalog-btn catalog-btn-buy buy-now-btn"
            data-product-id="${product.id}">
              Buy now
          </button>
          <button 
            class="catalog-btn catalog-btn-cart add-to-cart-btn"
            data-product-id="${product.id}"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  `;
}
  // Ініціалізація сортування
export function initCatalogSort() {
  const sortSelect = document.getElementById('sortSelect');
  
  if (!sortSelect) return;
  
  sortSelect.addEventListener('change', (e) => {
    const sortType = e.target.value;
    let sortedProducts = [...currentProducts];
    
    // Сортуємо масив продуктів
    switch(sortType) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      
      case 'newest':
        sortedProducts.sort((a, b) => b.id - a.id);
        break;
      
      case 'default':
      default:
        sortedProducts.sort((a, b) => a.id - b.id);
        break;
    }
    
   
    currentProducts = sortedProducts;
    displayedCount = 12; 
    
    
    updateProductsDisplay();

    initAddToCart();
  });
}

export function initAddToCart() {
  // Add to Cart buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const productId = parseInt(e.currentTarget.dataset.productId);
      
      import('../data/product.js').then(({ getProductById }) => {
        const product = getProductById(productId);
        
        if (product) {
          addToCart(product);
          showModal('Added to Cart', '${product.name} has been added to your cart', 'success');
        }
      });
    });
  });
  
  // Buy Now buttons
  document.querySelectorAll('.buy-now-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const productId = parseInt(e.currentTarget.dataset.productId);
      
      import('../data/product.js').then(({ getProductById }) => {
        const product = getProductById(productId);
        
        if (product) {
          addToCart(product);
          // Redirect to checkout
          window.location.hash = '#/checkout/step/1';
        }
      });
    });
  });
}


function updateProductsDisplay() {
  const productsGrid = document.getElementById('productsGrid');
  const loadMoreContainer = document.getElementById('loadMoreContainer');
  
  if (!productsGrid || !loadMoreContainer) return;
  
  // Оновлюємо товари
  productsGrid.innerHTML = currentProducts
    .slice(0, displayedCount)
    .map(product => createProductCard(product))
    .join('');
  
  // Оновлюємо кнопку
  if (currentProducts.length > displayedCount) {
    loadMoreContainer.innerHTML = `
      <button class="btn-load-more" id="loadMoreBtn">
        LOAD MORE
      </button>
    `;
    attachLoadMoreHandler();
  } else {
    loadMoreContainer.innerHTML = '';
  }
}
// Прикріплення обробника до кнопки
function attachLoadMoreHandler() {
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  
  if (!loadMoreBtn) return;
  
  loadMoreBtn.addEventListener('click', () => {
    displayedCount += loadMoreCount;
    updateProductsDisplay();
    initAddToCart();
  });
}


// Ініціалізація кнопки Load More
export function initLoadMore() {
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const productsGrid = document.getElementById('productsGrid');
  const loadMoreContainer = document.getElementById('loadMoreContainer');

  
  
  if (!loadMoreBtn || !productsGrid) return;
  
  loadMoreBtn.addEventListener('click', () => {
    // Збільшуємо кількість відображуваних товарів
    displayedCount += loadMoreCount;
    
    // Оновлюємо сітку
    const displayedProducts = currentProducts.slice(0, displayedCount);
    productsGrid.innerHTML = displayedProducts.map(product => createProductCard(product)).join('');
    
    // Ховаємо кнопку якщо всі товари показані
    if (displayedCount >= currentProducts.length) {
      loadMoreContainer.innerHTML = '';
    }
  });
}