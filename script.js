/**
 * Nadia Dahby
 * Haute Couture Marocaine
 * JavaScript functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===================================
    // Preloader - Bobine à Fil Animation
    // ===================================
    const preloader = document.getElementById('preloader');

    if (preloader) {
        // Minimum display time for the preloader (2 seconds)
        const minDisplayTime = 2000;
        const startTime = Date.now();

        // Function to hide preloader
        function hidePreloader() {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

            setTimeout(() => {
                preloader.classList.add('fade-out');

                // Remove preloader from DOM after animation
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 800);
            }, remainingTime);
        }

        // Hide preloader when page is fully loaded
        if (document.readyState === 'complete') {
            hidePreloader();
        } else {
            window.addEventListener('load', hidePreloader);
        }

        // Safety timeout: force hide after 4 seconds max
        setTimeout(hidePreloader, 4000);
    }

    // ===================================
    // Navigation Toggle (Mobile)
    // ===================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // ===================================
    // Navbar Reference (needed for scroll offset)
    // ===================================
    const navbar = document.querySelector('.navbar');

    // ===================================
    // Search Toggle & Functionality
    // ===================================
    const searchToggle = document.querySelector('.search-toggle');
    const searchDropdown = document.getElementById('searchDropdown');
    const searchInput = document.querySelector('.search-input');
    const searchForm = document.querySelector('.search-form');

    // Search keywords mapping to sections/pages
    const searchData = [
        { keywords: ['accueil', 'home', 'début', 'bienvenue'], target: '#home', label: 'Accueil' },
        { keywords: ['caftan', 'caftans', 'kaftan', 'mariée', 'mariage', 'wedding'], target: '#gallery', label: 'Caftans' },
        { keywords: ['jellaba', 'jellabas', 'djellaba', 'djellabas'], target: '#gallery', label: 'Jellabas' },
        { keywords: ['gandoura', 'gandouras', 'gandora'], target: '#gallery', label: 'Gandouras' },
        { keywords: ['takchita', 'takchitas', 'tachita'], target: '#gallery', label: 'Takchitas' },
        { keywords: ['jabador', 'jabadors', 'homme', 'hommes', 'men'], target: '#gallery', label: 'Collection Homme' },
        { keywords: ['enfant', 'enfants', 'kids', 'children', 'bébé'], target: '#gallery', label: 'Collection Enfant' },
        { keywords: ['femme', 'femmes', 'women', 'ladies'], target: 'collection-femme.html', label: 'Collection Femme', isPage: true },
        { keywords: ['galerie', 'gallery', 'photos', 'images', 'créations', 'realisations'], target: '#gallery', label: 'Galerie' },
        { keywords: ['service', 'services', 'sur mesure', 'mesure', 'personnalisé', 'custom'], target: '#services', label: 'Services' },
        { keywords: ['processus', 'process', 'méthode', 'étapes', 'comment', 'how'], target: '#process', label: 'Notre Processus' },
        { keywords: ['contact', 'contacter', 'téléphone', 'email', 'adresse', 'rendez-vous', 'rdv'], target: '#contact', label: 'Contact' },
        { keywords: ['à propos', 'about', 'histoire', 'qui sommes', 'notre histoire', 'atelier'], target: '#about', label: 'À Propos' },
        { keywords: ['kimono', 'tunique', 'kimonos', 'tuniques'], target: '#gallery', label: 'Kimono-Tunique' },
        { keywords: ['traditionnel', 'beldi', 'moderne', 'tradition'], target: '#services', label: 'Style Traditionnel' },
        { keywords: ['soie', 'silk', 'broderie', 'embroidery', 'tissu', 'fabric'], target: '#services', label: 'Matériaux' }
    ];

    if (searchToggle && searchDropdown) {
        searchToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            searchDropdown.classList.toggle('active');
            if (searchDropdown.classList.contains('active') && searchInput) {
                setTimeout(() => searchInput.focus(), 100);
            }
        });

        // Close on click outside
        document.addEventListener('click', function(e) {
            if (!searchDropdown.contains(e.target) && !searchToggle.contains(e.target)) {
                searchDropdown.classList.remove('active');
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchDropdown.classList.contains('active')) {
                searchDropdown.classList.remove('active');
            }
        });

        // Search form submission
        if (searchForm) {
            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const query = searchInput.value.toLowerCase().trim();

                if (query.length < 2) {
                    showSearchMessage('Entrez au moins 2 caractères');
                    return;
                }

                // Search for matching keywords
                let found = null;
                for (const item of searchData) {
                    for (const keyword of item.keywords) {
                        if (keyword.includes(query) || query.includes(keyword)) {
                            found = item;
                            break;
                        }
                    }
                    if (found) break;
                }

                if (found) {
                    searchDropdown.classList.remove('active');
                    searchInput.value = '';

                    if (found.isPage) {
                        // Redirect to another page
                        window.location.href = found.target;
                    } else {
                        // Scroll to section on current page
                        const targetElement = document.querySelector(found.target);
                        if (targetElement) {
                            const navbarHeight = navbar ? navbar.offsetHeight : 80;
                            const targetPosition = targetElement.offsetTop - navbarHeight;

                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });

                            // Highlight effect
                            targetElement.classList.add('search-highlight');
                            setTimeout(() => {
                                targetElement.classList.remove('search-highlight');
                            }, 2000);
                        }
                    }
                } else {
                    showSearchMessage('Aucun résultat pour "' + query + '"');
                }
            });
        }
    }

    // Show search message
    function showSearchMessage(message) {
        let msgEl = document.querySelector('.search-message');
        if (!msgEl) {
            msgEl = document.createElement('div');
            msgEl.className = 'search-message';
            searchDropdown.appendChild(msgEl);
        }
        msgEl.textContent = message;
        msgEl.style.display = 'block';
        setTimeout(() => {
            msgEl.style.display = 'none';
        }, 3000);
    }

    // ===================================
    // Navbar Scroll Effect
    // ===================================
    const isHomePage = document.querySelector('.hero') !== null;
    function handleScroll() {
        if (!isHomePage) {
            navbar.classList.add('scrolled');
            return;
        }
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    // ===================================
    // Smooth Scrolling for Anchor Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Contact Form Handling
    // ===================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Validate required fields
            if (!data.name || !data.email) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call delay
            setTimeout(() => {
                showNotification('Thank you! Your message has been sent. We will contact you soon.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // ===================================
    // Notification System
    // ===================================
    function showNotification(message, type = 'success') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            max-width: 400px;
            padding: 16px 24px;
            background: ${type === 'success' ? '#1E5631' : '#722F37'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 16px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;

        // Add animation keyframes
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        `;

        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOut 0.3s ease forwards';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // ===================================
    // Scroll Animations (Intersection Observer)
    // ===================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll(
        '.service-card, .gallery-item, .testimonial-card, .process-step, .about-content, .about-image'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateOnScroll.observe(el);
    });

    // Add animation styles
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(animationStyle);

    // ===================================
    // Active Navigation Link Highlight
    // ===================================
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // Add active link styles
    const activeLinkStyle = document.createElement('style');
    activeLinkStyle.textContent = `
        .nav-menu a.active {
            color: var(--primary, #C4818A) !important;
        }
        .nav-menu a.active::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(activeLinkStyle);

    // ===================================
    // Gallery Lightbox (Simple)
    // ===================================
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const label = this.querySelector('.gallery-label').textContent;
            const desc = this.querySelector('.gallery-desc').textContent;
            showLightbox(label, desc);
        });
    });

    function showLightbox(title, description) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <div class="lightbox-placeholder">
                    <span class="lightbox-icon">&#128247;</span>
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <small>Image would display here</small>
                </div>
            </div>
        `;

        lightbox.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(44, 24, 16, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;

        const content = lightbox.querySelector('.lightbox-content');
        content.style.cssText = `
            position: relative;
            max-width: 600px;
            width: 90%;
            background: white;
            border-radius: 16px;
            overflow: hidden;
        `;

        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.style.cssText = `
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(0,0,0,0.5);
            border: none;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            z-index: 1;
        `;

        const placeholder = lightbox.querySelector('.lightbox-placeholder');
        placeholder.style.cssText = `
            padding: 60px 40px;
            text-align: center;
            background: linear-gradient(135deg, #A0522D 0%, #5D2E0C 100%);
            color: white;
        `;

        const icon = lightbox.querySelector('.lightbox-icon');
        icon.style.cssText = `
            font-size: 48px;
            display: block;
            margin-bottom: 20px;
        `;

        // Add fadeIn animation
        if (!document.querySelector('#lightbox-styles')) {
            const style = document.createElement('style');
            style.id = 'lightbox-styles';
            style.textContent = `
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';

        // Close on click
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Close on Escape key
        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
                closeLightbox();
                document.removeEventListener('keydown', escHandler);
            }
        });

        function closeLightbox() {
            lightbox.style.animation = 'fadeOut 0.3s ease forwards';
            setTimeout(() => {
                lightbox.remove();
                document.body.style.overflow = '';
            }, 300);
        }

        // Add fadeOut animation
        const fadeOutStyle = document.createElement('style');
        fadeOutStyle.textContent = `
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(fadeOutStyle);
    }

    // ===================================
    // Parallax Effect for Hero
    // ===================================
    const hero = document.querySelector('.hero');

    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');

            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / 700);
            }
        });
    }

    // ===================================
    // Stagger Animation for Cards
    // ===================================
    function staggerAnimation() {
        const cards = document.querySelectorAll('.service-card, .testimonial-card');

        cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
        });
    }

    staggerAnimation();

    // ===================================
    // Shopping Cart Functionality
    // ===================================

    // Initialize cart from localStorage
    let cart = JSON.parse(localStorage.getItem('nadiaDahbyCart')) || [];

    // Cart elements
    const cartToggle = document.getElementById('cartToggle');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartClose = document.getElementById('cartClose');
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    // Open cart
    if (cartToggle) {
        cartToggle.addEventListener('click', function() {
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close cart functions
    function closeCart() {
        if (cartSidebar) cartSidebar.classList.remove('active');
        if (cartOverlay) cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (cartClose) {
        cartClose.addEventListener('click', closeCart);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('nadiaDahbyCart', JSON.stringify(cart));
    }

    // Update cart display
    function updateCartDisplay() {
        if (!cartItems || !cartCount || !cartTotal) return;

        // Update count
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        // Update items display
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="cart-empty">Votre panier est vide</p>';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-image">${item.image ? '<img src="' + item.image + '" alt="' + item.name + '" style="width:70px;height:70px;object-fit:cover;border-radius:4px;">' : '&#128090;'}</div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${item.price.toLocaleString()} DH</div>
                        <div class="cart-item-qty">
                            <button onclick="updateQuantity('${item.id}', -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity('${item.id}', 1)">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">&times;</button>
                </div>
            `).join('');
        }

        // Update total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toLocaleString() + ' DH';
    }

    // Make functions globally accessible
    window.addToCart = function(id, name, price, image) {
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1, image: image || null });
        }

        saveCart();
        updateCartDisplay();

        // Open cart sidebar
        if (cartSidebar) {
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Show feedback
        showCartNotification('Produit ajouté au panier!');
    };

    window.updateQuantity = function(id, change) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                cart = cart.filter(i => i.id !== id);
            }
            saveCart();
            updateCartDisplay();
        }
    };

    window.removeFromCart = function(id) {
        cart = cart.filter(item => item.id !== id);
        saveCart();
        updateCartDisplay();
    };

    // Show notification
    function showCartNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary-dark, #B8860B);
            color: white;
            padding: 12px 24px;
            border-radius: 30px;
            z-index: 10001;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            animation: slideUp 0.3s ease;
        `;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from { transform: translateX(-50%) translateY(20px); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Initial cart display
    updateCartDisplay();

    // ===================================
    // Créations Carousel - Auto scroll + arrows
    // ===================================
    const track = document.getElementById('creationsTrack');
    const prevBtn = document.getElementById('creationsPrev');
    const nextBtn = document.getElementById('creationsNext');

    if (track) {
        // Duplicate cards for seamless infinite loop
        track.innerHTML += track.innerHTML;

        let position = 0;
        const halfWidth = track.scrollWidth / 2;

        function scrollCarousel() {
            position += 0.8;
            if (position >= halfWidth) {
                position = 0;
            }
            track.style.transform = `translateX(-${position}px)`;
            requestAnimationFrame(scrollCarousel);
        }

        requestAnimationFrame(scrollCarousel);
    }

    // ===================================
    // Product Slider (Collection Pages)
    // ===================================
    document.querySelectorAll('.product-slider').forEach(slider => {
        const track = slider.querySelector('.product-slider-track');
        const dots = slider.querySelectorAll('.dot');
        let currentSlide = 0;
        let startX = 0;
        let isDragging = false;
        let didSwipe = false;

        function goToSlide(index) {
            currentSlide = index;
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); goToSlide(i); });
        });

        // Prevent parent link navigation after swipe
        slider.addEventListener('click', (e) => {
            if (didSwipe) { e.preventDefault(); e.stopPropagation(); didSwipe = false; }
        }, true);

        // Swipe support
        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            didSwipe = false;
        });

        slider.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            const diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) {
                didSwipe = true;
                if (diff > 0 && currentSlide < 1) goToSlide(1);
                else if (diff < 0 && currentSlide > 0) goToSlide(0);
            }
            isDragging = false;
        });

        // Mouse drag support
        slider.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            didSwipe = false;
            e.preventDefault();
        });

        slider.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            const diff = startX - e.clientX;
            if (Math.abs(diff) > 40) {
                didSwipe = true;
                if (diff > 0 && currentSlide < 1) goToSlide(1);
                else if (diff < 0 && currentSlide > 0) goToSlide(0);
            }
            isDragging = false;
        });

        slider.addEventListener('mouseleave', () => { isDragging = false; });
    });

    // ===================================
    // Video Parallax Gallery
    // ===================================
    const parallaxItems = document.querySelectorAll('.video-parallax-item');

    if (parallaxItems.length > 0) {
        const parallaxObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.15 });

        parallaxItems.forEach(item => parallaxObserver.observe(item));
    }

    console.log('Nadia Dahby website loaded successfully!');
});
