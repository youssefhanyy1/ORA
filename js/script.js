/* =====================================================
   ORA â€” Premium JS v3
   ===================================================== */

// â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const PRODUCTS = [
  {
    id: 0,
    name: "Cartier Santos Black Rubber",
    category: "watches",
    price: 395,
    num: "I",
    desc: "Black dial with silver bezel, premium rubber strap, iconic square Cartier Santos profile",
    badge: "New",
    img: "assets/products/cartier-santos-black-rubber.jpeg"
  },
  {
    id: 7,
    name: "Tommy Hilfiger White Dial Metal",
    category: "watches",
    price: 380,
    num: "II",
    desc: "White dial, stainless steel bracelet, detailed sub-dial styling, precise quartz movement, with Tommy Hilfiger box and bag",
    badge: "New",
    img: "assets/products/tommy-hilfiger-metal-bracelet.jpeg"
  },
  {
    id: 8,
    name: "Tommy Hilfiger Black Dial Metal",
    category: "watches",
    price: 380,
    num: "III",
    desc: "Black dial, stainless steel bracelet, detailed sub-dial styling, precise quartz movement, with Tommy Hilfiger box and bag",
    badge: "New",
    img: "assets/products/tommy-hilfiger-black-dial-metal.jpeg"
  },
  {
    id: 9,
    name: "Rolex Datejust White Diamond",
    category: "watches",
    price: 380,
    num: "IV",
    desc: "White dial with crystal diamond markers, date magnifier lens, comfortable jubilee bracelet, with Rolex box and bag",
    badge: "New",
    img: "assets/products/rolex-datejust-white-diamond.jpeg"
  },
  {
    id: 10,
    name: "Omega Seamaster Black Leather",
    category: "watches",
    price: 350,
    num: "V",
    desc: "Black leather strap, day-date display, black and chrome finish, with Omega box and bag",
    badge: "New",
    img: "assets/products/omega-seamaster-black-leather.jpeg"
  },
  {
    id: 11,
    name: "Tommy Hilfiger Black Leather",
    category: "watches",
    price: 350,
    num: "VI",
    desc: "Black leather strap, modern silver dial, day-date display, lightweight streamlined design, with Tommy Hilfiger box and bag",
    badge: "New",
    img: "assets/products/tommy-hilfiger-black-leather.jpeg"
  },
  {
    id: 12,
    name: "Patek Philippe Nautilus White Dial",
    category: "watches",
    price: 330,
    num: "VII",
    desc: "Striped white dial, slim Nautilus profile, secure double clasp, with Patek Philippe box and bag",
    badge: "New",
    img: "assets/products/patek-philippe-nautilus-white-dial.jpeg"
  },
  {
    id: 13,
    name: "Tissot Chronograph White Dial",
    category: "watches",
    price: 330,
    num: "VIII",
    desc: "White chronograph dial, external tachymeter bezel, bright silver tone, with Tissot box and bag",
    badge: "New",
    img: "assets/products/tissot-chronograph-white-dial.jpeg"
  },
  {
    id: 14,
    name: "Louis Vuitton Symphony",
    category: "perfumes",
    price: null,
    num: "I",
    desc: "Sparkling ginger, natural grapefruit, and bergamot over a soft musky-woody base",
    badge: "New",
    img: "assets/products/louis-vuitton-symphony.jpeg",
    variants: [
      { label: "30 ml", arLabel: "الحجم 30 مل", price: 180 },
      { label: "50 ml", arLabel: "الحجم 50 مل", price: 240 },
      { label: "100 ml", arLabel: "الحجم 100 مل", price: 380 },
      { label: "Tester 5 ml", arLabel: "تستر 5 مل", price: 35 },
      { label: "Tester 10 ml", arLabel: "تستر 10 مل", price: 55 },
    ]
  },
  {
    id: 15,
    name: "Sospiro Vibrato",
    category: "perfumes",
    price: null,
    num: "II",
    desc: "Bergamot, grapefruit, warm ginger, magnolia, jasmine, powdery woods, patchouli, orris, and amber",
    badge: "New",
    img: "assets/products/sospiro-vibrato.jpeg",
    variants: [
      { label: "30 ml", arLabel: "الحجم 30 مل", price: 180 },
      { label: "50 ml", arLabel: "الحجم 50 مل", price: 240 },
      { label: "100 ml", arLabel: "الحجم 100 مل", price: 380 },
      { label: "Tester 5 ml", arLabel: "تستر 5 مل", price: 35 },
      { label: "Tester 10 ml", arLabel: "تستر 10 مل", price: 55 },
    ]
  },
  {
    id: 16,
    name: "Erba Pura",
    category: "perfumes",
    price: null,
    num: "III",
    desc: "توليفة فاخرة من الفواكه الاستوائية المتوسطية مع برغموت وليمون، قاعدة من الفانيليا الفاخرة والعنبر والمسك الأبيض — ثبات أسطوري يلتصق بالجلد والملابس لأيام",
    badge: "New",
    img: "assets/products/erba-pura.jpeg",
    variants: [
      { label: "30 ml", arLabel: "الحجم 30 مل", price: 190 },
      { label: "50 ml", arLabel: "الحجم 50 مل", price: 250 },
      { label: "100 ml", arLabel: "الحجم 100 مل", price: 390 },
      { label: "Tester 5 ml", arLabel: "تستر 5 مل", price: 40 },
      { label: "Tester 10 ml", arLabel: "تستر 10 مل", price: 60 },
    ]
  },
  {
    id: 17,
    name: "Dior Sauvage",
    category: "perfumes",
    price: null,
    num: "IV",
    desc: "توليفة ذكورية حادة ونظيفة من برغموت كالابريا وجرعة مكثفة من الأمبروكسان — قاعدة خشبية دافئة تترك أثراً قوياً لا يخطئه أحد",
    badge: "New",
    img: "assets/products/dior-sauvage.jpeg",
    variants: [
      { label: "30 ml", arLabel: "الحجم 30 مل", price: 180 },
      { label: "50 ml", arLabel: "الحجم 50 مل", price: 240 },
      { label: "100 ml", arLabel: "الحجم 100 مل", price: 380 },
      { label: "Tester 5 ml", arLabel: "تستر 5 مل", price: 35 },
      { label: "Tester 10 ml", arLabel: "تستر 10 مل", price: 55 },
    ]
  },
  {
    id: 18,
    name: "Orto Parisi Megamare",
    category: "perfumes",
    price: null,
    num: "V",
    desc: "لا يشبه العطور البحرية التقليدية، بل يرتكز على غموض وقوة أعماق المحيط. عاصفة بحرية مالحة وحادة مع قاعدة أسطورية من العنبر والأخشاب لثبات مرعب يدوم لأيام.",
    badge: "New",
    img: "assets/products/orto-parisi-megamare.jpeg",
    variants: [
      { label: "30 ml", arLabel: "الحجم 30 مل", price: 210 },
      { label: "50 ml", arLabel: "الحجم 50 مل", price: 290 },
      { label: "100 ml", arLabel: "الحجم 100 مل", price: 470 },
      { label: "Tester 5 ml", arLabel: "تستر 5 مل", price: 45 },
      { label: "Tester 10 ml", arLabel: "تستر 10 مل", price: 65 },
    ]
  },
  {
    id: 19,
    name: "Stronger With You Intensely",
    category: "perfumes",
    price: null,
    num: "VI",
    desc: "توليفة دافئة ومغرية تجمع بين جرأة الفلفل الوردي، حلاوة الكراميل المملح، وعمق الأخشاب. يستقر على قاعدة كريمية من الفانيليا والجلود لثبات ممتاز وهالة عطرية جذابة.",
    badge: "New",
    img: "assets/products/stronger-with-you-intensely.jpeg",
    variants: [
      { label: "30 ml", arLabel: "الحجم 30 مل", price: 160 },
      { label: "50 ml", arLabel: "الحجم 50 مل", price: 210 },
      { label: "100 ml", arLabel: "الحجم 100 مل", price: 330 },
      { label: "Tester 5 ml", arLabel: "تستر 5 مل", price: 35 },
      { label: "Tester 10 ml", arLabel: "تستر 10 مل", price: 55 },
    ]
  },
  {
    id: 20,
    name: "Dior Homme Intense",
    category: "perfumes",
    price: null,
    num: "VII",
    desc: "يرتكز على الفخامة الأرستقراطية والنقاء المخملي عبر توليفة أيقونية تعتمد على زهرة السوسن البودرية واللافندر، ويستقر على قاعدة دافئة من خشب الأرز ونجيل الهند.",
    badge: "New",
    img: "assets/products/dior-homme-intense.jpeg",
    variants: [
      { label: "30 ml", arLabel: "الحجم 30 مل", price: 160 },
      { label: "50 ml", arLabel: "الحجم 50 مل", price: 210 },
      { label: "100 ml", arLabel: "الحجم 100 مل", price: 330 },
      { label: "Tester 5 ml", arLabel: "تستر 5 مل", price: 35 },
      { label: "Tester 10 ml", arLabel: "تستر 10 مل", price: 55 },
    ]
  },
  {
    id: 21,
    name: "Bianco Latte",
    category: "perfumes",
    price: null,
    num: "VIII",
    desc: "توليفة خطية شهية وفائقة النقاء تعتمد على الحليب الدافئ، الكراميل، والفانيليا، لتمنح شعوراً عارماً بالراحة والدفء مع قاعدة غنية من المسك الأبيض لكثافة تدوم.",
    badge: "New",
    img: "assets/products/bianco-latte.jpeg",
    variants: [
      { label: "30 ml", arLabel: "الحجم 30 مل", price: 170 },
      { label: "50 ml", arLabel: "الحجم 50 مل", price: 230 },
      { label: "100 ml", arLabel: "الحجم 100 مل", price: 370 },
      { label: "Tester 5 ml", arLabel: "تستر 5 مل", price: 35 },
      { label: "Tester 10 ml", arLabel: "تستر 10 مل", price: 55 },
    ]
  },
  {
    id: 22,
    name: "Stronger Power Of You",
    category: "perfumes",
    price: null,
    num: "IX",
    desc: "توليفة استوائية مشرقة تفيض بالدفء، تعتمد على الباشن فروت واللمسات الشمسية، وتستقر على قاعدة بلسمية عميقة من فانيليا مدغشقر لعمق كرميلي سكري وثبات مخملي.",
    badge: "New",
    img: "assets/products/stronger-power-of-you.jpeg",
    variants: [
      { label: "30 ml", arLabel: "الحجم 30 مل", price: 160 },
      { label: "50 ml", arLabel: "الحجم 50 مل", price: 210 },
      { label: "100 ml", arLabel: "الحجم 100 مل", price: 330 },
      { label: "Tester 5 ml", arLabel: "تستر 5 مل", price: 35 },
      { label: "Tester 10 ml", arLabel: "تستر 10 مل", price: 55 },
    ]
  },
];

