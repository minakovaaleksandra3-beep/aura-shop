// src/pages/promotions.js

export async function PromotionsPage() {
  return `
    <main class="brand-page-main">
      <!-- Hero Section -->
      <section class="brand-hero">
        <div class="brand-hero-content">
          <h1 class="brand-hero-title">Current Promotions</h1>
          <p class="brand-hero-subtitle">Exclusive offers and special deals on AURA products</p>
        </div>
      </section>

      <!-- Active Promotions -->
      <section class="container brand-section">
        <h2 class="brand-section-title brand-center">Active Offers</h2>
        
        <div class="brand-promo-grid">
          <div class="brand-promo-card brand-promo-featured">
            <div class="brand-promo-badge">Limited Time</div>
            <h3 class="brand-promo-title">Free Shipping</h3>
            <p class="brand-promo-desc">On all orders over $75</p>
            <div class="brand-promo-code">No code needed</div>
            <a href="#/catalog/all" class="brand-promo-btn">Shop Now</a>
          </div>
          
          <div class="brand-promo-card">
            <h3 class="brand-promo-title">10% Off First Order</h3>
            <p class="brand-promo-desc">Subscribe to our newsletter</p>
            <div class="brand-promo-code">AUTO-APPLIED</div>
            <a href="#/" class="brand-promo-btn-outline">Subscribe</a>
          </div>
          
          <div class="brand-promo-card">
            <h3 class="brand-promo-title">Bundle & Save</h3>
            <p class="brand-promo-desc">Buy 3 candles, save 15%</p>
            <div class="brand-promo-code">BUNDLE15</div>
            <a href="#/catalog/candles" class="brand-promo-btn-outline">Shop Candles</a>
          </div>
        </div>
      </section>

      <!-- Member Benefits -->
      <section class="brand-accent-section">
        <div class="container">
          <h2 class="brand-section-title brand-center-white">Member Exclusive Benefits</h2>
          
          <div class="brand-benefits-grid">
            <div class="brand-benefit-item">
              <h3>Silver Members</h3>
              <p>5% off all orders</p>
              <p>Early access to new products</p>
              <p>Birthday gift</p>
            </div>
            
            <div class="brand-benefit-item">
              <h3>Gold Members</h3>
              <p>10% off all orders</p>
              <p>Free shipping always</p>
              <p>Priority customer service</p>
            </div>
            
            <div class="brand-benefit-item">
              <h3>Platinum Members</h3>
              <p>15% off all orders</p>
              <p>Exclusive product previews</p>
              <p>Personalized recommendations</p>
            </div>
          </div>
          
          <div class="brand-center" style="margin-top: 40px;">
            <a href="#/signup" class="brand-cta-btn-white">Join Now</a>
          </div>
        </div>
      </section>

      <!-- Seasonal Promotions -->
      <section class="container brand-section">
        <div class="brand-two-column">
          <div class="brand-column">
            <h2 class="brand-section-title">Seasonal Collections</h2>
            <p class="brand-paragraph">
              Throughout the year, we release limited-edition seasonal collections 
              featuring exclusive fragrances and special packaging. Members get early 
              access and exclusive discounts.
            </p>
            <p class="brand-paragraph">
              Sign up for our newsletter to be the first to know about new releases, 
              seasonal promotions, and special events.
            </p>
          </div>
          <div class="brand-column">
            <div class="brand-image-box" style="background-image: url('/images/promotions.png');"></div>
          </div>
        </div>
      </section>
      <!-- How to Redeem -->
      <section class="brand-gray-section">
        <div class="container">
          <h2 class="brand-section-title brand-center">How to Redeem Promo Codes</h2>
          
          <div class="brand-steps-grid">
            <div class="brand-step">
              <div class="brand-step-number">1</div>
              <h3>Add to Cart</h3>
              <p>Shop your favorite products</p>
            </div>
            
            <div class="brand-step">
              <div class="brand-step-number">2</div>
              <h3>Enter Code</h3>
              <p>Apply promo code at checkout</p>
            </div>
            
            <div class="brand-step">
              <div class="brand-step-number">3</div>
              <h3>Enjoy Savings</h3>
              <p>See your discount applied</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

export function initPromotionsPage() {
  console.log('Promotions page initialized');
}