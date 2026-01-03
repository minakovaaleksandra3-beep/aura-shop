
// src/pages/checkout.js
import { getCartItems, getCartTotal, clearCart } from '../utils/cart.js';
import { isLoggedIn } from './auth.js';
import { showModal } from '../components/modal.js';

// Main Checkout Page
export async function Checkout() {
  const cartItems = getCartItems();
  
  if (cartItems.length === 0) {
    return `
      <main class="checkout-main">
        <div class="container">
          <div class="checkout-empty">
            <h2>Your cart is empty</h2>
            <p>Add some items to proceed to checkout</p>
            <a href="#/catalog/all" class="btn-primary">Continue Shopping</a>
          </div>
        </div>
      </main>
    `;
  }
  
  // Get current step from URL or default to 1
  const hash = window.location.hash;
  const stepMatch = hash.match(/checkout\/step\/(\d)/);
  const currentStep = stepMatch ? parseInt(stepMatch[1]) : 1;
  
  return `
    <main class="checkout-main">
      <div class="container checkout-container">
        ${renderProgressBar(currentStep)}
        
        <div class="checkout-content">
          <div class="checkout-form-section">
            ${renderStep(currentStep)}
          </div>
          
          <div class="checkout-cart-section">
            ${renderCartSummary(cartItems)}
          </div>
        </div>
      </div>
    </main>
  `;
}

