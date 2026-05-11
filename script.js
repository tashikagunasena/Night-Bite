const MENU_ITEMS = [
  {
    id: 1,
    title: "Buffalo Wings",
    description:
      "Crispy chicken wings tossed in our signature buffalo sauce, served with celery sticks and blue cheese dip.",
    price: 14.0,
    category: "appetizers",
    image: "img/1.png",
  },
  {
    id: 2,
    title: "Spring Rolls",
    description:
      "Fresh vegetable spring rolls with rice noodles, served with peanut dipping sauce.",
    price: 10.0,
    category: "appetizers",
    image: "img/2.png",
  },
  {
    id: 3,
    title: "Caesar Salad",
    description:
      "Crisp romaine lettuce with parmesan shavings, croutons, and our house-made Caesar dressing.",
    price: 12.0,
    category: "appetizers",
    image: "img/3.png",
  },
  {
    id: 4,
    title: "Onion Rings",
    description:
      "Beer-battered onion rings, golden and crispy, served with spicy aioli.",
    price: 9.0,
    category: "appetizers",
    image: "img/4.png",
  },
  {
    id: 5,
    title: "Loaded Nachos",
    description:
      "Tortilla chips topped with melted cheese, jalapeños, sour cream, and guacamole.",
    price: 15.0,
    category: "appetizers",
    image: "img/5.png",
  },
  {
    id: 6,
    title: "Neon Burger",
    description:
      "Double patty with glowing cheese sauce, caramelized onions, and our secret jelly-bun.",
    price: 18.0,
    category: "mains",
    image: "img/6.png",
  },
  {
    id: 7,
    title: "Grilled Salmon",
    description:
      "Fresh Atlantic salmon with seasonal vegetables and lemon butter sauce.",
    price: 28.0,
    category: "mains",
    image: "img/7.png",
  },
  {
    id: 8,
    title: "Prime Ribeye Steak",
    description:
      "12oz ribeye steak cooked to perfection, served with mashed potatoes and gravy.",
    price: 42.0,
    category: "mains",
    image: "img/8.png",
  },
  {
    id: 9,
    title: "Pasta Carbonara",
    description:
      "Classic Italian pasta with crispy bacon, parmesan, and creamy egg sauce.",
    price: 22.0,
    category: "mains",
    image: "img/9.png",
  },
  {
    id: 10,
    title: "Spicy Miso Ramen",
    description:
      "Rich red broth with chashu pork, soft-boiled egg, seaweed, and green onions.",
    price: 18.0,
    category: "mains",
    image: "img/10.png",
  },
  {
    id: 11,
    title: "Midnight Pizza",
    description:
      "Wood-fired crust topped with pepperoni, basil, and glowing mozzarella.",
    price: 22.0,
    category: "mains",
    image: "img/11.png",
  },
  {
    id: 12,
    title: "Lobster Tail",
    description:
      "Butter-poached lobster tail with drawn butter and lemon wedge.",
    price: 48.0,
    category: "mains",
    image: "img/12.png",
  },
  {
    id: 13,
    title: "Truffle Fries",
    description: "Hand-cut fries with truffle oil, parmesan, and fresh herbs.",
    price: 8.0,
    category: "sides",
    image:
      "https://image.qwenlm.ai/public_source/fc2d3e96-18cd-47c3-815a-27af53417165/1b39cc76c-9f65-4c7a-a0f7-0a983acd8789.png",
  },
  {
    id: 14,
    title: "French Onion Soup",
    description:
      "Classic soup served in a bread bowl with melted gruyere cheese.",
    price: 11.0,
    category: "sides",
    image:
      "https://image.qwenlm.ai/public_source/fc2d3e96-18cd-47c3-815a-27af53417165/1355dae68-575a-4d1f-ad8b-b689bae9365d.png",
  },
  {
    id: 15,
    title: "Garlic Bread",
    description: "Toasted baguette with garlic butter and herbs.",
    price: 6.0,
    category: "sides",
    image: "img/13.png",
  },
  {
    id: 16,
    title: "Mac & Cheese",
    description:
      "Creamy macaroni with three cheese blend and breadcrumb topping.",
    price: 9.0,
    category: "sides",
    image:
      "https://image.qwenlm.ai/public_source/fc2d3e96-18cd-47c3-815a-27af53417165/1cd1f473c-2bde-4ea8-afc8-c9ee9cc6ea91.png",
  },
  {
    id: 17,
    title: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with molten center, served with vanilla ice cream.",
    price: 12.0,
    category: "desserts",
    image:
      "https://image.qwenlm.ai/public_source/fc2d3e96-18cd-47c3-815a-27af53417165/142f557d3-347f-47e5-ba26-41aecdfe7358.png",
  },
  {
    id: 18,
    title: "Cosmic Jelly",
    description:
      "Wobbly, translucent jelly infused with berry flavors and swirling galaxy colors.",
    price: 9.0,
    category: "desserts",
    image:
      "https://image.qwenlm.ai/public_source/fc2d3e96-18cd-47c3-815a-27af53417165/1937ead31-0a37-4616-80b9-b12b31bba3a3.png",
  },
  {
    id: 19,
    title: "Strawberry Cheesecake",
    description: "New York style cheesecake with fresh strawberry topping.",
    price: 11.0,
    category: "desserts",
    image:
      "https://image.qwenlm.ai/public_source/fc2d3e96-18cd-47c3-815a-27af53417165/1c78dbcf9-02e4-44d9-9724-a9225f5a82ba.png",
  },
  {
    id: 20,
    title: "Tiramisu",
    description:
      "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.",
    price: 10.0,
    category: "desserts",
    image:
      "https://image.qwenlm.ai/public_source/fc2d3e96-18cd-47c3-815a-27af53417165/1426a8f60-affd-413c-a735-6201dce1fba6.png",
  },
  {
    id: 21,
    title: "Fruit Smoothie Bowl",
    description: "Acai blend topped with fresh fruits, granola, and honey.",
    price: 13.0,
    category: "desserts",
    image:
      "https://image.qwenlm.ai/public_source/fc2d3e96-18cd-47c3-815a-27af53417165/1846d893f-f5f9-4d29-9844-8db304535647.png",
  },
  {
    id: 22,
    title: "Galaxy Cocktail",
    description:
      "Sparkling mix of blue curacao, gin, and edible glitter over ice.",
    price: 14.5,
    category: "drinks",
    image:
      "https://image.qwenlm.ai/public_source/fc2d3e96-18cd-47c3-815a-27af53417165/1e2255279-3352-4439-bd95-b9070db657e3.png",
  },
  {
    id: 23,
    title: "Blue Lagoon",
    description:
      "Refreshing blue cocktail with vodka, blue curacao, and lemon.",
    price: 13.0,
    category: "drinks",
    image: "img/b.png",
  },
  {
    id: 24,
    title: "Classic Mojito",
    description: "White rum, fresh mint, lime juice, and soda water.",
    price: 12.0,
    category: "drinks",
    image:
      "https://image.qwenlm.ai/public_source/fc2d3e96-18cd-47c3-815a-27af53417165/1334ade4b-052b-4575-85ec-c0fbc91d9e93.png",
  },
  {
    id: 25,
    title: "Iced Coffee",
    description: "Cold brew coffee with whipped cream and chocolate dusting.",
    price: 6.0,
    category: "drinks",
    image:
      "https://image.qwenlm.ai/public_source/fc2d3e96-18cd-47c3-815a-27af53417165/1266b7176-c162-42e7-afb1-6d90a2096476.png",
  },
  {
    id: 26,
    title: "Neon Lemonade",
    description: "House-made lemonade with a glow-in-the-dark twist.",
    price: 7.0,
    category: "drinks",
    image:
      "https://image.qwenlm.ai/public_source/fc2d3e96-18cd-47c3-815a-27af53417165/14c578236-5b2b-4ea8-b81c-67c82f1a28d7.png",
  },
  {
    id: 27,
    title: "Mango Lassi",
    description: "Traditional Indian yogurt drink with fresh mango.",
    price: 8.0,
    category: "drinks",
    image:
      "https://image.qwenlm.ai/public_source/fc2d3e96-18cd-47c3-815a-27af53417165/1846d893f-f5f9-4d29-9844-8db304535647.png",
  },
];

