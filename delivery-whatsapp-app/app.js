/* ==========================================================================
   GOURMET HUB - APPLICATION INTERACTIVES & DATA LAYER
   ========================================================================== */

/// --- Initial Product Database (Pasta Artesanal) ---
let PRODUCTS = [
    // === SORRENTINOS ===
    {
        id: "sorrentino-jamon-queso",
        name: "Sorrentino Jamón y Queso",
        category: "sorrentinos",
        price: 6000,
        description: "Grandes sorrentinos artesanales rellenos de jamón cocido premium y una generosa mezcla de mozzarella y ricota. Masa tierna elaborada a mano, perfectos con manteca y salvia.",
        image: "assets/images/sorrentino-jamon-queso.png",
        badge: "Clásico"
    },
    {
        id: "sorrentino-nuez-queso",
        name: "Sorrentino Nuez y Queso",
        category: "sorrentinos",
        price: 8000,
        description: "Sorrentinos de autor rellenos de queso azul artesanal patagónico con nueces trituradas y un toque de miel. Sabor intenso y equilibrado, ideal con crema de nuez.",
        image: "assets/images/sorrentino-nuez-queso.png",
        badge: "Especial"
    },
    {
        id: "sorrentino-carne-al-vino",
        name: "Sorrentino Carne al Vino",
        category: "sorrentinos",
        price: 7500,
        description: "Sorrentinos artesanales rellenos de tierna carne vacuna braseada lentamente al malbec con cebollas caramelizadas y un toque de hierbas aromáticas.",
        image: "assets/images/sorrentino-carne-vino.png",
        badge: "Especial"
    },
    {
        id: "sorrentinos-carne-asada",
        name: "Sorrentinos Carne Asada",
        category: "sorrentinos",
        price: 8000,
        description: "Sorrentinos rellenos de carne asada con un toque ahumado.",
        image: "assets/images/sorrentinos-carne-asada.png",
        badge: "Nuevo"
    },
    // === RAVIOLES ===
    {
        id: "ravioles-verdura",
        name: "Ravioles de Verdura",
        category: "ravioles",
        price: 4000,
        description: "Ravioles frescos rellenos de acelga, espinaca, ricota y nuez moscada. Una opción liviana y nutritiva, deliciosos con tuco casero o manteca y salvia.",
        image: "assets/images/raviol-verdura.png",
        badge: "Vegetariano"
    },
    {
        id: "ravioles-ricota-pollo",
        name: "Ravioles de Ricota y Pollo",
        category: "ravioles",
        price: 5000,
        description: "Ravioles rellenos de suave ricota fresca con pollo desmenuzado al tomillo. Masa fina y sedosa que combina perfecto con salsa rosa o crema de hongos.",
        image: "assets/images/raviol-ricota-pollo.png",
        badge: "Más Pedido"
    },
    // === FIDEOS ===
    {
        id: "fideos-huevo",
        name: "Fideos al Huevo",
        category: "fideos",
        price: 4500,
        description: "Fideos frescos elaborados con harina 000 y huevos camperos. Textura sedosa y sabor auténtico, ideales para acompañar con cualquiera de nuestras salsas caseras.",
        image: "assets/images/fideos-huevo.png",
        badge: "Tradicional"
    },
    {
        id: "fideos-remolacha",
        name: "Fideos de Morrón",
        category: "fideos",
        price: 6500,
        description: "Fideo realizado con morrón asado. Perfectos con crema y nuez.",
        image: "assets/images/fideo-morron.png",
        badge: "Natural"
    },
    {
        id: "fideos-espinaca",
        name: "Fideos de Espinacas",
        category: "fideos",
        price: 5000,
        description: "Fideos frescos de un vibrante color verde elaborados con espinaca natural. Ligeramente herbales, combinan a la perfección con salsa boloñesa o salsa rosa.",
        image: "assets/images/fideo-verde.png",
        badge: "Natural"
    },
    // === CANELONES ===
    {
        id: "canelones-verdura",
        name: "Canelones de Verdura",
        category: "canelones",
        price: 8000,
        description: "Generosos canelones rellenos de espinaca, zapallito, ricota y queso parmesano, gratinados con salsa blanca casera y mózarella fundida. Se entregan listos para hornear.",
        image: "assets/images/canelones.png",
        badge: "Gratinados"
    },
    // === SALSAS ===
    {
        id: "salsa-bolognesa",
        name: "Salsa Boloñesa",
        category: "salsas",
        price: 3500,
        description: "Clásica salsa boloñesa cocida a fuego lento por más de 3 horas con carne picada premium, tomate San Marzano, vino tinto y hierbas frescas. Pote 500g.",
        image: "assets/images/salsa-bolognesa.png",
        badge: "500g"
    },
    {
        id: "salsa-rosa",
        name: "Salsa Rosa",
        category: "salsas",
        price: 4500,
        description: "Delicada salsa rosa elaborada con crema de leche fresca, tomate natural, un toque de cebolla y especias selectas. Cremosa y equilibrada. Pote 500g.",
        image: "assets/images/salsa-rosa.png",
        badge: "500g"
    },
    {
        id: "salsa-champinones",
        name: "Salsa con Champiñones",
        category: "salsas",
        price: 5000,
        description: "Exquisita salsa de champiñones frescos salteados con manteca, ajo, vino blanco y crema de leche. Aroma intenso e irresistible, ideal para fideos y ravioles. Pote 500g.",
        image: "assets/images/salsa-champiñones.png",
        badge: "500g"
    }
];

// Catalog version identifier to detect and replace old fast-food catalog
const CATALOG_VERSION = "pasta-v8";VERSION = "pasta-v5";

// --- Global Application States ---
let cart = [];
let orders = [];
let storeSettings = {
    storeName: "HARINA Y SALSA",
    whatsappNumber: "5493537443630",
    deliveryFee: 3000
};
let adminPassword = "40438882";
let isAdminAuthenticated = false;
let currentCategory = "all";
let searchQuery = "";