// Progress Bar
function renderProgressBar(currentStep) {
  const steps = [
    { number: 1, label: 'Personal info' },
    { number: 2, label: 'Delivery' },
    { number: 3, label: 'Payment method' },
    { number: 4, label: 'Confirmation' }
  ];
  
  return `
    <div class="checkout-progress">
      ${steps.map((step, index) => {
        const isActive = step.number === currentStep;
        const isCompleted = step.number < currentStep;
        const isLast = index === steps.length - 1;
        
        return `
          <div class="checkout-progress-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}">
            <div class="checkout-progress-step">
              <div class="checkout-progress-circle">
                ${isCompleted ? '✓' : step.number}
              </div>
              <span class="checkout-progress-label">${step.label}</span>
            </div>
            ${!isLast ? '<div class="checkout-progress-line"></div>' : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Render Current Step
function renderStep(step) {
  switch(step) {
    case 1:
      return renderPersonalInfoStep();
    case 2:
      return renderDeliveryStep();
    case 3:
      return renderPaymentStep();
    case 4:
      return renderConfirmationStep();
    default:
      return renderPersonalInfoStep();
  }
}
// STEP 1: Personal Info
function renderPersonalInfoStep() {
  const loggedIn = isLoggedIn();
  const userData = loggedIn ? JSON.parse(localStorage.getItem('aura_user') || '{}') : {};
  
  return `
    <div class="checkout-step">
      <h2 class="checkout-step-title">Personal info</h2>
      
      ${!loggedIn ? `
        <div class="checkout-auth-prompt">
          <p>Already have an account? <a href="#/login" class="checkout-link">Log in</a></p>
          <p>New at Aura? <a href="#/signup" class="checkout-link">Sign up</a></p>
        </div>
      ` : `
        <div class="checkout-profile-option">
          <label class="checkout-checkbox">
            <input type="checkbox" id="useProfileData" checked>
            <span>Use my profile data</span>
          </label>
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
            value="${loggedIn ? (userData.firstName + ' ' + userData.lastName) : ''}"
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
            value="${loggedIn ? userData.email : ''}"
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
            value="${loggedIn ? (userData.phone || '') : ''}"
            required
          >
        </div>
        
        <button type="submit" class="checkout-btn-next">
          Next
        </button>
      </form>
    </div>
  `;
}
// STEP 2: Delivery
function renderDeliveryStep() {
  const checkoutData = JSON.parse(localStorage.getItem('aura_checkout_data') || '{}');
  
  return `
    <div class="checkout-step">
      <h2 class="checkout-step-title">Delivery</h2>
      
      <form class="checkout-form" id="deliveryForm">
        <div class="checkout-form-group">
          <label class="checkout-form-label">Country</label>
          <select class="checkout-form-select" id="country" required>
            <option value="">Choose your country</option>
            <option value="Ukraine" ${checkoutData.country === 'Ukraine' ? 'selected' : ''}>Ukraine</option>
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
              value="${checkoutData.city || ''}"
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
              value="${checkoutData.zipCode || ''}"
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
              value="${checkoutData.street || ''}"
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
              value="${checkoutData.apartment || ''}"
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
  `;
}

// STEP 3: Payment
function renderPaymentStep() {
  const checkoutData = JSON.parse(localStorage.getItem('aura_checkout_data') || '{}');
  const { subtotal, discount, delivery, total } = calculateTotals();
  
  return `
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
            value="${checkoutData.cardholderName || ''}"
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
  `;
}

// STEP 4: Confirmation
function renderConfirmationStep() {
  const checkoutData = JSON.parse(localStorage.getItem('aura_checkout_data') || '{}');
  const { subtotal, discount, delivery, total } = calculateTotals();
  
  return `
    <div class="checkout-step">
      <h2 class="checkout-step-title">Confirmation</h2>
      
      <div class="checkout-confirmation">
        <div class="checkout-confirmation-item">
          <strong>Recipient:</strong> ${checkoutData.fullName || 'N/A'}
        </div>
        <div class="checkout-confirmation-item">
          <strong>Phone number:</strong> ${checkoutData.phone || 'N/A'}
        </div>
        <div class="checkout-confirmation-item">
        <strong>Delivery:</strong> ${checkoutData.street ||  'N/A'}${checkoutData.apartment ? ', Apt. ' + checkoutData.apartment : ''}, ${checkoutData.city || 'N/A'}, ${checkoutData.zipCode || 'N/A'}
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
  `;
}

// Cart Summary (right sidebar)
function renderCartSummary(cartItems) {
  const { subtotal, discount, delivery, total } = calculateTotals();
  
  return `
    <div class="checkout-cart">
      <h3 class="checkout-cart-title">Cart</h3>
      
      <div class="checkout-cart-items">
        ${cartItems.map(item => `
          <div class="checkout-cart-item">
            <div class="checkout-cart-item-image" style="background-image: url('${item.image}')"></div>
            <div class="checkout-cart-item-details">
              <h4 class="checkout-cart-item-name">${item.name}</h4>
              <p class="checkout-cart-item-quantity">Quantity: ${item.quantity}</p>
            </div>
            <div class="checkout-cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        `).join('')}
      </div>
      
      <div class="checkout-cart-totals">
        <div class="checkout-cart-total-row">
          <span>Subtotal:</span>
          <span>$${subtotal.toFixed(2)}</span>
        </div>
        ${discount > 0 ? `
          <div class="checkout-cart-total-row checkout-cart-discount">
            <span>Coupon:</span>
            <span>-$${discount.toFixed(2)}</span>
          </div>
        ` : ''}
        ${delivery > 0 ? `
          <div class="checkout-cart-total-row">
            <span>Delivery:</span>
            <span>$${delivery.toFixed(2)}</span>
          </div>
        ` : ''}
        <div class="checkout-cart-total-row checkout-cart-total-final">
          <strong>Total:</strong>
          <strong>$${total.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  `;
}

// Calculate Totals
function calculateTotals() {
  const cartItems = getCartItems();
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 20; // Fixed discount for demo
  const delivery = 5; // Fixed delivery cost
  const total = Math.max(0, subtotal + delivery - discount);
  
  return { subtotal, discount, delivery, total };
}

// Initialize Checkout
export function initCheckout() {
  const hash = window.location.hash;
  const stepMatch = hash.match(/checkout\/step\/(\d)/);
  const currentStep = stepMatch ? parseInt(stepMatch[1]) : 1;
  
  // Step 1: Personal Info
  if (currentStep === 1) {
    const form = document.getElementById('personalInfoForm');
    const useProfileCheckbox = document.getElementById('useProfileData');
    
    if (useProfileCheckbox) {
      useProfileCheckbox.addEventListener('change', (e) => {
        const userData = JSON.parse(localStorage.getItem('aura_user') || '{}');
        const fullNameInput = document.getElementById('fullName');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        
        if (e.target.checked) {
          fullNameInput.value = userData.firstName + ' ' + userData.lastName;
          emailInput.value = userData.email;
          phoneInput.value = userData.phone || '';
        } else {
          fullNameInput.value = '';
          emailInput.value = '';
          phoneInput.value = '';
        }
      });
    }
    
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const checkoutData = {
          fullName: document.getElementById('fullName').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value
        };
        
        localStorage.setItem('aura_checkout_data', JSON.stringify(checkoutData));
        window.location.hash = '#/checkout/step/2';
      });
    }
  }
  
  // Step 2: Delivery
  if (currentStep === 2) {
    const form = document.getElementById('deliveryForm');
    const backBtn = document.getElementById('backBtn');
    
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.location.hash = '#/checkout/step/1';
      });
    }
    
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const checkoutData = JSON.parse(localStorage.getItem('aura_checkout_data') || '{}');
        
        checkoutData.country = document.getElementById('country').value;
        checkoutData.city = document.getElementById('city').value;
        checkoutData.zipCode = document.getElementById('zipCode').value;
        checkoutData.street = document.getElementById('street').value;
        checkoutData.apartment = document.getElementById('apartment').value;
        
        localStorage.setItem('aura_checkout_data', JSON.stringify(checkoutData));
        window.location.hash = '#/checkout/step/3';
      });
    }
  }
  
  // Step 3: Payment
  if (currentStep === 3) {
    const form = document.getElementById('paymentForm');
    const backBtn = document.getElementById('backBtn');
    const cardNumberInput = document.getElementById('cardNumber');
    const expirationInput = document.getElementById('expirationDate');
    
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.location.hash = '#/checkout/step/2';
      });
    }
    
    // Format card number
    if (cardNumberInput) {
      cardNumberInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s/g, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formattedValue;
      });
    }
    
    // Format expiration date
    if (expirationInput) {
      expirationInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
          value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        e.target.value = value;
      });
    }
    
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const checkoutData = JSON.parse(localStorage.getItem('aura_checkout_data') || '{}');
        
        checkoutData.cardholderName = document.getElementById('cardholderName').value;
        checkoutData.cardNumber = document.getElementById('cardNumber').value;
        checkoutData.expirationDate = document.getElementById('expirationDate').value;
        checkoutData.cvv = document.getElementById('cvv').value;
        
        localStorage.setItem('aura_checkout_data', JSON.stringify(checkoutData));
        window.location.hash = '#/checkout/step/4';
      });
    }
  }
  
  // Step 4: Confirmation
  if (currentStep === 4) {
    const backBtn = document.getElementById('backBtn');
    const confirmBtn = document.getElementById('confirmBtn');
    
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.location.hash = '#/checkout/step/3';
      });
    }
    
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        completeOrder();
      });
    }
  }
}
// Complete Order
function completeOrder() {
  const checkoutData = JSON.parse(localStorage.getItem('aura_checkout_data') || '{}');
  const cartItems = getCartItems();
  const { total } = calculateTotals();
  
  // Generate order number
  const orderNumber = 'AU' + Math.random().toString(36).substring(2, 9).toUpperCase();
  
  // Generate delivery date (7 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 7);
  const formattedDate = deliveryDate.toLocaleDateString('en-GB', { 
    day: '2-digit', 
    month: '2-digit', 
    year: '2-digit' 
  });
  
  // Save order to localStorage
  const orders = JSON.parse(localStorage.getItem('aura_orders') || '[]');
  const newOrder = {
    id: orderNumber,
    date: new Date().toISOString(),
    items: cartItems,
    total: total,
    status: 'processing',
    delivery: checkoutData
  };
  orders.push(newOrder);
  localStorage.setItem('aura_orders', JSON.stringify(orders));
  
  // Clear cart
  clearCart();
  
  // Clear checkout data
  localStorage.removeItem('aura_checkout_data');
  
  // Show success modal with custom content
  showOrderSuccessModal(orderNumber, formattedDate, total);
}

// Custom Success Modal
function showOrderSuccessModal(orderNumber, deliveryDate, total) {
  const modalHTML = `
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
            <strong>Order number:</strong> ${orderNumber}
          </div>
          <div class="checkout-success-item">
            <strong>Delivery date:</strong> ${deliveryDate}
          </div>
          <div class="checkout-success-item">
            <strong>Total:</strong> $${total.toFixed(2)}
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
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  const returnBtn = document.getElementById('returnHomeBtn');
  if (returnBtn) {
    returnBtn.addEventListener('click', () => {
      document.getElementById('successModal').remove();
      window.location.hash = '#/';
    });
  }
}


