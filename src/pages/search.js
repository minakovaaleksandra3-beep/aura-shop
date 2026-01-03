// src/pages/search.js
import { getAllProducts } from '../data/product.js';

export async function Search(params) {
  const query = params.query || '';
  
  if (!query) {
    return `
      <main class="search-main">
        <div class="container search-container">
          <div class="search-empty">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="35" cy="35" r="25" stroke="#ccc" stroke-width="3"/>
              <path d="M55 55L70 70" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <h2>Search for products</h2>
            <p>Enter a product name or category in the search bar</p>
          </div>
        </div>
      </main>
    `;
  }
  
  // Пошук по продуктах
  const allProducts = getAllProducts();
  const searchQuery = query.toLowerCase().trim();
  
  const results = allProducts.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(searchQuery);
    const categoryMatch = product.category.toLowerCase().includes(searchQuery);
    const categoryLabelMatch = product.categoryLabel.toLowerCase().includes(searchQuery);
    
    return nameMatch || categoryMatch || categoryLabelMatch;
  });
  
  // Якщо немає результатів
  if (results.length === 0) {
    return `
      <main class="search-main">
        <div class="container search-container">
          <div class="search-header">
            <h1 class="search-title">Search results for "${query}"</h1>
            <p class="search-count">0 products found</p>
          </div>
          
          <div class="search-no-results">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="45" cy="45" r="30" stroke="#ccc" stroke-width="3"/>
              <path d="M65 65L85 85" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
              <path d="M35 35L55 55M55 35L35 55" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <h2>No results found</h2>
            <p>We couldn't find any products matching "<strong>${query}</strong>"</p>
            <div class="search-suggestions">
              <p class="search-suggestions-title">Try:</p>
              <ul>
                <li>Checking your spelling</li>
                <li>Using different keywords</li>
                <li>Searching for "candles", "diffusers", or "gift sets"</li>
              </ul>
            </div>
            <a href="#/catalog/all" class="btn-primary">Browse all products</a>
          </div>
        </div>
      </main>
    `;
  }
  
  // Якщо знайдено результати
  return `
    <main class="search-main">
      <div class="container search-container">
        <div class="search-header">
          <h1 class="search-title">Search results for "${query}"</h1>
          <p class="search-count">${results.length} product${results.length !== 1 ? 's' : ''} found</p>
        </div>
        
        <div class="search-results-grid">
          ${results.map(product => createSearchResultCard(product)).join('')}
        </div>
      </div>
    </main>
  `;
}

function createSearchResultCard(product) {
  return `
    <div class="search-result-card">
      <a href="#/product/${product.id}" class="search-result-link">
        <div class="search-result-image" style="background-image: url('${product.image}');"></div>
      </a>
      
      <div class="search-result-info">
        <a href="#/product/${product.id}" class="search-result-name-link">
          <h3 class="search-result-name">${product.name}</h3>
        </a>
        <p class="search-result-category">${product.categoryLabel}</p>
        <p class="search-result-price">$${product.price.toFixed(2)}</p>
        
        <div class="search-result-buttons">
          <button 
            class="search-btn search-btn-buy buy-now-btn"
            data-product-id="${product.id}"
          >
            Buy now
          </button>
          <button 
            class="search-btn search-btn-cart add-to-cart-btn"
            data-product-id="${product.id}"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  `;
}

export function initSearch() {
  // Add to Cart buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const productId = parseInt(e.currentTarget.dataset.productId);
      
      import('../data/product.js').then(({ getProductById }) => {
        const product = getProductById(productId);
        
        if (product) {
          import('../utils/cart.js').then(({ addToCart }) => {
            addToCart(product);
            import('../components/modal.js').then(({ showModal }) => {
              showModal('Added to Cart', `${product.name} has been added to your cart`, 'success');
            });
          });
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
          import('../utils/cart.js').then(({ addToCart }) => {
            addToCart(product);
            window.location.hash = '#/checkout/step/1';
          });
        }
      });
    });
  });
}