// --- Dummy Names & Cities for Mock Order Simulation ---
const MOCK_NAMES = ["Julián Alarcón", "Camila Gómez", "Mateo Rodríguez", "Valentina Silva", "Santiago Díaz", "Sofía Fernández", "Tomás Martínez", "Martina López"];
const MOCK_ADDRESSES = ["Av. del Libertador 2200, Belgrano", "Callao 1450, Recoleta", "Palermo Soho, Honduras 4800", "Av. Santa Fe 3400, Alto Palermo", "Juramento 1900, Belgrano R", "San Telmo, Defensa 800"];
const MOCK_NOTES = ["Tocar timbre B, no funciona el principal", "Entregar rápido por favor", "Sin cebolla en la hamburguesa", "Llamar al llegar", "", ""];

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    loadCatalogFromStorage();
    loadAdminPasswordFromStorage();
    loadSettingsFromStorage();
    loadOrdersFromStorage();
    renderProducts();
    updateCartUI();
    initializeForms();

    // Set default dates on date/time picker inputs
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById("checkout-date");
    if (dateInput) {
        dateInput.value = today;
        dateInput.min = today;
    }
});

// --- Settings and Storage Management ---
function loadCatalogFromStorage() {
    const savedCatalog = localStorage.getItem("gourmet_catalog");
    const savedVersion = localStorage.getItem("gourmet_catalog_version");

    // Force reset catalog if outdated version (old fast-food menu)
    if (savedCatalog && savedVersion === CATALOG_VERSION) {
        try {
            PRODUCTS = JSON.parse(savedCatalog);
        } catch (e) {
            console.error("Error parsing catalog", e);
            saveCatalogToStorage();
        }
    } else {
        // Newer catalog version detected - override with pasta menu
        saveCatalogToStorage();
    }
}

function saveCatalogToStorage() {
    localStorage.setItem("gourmet_catalog", JSON.stringify(PRODUCTS));
    localStorage.setItem("gourmet_catalog_version", CATALOG_VERSION);
}

function loadAdminPasswordFromStorage() {
    const savedPass = localStorage.getItem("gourmet_admin_password");
    if (savedPass) {
        adminPassword = savedPass;
    } else {
        localStorage.setItem("gourmet_admin_password", adminPassword);
    }
}

function loadSettingsFromStorage() {
    const savedSettings = localStorage.getItem("gourmet_settings");
    if (savedSettings) {
        try {
            storeSettings = JSON.parse(savedSettings);
        } catch (e) {
            console.error("Error parsing settings", e);
        }
    }

    // Populate Settings UI
    document.getElementById("setting-store-name").value = storeSettings.storeName;
    document.getElementById("setting-whatsapp-number").value = storeSettings.whatsappNumber;
    document.getElementById("setting-delivery-fee").value = storeSettings.deliveryFee;

    // Update logo name dynamically based on settings
    const logoAccent = document.querySelector(".logo-accent");
    const logoText = document.querySelector(".logo-text");
    if (logoText && logoAccent) {
        const parts = storeSettings.storeName.split(" ");
        if (parts.length > 1) {
            const first = parts.slice(0, -1).join(" ");
            const last = parts[parts.length - 1];
            logoText.innerHTML = `${first} <span class="logo-accent">${last}</span>`;
        } else {
            logoText.innerHTML = `${storeSettings.storeName}`;
        }
    }
}

function loadOrdersFromStorage() {
    const savedOrders = localStorage.getItem("gourmet_orders");
    if (savedOrders) {
        try {
            orders = JSON.parse(savedOrders);
        } catch (e) {
            console.error("Error parsing orders", e);
        }
    } else {
        // Populate with some default dummy orders to make the admin view look interesting on first run
        orders = generateMockOrdersHistory();
        saveOrdersToStorage();
    }
}

function saveOrdersToStorage() {
    localStorage.setItem("gourmet_orders", JSON.stringify(orders));
}

function saveStoreSettings(event) {
    event.preventDefault();
    storeSettings.storeName = document.getElementById("setting-store-name").value;
    storeSettings.whatsappNumber = document.getElementById("setting-whatsapp-number").value.replace(/\D/g, ""); // strip symbols
    storeSettings.deliveryFee = parseFloat(document.getElementById("setting-delivery-fee").value);

    localStorage.setItem("gourmet_settings", JSON.stringify(storeSettings));
    loadSettingsFromStorage();
    updateCartUI();
    showToast("Ajustes del comercio guardados con éxito.");
}

