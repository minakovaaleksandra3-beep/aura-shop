// src/pages/sustainability.js

export async function SustainabilityPage() {
  const BASE = import.meta.env.BASE_URL;
  return `
    <main class="brand-page-main">
      <!-- Hero Section -->
      <section class="brand-hero">
        <div class="brand-hero-content">
          <h1 class="brand-hero-title">Sustainability & Ethics</h1>
          <p class="brand-hero-subtitle">Our commitment to the planet and ethical practices</p>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="container brand-section">
        <div class="brand-two-column brand-reverse">
          <div class="brand-column">
            <div class="brand-image-box" style="background-image: url('${BASE}images/sust.png');"></div>
          </div>
          <div class="brand-column">
            <h2 class="brand-section-title">Our Environmental Mission</h2>
            <p class="brand-paragraph">
              At AURA, sustainability isn't just a buzzword—it's woven into every decision we make. 
              From sourcing materials to packaging and shipping, we're committed to minimizing our 
              environmental impact while creating products you'll love.
            </p>
            <p class="brand-paragraph">
              We believe luxury and responsibility can coexist. That's why we've built our business 
              on principles of transparency, ethical sourcing, and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      <!-- Key Initiatives -->
      <section class="brand-accent-section">
        <div class="container">
          <h2 class="brand-section-title brand-center-white">Our Key Initiatives</h2>
          
          <div class="brand-three-column">
            <div class="brand-initiative-card">
              <div class="brand-initiative-number">01</div>
              <h3>Natural Ingredients</h3>
              <p>
                100% natural soy wax, essential oils, and cotton wicks. 
                No paraffin, no synthetic fragrances, no harmful chemicals.
              </p>
            </div>
            
            <div class="brand-initiative-card">
              <div class="brand-initiative-number">02</div>
              <h3>Eco-Friendly Packaging</h3>
              <p>
                Recyclable glass vessels, biodegradable labels, and minimal 
                packaging made from recycled materials.
              </p>
            </div>
            
            <div class="brand-initiative-card">
              <div class="brand-initiative-number">03</div>
              <h3>Carbon Neutral Shipping</h3>
              <p>
                We offset 100% of our shipping emissions and partner with 
                eco-conscious carriers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Sourcing Section -->
      <section class="container brand-section">
        <div class="brand-two-column">
          <div class="brand-column">
            <h2 class="brand-section-title">Ethical Sourcing</h2>
            <p class="brand-paragraph">
              We work directly with suppliers who share our values. Every ingredient is 
              carefully sourced from ethical producers who treat their workers fairly and 
              respect the environment.
            </p>
            <div class="brand-stat-grid">
              <div class="brand-stat">
                <div class="brand-stat-number">100%</div>
                <div class="brand-stat-label">Natural Wax</div>
              </div>
              <div class="brand-stat">
                <div class="brand-stat-number">0%</div>
                <div class="brand-stat-label">Synthetic Additives</div>
              </div>
              <div class="brand-stat">
                <div class="brand-stat-number">100%</div>
                <div class="brand-stat-label">Recyclable Packaging</div>
              </div>
            </div>
          </div>
          <div class="brand-column">
            <div class="brand-image-box" style="background-image: url('${BASE}images/sust1.jpg');"></div>
          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section class="brand-gray-section">
        <div class="container">
          <h2 class="brand-section-title brand-center">Certifications & Partnerships</h2>
          <p class="brand-center-text">
            We're proud to be certified by leading environmental and ethical organizations
          </p>
          
          <div class="brand-cert-grid">
            <div class="brand-cert-item">Cruelty-Free Certified</div>
            <div class="brand-cert-item">Vegan Society Approved</div>
            <div class="brand-cert-item">Sustainable Packaging Coalition</div>
            <div class="brand-cert-item">1% for the Planet</div>
          </div>
        </div>
      </section>
    </main>
  `;
}

export function initSustainabilityPage() {
  console.log('Sustainability page initialized');
}