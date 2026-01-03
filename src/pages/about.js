// src/pages/about.js

export async function About() {
  return `
    <main class="about-main">
      <!-- Hero Section -->
     <!-- Hero Section -->
     <!-- Breadcrumbs -->
      <div class="container about-breadcrumbs-container">
        <div class="about-breadcrumbs">
          <a href="#/" class="breadcrumb-link">Home</a>
          <span class="breadcrumb-separator"> / </span>
          <span class="breadcrumb-current">About</span>
        </div>
    </div>
    <section class="about-hero">
        <div class="container">
          <div class="about-hero-content">
            <h1 class="about-hero-title">About us</h1>
          </div>
        </div>
    </section>

      <!-- Story Section -->
      <section class="container about-section">
        <div class="about-content-grid">
          <div class="about-text">
            <h2 class="about-section-title">Our Story</h2>
            <p class="about-paragraph">
              AURA was born from a simple belief: that every home deserves to feel like a sanctuary. 
              We craft each candle and diffuser by hand, using only natural ingredients and sustainable practices.
            </p>
            <p class="about-paragraph">
              What started as a passion project in a small workshop has grown into a beloved brand, 
              but our commitment remains the same—creating fragrances that transform spaces and elevate everyday moments.
            </p>
          </div>
          <div class="about-image" style="background-image: url('/images/about_as2.png');"></div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="about-values-section">
        <div class="container">
          <h2 class="about-section-title about-center">Our Values</h2>
          
          <div class="about-values-grid">
            <div class="about-value-card">
              <h3 class="about-value-title">Natural Ingredients</h3>
              <p class="about-value-text">
                We use only premium, natural waxes and essential oils. 
                No harmful chemicals, just pure, clean fragrances.
              </p>
            </div>
            
            <div class="about-value-card">
              <h3 class="about-value-title">Handcrafted Quality</h3>
              <p class="about-value-text">
                Every candle is poured by hand with meticulous attention to detail. 
                Each piece is unique, carrying the mark of true craftsmanship.
              </p>
            </div>
            
            <div class="about-value-card">
              <h3 class="about-value-title">Sustainability</h3>
              <p class="about-value-text">
                From recyclable packaging to eco-friendly materials, 
                we're committed to minimizing our environmental footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Philosophy Section -->
      <section class="container about-section">
        <div class="about-content-grid about-reverse">
          <div class="about-image" style="background-image: url('/images/about_as.png');"></div>
          <div class="about-text">
            <h2 class="about-section-title">Our Philosophy</h2>
            <p class="about-paragraph">
              We don't just create scents—we craft moods. Each fragrance is carefully composed 
              to evoke emotion, create atmosphere, and transform your space into a personal sanctuary.
            </p>
            <p class="about-paragraph">
              Whether you're seeking relaxation after a long day, focus during work, 
              or warmth for gathering with loved ones, AURA is designed to be part of your ritual.
            </p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="about-cta-section">
        <div class="container about-cta-content">
          <h2 class="about-cta-title">Experience the AURA difference</h2>
          <p class="about-cta-text">
            Discover our collection of handcrafted candles and diffusers, 
            each designed to bring harmony to your home.
          </p>
          <a href="#/catalog/all" class="about-cta-button">Shop Now</a>
        </div>
      </section>
    </main>
  `;
}