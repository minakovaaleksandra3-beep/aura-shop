// src/pages/press.js

export async function PressPage() {
  return `
    <main class="brand-page-main">
      <!-- Hero Section -->
      <section class="brand-hero">
        <div class="brand-hero-content">
          <h1 class="brand-hero-title">Press Enquiries</h1>
          <p class="brand-hero-subtitle">Media resources and contact information for press inquiries</p>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="container brand-section">
        <div class="brand-two-column">
          <div class="brand-column">
            <h2 class="brand-section-title">Get in Touch</h2>
            <p class="brand-paragraph">
              For all media inquiries, press releases, interview requests, or partnership opportunities, 
              please contact our press team. We're happy to provide product samples, high-resolution images, 
              and information about AURA.
            </p>
            <div class="brand-contact-info">
              <div class="brand-contact-item">
                <h3>Email</h3>
                <p>press@aura.com</p>
              </div>
              <div class="brand-contact-item">
                <h3>Phone</h3>
                <p>+XX (X) XXXXXXXXX</p>
              </div>
              <div class="brand-contact-item">
                <h3>Response Time</h3>
                <p>We typically respond within 24-48 hours</p>
              </div>
            </div>
          </div>
          <div class="brand-column">
            <div class="brand-image-box" style="background-image: url('/images/press.png');"></div>
          </div>
        </div>
      </section>

      <!-- Press Kit Section -->
      <section class="brand-gray-section">
        <div class="container">
          <h2 class="brand-section-title brand-center">Press Kit & Resources</h2>
          
          <div class="brand-three-column">
            <div class="brand-resource-card">
              <h3>Brand Assets</h3>
              <p>Logo files, color palettes, and brand guidelines in various formats</p>
              <a href="#" class="brand-link">Download Assets →</a>
            </div>
            
            <div class="brand-resource-card">
              <h3>Product Images</h3>
              <p>High-resolution product photography for editorial use</p>
              <a href="#" class="brand-link">View Gallery →</a>
            </div>
            
            <div class="brand-resource-card">
              <h3>Press Releases</h3>
              <p>Latest news, announcements, and company updates</p>
              <a href="#" class="brand-link">Read More →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured In Section -->
      <section class="container brand-section">
        <h2 class="brand-section-title brand-center">As Featured In</h2>
        <p class="brand-center-text">AURA has been featured in leading publications and media outlets</p>
        
        <div class="brand-featured-grid">
          <div class="brand-featured-item">Vogue</div>
          <div class="brand-featured-item">Elle Decor</div>
          <div class="brand-featured-item">Architectural Digest</div>
          <div class="brand-featured-item">Forbes</div>
        </div>
      </section>
    </main>
  `;
}

export function initPressPage() {
  console.log('Press page initialized');
}