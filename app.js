// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Telegram Config (أدخل توكن البوت والـ Chat ID الخاص بك هنا)
const TELEGRAM_BOT_TOKEN = '8601802500:AAGWyk7Yiw9TUoufHiK-kHdlO8nK3Rq-tGE';
const TELEGRAM_CHAT_ID = '8601802500';

const menuData = {
  categories: {
    juices: { name: "العصائر الفريش", icon: "🍹", desc: "عصائر طبيعية طازجة تروي عطشك" },
    sobia: { name: "السوبيا", icon: "🥥", desc: "أشهى أنواع السوبيا بالنكهات المختلفة" },
    sweets: { name: "الحلو", icon: "🍨", desc: "ألذ أطباق الأرز بلبن والحلويات" },
    liters: { name: "مشروبات باللتر", icon: "🫙", desc: "مشروبات عائلية باللتر تكفي الجميع" }
  },
  items: [
    // العصائر
    { id: "manja", category: "juices", name: "مانجا", price: 25, desc: "عصير مانجا طبيعي طازج", sizes: [{ id: "s", name: "صغير", price: 25 }, { id: "m", name: "وسط", price: 35 }, { id: "l", name: "كبير", price: 45 }] },
    { id: "ennab", category: "juices", name: "عناب", price: 10, desc: "عناب مثلج منعش", sizes: [{ id: "s", name: "صغير", price: 10 }, { id: "m", name: "وسط", price: 15 }, { id: "l", name: "كبير", price: 25 }] },
    { id: "kharob", category: "juices", name: "خروب", price: 10, desc: "عصير خروب بارد ولذيذ", sizes: [{ id: "s", name: "صغير", price: 10 }, { id: "m", name: "وسط", price: 15 }, { id: "l", name: "كبير", price: 25 }] },
    { id: "tamar", category: "juices", name: "تمر هندي", price: 10, desc: "تمر هندي أصلي منعش", sizes: [{ id: "s", name: "صغير", price: 10 }, { id: "m", name: "وسط", price: 15 }, { id: "l", name: "كبير", price: 25 }] },
    { id: "orange", category: "juices", name: "برتقال", price: 20, desc: "عصير برتقال فريش", sizes: [{ id: "s", name: "صغير", price: 20 }, { id: "m", name: "وسط", price: 25 }, { id: "l", name: "كبير", price: 35 }] },

    // السوبيا
    { id: "sobia", category: "sobia", name: "سوبيا", price: 20, desc: "سوبيا أصلية بمذاق رائع", sizes: [{ id: "s", name: "صغير", price: 20 }, { id: "m", name: "وسط", price: 25 }, { id: "l", name: "كبير", price: 35 }] },
    { id: "sobia-coconut", category: "sobia", name: "سوبيا جوز هند", price: 20, desc: "سوبيا غنية بنكهة جوز الهند", sizes: [{ id: "s", name: "صغير", price: 20 }, { id: "m", name: "وسط", price: 25 }, { id: "l", name: "كبير", price: 35 }] },
    { id: "sobia-lotus", category: "sobia", name: "سوبيا لوتس", price: 25, desc: "سوبيا بصوص وبسكويت اللوتس", sizes: [{ id: "s", name: "صغير", price: 25 }, { id: "m", name: "وسط", price: 30 }, { id: "l", name: "كبير", price: 40 }] },
    { id: "sobia-berry", category: "sobia", name: "سوبيا توت", price: 25, desc: "سوبيا بنكهة التوت اللذيذة", sizes: [{ id: "s", name: "صغير", price: 25 }, { id: "m", name: "وسط", price: 30 }, { id: "l", name: "كبير", price: 40 }] },
    { id: "sobia-pomegranate", category: "sobia", name: "سوبيا رمان", price: 25, desc: "سوبيا بقطع وصوص الرمان", sizes: [{ id: "s", name: "صغير", price: 25 }, { id: "m", name: "وسط", price: 30 }, { id: "l", name: "كبير", price: 40 }] },
    { id: "sobia-mocha", category: "sobia", name: "سوبيا موكا", price: 25, desc: "سوبيا بنكهة الموكا المميزة", sizes: [{ id: "s", name: "صغير", price: 25 }, { id: "m", name: "وسط", price: 30 }, { id: "l", name: "كبير", price: 40 }] },
    { id: "sobia-hazelnut", category: "sobia", name: "سوبيا بندق", price: 30, desc: "سوبيا غنية بقطع البندق", sizes: [{ id: "s", name: "صغير", price: 30 }, { id: "m", name: "وسط", price: 40 }, { id: "l", name: "كبير", price: 50 }] },
    { id: "sobia-pistachio", category: "sobia", name: "سوبيا فسدق", price: 35, desc: "سوبيا فاخرة بقطع الفسدق", sizes: [{ id: "s", name: "صغير", price: 35 }, { id: "m", name: "وسط", price: 45 }, { id: "l", name: "كبير", price: 65 }] },

    // الحلو
    { id: "rice-plain", category: "sweets", name: "أرز بلبن ساده", price: 35, desc: "طبق أرز بلبن غني وكريمي" },
    { id: "rice-oven", category: "sweets", name: "أرز بلبن فرن", price: 35, desc: "أرز بلبن محمر في الفرن بمذاق رائع" },
    { id: "rice-lotus", category: "sweets", name: "أرز بلبن لوتس", price: 65, desc: "أرز بلبن مغطى بصوص اللوتس والبسكويت المقرمش" },

    // لتر
    { id: "liter-kharob", category: "liters", name: "خروب (لتر)", price: 45, desc: "زجاجة عصير خروب بحجم 1 لتر" },
    { id: "liter-doum", category: "liters", name: "دوم (لتر)", price: 45, desc: "زجاجة عصير دوم بحجم 1 لتر" },
    { id: "liter-ennab", category: "liters", name: "عناب (لتر)", price: 45, desc: "زجاجة عناب مثلج بحجم 1 لتر" },
    { id: "liter-tamar", category: "liters", name: "تمر هندي (لتر)", price: 45, desc: "زجاجة تمر هندي بحجم 1 لتر" },
    { id: "liter-sobia-pistachio", category: "liters", name: "سوبيا فسدق (لتر)", price: 150, desc: "زجاجة سوبيا بالفسدق بحجم 1 لتر" },
    { id: "liter-sobia-hazelnut", category: "liters", name: "سوبيا بندق (لتر)", price: 120, desc: "زجاجة سوبيا بالبندق بحجم 1 لتر" },
    { id: "liter-sobia-mocha", category: "liters", name: "سوبيا موكا (لتر)", price: 100, desc: "زجاجة سوبيا بنكهة الموكا بحجم 1 لتر" },
    { id: "liter-sobia-pomegranate", category: "liters", name: "سوبيا رمان (لتر)", price: 100, desc: "زجاجة سوبيا بالرمان بحجم 1 لتر" },
    { id: "liter-sobia-berry", category: "liters", name: "سوبيا توت (لتر)", price: 100, desc: "زجاجة سوبيا بالتوت بحجم 1 لتر" },
    { id: "liter-sobia-lotus", category: "liters", name: "سوبيا لوتس (لتر)", price: 100, desc: "زجاجة سوبيا باللوتس بحجم 1 لتر" },
    { id: "liter-sobia-coconut", category: "liters", name: "سوبيا جوز هند (لتر)", price: 80, desc: "زجاجة سوبيا بجوز الهند بحجم 1 لتر" }
  ],
  deliveryNumbers: ["01055667793", "01204811161"],
  complaintNumber: "01287691269"
};