function clearAllData() {
    if (confirm("¿Estás seguro de que deseas vaciar la base de datos, catálogo y restaurar la configuración inicial?")) {
        localStorage.removeItem("gourmet_orders");
        localStorage.removeItem("gourmet_settings");
        localStorage.removeItem("gourmet_catalog");
        localStorage.removeItem("gourmet_admin_password");

        orders = [];
        cart = [];
        storeSettings = {
            storeName: "HARINA Y SALSA",
            whatsappNumber: "5493537443630",
            deliveryFee: 3000
        };
        adminPassword = "40438882";
        isAdminAuthenticated = false;

        // Restore initial default products in JS memory - PASTA CATALOG
        PRODUCTS = [
            { id: "sorrentino-jamon-queso", name: "Sorrentino Jamón y Queso", category: "sorrentinos", price: 6000, description: "Grandes sorrentinos artesanales rellenos de jamón cocido premium y una generosa mezcla de mozzarella y ricota. Masa tierna elaborada a mano, perfectos con manteca y salvia.", image: "assets/images/sorrentino-jamon-queso.png", badge: "Clásico" },
            { id: "sorrentino-nuez-queso", name: "Sorrentino Nuez y Queso", category: "sorrentinos", price: 8000, description: "Sorrentinos de autor rellenos de queso azul artesanal patagónico con nueces trituradas y un toque de miel. Sabor intenso y equilibrado, ideal con crema de nuez.", image: "assets/images/sorrentino-nuez-queso.png", badge: "Especial" },
            { id: "sorrentino-carne-al-vino", name: "Sorrentino Carne al Vino", category: "sorrentinos", price: 7500, description: "Sorrentinos artesanales rellenos de tierna carne vacuna braseada lentamente al malbec con cebollas caramelizadas y un toque de hierbas aromáticas.", image: "assets/images/sorrentino-carne-vino.png", badge: "Especial" },
            { id: "sorrentinos-carne-asada", name: "Sorrentinos Carne Asada", category: "sorrentinos", price: 8000, description: "Sorrentinos rellenos de carne asada con un toque ahumado.", image: "assets/images/sorrentinos-carne-asada.png", badge: "Nuevo" },
            { id: "ravioles-verdura", name: "Ravioles de Verdura", category: "ravioles", price: 4000, description: "Ravioles frescos rellenos de acelga, espinaca, ricota y nuez moscada. Una opción liviana y nutritiva, deliciosos con tuco casero o manteca y salvia.", image: "assets/images/raviol-verdura.png", badge: "Vegetariano" },
            { id: "ravioles-ricota-pollo", name: "Ravioles de Ricota y Pollo", category: "ravioles", price: 5000, description: "Ravioles rellenos de suave ricota fresca con pollo desmenuzado al tomillo. Masa fina y sedosa que combina perfecto con salsa rosa o crema de hongos.", image: "assets/images/raviol-ricota-pollo.png", badge: "Más Pedido" },
            { id: "fideos-huevo", name: "Fideos al Huevo", category: "fideos", price: 4500, description: "Fideos frescos elaborados con harina 000 y huevos camperos. Textura sedosa y sabor auténtico, ideales para acompañar con cualquiera de nuestras salsas caseras.", image: "assets/images/fideos-huevo.png", badge: "Tradicional" },
            { id: "fideos-remolacha", name: "Fideos de Morrón", category: "fideos", price: 6500, description: "Fideo realizado con morrón asado. Perfectos con crema y nuez.", image: "assets/images/fideo-morron.png", badge: "Natural" },
            { id: "fideos-espinaca", name: "Fideos de Espinacas", category: "fideos", price: 5000, description: "Fideos frescos de un vibrante color verde elaborados con espinaca natural. Ligeramente herbales, combinan a la perfección con salsa boloñesa o salsa rosa.", image: "assets/images/fideo-verde.png", badge: "Natural" },
            { id: "canelones-verdura", name: "Canelones de Verdura", category: "canelones", price: 8000, description: "Generosos canelones rellenos de espinaca, zapallito, ricota y queso parmesano, gratinados con salsa blanca casera y mózarella fundida. Se entregan listos para hornear.", image: "assets/images/canelones.png", badge: "Gratinados" },
            { id: "salsa-bolognesa", name: "Salsa Boloñesa", category: "salsas", price: 3500, description: "Clásica salsa boloñesa cocida a fuego lento por más de 3 horas con carne picada premium, tomate San Marzano, vino tinto y hierbas frescas. Pote 500g.", image: "assets/images/salsa-bolognesa.png", badge: "500g" },
            { id: "salsa-rosa", name: "Salsa Rosa", category: "salsas", price: 4500, description: "Delicada salsa rosa elaborada con crema de leche fresca, tomate natural, un toque de cebolla y especias selectas. Cremosa y equilibrada. Pote 500g.", image: "assets/images/salsa-rosa.png", badge: "500g" },
            { id: "salsa-champinones", name: "Salsa con Champiñones", category: "salsas", price: 5000, description: "Exquisita salsa de champiñones frescos salteados con manteca, ajo, vino blanco y crema de leche. Aroma intenso e irresistible, ideal para fideos y ravioles. Pote 500g.", image: "assets/images/salsa-champiñones.png", badge: "500g" }
        ];

        saveCatalogToStorage();
        loadSettingsFromStorage();
        loadOrdersFromStorage();
        updateCartUI();
        renderProducts();

        if (document.getElementById("admin-view").classList.contains("active")) {
            renderAdminDashboard();
            initCMSCatalog();
        }
        showToast("Base de datos limpia y restablecida.");
    }
}

// --- Navigation & View Switching ---
function switchView(view) {
    const clientView = document.getElementById("client-view");
    const adminView = document.getElementById("admin-view");
    const btnClient = document.getElementById("btn-client-view");
    const btnAdmin = document.getElementById("btn-admin-view");

    if (view === 'client') {
        adminView.classList.remove("active");
        setTimeout(() => {
            adminView.style.display = "none";
            clientView.style.display = "block";
            setTimeout(() => clientView.classList.add("active"), 50);
        }, 300);

        btnClient.classList.add("active");
        btnAdmin.classList.remove("active");

        // Show floating cart trigger button if items exist in client view
        toggleFloatingCartBtnVisibility();
    } else {
        clientView.classList.remove("active");
        setTimeout(() => {
            clientView.style.display = "none";
            adminView.style.display = "block";
            setTimeout(() => {
                adminView.classList.add("active");
                renderAdminDashboard();
                initCMSCatalog(); // Load Dynamic Product select in CMS
            }, 50);
        }, 300);

        btnAdmin.classList.add("active");
        btnClient.classList.remove("active");

        // Hide notification badge once clicked
        const badge = document.getElementById("admin-notification-badge");
        badge.textContent = "0";
        badge.classList.add("hide");

        // Hide floating cart in admin view
        document.getElementById("floating-cart-btn").classList.remove("show");
    }
}

