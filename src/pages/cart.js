// src/pages/cart.js
import { getCartItems, updateCartItemQuantity, removeFromCart, getCartTotal } from '../utils/cart.js';
import { showModal } from '../components/modal.js';

export async function Cart() {
  const cartItems = getCartItems();
  const subtotal = getCartTotal();
  
  return `
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
            ${cartItems.length > 0 ? `
              <div class="cart-items" id="cartItemsContainer">
                ${cartItems.map(item => createCartItem(item)).join('')}
              </div>
           `  :`
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
              <span class="cart-summary-value" id="cartSubtotal">$${subtotal.toFixed(2)}</span>
            </div>
            
            <div class="cart-coupon">
              <label class="cart-coupon-label">Coupon code</label>
              <div class="cart-coupon-input-wrapper">
                <input 
                  type="text" 
                  class="cart-coupon-input" 
                  id="couponInput"
                  placeholder="Enter code"
                  ${cartItems.length === 0 ? 'disabled' : ''}
                >
                <button 
                  class="cart-coupon-button" 
                  id="applyCouponBtn"
                  ${cartItems.length === 0 ? 'disabled' : ''}
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
              ${cartItems.length === 0 ? 'disabled' : ''}
            >
              Continue to checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  `;
}
  function createCartItem(item) {
  return `
    <div class="cart-item" data-product-id="${item.id}">
      <div class="cart-item-image" style="background-image: url('${item.image}');"></div>
      
      <div class="cart-item-details">
        <h3 class="cart-item-name">${item.name}</h3>
        
        <div class="cart-item-quantity">
          <span class="cart-quantity-label">Quantity:</span>
          <div class="cart-quantity-controls">
            <button class="cart-quantity-btn" data-action="decrease">−</button>
            <span class="cart-quantity-value">${item.quantity}</span>
            <button class="cart-quantity-btn" data-action="increase">+</button>
          </div>
        </div>
        
        <div class="cart-item-price-row">
          <span class="cart-price-label">Price:</span>
          <span class="cart-item-price">$${item.price.toFixed(2)}</span>
        </div>
      </div>
      
      <button class="cart-item-remove" data-product-id="${item.id}">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  `;
}

// Ініціалізація сторінки кошика
export function initCart() {
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const applyCouponBtn = document.getElementById('applyCouponBtn');
  const couponInput = document.getElementById('couponInput');
  const checkoutBtn = document.getElementById('checkoutBtn');
  
  if (!cartItemsContainer) return;
  
  // Оновлення відображення
  function updateCartDisplay() {
    const cartItems = getCartItems();
    const subtotal = getCartTotal();
    
    if (cartItems.length === 0) {
      // Перезавантажуємо сторінку якщо кошик порожній
      window.location.reload();
      return;
    }
    
    cartItemsContainer.innerHTML = cartItems.map(item => createCartItem(item)).join('');
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    
    attachCartEventListeners();
  }
  
  // Прикріплення обробників подій
  function attachCartEventListeners() {
    // Зміна кількості
    document.querySelectorAll('.cart-quantity-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cartItem = e.target.closest('.cart-item');
        const productId = parseInt(cartItem.dataset.productId);
        const action = e.target.dataset.action;
        const currentQty = parseInt(cartItem.querySelector('.cart-quantity-value').textContent);
        
        const newQty = action === 'increase' ? currentQty + 1 : currentQty - 1;
        
        if (newQty > 0) {
          updateCartItemQuantity(productId, newQty);
          updateCartDisplay();
        }
      });
    });
    
    // Видалення товару
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const productId = parseInt(e.currentTarget.dataset.productId);
        removeFromCart(productId);
        updateCartDisplay();
      });
    });
  }
  
  // Застосування купону
  if (applyCouponBtn) {
    applyCouponBtn.addEventListener('click', () => {
      const code = couponInput.value.trim();
      
      if (!code) {
        showModal('Error', 'Please enter a coupon code', 'error');
        return;
      }
      
      // Тут можна додати логіку перевірки купонів
      // Поки що просто показуємо повідомлення
      showModal('Info', 'Coupon functionality coming soon!', 'info');
      couponInput.value = '';
    });
  }
  
  // Checkout
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      window.location.hash = '#/checkout/step/1';
    });
  }
  
  attachCartEventListeners();
}