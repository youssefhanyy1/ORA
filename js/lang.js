/* =====================================================
   ORA — Language System (AR / EN)
   ===================================================== */

const LANG = {
  // ── Current language getter ──
  get current() { return document.documentElement.lang || 'en'; },
  get isAr() { return this.current === 'ar'; },

  // ── Product translations ──
  products: {
    0: { ar_name: "Cartier Santos مينا سوداء وسوار مطاط", ar_desc: "مينا سوداء مع إطار فضي، سوار مطاط عالي الجودة، وتصميم مربع أيقوني مع علبة وشنطة Cartier", ar_badge: "جديد" },
    7: { ar_name: "Tommy Hilfiger مينا أبيض بسوار معدن", ar_desc: "مينا أبيض، سوار ستانلس ستيل قوي، عدادات داخلية بتفاصيل دقيقة، ماكينة كوارتز دقيقة، مع علبة وشنطة Tommy Hilfiger", ar_badge: "جديد" },
    8: { ar_name: "Tommy Hilfiger مينا أسود بسوار معدن", ar_desc: "مينا أسود، سوار ستانلس ستيل قوي، عدادات داخلية بتفاصيل دقيقة، ماكينة كوارتز دقيقة، مع علبة وشنطة Tommy Hilfiger", ar_badge: "جديد" },
    9: { ar_name: "Rolex Datejust مينا أبيض وفصوص كريستال", ar_desc: "مينا أبيض بفصوص كريستال لامعة، عدسة تكبير التاريخ، سوار جوبيلي مريح، مع علبة وشنطة Rolex", ar_badge: "جديد" },
    10: { ar_name: "Omega Seamaster بسوار جلد أسود", ar_desc: "سوار جلد طبيعي ناعم، عرض اليوم والتاريخ، مزيج الأسود والكروم، مع علبة وشنطة Omega", ar_badge: "جديد" },
    11: { ar_name: "Tommy Hilfiger بسوار جلد أسود", ar_desc: "سوار جلد طبيعي ناعم، مينا سيلفر بتصميم عصري، عرض اليوم والتاريخ، وزن خفيف وتصميم انسيابي، مع علبة وشنطة Tommy Hilfiger", ar_badge: "جديد" },
    12: { ar_name: "Patek Philippe Nautilus مينا أبيض", ar_desc: "مينا بيضاء مخططة، تصميم Nautilus نحيف، قفل مزدوج محكم، مع علبة وشنطة Patek Philippe", ar_badge: "جديد" },
    13: { ar_name: "Tissot Chronograph مينا أبيض", ar_desc: "مينا كرونوغراف أبيض بشكل احترافي، إطار Tachymeter خارجي، لون فضي ساطع، مع علبة وشنطة Tissot", ar_badge: "جديد" },
    14: { ar_name: "Louis Vuitton Symphony", ar_desc: "تركيبة فاخرة من الزنجبيل والجريب فروت والبرغموت بنقاء فوار، تستقر على لمسة مسكية خشبية ناعمة تدوم على الجلد", ar_badge: "جديد" },
    15: { ar_name: "Sospiro Vibrato", ar_desc: "مزيج ساحر من البرغموت والجريب فروت مع نفحة زنجبيل دافئة، ثم بودرة راقية وزهور بيضاء فوق قاعدة أخشاب وباتشولي وأوريس وعنبر", ar_badge: "جديد" },
    16: { ar_name: "إربا بورا Erba Pura", ar_desc: "توليفة فاخرة من الفواكه الاستوائية المتوسطية مع نقاء الحمضيات (البرغموت والليمون) ودفء شرقي من الفانيليا والعنبر والمسك الأبيض — فوحان أسطوري وثبات يلتصق بالجلد والملابس لأيام", ar_badge: "جديد" },
    1: { ar_name: "كرونوغراف أوبسيديان", ar_desc: "حركة سويسرية، زجاج كريستال ياقوتي، مينا أوبسيديان 42 مم", ar_badge: "الأكثر مبيعاً" },
    2: { ar_name: "سيلفر بريستيج", ar_desc: "هيكل من الفولاذ المقاوم للصدأ، عقارب مضيئة، مقاوم للماء حتى 100 متر", ar_badge: null },
    3: { ar_name: "روز جولد مينيماليست", ar_desc: "طلاء ذهب وردي عيار 18، سوار شبكي، تصميم نحيف جداً 7 مم", ar_badge: "جديد" },
    4: { ar_name: "أو دو بارفان العود الأسود", ar_desc: "عود غني، عنبر داكن وخشب الصندل. 100 مل. يدوم لأكثر من 12 ساعة", ar_badge: "محدود" },
    5: { ar_name: "فيلفيت روز وفانيليا", ar_desc: "الورد البلغاري، مسك الفانيليا والياسمين الأبيض. 75 مل", ar_badge: null },
    6: { ar_name: "إكسير بساتين الحمضيات", ar_desc: "البرغموت، النيرولي وخشب الأرز. خلاصة منعشة طوال اليوم. 50 مل", ar_badge: "جديد" },
  },

  // ── Helpers for product fields ──
  productName(p) { return this.isAr && this.products[p.id] ? this.products[p.id].ar_name : p.name; },
  productDesc(p) { return this.isAr && this.products[p.id] ? this.products[p.id].ar_desc : p.desc; },
  productBadge(p) {
    if (!p.badge) return null;
    return this.isAr && this.products[p.id] ? this.products[p.id].ar_badge : p.badge;
  },
  categoryLabel(cat) {
    if (!this.isAr) return cat;
    return cat === 'watches' ? 'ساعات' : 'عطور';
  },
  formatPrice(n) {
    return this.isAr
      ? n.toLocaleString('en-US') + ' ج.م'
      : n.toLocaleString('en-EG') + ' EGP';
  },
  collectionCount(count, total) {
    return this.isAr
      ? `${count.toLocaleString('en-US')} من ${total.toLocaleString('en-US')} قطعة`
      : `${count.toLocaleString('en-EG')} of ${total.toLocaleString('en-EG')} items`;
  },
  productMeta(id) {
    const meta = {
      0: {
        en: { ritual: 'A modern Santos profile with a black dial, silver bezel, and comfortable rubber strap for all-day presence.', notes: ['Black dial with silver bezel', 'Premium rubber strap', 'Cartier box and bag included'] },
        ar: { ritual: 'تصميم Santos مودرن بمينا سوداء وإطار فضي وسوار مطاط مريح يمنح حضوراً فاخراً طوال اليوم.', notes: ['مينا سوداء وإطار فضي', 'سوار Rubber عالي الجودة', 'علبة وشنطة Cartier'] }
      },
      7: {
        en: { ritual: 'A polished white-dial Tommy Hilfiger with a metal bracelet, sporty sub-dial detail, and reliable quartz accuracy.', notes: ['White dial', 'Stainless steel bracelet', 'Tommy Hilfiger box and bag included'] },
        ar: { ritual: 'نسخة مينا أبيض من Tommy Hilfiger بسوار معدن لامع وتفاصيل رياضية وماكينة كوارتز دقيقة.', notes: ['مينا أبيض', 'سوار ستانلس ستيل قوي', 'علبة وشنطة Tommy Hilfiger'] }
      },
      8: {
        en: { ritual: 'A stronger black-dial Tommy Hilfiger with a metal bracelet and a sporty, weighty wrist presence.', notes: ['Black dial', 'Stainless steel bracelet', 'Tommy Hilfiger box and bag included'] },
        ar: { ritual: 'نسخة مينا أسود من Tommy Hilfiger بحضور أقوى وشكل رياضي تقيل في الإيد.', notes: ['مينا أسود', 'سوار ستانلس ستيل قوي', 'علبة وشنطة Tommy Hilfiger'] }
      },
      9: {
        en: { ritual: 'A bright white-dial Datejust style with crystal markers, a date magnifier, and a comfortable jubilee bracelet for special occasions.', notes: ['Crystal diamond markers', 'Date magnifier lens', 'Rolex box and bag included'] },
        ar: { ritual: 'ستايل Datejust بمينا أبيض وفصوص كريستال يلمع في المناسبات، مع عدسة تاريخ وسوار جوبيلي مريح.', notes: ['فصوص كريستال لامعة', 'عدسة تكبير التاريخ', 'علبة وشنطة Rolex'] }
      },
      10: {
        en: { ritual: 'A classic black-leather Seamaster style with day-date practicality and a polished chrome contrast for formal looks.', notes: ['Soft black leather strap', 'Day and date display', 'Omega box and bag included'] },
        ar: { ritual: 'ستايل Seamaster كلاسيكي بسوار جلد أسود ناعم وعرض اليوم والتاريخ، مناسب جداً للمقابلات الرسمية والبدل.', notes: ['سوار جلد طبيعي ناعم', 'عرض اليوم والتاريخ', 'علبة وشنطة Omega'] }
      },
      11: {
        en: { ritual: 'A casual-chic Tommy Hilfiger with a soft black leather strap, clean silver dial, and day-date practicality for everyday wear.', notes: ['Soft black leather strap', 'Modern silver dial', 'Tommy Hilfiger box and bag included'] },
        ar: { ritual: 'ساعة Tommy Hilfiger كاجوال شيك بسوار جلد أسود ناعم ومينا سيلفر واضحة، خفيفة ومريحة للاستخدام اليومي.', notes: ['سوار جلد طبيعي ناعم', 'خاصية عرض اليوم والتاريخ', 'علبة وشنطة Tommy Hilfiger'] }
      },
      12: {
        en: { ritual: 'A clean white-dial Nautilus profile with slim proportions and a secure double clasp for a refined daily statement.', notes: ['Striped white dial', 'Slim Nautilus profile', 'Patek Philippe box and bag included'] },
        ar: { ritual: 'ستايل Nautilus بمينا بيضاء مخططة وتصميم نحيف يبان كقطعة فنية على الإيد من غير ضخامة.', notes: ['مينا بيضاء مخططة', 'قفل مزدوج محكم', 'علبة وشنطة Patek Philippe'] }
      },
      13: {
        en: { ritual: 'A professional white-dial chronograph with an external tachymeter bezel and bright silver presence for practical, sharp styling.', notes: ['White chronograph dial', 'External tachymeter bezel', 'Tissot box and bag included'] },
        ar: { ritual: 'كرونوغراف أبيض بشكل احترافي لعشاق الساعات المعقدة، بإطار Tachymeter ولمعة فضية قوية.', notes: ['مينا كرونوغراف أبيض', 'إطار Tachymeter خارجي', 'علبة وشنطة Tissot'] }
      },
      14: {
        en: { ritual: 'A sparkling citrus composition built on ginger, grapefruit, and bergamot over a soft musky-woody base.', notes: ['Ginger, grapefruit, bergamot', 'Sparkling fresh energy', 'Soft musky-woody base'] },
        ar: { ritual: 'تركيبة فاخرة لا تتبع الهرم التقليدي؛ زنجبيل وجريب فروت وبرغموت بنقاء فوار فوق قاعدة مسكية خشبية ناعمة.', notes: ['زنجبيل وجريب فروت وبرغموت', 'انتعاش فوار مليء بالطاقة', 'قاعدة مسكية خشبية ناعمة'] }
      },
      15: {
        en: { ritual: 'A vibrant citrus opening of bergamot, grapefruit, and warm ginger, settling into powdery white florals and a deep amber-woody base.', notes: ['Bergamot, grapefruit, ginger', 'Magnolia, jasmine, powdery notes', 'Woods, patchouli, orris, amber'] },
        ar: { ritual: 'افتتاحية حمضية حيوية من البرغموت والجريب فروت مع زنجبيل دافئ، تتحول لإحساس بودري نظيف وفاخر فوق قاعدة عميقة من الأخشاب والباتشولي والأوريس والعنبر.', notes: ['برغموت وجريب فروت وزنجبيل', 'مغنوليا وياسمين ونوتات بودرية', 'أخشاب وباتشولي وأوريس وعنبر'] }
      },
      16: {
        en: { ritual: 'An intense sweet-fruity explosion of ripe Mediterranean tropical fruits blended with bergamot and lemon freshness, settling on a rich base of premium vanilla, amber, and white musk — legendary projection that clings to skin and clothes for days.', notes: ['Mediterranean tropical fruits', 'Bergamot & lemon citrus freshness', 'Vanilla, amber & white musk base'] },
        ar: { ritual: 'انفجار فاكهي حلو ومكثف يشبه سلة من الفواكه الناضجة والمليئة بالعصارة، يمتزج برقة مع انتعاش الحمضيات ليعطي شعوراً بالطاقة البهيجة والجرأة المخملية. يستقر على قاعدة قوية جداً ودسمة من الفانيليا الفاخرة والعنبر والمسك الأبيض.', notes: ['فواكه استوائية متوسطية ناضجة', 'برغموت وليمون بنقاء حمضي', 'فانيليا فاخرة وعنبر ومسك أبيض'] }
      },
      1: {
        en: { ritual: 'Sharp enough for evening tailoring, precise enough for daily rituals.', notes: ['Swiss movement', 'Sapphire crystal', '42mm obsidian dial'] },
        ar: { ritual: 'حضور حاد للمساء، ودقة كافية لكل يوم.', notes: ['حركة سويسرية', 'كريستال ياقوتي', 'مينا أوبسيديان 42 مم'] }
      },
      2: {
        en: { ritual: 'A clean silver profile for workdays, travel, and understated taste.', notes: ['Stainless steel', '100m water resistance', 'Luminous hands'] },
        ar: { ritual: 'ملامح فضية هادئة للعمل والسفر والذوق غير المتكلف.', notes: ['فولاذ مقاوم للصدأ', 'مقاومة ماء 100 متر', 'عقارب مضيئة'] }
      },
      3: {
        en: { ritual: 'Soft rose gold with a slim silhouette made for gifting and graceful styling.', notes: ['18K rose gold plating', 'Mesh bracelet', 'Ultra-slim 7mm profile'] },
        ar: { ritual: 'ذهب وردي ناعم وتصميم رفيع مناسب للهدايا والإطلالات الهادئة.', notes: ['طلاء ذهب وردي عيار 18', 'سوار شبكي', 'تصميم رفيع 7 مم'] }
      },
      4: {
        en: { ritual: 'A deep oud trail for nights that need a confident signature.', notes: ['Rich oud', 'Dark amber', '12h+ longevity'] },
        ar: { ritual: 'أثر عود عميق لليالي التي تحتاج توقيعاً واثقاً.', notes: ['عود غني', 'عنبر داكن', 'ثبات أكثر من 12 ساعة'] }
      },
      5: {
        en: { ritual: 'Warm floral sweetness for intimate gifting and soft evening presence.', notes: ['Bulgarian rose', 'Vanilla musk', 'White jasmine'] },
        ar: { ritual: 'دفء زهري ناعم للهدايا والحضور المسائي الرقيق.', notes: ['ورد بلغاري', 'مسك الفانيليا', 'ياسمين أبيض'] }
      },
      6: {
        en: { ritual: 'Fresh citrus clarity for bright mornings and polished daily wear.', notes: ['Bergamot', 'Neroli', 'Cedar wood'] },
        ar: { ritual: 'انتعاش حمضي واضح للصباح والإطلالة اليومية المرتبة.', notes: ['برغموت', 'نيرولي', 'خشب الأرز'] }
      }
    };
    const item = meta[id];
    return item ? item[this.current] || item.en : { ritual: '', notes: [] };
  },
  finderMode(key) {
    const modes = {
      evening: {
        en: { label: 'Evening edit', title: 'Obsidian rhythm with oud depth', text: 'A darker pairing built for dinners, late meetings, and confident entrances.', ritual: 'Best worn with black, charcoal, silk, or anything that benefits from restraint.' },
        ar: { label: 'اختيار المساء', title: 'إيقاع أوبسيديان مع عمق العود', text: 'ثنائي داكن مناسب للعشاء والاجتماعات المتأخرة والحضور الواثق.', ritual: 'يناسب الأسود والرمادي الداكن والحرير وأي إطلالة تحتاج هدوءاً قوياً.' }
      },
      daily: {
        en: { label: 'Daily polish', title: 'Silver clarity with citrus lift', text: 'A crisp set for workdays, clean mornings, and effortless repeat wear.', ritual: 'Choose this when you want freshness without losing the premium edge.' },
        ar: { label: 'أناقة يومية', title: 'نقاء الفضة مع انتعاش الحمضيات', text: 'اختيار واضح للعمل والصباح والإطلالة اليومية السهلة.', ritual: 'اختره عندما تريد انتعاشاً من غير فقدان الإحساس الفاخر.' }
      },
      gift: {
        en: { label: 'Gift ceremony', title: 'Rose gold warmth with velvet bloom', text: 'A softer pair with emotional weight, made for birthdays, milestones, and elegant gifting.', ritual: 'Gift-ready, graceful, and easy to love from the first impression.' },
        ar: { label: 'طقس الهدايا', title: 'دفء الذهب الوردي مع زهرة مخملية', text: 'ثنائي أهدأ ومؤثر للمناسبات وأعياد الميلاد والهدايا الراقية.', ritual: 'جاهز كهدية، أنيق، وسهل الإعجاب من أول لحظة.' }
      },
      collector: {
        en: { label: 'Collector mood', title: 'Two silhouettes with lasting presence', text: 'A watch-forward edit for someone who notices proportion, detail, and rarity.', ritual: 'For the client who wants pieces that feel deliberate, not predictable.' },
        ar: { label: 'مزاج المقتني', title: 'تصميمان بحضور يدوم', text: 'اختيار لمحبي الساعات الذين يلاحظون النسب والتفاصيل والندرة.', ritual: 'للعميل الذي يريد قطعاً مقصودة وليست متوقعة.' }
      }
    };
    const item = modes[key] || modes.evening;
    return item[this.current] || item.en;
  },

  // ── UI strings ──
  str(key) {
    const strings = {
      add_to_cart:  { en: 'Add to Cart',           ar: 'أضف للسلة' },
      add_short:    { en: '+ Add',                  ar: '+ إضافة' },
      added:        { en: ' — Added',               ar: ' — تمت الإضافة' },
      remove:       { en: 'Remove',                 ar: 'إزالة' },
      empty:        { en: 'Empty',                   ar: 'فارغة' },
      cart_empty:   { en: 'Your cart is empty',      ar: 'سلة المشتريات فارغة' },
      cart_is_empty:{ en: 'Cart is empty',           ar: 'سلة المشتريات فارغة' },
      items:        { en: 'items',                   ar: 'عنصر' },
      item:         { en: 'item',                    ar: 'عنصر' },
      no_results:   { en: 'No products found',       ar: 'لا توجد منتجات' },
      try_another_search:{ en: 'Try another search or filter.', ar: 'جرّب بحثاً أو تصنيفاً آخر.' },
      view_details: { en: 'View Details',             ar: 'عرض التفاصيل' },
      add_pairing:  { en: 'Add Pairing',              ar: 'إضافة الثنائي' },
      browse_collection:{ en: 'Browse Collection',    ar: 'تصفح المجموعة' },
      pair_added:   { en: 'Pairing added to cart',    ar: 'تمت إضافة الثنائي للسلة' },
      atelier_selected:{ en: 'Atelier Selected',      ar: 'اختيار المشغل' },
      price_on_request:{ en: 'Price on request',       ar: 'السعر عند الطلب' },
      quote_items:  { en: 'quoted on WhatsApp',        ar: 'يتم تسعيره عبر واتساب' },
      from_price:   { en: 'From',                      ar: 'يبدأ من' },
      available_sizes:{ en: 'Available sizes',         ar: 'الأحجام المتاحة' },
      choose_size:  { en: 'Choose Size',               ar: 'اختر الحجم' },
    };
    const s = strings[key];
    return s ? s[this.current] || s.en : key;
  },

  // ── Marquee items ──
  marqueeItems() {
    if (this.isAr) {
      return [
        { text: 'شحن مجاني', gold: true },
        { text: 'أصالة مضمونة', gold: false },
        { text: 'تصاميم حصرية', gold: true },
        { text: 'تشكيلات جديدة أسبوعياً', gold: false },
        { text: 'جودة استثنائية', gold: true },
        { text: 'إتقان يدوي', gold: false },
        { text: 'تجربة فاخرة', gold: true },
        { text: 'إرجاع خلال 30 يوماً', gold: false },
      ];
    }
    return [
      { text: 'Complimentary Shipping', gold: true },
      { text: 'Authenticity Guaranteed', gold: false },
      { text: 'Exclusive Designs', gold: true },
      { text: 'New Arrivals Weekly', gold: false },
      { text: 'Premium Quality', gold: true },
      { text: 'Handcrafted Excellence', gold: false },
      { text: 'Luxury Experience', gold: true },
      { text: '30-Day Returns', gold: false },
    ];
  },

  // ── Static text translations (data-i18n) ──
  translations: {
    en: {
      home: "Home", collection: "Collection", services: "Services", our_story: "Our Story", faq: "FAQ", policies: "Policies", contact: "Contact",
      crafted_for: "Crafted for the<br><em>Discerning Few</em>",
      watches_fragrances: "Watches &amp; Fragrances of Distinction",
      hero_copy: "A cinematic curation of watches and fragrances, selected for people who notice quiet details.",
      explore_collection: "Explore Collection",
      hero_secondary: "Find Signature",
      hero_proof_auth: "Authenticated",
      hero_proof_ship: "Cairo Delivery",
      hero_proof_care: "Lifetime Care",
      hero_tile_watch: "Cartier Santos",
      hero_tile_perfume: "Louis Vuitton Symphony",
      price_on_request: "Price on request",
      hero_note_kicker: "Atelier Pick",
      hero_note_title: "Evening Pairing",
      new_collection: "New Collection — 2025",
      the_maison_promise: "The <em>ORA</em> Promise",
      four_pillars: "Four pillars of uncompromising excellence",
      auth_name: "Authenticity", auth_detail: "Every piece is certified genuine, sourced from verified artisans worldwide",
      craft_name: "Craftsmanship", craft_detail: "Meticulous attention to detail in every stitch, dial, and fragrance note",
      excl_name: "Exclusivity", excl_detail: "Limited editions and curated selections for the truly discerning",
      serv_name: "Service", serv_detail: "White-glove concierge experience from selection to doorstep delivery",
      sig_collection: "Signature Collection",
      art_of_time: "The Art of <em>Timekeeping</em>",
      each_timepiece: "Each timepiece in our collection represents decades of horological mastery — a convergence of precision engineering and sculptural beauty.",
      view_watches: "View Watches",
      finder_kicker: "Private Atelier", finder_title: "Find your <em>signature</em>",
      finder_desc: "Choose a mood and ORA will compose a refined pairing from the collection.",
      finder_evening: "Evening", finder_daily: "Daily", finder_gift: "Gift", finder_collector: "Collector",
      the_collection: "The <em>Collection</em>",
      all: "All", watches: "Watches", perfumes: "Perfumes", shop: "Shop", story: "Story",
      search_products: "Search products", search_placeholder: "Search watches, oud, rose...",
      sort_label: "Sort products", sort_featured: "Featured", sort_price_low: "Price: Low to High",
      sort_price_high: "Price: High to Low", sort_name: "Name",
      rights_reserved: "© 2025 ORA · All rights reserved",
      cart: "Cart", empty: "Empty", cart_empty: "Your cart is empty",
      subtotal: "Subtotal", shipping: "Shipping", complimentary: "Complimentary",
      total: "Total", order_whatsapp: "Order via WhatsApp",
      // About
      est_cairo: "Est. 2018 · Cairo, Egypt",
      passion_for_precision: "A passion for precision, a devotion to beauty — born from a desire to bring world-class luxury within reach.",
      years_excellence: "Years of Excellence", clients_served: "Clients Served", curated_pieces: "Curated Pieces",
      born_from_love: "Born from a <em>Love</em> of Craft",
      maison_founded: "ORA was founded in 2018 by a small team of passionate collectors who believed that exceptional timepieces and rare fragrances should be more than transactions — they should be transformative experiences.",
      every_item: "Every item we source passes through a rigorous authentication process, examining provenance, mechanism integrity, and craftsmanship standards that date back generations.",
      we_partner: "We partner exclusively with artisans and manufacturers who share our philosophy: that true luxury is never hurried, never compromised, and always enduring.",
      our_journey: "Our <em style=\"font-style:italic;color:var(--gold-light);\">Journey</em>",
      the_beginning: "The Beginning", the_beginning_desc: "Founded in Cairo with a curated selection of 8 watches and a dream to redefine luxury retail in Egypt.",
      fragrance_house: "Fragrance House", fragrance_house_desc: "Expanded into exclusive fragrances, partnering with artisan perfumers from France and the Middle East.",
      digital_atelier: "Digital Atelier", digital_atelier_desc: "Launched our bespoke online experience, bringing the ORA aesthetic to every screen.",
      new_collection_year: "New Collection", new_collection_desc: "Our most ambitious curation yet — 50+ pieces representing the pinnacle of global horology and perfumery.",
      the_philosophy: "The <em>Philosophy</em>",
      we_believe: "We believe that a watch is more than an instrument — it is a companion through life\u2019s most meaningful moments. A fragrance is more than a scent — it is an invisible signature, a trail of memory left in every room you enter.",
      at_maison: "At ORA, we curate not merely objects, but experiences. Each selection is chosen to outlast trends, to appreciate in meaning, and to become part of your personal legend.",
      our_guarantee: "Our Guarantee", guarantee_desc: "100% authenticated \u00b7 30-day returns \u00b7 Lifetime care service",
      // Contact
      love_to_hear: "We\u2019d love to hear from you",
      get_in_touch: "Get in <em>Touch</em>",
      personal_concierge: "Personal <em>Concierge</em>",
      our_team: "Our team of luxury specialists is available to assist you with private consultations, bespoke gifting, and any inquiries about our collection.",
      location: "Location", cairo_egypt: "Cairo, Egypt", hours: "Hours",
      hours_desc: "Sat \u2013 Thu: 10:00 AM \u2013 10:00 PM<br>Fri: 2:00 PM \u2013 10:00 PM",
      first_name: "First Name", last_name: "Last Name", email_address: "Email Address",
      phone_whatsapp: "Phone / WhatsApp", interest: "Interest", message: "Message",
      send_via_whatsapp: "Send via WhatsApp",
      p_fname: "Your first name", p_lname: "Your last name", p_email: "your@email.com",
      p_phone: "+20 1xx xxx xxxx", p_interest: "Watches \u00b7 Perfumes \u00b7 Gifting \u00b7 Other",
      p_message: "Tell us how we can help you...",
      // Services
      services_eyebrow: "Concierge, care, and curation",
      services_title: "ORA <em>Services</em>",
      services_intro: "A complete luxury experience around every watch, fragrance, and gift.",
      svc_auth_title: "Authentication Review", svc_auth_desc: "Every sourced piece is inspected for provenance, material integrity, and finishing standards before it reaches you.",
      svc_source_title: "Private Sourcing", svc_source_desc: "Looking for a specific timepiece or scent profile? Our team can curate options beyond the public collection.",
      svc_gift_title: "Gift Atelier", svc_gift_desc: "Personalized recommendations, elegant wrapping, and WhatsApp coordination for birthdays, milestones, and corporate gifts.",
      svc_care_title: "Aftercare", svc_care_desc: "Guidance on storage, fragrance care, servicing windows, and long-term ownership for selected pieces.",
      process_kicker: "How it works", process_title: "A calm, <em>personal</em> path",
      process_desc: "Share the occasion, budget, and preferred style. We narrow the collection into a focused shortlist, then help you complete the order through WhatsApp.",
      process_1: "Consult", process_2: "Curate", process_3: "Confirm", process_4: "Deliver",
      concierge_kicker: "Need a recommendation?", concierge_title: "Speak with the <em>concierge</em>", contact_concierge: "Contact Concierge",
      // FAQ
      faq_eyebrow: "Answers before you ask", faq_title: "ORA <em>FAQ</em>",
      faq_intro: "Everything essential about ordering, authenticity, delivery, and care.",
      faq_aside_kicker: "Quick guide", faq_aside_title: "Designed to make ordering feel simple.",
      faq_aside_desc: "For anything personal or urgent, WhatsApp is the fastest way to reach the concierge.",
      ask_concierge: "Ask Concierge",
      faq_q1: "How do I place an order?", faq_a1: "Add items to the cart and send the order through WhatsApp. An ORA specialist will confirm availability, delivery details, and payment options.",
      faq_q2: "Are the products authentic?", faq_a2: "Yes. Every piece is reviewed before listing and handled through our authentication process where applicable.",
      faq_q3: "Do you offer gift wrapping?", faq_a3: "Yes. Gift wrapping and recommendation support are available through the Gift Atelier service.",
      faq_q4: "How long does delivery take?", faq_a4: "Cairo delivery is usually coordinated within 24 to 48 hours after confirmation. Other locations are confirmed through WhatsApp.",
      faq_q5: "Can I return an item?", faq_a5: "Eligible unused items may be returned within 30 days. Custom sourcing and opened fragrances may have limitations.",
      faq_q6: "Can you source a specific watch or fragrance?", faq_a6: "Yes. Send us the reference, budget, and preferred timeline, and the concierge will review sourcing options.",
      // Policies
      policies_eyebrow: "Clear terms, calm service", policies_title: "ORA <em>Policies</em>",
      policies_intro: "The essentials for delivery, returns, privacy, and secure WhatsApp ordering.",
      policy_shipping_title: "Shipping", policy_shipping_desc: "Cairo orders are coordinated after WhatsApp confirmation. Delivery timing depends on product availability and destination.",
      policy_returns_title: "Returns", policy_returns_desc: "Unused eligible pieces may be returned within 30 days. Opened fragrances, worn items, and private sourcing requests may be final sale.",
      policy_payment_title: "Payment", policy_payment_desc: "Payment options are confirmed by the concierge after availability is checked. Never share sensitive payment details outside verified channels.",
      policy_privacy_title: "Privacy", policy_privacy_desc: "Contact details are used only to coordinate your inquiry, order, delivery, and aftercare unless you request otherwise.",
      policy_note_kicker: "Before checkout", policy_note_title: "Every order is <em>confirmed personally</em>",
      policy_note_desc: "Because availability, gift details, and delivery timing can vary, WhatsApp confirmation is part of the ORA service rather than a last step.",
      read_faq: "Read FAQ"
    },
    ar: {
      home: "الرئيسية", collection: "المجموعة", services: "الخدمات", our_story: "قصتنا", faq: "الأسئلة", policies: "السياسات", contact: "اتصل بنا",
      crafted_for: "مُصمم من أجل<br><em>أصحاب الذوق الرفيع</em>",
      watches_fragrances: "ساعات وعطور استثنائية",
      hero_copy: "تشكيلة سينمائية من الساعات والعطور، مختارة لمن يلاحظون التفاصيل الهادئة.",
      explore_collection: "استكشف المجموعة",
      hero_secondary: "اكتشف توقيعك",
      hero_proof_auth: "موثق",
      hero_proof_ship: "توصيل القاهرة",
      hero_proof_care: "رعاية مدى الحياة",
      hero_tile_watch: "Cartier Santos",
      hero_tile_perfume: "Louis Vuitton Symphony",
      price_on_request: "السعر عند الطلب",
      hero_note_kicker: "اختيار المشغل",
      hero_note_title: "ثنائي المساء",
      new_collection: "التشكيلة الجديدة — 2025",
      the_maison_promise: "وعد <em>أورا</em>",
      four_pillars: "أربع ركائز للتميز المطلق",
      auth_name: "الأصالة", auth_detail: "كل قطعة أصلية معتمدة، مصدرها حرفيون معتمدون حول العالم",
      craft_name: "الحرفية", craft_detail: "اهتمام دقيق بالتفاصيل في كل غرزة ومينا وقطرة عطر",
      excl_name: "الحصرية", excl_detail: "إصدارات محدودة ومختارات بعناية للمتميزين حقاً",
      serv_name: "الخدمة", serv_detail: "خدمة راقية من الاختيار وحتى التوصيل لباب المنزل",
      sig_collection: "التشكيلة المميزة",
      art_of_time: "فن <em>صناعة الساعات</em>",
      each_timepiece: "كل ساعة في مجموعتنا تمثل عقوداً من الإتقان — التقاء للهندسة الدقيقة والجمال النحتي.",
      view_watches: "عرض الساعات",
      finder_kicker: "المشغل الخاص", finder_title: "اكتشف <em>توقيعك</em>",
      finder_desc: "اختر المزاج ودع أورا ينسق لك ثنائياً راقياً من المجموعة.",
      finder_evening: "مساء", finder_daily: "يومي", finder_gift: "هدية", finder_collector: "مقتني",
      the_collection: "<em>المجموعة</em>",
      all: "الكل", watches: "ساعات", perfumes: "عطور", shop: "التسوق", story: "القصة",
      search_products: "البحث في المنتجات", search_placeholder: "ابحث عن ساعة، عود، ورد...",
      sort_label: "ترتيب المنتجات", sort_featured: "المميز", sort_price_low: "السعر: من الأقل للأعلى",
      sort_price_high: "السعر: من الأعلى للأقل", sort_name: "الاسم",
      rights_reserved: "© 2025 أورا · جميع الحقوق محفوظة",
      cart: "سلة المشتريات", empty: "فارغة", cart_empty: "سلة المشتريات فارغة",
      subtotal: "المجموع الفرعي", shipping: "الشحن", complimentary: "مجاني",
      total: "الإجمالي", order_whatsapp: "الطلب عبر واتساب",
      // About
      est_cairo: "تأسست 2018 · القاهرة، مصر",
      passion_for_precision: "شغف بالدقة، وإخلاص للجمال — وُلد من رغبة في جعل الفخامة العالمية في متناول اليد.",
      years_excellence: "سنوات من التميز", clients_served: "عملاء خدمناهم", curated_pieces: "قطعة مختارة",
      born_from_love: "وُلدت من <em>عشق</em> الحرفة",
      maison_founded: "تأسست أورا في عام 2018 على يد فريق صغير من هواة الجمع الشغوفين الذين آمنوا بأن الساعات الاستثنائية والعطور النادرة يجب أن تكون أكثر من مجرد صفقات — بل تجارب تحويلية.",
      every_item: "كل عنصر نحصل عليه يمر بعملية توثيق صارمة، حيث يتم فحص المصدر وسلامة الآلية ومعايير الحرفية التي تعود لأجيال.",
      we_partner: "نحن نتشارك حصرياً مع الحرفيين والمصنعين الذين يشاركوننا فلسفتنا: أن الفخامة الحقيقية لا يتم التعجل فيها أبداً، ولا يتم المساومة عليها، وتدوم دائماً.",
      our_journey: "<em style=\"font-style:italic;color:var(--gold-light);\">رحلتنا</em>",
      the_beginning: "البداية", the_beginning_desc: "تأسست في القاهرة بتشكيلة مختارة من 8 ساعات وحلم لإعادة تعريف تجارة التجزئة الفاخرة في مصر.",
      fragrance_house: "دار العطور", fragrance_house_desc: "توسعنا في العطور الحصرية، بالشراكة مع عطارين حرفيين من فرنسا والشرق الأوسط.",
      digital_atelier: "المشغل الرقمي", digital_atelier_desc: "أطلقنا تجربتنا المخصصة عبر الإنترنت، لنجلب جماليات أورا إلى كل شاشة.",
      new_collection_year: "التشكيلة الجديدة", new_collection_desc: "أكثر اختياراتنا طموحاً حتى الآن — أكثر من 50 قطعة تمثل قمة صناعة الساعات والعطور العالمية.",
      the_philosophy: "<em>الفلسفة</em>",
      we_believe: "نحن نؤمن بأن الساعة أكثر من مجرد آلة — إنها رفيق خلال لحظات الحياة الأكثر أهمية. العطر أكثر من مجرد رائحة — إنه توقيع غير مرئي، وأثر من الذكريات تتركه في كل غرفة تدخلها.",
      at_maison: "في أورا، لا ننتقي الأشياء فحسب، بل التجارب. كل اختيار يتم انتقاؤه ليتجاوز الصيحات، وليزداد قيمته، وليصبح جزءاً من أسطورتك الشخصية.",
      our_guarantee: "ضماننا", guarantee_desc: "موثقة 100% · إرجاع خلال 30 يوماً · خدمة رعاية مدى الحياة",
      // Contact
      love_to_hear: "يسعدنا أن نسمع منك",
      get_in_touch: "تواصل <em>معنا</em>",
      personal_concierge: "المساعد <em>الشخصي</em>",
      our_team: "فريقنا من متخصصي الفخامة متاح لمساعدتك في الاستشارات الخاصة، والهدايا المصممة خصيصاً، وأي استفسارات حول مجموعتنا.",
      location: "الموقع", cairo_egypt: "القاهرة، مصر", hours: "ساعات العمل",
      hours_desc: "السبت – الخميس: 10:00 صباحاً – 10:00 مساءً<br>الجمعة: 2:00 مساءً – 10:00 مساءً",
      first_name: "الاسم الأول", last_name: "اسم العائلة", email_address: "البريد الإلكتروني",
      phone_whatsapp: "الهاتف / واتساب", interest: "الاهتمام", message: "الرسالة",
      send_via_whatsapp: "إرسال عبر واتساب",
      p_fname: "اسمك الأول", p_lname: "اسم العائلة", p_email: "your@email.com",
      p_phone: "+20 1xx xxx xxxx", p_interest: "ساعات · عطور · هدايا · أخرى",
      p_message: "أخبرنا كيف يمكننا مساعدتك...",
      // Services
      services_eyebrow: "كونسيرج ورعاية وتنسيق",
      services_title: "خدمات <em>أورا</em>",
      services_intro: "تجربة فاخرة متكاملة حول كل ساعة وعطر وهدية.",
      svc_auth_title: "مراجعة الأصالة", svc_auth_desc: "كل قطعة يتم فحص مصدرها وخاماتها ومستوى تشطيبها قبل أن تصل إليك.",
      svc_source_title: "البحث الخاص", svc_source_desc: "تبحث عن ساعة محددة أو طابع عطري معين؟ يمكن لفريقنا تنسيق خيارات خارج المجموعة المعروضة.",
      svc_gift_title: "مشغل الهدايا", svc_gift_desc: "ترشيحات شخصية وتغليف أنيق وتنسيق عبر واتساب لأعياد الميلاد والمناسبات والهدايا المؤسسية.",
      svc_care_title: "الرعاية اللاحقة", svc_care_desc: "إرشادات للتخزين والعناية بالعطور ومواعيد الصيانة والاقتناء طويل المدى للقطع المختارة.",
      process_kicker: "كيف تعمل الخدمة", process_title: "مسار هادئ و<em>شخصي</em>",
      process_desc: "شاركنا المناسبة والميزانية والذوق المفضل. نختصر المجموعة إلى ترشيحات مركزة، ثم نساعدك على إتمام الطلب عبر واتساب.",
      process_1: "استشارة", process_2: "تنسيق", process_3: "تأكيد", process_4: "توصيل",
      concierge_kicker: "تحتاج ترشيحاً؟", concierge_title: "تحدث مع <em>الكونسيرج</em>", contact_concierge: "تواصل مع الكونسيرج",
      // FAQ
      faq_eyebrow: "إجابات قبل أن تسأل", faq_title: "<em>أسئلة</em> أورا",
      faq_intro: "كل ما تحتاج معرفته عن الطلب والأصالة والتوصيل والعناية.",
      faq_aside_kicker: "دليل سريع", faq_aside_title: "مصمم ليجعل الطلب أبسط.",
      faq_aside_desc: "لأي طلب شخصي أو عاجل، واتساب هو أسرع طريقة للوصول إلى الكونسيرج.",
      ask_concierge: "اسأل الكونسيرج",
      faq_q1: "كيف أطلب؟", faq_a1: "أضف المنتجات للسلة وأرسل الطلب عبر واتساب. سيؤكد متخصص من أورا التوفر وتفاصيل التوصيل وخيارات الدفع.",
      faq_q2: "هل المنتجات أصلية؟", faq_a2: "نعم. تتم مراجعة كل قطعة قبل عرضها وتمر بعملية فحص الأصالة عند الحاجة.",
      faq_q3: "هل توفرون تغليف هدايا؟", faq_a3: "نعم. التغليف وترشيحات الهدايا متاحة من خلال خدمة مشغل الهدايا.",
      faq_q4: "كم يستغرق التوصيل؟", faq_a4: "توصيل القاهرة غالباً يتم تنسيقه خلال 24 إلى 48 ساعة بعد التأكيد. المناطق الأخرى يتم تأكيدها عبر واتساب.",
      faq_q5: "هل يمكنني إرجاع منتج؟", faq_a5: "يمكن إرجاع المنتجات المؤهلة غير المستخدمة خلال 30 يوماً. البحث الخاص والعطور المفتوحة والقطع المستخدمة قد تكون غير قابلة للإرجاع.",
      faq_q6: "هل يمكنكم توفير ساعة أو عطر محدد؟", faq_a6: "نعم. أرسل لنا المرجع والميزانية والوقت المفضل، وسيراجع الكونسيرج خيارات التوفير.",
      // Policies
      policies_eyebrow: "شروط واضحة وخدمة هادئة", policies_title: "<em>سياسات</em> أورا",
      policies_intro: "أساسيات التوصيل والإرجاع والخصوصية والطلب الآمن عبر واتساب.",
      policy_shipping_title: "الشحن", policy_shipping_desc: "طلبات القاهرة يتم تنسيقها بعد تأكيد واتساب. وقت التوصيل يعتمد على توفر المنتج والوجهة.",
      policy_returns_title: "الإرجاع", policy_returns_desc: "يمكن إرجاع المنتجات المؤهلة غير المستخدمة خلال 30 يوماً. العطور المفتوحة والقطع المستخدمة وطلبات البحث الخاص قد تكون بيعاً نهائياً.",
      policy_payment_title: "الدفع", policy_payment_desc: "يتم تأكيد خيارات الدفع بواسطة الكونسيرج بعد مراجعة التوفر. لا تشارك بيانات دفع حساسة خارج القنوات المؤكدة.",
      policy_privacy_title: "الخصوصية", policy_privacy_desc: "تُستخدم بيانات التواصل فقط لتنسيق الاستفسار والطلب والتوصيل والرعاية اللاحقة ما لم تطلب غير ذلك.",
      policy_note_kicker: "قبل إتمام الطلب", policy_note_title: "كل طلب يتم <em>تأكيده شخصياً</em>",
      policy_note_desc: "لأن التوفر وتفاصيل الهدايا ووقت التوصيل قد تختلف، فإن تأكيد واتساب جزء من خدمة أورا وليس مجرد خطوة أخيرة.",
      read_faq: "اقرأ الأسئلة"
    }
  }
};

// ── Apply language to static elements ──
function applyLanguage(lang) {
  document.body.classList.add('no-transitions');

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Force reflow
  void document.body.offsetHeight;

  const t = LANG.translations[lang];
  if (!t) return;

  // Translate data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update lang toggle button text
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'ar' ? 'EN' : 'عربي';
  });

  // Rebuild dynamic content if available
  if (typeof renderProducts === 'function') {
    const activeBtn = document.querySelector('.filter-btn.active');
    renderProducts(activeBtn ? activeBtn.dataset.filter : 'all');
  }
  if (typeof renderFinder === 'function') renderFinder();
  if (typeof updateCartUI === 'function') updateCartUI();
  if (typeof rebuildMarquee === 'function') rebuildMarquee();

  // Re-enable transitions after layout flip is complete
  setTimeout(() => {
    document.body.classList.remove('no-transitions');
  }, 50);
}

// ── Init ──
function initLanguage() {
  const saved = localStorage.getItem('ora-lang') || 'en';
  applyLanguage(saved);

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const newLang = LANG.current === 'en' ? 'ar' : 'en';
      localStorage.setItem('ora-lang', newLang);
      applyLanguage(newLang);
    });
  });
}

document.addEventListener('DOMContentLoaded', initLanguage);