// --- Client View Catalog Rendering ---
function renderProducts() {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    grid.innerHTML = "";

    const filtered = PRODUCTS.filter(prod => {
        const matchesCategory = (currentCategory === "all" || prod.category === currentCategory);
        const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prod.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-search-state col-span-2 text-center" style="grid-column: 1 / -1; padding: 60px 20px;">
                <i class="fa-solid fa-pizza-slice" style="font-size: 3rem; color: var(--border-color); margin-bottom: 16px;"></i>
                <h4 style="font-weight: 700; font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 4px;">No encontramos coincidencias</h4>
                <p style="color: var(--text-muted); font-size: 0.88rem;">Intenta buscando con otras palabras clave o cambia de pestaña.</p>
            </div>
        `;
        return;
    }

    filtered.forEach((prod, index) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.style.animation = `bounceIn 0.5s ease forwards ${index * 0.08}s`;

        card.innerHTML = `
            <div class="product-img-wrapper">
                <img class="product-img" src="${prod.image}" alt="${prod.name}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop'">
                ${prod.badge ? `<span class="product-badge">${prod.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${prod.name}</h3>
                <p class="product-desc">${prod.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${prod.price.toLocaleString('es-AR')}</span>
                    <button class="btn btn-primary btn-icon" onclick="addToCart('${prod.id}')" title="Agregar al carrito">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(category, tabElement) {
    currentCategory = category;

    // Manage active tab state
    const tabs = document.querySelectorAll(".category-tab");
    tabs.forEach(tab => tab.classList.remove("active"));
    tabElement.classList.add("active");

    renderProducts();
}

function handleSearch(val) {
    searchQuery = val;
    const clearBtn = document.getElementById("clear-search-btn");

    if (val.trim().length > 0) {
        clearBtn.classList.add("show");
    } else {
        clearBtn.classList.remove("show");
    }

    renderProducts();
}

function clearSearch() {
    const searchInput = document.getElementById("search-input");
    searchInput.value = "";
    searchQuery = "";
    document.getElementById("clear-search-btn").classList.remove("show");
    renderProducts();
}

// --- Cart Actions & State Management ---
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.product.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }

    updateCartUI();
    animateCartBadge();
    showToast(`"${product.name}" agregado al pedido.`);
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.product.id === productId);
    if (!item) return;

    item.quantity += delta;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCartUI();
    showToast("Plato eliminado del pedido.");
}

function updateCartUI() {
    const cartContainer = document.getElementById("cart-items-container");
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart-state">
                <i class="fa-solid fa-cookie-bite"></i>
                <p>Tu carrito está vacío.</p>
                <span>¡Agrega algunos platos exquisitos de nuestra carta!</span>
            </div>
        `;

        document.getElementById("btn-checkout-trigger").disabled = true;
        document.getElementById("cart-badge-floating").textContent = "0";

        toggleFloatingCartBtnVisibility();

        // Clear totals in summary
        document.getElementById("cart-summary-subtotal").textContent = "$0,00";
        document.getElementById("cart-summary-shipping").textContent = "$0,00";
        document.getElementById("cart-summary-total").textContent = "$0,00";
        return;
    }

    cartContainer.innerHTML = "";
    let subtotal = 0;
    let totalItems = 0;

    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        subtotal += itemTotal;
        totalItems += item.quantity;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img class="cart-item-img" src="${item.product.image}" alt="${item.product.name}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=100&auto=format&fit=crop'">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.product.name}</h4>
                <span class="cart-item-price">$${item.product.price.toLocaleString('es-AR')}</span>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity('${item.product.id}', -1)"><i class="fa-solid fa-minus"></i></button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity('${item.product.id}', 1)"><i class="fa-solid fa-plus"></i></button>
                <button class="remove-item-btn ml-2" onclick="removeFromCart('${item.product.id}')" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
        cartContainer.appendChild(div);
    });

    // Update Totals UI
    const shipping = storeSettings.deliveryFee;
    const finalTotal = subtotal + shipping;

    document.getElementById("cart-summary-subtotal").textContent = `$${subtotal.toLocaleString('es-AR')}`;
    document.getElementById("cart-summary-shipping").textContent = `$${shipping.toLocaleString('es-AR')}`;
    document.getElementById("cart-summary-total").textContent = `$${finalTotal.toLocaleString('es-AR')}`;

    // Update badges
    document.getElementById("cart-badge-floating").textContent = totalItems;
    document.getElementById("btn-checkout-trigger").disabled = false;

    toggleFloatingCartBtnVisibility();
}

function toggleCartDrawer(isOpen) {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");

    if (isOpen) {
        drawer.classList.add("active");
        overlay.classList.add("active");
    } else {
        drawer.classList.remove("active");
        overlay.classList.remove("active");
    }
}

function toggleFloatingCartBtnVisibility() {
    const btn = document.getElementById("floating-cart-btn");
    const isClientViewActive = document.getElementById("client-view").classList.contains("active");

    if (cart.length > 0 && isClientViewActive) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
}

function animateCartBadge() {
    const badge = document.getElementById("cart-badge-floating");
    badge.style.transform = "scale(1.4)";
    badge.style.transition = "transform 0.1s ease";
    setTimeout(() => {
        badge.style.transform = "scale(1)";
    }, 150);
}

