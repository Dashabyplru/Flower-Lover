const productsData = [
    {
        id: 1,
        name: "Эхеверия",
        price: 25.00,
        description: "Эхеверия - изящный суккулент с мясистыми листьями, образующими розетку. Отлично подходит для создания миниатюрных садов.",
        care: "Умеренный полив 1 раз в 10 дней, яркое освещение, температура 18-25°C",
        suitable_for: {
            zodiac: "Телец, Дева",
            lifestyle: "Любители минимализма, занятые люди"
        },
        category: "rosette"
    },
    {
        id: 2,
        name: "Хавортия",
        price: 18.00,
        description: "Хавортия - компактный суккулент с мясистыми листьями в форме звезды. Неприхотлив и идеален для начинающих цветоводов.",
        care: "Полив 1 раз в 14 дней, полутень, температура 15-25°C",
        suitable_for: {
            zodiac: "Рак, Скорпион",
            lifestyle: "Новички в цветоводстве, люди с ограниченным временем"
        },
        category: "succulent"
    },
    {
        id: 3,
        name: "Алоэ Вера",
        price: 35.00,
        description: "Алоэ Вера - лечебный суккулент с целебным гелем внутри листьев. Пользуется популярностью за полезные свойства и простоту ухода.",
        care: "Полив 1 раз в 14-20 дней, яркий свет, температура 20-30°C",
        suitable_for: {
            zodiac: "Лев, Стрелец",
            lifestyle: "Ценители здоровья, любители комнатных растений"
        },
        category: "medicinal"
    },
    {
        id: 4,
        name: "Эониум",
        price: 28.00,
        description: "Эониум - эффектный суккулент с плоскими розетками на длинных стеблях. Создает атмосферу средиземноморского сада.",
        care: "Полив 1 раз в 10 дней, яркое освещение, температура 18-25°C",
        suitable_for: {
            zodiac: "Весы, Водолей",
            lifestyle: "Творческие натуры, коллекционеры растений"
        },
        category: "rosette"
    },
    {
        id: 5,
        name: "Крассула (Денежное дерево)",
        price: 45.00,
        description: "Крассула или Денежное дерево - популярный суккулент с толстыми округлыми листьями. Символизирует удачу и процветание.",
        care: "Полив 1 раз в 14 дней, яркий свет, температура 18-25°C",
        suitable_for: {
            zodiac: "Козерог, Овен",
            lifestyle: "Бизнесмены, люди стремящиеся к успеху"
        },
        category: "tree"
    },
    {
        id: 6,
        name: "Седум (Очиток)",
        price: 15.00,
        description: "Седум - разнообразный род суккулентов с мясистыми листьями. Отлично подходит для подвесных кашпо и рокариев.",
        care: "Полив 1 раз в 10-12 дней, яркое освещение, температура 15-25°C",
        suitable_for: {
            zodiac: "Близнецы, Весы",
            lifestyle: "Любители экспериментов, садоводы"
        },
        category: "groundcover"
    },
    {
        id: 7,
        name: "Каланхоэ",
        price: 22.00,
        description: "Каланхоэ - цветущий суккулент с яркими соцветиями. Порадует цветением в зимние месяцы.",
        care: "Полив 1 раз в 10 дней, яркий свет, температура 18-25°C",
        suitable_for: {
            zodiac: "Рыбы, Рак",
            lifestyle: "Любители цветущих растений, романтики"
        },
        category: "flowering"
    },
    {
        id: 8,
        name: "Эчеверия Дребберги",
        price: 32.00,
        description: "Эчеверия Дребберги - изящный сорт с розовыми кончиками листьев. Создает ощущение нежности и воздушности.",
        care: "Умеренный полив, яркое освещение, температура 18-25°C",
        suitable_for: {
            zodiac: "Телец, Весы",
            lifestyle: "Эстеты, любители нежных растений"
        },
        category: "rosette"
    }
];

let cart = JSON.parse(localStorage.getItem('flowerLoverCart')) || [];

