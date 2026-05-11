// ==================== YOUR BRAND – APP.JS ====================
// This file runs on all pages and handles core functionality.

// ---------- PRODUCT DATABASE ----------
const productDatabase = [
  {
    id: 1,
    name: 'Classic Cotton T‑Shirt',
    category: 'T‑Shirts',
    price: 299,
    badge: 'Best Seller',
    colors: ['White', 'Black', 'Navy', 'Red', 'Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    fabric: '180 GSM Combed Cotton',
    printingMethods: ['DTG', 'Screen Print', 'Embroidery'],
    description: 'Our best‑selling tee made from 100% ring‑spun cotton for ultra‑soft comfort. Pre‑shrunk and bio‑washed for a perfect fit.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600'
    ]
  },
  {
    id: 2,
    name: 'Premium Polo T‑Shirt',
    category: 'Polo',
    price: 449,
    badge: 'Premium',
    colors: ['Black', 'White', 'Navy', 'Burgundy'],
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: '220 GSM Pique Cotton',
    printingMethods: ['Embroidery', 'DTG'],
    description: 'Classic polo with a modern tailored fit. Breathable pique fabric perfect for corporate uniforms and events.',
    images: [
      'https://images.unsplash.com/photo-1620012253295-c1cc7f5e6f8b?w=600',
      'https://images.unsplash.com/photo-1589365275-6f4c3d44a9f9?w=600',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600'
    ]
  },
  {
    id: 3,
    name: 'Oversized Drop‑Shoulder Tee',
    category: 'Oversized',
    price: 399,
    badge: 'Trending',
    colors: ['Washed Black', 'Gray', 'White'],
    sizes: ['M', 'L', 'XL', '2XL'],
    fabric: '240 GSM Heavy Cotton',
    printingMethods: ['DTG', 'Screen Print'],
    description: 'Boxy oversized fit for streetwear and casual looks. Double‑needle stitching ensures long‑lasting durability.',
    images: [
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600',
      'https://images.unsplash.com/photo-1603344217258-9b1d02f02c62?w=600',
      'https://images.unsplash.com/photo-1581655353564-df123a1e8204?w=600',
      'https://images.unsplash.com/photo-1618354691229-88ca30e3b25e?w=600',
      'https://images.unsplash.com/photo-1608236415053-4087f2a46f3a?w=600'
    ]
  },
  {
    id: 4,
    name: 'Pullover Hoodie',
    category: 'Hoodies',
    price: 799,
    badge: 'Hot',
    colors: ['Black', 'Gray', 'Navy', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    fabric: 'Fleece‑lined 320 GSM',
    printingMethods: ['DTG', 'Embroidery'],
    description: 'Ultra‑warm fleece‑lined hoodie with a modern fit. Perfect for winter corporate gifts or team merchandise.',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600',
      'https://images.unsplash.com/photo-1578681994506-b8f4636509b3?w=600',
      'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=600',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600'
    ]
  },
  {
    id: 5,
    name: 'Sports Performance Jersey',
    category: 'Jerseys',
    price: 549,
    badge: 'New',
    colors: ['Red', 'Blue', 'Green', 'Black', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    fabric: 'Moisture‑Wicking Polyester',
    printingMethods: ['Sublimation', 'Screen Print'],
    description: 'Lightweight jersey designed for peak performance. Full‑color sublimation printing that never fades.',
    images: [
      'https://images.unsplash.com/photo-1580087256394-dbc0e7a62060?w=600',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600',
      'https://images.unsplash.com/photo-1544256718-7b28c0d03fc2?w=600',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600'
    ]
  },
  {
    id: 6,
    name: 'Corporate Uniform Shirt',
    category: 'Corporate',
    price: 649,
    badge: 'Bulk Deal',
    colors: ['White', 'Light Blue', 'Pink'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    fabric: 'Cotton‑Polyester Blend',
    printingMethods: ['Embroidery', 'DTG'],
    description: 'Professional full‑sleeve shirt for corporate uniforms. Wrinkle‑resistant fabric with a comfortable regular fit.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600'
    ]
  },
  {
    id: 7,
    name: 'School Uniform T‑Shirt',
    category: 'School',
    price: 249,
    badge: 'Value',
    colors: ['White', 'Navy', 'Red', 'Green', 'Yellow'],
    sizes: ['Kids‑XS', 'Kids‑S', 'Kids‑M', 'Kids‑L', 'Adult‑XS', 'Adult‑S'],
    fabric: '180 GSM Cotton',
    printingMethods: ['Screen Print', 'DTG'],
    description: 'Affordable, durable school uniform tees. Available in a wide range of house colors with custom logo printing.',
    images: [
      'https://images.unsplash.com/photo-1589365275-6f4c3d44a9f9?w=600',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600',
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600',
      'https://images.unsplash.com/photo-1581655353564-df123a1e8204?w=600',
      'https://images.unsplash.com/photo-1603344217258-9b1d02f02c62?w=600'
    ]
  },
  {
    id: 8,
    name: 'Sweatshirt Classic',
    category: 'Sweatshirts',
    price: 699,
    badge: 'Winter',
    colors: ['Black', 'Gray', 'Navy', 'Maroon'],
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: 'Fleece‑lined 280 GSM',
    printingMethods: ['DTG', 'Embroidery'],
    description: 'Cozy sweatshirt with ribbed cuffs and hem. Ideal for college hoodies, event merchandise, and casual wear.',
    images: [
      'https://images.unsplash.com/photo-1578681994506-b8f4636509b3?w=600',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600',
      'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=600',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600'
    ]
  }
];

// ---------- UTILITY FUNCTIONS ----------
function getProductById(id) {
  return productDatabase.find(p => p.id == id);
}

function handleInquiry(productName, price) {
  const msg = `🛍️ *NEW INQUIRY*\n📦 Product: ${productName}\n💰 Price: ₹${price}\nPlease provide more details.`;
  window.open(`https://wa.me/918055698328?text=${encodeURIComponent(msg)}`, '_blank');
  showToast('Inquiry submitted! Redirecting to WhatsApp...');
}

function addToWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    showToast('Added to wishlist! ❤️');
  } else {
    showToast('Already in wishlist');
  }
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-24 right-4 bg-neon text-white px-5 py-3 rounded-xl shadow-2xl z-50 transition-all duration-500 transform translate-x-full`;
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.transform = 'translateX(0)'; }, 100);
  setTimeout(() => {
    toast.style.transform = 'translateX(120%)';
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

// ---------- NAVBAR LOADER ----------
function loadNavbar() {
  const container = document.getElementById('navbar-placeholder');
  if (!container) return;
  container.innerHTML = `
    <nav class="nav-blur px-4 py-3">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-neon to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">YB</div>
          <span class="text-xl font-bold font-display text-white">Your<span class="text-neon">Brand</span></span>
        </a>
        <div class="hidden lg:flex items-center gap-8" id="desktopNavLinks">
          <a href="index.html" class="text-sm text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="products.html" class="text-sm text-gray-300 hover:text-white transition-colors">Products</a>
          <a href="bulk-order.html" class="text-sm text-gray-300 hover:text-white transition-colors">Bulk Orders</a>
          <a href="custom-designer.html" class="text-sm text-gray-300 hover:text-white transition-colors">Designer</a>
          <a href="contact.html" class="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
        </div>
        <div class="flex items-center gap-3">
          <a href="login.html" class="btn-outline text-sm py-2 px-5 hidden sm:inline-block">Login</a>
          <a href="register.html" class="btn-primary text-sm py-2 px-5 hidden sm:inline-block">Get Started</a>
          <a href="https://wa.me/918055698328" target="_blank" rel="noopener" class="w-10 h-10 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center text-green-400 hover:bg-green-500/30 transition-all hover:scale-110" title="Chat on WhatsApp">
            <i class="fab fa-whatsapp text-lg"></i>
          </a>
          <button id="mobileMenuBtn" class="lg:hidden w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white hover:border-neon/50 transition-all">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div id="mobileMenu" class="lg:hidden hidden mt-3 pb-3 border-t border-white/5 pt-3">
        <div class="flex flex-col gap-2">
          <a href="index.html" class="px-4 py-3 rounded-lg hover:bg-white/5 text-sm transition-all">Home</a>
          <a href="products.html" class="px-4 py-3 rounded-lg hover:bg-white/5 text-sm transition-all">Products</a>
          <a href="bulk-order.html" class="px-4 py-3 rounded-lg hover:bg-white/5 text-sm transition-all">Bulk Orders</a>
          <a href="custom-designer.html" class="px-4 py-3 rounded-lg hover:bg-white/5 text-sm transition-all">Designer</a>
          <a href="contact.html" class="px-4 py-3 rounded-lg hover:bg-white/5 text-sm transition-all">Contact</a>
          <div class="flex gap-3 px-4 pt-2">
            <a href="login.html" class="btn-outline text-sm py-2 px-5 flex-1 text-center">Login</a>
            <a href="register.html" class="btn-primary text-sm py-2 px-5 flex-1 text-center">Register</a>
          </div>
        </div>
      </div>
    </nav>
  `;

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
  }
}

// ---------- FOOTER LOADER ----------
function loadFooter() {
  const container = document.getElementById('footer-placeholder');
  if (!container) return;
  container.innerHTML = `
    <footer class="border-t border-white/5 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-neon to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">YB</div>
              <span class="text-xl font-bold font-display text-white">Your<span class="text-neon">Brand</span></span>
            </div>
            <p class="text-sm text-gray-500 leading-relaxed">Premium custom printing solutions for businesses, schools, and events. Quality you can trust.</p>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Quick Links</h4>
            <div class="space-y-2 text-sm text-gray-400">
              <a href="products.html" class="block hover:text-neon transition-colors">Products</a>
              <a href="bulk-order.html" class="block hover:text-neon transition-colors">Bulk Orders</a>
              <a href="custom-designer.html" class="block hover:text-neon transition-colors">Custom Designer</a>
              <a href="contact.html" class="block hover:text-neon transition-colors">About Us</a>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Services</h4>
            <div class="space-y-2 text-sm text-gray-400">
              <a href="#" class="block hover:text-neon transition-colors">School Uniforms</a>
              <a href="#" class="block hover:text-neon transition-colors">Sports Jerseys</a>
              <a href="#" class="block hover:text-neon transition-colors">Corporate Printing</a>
              <a href="#" class="block hover:text-neon transition-colors">Hoodie Printing</a>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Contact</h4>
            <div class="space-y-2 text-sm text-gray-400">
              <p><i class="fas fa-phone text-neon mr-2"></i> +91 8055698328</p>
              <p><i class="fas fa-envelope text-neon mr-2"></i> hello@yourbrand.com</p>
              <a href="https://wa.me/918055698328" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mt-2">
                <i class="fab fa-whatsapp"></i> WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; 2026 Your Brand Name. All rights reserved.</p>
          <div class="flex gap-6">
            <a href="#" class="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-gray-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// ---------- NAVBAR SCROLL EFFECT ----------