const FINDER_MODES = {
  evening: [9, 14],
  daily: [11, 15],
  gift: [13, 12],
  collector: [0, 7],
};

const CART_STORAGE_KEY = 'ora-cart-v1';
let cart = loadCart();

// â”€â”€ DOM refs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const $ = id => document.getElementById(id);
const productsGrid = $('products-grid');
const cartSidebar  = $('cart-sidebar');
const cartOverlay  = $('cart-overlay');
const cartBadge    = $('cart-badge');
const cartItemsEl  = $('cart-items');
const cartTotalEl  = $('cart-total');
const cartSubEl    = $('cart-subtotal');
const cartShippingEl = $('cart-shipping');
const cartCountSub = $('cart-count-sub');
const productSearch = $('product-search');
const productSort = $('product-sort');
const productsCount = $('products-count');
const finderShowcase = $('finder-showcase');
const quickviewOverlay = $('quickview-overlay');
const quickviewModal = $('quickview-modal');
const quickviewContent = $('quickview-content');

let activeFilter = 'all';
let activeFinder = 'evening';

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
    return saved
      .map(savedItem => {
        const product = PRODUCTS.find(p => p.id === savedItem.id);
        const quantity = Number(savedItem.quantity) || 0;
        if (!product || quantity <= 0) return null;
        return createCartItem(product, quantity, savedItem.variantIndex);
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

function createCartItem(product, quantity = 1, variantIndex = null) {
  const item = { ...product, quantity };
  if (hasVariants(product) && variantIndex !== null && variantIndex !== undefined) {
    const index = Number(variantIndex);
    const variant = product.variants[index];
    if (!variant) return null;
    item.variantIndex = index;
    item.selectedVariant = variant;
    item.price = variant.price;
  }
  return item;
}

function cartItemKey(item) {
  return item.variantIndex !== undefined ? `${item.id}:${item.variantIndex}` : String(item.id);
}

function findCartItem(id, variantIndex = null) {
  const key = variantIndex !== null && variantIndex !== undefined ? `${id}:${Number(variantIndex)}` : String(id);
  return cart.find(item => cartItemKey(item) === key);
}

function persistCart() {
  localStorage.setItem(
    CART_STORAGE_KEY,
    JSON.stringify(cart.map(item => ({
      id: item.id,
      quantity: item.quantity,
      variantIndex: item.variantIndex ?? null
    })))
  );
}

function getProductMeta(product) {
  const L = typeof LANG !== 'undefined' ? LANG : null;
  if (L && typeof L.productMeta === 'function') return L.productMeta(product.id);
  return {
    notes: ['Certified authentic', 'Gift-ready packaging', 'Concierge support'],
    ritual: 'A refined everyday signature.',
  };
}

function hasPrice(item) {
  return Number.isFinite(item.price);
}

function hasVariants(item) {
  return Array.isArray(item.variants) && item.variants.length > 0;
}

function variantPrices(item) {
  return hasVariants(item) ? item.variants.map(v => v.price).filter(Number.isFinite) : [];
}

function productDefaultVariantIndex(product) {
  if (!hasVariants(product)) return null;
  const prices = product.variants.map((variant, index) => ({ index, price: variant.price }));
  prices.sort((a, b) => a.price - b.price);
  return prices[0]?.index ?? 0;
}

function productVariant(product, variantIndex) {
  if (!hasVariants(product)) return null;
  return product.variants[Number(variantIndex)] || null;
}

function selectedVariant(item) {
  return item.selectedVariant || productVariant(item, item.variantIndex);
}

function minVariantPrice(item) {
  const prices = variantPrices(item);
  return prices.length ? Math.min(...prices) : 0;
}

function productPriceValue(item, fallback = Number.POSITIVE_INFINITY) {
  if (hasPrice(item)) return item.price;
  if (hasVariants(item)) return minVariantPrice(item);
  return fallback;
}

function isQuotedItem(item) {
  return !hasPrice(item) && !hasVariants(item);
}

function formatMoney(n) {
  const L = typeof LANG !== 'undefined' ? LANG : null;
  return L ? L.formatPrice(n) : n.toLocaleString('en-EG') + ' EGP';
}

function formatProductPrice(item, quantity = 1) {
  const L = typeof LANG !== 'undefined' ? LANG : null;
  const variant = selectedVariant(item);
  if (variant) return formatMoney(variant.price * quantity);
  if (hasVariants(item)) {
    const from = L ? L.str('from_price') : 'From';
    return `${from} ${formatMoney(minVariantPrice(item) * quantity)}`;
  }
  return hasPrice(item) ? formatMoney(item.price * quantity) : (L ? L.str('price_on_request') : 'Price on request');
}

function formatVariantLabel(variant) {
  const L = typeof LANG !== 'undefined' ? LANG : null;
  return L && L.isAr && variant.arLabel ? variant.arLabel : variant.label;
}

function selectedVariantLabel(item) {
  const variant = selectedVariant(item);
  return variant ? formatVariantLabel(variant) : '';
}

function variantFullLabel(variant) {
  return `${formatVariantLabel(variant)} - ${formatMoney(variant.price)}`;
}

function formatVariantList(item) {
  return hasVariants(item)
    ? item.variants.map(variant => `${formatVariantLabel(variant)}: ${formatMoney(variant.price)}`)
    : [];
}

function pricedLineTotal(item) {
  const variant = selectedVariant(item);
  if (variant) return variant.price * item.quantity;
  if (hasPrice(item)) return item.price * item.quantity;
  if (hasVariants(item)) return minVariantPrice(item) * item.quantity;
  return 0;
}

function chooseVariantInQuickView(variantIndex) {
  const productId = Number(quickviewContent?.dataset.productId);
  const product = PRODUCTS.find(p => p.id === productId);
  const variant = productVariant(product, variantIndex);
  if (!product || !variant) return;

  quickviewContent.dataset.variantIndex = String(variantIndex);
  quickviewContent.querySelectorAll('[data-variant-index]').forEach(btn => {
    const active = btn.dataset.variantIndex === String(variantIndex);
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-checked', String(active));
  });

  const label = variantFullLabel(variant);
  const priceEl = quickviewContent.querySelector('[data-selected-price]');
  if (priceEl) priceEl.textContent = label;
  const addPriceEl = quickviewContent.querySelector('[data-qv-add-price]');
  if (addPriceEl) addPriceEl.textContent = label;
}

function selectedQuickViewVariantIndex(product) {
  if (!hasVariants(product)) return null;
  const current = quickviewContent?.dataset.variantIndex;
  return current !== undefined && current !== '' ? Number(current) : productDefaultVariantIndex(product);
}

function addProductToCart(product, variantIndex = null) {
  const cartItem = createCartItem(product, 1, variantIndex);
  if (!cartItem) return null;
  const existing = findCartItem(product.id, cartItem.variantIndex);
  existing ? existing.quantity++ : cart.push(cartItem);
  return cartItem;
}

// â”€â”€ Hero Motion Canvas â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
(function initHeroMotionCanvas() {
  const canvas = $('hero-motion-canvas');
  const hero = $('hero');
  if (!canvas || !hero) return;

  const ctx = canvas.getContext('2d');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let time = 0;

  const threads = Array.from({ length: 9 }, (_, index) => ({
    offset: index / 8,
    speed: 0.45 + index * 0.045,
    amp: 42 + index * 6,
    hue: index % 3,
  }));

  const facets = Array.from({ length: 22 }, () => ({
    x: Math.random(),
    y: Math.random(),
    size: Math.random() * 8 + 4,
    speed: Math.random() * 0.22 + 0.08,
    spin: Math.random() * Math.PI,
  }));

  function resize() {
    const rect = hero.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawThread(thread, index) {
    const colors = [
      'rgba(226,169,139,',
      'rgba(123,215,200,',
      'rgba(242,167,181,',
    ];
    const yBase = height * (0.23 + thread.offset * 0.52);
    const alpha = 0.2 - index * 0.011;
    ctx.beginPath();
    for (let x = -80; x <= width + 80; x += 18) {
      const drift = time * thread.speed + thread.offset * 9;
      const y = yBase
        + Math.sin((x * 0.008) + drift) * thread.amp
        + Math.cos((x * 0.014) - drift * 0.7) * (thread.amp * 0.32);
      if (x === -80) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `${colors[thread.hue]}${Math.max(alpha, 0.05)})`;
    ctx.lineWidth = index % 3 === 0 ? 1.2 : 0.7;
    ctx.stroke();
  }

  function drawFacet(facet) {
    const x = facet.x * width;
    const y = ((facet.y + time * facet.speed * 0.03) % 1.15) * height - height * 0.08;
    const pulse = Math.sin(time * 2 + facet.spin) * 0.35 + 0.65;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(facet.spin + time * 0.25);
    ctx.strokeStyle = `rgba(226,169,139,${0.12 * pulse})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -facet.size);
    ctx.lineTo(facet.size * 0.62, 0);
    ctx.lineTo(0, facet.size);
    ctx.lineTo(-facet.size * 0.62, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  function frame() {
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'lighter';
    threads.forEach(drawThread);
    facets.forEach(drawFacet);
    ctx.globalCompositeOperation = 'source-over';
    if (!reducedMotion) {
      time += 0.012;
      requestAnimationFrame(frame);
    }
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  frame();
})();



// â”€â”€ Canvas Particle Constellation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
(function initCanvas() {
  const canvas = $('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x:-1000, y:-1000 };

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', () => { resize(); spawnParticles(); });
  document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  class Particle {
    constructor() { this.reset(true); }
    reset(initial) {
      this.x  = Math.random() * W;
      this.y  = initial ? Math.random() * H : H + 10;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.r  = Math.random() * 1.5 + 0.3;
      this.alpha = 0;
      this.maxAlpha = Math.random() * 0.5 + 0.1;
      this.life  = 0;
      this.maxLife = Math.random() * 300 + 200;
    }
    update() {
      this.life++;
      const progress = this.life / this.maxLife;
      this.alpha = progress < 0.1
        ? (progress / 0.1) * this.maxAlpha
        : progress > 0.85
          ? ((1 - progress) / 0.15) * this.maxAlpha
          : this.maxAlpha;
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 100) {
        const force = (100 - dist) / 100 * 0.5;
        this.vx += (dx / dist) * force;
        this.vy += (dy / dist) * force;
      }
      this.vx *= 0.98; this.vy *= 0.98;
      this.x += this.vx; this.y += this.vy;
      if (this.life >= this.maxLife) this.reset(false);
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${this.alpha})`;
      ctx.fill();
    }
  }

  function spawnParticles() {
    const count = Math.min(80, Math.floor(W * H / 14000));
    particles = Array.from({ length: count }, () => new Particle());
  }
  spawnParticles();

  function drawConnections() {
    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < maxDist) {
          const a = (1 - dist / maxDist) * 0.12 * Math.min(particles[i].alpha, particles[j].alpha) * 6;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(201,168,76,${a})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(tick);
  }
  tick();
})();

// â”€â”€ Marquee â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function rebuildMarquee() {
  const track = $('marquee-track');
  if (!track) return;
  const items = (typeof LANG !== 'undefined') ? LANG.marqueeItems() : [
    { text: 'Complimentary Shipping', gold: true },
    { text: 'Authenticity Guaranteed', gold: false },
    { text: 'Exclusive Designs', gold: true },
    { text: 'New Arrivals Weekly', gold: false },
    { text: 'Premium Quality', gold: true },
    { text: 'Handcrafted Excellence', gold: false },
    { text: 'Luxury Experience', gold: true },
    { text: '30-Day Returns', gold: false },
  ];
  const build = () => items.map(i =>
    `<span class="marquee-item">
      <span class="dot"></span>
      <span class="${i.gold ? 'highlight' : ''}">${i.text}</span>
    </span>`
  ).join('');
  track.innerHTML = build() + build() + build() + build();
}
rebuildMarquee();

// â”€â”€ Signature Finder â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderFinder(mode = activeFinder) {
  if (!finderShowcase) return;
  activeFinder = mode;
  const L = typeof LANG !== 'undefined' ? LANG : null;
  const ids = FINDER_MODES[mode] || FINDER_MODES.evening;
  const picks = ids.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  const info = L && typeof L.finderMode === 'function'
    ? L.finderMode(mode)
    : {
        label: mode,
        title: 'A curated ORA pairing',
        text: 'A refined combination selected for the moment.',
        ritual: 'Wear it with quiet confidence.',
      };
  const total = picks.reduce((sum, p) => sum + productPriceValue(p, 0), 0);
  const hasQuotedPick = picks.some(isQuotedItem);
  const hasFromPick = picks.some(hasVariants);
  const fromPrefix = hasFromPick ? `${L ? L.str('from_price') : 'From'} ` : '';
  const quoteSuffix = hasQuotedPick ? ` + ${L ? L.str('quote_items') : 'quoted on WhatsApp'}` : '';
  const totalLabel = `${fromPrefix}${formatMoney(total)}${quoteSuffix}`;

  document.querySelectorAll('.finder-chip').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.finder === mode));

  finderShowcase.innerHTML = `
    <div class="finder-visual-stack">
      ${picks.map((p, i) => `
        <button class="finder-image-card finder-image-${i + 1}" type="button" data-view-id="${p.id}" aria-label="${L ? L.productName(p) : p.name}">
          <img src="${p.img}" alt="${L ? L.productName(p) : p.name}" loading="lazy">
        </button>
      `).join('')}
    </div>
    <div class="finder-result">
      <span class="finder-result-label">${info.label}</span>
      <h3>${info.title}</h3>
      <p>${info.text}</p>
      <div class="finder-pair-list">
        ${picks.map(p => `
          <button class="finder-pair-item" type="button" data-view-id="${p.id}">
            <span>${L ? L.productName(p) : p.name}</span>
            <strong>${formatProductPrice(p)}</strong>
          </button>
        `).join('')}
      </div>
      <div class="finder-ritual">${info.ritual}</div>
      <div class="finder-actions">
        <button class="finder-add-btn" type="button" data-finder-add="${ids.join(',')}">
          <span>${L ? L.str('add_pairing') : 'Add Pairing'}</span>
          <strong>${totalLabel}</strong>
        </button>
        <button class="finder-browse-btn" type="button" data-finder-scroll>${L ? L.str('browse_collection') : 'Browse Collection'}</button>
      </div>
    </div>`;
}