function getPlantSVG(name) {
    const svgs = {
        'Эхеверия': `<svg viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="65" r="40" fill="#E8F5E9"/>
            <ellipse cx="60" cy="50" rx="25" ry="20" fill="#4A7C59"/>
            <ellipse cx="45" cy="45" rx="15" ry="12" fill="#8FBC8F"/>
            <ellipse cx="75" cy="45" rx="15" ry="12" fill="#8FBC8F"/>
            <ellipse cx="60" cy="40" rx="12" ry="10" fill="#A8D8A8"/>
        </svg>`,
        'Хавортия': `<svg viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="45" fill="#E8F5E9"/>
            <path d="M60 25 L65 45 L75 50 L65 55 L60 75 L55 55 L45 50 L55 45 Z" fill="#4A7C59"/>
            <path d="M60 30 L63 42 L70 45 L63 48 L60 62 L57 48 L50 45 L57 42 Z" fill="#8FBC8F"/>
            <path d="M60 35 L62 42 L66 44 L62 46 L60 55 L58 46 L54 44 L58 42 Z" fill="#A8D8A8"/>
        </svg>`,
        'Алоэ Вера': `<svg viewBox="0 0 120 120" fill="none">
            <rect x="45" y="25" width="30" height="70" rx="15" fill="#E8F5E9"/>
            <path d="M50 30 Q60 20 70 30 L70 80 Q60 90 50 80 Z" fill="#4A7C59"/>
            <path d="M55 35 Q60 28 65 35 L65 75 Q60 82 55 75 Z" fill="#8FBC8F"/>
            <path d="M58 40 Q60 36 62 40 L62 70 Q60 74 58 70 Z" fill="#A8D8A8"/>
        </svg>`,
        'Эониум': `<svg viewBox="0 0 120 120" fill="none">
            <rect x="55" y="90" width="10" height="20" fill="#4A7C59"/>
            <ellipse cx="60" cy="55" rx="35" ry="30" fill="#4A7C59"/>
            <ellipse cx="50" cy="50" rx="20" ry="18" fill="#8FBC8F"/>
            <ellipse cx="70" cy="50" rx="20" ry="18" fill="#8FBC8F"/>
            <ellipse cx="60" cy="45" rx="15" ry="12" fill="#A8D8A8"/>
        </svg>`,
        'Крассула (Денежное дерево)': `<svg viewBox="0 0 120 120" fill="none">
            <rect x="50" y="70" width="20" height="35" fill="#8B4513"/>
            <ellipse cx="60" cy="40" rx="35" ry="30" fill="#4A7C59"/>
            <circle cx="45" cy="35" r="12" fill="#8FBC8F"/>
            <circle cx="75" cy="35" r="12" fill="#8FBC8F"/>
            <circle cx="60" cy="25" r="10" fill="#A8D8A8"/>
            <circle cx="40" cy="50" r="8" fill="#8FBC8F"/>
            <circle cx="80" cy="50" r="8" fill="#8FBC8F"/>
        </svg>`,
        'Седум (Очиток)': `<svg viewBox="0 0 120 120" fill="none">
            <path d="M60 95 L55 75 L50 70 L55 65 L60 70 L65 65 L70 70 L65 75 Z" fill="#4A7C59"/>
            <path d="M60 85 L55 65 L50 60 L55 55 L60 60 L65 55 L70 60 L65 65 Z" fill="#8FBC8F"/>
            <path d="M60 75 L56 60 L52 56 L56 52 L60 56 L64 52 L68 56 L64 60 Z" fill="#A8D8A8"/>
        </svg>`,
        'Каланхоэ': `<svg viewBox="0 0 120 120" fill="none">
            <rect x="50" y="50" width="20" height="55" fill="#4A7C59"/>
            <circle cx="40" cy="40" r="12" fill="#E57373"/>
            <circle cx="60" cy="35" r="10" fill="#E57373"/>
            <circle cx="80" cy="40" r="12" fill="#E57373"/>
            <circle cx="50" cy="30" r="8" fill="#EF5350"/>
            <circle cx="70" cy="28" r="9" fill="#EF5350"/>
        </svg>`,
        'Эчеверия Дребберги': `<svg viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="65" r="40" fill="#E8F5E9"/>
            <ellipse cx="60" cy="50" rx="28" ry="22" fill="#4A7C59"/>
            <ellipse cx="45" cy="45" rx="18" ry="14" fill="#D4A5A5"/>
            <ellipse cx="75" cy="45" rx="18" ry="14" fill="#D4A5A5"/>
            <ellipse cx="60" cy="40" rx="14" ry="11" fill="#E8B4B4"/>
        </svg>`
    };
    return svgs[name] || svgs['Эхеверия'];
}