function initNavScroll() {
  const navbar = document.getElementById('navbar-placeholder')?.querySelector('.nav-blur');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-2xl', 'shadow-black/50');
    } else {
      navbar.classList.remove('shadow-2xl', 'shadow-black/50');
    }
  });
}

// ---------- HOME PAGE SPECIFIC ----------
function renderHomeProducts() {
  const grid = document.getElementById('homeProductGrid');
  if (!grid) return;
  grid.innerHTML = productDatabase.slice(0, 8).map(p => `
    <div class="glass-card p-5 group cursor-pointer" data-aos="fade-up">
      <div class="relative h-52 rounded-xl bg-white/5 flex items-center justify-center mb-4 overflow-hidden">
        <img src="${p.images[0]}" alt="${p.name}" class="h-full w-full object-cover group-hover:scale-110 transition duration-500">
        <span class="absolute top-3 left-3 bg-neon text-white text-xs font-bold px-3 py-1 rounded-full">${p.badge}</span>
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <a href="product-detail.html?id=${p.id}" class="btn-primary text-xs py-2 px-5">View Details</a>
        </div>
      </div>
      <p class="text-xs text-neon font-medium mb-1">${p.category}</p>
      <h3 class="font-semibold text-white mb-1 group-hover:text-neon transition-colors">${p.name}</h3>
      <div class="flex items-center justify-between">
        <span class="text-lg font-bold text-white">₹${p.price}<span class="text-xs text-gray-500">/piece</span></span>
        <span class="text-xs text-gray-500">${p.colors.length} colors</span>
      </div>
      <div class="flex gap-2 mt-3">
        <a href="product-detail.html?id=${p.id}" class="flex-1 btn-outline text-xs py-2 px-3 text-center">View Details</a>
        <button onclick="handleInquiry('${p.name}', ${p.price})" class="flex-1 btn-primary text-xs py-2 px-3">Get Quote</button>
      </div>
    </div>
  `).join('');
}

