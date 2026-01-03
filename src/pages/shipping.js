// src/pages/shipping.js

export async function ShippingPage() {
  return `
    <main class="info-page-main">
      <div class="info-page-hero">
        <div class="container">
          <h1 class="info-page-title">Shipping & Returns</h1>
        </div>
      </div>
      <nav class="breadcrumbs">
        <div class="breadcrumbs-container">
          <ul class="breadcrumbs-list">
            <li class="breadcrumbs-item">
              <a href="#/" class="breadcrumbs-link">Home</a>
            </li>
            <li class="breadcrumbs-item">
              <span class="breadcrumbs-current">Shipping & Returns</span>
            </li>
          </ul>
        </div>
      </nav>
      
      <div class="container info-page-container">
        <div class="info-page-content">
          <section class="info-section">
            <h2>Shipping Information</h2>
            <p>We offer fast and reliable shipping to ensure your AURA products arrive safely at your doorstep.</p>
            
            <h3>Shipping Methods</h3>
            <ul>
              <li><strong>Standard Shipping:</strong> 5-7 business days - $5.00</li>
              <li><strong>Express Shipping:</strong> 2-3 business days - $15.00</li>
              <li><strong>Overnight Shipping:</strong> 1 business day - $25.00</li>
            </ul>
            
            <p><strong>Free shipping</strong> on all orders over $75!</p>
            
           <img src="/images/shipping2.png" alt="Shipping">
          </section>
          
          <section class="info-section">
            <h2>Returns & Exchanges</h2>
            <p>We want you to love your AURA products. If you're not completely satisfied, we accept returns within 30 days of purchase.</p>
            
            <h3>Return Process</h3>
            <ol>
              <li>Contact our customer service team at support@aura.com</li>
              <li>Pack your item(s) securely in the original packaging</li>
              <li>Ship the package to our returns center</li>
              <li>Receive your refund within 5-7 business days</li>
            </ol>
            
            <h3>Return Conditions</h3>
            <ul>
              <li>Items must be unused and in original condition</li>
              <li>Candles must not be burned</li>
              <li>Original packaging must be included</li>
              <li>Proof of purchase required</li>
            </ul>
            
            <img src="/images/shipping.png" alt="Returns">
          </section>
          
          <section class="info-section">
            <h2>Tracking Your Order</h2>
            <p>Once your order ships, you'll receive a tracking number via email. You can track your package at any time through our website or the carrier's website.</p>
          </section>
          
          <section class="info-section">
            <h2>International Shipping</h2>
            <p>Currently, we ship to the United States and Canada. International shipping rates vary by location and will be calculated at checkout.</p>
          </section>
        </div>
      </div>
    </main>
  `;
}

export function initShippingPage() {
  console.log('Shipping page initialized');
}