// â”€â”€ Navbar scroll â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
window.addEventListener('scroll', () => {
  const nb = $('navbar');
  if (nb) nb.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// â”€â”€ Scroll-reveal via IntersectionObserver â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = parseInt(el.dataset.delay || 0);
      setTimeout(() => el.classList.add('revealed'), delay);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.08 });

// â”€â”€ Render Products â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderProducts(filter = activeFilter) {
  if (!productsGrid) return;
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.filter === filter));

  const L = typeof LANG !== 'undefined' ? LANG : null;
  const query = (productSearch?.value || '').trim().toLowerCase();
  const sortMode = productSort?.value || 'featured';
  let list = filter === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.category === filter);

  if (query) {
    list = list.filter(p => {
      const haystack = [
        p.name,
        p.desc,
        p.category,
        L ? L.productName(p) : '',
        L ? L.productDesc(p) : '',
        L ? L.categoryLabel(p.category) : ''
      ].join(' ').toLowerCase();
      return haystack.includes(query);
    });
  }

  list.sort((a, b) => {
    if (sortMode === 'price-asc') return productPriceValue(a) - productPriceValue(b);
    if (sortMode === 'price-desc') {
      return productPriceValue(b, Number.NEGATIVE_INFINITY) - productPriceValue(a, Number.NEGATIVE_INFINITY);
    }
    if (sortMode === 'name') return (L ? L.productName(a) : a.name).localeCompare(L ? L.productName(b) : b.name);
    return PRODUCTS.indexOf(a) - PRODUCTS.indexOf(b);
  });

  if (productsCount) {
    productsCount.textContent = L && typeof L.collectionCount === 'function'
      ? L.collectionCount(list.length, PRODUCTS.length)
      : `${list.length} of ${PRODUCTS.length} items`;
  }

  productsGrid.style.opacity = '0';
  productsGrid.style.transform = 'translateY(10px)';
  productsGrid.style.transition = 'opacity 0.25s, transform 0.25s';

  setTimeout(() => {
    productsGrid.innerHTML = '';
    if (!list.length) {
      const empty = document.createElement('div');
      empty.className = 'products-empty';
      empty.innerHTML = `
        <div class="cart-empty-glyph">â—‡</div>
        <h3>${L ? L.str('no_results') : 'No products found'}</h3>
        <p>${L ? L.str('try_another_search') : 'Try another search or filter.'}</p>`;
      productsGrid.appendChild(empty);
      productsGrid.style.opacity = '1';
      productsGrid.style.transform = 'translateY(0)';
      return;
    }

    list.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.delay = i * 80;
      const L = typeof LANG !== 'undefined' ? LANG : null;
      const pName = L ? L.productName(p) : p.name;
      const pDesc = L ? L.productDesc(p) : p.desc;
      const pBadge = L ? L.productBadge(p) : p.badge;
      const pCat = L ? L.categoryLabel(p.category) : p.category;
      const pPrice = formatProductPrice(p);
      const addLabel = L ? L.str('add_to_cart') : 'Add to Cart';
      const addShort = L ? L.str('add_short') : '+ Add';
      const viewLabel = L ? L.str('view_details') : 'View Details';
      card.innerHTML = `
        <div class="card-top-line"></div>
        <div class="product-image-wrap">
          <img src="${p.img}" alt="${pName}" class="product-image" loading="lazy">
          <span class="cat-pill">${pCat}</span>
          ${pBadge ? `<span class="badge-pill ${p.badge === 'Limited' ? 'badge-limited' : p.badge === 'New' ? 'badge-new' : 'badge-best'}">${pBadge}</span>` : ''}
          <div class="num-tag">${p.num}</div>
          <div class="product-overlay">
            <button class="quick-view-btn" data-view-id="${p.id}">${viewLabel}</button>
            <button class="quick-add-btn" data-id="${p.id}">${addLabel}</button>
          </div>
        </div>
        <div class="product-info">
          <h3 class="product-title"><button class="product-title-btn" type="button" data-view-id="${p.id}">${pName}</button></h3>
          <p class="product-desc">${pDesc}</p>
          <div class="product-meta">
            <span class="product-price">${pPrice}</span>
            <button class="add-to-cart-btn" data-id="${p.id}"><span>${addShort}</span></button>
          </div>
        </div>`;
      productsGrid.appendChild(card);
      revealObserver.observe(card);
    });

    productsGrid.style.opacity = '1';
    productsGrid.style.transform = 'translateY(0)';
  }, 260);
}

