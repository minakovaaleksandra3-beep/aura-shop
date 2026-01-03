// src/pages/termsOfService.js

export async function TermsOfServicePage() {
  return `
    <main class="info-page-main">
      <div class="info-page-hero">
        <div class="container">
          <h1 class="info-page-title">Terms of Service</h1>
        </div>
      </div>
      <nav class="breadcrumbs">
        <div class="breadcrumbs-container">
          <ul class="breadcrumbs-list">
            <li class="breadcrumbs-item">
              <a href="#/" class="breadcrumbs-link">Home</a>
            </li>
            <li class="breadcrumbs-item">
              <span class="breadcrumbs-current">Terms of Service</span>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container info-page-container">
        <div class="info-page-content">
          <section class="info-section">
            <h2>Terms of Service</h2>
            <p><em>Last updated: December 2025</em></p>
            <p>Welcome to AURA. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.</p>
          </section>
          
          <section class="info-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.</p>
          </section>
          
          <section class="info-section">
            <h2>2. Use of Website</h2>
            <h3>Permitted Use</h3>
            <ul>
              <li>Browse and purchase products</li>
              <li>Create an account</li>
              <li>Access your order history</li>
              <li>Subscribe to our newsletter</li>
            </ul>
            
            <h3>Prohibited Use</h3>
            <ul>
              <li>Impersonate another person or entity</li>
              <li>Use the site for any illegal purpose</li>
              <li>Attempt to hack or disrupt our systems</li>
              <li>Collect user data without permission</li>
              <li>Post harmful or offensive content</li>
            </ul>
            
            <img src="/images/terms.png" alt="Terms">
          </section>
          
          <section class="info-section">
            <h2>3. Product Information</h2>
            <p>We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is error-free. If a product is not as described, your sole remedy is to return it unused.</p>
          </section>
          
          <section class="info-section">
            <h2>4. Pricing and Payment</h2>
            <ul>
              <li>All prices are in USD</li>
              <li>Prices are subject to change without notice</li>
              <li>We reserve the right to cancel orders if pricing errors occur</li>
              <li>Payment is due at the time of order</li>
              <li>We accept major credit cards and PayPal</li>
            </ul>
          </section>
          
          <section class="info-section">
            <h2>5. Shipping and Delivery</h2>
            <p>Delivery times are estimates only. We are not responsible for delays caused by shipping carriers or customs. Title and risk of loss pass to you upon delivery to the carrier.</p>
          </section>
          
          <section class="info-section">
            <h2>6. Returns and Refunds</h2>
            <p>Please refer to our <a href="#/refund-policy">Refund Policy</a> for detailed information about returns and refunds.</p>
          </section>
          
          <section class="info-section">
            <h2>7. Intellectual Property</h2>
            <p>All content on this website, including text, images, logos, and designs, is the property of AURA and is protected by copyright and trademark laws. You may not use any content without our written permission.</p>
          </section>
          
          <section class="info-section">
            <h2>8. User Accounts</h2>
            <ul>
              <li>You are responsible for maintaining account confidentiality</li>
              <li>You must provide accurate information</li>
              <li>We reserve the right to suspend or terminate accounts</li>
              <li>You are responsible for all activities under your account</li>
            </ul>
          </section>
          
          <section class="info-section">
            <h2>9. Limitation of Liability</h2>
            <p>AURA shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products. Our total liability shall not exceed the amount you paid for the product.</p>
          </section>
          
          <section class="info-section">
            <h2>10. Indemnification</h2>
            <p>You agree to indemnify and hold AURA harmless from any claims, damages, or expenses arising from your violation of these terms or your use of our website.</p>
          </section>
          
          <section class="info-section">
            <h2>11. Dispute Resolution</h2>
            <p>Any disputes arising from these terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</p>
          </section>
          
          <section class="info-section">
            <h2>12. Governing Law</h2>
            <p>These Terms of Service are governed by the laws of [Your State/Country], without regard to its conflict of law provisions.</p>
          </section>
          
          <section class="info-section">
            <h2>13. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the modified terms.</p>
          </section>
          
          <section class="info-section">
            <h2>14. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us at:</p>
            <p>
              Email: legal@aura.com<br>
              Phone: +XX (X) XXXXXXXXX<br>
              Address: [Your Address]
            </p>
          </section>
          
          <section class="info-section">
            <h2>15. Severability</h2>
            <p>If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
          </section>
        </div>
      </div>
    </main>
  `;
}

export function initTermsOfServicePage() {
  console.log('Terms of Service page initialized');
}