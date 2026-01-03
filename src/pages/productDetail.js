// src/pages/productDetail.js
import { getProductById, products } from '../data/product.js';
import { addToCart } from '../utils/cart.js';
import { showModal } from '../components/modal.js';

let currentImageIndex = 0;
let currentProduct = null;

export async function ProductDetail(params) {
  const productId = parseInt(params.id);
  currentProduct = getProductById(productId);

  if (!currentProduct) {
    return `
      <main class="product-detail-main">
        <div class="container" style="padding: 150px 0; text-align: center;">
          <h2>Product not found</h2>
          <a href="#/catalog/all" class="btn btn-primary">Back to shop</a>
        </div>
      </main>
    `;
  }

  currentImageIndex = 0;
  const images = currentProduct.images || [currentProduct.image];
  const relatedProducts = getRelatedProducts(currentProduct);

  return `
    <main class="product-detail-main">
      <!-- Breadcrumbs -->
      <div class="container product-breadcrumbs-container">
        <div class="product-breadcrumbs">
          <a href="#/" class="breadcrumb-link">Home</a>
          <span class="breadcrumb-separator"> / </span>
          <a href="#/catalog/all" class="breadcrumb-link">Shop</a>
          <span class="breadcrumb-separator"> / </span>
          <span class="breadcrumb-current">${currentProduct.name}</span>
        </div>
      </div>

      <!-- Product Detail -->
      <section class="container product-detail-section">
        <div class="product-detail-grid">
         <!-- Gallery -->
          <div class="product-gallery">
            <div class="gallery-main" style="background-image: url('${images[0]}')">
              <button class="gallery-arrow gallery-arrow-left" id="galleryPrev">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>

              <button class="gallery-arrow gallery-arrow-right" id="galleryNext">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            
            <!-- Dots -->
            <div class="gallery-dots" id="galleryDots">
              ${images.map((_, index) => `
                <button class="gallery-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
              `).join('')}
            </div>
          </div>

          <!-- Product Info -->
          <div class="product-info">
            <h1 class="product-name">${currentProduct.name}</h1>
            <p class="product-category">${currentProduct.categoryLabel}</p>
            
            <div class="product-price-row">
              <span class="product-price">$${currentProduct.price.toFixed(2)}</span>
              <span class="product-volume">${currentProduct.volume || '220 ml'}</span>
            </div>
            
            <!-- Quantity -->
            <div class="product-quantity">
              <button class="quantity-btn" id="quantityMinus">−</button>
              <input type="number" class="quantity-input" id="quantityInput" value="1" min="1">
              <button class="quantity-btn" id="quantityPlus">+</button>
            </div>
            
            <!-- Buttons -->
            <div class="product-buttons">
              <button class="product-btn product-btn-cart add-to-cart-btn" data-product-id="${currentProduct.id}">
                Add to cart
              </button>
              <button class="product-btn product-btn-buy" id="buyNowBtn">
                Buy now
              </button>
            </div>
            
            <!-- Description -->
            <div class="product-description">
              <h3 class="description-title">Product description</h3>
              <p class="description-text">${currentProduct.fullDescription || currentProduct.description}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- See Also -->
      <section class="container product-related-section">
        <div class="related-header">
          <h2 class="related-title">See also</h2>
          <a href="#/catalog/${currentProduct.category}" class="related-link">
            Explore →
          </a>
        </div>
        
        <div class="related-products-grid">
          ${relatedProducts.map(product => createRelatedCard(product)).join('')}
        </div>
      </section>
    </main>
  `;
}

function createRelatedCard(product) {
  return `
    <a href="#/product/${product.id}" class="related-product-card">
      <div class="related-product-image" style="background-image: url('${product.image}');"></div>
      <div class="related-product-info">
        <h3 class="related-product-name">${product.name}</h3>
        <p class="related-product-category">${product.categoryLabel}</p>
      </div>
    </a>
  `;
}

function getRelatedProducts(product) {
  // Беремо 4 товари з тієї ж категорії (окрім поточного)
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
}

// Ініціалізація галереї та кількості
export function initProductDetail() {
  if (!currentProduct) return;

  const images = currentProduct.images || [currentProduct.image];
  const galleryMain = document.querySelector('.gallery-main');
  const galleryDots = document.querySelectorAll('.gallery-dot');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  const quantityInput = document.getElementById('quantityInput');
  const minusBtn = document.getElementById('quantityMinus');
  const plusBtn = document.getElementById('quantityPlus');
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  if (quantityInput && minusBtn && plusBtn) {
    minusBtn.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });

    plusBtn.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });
  }
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const quantity = parseInt(quantityInput?.value || 1);

      if (currentProduct) {
        // Додаємо товар N разів (залежно від quantity)
        for (let i = 0; i < quantity; i++) {
          addToCart(currentProduct);
        }
        showModal('Added to Cart', `${currentProduct.name} (x${quantity}) has been added to your cart`, 'success');
      }
    });
  }
  // Buy now button
  const buyNowBtn = document.getElementById('buyNowBtn');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      const quantity = parseInt(quantityInput?.value || 1);

      if (currentProduct) {
        // Додаємо товар N разів (залежно від quantity)
        for (let i = 0; i < quantity; i++) {
          addToCart(currentProduct);
        }

        // Redirect to checkout
        window.location.hash = '#/checkout/step/1';
      }
    });
  }

  function updateGallery(index) {
    currentImageIndex = index;
    if (galleryMain) {
      galleryMain.style.backgroundImage = `url('${images[index]}')`;
    }

    galleryDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
      updateGallery(newIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const newIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
      updateGallery(newIndex);
    });
  }

  galleryDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index);
      updateGallery(index);
    });
  });
}