// src/pages/wholesale.js

export async function WholesalePage() {
  return `
    <main class="brand-page-main">
      <!-- Hero Section -->
      <section class="brand-hero">
        <div class="brand-hero-content">
          <h1 class="brand-hero-title">Wholesale Program</h1>
          <p class="brand-hero-subtitle">Partner with AURA for your retail or hospitality business</p>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="container brand-section">
        <div class="brand-two-column">
          <div class="brand-column">
            <h2 class="brand-section-title">Wholesale Partnership</h2>
            <p class="brand-paragraph">
              Join our growing network of retail partners, boutique hotels, spas, and 
              lifestyle brands. AURA's wholesale program offers competitive pricing, 
              flexible ordering, and dedicated support.
            </p>
            <p class="brand-paragraph">
              Whether you're a boutique retailer or a hospitality group, we have solutions 
              tailored to your needs. Our products are designed to enhance any space and 
              delight your customers.
            </p>
          </div>
          <div class="brand-column">
            <div class="brand-image-box" style="background-image: url('/images/wholesale.png');"></div>
          </div>
        </div>
      </section>

      <!-- Benefits -->
      <section class="brand-gray-section">
        <div class="container">
          <h2 class="brand-section-title brand-center">Partnership Benefits</h2>
          
          <div class="brand-three-column">
            <div class="brand-benefit-card">
              <h3>Competitive Pricing</h3>
              <p>
                Tiered pricing structure with volume discounts. The more you order, 
                the more you save.
              </p>
            </div>
            
            <div class="brand-benefit-card">
              <h3>Flexible Minimums</h3>
              <p>
                Low minimum order quantities to help you test products and manage inventory efficiently.
              </p>
            </div>
            
            <div class="brand-benefit-card">
              <h3>Marketing Support</h3>
              <p>
                Access to product images, descriptions, and marketing materials to help you sell.
              </p>
            </div>
            
            <div class="brand-benefit-card">
              <h3>Dedicated Account Manager</h3>
              <p>
                Personal support from our wholesale team to help with orders and questions.
              </p>
            </div>
            
            <div class="brand-benefit-card">
              <h3>Fast Turnaround</h3>
              <p>
                Quick order processing and reliable shipping to keep your shelves stocked.
              </p>
            </div>
            
            <div class="brand-benefit-card">
              <h3>Custom Solutions</h3>
              <p>
                Private labeling and custom packaging options for larger orders.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Pricing Tiers -->
      <section class="container brand-section">
        <h2 class="brand-section-title brand-center">Pricing Tiers</h2>
        
        <div class="brand-pricing-grid">
          <div class="brand-pricing-card">
            <h3>Starter</h3>
            <div class="brand-pricing-amount">20% OFF</div>
            <p>Minimum order: $500</p>
            <p>Perfect for boutique retailers</p>
          </div>
          
          <div class="brand-pricing-card brand-pricing-featured">
            <div class="brand-pricing-popular">Most Popular</div>
            <h3>Growth</h3>
            <div class="brand-pricing-amount">30% OFF</div>
            <p>Minimum order: $2,000</p>
            <p>Ideal for expanding businesses</p>
          </div>
          
          <div class="brand-pricing-card">
            <h3>Enterprise</h3>
            <div class="brand-pricing-amount">40% OFF</div>
            <p>Minimum order: $5,000+</p>
            <p>For large retailers and chains</p>
          </div>
        </div>
      </section>

      <!-- Application Process -->
      <section class="brand-accent-section">
        <div class="container">
          <h2 class="brand-section-title brand-center-white">How to Apply</h2>
          
          <div class="brand-process-grid">
            <div class="brand-process-step">
              <div class="brand-process-icon">1</div>
              <h3>Submit Application</h3>
              <p>Fill out our wholesale application form with your business details</p>
            </div>
            
            <div class="brand-process-step">
              <div class="brand-process-icon">2</div>
              <h3>Review & Approval</h3>
              <p>Our team reviews your application within 2-3 business days</p>
            </div>
            
            <div class="brand-process-step">
              <div class="brand-process-icon">3</div>
              <h3>Account Setup</h3>
              <p>Receive your wholesale account details and pricing information</p>
            </div>
            
            <div class="brand-process-step">
              <div class="brand-process-icon">4</div>
              <h3>Place Orders</h3>
              <p>Start ordering with your dedicated account manager's support</p>
            </div>
          </div>
          
          <div class="brand-center" style="margin-top: 50px;">
            <a href="mailto:wholesale@aura.com" class="brand-cta-btn-white">Apply Now</a>
          </div>
        </div>
      </section>

      <!-- Contact Info -->
      <section class="container brand-section">
        <div class="brand-contact-box">
          <h2 class="brand-section-title">Questions About Wholesale?</h2>
          <p class="brand-paragraph">
            Our wholesale team is here to help. Contact us for more information, 
            pricing details, or to schedule a consultation.
          </p>
          <div class="brand-contact-grid">
            <div>
              <h3>Email</h3>
              <p>wholesale@aura.com</p>
            </div>
            <div>
              <h3>Phone</h3>
              <p>+XX (X) XXXXXXXXX</p>
            </div>
            <div>
              <h3>Hours</h3>
              <p>Monday - Friday, 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

export function initWholesalePage() {
  console.log('Wholesale page initialized');
}