function renderFeatures() {
  const grid = document.getElementById('featuresGrid');
  if (!grid) return;
  const features = [
    { icon: 'fa-bolt', title: 'Fast Delivery', desc: 'Express 5‑7 day turnaround for bulk orders with real‑time tracking.' },
    { icon: 'fa-medal', title: 'Premium Fabric', desc: '100% combed cotton, bio‑washed for ultimate softness and durability.' },
    { icon: 'fa-print', title: 'Best Printing Quality', desc: 'DTG, screen printing & embroidery with vibrant, long‑lasting colors.' },
    { icon: 'fa-tags', title: 'Bulk Discounts', desc: 'Save up to 40% on orders above 100 pieces. Best price guaranteed.' },
    { icon: 'fa-paint-brush', title: 'Design Support', desc: 'Free professional design assistance for your custom artwork.' },
    { icon: 'fa-headset', title: '24/7 Support', desc: 'Dedicated account manager for every bulk order. Always here to help.' }
  ];
  grid.innerHTML = features.map((f, i) => `
    <div class="glass-card p-6 text-center group" data-aos="fade-up" data-aos-delay="${i * 80}">
      <div class="w-14 h-14 mx-auto mb-4 bg-neon/10 rounded-2xl flex items-center justify-center text-neon text-2xl group-hover:bg-neon/20 group-hover:scale-110 transition-all duration-300">
        <i class="fas ${f.icon}"></i>
      </div>
      <h3 class="font-semibold text-white mb-2">${f.title}</h3>
      <p class="text-sm text-gray-400">${f.desc}</p>
    </div>
  `).join('');
}

