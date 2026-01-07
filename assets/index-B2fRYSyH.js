(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();async function he(){const e="/aura-shop/";return`
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
         <div class="about-image" style="background-image: url('${e}images/about_as2.png');"></div>
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
          <div class="about-image" style="background-image: url('${e}images/about_as.png');"></div>
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
  `}const ve="modulepreload",ge=function(e){return"/aura-shop/"+e},X={},g=function(t,s,i){let a=Promise.resolve();if(s&&s.length>0){let u=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var o=u;document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),r=c?.nonce||c?.getAttribute("nonce");a=u(s.map(l=>{if(l=ge(l),l in X)return;X[l]=!0;const d=l.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":ve,d||(p.as="script"),p.crossOrigin="",p.href=l,r&&p.setAttribute("nonce",r),document.head.appendChild(p),d)return new Promise((w,C)=>{p.addEventListener("load",w),p.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(c){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=c,window.dispatchEvent(r),!r.defaultPrevented)throw c}return a.then(c=>{for(const r of c||[])r.status==="rejected"&&n(r.reason);return t().catch(n)})},G=[{id:"candles",name:"Candles",slug:"candles",description:"Aroma candles",image:"/aura-shop/images/categories/candles.jpg"},{id:"diffusers",name:"Diffusers",slug:"diffusers",description:"Aroma diffusers",image:"/aura-shop/images/categories/diffusers.jpg"},{id:"gift-sets",name:"Gift sets",slug:"gift-sets",description:"For special moments",image:"/aura-shop/images/categories/gift-sets.jpg"}],k=[{id:1,name:"Citrus Bloom",category:"candles",categoryLabel:"Aroma candle",price:29.99,image:"/aura-shop/images/aromacandle_1.png",images:["/aura-shop/images/aromacandle_3.png","/aura-shop/images/aromacandle_2.png","/aura-shop/images/aromacandle_1.png"],volume:"220ml",description:"Fresh & Energizing citrus candle",fullDescription:"A sophisticated scented candle designed for those who value warmth, coziness, and timeless aesthetics. Amber Wood blends the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.",inStock:!0,featured:!0},{id:2,name:"Vanilla Musk",category:"candles",categoryLabel:"Aroma candle",price:24.99,image:"/aura-shop/images/vanila.png",images:["/aura-shop/images/vanila.png","/aura-shop/images/vanila_2.png","/aura-shop/images/vanila_3.png"],volume:"220ml",description:"Sweet & Warm candle with vanilla and musk notes",fullDescription:"A sophisticated scented candle designed for those who value warmth, coziness, and timeless aesthetics. Amber Wood blends the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.",inStock:!0,featured:!0},{id:3,name:"Golden Hour",category:"candles",categoryLabel:"Aroma candle",price:32.99,image:"/aura-shop/images/golden.png",images:["/aura-shop/images/golden.png","/aura-shop/images/golden2.png","/aura-shop/images/golden3.png"],volume:"220ml",description:"Floral & Calming garden scent",fullDescription:"A sophisticated scented candle designed for those who value warmth, coziness, and timeless aesthetics. Amber Wood blends the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.",inStock:!0,featured:!0},{id:4,name:"Forest Mist",category:"candles",categoryLabel:"Aroma candle",price:27.99,image:"/aura-shop/images/cozy.png",images:["/aura-shop/images/cozy3.png","/aura-shop/images/cozy4.png","/aura-shop/images/cozy8.png"],volume:"220ml",description:"Relaxing lavender scent",fullDescription:"A sophisticated scented candle designed for those who value warmth, coziness, and timeless aesthetics. Amber Wood blends the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.",inStock:!0,featured:!1},{id:5,name:"Moonlit Garden Diffuser",category:"diffusers",categoryLabel:"Aroma-diffuser",price:38.99,image:"/aura-shop/images/moonlit.png",images:["/aura-shop/images/moonlit.png","/aura-shop/images/moonlit4.png","/aura-shop/images/moonlit3.png"],volume:"220ml",description:"Warm sandalwood diffuser",fullDescription:"A sophisticated scented diffuser designed for those who value warmth, coziness, and timeless aesthetics. Amber Wood blends the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.",inStock:!0,featured:!1},{id:6,name:"Eternal Flame Diffuser",category:"diffusers",categoryLabel:"Aroma-diffuser",price:34.99,image:"/aura-shop/images/eternal.png",images:["/aura-shop/images/eternal.png","/aura-shop/images/eternal2.png","/aura-shop/images/eternal3.png"],volume:"220ml",description:"Fresh ocean scent diffuser",fullDescription:"A sophisticated scented diffuser designed for those who value warmth, coziness, and timeless aesthetics. Amber Wood blends the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.",inStock:!0,featured:!1},{id:7,name:"Holiday Gift",category:"gift-sets",categoryLabel:"Gift set",price:89.99,image:"/aura-shop/images/gift2.png",images:["/aura-shop/images/gift15.png","/aura-shop/images/gift16.png","/aura-shop/images/gift17.png"],volume:"220ml",description:"Premium candle and diffuser set",fullDescription:"A sophisticated gift set designed for those who value warmth, coziness, and timeless aesthetics. This set includes premium candle and diffuser that blend the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.",inStock:!0,featured:!1},{id:8,name:"Winter Glow",category:"gift-sets",categoryLabel:"Gift set",price:89.99,image:"/aura-shop/images/gift3.png",images:["/aura-shop/images/gift12.png","/aura-shop/images/gift13.png","/aura-shop/images/gift14.png"],volume:"220ml",description:"Premium candle and diffuser set",fullDescription:"A sophisticated gift set designed for those who value warmth, coziness, and timeless aesthetics. This set includes premium candle and diffuser that blend the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.",inStock:!0,featured:!1},{id:9,name:"Cozy Advent",category:"gift-sets",categoryLabel:"Gift set",price:79.99,image:"/aura-shop/images/gift4.png",images:["/aura-shop/images/gift6.png","/aura-shop/images/gift10.png","/aura-shop/images/gift11.png"],volume:"220ml",description:"Exotic & Mystical gift set",fullDescription:"A sophisticated gift set designed for those who value warmth, coziness, and timeless aesthetics. This set includes premium candle and diffuser that blend the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.",inStock:!0,featured:!0},{id:10,name:"Holiday Scents",category:"gift-sets",categoryLabel:"Gift set",price:85.99,image:"/aura-shop/images/gift5.png",images:["/aura-shop/images/gift8.png","/aura-shop/images/gift7.png","/aura-shop/images/gift9.png"],volume:"220ml",description:"Sweet & Warm gift set",fullDescription:"A sophisticated gift set designed for those who value warmth, coziness, and timeless aesthetics. This set includes premium candle and diffuser that blend the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.",inStock:!0,featured:!0}];function Y(e){return e==="all"?k:k.filter(t=>t.category===e)}function J(e=4){return k.slice().reverse().slice(0,e)}function Q(e){return k.find(t=>t.id===parseInt(e))}function K(e){return e==="all"?{name:"All Products",slug:"all",description:"Browse all our products"}:G.find(t=>t.slug===e)}function Z(){return k}const I=Object.freeze(Object.defineProperty({__proto__:null,categories:G,getAllProducts:Z,getCategoryBySlug:K,getLatestProducts:J,getProductById:Q,getProductsByCategory:Y,products:k},Symbol.toStringTag,{value:"Module"}));function ee(e){const t="/aura-shop/",s=e.startsWith("/")?e.substring(1):e;return`${t}${s}`}function fe(e){return`
    <div class="testimonials-slider">
      <div class="testimonials-track">
        ${e.map((t,s)=>`
          <div class="testimonial-slide" data-index="${s}">
            <img src="${ee(t.image||t.avatar)}" alt="${t.name}">
            <div class="testimonial-content">
              <h3 class="testimonial-name">${t.name}</h3>
              <p class="testimonial-text">${t.text}</p>
            </div>
          </div>
        `).join("")}
      </div>
      
      <!-- Navigation dots -->
      <div class="testimonials-dots">
        ${e.map((t,s)=>`
          <button class="testimonial-dot ${s===0?"active":""}" data-index="${s}"></button>
        `).join("")}
      </div>
    </div>
  `}function be(){const e=document.querySelector(".testimonials-slider");if(!e)return;const t=e.querySelector(".testimonials-track"),s=e.querySelectorAll(".testimonial-slide"),i=e.querySelectorAll(".testimonial-dot");let a=0,n=0,o=0,c=!1,r=0;function u(p,w=!0){a=p;const C=-p*100;w?t.style.transition="transform 0.5s ease-out":t.style.transition="none",t.style.transform=`translateX(${C}%)`,i.forEach((pe,me)=>{pe.classList.toggle("active",me===p)})}i.forEach(p=>{p.addEventListener("click",()=>{const w=parseInt(p.dataset.index);u(w)})});function l(p){c=!0,n=p.type.includes("mouse")?p.pageX:p.touches[0].pageX,r=-a*t.offsetWidth,t.style.transition="none"}function d(p){if(!c)return;p.preventDefault(),o=p.type.includes("mouse")?p.pageX:p.touches[0].pageX;const w=o-n,C=r+w;t.style.transform=`translateX(${C}px)`}function m(){if(!c)return;c=!1;const p=o-n,w=t.offsetWidth*.2;Math.abs(p)>w?p>0&&a>0?u(a-1):p<0&&a<s.length-1?u(a+1):u(a):u(a)}t.addEventListener("mousedown",l),document.addEventListener("mousemove",d),document.addEventListener("mouseup",m),t.addEventListener("touchstart",l,{passive:!0}),t.addEventListener("touchmove",d,{passive:!1}),t.addEventListener("touchend",m),t.addEventListener("dragstart",p=>p.preventDefault()),u(0,!1)}function f(){const e=localStorage.getItem("aura_cart");return e?JSON.parse(e):[]}function q(e){localStorage.setItem("aura_cart",JSON.stringify(e)),$()}function S(e){const t=f(),s=t.find(i=>i.id===e.id);return s?s.quantity+=1:t.push({id:e.id,name:e.name,price:e.price,image:e.image,quantity:1}),q(t),t}function te(e,t){const s=f(),i=s.find(a=>a.id===e);return i&&(t<=0?_(e):(i.quantity=t,q(s))),s}function _(e){let t=f();return t=t.filter(s=>s.id!==e),q(t),t}function se(){localStorage.removeItem("aura_cart"),$()}function F(){return f().reduce((t,s)=>t+s.price*s.quantity,0)}function ae(){return f().reduce((t,s)=>t+s.quantity,0)}function $(){const e=ae(),t=document.querySelector(".header-cart-badge");t&&(e>0?(t.textContent=e,t.style.display="flex"):t.style.display="none")}const U=Object.freeze(Object.defineProperty({__proto__:null,addToCart:S,clearCart:se,getCartCount:ae,getCartItems:f,getCartTotal:F,removeFromCart:_,updateCartBadge:$,updateCartItemQuantity:te},Symbol.toStringTag,{value:"Module"}));function v(e,t,s="success"){const i=document.querySelector(".modal-overlay");i&&i.remove();const n=`
    <div class="modal-overlay">
      <div class="modal-container">
        <div class="modal-icon ${s}">
          ${{success:`
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="#4CAF50" stroke-width="3"/>
        <path d="M17 30L26 39L43 22" stroke="#4CAF50" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,error:`
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="#f44336" stroke-width="3"/>
        <path d="M20 20L40 40M40 20L20 40" stroke="#f44336" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,info:`
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="#2196F3" stroke-width="3"/>
        <path d="M30 20V32M30 40V42" stroke="#2196F3" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `}[s]}
        </div>
        <h2 class="modal-title">${e}</h2>
        <p class="modal-message">${t}</p>
        <button class="modal-button" id="modalCloseBtn">OK</button>
      </div>
    </div>
  `;document.body.insertAdjacentHTML("beforeend",n);const o=document.querySelector(".modal-overlay"),c=document.getElementById("modalCloseBtn");setTimeout(()=>{o.classList.add("modal-show")},10);const r=()=>{o.classList.remove("modal-show"),setTimeout(()=>{o.remove()},300)};c.addEventListener("click",r),o.addEventListener("click",l=>{l.target===o&&r()});const u=l=>{l.key==="Escape"&&(r(),document.removeEventListener("keydown",u))};document.addEventListener("keydown",u)}const ye=Object.freeze(Object.defineProperty({__proto__:null,showModal:v},Symbol.toStringTag,{value:"Module"}));let x=null;async function we(){return x||(x=await(await fetch("/aura-shop/data/content.json")).json()),x}async function ke(){const e=await we(),t=J(4),s="/aura-shop/";return`
    <!-- Hero Section -->
    <section class="hero-with-header">
      <div class="hero-content">
        <a href="#/catalog/all" class="btn btn-light hero-btn">${e.hero.buttonText}</a>
      </div>
    </section>
    
    <main>
      <!-- Products Section -->
      <section class="container" style="padding: 80px 0;">
        <h2 style="font-size: 32px; font-weight: 300; margin-bottom: 40px; text-align: left;">
          ${e.sections.products.title}
        </h2>
        <div class="grid grid-3">
          <a href="#/catalog/candles" class="card category-card">
            <div style="width: 445px; height: 400px; background-image: url('${s}images/aromacandle_1.png'); background-size: cover; background-position: center;"></div>
            <div class="card-content">
              <h3>Candles</h3>
              <p class="text-light text-small">Aroma candles</p>
            </div>
          </a>
          <a href="#/catalog/diffusers" class="card category-card">
            <div style="width: 445px; height: 400px; background-image: url('${s}images/diffuser_1.png'); background-size: cover; background-position: center;"></div>
            <div class="card-content">
              <h3>Diffusers</h3>
              <p class="text-light text-small">Aroma diffusers</p>
            </div>
          </a>
          <a href="#/catalog/gift-sets" class="card category-card">
            <div style="width: 445px; height: 400px; background-image: url('${s}images/gift_1.png'); background-size: cover; background-position: center;"></div>
            <div class="card-content">
              <h3>Gift sets</h3>
              <p class="text-light text-small">For special moments</p>
            </div>
          </a>
        </div>
      </section>

      <!-- Bestsellers Section -->
      <section class="bestsellers-section">
        <div class="container">
          <div class="bestsellers-header">
            <h2>${e.sections.bestsellers.title}</h2>
            <a href="#/catalog/all" class="explore-link">
              Explore
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div class="bestsellers-grid">
            ${t.map(i=>Se(i)).join("")}
          </div>
        </div>
      </section>

      <!-- Philosophy Section -->
      <section class="philosophy-section">
        <div class="container">
          <div class="philosophy-content">
            <div class="philosophy-image">
              
            </div>
            <div class="philosophy-text">
              <h2>${e.sections.philosophy.title}</h2>
              <p>${e.sections.philosophy.text1}</p>
              <a href="#/catalog/all" class="btn btn-outline">${e.sections.philosophy.buttonText}</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Stories Section -->
      <section class="home-blog-section">
        <div class="container">
          <div class="home-blog-header">
            <h2>${e.sections.stories.title}</h2>
            <a href="#/blog" class="home-blog-link">
              ${e.sections.stories.link}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div class="home-blog-grid">
            ${e.stories.map(i=>`
              <a href="#/blog/${i.id}" class="home-blog-card">
                <div class="home-blog-card-image" style="background-image: url('${ee(i.image)}');"></div>
              </a>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
        <section class="testimonials-section">
      <div class="container">
      <div class="testimonials-header">
        <h2 class="testimonials-title">${e.sections.testimonials.title}</h2>
      </div>
    
       ${fe(e.testimonials)}
      </div>
      </section>
    </main>
  `}function Se(e){return`
    <div class="bestseller-card" data-product-id="${e.id}">
      <a href="#/product/${e.id}" class="bestseller-image-link">
        <div class="bestseller-image" style="background-image: url('${e.image}');"></div>
      </a>
      
      <div class="bestseller-info">
        <a href="#/product/${e.id}" class="bestseller-name-link">
          <h3 class="bestseller-name">${e.name}</h3>
        </a>
        <p class="bestseller-category">${e.categoryLabel}</p>
        <p class="bestseller-price">$${e.price.toFixed(2)}</p>
        
        <div class="bestseller-buttons">
          <button 
            class="bestseller-btn bestseller-btn-buy buy-now-btn"
            data-product-id="${e.id}"
          >
            Buy now
          </button>
          <button 
            class="bestseller-btn bestseller-btn-cart add-to-cart-btn"
            data-product-id="${e.id}"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  `}function Ee(){document.querySelectorAll(".bestseller-card .add-to-cart-btn").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation();const s=parseInt(t.currentTarget.dataset.productId);g(async()=>{const{getProductById:i}=await Promise.resolve().then(()=>I);return{getProductById:i}},void 0).then(({getProductById:i})=>{const a=i(s);a&&(S(a),v("Added to Cart","${product.name} has been added to your cart","success"))})})}),document.querySelectorAll(".bestseller-card .buy-now-btn").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation();const s=parseInt(t.currentTarget.dataset.productId);g(async()=>{const{getProductById:i}=await Promise.resolve().then(()=>I);return{getProductById:i}},void 0).then(({getProductById:i})=>{const a=i(s);a&&(S(a),window.location.hash="#/checkout/step/1")})})})}let b=[],y=8;const ie=4;async function Ie(e){const t=e.category,s=K(t);return s?(b=Y(t),y=8,`
    <main class="catalog-main">
      <!-- Breadcrumbs -->
      <div class="container catalog-breadcrumbs-container">
        <div class="catalog-breadcrumbs">
          <a href="#/" class="breadcrumb-link">Home</a>
          <span class="breadcrumb-separator"> / </span>
          <a href="#/catalog/all" class="breadcrumb-link">Shop</a>
          <span class="breadcrumb-separator"> / </span>
          <span class="breadcrumb-current">${s.name}</span>
        </div>
      </div>

      <!-- Page Header -->
      <div class="container catalog-header">
        <h1 class="catalog-title">${s.name}</h1>
      </div>
      
      <!-- Sort Section -->
      <div class="container catalog-sort-container">
        <span class="sort-label">Sort by</span>
        <div class="sort-select-wrapper">
          <select class="sort-select" id="sortSelect">
            <option value="default">Highlights</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
          <svg class="sort-arrow" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4L6 8L10 4" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <!-- Products Grid -->
      <section class="container catalog-products-section">
        ${b.length>0?`
          <div class="catalog-products-grid" id="productsGrid">
            ${b.slice(0,y).map(i=>O(i)).join("")}
          </div>
          
          <!-- Load More Button -->
            <div class="catalog-load-more" id="loadMoreContainer">
                  ${b.length>y?`
                <button class="btn-load-more" id="loadMoreBtn">
                  LOAD MORE
                </button>
              `:""}
            </div>
          
       `:`
          <div class="catalog-empty">
            <p>No products found</p>
            <a href="#/" class="btn btn-primary">Continue shopping</a>
          </div>
        `}
      </section>
    </main>
  `):`
      <main class="catalog-main">
        <div class="container catalog-not-found">
          <h2>Category not found</h2>
          <a href="#/" class="btn btn-primary">Back to home</a>
        </div>
      </main>
    `}function O(e){return`
    <div class="catalog-product-card">
      <!-- Product Image - клікабельне -->
      <a href="#/product/${e.id}" class="catalog-product-link">
        <div class="catalog-product-image" style="background-image: url('${e.image}');"></div>
      </a>
      
      <!-- Product Info -->
      <div class="catalog-product-info">
        <a href="#/product/${e.id}" class="catalog-product-name-link">
          <h3 class="catalog-product-name">${e.name}</h3>
        </a>
        <p class="catalog-product-category">${e.categoryLabel}</p>
        <p class="catalog-product-price">$${e.price.toFixed(2)}</p>
        
        <!-- Buttons -->
        <div class="catalog-product-buttons">
          <button 
            class="catalog-btn catalog-btn-buy buy-now-btn"
            data-product-id="${e.id}">
              Buy now
          </button>
          <button 
            class="catalog-btn catalog-btn-cart add-to-cart-btn"
            data-product-id="${e.id}"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  `}function Pe(){const e=document.getElementById("sortSelect");e&&e.addEventListener("change",t=>{const s=t.target.value;let i=[...b];switch(s){case"price-low":i.sort((a,n)=>a.price-n.price);break;case"price-high":i.sort((a,n)=>n.price-a.price);break;case"newest":i.sort((a,n)=>n.id-a.id);break;case"default":default:i.sort((a,n)=>a.id-n.id);break}b=i,y=12,ne(),R()})}function R(){document.querySelectorAll(".add-to-cart-btn").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation();const s=parseInt(t.currentTarget.dataset.productId);g(async()=>{const{getProductById:i}=await Promise.resolve().then(()=>I);return{getProductById:i}},void 0).then(({getProductById:i})=>{const a=i(s);a&&(S(a),v("Added to Cart","${product.name} has been added to your cart","success"))})})}),document.querySelectorAll(".buy-now-btn").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation();const s=parseInt(t.currentTarget.dataset.productId);g(async()=>{const{getProductById:i}=await Promise.resolve().then(()=>I);return{getProductById:i}},void 0).then(({getProductById:i})=>{const a=i(s);a&&(S(a),window.location.hash="#/checkout/step/1")})})})}function ne(){const e=document.getElementById("productsGrid"),t=document.getElementById("loadMoreContainer");!e||!t||(e.innerHTML=b.slice(0,y).map(s=>O(s)).join(""),b.length>y?(t.innerHTML=`
      <button class="btn-load-more" id="loadMoreBtn">
        LOAD MORE
      </button>
    `,Ce()):t.innerHTML="")}function Ce(){const e=document.getElementById("loadMoreBtn");e&&e.addEventListener("click",()=>{y+=ie,ne(),R()})}function Be(){const e=document.getElementById("loadMoreBtn"),t=document.getElementById("productsGrid"),s=document.getElementById("loadMoreContainer");!e||!t||e.addEventListener("click",()=>{y+=ie;const i=b.slice(0,y);t.innerHTML=i.map(a=>O(a)).join(""),y>=b.length&&(s.innerHTML="")})}let E=0,h=null;async function $e(e){const t=parseInt(e.id);if(h=Q(t),!h)return`
      <main class="product-detail-main">
        <div class="container" style="padding: 150px 0; text-align: center;">
          <h2>Product not found</h2>
          <a href="#/catalog/all" class="btn btn-primary">Back to shop</a>
        </div>
      </main>
    `;E=0;const s=h.images||[h.image],i=xe(h);return`
    <main class="product-detail-main">
      <!-- Breadcrumbs -->
      <div class="container product-breadcrumbs-container">
        <div class="product-breadcrumbs">
          <a href="#/" class="breadcrumb-link">Home</a>
          <span class="breadcrumb-separator"> / </span>
          <a href="#/catalog/all" class="breadcrumb-link">Shop</a>
          <span class="breadcrumb-separator"> / </span>
          <span class="breadcrumb-current">${h.name}</span>
        </div>
      </div>

      <!-- Product Detail -->
      <section class="container product-detail-section">
        <div class="product-detail-grid">
         <!-- Gallery -->
          <div class="product-gallery">
            <div class="gallery-main" style="background-image: url('${s[0]}')">
              <button class="gallery-arrow gallery-arrow-left" id="galleryPrev">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>

              <button class="gallery-arrow gallery-arrow-right" id="galleryNext">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            
            <!-- Dots -->
            <div class="gallery-dots" id="galleryDots">
              ${s.map((a,n)=>`
                <button class="gallery-dot ${n===0?"active":""}" data-index="${n}"></button>
              `).join("")}
            </div>
          </div>

          <!-- Product Info -->
          <div class="product-info">
            <h1 class="product-name">${h.name}</h1>
            <p class="product-category">${h.categoryLabel}</p>
            
            <div class="product-price-row">
              <span class="product-price">$${h.price.toFixed(2)}</span>
              <span class="product-volume">${h.volume||"220 ml"}</span>
            </div>
            
            <!-- Quantity -->
            <div class="product-quantity">
              <button class="quantity-btn" id="quantityMinus">−</button>
              <input type="number" class="quantity-input" id="quantityInput" value="1" min="1">
              <button class="quantity-btn" id="quantityPlus">+</button>
            </div>
            
            <!-- Buttons -->
            <div class="product-buttons">
              <button class="product-btn product-btn-cart add-to-cart-btn" data-product-id="${h.id}">
                Add to cart
              </button>
              <button class="product-btn product-btn-buy" id="buyNowBtn">
                Buy now
              </button>
            </div>
            
            <!-- Description -->
            <div class="product-description">
              <h3 class="description-title">Product description</h3>
              <p class="description-text">${h.fullDescription||h.description}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- See Also -->
      <section class="container product-related-section">
        <div class="related-header">
          <h2 class="related-title">See also</h2>
          <a href="#/catalog/${h.category}" class="related-link">
            Explore →
          </a>
        </div>
        
        <div class="related-products-grid">
          ${i.map(a=>Ae(a)).join("")}
        </div>
      </section>
    </main>
  `}function Ae(e){return`
    <a href="#/product/${e.id}" class="related-product-card">
      <div class="related-product-image" style="background-image: url('${e.image}');"></div>
      <div class="related-product-info">
        <h3 class="related-product-name">${e.name}</h3>
        <p class="related-product-category">${e.categoryLabel}</p>
      </div>
    </a>
  `}function xe(e){return k.filter(t=>t.category===e.category&&t.id!==e.id).slice(0,4)}function Le(){if(!h)return;const e=h.images||[h.image],t=document.querySelector(".gallery-main"),s=document.querySelectorAll(".gallery-dot"),i=document.getElementById("galleryPrev"),a=document.getElementById("galleryNext"),n=document.getElementById("quantityInput"),o=document.getElementById("quantityMinus"),c=document.getElementById("quantityPlus"),r=document.querySelector(".add-to-cart-btn");n&&o&&c&&(o.addEventListener("click",()=>{const d=parseInt(n.value);d>1&&(n.value=d-1)}),c.addEventListener("click",()=>{const d=parseInt(n.value);n.value=d+1})),r&&r.addEventListener("click",()=>{const d=parseInt(n?.value||1);if(h){for(let m=0;m<d;m++)S(h);v("Added to Cart",`${h.name} (x${d}) has been added to your cart`,"success")}});const u=document.getElementById("buyNowBtn");u&&u.addEventListener("click",()=>{const d=parseInt(n?.value||1);if(h){for(let m=0;m<d;m++)S(h);window.location.hash="#/checkout/step/1"}});function l(d){E=d,t&&(t.style.backgroundImage=`url('${e[d]}')`),s.forEach((m,p)=>{m.classList.toggle("active",p===d)})}i&&i.addEventListener("click",()=>{const d=E>0?E-1:e.length-1;l(d)}),a&&a.addEventListener("click",()=>{const d=E<e.length-1?E+1:0;l(d)}),s.forEach(d=>{d.addEventListener("click",()=>{const m=parseInt(d.dataset.index);l(m)})})}let L=null;async function Me(){return L||(L=await(await fetch("/aura-shop/data/content.json")).json()),L}async function Te(){const e=await Me(),t=e.stories;return`
    <main class="blog-main">
      <!-- Page Header -->
      <div class="container blog-header">
        <h1 class="blog-title">${e.sections.stories.title}</h1>
      </div>
      
      <!-- Blog Grid -->
      <section class="container blog-section">
        <div class="blog-grid">
          ${t.map(s=>De(s)).join("")}
        </div>
      </section>
    </main>
  `}function De(e){return`
    <a href="#/blog/${e.id}" class="blog-card">
      <div class="blog-card-image" style="background-image: url('${e.image}');"></div>
      <div class="blog-card-content">
        <h3 class="blog-card-title">${e.title}</h3>
      </div>
    </a>
  `}let M=null;async function Ne(){return M||(M=await(await fetch("/aura-shop/data/content.json")).json()),M}async function qe(e){const t=await Ne(),s=parseInt(e.id),i=t.stories.find(a=>a.id===s);return i?`
    <main class="blog-post-main">
      <article class="blog-post-container">
        <!-- Hero Image -->
        <div class="blog-post-hero" style="background-image: url('${i.image}');"></div>
        
        <!-- Content -->
        <div class="blog-post-content">
          <div class="blog-post-meta">
            <span class="blog-post-date">${_e(i.date)}</span>
            <span class="blog-post-author">By ${i.author}</span>
          </div>
          
          <h1 class="blog-post-title">${i.title}</h1>
          
          <div class="blog-post-body">
            ${i.content}
          </div>
          
          <div class="blog-post-footer">
            <a href="#/blog" class="btn btn-outline">← Back to blog</a>
          </div>
        </div>
      </article>
    </main>
  `:`
      <main class="blog-post-main">
        <div class="container" style="padding: 150px 0; text-align: center;">
          <h2>Article not found</h2>
          <a href="#/blog" class="btn btn-primary" style="margin-top: 20px;">Back to blog</a>
        </div>
      </main>
    `}function _e(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function Fe(){const e={home:"Home",shop:"Shop",about:"About",contact:"Contact",cart:"Cart",account:"Account"};return`
    <header class="header">
      <nav class="header-nav">
        <a href="#/" class="nav-link">${e.home}</a>
        <a href="#/catalog/all" class="nav-link">${e.shop}</a>
        <a href="#/about" class="nav-link">${e.about}</a>
        <a href="#/contact" class="nav-link">${e.contact}</a>
      </nav>
      
      <div class="header-icons">
      <!-- Inline Search Form -->
        <div class="header-search-inline" id="headerSearchInline">
          <form class="header-search-form-inline" id="searchFormInline">
            <input 
              type="text" 
              class="header-search-input-inline" 
              id="searchInputInline" 
              placeholder="Search products..." 
              autocomplete="off"
            >
            <button type="button" class="header-search-close-inline" id="searchCloseInline">×</button>
          </form>
        </div>
        <button class="icon-btn" id="searchBtn" aria-label="Search">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
        
        <button class="icon-btn" id="cartBtn" aria-label="${e.cart}">
          <a href="#/cart" class="header-icon header-cart" aria-label="Shopping Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white">
              <path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 6H21" stroke-width="2"/>
              <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          <span class="header-cart-badge">0</span> <!-- ← ДОДАЙ ЦЕ -->
          </a>
        </button>
        
        <button class="icon-btn" id="userBtn" aria-label="${e.account}">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>
      </div>
<button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    </header>
  `}function Oe(){const e=document.getElementById("searchBtn"),t=document.getElementById("cartBtn"),s=document.getElementById("userBtn"),i=document.getElementById("mobileMenuBtn"),a=document.querySelector(".header"),n=document.getElementById("searchCloseInline"),o=document.getElementById("headerSearchInline"),c=document.getElementById("searchFormInline"),r=document.getElementById("searchInputInline");e&&o&&r&&e.addEventListener("click",l=>{if(l.stopPropagation(),o.classList.contains("active")){const m=r.value.trim();m&&(o.classList.remove("active"),window.location.hash=`#/search/${encodeURIComponent(m)}`,r.value="")}else o.classList.add("active"),setTimeout(()=>r.focus(),100)}),n&&o&&n.addEventListener("click",l=>{l.stopPropagation(),o.classList.remove("active"),r.value=""}),c&&r&&c.addEventListener("submit",l=>{l.preventDefault();const d=r.value.trim();d&&(o.classList.remove("active"),window.location.hash=`#/search/${encodeURIComponent(d)}`,r.value="")}),document.addEventListener("keydown",l=>{l.key==="Escape"&&o&&o.classList.contains("active")&&(o.classList.remove("active"),r.value="")}),document.addEventListener("click",l=>{o&&o.classList.contains("active")&&!o.contains(l.target)&&!e.contains(l.target)&&(o.classList.remove("active"),r.value="")}),t&&t.addEventListener("click",()=>{console.log("Cart clicked"),window.location.hash="#/cart"}),s&&s.addEventListener("click",()=>{console.log("User clicked"),g(async()=>{const{isLoggedIn:l}=await Promise.resolve().then(()=>ue);return{isLoggedIn:l}},void 0).then(({isLoggedIn:l})=>{l()?window.location.hash="#/profile":window.location.hash="#/login"})}),i&&a&&i.addEventListener("click",()=>{a.classList.toggle("mobile-menu-open")}),window.addEventListener("scroll",()=>{const l=window.location.hash;(l===""||l==="#"||l==="#/")&&(window.pageYOffset>100?a&&(a.classList.add("header-scrolled"),a.classList.remove("header-transparent")):a&&(a.classList.remove("header-scrolled"),a.classList.add("header-transparent")))});const u=window.location.hash;u===""||u==="#"||u==="#/"?a&&(a.classList.add("header-transparent"),a.classList.remove("header-scrolled")):a&&(a.classList.remove("header-transparent"),a.classList.add("header-scrolled"))}let T=null;async function Re(){return T||(T=await(await fetch("/aura-shop/data / content.json")).json()),T}function He(){const e={newsletter:{title:"Newsletter",description:"Subscribe for updates and get 10% off your first order.",placeholder:"E-Mail",buttonText:"SUBSCRIBE"},customerCare:{title:"Customer Care",links:[{text:"Shipping & Returns",url:"#/shipping"},{text:"Candle Care",url:"#/candle-care"},{text:"Refund Policy",url:"#/refund-policy"},{text:"Privacy Policy",url:"#/privacy-policy"},{text:"Terms of Service",url:"#/terms-of-service"}]},ourBrand:{title:"Our Brand",links:[{text:"About Us",url:"#/about"},{text:"Press Enquiries",url:"#/press"},{text:"Sustainability & Ethically",url:"#/sustainability"},{text:"Promotions",url:"#/promotions"},{text:"Wholesale Disclosure",url:"#/wholesale"},{text:"Affiliate Program",url:"#/affiliate"},{text:"Sustainability Efforts",url:"#/sustainability"}]},contact:{title:"Need Help? You Can Call Us",phone:"+XX (X) XXXXXXXXX",hours:[{days:"Monday - Friday",time:"09:00 - 21:00"},{days:"Saturday - Sunday",time:"10:00 - 18:00"}]},copyright:"2025 AURA. All rights reserved."};return`
    <footer class="footer">
      <div class="footer-content container">
        <!-- Newsletter -->
        <div class="footer-section emoji">
          <h3>${e.newsletter.title}</h3>
          <p>${e.newsletter.description}</p>
          <input 
            type="email" 
            class="newsletter-input" 
            placeholder="${e.newsletter.placeholder}"
            id="newsletterEmail"
          >
          <button class="btn btn-light subscribe-btn" id="subscribeBtn">
            ${e.newsletter.buttonText}
          </button>
           <!-- Contact -->
        <div class="smaylik">
          <h3>${e.contact.title}</h3>
          <p>${e.contact.phone}</p>
          ${e.contact.hours.map(t=>`
            <p>
              <strong>${t.days}</strong>
              ${t.time}
            </p>
          `).join("")}
        </div>
        </div>

        <!-- Customer Care -->
        <div class="footer-section domik">
          <h3>${e.customerCare.title}</h3>
          <ul class="footer-links">
            ${e.customerCare.links.map(t=>`
              <li><a href="${t.url}">${t.text}</a></li>
            `).join("")}
          </ul>
        </div>

        <!-- Our Brand -->
        <div class="footer-section">
          <h3>${e.ourBrand.title}</h3>
          <ul class="footer-links">
            ${e.ourBrand.links.map(t=>`
              <li><a href="${t.url}">${t.text}</a></li>
            `).join("")}
          </ul>
        </div>

       
      </div>

      <div class="footer-bottom">
        <p>${e.copyright}</p>
      </div>
    </footer>
  `}async function Xe(){const e=document.getElementById("subscribeBtn"),t=document.getElementById("newsletterEmail"),s=await Re();e&&t&&(e.addEventListener("click",()=>{const i=t.value.trim();if(!i){D("error","Please enter your email");return}if(!Ue(i)){D("error","Please enter a valid email address");return}console.log("Subscribe email:",i),D("success",s.messages.subscribeSuccess),t.value=""}),t.addEventListener("keypress",i=>{i.key==="Enter"&&e.click()}))}function Ue(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function D(e,t){const s=document.getElementById("subscribeModal");s&&s.remove();const i=document.createElement("div");i.id="subscribeModal",i.className="subscribe-modal",i.innerHTML=`
    <div class="subscribe-modal-overlay"></div>
    <div class="subscribe-modal-content ${e==="success"?"subscribe-modal-success":"subscribe-modal-error"}">
      <div class="subscribe-modal-icon">
        ${e==="success"?"✓":"✕"}
      </div>
      <h3 class="subscribe-modal-title">${e==="success"?"Success!":"Error"}</h3>
      <p class="subscribe-modal-message">${t}</p>
      <button class="subscribe-modal-btn" onclick="document.getElementById('subscribeModal').remove()">
        OK
      </button>
    </div>
  `,document.body.appendChild(i),e==="success"&&setTimeout(()=>{document.getElementById("subscribeModal")&&i.remove()},3e3),i.querySelector(".subscribe-modal-overlay").addEventListener("click",()=>{i.remove()});const n=o=>{o.key==="Escape"&&(i.remove(),document.removeEventListener("keydown",n))};document.addEventListener("keydown",n)}async function je(){return`
    <main class="contacts-main">
    <!-- Hero Section -->
    <!-- Breadcrumbs -->
    <div class="container contacts-breadcrumbs-container">
      <div class="contacts-breadcrumbs">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span class="breadcrumb-separator"> / </span>
        <span class="breadcrumb-current">Contact</span>
      </div>
    </div>
      <section class="contacts-hero">
        <div class="container"> <!-- ← Використовуємо стандартний container -->
          <div class="contacts-hero-content">
            <h1 class="contacts-hero-title">Get in Touch</h1>
            <p class="contacts-hero-subtitle">We'd love to hear from you</p>
          </div>
        </div>
      </section>
      <!-- Contact Info & Form Section -->
      <section class="container contacts-content-section">
        <div class="contacts-content-grid">
          
          <!-- Contact Information -->
          <div class="contacts-info">
            <h2 class="contacts-info-title">Contact Information</h2>
            
            <div class="contacts-info-block">
              <h3 class="contacts-info-label">Email</h3>
              <a href="mailto:hello@aura.com" class="contacts-info-link">hello@aura.com</a>
            </div>
            
            <div class="contacts-info-block">
              <h3 class="contacts-info-label">Phone</h3>
              <a href="tel:+380XXXXXXXXX" class="contacts-info-link">+380 (XX) XXX-XX-XX</a>
            </div>
            
            <div class="contacts-info-block">
              <h3 class="contacts-info-label">Working Hours</h3>
              <p class="contacts-info-text">Monday - Friday: 09:00 - 21:00</p>
              <p class="contacts-info-text">Saturday - Sunday: 10:00 - 18:00</p>
            </div>
            
            <div class="contacts-info-block">
              <h3 class="contacts-info-label">Address</h3>
              <p class="contacts-info-text">Rivne, Ukraine</p>
            </div>
            
            <div class="contacts-social">
              <h3 class="contacts-info-label">Follow Us</h3>
              <div class="contacts-social-links">
                <a href="#" class="contacts-social-link" aria-label="Instagram">
                  <img src="../../public/icons/instagram.svg" style= width="24" height="24" viewBox="0 0 24 24" fill="none" style="filter: brightness(0) saturate(100%) invert(60%);">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                    <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15Z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" class="contacts-social-link" aria-label="Facebook">
                  <img src="../../public/icons/facebook.svg" style= width="24" height="24" viewBox="0 0 24 24" fill="none" style="filter: brightness(0) saturate(100%) invert(60%);">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" class="contacts-social-link" aria-label="Pinterest">
                <img src="../../public/icons/pinterest.svg" style= width="24" height="24" viewBox="0 0 24 24" fill="none" style="filter: brightness(0) saturate(100%) invert(60%);">
                </a>
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 16.03 4.43 19.48 7.96 20.87C7.91 20.22 7.87 19.28 8.02 18.57L8.83 15.14C8.83 15.14 8.61 14.7 8.61 14.03C8.61 12.97 9.26 12.17 10.06 12.17C10.74 12.17 11.07 12.67 11.07 13.26C11.07 13.92 10.64 14.93 10.42 15.86C10.24 16.63 10.8 17.26 11.56 17.26C12.93 17.26 13.99 15.8 13.99 13.66C13.99 11.77 12.64 10.47 11.95 10.47C10.95 10.47 10.31 11.24 10.31 12.13C10.31 12.82 10.59 13.36 10.93 13.71C11.01 13.8 11.02 13.88 11 13.99L10.8 14.78C10.77 14.93 10.68 14.97 10.53 14.9C9.56 14.45 8.97 13.05 8.97 12.1C8.97 10.19 10.39 8.47 12.12 8.47C13.52 8.47 14.63 9.49 14.63 11.72C14.63 14.05 13.38 15.93 11.55 15.93C10.74 15.93 9.98 15.51 9.72 15C9.72 15 9.32 16.61 9.23 16.96C9.05 17.61 8.58 18.43 8.27 18.95C9.12 19.2 10.03 19.33 10.97 19.33C16.49 19.33 21 14.82 21 9.3C21 3.78 16.49 2 10.97 2H12Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contacts-form-container">
            <h2 class="contacts-form-title">Send us a Message</h2>
            <form class="contacts-form" id="contactForm">
              
              <div class="contacts-form-row">
                <div class="contacts-form-group">
                  <label for="firstName" class="contacts-form-label">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    class="contacts-form-input" 
                    required
                  >
                </div>
                
                <div class="contacts-form-group">
                  <label for="lastName" class="contacts-form-label">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    class="contacts-form-input" 
                    required
                  >
                </div>
              </div>
              
              <div class="contacts-form-group">
                <label for="email" class="contacts-form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  class="contacts-form-input" 
                  required
                >
              </div>
              
              <div class="contacts-form-group">
                <label for="subject" class="contacts-form-label">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  class="contacts-form-input" 
                  required
                >
              </div>
              
              <div class="contacts-form-group">
                <label for="message" class="contacts-form-label">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  class="contacts-form-textarea" 
                  rows="6" 
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="contacts-form-submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
          
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="contacts-faq-section">
        <div class="container">
          <h2 class="contacts-faq-title">Frequently Asked Questions</h2>
          
          <div class="contacts-faq-grid">
            <div class="contacts-faq-item">
              <h3 class="contacts-faq-question">How long does shipping take?</h3>
              <p class="contacts-faq-answer">
                Standard shipping takes 3-5 business days within Ukraine. 
                Express shipping is available for next-day delivery.
              </p>
            </div>
            
            <div class="contacts-faq-item">
              <h3 class="contacts-faq-question">Do you offer custom fragrances?</h3>
              <p class="contacts-faq-answer">
                Yes! We offer custom fragrance consultations. 
                Contact us to discuss your unique scent vision.
              </p>
            </div>
            
            <div class="contacts-faq-item">
              <h3 class="contacts-faq-question">What is your return policy?</h3>
              <p class="contacts-faq-answer">
                We accept returns within 30 days of purchase. 
                Products must be unused and in original packaging.
              </p>
            </div>
            
            <div class="contacts-faq-item">
              <h3 class="contacts-faq-question">Are your products eco-friendly?</h3>
              <p class="contacts-faq-answer">
                Absolutely. We use natural, sustainable materials and 
                recyclable packaging for all our products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `}function We(){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",t=>{t.preventDefault();const s=new FormData(e),i={firstName:s.get("firstName"),lastName:s.get("lastName"),email:s.get("email"),subject:s.get("subject"),message:s.get("message")};console.log("Form submitted:",i),v("Thank You!","Your message has been sent successfully. We will get back to you soon.","success"),e.reset()})}async function ze(){const e=f(),t=F();return`
    <main class="cart-main">
      <div class="container cart-container">
      <div class="cart-breadcrumbs-container">
      <div class="cart-breadcrumbs">
        <a href="#/" class="breadcrumb-link">Home</a>
        <span class="breadcrumb-separator"> / </span>
        <span class="breadcrumb-current">Cart</span>
      </div>
    </div>
        <h1 class="cart-title">My shopping cart</h1>
        
        <div class="cart-content">
          <!-- Cart Items -->
          <div class="cart-items-section">
            ${e.length>0?`
              <div class="cart-items" id="cartItemsContainer">
                ${e.map(s=>oe(s)).join("")}
              </div>
           `:`
              <div class="cart-empty">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <path d="M20 20L26.67 56.67C27.07 59.33 29.33 61.33 32 61.33H60C62.67 61.33 64.93 59.33 65.33 56.67L72 20H20Z" stroke="#ccc" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20 20H72" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
                  <path d="M33.33 26.67V16C33.33 12.67 36 10 39.33 10H52.67C56 10 58.67 12.67 58.67 16V26.67" stroke="#ccc" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2 class="cart-empty-title">Your cart is empty</h2>
                <p class="cart-empty-text">Looks like you haven't added anything to your cart yet</p>
                <a href="#/catalog/all" class="cart-empty-button">Start Shopping</a>
              </div>
            `} 
          </div>
          
          <!-- Cart Summary -->
          <div class="cart-summary">
            <div class="cart-summary-row">
              <span class="cart-summary-label">Subtotal:</span>
              <span class="cart-summary-value" id="cartSubtotal">$${t.toFixed(2)}</span>
            </div>
            
            <div class="cart-coupon">
              <label class="cart-coupon-label">Coupon code</label>
              <div class="cart-coupon-input-wrapper">
                <input 
                  type="text" 
                  class="cart-coupon-input" 
                  id="couponInput"
                  placeholder="Enter code"
                  ${e.length===0?"disabled":""}
                >
                <button 
                  class="cart-coupon-button" 
                  id="applyCouponBtn"
                  ${e.length===0?"disabled":""}
                >
                  Add code
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M8 5V11M5 8H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <button 
              class="cart-checkout-button" 
              id="checkoutBtn"
              ${e.length===0?"disabled":""}
            >
              Continue to checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  `}function oe(e){return`
    <div class="cart-item" data-product-id="${e.id}">
      <div class="cart-item-image" style="background-image: url('${e.image}');"></div>
      
      <div class="cart-item-details">
        <h3 class="cart-item-name">${e.name}</h3>
        
        <div class="cart-item-quantity">
          <span class="cart-quantity-label">Quantity:</span>
          <div class="cart-quantity-controls">
            <button class="cart-quantity-btn" data-action="decrease">−</button>
            <span class="cart-quantity-value">${e.quantity}</span>
            <button class="cart-quantity-btn" data-action="increase">+</button>
          </div>
        </div>
        
        <div class="cart-item-price-row">
          <span class="cart-price-label">Price:</span>
          <span class="cart-item-price">$${e.price.toFixed(2)}</span>
        </div>
      </div>
      
      <button class="cart-item-remove" data-product-id="${e.id}">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  `}function Ve(){const e=document.getElementById("cartItemsContainer"),t=document.getElementById("cartSubtotal"),s=document.getElementById("applyCouponBtn"),i=document.getElementById("couponInput"),a=document.getElementById("checkoutBtn");if(!e)return;function n(){const c=f(),r=F();if(c.length===0){window.location.reload();return}e.innerHTML=c.map(u=>oe(u)).join(""),t.textContent=`$${r.toFixed(2)}`,o()}function o(){document.querySelectorAll(".cart-quantity-btn").forEach(c=>{c.addEventListener("click",r=>{const u=r.target.closest(".cart-item"),l=parseInt(u.dataset.productId),d=r.target.dataset.action,m=parseInt(u.querySelector(".cart-quantity-value").textContent),p=d==="increase"?m+1:m-1;p>0&&(te(l,p),n())})}),document.querySelectorAll(".cart-item-remove").forEach(c=>{c.addEventListener("click",r=>{const u=parseInt(r.currentTarget.dataset.productId);_(u),n()})})}s&&s.addEventListener("click",()=>{if(!i.value.trim()){v("Error","Please enter a coupon code","error");return}v("Info","Coupon functionality coming soon!","info"),i.value=""}),a&&a.addEventListener("click",()=>{window.location.hash="#/checkout/step/1"}),o()}async function j(e){const t=e?.section||"info";let s;switch(t){case"orders":s=Ye();break;case"member-card":s=Je();break;case"settings":s=Qe();break;default:s=Ge()}return`
    <main class="profile-main">
      <div class="container profile-container">
      <div class="profile-breadcrumbs-container">
        <div class="profile-breadcrumbs">
          <a href="#/" class="breadcrumb-link">Home</a>
          <span class="breadcrumb-separator"> / </span>
          <span class="breadcrumb-current">Profile</span>
        </div>
      </div>
        <h1 class="profile-title">My profile</h1>
        
        <div class="profile-content">
          <!-- Sidebar -->
          <aside class="profile-sidebar">
            <nav class="profile-nav">
              <a href="#/profile" class="profile-nav-link ${t==="info"?"active":""}">My profile</a>
              <a href="#/profile/orders" class="profile-nav-link ${t==="orders"?"active":""}">My orders</a>
              <a href="#/profile/member-card" class="profile-nav-link ${t==="member-card"?"active":""}">Member card</a>
              <a href="#/profile/settings" class="profile-nav-link ${t==="settings"?"active":""}">Settings</a>
             <button class="profile-logout-btn" id="logoutBtn">Log out</button> 
            </nav>
          </aside>
          
          <!-- Content -->
          <div class="profile-section-content">
            ${s}
          </div>
        </div>
      </div>
    </main>
  `}function Ge(){const e=P();return`
    <div class="profile-form-section">
      <form class="profile-form" id="profileForm">
        <div class="profile-form-group">
          <label class="profile-form-label">First name</label>
          <input 
            type="text" 
            class="profile-form-input" 
            placeholder="Enter your first name"
            id="firstName"
            value="${e.firstName||""}"
          >
        </div>
        
        <div class="profile-form-group">
          <label class="profile-form-label">Last name</label>
          <input 
            type="text" 
            class="profile-form-input" 
            placeholder="Enter your last name"
            id="lastName"
            value="${e.lastName||""}"
          >
        </div>
        
        <div class="profile-form-group">
          <label class="profile-form-label">Email</label>
          <input 
            type="email" 
            class="profile-form-input" 
            placeholder="Enter your email address"
            id="email"
            value="${e.email||""}"
          >
        </div>
        
        <div class="profile-form-group">
          <label class="profile-form-label">Phone number</label>
          <input 
            type="tel" 
            class="profile-form-input" 
            placeholder="Enter your phone number"
            id="phone"
            value="${e.phone||""}"
          >
        </div>
        
        <button type="submit" class="profile-update-btn">
          Update info
        </button>
      </form>
    </div>
  `}function Ye(){const e=Ke();return e.length===0?`
      <div class="profile-empty-state">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <rect x="15" y="25" width="50" height="45" stroke="#ddd" stroke-width="2" rx="2"/>
          <path d="M25 25V20C25 17 27 15 30 15H50C53 15 55 17 55 20V25" stroke="#ddd" stroke-width="2"/>
          <circle cx="40" cy="47" r="8" stroke="#ddd" stroke-width="2"/>
          <path d="M40 43V51M36 47H44" stroke="#ddd" stroke-width="2"/>
        </svg>
        <h3 class="profile-empty-title">No orders yet</h3>
        <p class="profile-empty-text">You haven't placed any orders. Start shopping to see your orders here.</p>
        <a href="#/catalog/all" class="profile-empty-btn">Start Shopping</a>
      </div>
    `:`
    <div class="orders-section">
      <div class="orders-list">
        ${e.map(t=>`
          <div class="order-card">
            <div class="order-header">
              <div class="order-info">
                <span class="order-number">Order #${t.id}</span>
                <span class="order-date">${Ze(t.date)}</span>
              </div>
              <span class="order-status order-status-${t.status.toLowerCase()}">${t.status}</span>
            </div>
            
            <div class="order-items">
              ${t.items.map(s=>`
                <div class="order-item">
                  <div class="order-item-image" style="background-image: url('${s.image}');"></div>
                  <div class="order-item-details">
                    <h4 class="order-item-name">${s.name}</h4>
                    <p class="order-item-quantity">Quantity: ${s.quantity}</p>
                  </div>
                  <span class="order-item-price">$${(s.price*s.quantity).toFixed(2)}</span>
                </div>
              `).join("")}
            </div>
            
            <div class="order-footer">
              <span class="order-total">Total: $${t.total.toFixed(2)}</span>
              <button class="order-details-btn" onclick="alert('Order details coming soon')">View Details</button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Je(){const e=P(),t=e.memberLevel||"Silver",s=e.points||0,i=tt(t);return`
    <div class="member-card-section">
      <div class="member-card">
        <div class="member-card-header">
          <h3 class="member-card-title">AURA Member</h3>
          <span class="member-card-level member-level-${t.toLowerCase()}">${t}</span>
        </div>
        
        <div class="member-card-body">
          <div class="member-card-name">${e.firstName||"Guest"} ${e.lastName||"User"}</div>
          <div class="member-card-id">Member ID: ${et()}</div>
        </div>
        
        <div class="member-card-footer">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="35" stroke="white" stroke-width="2" opacity="0.2"/>
            <circle cx="40" cy="40" r="25" stroke="white" stroke-width="2" opacity="0.3"/>
          </svg>
        </div>
      </div>
      
      <div class="member-benefits">
        <div class="member-points-card">
          <h4 class="member-section-title">Your Points</h4>
          <div class="member-points-display">
            <span class="member-points-number">${s}</span>
            <span class="member-points-label">points</span>
          </div>
          <div class="member-progress">
            <div class="member-progress-bar">
              <div class="member-progress-fill" style="width: ${s/i*100}%"></div>
            </div>
            <p class="member-progress-text">${i-s} points to ${re(t)} level</p>
          </div>
        </div>
        
        <div class="member-perks">
          <h4 class="member-section-title">Your Benefits</h4>
          <ul class="member-perks-list">
            ${st(t).map(a=>`
              <li class="member-perk-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="#b8927d" stroke-width="1.5"/>
                  <path d="M6 10L9 13L14 7" stroke="#b8927d" stroke-width="1.5"/>
                </svg>
                <span>${a}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    </div>
  `}function Qe(){const e=P();return`
    <div class="settings-section">
      <div class="settings-group">
        <h3 class="settings-group-title">Account Settings</h3>
        
        <div class="settings-item">
          <div class="settings-item-info">
            <h4 class="settings-item-title">Email Notifications</h4>
            <p class="settings-item-description">Receive updates about orders and promotions</p>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="emailNotifications" ${e.emailNotifications!==!1?"checked":""}>
            <span class="settings-toggle-slider"></span>
          </label>
        </div>
        
        <div class="settings-item">
          <div class="settings-item-info">
            <h4 class="settings-item-title">Newsletter</h4>
            <p class="settings-item-description">Get candle tips and exclusive offers</p>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="newsletter" ${e.newsletter!==!1?"checked":""}>
            <span class="settings-toggle-slider"></span>
          </label>
        </div>
        
        <div class="settings-item">
          <div class="settings-item-info">
            <h4 class="settings-item-title">SMS Notifications</h4>
            <p class="settings-item-description">Receive order updates via SMS</p>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="smsNotifications" ${e.smsNotifications===!0?"checked":""}>
            <span class="settings-toggle-slider"></span>
          </label>
        </div>
        </div>
      
      <div class="settings-group">
        <h3 class="settings-group-title">Privacy</h3>
        
        <div class="settings-item">
          <div class="settings-item-info">
            <h4 class="settings-item-title">Profile Visibility</h4>
            <p class="settings-item-description">Make your profile visible to other members</p>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="profileVisibility" ${e.profileVisibility===!0?"checked":""}>
            <span class="settings-toggle-slider"></span>
          </label>
        </div>
      </div>
      
      <div class="settings-group">
        <h3 class="settings-group-title">Password</h3>
        
        <form class="settings-password-form" id="passwordForm">
          <div class="profile-form-group">
            <label class="profile-form-label">Current Password</label>
            <input 
              type="password" 
              class="profile-form-input" 
              placeholder="Enter current password"
              id="currentPassword"
            >
          </div>
          
          <div class="profile-form-group">
            <label class="profile-form-label">New Password</label>
            <input 
              type="password" 
              class="profile-form-input" 
              placeholder="Enter new password"
              id="newPassword"
            >
          </div>
          
          <div class="profile-form-group">
            <label class="profile-form-label">Confirm New Password</label>
            <input 
              type="password" 
              class="profile-form-input" 
              placeholder="Confirm new password"
              id="confirmPassword"
            >
          </div>
          
          <button type="submit" class="settings-update-btn">
            Update Password
          </button>
        </form>
      </div>
      
      <div class="settings-group settings-danger-zone">
        <h3 class="settings-group-title">Danger Zone</h3>
        
        <button class="settings-danger-btn" id="deleteAccountBtn">
          Delete Account
        </button>
        <p class="settings-danger-text">Once you delete your account, there is no going back. Please be certain.</p>
      </div>
    </div>
  `}function P(){const e=localStorage.getItem("aura_user");return e?JSON.parse(e):{}}function N(e){localStorage.setItem("aura_user",JSON.stringify(e))}function Ke(){const e=localStorage.getItem("aura_orders");return e?JSON.parse(e):[]}function Ze(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function et(){const e=P();if(e.memberId)return e.memberId;const t="AU"+Math.random().toString(36).substr(2,9).toUpperCase();return e.memberId=t,N(e),t}function re(e){const t=["Silver","Gold","Platinum"],s=t.indexOf(e);return s<t.length-1?t[s+1]:"Platinum"}function tt(e){return{Silver:500,Gold:1e3,Platinum:2e3}[re(e)]||2e3}function st(e){const t={Silver:["5% discount on all purchases","Early access to new collections","Birthday gift","Free shipping on orders over $50"],Gold:["10% discount on all purchases","Early access to new collections","Birthday gift + bonus points","Free shipping on all orders","Exclusive member-only events"],Platinum:["15% discount on all purchases","Priority early access","Premium birthday gift + double points","Free express shipping","VIP member events","Personal shopping assistant"]};return t[e]||t.Silver}function at(){const e=document.getElementById("profileForm"),t=document.getElementById("passwordForm"),s=document.getElementById("deleteAccountBtn");e&&e.addEventListener("submit",n=>{n.preventDefault();const o=P();o.firstName=document.getElementById("firstName").value,o.lastName=document.getElementById("lastName").value,o.email=document.getElementById("email").value,o.phone=document.getElementById("phone").value,N(o),v("Success","Your profile has been updated successfully","success")}),t&&t.addEventListener("submit",n=>{n.preventDefault(),document.getElementById("currentPassword").value;const o=document.getElementById("newPassword").value,c=document.getElementById("confirmPassword").value;if(o!==c){v("Error","New passwords do not match","error");return}if(o.length<8){v("Error","Password must be at least 8 characters long","error");return}v("Success","Your password has been updated successfully","success"),t.reset()}),s&&s.addEventListener("click",()=>{confirm("Are you sure you want to delete your account? This action cannot be undone.")&&(localStorage.removeItem("aura_user"),localStorage.removeItem("aura_orders"),v("Success","Your account has been deleted","info"),setTimeout(()=>{window.location.hash="#/"},2e3))}),document.querySelectorAll(".settings-toggle input").forEach(n=>{n.addEventListener("change",o=>{const c=P();c[o.target.id]=o.target.checked,N(c)})});const a=document.getElementById("logoutBtn");a&&a.addEventListener("click",()=>{g(async()=>{const{logout:n}=await Promise.resolve().then(()=>ue);return{logout:n}},void 0).then(({logout:n})=>{n()})})}async function ce(){return`
    <main class="auth-main">
      <div class="container auth-container">
        <h1 class="auth-title">Log in / sign up</h1>
        
        <div class="auth-form-wrapper">
          <form class="auth-form" id="loginForm">
            <div class="auth-form-group">
              <label class="auth-form-label">Email</label>
              <input 
                type="email" 
                class="auth-form-input" 
                placeholder="Enter your email address"
                id="loginEmail"
                required
              >
            </div>
            
            <div class="auth-form-group">
              <label class="auth-form-label">Password</label>
              <input 
                type="password" 
                class="auth-form-input" 
                placeholder="Enter your password"
                id="loginPassword"
                required
              >
            </div>
            
            <a href="#/forgot-password" class="auth-forgot-link">forgot password?</a>
            
            <button type="submit" class="auth-submit-btn">
              Log in
            </button>
            
            <div class="auth-divider">
              <span>or</span>
            </div>
            
            <button type="button" class="auth-google-btn" id="googleSignInBtn">
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
                <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
                <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.335z"/>
                <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
              </svg>
              Sign in with Google
            </button>
            
            <button type="button" class="auth-signup-btn" id="goToSignupBtn">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </main>
  `}async function le(){return`
    <main class="auth-main">
      <div class="container auth-container">
        <h1 class="auth-title">Sign up</h1>
        
        <div class="auth-form-wrapper">
          <form class="auth-form" id="signupForm">
            <div class="auth-form-group">
              <label class="auth-form-label">Email</label>
              <input 
                type="email" 
                class="auth-form-input" 
                placeholder="Enter your email address"
                id="signupEmail"
                required
              >
            </div>
            
            <div class="auth-form-group">
              <label class="auth-form-label">First name</label>
              <input 
                type="text" 
                class="auth-form-input" 
                placeholder="Enter your first name"
                id="signupFirstName"
                required
              >
            </div>
            
            <div class="auth-form-group">
              <label class="auth-form-label">Last name</label>
              <input 
                type="text" 
                class="auth-form-input" 
                placeholder="Enter your last name"
                id="signupLastName"
                required
              >
            </div>
            
            <div class="auth-form-group">
              <label class="auth-form-label">Password</label>
              <input 
                type="password" 
                class="auth-form-input" 
                placeholder="Enter your password"
                id="signupPassword"
                required
              >
            </div>
            
            <div class="auth-form-group">
              <label class="auth-form-label">Phone number</label>
              <input 
                type="tel" 
                class="auth-form-input" 
                placeholder="Enter your phone number"
                id="signupPhone"
              >
            </div>
            
            <button type="submit" class="auth-submit-btn">
              Create account
            </button>
            
            <div class="auth-divider">
              <span>or</span>
            </div>
            
            <button type="button" class="auth-google-btn" id="googleSignUpBtn">
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
                <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
                <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.335z"/>
                <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
              </svg>
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </main>
  `}function de(){const e=document.getElementById("loginForm"),t=document.getElementById("signupForm"),s=document.getElementById("goToSignupBtn"),i=document.getElementById("googleSignInBtn"),a=document.getElementById("googleSignUpBtn");e&&e.addEventListener("submit",n=>{n.preventDefault();const o=document.getElementById("loginEmail").value;document.getElementById("loginPassword").value;const c=localStorage.getItem("aura_user");if(c){const r=JSON.parse(c);if(r.email===o)localStorage.setItem("aura_isLoggedIn","true"),v("Success","Welcome back, "+r.firstName+"!","success"),setTimeout(()=>{window.location.hash="#/profile"},1500);else{v("Error","Invalid email or password","error");return}}else{v("Error","No account found. Please sign up first.","error");return}}),t&&t.addEventListener("submit",n=>{n.preventDefault();const o=document.getElementById("signupEmail").value,c=document.getElementById("signupFirstName").value,r=document.getElementById("signupLastName").value,u=document.getElementById("signupPassword").value,l=document.getElementById("signupPhone").value;if(u.length<8){v("Error","Password must be at least 8 characters long","error");return}const d={email:o,firstName:c,lastName:r,phone:l,isLoggedIn:!0,memberLevel:"Silver",points:0};localStorage.setItem("aura_user",JSON.stringify(d)),localStorage.setItem("aura_isLoggedIn","true"),v("Success","Account created successfully!","success"),setTimeout(()=>{window.location.hash="#/profile"},1500)}),s&&s.addEventListener("click",()=>{window.location.hash="#/signup"}),i&&i.addEventListener("click",()=>{v("Info","Google Sign-In coming soon!","info")}),a&&a.addEventListener("click",()=>{v("Info","Google Sign-Up coming soon!","info")})}function H(){return localStorage.getItem("aura_isLoggedIn")==="true"}function it(){localStorage.removeItem("aura_isLoggedIn"),v("Success","You have been logged out","success"),setTimeout(()=>{window.location.hash="#/login"},1500)}const ue=Object.freeze(Object.defineProperty({__proto__:null,Login:ce,Signup:le,initAuth:de,isLoggedIn:H,logout:it},Symbol.toStringTag,{value:"Module"}));async function W(){const e=f();if(e.length===0)return`
      <main class="checkout-main">
        <div class="container">
          <div class="checkout-empty">
            <h2>Your cart is empty</h2>
            <p>Add some items to proceed to checkout</p>
            <a href="#/catalog/all" class="btn-primary">Continue Shopping</a>
          </div>
        </div>
      </main>
    `;const s=window.location.hash.match(/checkout\/step\/(\d)/),i=s?parseInt(s[1]):1;return`
    <main class="checkout-main">
      <div class="container checkout-container">
        ${nt(i)}
        
        <div class="checkout-content">
          <div class="checkout-form-section">
            ${ot(i)}
          </div>
          
          <div class="checkout-cart-section">
            ${dt(e)}
          </div>
        </div>
      </div>
    </main>
  `}function nt(e){const t=[{number:1,label:"Personal info"},{number:2,label:"Delivery"},{number:3,label:"Payment method"},{number:4,label:"Confirmation"}];return`
    <div class="checkout-progress">
      ${t.map((s,i)=>{const a=s.number===e,n=s.number<e,o=i===t.length-1;return`
          <div class="checkout-progress-item ${a?"active":""} ${n?"completed":""}">
            <div class="checkout-progress-step">
              <div class="checkout-progress-circle">
                ${n?"✓":s.number}
              </div>
              <span class="checkout-progress-label">${s.label}</span>
            </div>
            ${o?"":'<div class="checkout-progress-line"></div>'}
          </div>
        `}).join("")}
    </div>
  `}function ot(e){switch(e){case 1:return z();case 2:return rt();case 3:return ct();case 4:return lt();default:return z()}}function z(){const e=H(),t=e?JSON.parse(localStorage.getItem("aura_user")||"{}"):{};return`
    <div class="checkout-step">
      <h2 class="checkout-step-title">Personal info</h2>
      
      ${e?`
        <div class="checkout-profile-option">
          <label class="checkout-checkbox">
            <input type="checkbox" id="useProfileData" checked>
            <span>Use my profile data</span>
          </label>
        </div>
      `:`
        <div class="checkout-auth-prompt">
          <p>Already have an account? <a href="#/login" class="checkout-link">Log in</a></p>
          <p>New at Aura? <a href="#/signup" class="checkout-link">Sign up</a></p>
        </div>
      `}
      
      <form class="checkout-form" id="personalInfoForm">
        <div class="checkout-form-group">
          <label class="checkout-form-label">Full name</label>
          <input 
            type="text" 
            class="checkout-form-input" 
            placeholder="Enter your full name"
            id="fullName"
            value="${e?t.firstName+" "+t.lastName:""}"
            required
          >
        </div>
        
        <div class="checkout-form-group">
          <label class="checkout-form-label">Email</label>
          <input 
            type="email" 
            class="checkout-form-input" 
            placeholder="Enter your email address"
            id="email"
            value="${e?t.email:""}"
            required
          >
        </div>
        
        <div class="checkout-form-group">
          <label class="checkout-form-label">Phone number</label>
          <input 
            type="tel" 
            class="checkout-form-input" 
            placeholder="Enter your phone number"
            id="phone"
            value="${e&&t.phone||""}"
            required
          >
        </div>
        
        <button type="submit" class="checkout-btn-next">
          Next
        </button>
      </form>
    </div>
  `}function rt(){const e=JSON.parse(localStorage.getItem("aura_checkout_data")||"{}");return`
    <div class="checkout-step">
      <h2 class="checkout-step-title">Delivery</h2>
      
      <form class="checkout-form" id="deliveryForm">
        <div class="checkout-form-group">
          <label class="checkout-form-label">Country</label>
          <select class="checkout-form-select" id="country" required>
            <option value="">Choose your country</option>
            <option value="Ukraine" ${e.country==="Ukraine"?"selected":""}>Ukraine</option>
            <option value="USA">USA</option>
            <option value="UK">United Kingdom</option>
            <option value="Poland">Poland</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
        
        <div class="checkout-form-row">
          <div class="checkout-form-group">
            <label class="checkout-form-label">City</label>
            <input 
              type="text" 
              class="checkout-form-input" 
              placeholder="Enter your city"
              id="city"
              value="${e.city||""}"
              required
            >
          </div>
          
          <div class="checkout-form-group">
            <label class="checkout-form-label">ZIP code</label>
            <input 
              type="text" 
              class="checkout-form-input" 
              placeholder="ZIP code"
              id="zipCode"
              value="${e.zipCode||""}"
              required
            >
          </div>
        </div>
        
        <div class="checkout-form-row">
          <div class="checkout-form-group checkout-form-group-wide">
            <label class="checkout-form-label">Street address</label>
            <input 
              type="text" 
              class="checkout-form-input" 
              placeholder="Enter your street address"
              id="street"
              value="${e.street||""}"
              required
            >
          </div>
          
          <div class="checkout-form-group">
            <label class="checkout-form-label">Apt. number</label>
            <input 
              type="text" 
              class="checkout-form-input" 
              placeholder="Apt. number"
              id="apartment"
              value="${e.apartment||""}"
            >
          </div>
        </div>
        
        <div class="checkout-form-actions">
          <button type="button" class="checkout-btn-back" id="backBtn">
            Back
          </button>
          <button type="submit" class="checkout-btn-next">
            Next
          </button>
        </div>
      </form>
    </div>
  `}function ct(){const e=JSON.parse(localStorage.getItem("aura_checkout_data")||"{}");return A(),`
    <div class="checkout-step">
      <h2 class="checkout-step-title">Payment</h2>
      
      <form class="checkout-form" id="paymentForm">
        <div class="checkout-form-group">
          <label class="checkout-form-label">Cardholder's name</label>
          <input 
            type="text" 
            class="checkout-form-input" 
            placeholder="Enter your full name"
            id="cardholderName"
            value="${e.cardholderName||""}"
            required
          >
        </div>
        
        <div class="checkout-form-group">
          <label class="checkout-form-label">Card number</label>
          <input 
            type="text" 
            class="checkout-form-input" 
            placeholder="Enter your card number"
            id="cardNumber"
            maxlength="19"
            required
          >
        </div>
        
        <div class="checkout-form-row">
          <div class="checkout-form-group">
            <label class="checkout-form-label">Expiration date</label>
            <input 
              type="text" 
              class="checkout-form-input" 
              placeholder="MM/YY"
              id="expirationDate"
              maxlength="5"
              required
            >
          </div>
          
          <div class="checkout-form-group">
            <label class="checkout-form-label">CVV</label>
            <input 
              type="text" 
              class="checkout-form-input" 
              placeholder="Enter your CVV code"
              id="cvv"
              maxlength="3"
              required
            >
          </div>
        </div>
        
        <div class="checkout-terms">
          <label class="checkout-checkbox">
            <input type="checkbox" id="agreeTerms" required>
            <span>I agree to the <a href="#/terms" class="checkout-link">Terms & Conditions</a></span>
          </label>
        </div>
        
        <div class="checkout-form-actions">
          <button type="button" class="checkout-btn-back" id="backBtn">
            Back
          </button>
          <button type="submit" class="checkout-btn-next">
            Next
          </button>
        </div>
      </form>
    </div>
  `}function lt(){const e=JSON.parse(localStorage.getItem("aura_checkout_data")||"{}");return A(),`
    <div class="checkout-step">
      <h2 class="checkout-step-title">Confirmation</h2>
      
      <div class="checkout-confirmation">
        <div class="checkout-confirmation-item">
          <strong>Recipient:</strong> ${e.fullName||"N/A"}
        </div>
        <div class="checkout-confirmation-item">
          <strong>Phone number:</strong> ${e.phone||"N/A"}
        </div>
        <div class="checkout-confirmation-item">
        <strong>Delivery:</strong> ${e.street||"N/A"}${e.apartment?", Apt. "+e.apartment:""}, ${e.city||"N/A"}, ${e.zipCode||"N/A"}
        </div>
        <div class="checkout-confirmation-item">
          <strong>Payment method:</strong> By card
        </div>
      </div>
      
      <div class="checkout-form-actions">
        <button type="button" class="checkout-btn-back" id="backBtn">
          Back
        </button>
        <button type="button" class="checkout-btn-confirm" id="confirmBtn">
          Confirm & Pay
        </button>
      </div>
    </div>
  `}function dt(e){const{subtotal:t,discount:s,delivery:i,total:a}=A();return`
    <div class="checkout-cart">
      <h3 class="checkout-cart-title">Cart</h3>
      
      <div class="checkout-cart-items">
        ${e.map(n=>`
          <div class="checkout-cart-item">
            <div class="checkout-cart-item-image" style="background-image: url('${n.image}')"></div>
            <div class="checkout-cart-item-details">
              <h4 class="checkout-cart-item-name">${n.name}</h4>
              <p class="checkout-cart-item-quantity">Quantity: ${n.quantity}</p>
            </div>
            <div class="checkout-cart-item-price">$${(n.price*n.quantity).toFixed(2)}</div>
          </div>
        `).join("")}
      </div>
      
      <div class="checkout-cart-totals">
        <div class="checkout-cart-total-row">
          <span>Subtotal:</span>
          <span>$${t.toFixed(2)}</span>
        </div>
        ${s>0?`
          <div class="checkout-cart-total-row checkout-cart-discount">
            <span>Coupon:</span>
            <span>-$${s.toFixed(2)}</span>
          </div>
        `:""}
        ${i>0?`
          <div class="checkout-cart-total-row">
            <span>Delivery:</span>
            <span>$${i.toFixed(2)}</span>
          </div>
        `:""}
        <div class="checkout-cart-total-row checkout-cart-total-final">
          <strong>Total:</strong>
          <strong>$${a.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  `}function A(){const t=f().reduce((n,o)=>n+o.price*o.quantity,0),s=20,i=5,a=Math.max(0,t+i-s);return{subtotal:t,discount:s,delivery:i,total:a}}function ut(){const t=window.location.hash.match(/checkout\/step\/(\d)/),s=t?parseInt(t[1]):1;if(s===1){const i=document.getElementById("personalInfoForm"),a=document.getElementById("useProfileData");a&&a.addEventListener("change",n=>{const o=JSON.parse(localStorage.getItem("aura_user")||"{}"),c=document.getElementById("fullName"),r=document.getElementById("email"),u=document.getElementById("phone");n.target.checked?(c.value=o.firstName+" "+o.lastName,r.value=o.email,u.value=o.phone||""):(c.value="",r.value="",u.value="")}),i&&i.addEventListener("submit",n=>{n.preventDefault();const o={fullName:document.getElementById("fullName").value,email:document.getElementById("email").value,phone:document.getElementById("phone").value};localStorage.setItem("aura_checkout_data",JSON.stringify(o)),window.location.hash="#/checkout/step/2"})}if(s===2){const i=document.getElementById("deliveryForm"),a=document.getElementById("backBtn");a&&a.addEventListener("click",()=>{window.location.hash="#/checkout/step/1"}),i&&i.addEventListener("submit",n=>{n.preventDefault();const o=JSON.parse(localStorage.getItem("aura_checkout_data")||"{}");o.country=document.getElementById("country").value,o.city=document.getElementById("city").value,o.zipCode=document.getElementById("zipCode").value,o.street=document.getElementById("street").value,o.apartment=document.getElementById("apartment").value,localStorage.setItem("aura_checkout_data",JSON.stringify(o)),window.location.hash="#/checkout/step/3"})}if(s===3){const i=document.getElementById("paymentForm"),a=document.getElementById("backBtn"),n=document.getElementById("cardNumber"),o=document.getElementById("expirationDate");a&&a.addEventListener("click",()=>{window.location.hash="#/checkout/step/2"}),n&&n.addEventListener("input",c=>{let r=c.target.value.replace(/\s/g,""),u=r.match(/.{1,4}/g)?.join(" ")||r;c.target.value=u}),o&&o.addEventListener("input",c=>{let r=c.target.value.replace(/\D/g,"");r.length>=2&&(r=r.slice(0,2)+"/"+r.slice(2,4)),c.target.value=r}),i&&i.addEventListener("submit",c=>{c.preventDefault();const r=JSON.parse(localStorage.getItem("aura_checkout_data")||"{}");r.cardholderName=document.getElementById("cardholderName").value,r.cardNumber=document.getElementById("cardNumber").value,r.expirationDate=document.getElementById("expirationDate").value,r.cvv=document.getElementById("cvv").value,localStorage.setItem("aura_checkout_data",JSON.stringify(r)),window.location.hash="#/checkout/step/4"})}if(s===4){const i=document.getElementById("backBtn"),a=document.getElementById("confirmBtn");i&&i.addEventListener("click",()=>{window.location.hash="#/checkout/step/3"}),a&&a.addEventListener("click",()=>{pt()})}}function pt(){const e=JSON.parse(localStorage.getItem("aura_checkout_data")||"{}"),t=f(),{total:s}=A(),i="AU"+Math.random().toString(36).substring(2,9).toUpperCase(),a=new Date;a.setDate(a.getDate()+7);const n=a.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"2-digit"}),o=JSON.parse(localStorage.getItem("aura_orders")||"[]"),c={id:i,date:new Date().toISOString(),items:t,total:s,status:"processing",delivery:e};o.push(c),localStorage.setItem("aura_orders",JSON.stringify(o)),se(),localStorage.removeItem("aura_checkout_data"),mt(i,n,s)}function mt(e,t,s){const i=`
    <div class="modal-overlay active" id="successModal">
      <div class="modal-content checkout-success-modal">
        <h2 class="checkout-success-title">
          Thank you for your order! 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12l2 2 4-4"/>
          </svg>
        </h2>
        
        <div class="checkout-success-details">
          <div class="checkout-success-item">
            <strong>Order number:</strong> ${e}
          </div>
          <div class="checkout-success-item">
            <strong>Delivery date:</strong> ${t}
          </div>
          <div class="checkout-success-item">
            <strong>Total:</strong> $${s.toFixed(2)}
          </div>
        </div>
        
        <p class="checkout-success-text">
          You'll receive a confirmation email shortly with your order details.
        </p>
        
        <button class="checkout-success-btn" id="returnHomeBtn">
          Return to home page
        </button>
      </div>
    </div>
  `;document.body.insertAdjacentHTML("beforeend",i);const a=document.getElementById("returnHomeBtn");a&&a.addEventListener("click",()=>{document.getElementById("successModal").remove(),window.location.hash="#/"})}async function ht(e){const t=e.query||"";if(!t)return`
      <main class="search-main">
        <div class="container search-container">
          <div class="search-empty">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="35" cy="35" r="25" stroke="#ccc" stroke-width="3"/>
              <path d="M55 55L70 70" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <h2>Search for products</h2>
            <p>Enter a product name or category in the search bar</p>
          </div>
        </div>
      </main>
    `;const s=Z(),i=t.toLowerCase().trim(),a=s.filter(n=>{const o=n.name.toLowerCase().includes(i),c=n.category.toLowerCase().includes(i),r=n.categoryLabel.toLowerCase().includes(i);return o||c||r});return a.length===0?`
      <main class="search-main">
        <div class="container search-container">
          <div class="search-header">
            <h1 class="search-title">Search results for "${t}"</h1>
            <p class="search-count">0 products found</p>
          </div>
          
          <div class="search-no-results">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="45" cy="45" r="30" stroke="#ccc" stroke-width="3"/>
              <path d="M65 65L85 85" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
              <path d="M35 35L55 55M55 35L35 55" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <h2>No results found</h2>
            <p>We couldn't find any products matching "<strong>${t}</strong>"</p>
            <div class="search-suggestions">
              <p class="search-suggestions-title">Try:</p>
              <ul>
                <li>Checking your spelling</li>
                <li>Using different keywords</li>
                <li>Searching for "candles", "diffusers", or "gift sets"</li>
              </ul>
            </div>
            <a href="#/catalog/all" class="btn-primary">Browse all products</a>
          </div>
        </div>
      </main>
    `:`
    <main class="search-main">
      <div class="container search-container">
        <div class="search-header">
          <h1 class="search-title">Search results for "${t}"</h1>
          <p class="search-count">${a.length} product${a.length!==1?"s":""} found</p>
        </div>
        
        <div class="search-results-grid">
          ${a.map(n=>vt(n)).join("")}
        </div>
      </div>
    </main>
  `}function vt(e){return`
    <div class="search-result-card">
      <a href="#/product/${e.id}" class="search-result-link">
        <div class="search-result-image" style="background-image: url('${e.image}');"></div>
      </a>
      
      <div class="search-result-info">
        <a href="#/product/${e.id}" class="search-result-name-link">
          <h3 class="search-result-name">${e.name}</h3>
        </a>
        <p class="search-result-category">${e.categoryLabel}</p>
        <p class="search-result-price">$${e.price.toFixed(2)}</p>
        
        <div class="search-result-buttons">
          <button 
            class="search-btn search-btn-buy buy-now-btn"
            data-product-id="${e.id}"
          >
            Buy now
          </button>
          <button 
            class="search-btn search-btn-cart add-to-cart-btn"
            data-product-id="${e.id}"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  `}function gt(){document.querySelectorAll(".add-to-cart-btn").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation();const s=parseInt(t.currentTarget.dataset.productId);g(async()=>{const{getProductById:i}=await Promise.resolve().then(()=>I);return{getProductById:i}},void 0).then(({getProductById:i})=>{const a=i(s);a&&g(async()=>{const{addToCart:n}=await Promise.resolve().then(()=>U);return{addToCart:n}},void 0).then(({addToCart:n})=>{n(a),g(async()=>{const{showModal:o}=await Promise.resolve().then(()=>ye);return{showModal:o}},void 0).then(({showModal:o})=>{o("Added to Cart",`${a.name} has been added to your cart`,"success")})})})})}),document.querySelectorAll(".buy-now-btn").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation();const s=parseInt(t.currentTarget.dataset.productId);g(async()=>{const{getProductById:i}=await Promise.resolve().then(()=>I);return{getProductById:i}},void 0).then(({getProductById:i})=>{const a=i(s);a&&g(async()=>{const{addToCart:n}=await Promise.resolve().then(()=>U);return{addToCart:n}},void 0).then(({addToCart:n})=>{n(a),window.location.hash="#/checkout/step/1"})})})})}async function ft(){const e="/aura-shop/";return`
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
            
          <img src="${e}images/shipping2.png" alt="Shipping">
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
            
           <img src="${e}images/shipping.png" alt="Returns">
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
  `}function bt(){console.log("Shipping page initialized")}async function yt(){return`
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
            
           <img src="/aura-shop/images/candle2.png" alt="Candle Care">
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
  `}function wt(){console.log("Candle Care page initialized")}async function kt(){return`
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
            
            <img src="/aura-shop/images/refund.png" alt="Refund">
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
  `}function St(){console.log("Refund Policy page initialized")}async function Et(){return`
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
           
            <img src="/aura-shop/images/privacy.png" alt="Privacy">
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
  `}function It(){console.log("Privacy Policy page initialized")}async function Pt(){return`
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
            
            <img src="/aura-shop/images/terms.png" alt="Terms">
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
  `}function Ct(){console.log("Terms of Service page initialized")}async function Bt(){return`
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
            <div class="brand-image-box" style="background-image: url('/aura-shop/images/press.png');"></div>
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
  `}function $t(){console.log("Press page initialized")}async function At(){const e="/aura-shop/";return`
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
            <div class="brand-image-box" style="background-image: url('${e}images/sust.png');"></div>
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
            <div class="brand-image-box" style="background-image: url('${e}images/sust1.jpg');"></div>
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
  `}function xt(){console.log("Sustainability page initialized")}async function Lt(){return`
    <main class="brand-page-main">
      <!-- Hero Section -->
      <section class="brand-hero">
        <div class="brand-hero-content">
          <h1 class="brand-hero-title">Current Promotions</h1>
          <p class="brand-hero-subtitle">Exclusive offers and special deals on AURA products</p>
        </div>
      </section>

      <!-- Active Promotions -->
      <section class="container brand-section">
        <h2 class="brand-section-title brand-center">Active Offers</h2>
        
        <div class="brand-promo-grid">
          <div class="brand-promo-card brand-promo-featured">
            <div class="brand-promo-badge">Limited Time</div>
            <h3 class="brand-promo-title">Free Shipping</h3>
            <p class="brand-promo-desc">On all orders over $75</p>
            <div class="brand-promo-code">No code needed</div>
            <a href="#/catalog/all" class="brand-promo-btn">Shop Now</a>
          </div>
          
          <div class="brand-promo-card">
            <h3 class="brand-promo-title">10% Off First Order</h3>
            <p class="brand-promo-desc">Subscribe to our newsletter</p>
            <div class="brand-promo-code">AUTO-APPLIED</div>
            <a href="#/" class="brand-promo-btn-outline">Subscribe</a>
          </div>
          
          <div class="brand-promo-card">
            <h3 class="brand-promo-title">Bundle & Save</h3>
            <p class="brand-promo-desc">Buy 3 candles, save 15%</p>
            <div class="brand-promo-code">BUNDLE15</div>
            <a href="#/catalog/candles" class="brand-promo-btn-outline">Shop Candles</a>
          </div>
        </div>
      </section>

      <!-- Member Benefits -->
      <section class="brand-accent-section">
        <div class="container">
          <h2 class="brand-section-title brand-center-white">Member Exclusive Benefits</h2>
          
          <div class="brand-benefits-grid">
            <div class="brand-benefit-item">
              <h3>Silver Members</h3>
              <p>5% off all orders</p>
              <p>Early access to new products</p>
              <p>Birthday gift</p>
            </div>
            
            <div class="brand-benefit-item">
              <h3>Gold Members</h3>
              <p>10% off all orders</p>
              <p>Free shipping always</p>
              <p>Priority customer service</p>
            </div>
            
            <div class="brand-benefit-item">
              <h3>Platinum Members</h3>
              <p>15% off all orders</p>
              <p>Exclusive product previews</p>
              <p>Personalized recommendations</p>
            </div>
          </div>
          
          <div class="brand-center" style="margin-top: 40px;">
            <a href="#/signup" class="brand-cta-btn-white">Join Now</a>
          </div>
        </div>
      </section>

      <!-- Seasonal Promotions -->
      <section class="container brand-section">
        <div class="brand-two-column">
          <div class="brand-column">
            <h2 class="brand-section-title">Seasonal Collections</h2>
            <p class="brand-paragraph">
              Throughout the year, we release limited-edition seasonal collections 
              featuring exclusive fragrances and special packaging. Members get early 
              access and exclusive discounts.
            </p>
            <p class="brand-paragraph">
              Sign up for our newsletter to be the first to know about new releases, 
              seasonal promotions, and special events.
            </p>
          </div>
          <div class="brand-column">
            <div class="brand-image-box" style="background-image: url('/aura-shop/images/promotions.png');"></div>
          </div>
        </div>
      </section>
      <!-- How to Redeem -->
      <section class="brand-gray-section">
        <div class="container">
          <h2 class="brand-section-title brand-center">How to Redeem Promo Codes</h2>
          
          <div class="brand-steps-grid">
            <div class="brand-step">
              <div class="brand-step-number">1</div>
              <h3>Add to Cart</h3>
              <p>Shop your favorite products</p>
            </div>
            
            <div class="brand-step">
              <div class="brand-step-number">2</div>
              <h3>Enter Code</h3>
              <p>Apply promo code at checkout</p>
            </div>
            
            <div class="brand-step">
              <div class="brand-step-number">3</div>
              <h3>Enjoy Savings</h3>
              <p>See your discount applied</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `}function Mt(){console.log("Promotions page initialized")}async function Tt(){return`
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
            <div class="brand-image-box" style="background-image: url('/aura-shop/images/wholesale.png');"></div>
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
  `}function Dt(){console.log("Wholesale page initialized")}async function Nt(){return`
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
            <div class="brand-image-box" style="background-image: url('/aura-shop/images/affilate.jpg');"></div>
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
  `}function qt(){console.log("Affiliate page initialized")}const _t={"/":ke,"/catalog/:category":Ie,"/product/:id":$e,"/blog":Te,"/blog/:id":qe,"/about":he,"/contact":je,"/cart":ze,"/login":ce,"/signup":le,"/profile":j,"/profile/:section":j,"/checkout":W,"/checkout/step/:step":W,"/search/:query":ht,"/shipping":ft,"/candle-care":yt,"/refund-policy":kt,"/privacy-policy":Et,"/terms-of-service":Pt,"/press":Bt,"/sustainability":At,"/promotions":Lt,"/wholesale":Tt,"/affiliate":Nt};function Ft(e){const t=e.replace("#","")||"/";for(const[s,i]of Object.entries(_t)){const a=s.split("/"),n=t.split("/");if(a.length!==n.length)continue;const o={};let c=!0;for(let r=0;r<a.length;r++)if(a[r].startsWith(":")){const u=a[r].slice(1);o[u]=n[r]}else if(a[r]!==n[r]){c=!1;break}if(c)return{handler:i,params:o}}return null}const B=document.querySelector(".header");B&&(hash===""||hash==="#"||hash==="#/"?(B.classList.add("header-transparent"),B.classList.remove("header-scrolled")):(B.classList.remove("header-transparent"),B.classList.add("header-scrolled")));async function V(){const e=document.getElementById("app");if(!e)return;const t=window.location.hash,s=Ft(t);if(t.includes("/profile")&&!H()){window.location.hash="#/login";return}let i;s?i=await s.handler(s.params):i='<div class="container" style="padding: 150px 0;"><h2>Page not found</h2></div>',e.innerHTML=`
    ${Fe()}
    ${i}
    ${He()}
  `,Oe(),Xe(),(t===""||t==="#"||t==="#/")&&setTimeout(()=>{be(),Ee()},100),t.includes("/catalog/")&&setTimeout(()=>{Pe(),Be(),R()},100),t.includes("/product/")&&setTimeout(()=>{Le()},100),t.includes("/contact")&&setTimeout(()=>{We()},100),t.includes("/cart")&&setTimeout(()=>{Ve()},100),t.includes("/checkout")&&setTimeout(()=>{ut()},100),t.includes("/profile")&&setTimeout(()=>{at()},100),(t.includes("/login")||t.includes("/signup"))&&setTimeout(()=>{de()},100),t.includes("/search/")&&setTimeout(()=>{gt()},100),t.includes("/shipping")&&setTimeout(()=>{bt()},100),t.includes("/candle-care")&&setTimeout(()=>{wt()},100),t.includes("/refund-policy")&&setTimeout(()=>{St()},100),t.includes("/privacy-policy")&&setTimeout(()=>{It()},100),t.includes("/terms-of-service")&&setTimeout(()=>{Ct()},100),(t==="/press"||t==="/#/press")&&setTimeout(()=>{$t()},100),(t==="/sustainability"||t==="/#/sustainability")&&setTimeout(()=>{xt()},100),(t==="/promotions"||t==="/#/promotions")&&setTimeout(()=>{Mt()},100),(t==="/wholesale"||t==="/#/wholesale")&&setTimeout(()=>{Dt()},100),(t==="/affiliate"||t==="/#/affiliate")&&setTimeout(()=>{qt()},100),$(),window.scrollTo(0,0),setTimeout(()=>{const a=document.querySelector(".header"),n=window.location.hash;a&&(n===""||n==="#"||n==="#/"?(a.classList.add("header-transparent"),a.classList.remove("header-scrolled")):(a.classList.remove("header-transparent"),a.classList.add("header-scrolled")))},0)}function Ot(){window.addEventListener("hashchange",V),document.addEventListener("click",e=>{const t=e.target.closest('a[href^="#"]');if(t){e.preventDefault();const s=t.getAttribute("href");window.location.hash=s}}),V()}document.addEventListener("DOMContentLoaded",()=>{console.log("App starting..."),Ot(),$(),console.log("App initialized")});