const PLACEHOLDER_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23161625' width='400' height='300'/%3E%3Ctext fill='%23a0a0b0' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ENo Image%3C/text%3E%3C/svg%3E";

let cart = [];
let currentSpotlightItem = null;
let currentFilter = "all";
let scrollTimeout;

const elements = {
  menuGrid: document.getElementById("menu-grid"),
  cartSidebar: document.getElementById("cart-sidebar"),
  cartOverlay: document.getElementById("cart-overlay"),
  cartItems: document.getElementById("cart-items"),
  cartCount: document.getElementById("cart-count"),
  cartSubtotal: document.getElementById("cart-subtotal"),
  cartTax: document.getElementById("cart-tax"),
  cartTotal: document.getElementById("cart-total"),
  spotlightImg: document.getElementById("spotlight-img"),
  spotlightTitle: document.getElementById("spotlight-title"),
  spotlightDesc: document.getElementById("spotlight-desc"),
  spotlightOldPrice: document.getElementById("spotlight-old-price"),
  spotlightNewPrice: document.getElementById("spotlight-new-price"),
  spotlightAddBtn: document.getElementById("spotlight-add-btn"),
  toast: document.getElementById("toast"),
  toastTitle: document.getElementById("toast-title"),
  toastMsg: document.getElementById("toast-msg"),
  modalOverlay: document.getElementById("modal-overlay"),
  modalTitle: document.getElementById("modal-title"),
  modalMessage: document.getElementById("modal-message"),
  filterBtns: document.querySelectorAll(".filter-btn"),
  header: document.getElementById("header"),
  mobileMenuBtn: document.getElementById("mobileMenuBtn"),
  mainNav: document.getElementById("mainNav"),
  navLinks: document.querySelectorAll(".nav-link"),
};

