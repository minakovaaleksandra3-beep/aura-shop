// src/pages/privacyPolicy.js

export async function PrivacyPolicyPage() {
  const BASE = import.meta.env.BASE_URL;
  return `
    <main class="info-page-main">
      <div class="info-page-hero">
        <div class="container">
          <h1 class="info-page-title">Privacy Policy</h1>
        </div>
      </div>
      <nav class="breadcrumbs">
        <div class="breadcrumbs-container">
          <ul class="breadcrumbs-list">
            <li class="breadcrumbs-item">
              <a href="#/" class="breadcrumbs-link">Home</a>
            </li>
            <li class="breadcrumbs-item">
              <span class="breadcrumbs-current">Privacy Policy</span>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container info-page-container">
        <div class="info-page-content">
          <section class="info-section">
            <h2>Privacy Policy</h2>
            <p><em>Last updated: December 2025</em></p>
            <p>At AURA, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.</p>
          </section>
          
          <section class="info-section">
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <ul>
              <li>Name and contact information</li>
              <li>Shipping and billing addresses</li>
              <li>Email address and phone number</li>
              <li>Payment information (processed securely)</li>
              <li>Order history and preferences</li>
            </ul>
            
            <h3>Automatically Collected Information</h3>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Cookies and tracking technologies</li>
              <li>Pages visited and time spent on our site</li>
            </ul>
           
            <img src="${BASE}images/privacy.png" alt="Privacy">
          </section>
          
          <section class="info-section">
            <h2>How We Use Your Information</h2>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Respond to customer service requests</li>
              <li>Send promotional emails (with your consent)</li>
              <li>Improve our website and user experience</li>
              <li>Detect and prevent fraud</li>
            </ul>
          </section>
          
          <section class="info-section">
            <h2>Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Payment processors, shipping companies, and email services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In the event of a merger or acquisition</li>
            </ul>
          </section>
          
          <section class="info-section">
            <h2>Cookies</h2>
            <p>We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings, but some features may not function properly if cookies are disabled.</p>
          </section>
          
          <section class="info-section">
            <h2>Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information, including SSL encryption for all transactions. However, no method of transmission over the internet is 100% secure.</p>
          </section>
          
          <section class="info-section">
            <h2>Your Rights</h2>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to data processing</li>
            </ul>
            <p>To exercise these rights, contact us at privacy@aura.com</p>
          </section>
          
          <section class="info-section">
          <h2>Children's Privacy</h2>
            <p>Our website is not intended for children under 13. We do not knowingly collect personal information from children.</p>
          </section>
          
          <section class="info-section">
            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We'll notify you of any significant changes by email or through a notice on our website.</p>
          </section>
          
          <section class="info-section">
            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p>
              Email: privacy@aura.com<br>
              Phone: +XX (X) XXXXXXXXX<br>
              Address: [Your Address]
            </p>
          </section>
        </div>
      </div>
    </main>
  `;
}

export function initPrivacyPolicyPage() {
  console.log('Privacy Policy page initialized');
}