// Router Logic
function handleRouting() {
  const path = window.location.hash || '#/';
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Home route
  if (path === '#/' || path === '') {
    renderHome();
    return;
  }

  // Category route: #/category/:id
  if (path.startsWith('#/category/')) {
    const catId = path.replace('#/category/', '');
    renderCategory(catId);
    return;
  }

  // Item route: #/item/:id
  if (path.startsWith('#/item/')) {
    const itemId = path.replace('#/item/', '');
    renderItemDetail(itemId);
    return;
  }

  // Default: redirect home
  window.location.hash = '#/';
}

// Render Home Page
function renderHome() {
  const mainContent = document.getElementById('main-content');

  // Hero section HTML
  let categoriesHTML = '';
  for (const [id, cat] of Object.entries(menuData.categories)) {
    categoriesHTML += `
      <div class="category-card" onclick="window.location.hash = '#/category/${id}'">
        <div class="cat-icon">${cat.icon}</div>
        <h3>${cat.name}</h3>
        <p>${menuData.items.filter(i => i.category === id).length} صنف</p>
      </div>
    `;
  }

  // Highlight some premium featured items (like rolls, meat)
  const featured = menuData.items.filter(i => i.category === 'rolls' || i.category === 'meat').slice(0, 4);
  let featuredHTML = featured.map(item => `
    <div class="item-card" onclick="window.location.hash = '#/item/${item.id}'">
      <div class="item-badge">مميز 🔥</div>
      <div class="item-card-content">
        <h3>${item.name}</h3>
        <p>${item.desc.substring(0, 50)}...</p>
        <div class="item-card-footer">
          <span class="price">${item.sizes ? 'يبدأ من ' : ''}${item.price} جنيه</span>
          <span class="view-details">عرض التفاصيل ←</span>
        </div>
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <section class="hero-section">
      <div class="hero-content">
        <h1>سوبيا تركي</h1>
        <p>أشهى مشروبات السوبيا والعصائر الطبيعية بطعم لا يقاوم وجودة لا تضاهى!</p>
        <div class="delivery-badge-container">
          <span class="badge badge-success">🛵 دليفري سريع</span>
          <span class="badge badge-warning">🔥 طازج وبارد</span>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">فئات المنيو</h2>
      <div class="categories-grid">
        ${categoriesHTML}
      </div>
    </section>

    <section class="section bg-light">
      <h2 class="section-title">الأصناف الأكثر طلباً</h2>
      <div class="items-grid">
        ${featuredHTML}
      </div>
    </section>
  `;
}

// Render Category Page
function renderCategory(catId) {
  const mainContent = document.getElementById('main-content');
  const cat = menuData.categories[catId];
  if (!cat) {
    window.location.hash = '#/';
    return;
  }

  const items = menuData.items.filter(i => i.category === catId);
  const itemsHTML = items.map(item => `
    <div class="item-card" onclick="window.location.hash = '#/item/${item.id}'">
      <div class="item-card-content">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="item-card-footer">
          <span class="price">${item.sizes ? 'يبدأ من ' : ''}${item.price} جنيه</span>
          <span class="view-details">عرض التفاصيل ←</span>
        </div>
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <div class="page-header">
      <a href="#/" class="back-link">🔙 العودة للرئيسية</a>
      <div class="header-desc">
        <span class="large-icon">${cat.icon}</span>
        <h1>${cat.name}</h1>
        <p>${cat.desc}</p>
      </div>
    </div>

    <section class="section">
      <div class="items-grid">
        ${itemsHTML.length > 0 ? itemsHTML : '<p class="no-items">لا توجد أصناف في هذه الفئة حالياً</p>'}
      </div>
    </section>
  `;
}

// Render Item Detail Page
function renderItemDetail(itemId) {
  const mainContent = document.getElementById('main-content');
  const item = menuData.items.find(i => i.id === itemId);
  if (!item) {
    window.location.hash = '#/';
    return;
  }

  const category = menuData.categories[item.category];

  // Random related items (same category)
  const related = menuData.items.filter(i => i.category === item.category && i.id !== item.id).slice(0, 3);
  const relatedHTML = related.map(rel => `
    <div class="item-card compact-card" onclick="window.location.hash = '#/item/${rel.id}'">
      <h3>${rel.name}</h3>
      <div class="item-card-footer">
        <span class="price">${rel.sizes ? 'يبدأ من ' : ''}${rel.price} جنيه</span>
        <span class="view-details">عرض التفاصيل ←</span>
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <div class="page-header">
      <a href="#/category/${item.category}" class="back-link">🔙 العودة إلى ${category.name}</a>
    </div>

    <div class="item-detail-container">
      <div class="item-detail-card">
        <div class="item-detail-header">
          <span class="category-tag">${category.icon} ${category.name}</span>
          <h1>${item.name}</h1>
        </div>
        
        <p class="item-detail-desc">${item.desc}</p>
        
        <div class="item-detail-meta">
          <div class="detail-price-box" style="border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
            <span class="label">السعر:</span>
            <span class="detail-price" id="item-detail-price">${item.price} جنيه مصري</span>
          </div>

          ${item.sizes ? `
          <div class="sizes-section" style="margin-bottom: 1.5rem;">
            <span class="label" style="display:block; margin-bottom: 0.5rem; font-weight: bold;">اختر الحجم:</span>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              ${item.sizes.map((size, idx) => `
                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; background: var(--bg-color); padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
                  <input type="radio" name="item-size" value="${size.id}" data-name="${size.name}" data-price="${size.price}" ${idx === 0 ? 'checked' : ''}>
                  ${size.name}
                </label>
              `).join('')}
            </div>
          </div>
          ` : ''}

          <!-- Quantity Selector -->
          <div class="quantity-selector-container">
            <span class="label">الكمية:</span>
            <div class="quantity-selector">
              <button class="qty-btn" id="qty-minus">-</button>
              <span class="qty-val" id="qty-value">1</span>
              <button class="qty-btn" id="qty-plus">+</button>
            </div>
          </div>

          <!-- Notes / Special Requests -->
          <div class="customization-section">
            <h3>ملاحظات إضافية (اختياري):</h3>
            <textarea id="item-notes" placeholder="مثال: بدون بصل، زيادة شطة، نوع خبز معين..." class="search-input" style="width: 100%; height: 80px; resize: none; padding: 0.75rem; font-family: inherit;"></textarea>
          </div>

          <!-- Add to Cart Button -->
          <button class="btn btn-primary btn-block btn-lg" id="add-to-cart-btn" style="width: 100%; display: flex; justify-content: center; align-items: center; gap: 0.5rem;">
            🛒 إضافة إلى السلة
          </button>
        </div>
      </div>
    </div>

    ${relatedHTML.length > 0 ? `
      <section class="section related-section">
        <h2 class="section-title">أصناف مشابهة قد تعجبك</h2>
        <div class="items-grid-related">
          ${relatedHTML}
        </div>
      </section>
    ` : ''}
  `;

  // Bind Events for item detail
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const qtyVal = document.getElementById('qty-value');
  const addBtn = document.getElementById('add-to-cart-btn');
  const itemNotes = document.getElementById('item-notes');

  if (qtyMinus && qtyPlus && qtyVal) {
    qtyMinus.addEventListener('click', () => {
      let v = parseInt(qtyVal.textContent) || 1;
      if (v > 1) qtyVal.textContent = v - 1;
    });
    qtyPlus.addEventListener('click', () => {
      let v = parseInt(qtyVal.textContent) || 1;
      qtyVal.textContent = v + 1;
    });
  }

  const sizeRadios = document.querySelectorAll('input[name="item-size"]');
  const priceDisplay = document.getElementById('item-detail-price');

  if (sizeRadios.length > 0) {
    sizeRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        if (e.target.checked) {
          priceDisplay.textContent = e.target.dataset.price + ' جنيه مصري';
        }
      });
    });
    // Set initial price to first size
    const checkedSize = document.querySelector('input[name="item-size"]:checked');
    if (checkedSize) {
      priceDisplay.textContent = checkedSize.dataset.price + ' جنيه مصري';
    }
  }

  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const quantity = parseInt(qtyVal.textContent) || 1;
      const notes = itemNotes ? itemNotes.value.trim() : '';

      let cartItem = { id: item.id, name: item.name, price: item.price, quantity: quantity, notes: notes };

      const checkedSize = document.querySelector('input[name="item-size"]:checked');
      if (checkedSize) {
        cartItem.id = `${item.id}-${checkedSize.value}`;
        cartItem.price = parseInt(checkedSize.dataset.price);
        cartItem.name = `${item.name} (${checkedSize.dataset.name})`;
      }

      addToCart(cartItem);
    });
  }
}