// --- Smart Checkout Dialog Modal ---
function openCheckoutModal() {
    toggleCartDrawer(false);

    // Reset shipping checkbox state and populate cost
    const shippingToggle = document.getElementById("checkout-shipping-toggle");
    if (shippingToggle) {
        shippingToggle.checked = true;
    }
    const shippingCost = document.getElementById("checkout-shipping-cost");
    if (shippingCost) {
        shippingCost.textContent = storeSettings.deliveryFee.toLocaleString('es-AR');
    }

    // Enable address field
    const addressInput = document.getElementById("checkout-address");
    if (addressInput) {
        addressInput.disabled = false;
        addressInput.required = true;
        addressInput.placeholder = "Ej: Av. del Libertador 1450, 4B";
        addressInput.closest(".form-group").style.opacity = "1";
    }

    // Update total text inside modal
    let subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const finalTotal = subtotal + storeSettings.deliveryFee;
    document.getElementById("checkout-modal-total").textContent = `$${finalTotal.toLocaleString('es-AR')}`;

    // Set default fields
    const dateInput = document.getElementById("checkout-date");
    const timeInput = document.getElementById("checkout-time");

    // Set date to today
    const now = new Date();
    dateInput.value = now.toISOString().split('T')[0];

    // Set time to +30 mins
    now.setMinutes(now.getMinutes() + 30);
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeInput.value = `${hours}:${minutes}`;

    document.getElementById("checkout-modal-container").classList.add("active");
}

function updateCheckoutTotal() {
    const isShippingChecked = document.getElementById("checkout-shipping-toggle").checked;
    const addressInput = document.getElementById("checkout-address");

    if (addressInput) {
        if (isShippingChecked) {
            addressInput.disabled = false;
            addressInput.required = true;
            addressInput.placeholder = "Ej: Av. del Libertador 1450, 4B";
            addressInput.closest(".form-group").style.opacity = "1";
        } else {
            addressInput.disabled = true;
            addressInput.required = false;
            addressInput.value = "";
            addressInput.placeholder = "Retiro en el local (sin costo de envío)";
            addressInput.closest(".form-group").style.opacity = "0.6";
        }
    }

    let subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const shippingFee = isShippingChecked ? storeSettings.deliveryFee : 0;
    const finalTotal = subtotal + shippingFee;
    document.getElementById("checkout-modal-total").textContent = `$${finalTotal.toLocaleString('es-AR')}`;
}

function closeCheckoutModal() {
    document.getElementById("checkout-modal-container").classList.remove("active");
}

function processCheckout(event) {
    event.preventDefault();

    const isShippingChecked = document.getElementById("checkout-shipping-toggle").checked;
    const clientName = document.getElementById("checkout-name").value.trim();
    const address = isShippingChecked ? document.getElementById("checkout-address").value.trim() : "Retiro en local";
    const deliveryDate = document.getElementById("checkout-date").value;
    const deliveryTime = document.getElementById("checkout-time").value;
    const notes = document.getElementById("checkout-notes").value.trim();

    // Calculate values
    let subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const shipping = isShippingChecked ? storeSettings.deliveryFee : 0;
    const finalTotal = subtotal + shipping;

    // Create new order record
    const newOrderId = "GH-" + Math.floor(1000 + Math.random() * 9000);
    const newOrder = {
        id: newOrderId,
        customerName: clientName,
        address: address,
        date: deliveryDate,
        time: deliveryTime,
        notes: notes,
        items: cart.map(i => ({ name: i.product.name, quantity: i.quantity, price: i.product.price })),
        total: finalTotal,
        shipping: shipping,
        subtotal: subtotal,
        status: "Pendiente",
        createdAt: new Date().toISOString()
    };

    // Save order record to simulated database
    orders.unshift(newOrder);
    saveOrdersToStorage();

    // Format WhatsApp message text
    const waMessage = formatWhatsAppMessage(newOrder);

    // Encode for safe URL transport
    const encodedMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/${storeSettings.whatsappNumber}?text=${encodedMessage}`;

    // Wipe cart & Close Modals
    cart = [];
    updateCartUI();
    closeCheckoutModal();

    // Update admin notification badge so the user sees a visual alert in UI
    updateAdminNotification();

    showToast(`¡Pedido ${newOrderId} generado con éxito! Abriendo WhatsApp...`);

    // Trigger WhatsApp link opening
    setTimeout(() => {
        window.open(waUrl, '_blank');
    }, 1000);
}

function formatWhatsAppMessage(order) {
    let msg = `*🍔 ¡NUEVO PEDIDO EN ${storeSettings.storeName.toUpperCase()}! 🍔*\n`;
    msg += `--------------------------------------\n`;
    msg += `*Pedido:* \`${order.id}\`\n`;
    msg += `*Cliente:* ${order.customerName}\n`;
    msg += `*Dirección:* ${order.address}\n`;
    msg += `*Entrega Programada:* ${formatDateString(order.date)} a las ${order.time} hs\n`;
    if (order.notes) {
        msg += `*Notas:* _"${order.notes}"_\n`;
    }
    msg += `--------------------------------------\n`;
    msg += `*DETALLE DE COMPRA:*\n`;

    order.items.forEach(item => {
        msg += `• ${item.quantity}x ${item.name} - ($${(item.price * item.quantity).toLocaleString('es-AR')})\n`;
    });

    msg += `--------------------------------------\n`;
    msg += `*Subtotal:* $${order.subtotal.toLocaleString('es-AR')}\n`;
    msg += `*Envío:* $${order.shipping.toLocaleString('es-AR')}\n`;
    msg += `*TOTAL A PAGAR: $${order.total.toLocaleString('es-AR')}*\n\n`;
    msg += `_Por favor, confirma el pedido respondiendo a este mensaje. ¡Muchas gracias!_`;

    return msg;
}

function formatDateString(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
}

// --- Admin Notification Badge Control ---
function updateAdminNotification() {
    const badge = document.getElementById("admin-notification-badge");
    const isClientViewActive = document.getElementById("client-view").classList.contains("active");

    if (isClientViewActive) {
        const count = parseInt(badge.textContent || "0") + 1;
        badge.textContent = count;
        badge.classList.remove("hide");
    }
}

// --- Admin View Dashboard & Logic ---
let activeAdminFilter = "all";