function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">
                ${getPlantSVG(product.name)}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price.toFixed(2)} BYN</p>
                <p>${product.description.substring(0, 80)}...</p>
                <div class="tags">
                    <span>${product.suitable_for.zodiac}</span>
                    <span>${product.suitable_for.lifestyle.split(',')[0]}</span>
                </div>
                <button class="btn" onclick="addToCart(${product.id})">В корзину</button>
            </div>
        </div>
    `;
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('flowerLoverCart', JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} добавлен в корзину!`);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('flowerLoverCart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

function changeQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('flowerLoverCart', JSON.stringify(cart));
            renderCart();
            updateCartCount();
        }
    }
}

function renderCart() {
    const cartContent = document.getElementById('cart-content');
    if (!cartContent) return;

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <svg viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="#ccc" stroke-width="2"/>
                    <path d="M30 45 L45 45 M55 45 L70 45 M30 55 L45 55 M55 55 L70 55" stroke="#ccc" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="50" cy="70" r="5" fill="#ccc"/>
                </svg>
                <p>Ваша корзина пуста</p>
                <a href="catalog.html" class="btn">Перейти в каталог</a>
            </div>
        `;
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartContent.innerHTML = `
        <div class="cart-items">
            ${cart.map(item => `
                <div class="cart-item">
                    <div class="item-image">
                        ${getPlantSVG(item.name)}
                    </div>
                    <div class="item-info">
                        <h4>${item.name}</h4>
                        <p>${item.price.toFixed(2)} BYN</p>
                    </div>
                    <div class="item-price">${(item.price * item.quantity).toFixed(2)} BYN</div>
                    <div class="item-actions">
                        <button onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Удалить</button>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="cart-summary">
            <h3>Итого</h3>
            <div class="total">
                <span>Сумма заказа:</span>
                <span>${total.toFixed(2)} BYN</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">Оформить заказ</button>
        </div>
    `;
}

function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
    cart = [];
    localStorage.setItem('flowerLoverCart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

function filterProducts() {
    const checkboxes = document.querySelectorAll('.filters input[type="checkbox"]:checked');
    const categories = Array.from(checkboxes).filter(cb => 
        ['rosette', 'succulent', 'tree', 'flowering'].includes(cb.value)
    ).map(cb => cb.value);
    
    const priceFilters = Array.from(checkboxes).filter(cb => 
        ['low', 'medium', 'high'].includes(cb.value)
    );
    
    let filtered = [...productsData];
    
    if (categories.length > 0) {
        filtered = filtered.filter(p => categories.includes(p.category));
    }
    
    if (priceFilters.length > 0) {
        filtered = filtered.filter(p => {
            return priceFilters.some(filter => {
                if (filter.value === 'low') return p.price < 20;
                if (filter.value === 'medium') return p.price >= 20 && p.price <= 35;
                if (filter.value === 'high') return p.price > 35;
            });
        });
    }
    
    const container = document.getElementById('products-container');
    if (container) {
        container.innerHTML = filtered.map(product => createProductCard(product)).join('');
        
        if (filtered.length === 0) {
            container.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 40px;">Нет товаров по выбранным критериям</p>';
        }
    }
}

function submitForm(event) {
    event.preventDefault();
    alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
    event.target.reset();
}

function initPage() {
    updateCartCount();
    
    const productsPreview = document.getElementById('products-preview');
    if (productsPreview) {
        productsPreview.innerHTML = productsData.slice(0, 4).map(product => createProductCard(product)).join('');
    }
    
    const productsContainer = document.getElementById('products-container');
    if (productsContainer) {
        productsContainer.innerHTML = productsData.map(product => createProductCard(product)).join('');
    }
    
    const cartContent = document.getElementById('cart-content');
    if (cartContent) {
        renderCart();
    }
}

document.addEventListener('DOMContentLoaded', initPage);