// src/pages/profile.js
import { getCartItems } from '../utils/cart.js';
import { showModal } from '../components/modal.js';

export async function Profile(params) {
  const section = params?.section || 'info';

  let content;
  switch (section) {
    case 'orders':
      content = renderOrders();
      break;
    case 'member-card':
      content = renderMemberCard();
      break;
    case 'settings':
      content = renderSettings();
      break;
    default:
      content = renderProfileInfo();
  }

  return `
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
              <a href="#/profile" class="profile-nav-link ${section === 'info' ? 'active' : ''}">My profile</a>
              <a href="#/profile/orders" class="profile-nav-link ${section === 'orders' ? 'active' : ''}">My orders</a>
              <a href="#/profile/member-card" class="profile-nav-link ${section === 'member-card' ? 'active' : ''}">Member card</a>
              <a href="#/profile/settings" class="profile-nav-link ${section === 'settings' ? 'active' : ''}">Settings</a>
             <button class="profile-logout-btn" id="logoutBtn">Log out</button> 
            </nav>
          </aside>
          
          <!-- Content -->
          <div class="profile-section-content">
            ${content}
          </div>
        </div>
      </div>
    </main>
  `;
}

// MY PROFILE INFO
function renderProfileInfo() {
  const userData = getUserData();

  return `
    <div class="profile-form-section">
      <form class="profile-form" id="profileForm">
        <div class="profile-form-group">
          <label class="profile-form-label">First name</label>
          <input 
            type="text" 
            class="profile-form-input" 
            placeholder="Enter your first name"
            id="firstName"
            value="${userData.firstName || ''}"
          >
        </div>
        
        <div class="profile-form-group">
          <label class="profile-form-label">Last name</label>
          <input 
            type="text" 
            class="profile-form-input" 
            placeholder="Enter your last name"
            id="lastName"
            value="${userData.lastName || ''}"
          >
        </div>
        
        <div class="profile-form-group">
          <label class="profile-form-label">Email</label>
          <input 
            type="email" 
            class="profile-form-input" 
            placeholder="Enter your email address"
            id="email"
            value="${userData.email || ''}"
          >
        </div>
        
        <div class="profile-form-group">
          <label class="profile-form-label">Phone number</label>
          <input 
            type="tel" 
            class="profile-form-input" 
            placeholder="Enter your phone number"
            id="phone"
            value="${userData.phone || ''}"
          >
        </div>
        
        <button type="submit" class="profile-update-btn">
          Update info
        </button>
      </form>
    </div>
  `;
}