function renderAdminDashboard() {
    // 1. Calculate and update stats
    const totalSales = orders.reduce((sum, o) => sum + o.total, 0);
    const totalOrdersCount = orders.length;
    const ticketAvg = totalOrdersCount > 0 ? (totalSales / totalOrdersCount) : 0;

    const inKitchenCount = orders.filter(o => o.status === "En cocina").length;
    const deliveredCount = orders.filter(o => o.status === "Enviado").length;

    document.getElementById("stat-total-sales").textContent = `$${totalSales.toLocaleString('es-AR')}`;
    document.getElementById("stat-total-orders").textContent = totalOrdersCount;
    document.getElementById("stat-ticket-average").textContent = `Promedio: $${ticketAvg.toLocaleString('es-AR', { maximumFractionDigits: 0 })}`;
    document.getElementById("stat-in-kitchen").textContent = inKitchenCount;
    document.getElementById("stat-delivered").textContent = deliveredCount;

    // 2. Populate and filter recent orders table
    const tableBody = document.getElementById("orders-table-body");
    tableBody.innerHTML = "";

    const filteredOrders = orders.filter(o => activeAdminFilter === "all" || o.status === activeAdminFilter);

    if (filteredOrders.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" class="empty-table-message">
                    <i class="fa-solid fa-inbox"></i>
                    <p>No se encontraron pedidos con el estado "${activeAdminFilter}".</p>
                </td>
            </tr>
        `;
        return;
    }

    filteredOrders.forEach(o => {
        const tr = document.createElement("tr");

        // Format items text representation
        const itemsText = o.items.map(i => `${i.quantity}x ${i.name}`).join("<br>");

        // Set up action controls depending on current order state
        let actionButtonsHTML = "";
        if (o.status === "Pendiente") {
            actionButtonsHTML = `
                <button class="btn btn-secondary btn-xs" onclick="updateOrderStatus('${o.id}', 'En cocina')" title="Pasar a Cocina">
                    <i class="fa-solid fa-kitchen-set text-warning"></i> Cocinar
                </button>
            `;
        } else if (o.status === "En cocina") {
            actionButtonsHTML = `
                <button class="btn btn-success btn-xs" onclick="updateOrderStatus('${o.id}', 'Enviado')" title="Marcar como Enviado">
                    <i class="fa-solid fa-truck text-white"></i> Enviar
                </button>
            `;
        } else {
            actionButtonsHTML = `<span class="text-xs text-muted"><i class="fa-solid fa-circle-check text-success"></i> Entregado</span>`;
        }

        tr.innerHTML = `
            <td><strong>#${o.id}</strong></td>
            <td>
                <div class="customer-info-box">
                    <strong class="text-white">${o.customerName}</strong>
                    <div class="text-xs text-muted mt-1"><i class="fa-solid fa-map-pin"></i> ${o.address}</div>
                    ${o.notes ? `<div class="text-xs text-warning mt-1" style="font-style: italic;"><i class="fa-solid fa-comment-dots"></i> "${o.notes}"</div>` : ''}
                </div>
            </td>
            <td>
                <div class="delivery-time-box">
                    <div>${formatDateString(o.date)}</div>
                    <div class="text-xs text-muted">${o.time} hs</div>
                </div>
            </td>
            <td style="font-size: 0.8rem; line-height: 1.4;">${itemsText}</td>
            <td><strong class="text-white">$${o.total.toLocaleString('es-AR')}</strong></td>
            <td>
                <span class="status-badge ${o.status.toLowerCase().replace(" ", "-")}">
                    <i class="fa-solid ${getStatusIcon(o.status)}"></i> ${o.status}
                </span>
            </td>
            <td>
                <div class="order-actions-dropdown">
                    ${actionButtonsHTML}
                </div>
            </td>
        `;
        tableBody.appendChild(tr);
    });

    // 3. Re-draw sales visual trend chart
    renderSalesChart();
}

function getStatusIcon(status) {
    switch (status) {
        case "Pendiente": return "fa-clock";
        case "En cocina": return "fa-kitchen-set";
        case "Enviado": return "fa-truck-ramp-box";
        default: return "fa-circle-check";
    }
}

function filterOrders(status) {
    activeAdminFilter = status;
    renderAdminDashboard();
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    order.status = newStatus;
    saveOrdersToStorage();
    renderAdminDashboard();
    showToast(`Pedido #${orderId} actualizado a "${newStatus}".`);
}

// --- Sales Graph Rendering (SVG Dynamic Engine) ---
function renderSalesChart() {
    const svg = document.getElementById("sales-chart");
    if (!svg) return;

    svg.innerHTML = "";

    // Define layout sizes
    const width = 600;
    const height = 200;
    const paddingLeft = 50;
    const paddingRight = 20;
    const paddingTop = 20;
    const paddingBottom = 30;

    // Generate dates for the past 7 days (including today)
    const dates = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        dates.push(d.toISOString().split('T')[0]);
    }

    // Calculate total sales for each day based on our orders database
    const dailySalesMap = {};
    dates.forEach(dt => { dailySalesMap[dt] = 0; });

    orders.forEach(o => {
        const orderDateStr = o.createdAt ? o.createdAt.split('T')[0] : o.date;
        if (dailySalesMap[orderDateStr] !== undefined) {
            dailySalesMap[orderDateStr] += o.total;
        }
    });

    const salesValues = dates.map(dt => dailySalesMap[dt]);
    const maxSales = Math.max(...salesValues, 5000); // minimum scale peak at $5000

    // Define Gradients and Grid Lines in SVG
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.innerHTML = `
        <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--primary)" stop-opacity="1" />
            <stop offset="100%" stop-color="hsl(20, 95%, 55%)" stop-opacity="0.2" />
        </linearGradient>
    `;
    svg.appendChild(defs);

    // Draw Y-Axis Helper Grid Lines
    const gridLinesCount = 4;
    for (let i = 0; i <= gridLinesCount; i++) {
        const yVal = maxSales * (i / gridLinesCount);
        const yPos = height - paddingBottom - ((height - paddingTop - paddingBottom) * (i / gridLinesCount));

        // Grid Line
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", paddingLeft);
        line.setAttribute("y1", yPos);
        line.setAttribute("x2", width - paddingRight);
        line.setAttribute("y2", yPos);
        line.setAttribute("class", "chart-grid-line");
        svg.appendChild(line);

        // Label
        const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        txt.setAttribute("x", paddingLeft - 8);
        txt.setAttribute("y", yPos + 3);
        txt.setAttribute("text-anchor", "end");
        txt.setAttribute("class", "chart-label");
        txt.textContent = `$${Math.round(yVal / 100) * 100}`;
        svg.appendChild(txt);
    }

    // Draw Bars and X-Axis Labels
    const barWidth = 32;
    const chartWidth = width - paddingLeft - paddingRight;
    const spacing = chartWidth / dates.length;

    dates.forEach((dt, idx) => {
        const saleAmount = dailySalesMap[dt];
        const barHeight = ((height - paddingTop - paddingBottom) * (saleAmount / maxSales));
        const xPos = paddingLeft + (spacing * idx) + (spacing - barWidth) / 2;
        const yPos = height - paddingBottom - barHeight;

        // Bar Rectangle
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", xPos);
        rect.setAttribute("y", yPos);
        rect.setAttribute("width", barWidth);
        rect.setAttribute("height", barHeight);
        rect.setAttribute("class", "chart-bar");

        // Title popup for hover statistics
        const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
        title.textContent = `${formatDateLabelShort(dt)}: $${saleAmount.toLocaleString('es-AR')}`;
        rect.appendChild(title);

        svg.appendChild(rect);

        // Date Label below bar
        const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        txt.setAttribute("x", xPos + barWidth / 2);
        txt.setAttribute("y", height - paddingBottom + 16);
        txt.setAttribute("text-anchor", "middle");
        txt.setAttribute("class", "chart-label");
        txt.textContent = formatDateLabelShort(dt);
        svg.appendChild(txt);
    });

    // Draw Axis lines
    const xAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    xAxis.setAttribute("x1", paddingLeft);
    xAxis.setAttribute("y1", height - paddingBottom);
    xAxis.setAttribute("x2", width - paddingRight);
    xAxis.setAttribute("y2", height - paddingBottom);
    xAxis.setAttribute("class", "chart-axis-line");
    svg.appendChild(xAxis);
}