let toastTimer = null;

function renderMenu(filter = "all") {
  if (!elements.menuGrid) return;
  currentFilter = filter;
  elements.menuGrid.innerHTML = "";

  const filteredItems =
    filter === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === filter);

  if (filteredItems.length === 0) {
    elements.menuGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px; color: var(--color-text-muted);">
                <p style="font-size: 1.5rem;">🍽️</p>
                <p>No items found in this category.</p>
            </div>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  filteredItems.forEach((item, index) => {
    fragment.appendChild(createMenuItemCard(item, index));
  });
  elements.menuGrid.appendChild(fragment);
}

function createMenuItemCard(item, index) {
  const card = document.createElement("div");
  card.className = "menu-item";
  card.style.animation = `slideUp 0.5s ease-out ${index * 0.05}s both`;
  card.style.animationFillMode = "both";

  card.innerHTML = `
        <div class="menu-img">
            <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='${PLACEHOLDER_IMG}'">
            <span class="menu-category">${item.category}</span>
        </div>
        <div class="menu-details">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="menu-footer">
                <span class="price">$${item.price.toFixed(2)}</span>
                <button class="add-btn" data-title="${item.title}" data-price="${item.price}" data-image="${item.image}" aria-label="Add ${item.title} to cart" type="button">+</button>
            </div>
        </div>`;

  return card;
}

function handleMenuGridClick(event) {
  const addBtn = event.target.closest(".add-btn");
  if (!addBtn) return;

  const title = addBtn.getAttribute("data-title");
  const price = parseFloat(addBtn.getAttribute("data-price"));
  const image = addBtn.getAttribute("data-image");

  if (title && !isNaN(price)) {
    addToCart(title, price, image, false);
  }
}