// MY ORDERS
function renderOrders() {
  const orders = getOrders();

  if (orders.length === 0) {
    return `
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
    `;
  }

  return `
    <div class="orders-section">
      <div class="orders-list">
        ${orders.map(order => `
          <div class="order-card">
            <div class="order-header">
              <div class="order-info">
                <span class="order-number">Order #${order.id}</span>
                <span class="order-date">${formatDate(order.date)}</span>
              </div>
              <span class="order-status order-status-${order.status.toLowerCase()}">${order.status}</span>
            </div>
            
            <div class="order-items">
              ${order.items.map(item => `
                <div class="order-item">
                  <div class="order-item-image" style="background-image: url('${item.image}');"></div>
                  <div class="order-item-details">
                    <h4 class="order-item-name">${item.name}</h4>
                    <p class="order-item-quantity">Quantity: ${item.quantity}</p>
                  </div>
                  <span class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              `).join('')}
            </div>
            
            <div class="order-footer">
              <span class="order-total">Total: $${order.total.toFixed(2)}</span>
              <button class="order-details-btn" onclick="alert('Order details coming soon')">View Details</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// MEMBER CARD
function renderMemberCard() {
  const userData = getUserData();
  const memberLevel = userData.memberLevel || 'Silver';
  const points = userData.points || 0;
  const nextLevelPoints = getNextLevelPoints(memberLevel);

  return `
    <div class="member-card-section">
      <div class="member-card">
        <div class="member-card-header">
          <h3 class="member-card-title">AURA Member</h3>
          <span class="member-card-level member-level-${memberLevel.toLowerCase()}">${memberLevel}</span>
        </div>
        
        <div class="member-card-body">
          <div class="member-card-name">${userData.firstName || 'Guest'} ${userData.lastName || 'User'}</div>
          <div class="member-card-id">Member ID: ${generateMemberId()}</div>
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
            <span class="member-points-number">${points}</span>
            <span class="member-points-label">points</span>
          </div>
          <div class="member-progress">
            <div class="member-progress-bar">
              <div class="member-progress-fill" style="width: ${(points / nextLevelPoints) * 100}%"></div>
            </div>
            <p class="member-progress-text">${nextLevelPoints - points} points to ${getNextLevel(memberLevel)} level</p>
          </div>
        </div>
        
        <div class="member-perks">
          <h4 class="member-section-title">Your Benefits</h4>
          <ul class="member-perks-list">
            ${getMemberBenefits(memberLevel).map(benefit => `
              <li class="member-perk-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="#b8927d" stroke-width="1.5"/>
                  <path d="M6 10L9 13L14 7" stroke="#b8927d" stroke-width="1.5"/>
                </svg>
                <span>${benefit}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

// SETTINGS
function renderSettings() {
  const userData = getUserData();

  return `
    <div class="settings-section">
      <div class="settings-group">
        <h3 class="settings-group-title">Account Settings</h3>
        
        <div class="settings-item">
          <div class="settings-item-info">
            <h4 class="settings-item-title">Email Notifications</h4>
            <p class="settings-item-description">Receive updates about orders and promotions</p>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="emailNotifications" ${userData.emailNotifications !== false ? 'checked' : ''}>
            <span class="settings-toggle-slider"></span>
          </label>
        </div>
        
        <div class="settings-item">
          <div class="settings-item-info">
            <h4 class="settings-item-title">Newsletter</h4>
            <p class="settings-item-description">Get candle tips and exclusive offers</p>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="newsletter" ${userData.newsletter !== false ? 'checked' : ''}>
            <span class="settings-toggle-slider"></span>
          </label>
        </div>
        
        <div class="settings-item">
          <div class="settings-item-info">
            <h4 class="settings-item-title">SMS Notifications</h4>
            <p class="settings-item-description">Receive order updates via SMS</p>
          </div>
          <label class="settings-toggle">
            <input type="checkbox" id="smsNotifications" ${userData.smsNotifications === true ? 'checked' : ''}>
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
            <input type="checkbox" id="profileVisibility" ${userData.profileVisibility === true ? 'checked' : ''}>
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
  `;
}

// Utility functions
function getUserData() {
  const data = localStorage.getItem('aura_user');
  return data ? JSON.parse(data) : {};
}

function saveUserData(data) {
  localStorage.setItem('aura_user', JSON.stringify(data));
}

function getOrders() {
  const orders = localStorage.getItem('aura_orders');
  return orders ? JSON.parse(orders) : [];
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function generateMemberId() {
  const userData = getUserData();
  if (userData.memberId) return userData.memberId;

  const id = 'AU' + Math.random().toString(36).substr(2, 9).toUpperCase();
  userData.memberId = id;
  saveUserData(userData);
  return id;
}

function getNextLevel(currentLevel) {
  const levels = ['Silver', 'Gold', 'Platinum'];
  const currentIndex = levels.indexOf(currentLevel);
  return currentIndex < levels.length - 1 ? levels[currentIndex + 1] : 'Platinum';
}

function getNextLevelPoints(level) {
  const pointsMap = {
    'Silver': 500,
    'Gold': 1000,
    'Platinum': 2000
  };
  return pointsMap[getNextLevel(level)] || 2000;
}
function getMemberBenefits(level) {
  const benefits = {
    'Silver': [
      '5% discount on all purchases',
      'Early access to new collections',
      'Birthday gift',
      'Free shipping on orders over $50'
    ],
    'Gold': [
      '10% discount on all purchases',
      'Early access to new collections',
      'Birthday gift + bonus points',
      'Free shipping on all orders',
      'Exclusive member-only events'
    ],
    'Platinum': [
      '15% discount on all purchases',
      'Priority early access',
      'Premium birthday gift + double points',
      'Free express shipping',
      'VIP member events',
      'Personal shopping assistant'
    ]
  };

  return benefits[level] || benefits['Silver'];
}

// Initialize profile page
export function initProfile() {
  const profileForm = document.getElementById('profileForm');
  const passwordForm = document.getElementById('passwordForm');
  const deleteAccountBtn = document.getElementById('deleteAccountBtn');

  // Profile info form
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const userData = getUserData();
      userData.firstName = document.getElementById('firstName').value;
      userData.lastName = document.getElementById('lastName').value;
      userData.email = document.getElementById('email').value;
      userData.phone = document.getElementById('phone').value;

      saveUserData(userData);
      showModal('Success', 'Your profile has been updated successfully', 'success');
    });
  }

  // Password form
  if (passwordForm) {
    passwordForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const currentPassword = document.getElementById('currentPassword').value;
      const newPassword = document.getElementById('newPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (newPassword !== confirmPassword) {
        showModal('Error', 'New passwords do not match', 'error');
        return;
      }

      if (newPassword.length < 8) {
        showModal('Error', 'Password must be at least 8 characters long', 'error');
        return;
      }

      // Simulate password update
      showModal('Success', 'Your password has been updated successfully', 'success');
      passwordForm.reset();
    });
  }

  // Delete account
  if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener('click', () => {
      const confirmed = confirm('Are you sure you want to delete your account? This action cannot be undone.');

      if (confirmed) {
        localStorage.removeItem('aura_user');
        localStorage.removeItem('aura_orders');
        showModal('Success', 'Your account has been deleted', 'info');

        setTimeout(() => {
          window.location.hash = '#/';
        }, 2000);
      }
    });
  }

  // Settings toggles
  const toggles = document.querySelectorAll('.settings-toggle input');
  toggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
      const userData = getUserData();
      userData[e.target.id] = e.target.checked;
      saveUserData(userData);
    });
  });
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      import('./auth.js').then(({ logout }) => {
        logout();
      });
    });
  }
}