function formatDateLabelShort(dateStr) {
    const [year, month, day] = dateStr.split('-');
    // Translate index months to friendly texts
    const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    return `${day} ${months[parseInt(month) - 1]}`;
}

// --- Order Simulator Trigger ---
function simulateRandomOrder() {
    const mockName = MOCK_NAMES[Math.floor(Math.random() * MOCK_NAMES.length)];
    const mockAddress = MOCK_ADDRESSES[Math.floor(Math.random() * MOCK_ADDRESSES.length)];
    const mockNote = MOCK_NOTES[Math.floor(Math.random() * MOCK_NOTES.length)];

    // Select 1-3 random items from products list
    const itemsCount = Math.floor(Math.random() * 3) + 1;
    const selectedItems = [];
    const availableProducts = [...PRODUCTS];

    for (let i = 0; i < itemsCount; i++) {
        const prodIdx = Math.floor(Math.random() * availableProducts.length);
        const prod = availableProducts.splice(prodIdx, 1)[0];
        const qty = Math.floor(Math.random() * 2) + 1;
        selectedItems.push({
            name: prod.name,
            quantity: qty,
            price: prod.price
        });
    }

    // Compute details
    const subtotal = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = storeSettings.deliveryFee;
    const total = subtotal + shipping;

    // Generate dates: simulated delivery either today or tomorrow
    const dDate = new Date();
    if (Math.random() > 0.6) dDate.setDate(dDate.getDate() + 1);
    const deliveryDate = dDate.toISOString().split('T')[0];

    // Random hour between 19:00 and 23:00
    const hour = Math.floor(Math.random() * 5) + 19;
    const minutes = ["00", "15", "30", "45"][Math.floor(Math.random() * 4)];
    const deliveryTime = `${hour}:${minutes}`;

    // Generate Creation Timestamp (randomly within the past 7 days to populate chart nicely)
    const creationDate = new Date();
    const daysOffset = Math.floor(Math.random() * 7); // 0 (today) to 6 days ago
    creationDate.setDate(creationDate.getDate() - daysOffset);

    const newOrderId = "GH-" + Math.floor(1000 + Math.random() * 9000);
    const newOrder = {
        id: newOrderId,
        customerName: mockName,
        address: mockAddress,
        date: deliveryDate,
        time: deliveryTime,
        notes: mockNote,
        items: selectedItems,
        total: total,
        shipping: shipping,
        subtotal: subtotal,
        status: "Pendiente",
        createdAt: creationDate.toISOString()
    };

    // Insert and update
    orders.unshift(newOrder);
    saveOrdersToStorage();
    renderAdminDashboard();

    showToast(`Pedido de ${mockName} (#${newOrderId}) simulado con éxito.`);
}

