(function () {
  const STORAGE_KEY = 'taraf-language';
  const root = document.documentElement;

  const STRINGS = {
    en: {
      price_on_request: 'Price on request',
      from_price: 'From',
      quote_items: 'quoted on WhatsApp',
      add_pairing: 'Add Pairing',
      browse_collection: 'Browse Collection',
      no_results: 'No pieces found',
      try_another_search: 'Try another search or filter.',
      add_to_cart: 'Add to Cart',
      add_short: '+ Add',
      view_details: 'View Details',
      added: ' — Added',
      pair_added: 'Pairing added to cart',
      empty: 'Empty',
      item: 'items',
      cart_empty: 'Your cart is empty',
      remove: 'Remove',
      choose_size: 'Choose Size',
      available_sizes: 'Available sizes',
      choose_size_first: 'Choose a size first',
      atelier_selected: 'Atelier Selected',
      cart_is_empty: 'Cart is empty',
    },
    ar: {
      price_on_request: 'السعر عند الطلب',
      from_price: 'ابتداء من',
      quote_items: 'منتجات يتم تأكيدها على واتساب',
      add_pairing: 'أضف الترشيح',
      browse_collection: 'تصفح المجموعة',
      no_results: 'لا توجد نتائج',
      try_another_search: 'جرب بحثاً أو تصفية مختلفة.',
      add_to_cart: 'أضف إلى السلة',
      add_short: '+ أضف',
      view_details: 'عرض التفاصيل',
      added: ' — تمت الإضافة',
      pair_added: 'تمت إضافة الترشيح للسلة',
      empty: 'فارغة',
      item: 'منتج',
      cart_empty: 'السلة فارغة',
      remove: 'حذف',
      choose_size: 'اختر الحجم',
      available_sizes: 'الأحجام المتاحة',
      choose_size_first: 'اختر الحجم أولاً',
      atelier_selected: 'اختيار ترف',
      cart_is_empty: 'السلة فارغة',
    },
  };

  const PAGE_TEXT = {
    en: {
      title: {
        'index.html': 'TARAF — Define Your Presence',
        'about.html': 'Our Story — TARAF',
        'contact.html': 'Contact — TARAF',
        'faq.html': 'FAQ — TARAF',
        'services.html': 'Services — TARAF',
        'policies.html': 'Policies — TARAF',
      },
      nav: ['Home', 'Collection', 'Services', 'Our Story', 'FAQ', 'Contact'],
      footer: ['Home', 'Shop', 'Services', 'FAQ', 'Policies', 'Contact'],
      sale: 'Grand opening | Enjoy 20% off the collection',
      home: {
        eyebrow: 'New Collection — 2026',
        h1: 'TARAF<br><em>A presence of your own.</em>',
        copy: 'Discover fragrances that feel like you. From bright citrus to warm woods, find your signature.',
        featureKicker: 'The citrus edit',
        featureAction: 'Discover the fragrance',
        primary: 'Explore Collection',
        secondary: 'Find Signature',
        proof: ['Authenticated', 'Cairo Delivery', 'Lifetime Care'],
        orbitTop: ['Citrus Spark', 'Grapefruit · Ginger'],
        tile: ['Louis Vuitton Symphony', 'Choose size to reveal price'],
        panel: ['TARAF PICK', 'Fresh, bright, long-lasting'],
        sizes: ['30 ml', '50 ml', '100 ml', 'Tester'],
        orbitBottom: ['Opening offer', '20% applied'],
        scroll: 'Scroll',
        valuesTitle: 'The <em>TARAF</em> Promise',
        valuesCopy: 'Four pillars of uncompromising excellence',
        values: [
          ['Authenticity', 'Every piece is certified genuine, sourced from verified artisans worldwide'],
          ['Craftsmanship', 'Meticulous attention to detail in every stitch, dial, and fragrance note'],
          ['Exclusivity', 'Limited editions and curated selections for the truly discerning'],
          ['Service', 'White-glove concierge experience from selection to doorstep delivery'],
        ],
        collectionTitle: 'The <em>Collection</em>',
        filters: ['All', 'Perfumes'],
        finderKicker: 'Signature Finder',
        finderTitle: 'Find your <em>TARAF</em> pairing',
        finderCopy: 'Choose the mood and we will suggest a polished fragrance pairing from the current collection, ready to view or add with one tap.',
        finderChips: ['Evening', 'Daily', 'Gift'],
        search: 'Search citrus, oud, musk...',
        sort: ['Featured', 'Price: Low to High', 'Price: High to Low', 'Name'],
        cartTitle: 'Cart',
        subtotal: 'Subtotal',
        shipping: 'Shipping',
        saved: 'You Saved',
        total: 'Total',
        checkout: 'Order via WhatsApp',
      },
      pages: {
        about: {
          subtitles: ['Est. 2018 · Cairo, Egypt', 'A passion for precision, a devotion to beauty — born from a desire to bring world-class luxury within reach.'],
          title: 'Our <em>Story</em>',
          stats: ['Years of Excellence', 'Clients Served', 'Curated Pieces'],
          headings: ['Born from a <em>Love</em> of Craft', 'Our <em>Journey</em>', 'The <em>Philosophy</em>'],
          paragraphs: [
            'TARAF was founded in 2018 by a small team of passionate collectors who believed that exceptional timepieces and rare fragrances should be more than transactions — they should be transformative experiences.',
            'Every item we source passes through a rigorous authentication process, examining provenance, mechanism integrity, and craftsmanship standards that date back generations.',
            'We partner exclusively with artisans and manufacturers who share our philosophy: that true luxury is never hurried, never compromised, and always enduring.',
            'We believe that a watch is more than an instrument — it is a companion through life\'s most meaningful moments. A fragrance is more than a scent — it is an invisible signature, a trail of memory left in every room you enter.',
            'At TARAF, we curate not merely objects, but experiences. Each selection is chosen to outlast trends, to appreciate in meaning, and to become part of your personal legend.',
          ],
        },
        contact: {
          subtitle: 'We\'d love to hear from you',
          title: 'Get in <em>Touch</em>',
          heading: 'Personal <em>Concierge</em>',
          copy: 'Our team is available to assist you with private fragrance consultations, bespoke gifting, and any inquiries about our collection.',
          labels: ['WhatsApp', 'Email', 'Location', 'Hours', 'First Name', 'Last Name', 'Email Address', 'Phone / WhatsApp', 'Interest', 'Message'],
          placeholders: ['Your first name', 'Your last name', 'your@email.com', '+20 1xx xxx xxxx', 'Perfumes · Gifting · Samples · Other', 'Tell us how we can help you...'],
          submit: 'Send via WhatsApp',
        },
        faq: {
          subtitles: ['Answers before you ask', 'Everything essential about ordering, authenticity, delivery, and care.'],
          title: 'TARAF <em>FAQ</em>',
          aside: ['Quick guide', 'Designed to make ordering feel simple.', 'For anything personal or urgent, WhatsApp is the fastest way to reach the concierge.', 'Ask Concierge'],
        },
        services: {
          subtitles: ['Concierge, care, and curation', 'A complete luxury experience around every watch, fragrance, and gift.'],
          title: 'TARAF <em>Services</em>',
        },
        policies: {
          subtitles: ['Clear terms, calm service', 'The essentials for delivery, returns, privacy, and secure WhatsApp ordering.'],
          title: 'TARAF <em>Policies</em>',
        },
      },
    },
    ar: {
      title: {
        'index.html': 'ترف — عرّف حضورك',
        'about.html': 'قصتنا — ترف',
        'contact.html': 'تواصل معنا — ترف',
        'faq.html': 'الأسئلة الشائعة — ترف',
        'services.html': 'خدماتنا — ترف',
        'policies.html': 'السياسات — ترف',
      },
      nav: ['الرئيسية', 'المجموعة', 'الخدمات', 'قصتنا', 'الأسئلة', 'تواصل'],
      footer: ['الرئيسية', 'تسوق', 'الخدمات', 'الأسئلة', 'السياسات', 'تواصل'],
      sale: 'بمناسبة الافتتاح | خصم 20% على المجموعة',
      home: {
        eyebrow: 'مجموعة جديدة — 2026',
        h1: 'ترف<br><em>حضور يشبهك.</em>',
        copy: 'لكل حضور عطر يحكيه. من انتعاش الحمضيات لدفء الأخشاب، اكتشف الرائحة التي تعبّر عنك.',
        featureKicker: 'من اختياراتنا الحمضية',
        featureAction: 'اكتشف العطر',
        primary: 'تصفح المجموعة',
        secondary: 'اكتشف توقيعك',
        proof: ['منتجات مختارة بعناية', 'توصيل داخل القاهرة', 'متابعة بعد الشراء'],
        orbitTop: ['انتعاش حمضي', 'جريب فروت · زنجبيل'],
        tile: ['Louis Vuitton Symphony', 'اختر الحجم لمعرفة السعر'],
        panel: ['اختيار ترف', 'منعش، مضيء، وثابت'],
        sizes: ['30 مل', '50 مل', '100 مل', 'تستر'],
        orbitBottom: ['عرض الافتتاح', 'خصم 20% مطبق'],
        scroll: 'مرر',
        valuesTitle: 'وعد <em>ترف</em>',
        valuesCopy: 'أربعة معايير نتمسك بها في كل اختيار',
        values: [
          ['الأصالة', 'منتجات مختارة بعناية وتجربة شراء واضحة من أول استفسار حتى الاستلام'],
          ['الحِرفة', 'اهتمام بالتفاصيل في التصميم، الرائحة، التغليف، وطريقة العرض'],
          ['التميز', 'اختيارات محدودة ومختلفة لمن يبحثون عن ذوق لا يشبه الجميع'],
          ['الخدمة', 'مساعدة شخصية في الاختيار والتنسيق والطلب عبر واتساب'],
        ],
        collectionTitle: 'مجموعة <em>ترف</em>',
        filters: ['الكل', 'العطور'],
        finderKicker: 'اكتشف توقيعك',
        finderTitle: 'اختار ترشيح <em>ترف</em>',
        finderCopy: 'اختر المزاج المناسب وسنرشح لك تركيبة عطرية من المجموعة الحالية، يمكنك عرضها أو إضافتها للسلة مباشرة.',
        finderChips: ['مساء', 'يومي', 'هدية'],
        search: 'ابحث عن عطر، عود، مسك...',
        sort: ['المميز أولاً', 'السعر: من الأقل للأعلى', 'السعر: من الأعلى للأقل', 'الاسم'],
        cartTitle: 'السلة',
        subtotal: 'الإجمالي الفرعي',
        shipping: 'الشحن',
        saved: 'وفرت',
        total: 'الإجمالي',
        checkout: 'اطلب عبر واتساب',
      },
      pages: {
        about: {
          subtitles: ['منذ 2018 · القاهرة، مصر', 'شغف بالدقة والجمال، وتجربة فاخرة قريبة وواضحة من أول اختيار.'],
          title: 'قصة <em>ترف</em>',
          stats: ['سنوات من الخبرة', 'عميل تم خدمته', 'اختيار منسق'],
          headings: ['بدأت من <em>حب</em> التفاصيل', 'رحلتنا', 'فلسفة <em>ترف</em>'],
          paragraphs: [
            'بدأت ترف من فكرة بسيطة: المنتج الفاخر لا يجب أن يكون مجرد عملية شراء، بل تجربة لها إحساس وشخصية وذكرى.',
            'كل اختيار نعرضه يمر بمراجعة دقيقة للشكل والجودة والتفاصيل، حتى يصل للعميل بصورة تليق باسم ترف.',
            'نبحث دائماً عن القطع والعطور التي تجمع بين الذوق المختلف والاستخدام العملي، بعيداً عن الاختيارات المتكررة.',
            'الساعة ليست مجرد أداة لمعرفة الوقت، والعطر ليس مجرد رائحة. كلاهما جزء من حضورك وانطباعك الأول.',
            'في ترف نختار لك تجربة متكاملة: منتج مناسب، عرض راق، وتواصل سهل حتى تصل لاختيارك بثقة.',
          ],
        },
        contact: {
          subtitle: 'يسعدنا تواصلك معنا',
          title: 'تواصل <em>معنا</em>',
          heading: 'مساعدة <em>شخصية</em>',
          copy: 'فريق ترف جاهز لمساعدتك في اختيار العطر المناسب، وتجهيز الهدايا، والرد على أي استفسار عن المجموعة.',
          labels: ['واتساب', 'البريد الإلكتروني', 'الموقع', 'المواعيد', 'الاسم الأول', 'اسم العائلة', 'البريد الإلكتروني', 'رقم الهاتف / واتساب', 'الاهتمام', 'الرسالة'],
          placeholders: ['اكتب اسمك الأول', 'اكتب اسم العائلة', 'your@email.com', '+20 1xx xxx xxxx', 'عطور · هدايا · عينات · أخرى', 'اكتب لنا كيف نقدر نساعدك...'],
          submit: 'إرسال عبر واتساب',
        },
        faq: {
          subtitles: ['إجابات قبل ما تسأل', 'كل ما تحتاج معرفته عن الطلب، الأصالة، التوصيل، والعناية.'],
          title: 'أسئلة <em>ترف</em>',
          aside: ['دليل سريع', 'طلبك مصمم ليكون واضحاً وسهلاً.', 'لأي طلب شخصي أو عاجل، واتساب هو أسرع طريقة للتواصل معنا.', 'اسأل فريق ترف'],
        },
        services: {
          subtitles: ['اختيار، عناية، وتجربة شخصية', 'خدمة متكاملة حول كل عطر، ساعة، أو هدية تختارها من ترف.'],
          title: 'خدمات <em>ترف</em>',
        },
        policies: {
          subtitles: ['سياسات واضحة وخدمة هادئة', 'كل ما يخص التوصيل، الاسترجاع، الخصوصية، والطلب الآمن عبر واتساب.'],
          title: 'سياسات <em>ترف</em>',
        },
      },
    },
  };

  const FAQ_AR = [
    ['كيف أطلب؟', 'أضف المنتجات إلى السلة ثم أرسل الطلب عبر واتساب. سيؤكد فريق ترف التوفر، تفاصيل التوصيل، وخيارات الدفع.'],
    ['هل المنتجات أصلية؟', 'كل منتج يتم مراجعته قبل عرضه، ونتعامل معه بعناية من حيث الشكل والجودة والتفاصيل المناسبة له.'],
    ['هل يوجد تغليف هدايا؟', 'نعم، نوفر ترشيحات وتغليف مناسب للهدايا من خلال خدمة ترف للهدايا.'],
    ['كم يستغرق التوصيل؟', 'توصيل القاهرة غالباً يتم تنسيقه خلال 24 إلى 48 ساعة بعد التأكيد. باقي المناطق يتم تأكيدها عبر واتساب.'],
    ['هل يمكن الاسترجاع؟', 'يمكن إرجاع المنتجات المؤهلة غير المستخدمة خلال 30 يوماً. بعض الطلبات الخاصة أو العطور المفتوحة قد تكون غير قابلة للاسترجاع.'],
    ['هل يمكن توفير ساعة أو عطر محدد؟', 'نعم، أرسل لنا المرجع والميزانية والوقت المناسب، وسيراجع فريق ترف خيارات التوفير المتاحة.'],
  ];

  const FAQ_EN = [
    ['How do I place an order?', 'Add items to the cart and send the order through WhatsApp. A TARAF specialist will confirm availability, delivery details, and payment options.'],
    ['Are the products authentic?', 'Yes. Every piece is reviewed before listing and handled through our authentication process where applicable.'],
    ['Do you offer gift wrapping?', 'Yes. Gift wrapping and recommendation support are available through the Gift Atelier service.'],
    ['How long does delivery take?', 'Cairo delivery is usually coordinated within 24 to 48 hours after confirmation. Other locations are confirmed through WhatsApp.'],
    ['Can I return an item?', 'Eligible unused items may be returned within 30 days. Custom sourcing and opened fragrances may have limitations.'],
    ['Can you source a specific watch or fragrance?', 'Yes. Send us the reference, budget, and preferred timeline, and the concierge will review sourcing options.'],
  ];

  const SERVICES_AR = [
    ['مراجعة الجودة', 'كل قطعة يتم فحصها من حيث الشكل، الخامات، والتفاصيل قبل أن تصل إليك.'],
    ['توفير خاص', 'تبحث عن ساعة أو عطر محدد؟ يمكن لفريق ترف ترشيح خيارات خارج المجموعة المعروضة.'],
    ['هدايا ترف', 'ترشيحات شخصية، تغليف أنيق، وتنسيق كامل عبر واتساب للمناسبات والهدايا الخاصة.'],
    ['العناية بعد الشراء', 'إرشادات للحفظ، استخدام العطور، والعناية بالقطع المختارة على المدى الطويل.'],
  ];

  const SERVICES_EN = [
    ['Authentication Review', 'Every sourced piece is inspected for provenance, material integrity, and finishing standards before it reaches you.'],
    ['Private Sourcing', 'Looking for a specific timepiece or scent profile? Our team can curate options beyond the public collection.'],
    ['Gift Atelier', 'Personalized recommendations, elegant wrapping, and WhatsApp coordination for birthdays, milestones, and corporate gifts.'],
    ['Aftercare', 'Guidance on storage, fragrance care, servicing windows, and long-term ownership for selected pieces.'],
  ];

  const POLICIES_AR = [
    ['الشحن', 'طلبات القاهرة يتم تنسيقها بعد التأكيد عبر واتساب. مدة التوصيل تعتمد على توفر المنتج والمنطقة.'],
    ['الاسترجاع', 'يمكن إرجاع المنتجات المؤهلة غير المستخدمة خلال 30 يوماً. العطور المفتوحة والطلبات الخاصة قد تكون بيعاً نهائياً.'],
    ['الدفع', 'خيارات الدفع يتم تأكيدها بعد مراجعة التوفر. لا تشارك أي بيانات حساسة خارج قنواتنا الموثقة.'],
    ['الخصوصية', 'بيانات التواصل تستخدم فقط لتنسيق الاستفسار، الطلب، التوصيل، وخدمة ما بعد البيع.'],
  ];

  const POLICIES_EN = [
    ['Shipping', 'Cairo orders are coordinated after WhatsApp confirmation. Delivery timing depends on product availability and destination.'],
    ['Returns', 'Unused eligible pieces may be returned within 30 days. Opened fragrances, worn items, and private sourcing requests may be final sale.'],
    ['Payment', 'Payment options are confirmed by the concierge after availability is checked. Never share sensitive payment details outside verified channels.'],
    ['Privacy', 'Contact details are used only to coordinate your inquiry, order, delivery, and aftercare unless you request otherwise.'],
  ];

  const PRODUCT_DESCS = {
    ar: {
      14: 'تركيبة مضيئة من الزنجبيل والجريب فروت والبرغموت، تستقر على لمسة مسكية خشبية ناعمة تمنح إحساساً فواراً ونظيفاً يدوم على الجلد.',
      16: 'توليفة فاخرة من الفواكه المتوسطية مع البرغموت والليمون، وقاعدة من الفانيليا والعنبر والمسك الأبيض بثبات واضح.',
      17: 'برغموت كالابريا منعش مع أمبروكسان حاد وقاعدة خشبية دافئة تمنح حضوراً ذكورياً نظيفاً وقوياً.',
      18: 'طابع بحري عميق ومختلف، مالح وحاد مع قاعدة عنبرية خشبية قوية وثبات ممتد.',
      19: 'دفء الفلفل الوردي والكراميل المملح مع عمق الأخشاب والفانيليا، مناسب للمساء والخروجات.',
      20: 'فخامة بودرية مخملية من السوسن واللافندر، تستقر على خشب الأرز ونجيل الهند.',
      21: 'حليب دافئ وكراميل وفانيليا بقاعدة مسكية ناعمة، رائحة مريحة وقريبة من الجلد.',
      22: 'بوكس استكشاف يضم 5 عطور مختلفة بحجم عملي، مناسب للتجربة والسفر واختيار عطرك المفضل.',
      23: 'هيل وقرفة وبرغموت مع فانيليا بوربون كريمية وقاعدة خشبية داكنة من الغاياك والبرالين والمسك.',
      24: 'فانيليا مدغشقر جافة وبودرية مع جوز الهند وبالو سانتو ومسك أبيض، مناسب للجنسين.',
      25: 'تفاح أخضر وكشمش أسود مع حلوى فراولة ونفحات فاكهية مرحة على قاعدة فانيليا ومسك.',
      26: 'رائحة نظافة صابونية كلاسيكية بلمسات زهرية وبودرية وقاعدة مسك أبيض ناعمة.',
      27: 'رمان عصاري وتوت أحمر مع ورد فاتح ومسك أبيض كريمي يمنح نظافة فاكهية ناعمة.',
      28: 'لبان عماني وزعفران وتوابل دافئة مع عود معتق وعنبر ومسك، طابع شرقي عميق.',
      29: 'زعفران وورد وبرالين مع عود ناعم وفانيليا كريمية، عطر شرقي غني وثابت.',
    },
    en: {
      14: 'Sparkling ginger, natural grapefruit, and bergamot over a soft musky-woody base with a clean radiant trail.',
      16: 'Mediterranean fruits, bergamot, and lemon over a plush base of vanilla, amber, and white musk.',
      17: 'Fresh Calabrian bergamot with a clean ambroxan punch and a warm woody base.',
      18: 'A deep marine scent with salty intensity, amber woods, and an unusually powerful trail.',
      19: 'Pink pepper, salted caramel, warm woods, vanilla, and leather for a seductive evening profile.',
      20: 'Powdery iris and lavender with cedar and vetiver, polished, smooth, and dressed-up.',
      21: 'Warm milk, caramel, and vanilla on a soft white-musk base for a cozy gourmand feel.',
      22: 'A discovery box with five 10 ml scents, made for testing, travel, and finding your signature.',
      23: 'Cardamom, cinnamon, bergamot, orange blossom, bourbon vanilla, woods, praline, and musk.',
      24: 'Dry Madagascar vanilla, clean coconut, palo santo, and white musk with a refined powdery trail.',
      25: 'Green apple, blackcurrant, strawberry candy, vanilla, sandalwood, and musk in a playful sweet blend.',
      26: 'A clean classic soap scent with aldehydes, soft florals, powder, white musk, and sandalwood.',
      27: 'Juicy pomegranate, red berries, light rose, and creamy white musk for a fruity-clean signature.',
      28: 'Omani frankincense, saffron, warm spices, aged oud, amber, and musk with an elegant oriental depth.',
      29: 'Saffron, rose, caramel praline, soft oud, guaiac wood, and creamy vanilla with a rich trail.',
    },
  };

  const PRODUCT_RITUALS = {
    ar: {
      14: 'مناسب للصباح والخروجات النظيفة، يعطي طاقة وانتعاش بدون ما يكون مزعج.',
      16: 'اختيار واضح لمن يحب العطور الفاكهية الفاخرة ذات الثبات العالي.',
      17: 'مناسب للاستخدام اليومي والمشاوير المهمة عندما تريد حضوراً نظيفاً وحاداً.',
      18: 'اختيار قوي جداً لمن يحب العطور البحرية المختلفة والثابتة.',
      19: 'مناسب للمساء والشتاء والخروجات التي تحتاج عطراً دافئاً وجذاباً.',
      20: 'اختيار أنيق للمقابلات، البدلة، والمناسبات الرسمية.',
      21: 'مناسب للأجواء الهادئة والقريبة، يعطي إحساساً دافئاً ومريحاً.',
      22: 'أفضل اختيار للتجربة قبل شراء الحجم الكبير أو كهدية خفيفة ومختلفة.',
    },
    en: {
      14: 'Best for bright mornings and clean fresh outings without feeling loud.',
      16: 'Made for lovers of fruity luxury scents with strong projection.',
      17: 'A daily clean signature for errands, work, and confident casual wear.',
      18: 'A bold choice for anyone who wants a powerful marine statement.',
      19: 'Ideal for evenings, colder weather, and warm attractive presence.',
      20: 'Polished for formal outfits, meetings, and dressed-up occasions.',
      21: 'Soft and cozy for calm close moments and comforting daily wear.',
      22: 'Perfect for testing before buying a full size or gifting a varied experience.',
    },
  };

  function pageName() {
    const name = location.pathname.split('/').pop() || 'index.html';
    return name === '' ? 'index.html' : name;
  }

  function currentLang() {
    return root.lang === 'ar' ? 'ar' : 'en';
  }

  function setText(selector, value, html = false) {
    const nodes = document.querySelectorAll(selector);
    nodes.forEach((node) => {
      if (html) node.innerHTML = value;
      else node.textContent = value;
    });
  }

  function setAttr(selector, attr, value) {
    document.querySelectorAll(selector).forEach((node) => node.setAttribute(attr, value));
  }

  function setList(selector, values, html = false) {
    const nodes = document.querySelectorAll(selector);
    nodes.forEach((node, index) => {
      if (values[index] === undefined) return;
      if (html) node.innerHTML = values[index];
      else node.textContent = values[index];
    });
  }

  function updateNav(lang) {
    const data = PAGE_TEXT[lang];
    document.querySelectorAll('.nav-links').forEach((nav) => {
      nav.querySelectorAll('a').forEach((link, index) => {
        if (data.nav[index]) link.textContent = data.nav[index];
      });
    });
    document.querySelectorAll('.footer-links').forEach((nav) => {
      nav.querySelectorAll('a').forEach((link, index) => {
        if (data.footer[index]) link.textContent = data.footer[index];
      });
    });
    setText('.footer-copy', lang === 'ar' ? '© 2025 ترف · جميع الحقوق محفوظة' : '© 2025 TARAF · All rights reserved');
  }

  function ensureToggle() {
    document.querySelectorAll('.nav-right').forEach((nav) => {
      if (nav.querySelector('.lang-toggle')) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-toggle';
      btn.setAttribute('aria-label', 'Switch language');
      const theme = nav.querySelector('.theme-toggle');
      nav.insertBefore(btn, theme || nav.firstChild);
      btn.addEventListener('click', () => apply(currentLang() === 'ar' ? 'en' : 'ar'));
    });
  }

  function updateToggle(lang) {
    document.querySelectorAll('.lang-toggle').forEach((btn) => {
      btn.textContent = lang === 'ar' ? 'EN' : 'AR';
      btn.title = lang === 'ar' ? 'English' : 'العربية';
    });
  }

  function updateHome(lang) {
    const data = PAGE_TEXT[lang].home;
    setText('#sale-banner', PAGE_TEXT[lang].sale);
    setText('.hero-eyebrow', data.eyebrow);
    setText('.hero-content h1', data.h1, true);
    setText('.hero-copy', data.copy);
    setText('.hero-feature-kicker', data.featureKicker);
    setText('.hero-feature-action', data.featureAction);
    setText('.hero-cta span', data.primary);
    setText('.hero-secondary', data.secondary);
    setList('.hero-proof-row span', data.proof);
    setList('.orbit-top span, .orbit-top strong', data.orbitTop);
    setList('.hero-main-perfume span, .hero-main-perfume strong', data.tile);
    setList('.hero-panel-kicker, .hero-scent-panel > strong', data.panel);
    setList('.hero-panel-notes span', data.sizes);
    setList('.orbit-bottom span, .orbit-bottom strong', data.orbitBottom);
    setText('.scroll-hint span', data.scroll);
    setText('.values-title h2', data.valuesTitle, true);
    setText('.values-title p', data.valuesCopy);
    document.querySelectorAll('.value-card').forEach((card, index) => {
      const value = data.values[index];
      if (!value) return;
      const name = card.querySelector('.value-name');
      const detail = card.querySelector('.value-detail');
      if (name) name.textContent = value[0];
      if (detail) detail.textContent = value[1];
    });
    setText('#products .section-title', data.collectionTitle, true);
    setList('.filter-btn', data.filters);
    setText('.atelier-copy .section-kicker', data.finderKicker);
    setText('.atelier-copy h2', data.finderTitle, true);
    setText('.atelier-copy > p:not(.section-kicker)', data.finderCopy);
    setList('.finder-chip', data.finderChips);
    setAttr('#product-search', 'placeholder', data.search);
    document.querySelectorAll('#product-sort option').forEach((option, index) => {
      if (data.sort[index]) option.textContent = data.sort[index];
    });
    setText('.cart-header h2', data.cartTitle);
    setList('.cart-footer .summary-label', [data.subtotal, data.shipping, data.saved]);
    setText('.total-label', data.total);
    setText('#checkout-btn span', data.checkout);
    setAttr('#cart-trigger', 'aria-label', lang === 'ar' ? 'فتح السلة' : 'Open Cart');
    setAttr('#close-cart-btn, #quickview-close', 'aria-label', lang === 'ar' ? 'إغلاق' : 'Close');
  }

  function updateAbout(lang) {
    const data = PAGE_TEXT[lang].pages.about;
    if (!data) return;
    setList('.page-header > .page-subtitle', data.subtitles);
    setText('.page-title', data.title, true);
    setList('.stat-label', data.stats);
    setList('.text-block h2, .values-title h2', data.headings, true);
    setList('.text-block p:not(.section-kicker):not(.page-subtitle)', data.paragraphs);
    if (lang === 'ar') {
      setText('.info-label', 'ضماننا');
      setText('.info-item p', 'اختيارات موثوقة · متابعة شخصية · خدمة ما بعد البيع');
    } else {
      setText('.info-label', 'Our Guarantee');
      setText('.info-item p', '100% authenticated · 30-day returns · Lifetime care service');
    }
  }

  function updateContact(lang) {
    const data = PAGE_TEXT[lang].pages.contact;
    setText('.page-header > .page-subtitle', data.subtitle);
    setText('.page-title', data.title, true);
    setText('.text-block h2', data.heading, true);
    setText('.text-block > p', data.copy);
    setList('.info-label, .form-group label', data.labels);
    document.querySelectorAll('.form-group input, .form-group textarea').forEach((input, index) => {
      if (data.placeholders[index]) input.placeholder = data.placeholders[index];
    });
    setText('#submit-btn span', data.submit);
    if (lang === 'ar') {
      setText('.info-item:nth-of-type(3) p', 'القاهرة، مصر');
      setText('.info-item:nth-of-type(4) p span', 'السبت - الخميس: 10:00 صباحاً - 10:00 مساءً<br>الجمعة: 2:00 مساءً - 10:00 مساءً', true);
      setList('.social-links a', ['إنستجرام', 'فيسبوك', 'واتساب', 'تيك توك']);
    } else {
      setText('.info-item:nth-of-type(3) p', 'Cairo, Egypt');
      setText('.info-item:nth-of-type(4) p span', 'Sat – Thu: 10:00 AM – 10:00 PM<br>Fri: 2:00 PM – 10:00 PM', true);
      setList('.social-links a', ['Instagram', 'Facebook', 'WhatsApp', 'TikTok']);
    }
  }

  function updateFaq(lang) {
    const data = PAGE_TEXT[lang].pages.faq;
    setList('.page-header > .page-subtitle', data.subtitles);
    setText('.page-title', data.title, true);
    setList('.faq-aside .section-kicker, .faq-aside h2, .faq-aside p, .faq-aside .panel-cta', data.aside);
    const entries = lang === 'ar' ? FAQ_AR : FAQ_EN;
    document.querySelectorAll('.faq-list details').forEach((item, index) => {
      const entry = entries[index];
      if (!entry) return;
      item.querySelector('summary').textContent = entry[0];
      item.querySelector('p').textContent = entry[1];
    });
  }

  function updateServices(lang) {
    const data = PAGE_TEXT[lang].pages.services;
    setList('.page-header > .page-subtitle', data.subtitles);
    setText('.page-title', data.title, true);
    const cards = lang === 'ar' ? SERVICES_AR : SERVICES_EN;
    document.querySelectorAll('.service-grid .detail-card').forEach((card, index) => {
      const entry = cards[index];
      if (!entry) return;
      card.querySelector('h2').textContent = entry[0];
      card.querySelector('p').textContent = entry[1];
    });
    if (lang === 'ar') {
      setText('.process-panel .section-kicker', 'طريقة العمل');
      setText('.process-panel h2', 'مسار <em>شخصي</em> وواضح', true);
      setText('.process-panel .text-block > p:not(.section-kicker)', 'شاركنا المناسبة، الميزانية، والذوق المفضل. نرشح لك اختيارات مناسبة، ثم نساعدك على تأكيد الطلب عبر واتساب.');
      setList('.process-steps strong', ['استشارة', 'ترشيح', 'تأكيد', 'توصيل']);
      setText('.cta-panel .section-kicker', 'تحتاج ترشيح؟');
      setText('.cta-panel h2', 'تحدث مع <em>فريق ترف</em>', true);
      setText('.cta-panel .panel-cta', 'تواصل معنا');
    } else {
      setText('.process-panel .section-kicker', 'How it works');
      setText('.process-panel h2', 'A calm, <em>personal</em> path', true);
      setText('.process-panel .text-block > p:not(.section-kicker)', 'Share the occasion, budget, and preferred style. We narrow the collection into a focused shortlist, then help you complete the order through WhatsApp.');
      setList('.process-steps strong', ['Consult', 'Curate', 'Confirm', 'Deliver']);
      setText('.cta-panel .section-kicker', 'Need a recommendation?');
      setText('.cta-panel h2', 'Speak with the <em>concierge</em>', true);
      setText('.cta-panel .panel-cta', 'Contact Concierge');
    }
  }

  function updatePolicies(lang) {
    const data = PAGE_TEXT[lang].pages.policies;
    setList('.page-header > .page-subtitle', data.subtitles);
    setText('.page-title', data.title, true);
    const cards = lang === 'ar' ? POLICIES_AR : POLICIES_EN;
    document.querySelectorAll('.policy-grid .policy-card').forEach((card, index) => {
      const entry = cards[index];
      if (!entry) return;
      card.querySelector('h2').textContent = entry[0];
      card.querySelector('p').textContent = entry[1];
    });
    if (lang === 'ar') {
      setText('.policy-note .section-kicker', 'قبل إتمام الطلب');
      setText('.policy-note h2', 'كل طلب يتم <em>تأكيده شخصياً</em>', true);
      setText('.policy-note p:not(.section-kicker)', 'لأن التوفر، تفاصيل الهدية، وموعد التوصيل قد يختلفون، تأكيد واتساب جزء أساسي من خدمة ترف.');
      setText('.policy-note .panel-cta', 'اقرأ الأسئلة');
    } else {
      setText('.policy-note .section-kicker', 'Before checkout');
      setText('.policy-note h2', 'Every order is <em>confirmed personally</em>', true);
      setText('.policy-note p:not(.section-kicker)', 'Because availability, gift details, and delivery timing can vary, WhatsApp confirmation is part of the TARAF service rather than a last step.');
      setText('.policy-note .panel-cta', 'Read FAQ');
    }
  }

  function rerenderDynamic() {
    const openProductId = document.getElementById('quickview-content')?.dataset.productId;
    const openVariantIndex = document.getElementById('quickview-content')?.dataset.variantIndex;
    if (typeof rebuildMarquee === 'function') rebuildMarquee();
    if (typeof renderFinder === 'function') renderFinder();
    if (typeof renderProducts === 'function') renderProducts();
    if (typeof updateCartUI === 'function') updateCartUI();
    if (typeof refreshQuickViewLanguage === 'function') {
      refreshQuickViewLanguage();
    } else if (openProductId && typeof openQuickView === 'function') {
      openQuickView(Number(openProductId));
      if (openVariantIndex !== undefined && openVariantIndex !== '' && typeof chooseVariantInQuickView === 'function') {
        chooseVariantInQuickView(Number(openVariantIndex));
      }
    }
  }

  function apply(lang, skipStore) {
    const next = lang === 'ar' ? 'ar' : 'en';
    root.lang = next;
    root.dir = next === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('is-ar', next === 'ar');
    if (!skipStore) localStorage.setItem(STORAGE_KEY, next);

    const name = pageName();
    document.title = PAGE_TEXT[next].title[name] || PAGE_TEXT[next].title['index.html'];
    ensureToggle();
    updateToggle(next);
    updateNav(next);
    if (name === 'index.html') updateHome(next);
    if (name === 'about.html') updateAbout(next);
    if (name === 'contact.html') updateContact(next);
    if (name === 'faq.html') updateFaq(next);
    if (name === 'services.html') updateServices(next);
    if (name === 'policies.html') updatePolicies(next);
    rerenderDynamic();
  }

  const initial = localStorage.getItem(STORAGE_KEY) || 'ar';
  root.lang = initial === 'en' ? 'en' : 'ar';
  root.dir = root.lang === 'ar' ? 'rtl' : 'ltr';

  window.LANG = {
    get isAr() { return currentLang() === 'ar'; },
    str(key) { return (STRINGS[currentLang()] && STRINGS[currentLang()][key]) || STRINGS.en[key] || key; },
    formatPrice(value) {
      const number = Number(value || 0).toLocaleString('en-EG');
      return this.isAr ? `${number} ج.م` : `${number} EGP`;
    },
    categoryLabel(category) {
      if (category === 'perfumes') return this.isAr ? 'عطور' : 'Perfumes';
      if (category === 'watches') return this.isAr ? 'ساعات' : 'Watches';
      return category;
    },
    productName(product) { return product.name; },
    productDesc(product) {
      return PRODUCT_DESCS[currentLang()]?.[product.id] || product.desc;
    },
    productBadge(product) {
      if (!product.badge) return '';
      if (!this.isAr) return product.badge;
      return product.badge === 'Limited' ? 'محدود' : product.badge === 'Best' ? 'الأفضل' : 'جديد';
    },
    collectionCount(count, total) {
      return this.isAr ? `${count} من ${total} منتج` : `${count} of ${total} items`;
    },
    productMeta(productId) {
      const id = Number(productId);
      const ritual = PRODUCT_RITUALS[currentLang()]?.[id];
      if (this.isAr) {
        return {
          notes: ['اختر الحجم قبل الإضافة', 'تغليف مناسب للهدايا', 'طلب سريع عبر واتساب'],
          ritual: ritual || 'اختيار راق يضيف لحضورك لمسة واضحة بدون مبالغة.',
        };
      }
      return {
        notes: ['Choose a size before adding', 'Gift-ready packaging', 'Fast WhatsApp ordering'],
        ritual: ritual || 'A refined signature with quiet presence.',
      };
    },
    finderMode(mode) {
      const ar = {
        evening: ['اختيار المساء', 'ترشيح ترف للمساء', 'مزيج مناسب للخروجات والمناسبات الهادئة.', 'ارتديه بثقة هادئة.'],
        daily: ['اختيار يومي', 'رفيق يومي أنيق', 'اختيارات خفيفة وعملية للاستخدام المتكرر.', 'اختيار مناسب من الصباح للمساء.'],
        gift: ['هدية راقية', 'هدية جاهزة للإبهار', 'ترشيحات سهلة وآمنة لمن تحب.', 'تغليف أنيق ورسالة واضحة.'],
      };
      const en = {
        evening: ['Evening Pick', 'A curated TARAF pairing', 'A refined combination selected for the moment.', 'Wear it with quiet confidence.'],
        daily: ['Daily Pick', 'A polished daily signature', 'Easy pieces selected for repeated wear.', 'Designed to move through the day.'],
        gift: ['Gift Pick', 'A memorable gift choice', 'Elegant options chosen for confident gifting.', 'Ready for a thoughtful presentation.'],
      };
      const list = this.isAr ? ar : en;
      const value = list[mode] || list.evening;
      return { label: value[0], title: value[1], text: value[2], ritual: value[3] };
    },
    marqueeItems() {
      return this.isAr
        ? [
            { text: 'توصيل داخل القاهرة', gold: true },
            { text: 'تغليف هدايا', gold: false },
            { text: 'عطور مختارة', gold: true },
            { text: 'خصم افتتاح 20%', gold: false },
            { text: 'طلب عبر واتساب', gold: true },
            { text: 'خدمة شخصية', gold: false },
          ]
        : [
            { text: 'Cairo Delivery', gold: true },
            { text: 'Gift-ready Packaging', gold: false },
            { text: 'Curated Perfumes', gold: true },
            { text: '20% Opening Offer', gold: false },
            { text: 'WhatsApp Ordering', gold: true },
            { text: 'Personal Service', gold: false },
          ];
    },
    apply,
  };

  document.addEventListener('DOMContentLoaded', () => apply(root.lang, true));
})();
