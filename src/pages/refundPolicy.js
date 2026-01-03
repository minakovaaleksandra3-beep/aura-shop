// src/pages/refundPolicy.js

export async function RefundPolicyPage() {
  return `
    <main class="info-page-main">
      <div class="info-page-hero">
        <div class="container">
          <h1 class="info-page-title">Refund Policy</h1>
        </div>
      </div>
      <nav class="breadcrumbs">
        <div class="breadcrumbs-container">
          <ul class="breadcrumbs-list">
            <li class="breadcrumbs-item">
              <a href="#/" class="breadcrumbs-link">Home</a>
            </li>
            <li class="breadcrumbs-item">
              <span class="breadcrumbs-current">Refund Policy</span>
            </li>
          </ul>
        </div>
      </nav>
      
      <div class="container info-page-container">
        <div class="info-page-content">
          <section class="info-section">
            <h2>Our Refund Policy</h2>
            <p>At AURA, customer satisfaction is our priority. We offer a straightforward refund policy to ensure you're happy with your purchase.</p>
          </section>
          
          <section class="info-section">
            <h2>30-Day Money Back Guarantee</h2>
            <p>If you're not completely satisfied with your purchase, you may return it within 30 days of the delivery date for a full refund.</p>
            
            <img src="/images/refund.png" alt="Refund">
          </section>
          
          <section class="info-section">
            <h2>Eligible Items</h2>
            <ul>
              <li>Candles (unburned and in original packaging)</li>
              <li>Diffusers (unused with all parts included)</li>
              <li>Gift sets (unopened)</li>
              <li>Accessories (unused and in original condition)</li>
            </ul>
          </section>
          
          <section class="info-section">
            <h2>Non-Refundable Items</h2>
            <ul>
              <li>Burned or used candles</li>
              <li>Items damaged due to misuse</li>
              <li>Sale items (unless defective)</li>
              <li>Gift cards</li>
            </ul>
          </section>
          
          <section class="info-section">
            <h2>Refund Process</h2>
            <ol>
              <li><strong>Contact Us:</strong> Email support@aura.com with your order number</li>
              <li><strong>Return Authorization:</strong> We'll provide a return shipping label</li>
              <li><strong>Ship Item:</strong> Pack and ship your item(s) back to us</li>
              <li><strong>Processing:</strong> We'll inspect your return within 2-3 business days</li>
              <li><strong>Refund:</strong> Your refund will be issued to the original payment method within 5-7 business days</li>
            </ol>
          </section>
          
          <section class="info-section">
            <h2>Shipping Costs</h2>
            <p>Original shipping costs are non-refundable. Return shipping is free for defective items or our errors. For other returns, you're responsible for return shipping costs unless you have free returns with your member status.</p>
          </section>
          
          <section class="info-section">
            <h2>Exchanges</h2>
            <p>We currently don't offer direct exchanges. If you'd like a different item, please return your original purchase for a refund and place a new order.</p>
          </section>
          
          <section class="info-section">
            <h2>Damaged or Defective Items</h2>
            <p>If you receive a damaged or defective item, please contact us immediately at support@aura.com with photos. We'll arrange for a replacement or full refund, including shipping costs.</p>
          </section>
        </div>
      </div>
    </main>
  `;
}

export function initRefundPolicyPage() {
  console.log('Refund Policy page initialized');
}