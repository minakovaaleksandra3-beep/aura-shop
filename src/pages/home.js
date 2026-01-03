// src/pages/home.js
import { getLatestProducts } from '../data/product.js';
import { TestimonialsSlider } from '../components/testimonialsSlider.js';
import { addToCart } from '../utils/cart.js';
import { showModal } from '../components/modal.js';

let contentData = null;

async function loadContent() {
  if (!contentData) {
    const response = await fetch('/src/data/content.json');
    contentData = await response.json();
  }
  return contentData;
}

export async function Home() {
  const data = await loadContent();
  const bestsellers = getLatestProducts(4);

  return `
    <!-- Hero Section -->
    <section class="hero-with-header">
      <div class="hero-content">
        <a href="#/catalog/all" class="btn btn-light hero-btn">${data.hero.buttonText}</a>
      </div>
    </section>
    
    <main>
      <!-- Products Section -->
      <section class="container" style="padding: 80px 0;">
        <h2 style="font-size: 32px; font-weight: 300; margin-bottom: 40px; text-align: left;">
          ${data.sections.products.title}
        </h2>
        <div class="grid grid-3">
          <a href="#/catalog/candles" class="card category-card">
            <div style="width: 445px; height: 400px; background-image: url('/images/aromacandle_1.png'); background-size: cover; background-position: center;"></div>
            <div class="card-content">
              <h3>Candles</h3>
              <p class="text-light text-small">Aroma candles</p>
            </div>
          </a>
          <a href="#/catalog/diffusers" class="card category-card">
            <div style="width: 445px; height: 400px; background-image: url('/images/diffuser_1.png'); background-size: cover; background-position: center;"></div>
            <div class="card-content">
              <h3>Diffusers</h3>
              <p class="text-light text-small">Aroma diffusers</p>
            </div>
          </a>
          <a href="#/catalog/gift-sets" class="card category-card">
            <div style="width: 445px; height: 400px; background-image: url('/images/gift_1.png'); background-size: cover; background-position: center;"></div>
            <div class="card-content">
              <h3>Gift sets</h3>
              <p class="text-light text-small">For special moments</p>
            </div>
          </a>
        </div>
      </section>

      <!-- Bestsellers Section -->
      <section class="bestsellers-section">
        <div class="container">
          <div class="bestsellers-header">
            <h2>${data.sections.bestsellers.title}</h2>
            <a href="#/catalog/all" class="explore-link">
              Explore
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div class="bestsellers-grid">
            ${bestsellers.map(product => createBestsellerCard(product)).join('')}
          </div>
        </div>
      </section>

      <!-- Philosophy Section -->
      <section class="philosophy-section">
        <div class="container">
          <div class="philosophy-content">
            <div class="philosophy-image">
              
            </div>
            <div class="philosophy-text">
              <h2>${data.sections.philosophy.title}</h2>
              <p>${data.sections.philosophy.text1}</p>
              <a href="#/catalog/all" class="btn btn-outline">${data.sections.philosophy.buttonText}</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Stories Section -->
      <section class="home-blog-section">
        <div class="container">
          <div class="home-blog-header">
            <h2>${data.sections.stories.title}</h2>
            <a href="#/blog" class="home-blog-link">
              ${data.sections.stories.link}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div class="home-blog-grid">
            ${data.stories.map(story => `
              <a href="#/blog/${story.id}" class="home-blog-card">
                <div class="home-blog-card-image" style="background-image: url('${story.image}');"></div>
                <div class="home-blog-card-content">
                  <h3 class="home-blog-card-title">${story.title}</h3>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
        <section class="testimonials-section">
      <div class="container">
      <div class="testimonials-header">
        <h2 class="testimonials-title">${data.sections.testimonials.title}</h2>
      </div>
    
       ${TestimonialsSlider(data.testimonials)}
      </div>
      </section>
    </main>
  `;
}

function createBestsellerCard(product) {
  return `
    <div class="bestseller-card" data-product-id="${product.id}">
      <a href="#/product/${product.id}" class="bestseller-image-link">
        <div class="bestseller-image" style="background-image: url('${product.image}');"></div>
      </a>
      
      <div class="bestseller-info">
        <a href="#/product/${product.id}" class="bestseller-name-link">
          <h3 class="bestseller-name">${product.name}</h3>
        </a>
        <p class="bestseller-category">${product.categoryLabel}</p>
        <p class="bestseller-price">$${product.price.toFixed(2)}</p>
        
        <div class="bestseller-buttons">
          <button 
            class="bestseller-btn bestseller-btn-buy buy-now-btn"
            data-product-id="${product.id}"
          >
            Buy now
          </button>
          <button 
            class="bestseller-btn bestseller-btn-cart add-to-cart-btn"
            data-product-id="${product.id}"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  `;
}
export function initHomeAddToCart() {
  // Add to Cart buttons
  document.querySelectorAll('.bestseller-card .add-to-cart-btn').forEach(btn => {
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
  document.querySelectorAll('.bestseller-card .buy-now-btn').forEach(btn => {
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