// â”€â”€ Cart: Add â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function addToCart(id, variantIndex = null) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  if (hasVariants(product) && variantIndex === null) {
    openQuickView(id);
    return;
  }
  const cartItem = addProductToCart(product, variantIndex);
  if (!cartItem) return;
  updateCartUI();
  const L = typeof LANG !== 'undefined' ? LANG : null;
  const pName = L ? L.productName(product) : product.name;
  const variantLabel = selectedVariantLabel(cartItem);
  const addedMsg = L ? L.str('added') : ' â€” Added';
  showToast(`${pName}${variantLabel ? ` (${variantLabel})` : ''}${addedMsg}`);
  cartBadge.classList.remove('pop');
  void cartBadge.offsetWidth;
  cartBadge.classList.add('pop');
}

// â”€â”€ Cart: Remove â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function removeFromCart(key) {
  cart = cart.filter(i => cartItemKey(i) !== String(key));
  updateCartUI();
}

// â”€â”€ Cart: Qty change â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function changeQty(key, delta) {
  const item = cart.find(i => cartItemKey(i) === String(key));
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart = cart.filter(i => cartItemKey(i) !== String(key));
  updateCartUI();
}

function addPairToCart(ids) {
  ids.forEach(id => {
    const product = PRODUCTS.find(p => p.id === Number(id));
    if (!product) return;
    const variantIndex = hasVariants(product) ? productDefaultVariantIndex(product) : null;
    addProductToCart(product, variantIndex);
  });
  updateCartUI();
  const L = typeof LANG !== 'undefined' ? LANG : null;
  showToast(L ? L.str('pair_added') : 'Pairing added to cart');
  cartBadge.classList.remove('pop');
  void cartBadge.offsetWidth;
  cartBadge.classList.add('pop');
}