function filterMenu(category) {
  elements.filterBtns.forEach((btn) => {
    const isActive = btn.getAttribute("data-filter") === category;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive);
  });
  renderMenu(category);
  scrollToSection("menu");
}

function addToCart(title, price, image, isSpotlight = false) {
  const existingItem = cart.find(
    (item) => item.title === title && item.isSpotlight === isSpotlight,
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: Date.now() + Math.random(),
      title: title,
      price: price,
      image: image,
      quantity: 1,
      isSpotlight: isSpotlight,
    });
  }

  updateCartUI();
  showToast("Added to Cart!", `${title} has been added to your order.`);
}

function addToCartFromSpotlight() {
  if (currentSpotlightItem) {
    const discountedPrice = currentSpotlightItem.price / 2;
    addToCart(
      currentSpotlightItem.title,
      discountedPrice,
      currentSpotlightItem.image,
      true,
    );
  }
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  elements.cartCount.textContent = totalItems;

  if (totalItems > 0) {
    elements.cartCount.style.animation = "bounce 0.3s ease";
    setTimeout(() => {
      elements.cartCount.style.animation = "";
    }, 300);
  }

  renderCartItems();
  updateCartTotals();
}

function renderCartItems() {
  if (cart.length === 0) {
    elements.cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add some delicious items from our menu!</p>
            </div>`;
    return;
  }

  elements.cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item" role="listitem">
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='${PLACEHOLDER_IMG}'">
            </div>
            <div class="cart-item-details">
                <h4>${item.title}</h4>
                <p>$${item.price.toFixed(2)} ${item.isSpotlight ? '<span style="color: var(--color-secondary); font-size: 0.8rem;">(50% OFF)</span>' : ""}</p>
                <div class="cart-item-actions">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)" aria-label="Decrease quantity" type="button">−</button>
                    <span class="qty-display">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)" aria-label="Increase quantity" type="button">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})" aria-label="Remove item" type="button">🗑️</button>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

function updateCartTotals() {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  elements.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  elements.cartTax.textContent = `$${tax.toFixed(2)}`;
  elements.cartTotal.textContent = `$${total.toFixed(2)}`;
}

function updateQuantity(id, change) {
  const item = cart.find((item) => item.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      updateCartUI();
    }
  }
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCartUI();
  showToast("Removed", "Item removed from cart");
}

function clearCart() {
  if (cart.length === 0) {
    showToast("Cart Empty", "Your cart is already empty");
    return;
  }
  cart = [];
  updateCartUI();
  showToast("Cart Cleared", "All items have been removed");
}

function toggleCart() {
  const isActive = !elements.cartSidebar.classList.contains("active");
  elements.cartSidebar.classList.toggle("active", isActive);
  elements.cartOverlay.classList.toggle("active", isActive);
  elements.cartSidebar.setAttribute("aria-hidden", !isActive);
  document.body.style.overflow = isActive ? "hidden" : "";
}

function proceedToCheckout() {
  if (cart.length === 0) {
    showToast("Cart Empty", "Add items to your cart first");
    return;
  }
  const total =
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0) * 1.1;
  showModal(
    "Order Placed!",
    `Thank you for your order! Total: $${total.toFixed(2)}. We'll start preparing your food right away.`,
  );
  cart = [];
  updateCartUI();
  toggleCart();
}

function setDailySpecial() {
  const randomIndex = Math.floor(Math.random() * MENU_ITEMS.length);
  currentSpotlightItem = MENU_ITEMS[randomIndex];

  const originalPrice = currentSpotlightItem.price;
  const discountedPrice = originalPrice / 2;

  elements.spotlightImg.src = currentSpotlightItem.image;
  elements.spotlightImg.onerror = function () {
    this.src = PLACEHOLDER_IMG;
  };
  elements.spotlightTitle.textContent = currentSpotlightItem.title;
  elements.spotlightDesc.textContent = currentSpotlightItem.description;
  elements.spotlightOldPrice.textContent = `$${originalPrice.toFixed(2)}`;
  elements.spotlightNewPrice.textContent = `$${discountedPrice.toFixed(2)}`;
}