// Search system
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    const mainContent = document.getElementById('main-content');

    if (q === '') {
      // Restore home page or route if cleared
      handleRouting();
      return;
    }

    // Filter items
    const matches = menuData.items.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
    );

    const matchesHTML = matches.map(item => `
      <div class="item-card" onclick="window.location.hash = '#/item/${item.id}'">
        <div class="item-card-content">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="item-card-footer">
            <span class="price">${item.sizes ? 'يبدأ من ' : ''}${item.price} جنيه</span>
            <span class="view-details">عرض التفاصيل ←</span>
          </div>
        </div>
      </div>
    `).join('');

    mainContent.innerHTML = `
      <div class="page-header">
        <a href="#/" class="back-link">🔙 العودة للرئيسية</a>
        <h1>نتائج البحث عن: "${q}"</h1>
        <p>تم العثور على ${matches.length} صنف</p>
      </div>
      <section class="section">
        <div class="items-grid">
          ${matchesHTML.length > 0 ? matchesHTML : '<p class="no-items">لم يتم العثور على أي نتائج مطابقة لبحثك</p>'}
        </div>
      </section>
    `;
  });
}

// Setup Delivery Contact info (Static text, not clickable links)
function setupDeliveryInfo() {
  const deliveryWrapper = document.getElementById('delivery-links');
  if (!deliveryWrapper) return;

  deliveryWrapper.innerHTML = `
    <div class="delivery-nums">
      <h4>🛵 أرقام الدليفري:</h4>
      ${menuData.deliveryNumbers.map(n => `<span class="delivery-num-btn static-text">${n}</span>`).join('')}
    </div>
    <div class="complaints-num">
      <h4>✍️ للشكاوى والاقترحات:</h4>
      <span class="complaints-btn static-text">${menuData.complaintNumber}</span>
    </div>
  `;
}