// --- Prepopulate order history if empty ---
function generateMockOrdersHistory() {
    const history = [];
    const names = ["Andrés Pérez", "Carla Santillán", "Bruno Marsó", "Delfina Quiroga", "Eduardo Rivas", "Federico Rossi", "Lucía Montes"];
    const addresses = ["Av. Cabildo 1800, Belgrano", "Serrano 1200, Palermo", "Av. Corrientes 3400, Abasto", "Bulnes 2100, Palermo", "Suipacha 900, Retiro", "Av. Callao 150, Congreso", "Libertad 1100, Recoleta"];
    const statuses = ["Pendiente", "En cocina", "Enviado", "Enviado", "Enviado", "Enviado", "Enviado"];

    for (let i = 0; i < 7; i++) {
        const daysAgo = i;
        const creationDate = new Date();
        creationDate.setDate(creationDate.getDate() - daysAgo);

        // Randomly select items
        const prod1 = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
        const prod2 = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];

        const items = [{ name: prod1.name, quantity: 1, price: prod1.price }];
        if (prod1.id !== prod2.id && Math.random() > 0.4) {
            items.push({ name: prod2.name, quantity: 1, price: prod2.price });
        }

        const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = 350;
        const total = subtotal + shipping;

        const orderId = "GH-" + Math.floor(1000 + Math.random() * 9000);

        history.push({
            id: orderId,
            customerName: names[i % names.length],
            address: addresses[i % addresses.length],
            date: creationDate.toISOString().split('T')[0],
            time: `${19 + (i % 4)}:${["00", "30"][i % 2]}`,
            notes: i % 3 === 0 ? "Tocar timbre fuerte" : "",
            items: items,
            total: total,
            shipping: shipping,
            subtotal: subtotal,
            status: statuses[i],
            createdAt: creationDate.toISOString()
        });
    }

    return history;
}

// --- Forms and Interactions Helpers ---
function initializeForms() {
    const settingsForm = document.getElementById("settings-form");
    if (settingsForm) {
        settingsForm.addEventListener("submit", saveStoreSettings);
    }

    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", processCheckout);
    }

    const cmsForm = document.getElementById("cms-product-form");
    if (cmsForm) {
        cmsForm.addEventListener("submit", saveProductCMS);
    }

    const authForm = document.getElementById("admin-auth-form");
    if (authForm) {
        authForm.addEventListener("submit", submitAdminAuth);
    }

    const passForm = document.getElementById("change-password-form");
    if (passForm) {
        passForm.addEventListener("submit", changeAdminPassword);
    }
}

// --- Admin Security & Password Auth functions ---
function requestAdminAccess() {
    if (isAdminAuthenticated) {
        switchView('admin');
    } else {
        const modal = document.getElementById("admin-auth-modal");
        const input = document.getElementById("admin-password-input");
        const errorMsg = document.getElementById("admin-auth-error-msg");

        if (modal && input && errorMsg) {
            input.value = "";
            errorMsg.classList.add("hide");
            modal.classList.add("active");
            setTimeout(() => input.focus(), 150);
        }
    }
}

function closeAdminAuthModal() {
    document.getElementById("admin-auth-modal").classList.remove("active");
}

function submitAdminAuth(event) {
    event.preventDefault();
    const input = document.getElementById("admin-password-input");
    const errorMsg = document.getElementById("admin-auth-error-msg");
    const modalOverlay = document.querySelector("#admin-auth-modal .modal-card");

    if (input.value === adminPassword) {
        isAdminAuthenticated = true;
        closeAdminAuthModal();
        switchView('admin');
        showToast("Acceso concedido al panel administrativo.");
    } else {
        errorMsg.classList.remove("hide");
        modalOverlay.classList.add("shake");
        setTimeout(() => {
            modalOverlay.classList.remove("shake");
        }, 400);
        input.select();
    }
}

function changeAdminPassword(event) {
    event.preventDefault();
    const currentInput = document.getElementById("current-pass-input");
    const newInput = document.getElementById("new-pass-input");

    if (currentInput.value === adminPassword) {
        adminPassword = newInput.value.trim();
        localStorage.setItem("gourmet_admin_password", adminPassword);
        currentInput.value = "";
        newInput.value = "";
        showToast("Contraseña de administrador cambiada.");
    } else {
        showToast("Contraseña actual incorrecta.");
        currentInput.select();
    }
}

// --- Dynamic Catalog Management (CMS) functions ---
function initCMSCatalog() {
    const select = document.getElementById("cms-select-product");
    if (!select) return;

    select.innerHTML = "";
    PRODUCTS.forEach(prod => {
        const opt = document.createElement("option");
        opt.value = prod.id;
        opt.textContent = `${prod.name} ($${prod.price})`;
        select.appendChild(opt);
    });

    if (PRODUCTS.length > 0) {
        select.value = PRODUCTS[0].id;
        loadProductIntoCMS(PRODUCTS[0].id);
    }
}

function loadProductIntoCMS(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    document.getElementById("cms-product-id").value = prod.id;
    document.getElementById("cms-product-name").value = prod.name;
    document.getElementById("cms-product-price").value = prod.price;
    document.getElementById("cms-product-desc").value = prod.description;
    document.getElementById("cms-product-image").value = prod.image;
    document.getElementById("cms-product-badge").value = prod.badge || "";
}

function saveProductCMS(event) {
    event.preventDefault();
    const id = document.getElementById("cms-product-id").value;
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) return;

    prod.name = document.getElementById("cms-product-name").value.trim();
    prod.price = parseFloat(document.getElementById("cms-product-price").value);
    prod.description = document.getElementById("cms-product-desc").value.trim();
    prod.image = document.getElementById("cms-product-image").value.trim();
    prod.badge = document.getElementById("cms-product-badge").value.trim();

    saveCatalogToStorage();
    renderProducts();

    // Refresh CMS selectors
    const select = document.getElementById("cms-select-product");
    const selectedId = select.value;
    initCMSCatalog();
    select.value = selectedId;

    if (document.getElementById("admin-view").classList.contains("active")) {
        renderAdminDashboard();
    }

    showToast(`Plato "${prod.name}" actualizado en el menú.`);
}

// --- Toast alert animation ---
let toastTimeout;
function showToast(message) {
    const toast = document.getElementById("toast-notification");
    const toastMsg = document.getElementById("toast-message");

    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.remove("hide");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.add("hide");
    }, 3000);
}