function showToast(title, message) {
  if (toastTimer) clearTimeout(toastTimer);

  elements.toastTitle.textContent = title;
  elements.toastMsg.textContent = message;
  elements.toast.classList.add("active");

  toastTimer = setTimeout(() => {
    elements.toast.classList.remove("active");
  }, 3000);
}

function showModal(title, message) {
  elements.modalTitle.textContent = title;
  elements.modalMessage.textContent = message;
  elements.modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
  document.getElementById("modal-overlay").querySelector(".btn").focus();
}

function closeModal() {
  elements.modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

function handleReservation(event) {
  event.preventDefault();
  const name = document.getElementById("guest-name").value.trim();
  showModal(
    "Reservation Confirmed!",
    `Thanks, ${name || "guest"}! Your table has been reserved. We've sent a confirmation email with all the details. See you soon!`,
  );
  event.target.reset();
}

function handleContact(event) {
  event.preventDefault();
  const name = document.getElementById("contact-name").value.trim();
  showModal(
    "Message Sent!",
    `Thank you for reaching out${name ? ", " + name : ""}! We'll get back to you within 24 hours.`,
  );
  event.target.reset();
}

function handleNewsletter(event) {
  event.preventDefault();
  const emailInput = event.target.querySelector('input[type="email"]');
  const email = emailInput.value.trim();
  if (email) {
    showToast("Subscribed!", "You're now on the list for exclusive deals.");
    emailInput.value = "";
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = elements.header.offsetHeight;
    const targetPosition =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      10;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }
}

function toggleMobileMenu() {
  const isActive = elements.mainNav.classList.toggle("active");
  elements.mobileMenuBtn.classList.toggle("active", isActive);
  elements.mobileMenuBtn.setAttribute("aria-expanded", isActive);
  elements.mobileMenuBtn.textContent = isActive ? "✕" : "☰";
  document.body.style.overflow = isActive ? "hidden" : "";
}

function closeMobileMenu() {
  elements.mainNav.classList.remove("active");
  elements.mobileMenuBtn.classList.remove("active");
  elements.mobileMenuBtn.setAttribute("aria-expanded", "false");
  elements.mobileMenuBtn.textContent = "☰";
  document.body.style.overflow = "";
}

function initEventListeners() {
  elements.filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      filterMenu(filter);
    });
  });

  elements.menuGrid.addEventListener("click", handleMenuGridClick);

  elements.spotlightAddBtn.addEventListener("click", addToCartFromSpotlight);

  elements.modalOverlay.addEventListener("click", (event) => {
    if (event.target === elements.modalOverlay) {
      closeModal();
    }
  });

  elements.mobileMenuBtn.addEventListener("click", toggleMobileMenu);

  elements.navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (elements.modalOverlay.classList.contains("active")) {
        closeModal();
      }
      if (elements.cartSidebar.classList.contains("active")) {
        toggleCart();
      }
      if (elements.mainNav.classList.contains("active")) {
        closeMobileMenu();
      }
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(() => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
          elements.header.style.background = "rgba(9, 9, 16, 0.98)";
          elements.header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.3)";
        } else {
          elements.header.style.background = "rgba(9, 9, 16, 0.95)";
          elements.header.style.boxShadow = "none";
        }
      });
    },
    { passive: true },
  );

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      const href = this.getAttribute("href");
      if (href && href !== "#" && href.length > 1) {
        event.preventDefault();
        scrollToSection(href.substring(1));
      }
    });
  });
}

function initDateInput() {
  const dateInput = document.getElementById("reservation-date");
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    dateInput.setAttribute("min", `${yyyy}-${mm}-${dd}`);
  }
}

function init() {
  renderMenu();
  setDailySpecial();
  updateCartUI();
  initEventListeners();
  initDateInput();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