function renderReviews() {
  const wrapper = document.getElementById('reviewsWrapper');
  if (!wrapper) return;
  const reviews = [
    { name: 'Rahul Sharma', role: 'School Principal', rating: 5, text: 'Outstanding quality! Ordered 500 school T‑shirts and they delivered before the deadline. The print quality is exceptional.' },
    { name: 'Priya Patel', role: 'Event Manager', rating: 5, text: 'Best printing service for our college fest. The hoodies were a huge hit. Will definitely order again!' },
    { name: 'Amit Kumar', role: 'Startup Founder', rating: 5, text: 'Our team uniforms look absolutely premium. The fabric quality and print exceeded our expectations.' },
    { name: 'Sarah Johnson', role: 'HR Manager', rating: 5, text: 'Professional service from start to finish. The corporate polos for our annual event were perfect.' },
    { name: 'Vikram Singh', role: 'Sports Coach', rating: 5, text: 'The jerseys for our cricket team came out amazing. Great color matching and comfortable fabric.' }
  ];
  wrapper.innerHTML = reviews.map(r => `
    <div class="swiper-slide">
      <div class="glass-card p-6 mx-2">
        <div class="flex items-center gap-1 mb-3 text-yellow-400">
          ${'<i class="fas fa-star"></i>'.repeat(r.rating)}
        </div>
        <p class="text-gray-300 mb-4 leading-relaxed">"${r.text}"</p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-neon to-blue-600 flex items-center justify-center text-white font-bold">${r.name[0]}</div>
          <div>
            <p class="font-semibold text-white text-sm">${r.name}</p>
            <p class="text-xs text-gray-500">${r.role}</p>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFAQ() {
  const container = document.getElementById('faqContainer');
  if (!container) return;
  const faqs = [
    { q: 'What is the minimum order quantity?', a: 'Our minimum order quantity starts from 50 pieces for custom printing. For smaller quantities, please contact us for special arrangements.' },
    { q: 'How long does delivery take?', a: 'Standard delivery takes 7‑10 business days for bulk orders. Express delivery (5‑7 days) is available at a small premium.' },
    { q: 'What printing methods do you offer?', a: 'We offer DTG (Direct to Garment), screen printing, embroidery, sublimation, and heat transfer printing.' },
    { q: 'Can I get a sample before bulk order?', a: 'Yes! We provide paid samples so you can check the quality before placing a bulk order. The sample cost is adjusted in the final invoice.' },
    { q: 'Do you provide design assistance?', a: 'Absolutely! Our design team helps you create or refine your artwork at no extra cost for bulk orders.' }
  ];
  container.innerHTML = faqs.map((f, i) => `
    <div class="glass-card overflow-hidden" data-aos="fade-up" data-aos-delay="${i * 60}">
      <button class="w-full p-5 text-left flex justify-between items-center faq-toggle" data-index="${i}">
        <span class="font-medium text-white pr-4">${f.q}</span>
        <i class="fas fa-plus text-neon transition-transform duration-300 text-sm flex-shrink-0"></i>
      </button>
      <div class="faq-answer hidden px-5 pb-5 text-sm text-gray-400 leading-relaxed">${f.a}</div>
    </div>
  `).join('');

  // FAQ toggle
  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('i');
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
      document.querySelectorAll('.faq-toggle i').forEach(i => { i.classList.remove('fa-minus', 'rotate-180'); i.classList.add('fa-plus'); });
      answer.classList.toggle('hidden');
      if (!answer.classList.contains('hidden')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      }
    });
  });
}

// ---------- INIT SWIPER ----------
function initSwiper() {
  if (document.querySelector('.reviewsSwiper')) {
    new Swiper('.reviewsSwiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });
  }
}

// ---------- GSAP ANIMATIONS ----------
function initGSAP() {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.floating-particle', {
      scrollTrigger: { trigger: '#hero', start: 'top top' },
      opacity: 0,
      scale: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: 'power3.out'
    });
  }
}

// ---------- PRODUCT DETAIL PAGE ASSIST ----------
// This function is available globally for product-detail.html
window.inquireNow = function(name, price) {
  // This function will be overridden by product-detail.html if needed,
  // but provides a fallback.
  const msg = `🛍️ *Product Inquiry*\n📦 ${name}\n💰 ₹${price}\nPlease share details.`;
  window.open(`https://wa.me/918055698328?text=${encodeURIComponent(msg)}`, '_blank');
};

// ---------- INITIALIZATION ----------
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }

  // Load common components
  loadNavbar();
  loadFooter();
  initNavScroll();

  // Page-specific logic
  const path = window.location.pathname;
  if (path.includes('index.html') || path === '/' || path === '') {
    renderHomeProducts();
    renderFeatures();
    renderReviews();
    renderFAQ();
    initSwiper();
    initGSAP();
  }

  // Additional pages could be initialized here if needed
});
