// src/pages/candleCare.js

export async function CandleCarePage() {
  const BASE = import.meta.env.BASE_URL;
  return `
    <main class="info-page-main">
      <div class="info-page-hero">
        <div class="container">
          <h1 class="info-page-title">Candle Care</h1>
        </div>
      </div>
      <nav class="breadcrumbs">
        <div class="breadcrumbs-container">
          <ul class="breadcrumbs-list">
            <li class="breadcrumbs-item">
              <a href="#/" class="breadcrumbs-link">Home</a>
            </li>
            <li class="breadcrumbs-item">
              <span class="breadcrumbs-current">Candle Care</span>
            </li>
          </ul>
        </div>
      </nav>
      
      <div class="container info-page-container">
        <div class="info-page-content">
          <section class="info-section">
            <h2>How to Care for Your AURA Candles</h2>
            <p>Proper candle care ensures a clean, even burn and extends the life of your favorite AURA candles.</p>
            
           <img src="${BASE}images/candle2.png" alt="Candle Care">
          </section>
          
          <section class="info-section">
            <h2>First Burn</h2>
            <p>The first burn is the most important! Allow the wax to melt all the way to the edges of the container (typically 2-3 hours). This prevents tunneling and ensures an even burn for the life of your candle.</p>
            
            <div class="info-tips">
              <div class="info-tip">
                <span class="info-tip-icon">🔥</span>
                <div>
                  <h4>Trim the Wick</h4>
                  <p>Before each use, trim the wick to 1/4 inch for a clean, steady burn.</p>
                </div>
              </div>
              
              <div class="info-tip">
                <span class="info-tip-icon">⏰</span>
                <div>
                  <h4>Burn Time</h4>
                  <p>Never burn your candle for more than 4 hours at a time.</p>
                </div>
              </div>
              
              <div class="info-tip">
                <span class="info-tip-icon">🌬</span>
                <div>
                  <h4>Avoid Drafts</h4>
                  <p>Keep candles away from drafts, vents, and fans for an even burn.</p>
                </div>
              </div>
            </div>
          </section>
          
          <section class="info-section">
            <h2>Safety Tips</h2>
            <ul>
              <li>Never leave a burning candle unattended</li>
              <li>Keep candles away from children and pets</li>
              <li>Place candles on a stable, heat-resistant surface</li>
              <li>Keep candles away from flammable materials</li>
              <li>Extinguish candles before leaving a room</li>
              <li>Stop using when 1/2 inch of wax remains</li>
            </ul>
            
            <img src="/images/candle1.png" alt="Safety">
          </section>
          
          <section class="info-section">
            <h2>Storage</h2>
            <p>Store your candles in a cool, dry place away from direct sunlight. This helps preserve the fragrance and color of your candles.</p>
          </section>
          
          <section class="info-section">
            <h2>Recycling</h2>
            <p>Once your candle is finished, clean out the container with warm soapy water and reuse it! Our glass containers are perfect for storing small items, plants, or as decorative pieces.</p>
          </section>
        </div>
      </div>
    </main>
  `;
}

export function initCandleCarePage() {
  console.log('Candle Care page initialized');
}