// src/pages/affiliate.js

export async function AffiliatePage() {
  const BASE = import.meta.env.BASE_URL;
  return `
    <main class="brand-page-main">
      <!-- Hero Section -->
      <section class="brand-hero">
        <div class="brand-hero-content">
          <h1 class="brand-hero-title">Affiliate Program</h1>
          <p class="brand-hero-subtitle">Earn commission by sharing products you love</p>
        </div>
      </section>

      <!-- Overview -->
      <section class="container brand-section">
        <div class="brand-intro-box">
          <h2 class="brand-section-title brand-center">Join Our Affiliate Family</h2>
          <p class="brand-center-text">
            Love AURA? Share it with your audience and earn up to 15% commission on every sale. 
            Our affiliate program is perfect for bloggers, influencers, and content creators 
            who want to monetize their passion for home fragrance.
          </p>
        </div>
      </section>

      <!-- How It Works -->
      <section class="brand-gray-section">
        <div class="container">
          <h2 class="brand-section-title brand-center">How It Works</h2>
          
          <div class="brand-four-column">
            <div class="brand-how-card">
              <div class="brand-how-number">1</div>
              <h3>Sign Up</h3>
              <p>Apply to join our affiliate program</p>
            </div>
            
            <div class="brand-how-card">
              <div class="brand-how-number">2</div>
              <h3>Get Your Link</h3>
              <p>Receive your unique tracking link</p>
            </div>
            
            <div class="brand-how-card">
              <div class="brand-how-number">3</div>
              <h3>Share & Promote</h3>
              <p>Share with your audience</p>
            </div>
            
            <div class="brand-how-card">
              <div class="brand-how-number">4</div>
              <h3>Earn Commission</h3>
              <p>Get paid for every sale</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Commission Structure -->
      <section class="container brand-section">
        <h2 class="brand-section-title brand-center">Commission Structure</h2>
        
        <div class="brand-commission-grid">
          <div class="brand-commission-card">
            <div class="brand-commission-tier">Starter</div>
            <div class="brand-commission-rate">10%</div>
            <p>0-25 sales per month</p>
          </div>
          
          <div class="brand-commission-card brand-commission-highlight">
            <div class="brand-commission-tier">Pro</div>
            <div class="brand-commission-rate">12%</div>
            <p>26-50 sales per month</p>
          </div>
          
          <div class="brand-commission-card">
            <div class="brand-commission-tier">Elite</div>
            <div class="brand-commission-rate">15%</div>
            <p>51+ sales per month</p>
          </div>
        </div>
      </section>
      <!-- Benefits -->
      <section class="brand-accent-section">
        <div class="container">
          <h2 class="brand-section-title brand-center-white">Affiliate Benefits</h2>
          
          <div class="brand-two-column-equal">
            <div class="brand-affiliate-benefit">
              <h3>Competitive Commissions</h3>
              <p>Earn up to 15% on every sale with our tiered commission structure</p>
            </div>
            
            <div class="brand-affiliate-benefit">
              <h3>30-Day Cookie Duration</h3>
              <p>You'll earn commission on purchases made within 30 days of click</p>
            </div>
            
            <div class="brand-affiliate-benefit">
              <h3>Marketing Materials</h3>
              <p>Access to banners, product images, and promotional content</p>
            </div>
            
            <div class="brand-affiliate-benefit">
              <h3>Real-Time Tracking</h3>
              <p>Monitor your clicks, conversions, and earnings in real-time</p>
            </div>
            
            <div class="brand-affiliate-benefit">
              <h3>Monthly Payouts</h3>
              <p>Get paid every month via PayPal or bank transfer</p>
            </div>
            
            <div class="brand-affiliate-benefit">
              <h3>Dedicated Support</h3>
              <p>Personal support from our affiliate team</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Who Should Join -->
      <section class="container brand-section">
        <div class="brand-two-column">
          <div class="brand-column">
            <h2 class="brand-section-title">Who Should Join?</h2>
            <p class="brand-paragraph">
              Our affiliate program is perfect for content creators, bloggers, influencers, 
              and anyone with an audience interested in home decor, wellness, or lifestyle products.
            </p>
            <div class="brand-ideal-list">
              <div class="brand-ideal-item">
                <h3>Lifestyle Bloggers</h3>
                <p>Share AURA in your home decor and wellness content</p>
              </div>
              <div class="brand-ideal-item">
                <h3>Instagram Influencers</h3>
                <p>Showcase our products in your aesthetic photos</p>
              </div>
              <div class="brand-ideal-item">
                <h3>YouTube Creators</h3>
                <p>Feature AURA in your vlogs and reviews</p>
              </div>
              <div class="brand-ideal-item">
                <h3>TikTok Creators</h3>
                <p>Create engaging content about home fragrance</p>
              </div>
            </div>
          </div>
          <div class="brand-column">
            <div class="brand-image-box" style="background-image: url('${BASE}images/affilate.jpg');"></div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="brand-cta-box-section">
        <div class="container">
          <div class="brand-cta-box">
            <h2>Ready to Start Earning?</h2>
            <p>Join hundreds of affiliates already earning with AURA</p>
            <a href="mailto:affiliates@aura.com" class="brand-cta-btn">Apply Now</a>
          </div>
        </div>
      </section>
    </main>
  `;
}

export function initAffiliatePage() {
  console.log('Affiliate page initialized');
}