// â”€â”€ Cart UI Update â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function updateCartUI() {
  persistCart();
  const L = typeof LANG !== 'undefined' ? LANG : null;
  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = cart.reduce((s, i) => s + pricedLineTotal(i), 0);
  const hasQuotedItems = cart.some(isQuotedItem);
  const hasFromItems = cart.some(hasVariants);

  cartBadge.textContent = totalItems;
  cartBadge.style.display = totalItems ? 'flex' : 'none';
  if (cartCountSub) {
    cartCountSub.textContent = totalItems === 0
      ? (L ? L.str('empty') : 'Empty')
      : `${totalItems} ${L ? L.str('item') : (totalItems > 1 ? 'items' : 'item')}`;
  }

  cartItemsEl.innerHTML = '';

  if (!cart.length) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-glyph">◇</div>
        <p>${L ? L.str('cart_empty') : 'Your cart is empty'}</p>
      </div>`;
  } else {
    cart.forEach(item => {
      const el = document.createElement('div');
      el.className = 'cart-item';
      const iName = L ? L.productName(item) : item.name;
      const iPrice = formatProductPrice(item, item.quantity);
      const removeLabel = L ? L.str('remove') : 'Remove';
      const key = cartItemKey(item);
      const variantLabel = selectedVariantLabel(item);
      el.innerHTML = `
        <div class="cart-item-thumb">
          <img src="${item.img}" alt="${iName}">
        </div>
        <div class="cart-item-info">
          <h4>${iName}</h4>
          ${variantLabel ? `<span class="cart-item-variant">${variantLabel}</span>` : ''}
          <div class="cart-item-controls">
            <button class="qty-btn" data-key="${key}" data-delta="-1">&minus;</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" data-key="${key}" data-delta="1">+</button>
          </div>
        </div>
        <div class="cart-item-actions">
          <span class="cart-item-price">${iPrice}</span>
          <button class="remove-btn" data-key="${key}" aria-label="${removeLabel}" title="${removeLabel}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
            <span>${removeLabel}</span>
          </button>
        </div>`;
      cartItemsEl.appendChild(el);
    });
  }

  const shippingFee = cart.length > 0 ? 15 : 0;
  const finalTotal = totalPrice + shippingFee;
  const fromPrefix = hasFromItems ? `${L ? L.str('from_price') : 'From'} ` : '';
  const quoteSuffix = hasQuotedItems ? ` + ${L ? L.str('quote_items') : 'quoted on WhatsApp'}` : '';
  if (cartTotalEl) cartTotalEl.textContent = fromPrefix + formatMoney(finalTotal) + quoteSuffix;
  if (cartSubEl)   cartSubEl.textContent   = fromPrefix + formatMoney(totalPrice) + quoteSuffix;
  if (cartShippingEl) cartShippingEl.textContent = formatMoney(shippingFee);
}

// â”€â”€ Toggle Cart â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function toggleCart() {
  const open = cartSidebar.classList.toggle('open');
  cartOverlay.classList.toggle('active', open);
  cartOverlay.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
}

function openQuickView(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product || !quickviewModal || !quickviewOverlay || !quickviewContent) return;
  const L = typeof LANG !== 'undefined' ? LANG : null;
  const meta = getProductMeta(product);
  const name = L ? L.productName(product) : product.name;
  const desc = L ? L.productDesc(product) : product.desc;
  const cat = L ? L.categoryLabel(product.category) : product.category;
  const badge = L ? L.productBadge(product) : product.badge;
  const price = formatProductPrice(product);
  const withVariants = hasVariants(product);
  const defaultVIdx = productDefaultVariantIndex(product);

  // Build size selector for products with variants
  let sizeSelectorHTML = '';
  if (withVariants) {
    const chooseSizeLabel = L ? L.str('choose_size') : 'Choose Size';
    sizeSelectorHTML = `
      <div class="qv-size-selector" role="radiogroup" aria-label="${L ? L.str('available_sizes') : 'Available sizes'}">
        <p class="qv-size-label">${chooseSizeLabel}</p>
        <div class="qv-size-options">
          ${product.variants.map((v, i) => {
            const vLabel = formatVariantLabel(v);
            const vPrice = formatMoney(v.price);
            const isDefault = i === defaultVIdx;
            return `<button class="qv-size-btn${isDefault ? ' active' : ''}" type="button" data-variant-index="${i}" role="radio" aria-checked="${isDefault}">
              <span class="qv-size-name">${vLabel}</span>
              <span class="qv-size-price">${vPrice}</span>
            </button>`;
          }).join('')}
        </div>
      </div>`;
  }

  // Set initial price for display (use selected variant price if variants exist)
  const initialPrice = withVariants && defaultVIdx !== null
    ? formatMoney(product.variants[defaultVIdx].price)
    : price;
  const initialVariantLabel = withVariants && defaultVIdx !== null
    ? variantFullLabel(product.variants[defaultVIdx])
    : price;

  quickviewContent.dataset.productId = String(product.id);
  if (withVariants && defaultVIdx !== null) {
    quickviewContent.dataset.variantIndex = String(defaultVIdx);
  } else {
    delete quickviewContent.dataset.variantIndex;
  }

  quickviewContent.innerHTML = `
    <div class="quickview-image">
      <img src="${product.img}" alt="${name}">
      <span class="cat-pill">${cat}</span>
      ${badge ? `<span class="badge-pill ${product.badge === 'Limited' ? 'badge-limited' : product.badge === 'New' ? 'badge-new' : 'badge-best'}">${badge}</span>` : ''}
    </div>
    <div class="quickview-info">
      <p class="section-kicker">${L ? L.str('atelier_selected') : 'Atelier Selected'}</p>
      <h2 id="quickview-title">${name}</h2>
      <p class="quickview-desc">${desc}</p>
      <div class="quickview-price" data-selected-price>${initialPrice}</div>
      ${sizeSelectorHTML}
      <div class="quickview-ritual">${meta.ritual}</div>
      <div class="quickview-notes">
        ${meta.notes.map(note => `<span>${note}</span>`).join('')}
      </div>
      <button class="quickview-add" type="button" data-qv-add="${product.id}">
        <span>${L ? L.str('add_to_cart') : 'Add to Cart'}</span>
        <strong data-qv-add-price>${initialVariantLabel}</strong>
      </button>
    </div>`;
  quickviewOverlay.classList.add('active');
  quickviewModal.classList.add('open');
  quickviewOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  if (!quickviewModal || !quickviewOverlay) return;
  quickviewModal.classList.remove('open');
  quickviewOverlay.classList.remove('active');
  quickviewOverlay.setAttribute('aria-hidden', 'true');
  if (!cartSidebar.classList.contains('open')) document.body.style.overflow = '';
}

// WhatsApp Checkout
function sendOrderToWhatsApp() {
  const L = typeof LANG !== 'undefined' ? LANG : null;
  if (!cart.length) { showToast(L ? L.str('cart_is_empty') : 'Cart is empty'); return; }
  const phoneNumber = "201280359576";
  const isAr = L && L.isAr;
  let msg = isAr ? "السلام عليكم، أريد طلب:\n\n" : "Hello, I would like to order:\n\n";
  cart.forEach(i => {
    const name = L ? L.productName(i) : i.name;
    const price = formatProductPrice(i, i.quantity);
    msg += `• ${name} × ${i.quantity} — ${price}\n`;
    const variants = formatVariantList(i);
    if (variants.length) msg += `  ${isAr ? 'الأسعار:' : 'Prices:'} ${variants.join(' | ')}\n`;
  });
  const hasQuotedItems = cart.some(isQuotedItem);
  const hasFromItems = cart.some(hasVariants);
  const total = cart.reduce((s, i) => s + pricedLineTotal(i), 0);
  const shippingFee = 15;
  const finalTotal = total + shippingFee;
  const shippingFmt = formatMoney(shippingFee);
  const totalFmt = `${hasFromItems ? `${L ? L.str('from_price') : 'From'} ` : ''}${formatMoney(finalTotal)}${hasQuotedItems ? ` + ${L ? L.str('quote_items') : 'quoted on WhatsApp'}` : ''}`;
  msg += `\n${isAr ? 'الشحن:' : 'Shipping:'} ${shippingFmt}`;
  msg += `\n─────────────────\n${isAr ? 'المجموع:' : 'Total:'} ${totalFmt}`;
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

// Toast
let toastTimer;
function showToast(text) {
  const toast = $('toast');
  $('toast-text').textContent = text;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

// Magnetic Buttons
document.querySelectorAll('.hero-cta, .checkout-btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top  - r.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

// Hero Parallax
const heroContent = document.querySelector('.hero-content');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (heroContent && y < 800) {
    heroContent.style.transform = `translateY(${y * 0.25}px)`;
    heroContent.style.opacity = 1 - y / 550;
  }
}, { passive: true });

// General Scroll Reveal
const generalReveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      generalReveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => generalReveal.observe(el));

// ——— Event Delegation —————————————————————————
document.addEventListener('click', e => {
  if (e.target.closest('#menu-trigger')) {
    const btn = e.target.closest('#menu-trigger');
    const isOpen = btn.classList.toggle('active');
    $('nav-links').classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
    return;
  }
  if (e.target.closest('#nav-links a')) {
    const menuBtn = $('menu-trigger');
    if (menuBtn) {
      menuBtn.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
    const navLinks = $('nav-links');
    if (navLinks) navLinks.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  const finderChip = e.target.closest('.finder-chip');
  if (finderChip) {
    renderFinder(finderChip.dataset.finder);
    return;
  }

  const viewBtn = e.target.closest('[data-view-id]');
  if (viewBtn) {
    openQuickView(Number(viewBtn.dataset.viewId));
    return;
  }

  const pairBtn = e.target.closest('[data-finder-add]');
  if (pairBtn) {
    addPairToCart(pairBtn.dataset.finderAdd.split(','));
    return;
  }

  if (e.target.closest('[data-finder-scroll]')) {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // Size selector in quickview
  const sizeBtn = e.target.closest('.qv-size-btn');
  if (sizeBtn) {
    chooseVariantInQuickView(Number(sizeBtn.dataset.variantIndex));
    return;
  }

  const qvAdd = e.target.closest('[data-qv-add]');
  if (qvAdd) {
    const productId = Number(qvAdd.dataset.qvAdd);
    const product = PRODUCTS.find(p => p.id === productId);
    if (product && hasVariants(product)) {
      const vIdx = selectedQuickViewVariantIndex(product);
      addToCart(productId, vIdx);
    } else {
      addToCart(productId);
    }
    return;
  }

  if (e.target.id === 'quickview-overlay' || e.target.closest('#quickview-close')) {
    closeQuickView();
    return;
  }

  // qty controls
  const qtyBtn = e.target.closest('.qty-btn');
  if (qtyBtn) {
    changeQty(qtyBtn.dataset.key, Number(qtyBtn.dataset.delta));
    return;
  }

  const addBtn = e.target.closest('[data-id]');
  if (addBtn && (addBtn.classList.contains('add-to-cart-btn') || addBtn.classList.contains('quick-add-btn'))) {
    addToCart(Number(addBtn.dataset.id)); return;
  }
  if (e.target.classList.contains('remove-btn') || e.target.closest('.remove-btn')) {
    const btn = e.target.closest('.remove-btn');
    removeFromCart(btn.dataset.key); return;
  }
  if (e.target.classList.contains('filter-btn')) { renderProducts(e.target.dataset.filter); return; }
  if (e.target.closest('#cart-trigger'))   { toggleCart(); return; }
  if (e.target.id === 'cart-overlay')      { toggleCart(); return; }
  if (e.target.closest('#close-cart-btn')) { toggleCart(); return; }
  if (e.target.closest('#checkout-btn'))   { sendOrderToWhatsApp(); return; }
});

productSearch?.addEventListener('input', () => renderProducts(activeFilter));
productSort?.addEventListener('change', () => renderProducts(activeFilter));

const backToTop = $('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// â”€â”€ 3D Tilt â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
document.addEventListener('mousemove', e => {
  document.querySelectorAll('.product-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    if (e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top  && e.clientY <= rect.bottom) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rX = ((y - rect.height / 2) / rect.height) * -5;
      const rY = ((x - rect.width  / 2) / rect.width ) *  5;
      card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.02,1.02,1.02)`;
    } else {
      if (card.classList.contains('revealed')) card.style.transform = 'translateY(0)';
    }
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && quickviewModal?.classList.contains('open')) closeQuickView();
  if (e.key === 'Escape' && cartSidebar.classList.contains('open')) toggleCart();
  if (e.key === 'Escape') {
    const menuBtn = $('menu-trigger');
    const navLinks = $('nav-links');
    if (menuBtn?.classList.contains('active')) {
      menuBtn.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      navLinks?.classList.remove('open');
      document.body.classList.remove('menu-open');
    }
  }
});

// â”€â”€ Theme Toggle â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
(function initTheme() {
  const saved = localStorage.getItem('ora-theme');
  if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
})();

const themeToggle = $('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('ora-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('ora-theme', 'light');
    }
  });
}

// â”€â”€ Init â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
cartBadge.style.display = 'none';
updateCartUI();
renderFinder();
renderProducts();
