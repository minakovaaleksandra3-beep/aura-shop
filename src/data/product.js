// src/data/product.js

export const categories = [
  {
    id: 'candles',
    name: 'Candles',
    slug: 'candles',
    description: 'Aroma candles',
    image: '/aura-shop/images/categories/candles.jpg',
  },
  {
    id: 'diffusers',
    name: 'Diffusers',
    slug: 'diffusers',
    description: 'Aroma diffusers',
    image: '/aura-shop/images/categories/diffusers.jpg'
  },
  {
    id: 'gift-sets',
    name: 'Gift sets',
    slug: 'gift-sets',
    description: 'For special moments',
    image: '/aura-shop/images/categories/gift-sets.jpg'
  }
];

export const products = [
  // ========== CANDLES (СВІЧКИ) ==========
  {
    id: 1,
    name: 'Citrus Bloom',
    category: 'candles',
    categoryLabel: 'Aroma candle',
    price: 29.99,
    image: '/aura-shop/images/aromacandle_1.png',
    images: [
      '/aura-shop/images/aromacandle_3.png',
      '/aura-shop/images/aromacandle_2.png',
      '/aura-shop/images/aromacandle_1.png'
    ],
    volume: '220ml',
    description: 'Fresh & Energizing citrus candle',
    fullDescription: 'A sophisticated scented candle designed for those who value warmth, coziness, and timeless aesthetics. Amber Wood blends the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.',
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: 'Vanilla Musk',
    category: 'candles',
    categoryLabel: 'Aroma candle',
    price: 24.99,
    image: '/aura-shop/images/vanila.png',
    images: [
      '/aura-shop/images/vanila.png',
      '/aura-shop/images/vanila_2.png',
      '/aura-shop/images/vanila_3.png'
    ],
    volume: '220ml',
    description: 'Sweet & Warm candle with vanilla and musk notes',
    fullDescription: 'A sophisticated scented candle designed for those who value warmth, coziness, and timeless aesthetics. Amber Wood blends the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.',
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: 'Golden Hour',
    category: 'candles',
    categoryLabel: 'Aroma candle',
    price: 32.99,
    image: '/aura-shop/images/golden.png',
    images: [
      '/aura-shop/images/golden.png',
      '/aura-shop/images/golden2.png',
      '/aura-shop/images/golden3.png'
    ],
    volume: '220ml',
    description: 'Floral & Calming garden scent',
    fullDescription: 'A sophisticated scented candle designed for those who value warmth, coziness, and timeless aesthetics. Amber Wood blends the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.',
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: 'Forest Mist',
    category: 'candles',
    categoryLabel: 'Aroma candle',
    price: 27.99,
    image: '/aura-shop/images/cozy.png',
    images: [
      '/aura-shop/images/cozy3.png',
      '/aura-shop/images/cozy4.png',
      '/aura-shop/images/cozy8.png'
    ],
    volume: '220ml',
    description: 'Relaxing lavender scent',
    fullDescription: 'A sophisticated scented candle designed for those who value warmth, coziness, and timeless aesthetics. Amber Wood blends the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.',
    inStock: true,
    featured: false
  },

  // ========== DIFFUSERS (ДИФУЗОРИ) ==========
  {
    id: 5,
    name: 'Moonlit Garden Diffuser',
    category: 'diffusers',
    categoryLabel: 'Aroma-diffuser',
    price: 38.99,
    image: '/aura-shop/images/moonlit.png',
    images: [
      '/aura-shop/images/moonlit.png',
      '/aura-shop/images/moonlit4.png',
      '/aura-shop/images/moonlit3.png'
    ],
    volume: '220ml',
    description: 'Warm sandalwood diffuser',
    fullDescription: 'A sophisticated scented diffuser designed for those who value warmth, coziness, and timeless aesthetics. Amber Wood blends the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.',
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: 'Eternal Flame Diffuser',
    category: 'diffusers',
    categoryLabel: 'Aroma-diffuser',
    price: 34.99,
    image: '/aura-shop/images/eternal.png',
    images: [
      '/aura-shop/images/eternal.png',
      '/aura-shop/images/eternal2.png',
      '/aura-shop/images/eternal3.png'
    ],
    volume: '220ml',
    description: 'Fresh ocean scent diffuser',
    fullDescription: 'A sophisticated scented diffuser designed for those who value warmth, coziness, and timeless aesthetics. Amber Wood blends the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.',
    inStock: true,
    featured: false
  },

  // ========== GIFT SETS (ПОДАРУНКОВІ НАБОРИ) ==========
  {
    id: 7,
    name: 'Holiday Gift',
    category: 'gift-sets',
    categoryLabel: 'Gift set',
    price: 89.99,
    image: '/aura-shop/images/gift2.png',
    images: [
      '/aura-shop/images/gift15.png',
      '/aura-shop/images/gift16.png',
      '/aura-shop/images/gift17.png'
    ],
    volume: '220ml',
    description: 'Premium candle and diffuser set',
    fullDescription: 'A sophisticated gift set designed for those who value warmth, coziness, and timeless aesthetics. This set includes premium candle and diffuser that blend the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.',
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: 'Winter Glow',
    category: 'gift-sets',
    categoryLabel: 'Gift set',
    price: 89.99,
    image: '/aura-shop/images/gift3.png',
    images: [
      '/aura-shop/images/gift12.png',
      '/aura-shop/images/gift13.png',
      '/aura-shop/images/gift14.png'
    ],
    volume: '220ml',
    description: 'Premium candle and diffuser set',
    fullDescription: 'A sophisticated gift set designed for those who value warmth, coziness, and timeless aesthetics. This set includes premium candle and diffuser that blend the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.',
    inStock: true,
    featured: false
  },
  {
    id: 9,
    name: 'Cozy Advent',
    category: 'gift-sets',
    categoryLabel: 'Gift set',
    price: 79.99,
    image: '/aura-shop/images/gift4.png',
    images: [
      '/aura-shop/images/gift6.png',
      '/aura-shop/images/gift10.png',
      '/aura-shop/images/gift11.png'
    ],
    volume: '220ml',
    description: 'Exotic & Mystical gift set',
    fullDescription: 'A sophisticated gift set designed for those who value warmth, coziness, and timeless aesthetics. This set includes premium candle and diffuser that blend the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.',
    inStock: true,
    featured: true
  },
  {
    id: 10,
    name: 'Holiday Scents',
    category: 'gift-sets',
    categoryLabel: 'Gift set',
    price: 85.99,
    image: '/aura-shop/images/gift5.png',
    images: [
      '/aura-shop/images/gift8.png',
      '/aura-shop/images/gift7.png',
      '/aura-shop/images/gift9.png'
    ],
    volume: '220ml',
    description: 'Sweet & Warm gift set',
    fullDescription: 'A sophisticated gift set designed for those who value warmth, coziness, and timeless aesthetics. This set includes premium candle and diffuser that blend the rich depth of sandalwood with the subtle sweetness of amber. It envelops your space in calm elegance, turning any moment into a soothing ritual.',
    inStock: true,
    featured: true
  }
];

// Функції для роботи з товарами
export function getProductsByCategory(categorySlug) {
  if (categorySlug === 'all') {
    return products; // Повертаємо ВСІ товари
  }
  return products.filter(product => product.category === categorySlug);
}

export function getFeaturedProducts() {
  return products.filter(product => product.featured);
}

export function getLatestProducts(limit = 4) {
  // Повертаємо останні додані товари (в зворотному порядку)
  return products.slice().reverse().slice(0, limit);
}

export function getProductById(id) {
  return products.find(product => product.id === parseInt(id));
}

export function getCategoryBySlug(slug) {
  if (slug === 'all') {
    return { name: 'All Products', slug: 'all', description: 'Browse all our products' };
  }
  return categories.find(cat => cat.slug === slug);
}

export function getAllProducts() {
  return products;
}