// ===== Cart Operations =====
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (totalQty > 0) {
    badge.textContent = totalQty;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function addToCart(cartItem) {
  const existingIdx = cart.findIndex(c => c.id === cartItem.id && c.notes === cartItem.notes);
  if (existingIdx > -1) {
    cart[existingIdx].quantity += cartItem.quantity;
  } else {
    cart.push(cartItem);
  }
  saveCart();
  showToast(`تم إضافة ${cartItem.name} إلى السلة!`);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function toggleCartModal(open) {
  const modal = document.getElementById('cart-modal');
  if (!modal) return;
  if (open) {
    modal.classList.add('open');
    renderCartItems();
    showCartScreen();
  } else {
    modal.classList.remove('open');
  }
}

function showCartScreen() {
  const cs = document.getElementById('cart-screen');
  const co = document.getElementById('checkout-screen');
  if (cs && co) { cs.style.display = 'flex'; co.style.display = 'none'; }
}

function showCheckoutScreen() {
  const cs = document.getElementById('cart-screen');
  const co = document.getElementById('checkout-screen');
  if (cs && co) { cs.style.display = 'none'; co.style.display = 'flex'; }
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const totalPriceEl = document.getElementById('cart-total-price');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">🛒</div>
        <p>سلتك فارغة حالياً</p>
        <button class="btn btn-primary" onclick="toggleCartModal(false)">تصفح المنيو</button>
      </div>
    `;
    if (totalPriceEl) totalPriceEl.textContent = '0 جنيه';
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) checkoutBtn.disabled = false;

  let total = 0;
  let html = '';
  cart.forEach((ci, idx) => {
    const itemTotal = ci.price * ci.quantity;
    total += itemTotal;
    const notesHtml = ci.notes ? `<div class="cart-item-customs">📝 ${ci.notes}</div>` : '';
    html += `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${ci.name}</h4>
          ${notesHtml}
          <div class="cart-item-price">${ci.price} جنيه</div>
        </div>
        <div class="cart-item-actions">
          <button class="qty-btn" onclick="updateCartItemQty(${idx}, -1)">-</button>
          <span class="qty-val">${ci.quantity}</span>
          <button class="qty-btn" onclick="updateCartItemQty(${idx}, 1)">+</button>
        </div>
        <div class="cart-item-total">${itemTotal} جنيه</div>
      </div>
    `;
  });
  container.innerHTML = html;
  if (totalPriceEl) totalPriceEl.textContent = `${total} جنيه`;
}

function updateCartItemQty(index, change) {
  if (index < 0 || index >= cart.length) return;
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  saveCart();
  renderCartItems();
}

function submitOrder() {
  const nameInput = document.getElementById('checkout-name');
  const phoneInput = document.getElementById('checkout-phone');
  const addressInput = document.getElementById('checkout-address');
  const confirmBtn = document.getElementById('confirm-checkout-btn');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';

  if (!phone) {
    alert('من فضلك أدخل رقم التلفون للتواصل.');
    if (phoneInput) phoneInput.focus();
    return;
  }
  if (!address) {
    alert('من فضلك أدخل العنوان بالتفصيل لتوصيل الطلب.');
    if (addressInput) addressInput.focus();
    return;
  }

  // Check if configuration is set
  if (TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE' || TELEGRAM_CHAT_ID === 'YOUR_CHAT_ID_HERE') {
    alert('⚠️ لم يتم إعداد بيانات التلغرام بعد في الكود. يرجى كتابة الـ Bot Token والـ Chat ID الخاص بك في ملف app.js لإرسال الطلب.');
    return;
  }

  // Loading state
  const originalBtnText = confirmBtn ? confirmBtn.textContent : 'تأكيد وإرسال';
  if (confirmBtn) {
    confirmBtn.disabled = true;
    confirmBtn.textContent = 'جاري إرسال الطلب... ⏳';
  }

  let itemsText = '';
  let totalPrice = 0;
  cart.forEach(ci => {
    const itemTotal = ci.price * ci.quantity;
    totalPrice += itemTotal;
    itemsText += `• ${ci.quantity}x ${ci.name} (${itemTotal} جنيه)\n`;
    if (ci.notes) itemsText += `  - ملاحظة: ${ci.notes}\n`;
  });

  const namePart = name ? `👤 <b>الاسم:</b> ${name}\n` : '';
  const msg = `🔔 <b>طلب جديد من سوبيا تركي</b> 🍹🥥

<b>بيانات التوصيل:</b>
${namePart}📞 <b>رقم التلفون:</b> ${phone}
📍 <b>العنوان:</b> ${address}

<b>الطلبات:</b>
--------------------------------
${itemsText}--------------------------------
💵 <b>إجمالي الطلب:</b> ${totalPrice} جنيه

<b>شكراً لاختياركم سوبيا تركي!</b> ❤️`;

  // Send order to Telegram Channel/Chat
  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: msg,
      parse_mode: 'HTML'
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Success: clear cart and fields
      cart = [];
      saveCart();
      toggleCartModal(false);
      if (nameInput) nameInput.value = '';
      if (phoneInput) phoneInput.value = '';
      if (addressInput) addressInput.value = '';

      alert('🎉 تم إرسال طلبك بنجاح! سنتواصل معك قريباً لتأكيد التوصيل.');
    })
    .catch(error => {
      console.error('Error sending message:', error);
      alert('❌ حدث خطأ أثناء إرسال الطلب. يرجى التأكد من اتصال الإنترنت والمحاولة مرة أخرى.');
    })
    .finally(() => {
      if (confirmBtn) {
        confirmBtn.disabled = false;
        confirmBtn.textContent = originalBtnText;
      }
    });
}

// Expose to global for inline onclick handlers
window.updateCartItemQty = updateCartItemQty;
window.toggleCartModal = toggleCartModal;

function setupCartEvents() {
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartOverlay = document.getElementById('cart-overlay');
  const checkoutBtn = document.getElementById('checkout-btn');
  const backToCartBtn = document.getElementById('back-to-cart-btn');
  const confirmCheckoutBtn = document.getElementById('confirm-checkout-btn');

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', () => toggleCartModal(true));
  if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCartModal(false));
  if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCartModal(false));
  if (checkoutBtn) checkoutBtn.addEventListener('click', showCheckoutScreen);
  if (backToCartBtn) backToCartBtn.addEventListener('click', showCartScreen);
  if (confirmCheckoutBtn) confirmCheckoutBtn.addEventListener('click', submitOrder);

  updateCartBadge();
}

// Initialize application
window.addEventListener('DOMContentLoaded', () => {
  setupSearch();
  setupDeliveryInfo();
  setupCartEvents();
  handleRouting();

  // Listen to hash changes
  window.addEventListener('hashchange', handleRouting);
});
