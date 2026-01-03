// src/utils/cart.js

// Отримати всі товари з кошика
export function getCartItems() {
  const cart = localStorage.getItem('aura_cart');
  return cart ? JSON.parse(cart) : [];
}

// Зберегти кошик
function saveCart(items) {
  localStorage.setItem('aura_cart', JSON.stringify(items));
  updateCartBadge();
}

// Додати товар до кошика
export function addToCart(product) {
  const cart = getCartItems();
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
  
  saveCart(cart);
  return cart;
}

// Оновити кількість товару
export function updateCartItemQuantity(productId, quantity) {
  const cart = getCartItems();
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      saveCart(cart);
    }
  }
  
  return cart;
}

// Видалити товар з кошика
export function removeFromCart(productId) {
  let cart = getCartItems();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  return cart;
}

// Очистити кошик
export function clearCart() {
  localStorage.removeItem('aura_cart');
  updateCartBadge();
}

// Підрахунок загальної суми
export function getCartTotal() {
  const cart = getCartItems();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Підрахунок кількості товарів
export function getCartCount() {
  const cart = getCartItems();
  return cart.reduce((count, item) => count + item.quantity, 0);
}

// Оновити бейдж на іконці кошика
export function updateCartBadge() {
  const count = getCartCount();
  const badge = document.querySelector('.header-cart-badge');
  
  if (badge) {
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
}