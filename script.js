/* ========================================
   NABU HOME - JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Translations
    // ========================================
    const translations = {
        es: {
            nav: {
                home: 'Inicio',
                services: 'Servicios',
                about: 'Quiénes Somos',
                portfolio: 'Portafolio',
                contact: 'Contacto'
            },
            hero: {
                title: 'Muebles europeos modernos para hogares sofisticados',
                subtitle: 'Descubre la excelencia del diseño europeo en el corazón de Miami',
                cta: 'Explora Catálogo'
            },
            featured: {
                title: 'Productos Destacados',
                subtitle: 'Piezas exclusivas seleccionadas para ti'
            },
            product: {
                view: 'Ver',
                sofa: 'Sofá Contemporáneo',
                bed: 'Cama Europea',
                dining: 'Set Comedor',
                desk: 'Escritorio Design',
                whatsapp: 'Consultar por WhatsApp',
                sofaDesc: 'Sofá de diseño italiano con tapicería premium en tela importada. Estructura de madera maciza con acabado en roble natural. Cojines de espuma de alta densidad para máximo confort. Disponible en múltiples colores.',
                bedDesc: 'Cama king size con cabecero tapizado en cuero genuino. Base reforzada con listones de madera europea. Incluye sistema de amortiguación silenciosa. Diseño minimalista que combina con cualquier decoración.',
                diningDesc: 'Mesa de comedor extensible para 6-8 personas con superficie de mármol italiano. Sillas ergonómicas con estructura de acero inoxidable. Acabados en oro cepillado. Ideal para cenas elegantes.',
                deskDesc: 'Escritorio ejecutivo con superficie de vidrio templado. Estructura de aluminio con acabado mate. Incluye cajonera integrada con sistema soft-close. Diseño ergonómico para home office premium.'
            },
            category: {
                living: 'Living',
                bedroom: 'Dormitorio',
                dining: 'Comedor',
                office: 'Oficina'
            },
            services: {
                title: 'Nuestros Servicios',
                subtitle: 'Experiencia personalizada en cada detalle',
                catalog: 'Venta de Catálogos',
                catalogDesc: 'Accede a nuestros catálogos exclusivos con las últimas tendencias europeas',
                custom: 'Diseños Personalizados',
                customDesc: 'Creamos piezas únicas adaptadas a tus necesidades y espacio',
                showroom: 'Showroom Privado',
                showroomDesc: 'Visita nuestro showroom en Miami y experimenta la calidad en persona',
                delivery: 'Entrega Premium',
                deliveryDesc: 'Servicio de entrega y montaje profesional en toda Florida'
            },
            about: {
                title: 'Quiénes Somos',
                description: 'Nabu Home es tu destino premium para muebles europeos de alta gama en Miami. Con años de experiencia en el sector del lujo, nos especializamos en traer las piezas más exclusivas y sofisticadas directamente desde los mejores fabricantes de Europa.',
                description2: 'Cada mueble en nuestro showroom es seleccionado cuidadosamente, garantizando calidad excepcional, diseño vanguardista y materiales de primera calidad. Creemos que tu hogar merece lo mejor del diseño europeo.',
                hours: 'Lun-Vie: 10:00 AM - 6:00 PM'
            },
            portfolio: {
                title: 'Portafolio',
                subtitle: 'Explora nuestra colección exclusiva'
            },
            filter: {
                all: 'Todos',
                living: 'Living',
                bedroom: 'Dormitorio',
                dining: 'Comedor',
                office: 'Oficina'
            },
            contact: {
                title: 'Contacto',
                subtitle: 'Estamos aquí para ayudarte',
                address: 'Dirección',
                phone: 'Teléfono',
                hours: 'Horarios',
                hoursValue: 'Lunes - Viernes: 10:00 AM - 6:00 PM',
                email: 'Email'
            },
            footer: {
                rights: 'Todos los derechos reservados.',
                tagline: 'Muebles europeos modernos para hogares sofisticados',
                quickLinks: 'Enlaces Rápidos',
                contact: 'Contacto',
                hours: 'Lun-Vie: 10AM - 6PM',
                follow: 'Síguenos',
                privacy: 'Política de Privacidad',
                cookies: 'Política de Cookies'
            },
            privacy: {
                title: 'Política de Privacidad',
                p1: 'En Nabu Home, valoramos su privacidad y nos comprometemos a proteger sus datos personales. Esta política explica cómo recopilamos, usamos y protegemos su información.',
                collectTitle: 'Información que recopilamos',
                p2: 'Recopilamos información que usted nos proporciona directamente, como nombre, correo electrónico, número de teléfono y dirección cuando se comunica con nosotros o realiza una consulta.',
                useTitle: 'Cómo usamos su información',
                p3: 'Usamos su información para responder a sus consultas, proporcionar información sobre nuestros productos y servicios, y mejorar su experiencia en nuestro showroom.',
                protectTitle: 'Protección de datos',
                p4: 'Implementamos medidas de seguridad adecuadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.',
                rightsTitle: 'Sus derechos',
                p5: 'Usted tiene derecho a acceder, rectificar o eliminar sus datos personales. Para ejercer estos derechos, contáctenos en info@nabuhome.com.'
            },
            cookies: {
                title: 'Política de Cookies',
                p1: 'Este sitio web utiliza cookies para mejorar su experiencia de navegación y analizar el tráfico del sitio.',
                whatTitle: '¿Qué son las cookies?',
                p2: 'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Nos ayudan a recordar sus preferencias y mejorar su experiencia.',
                typesTitle: 'Tipos de cookies que utilizamos',
                p3: 'Cookies esenciales: Necesarias para el funcionamiento básico del sitio web.',
                p4: 'Cookies analíticas: Nos ayudan a entender cómo los visitantes interactúan con el sitio web.',
                p5: 'Cookies de preferencias: Permiten que el sitio web recuerde sus preferencias de idioma y otras configuraciones.',
                manageTitle: 'Gestión de cookies',
                p6: 'Puede controlar y/o eliminar las cookies a través de la configuración de su navegador. Tenga en cuenta que si deshabilita las cookies, algunas funciones del sitio pueden no funcionar correctamente.'
            },
            cookieBanner: {
                text: 'Utilizamos cookies para mejorar su experiencia. Al continuar navegando, acepta nuestra política de cookies.',
                decline: 'Rechazar',
                accept: 'Aceptar'
            }
        },
        en: {
            nav: {
                home: 'Home',
                services: 'Services',
                about: 'About Us',
                portfolio: 'Portfolio',
                contact: 'Contact'
            },
            hero: {
                title: 'Modern European furniture for sophisticated homes',
                subtitle: 'Discover the excellence of European design in the heart of Miami',
                cta: 'Explore Catalog'
            },
            featured: {
                title: 'Featured Products',
                subtitle: 'Exclusive pieces selected for you'
            },
            product: {
                view: 'View',
                sofa: 'Contemporary Sofa',
                bed: 'European Bed',
                dining: 'Dining Set',
                desk: 'Design Desk',
                whatsapp: 'Inquire via WhatsApp',
                sofaDesc: 'Italian design sofa with premium imported fabric upholstery. Solid wood frame with natural oak finish. High-density foam cushions for maximum comfort. Available in multiple colors.',
                bedDesc: 'King size bed with genuine leather upholstered headboard. Reinforced base with European wood slats. Includes silent damping system. Minimalist design that combines with any decor.',
                diningDesc: 'Extendable dining table for 6-8 people with Italian marble surface. Ergonomic chairs with stainless steel frame. Brushed gold finishes. Ideal for elegant dinners.',
                deskDesc: 'Executive desk with tempered glass surface. Aluminum frame with matte finish. Includes integrated drawer unit with soft-close system. Ergonomic design for premium home office.'
            },
            category: {
                living: 'Living',
                bedroom: 'Bedroom',
                dining: 'Dining',
                office: 'Office'
            },
            services: {
                title: 'Our Services',
                subtitle: 'Personalized experience in every detail',
                catalog: 'Catalog Sales',
                catalogDesc: 'Access our exclusive catalogs with the latest European trends',
                custom: 'Custom Designs',
                customDesc: 'We create unique pieces adapted to your needs and space',
                showroom: 'Private Showroom',
                showroomDesc: 'Visit our Miami showroom and experience the quality in person',
                delivery: 'Premium Delivery',
                deliveryDesc: 'Professional delivery and assembly service throughout Florida'
            },
            about: {
                title: 'About Us',
                description: 'Nabu Home is your premium destination for high-end European furniture in Miami. With years of experience in the luxury sector, we specialize in bringing the most exclusive and sophisticated pieces directly from the best European manufacturers.',
                description2: 'Each piece of furniture in our showroom is carefully selected, guaranteeing exceptional quality, cutting-edge design, and top-quality materials. We believe your home deserves the best of European design.',
                hours: 'Mon-Fri: 10:00 AM - 6:00 PM'
            },
            portfolio: {
                title: 'Portfolio',
                subtitle: 'Explore our exclusive collection'
            },
            filter: {
                all: 'All',
                living: 'Living',
                bedroom: 'Bedroom',
                dining: 'Dining',
                office: 'Office'
            },
            contact: {
                title: 'Contact',
                subtitle: 'We are here to help you',
                address: 'Address',
                phone: 'Phone',
                hours: 'Hours',
                hoursValue: 'Monday - Friday: 10:00 AM - 6:00 PM',
                email: 'Email'
            },
            footer: {
                rights: 'All rights reserved.',
                tagline: 'Modern European furniture for sophisticated homes',
                quickLinks: 'Quick Links',
                contact: 'Contact',
                hours: 'Mon-Fri: 10AM - 6PM',
                follow: 'Follow Us',
                privacy: 'Privacy Policy',
                cookies: 'Cookie Policy'
            },
            privacy: {
                title: 'Privacy Policy',
                p1: 'At Nabu Home, we value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect your information.',
                collectTitle: 'Information We Collect',
                p2: 'We collect information that you provide directly, such as name, email, phone number, and address when you contact us or make an inquiry.',
                useTitle: 'How We Use Your Information',
                p3: 'We use your information to respond to your inquiries, provide information about our products and services, and improve your experience at our showroom.',
                protectTitle: 'Data Protection',
                p4: 'We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.',
                rightsTitle: 'Your Rights',
                p5: 'You have the right to access, rectify, or delete your personal data. To exercise these rights, contact us at info@nabuhome.com.'
            },
            cookies: {
                title: 'Cookie Policy',
                p1: 'This website uses cookies to improve your browsing experience and analyze site traffic.',
                whatTitle: 'What are cookies?',
                p2: 'Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and improve your experience.',
                typesTitle: 'Types of cookies we use',
                p3: 'Essential cookies: Necessary for the basic functioning of the website.',
                p4: 'Analytical cookies: Help us understand how visitors interact with the website.',
                p5: 'Preference cookies: Allow the website to remember your language preferences and other settings.',
                manageTitle: 'Cookie management',
                p6: 'You can control and/or delete cookies through your browser settings. Note that if you disable cookies, some site functions may not work properly.'
            },
            cookieBanner: {
                text: 'We use cookies to improve your experience. By continuing to browse, you accept our cookie policy.',
                decline: 'Decline',
                accept: 'Accept'
            }
        }
    };

    let currentLang = 'es';

    // Language Toggle
    const langToggle = document.getElementById('langToggle');
    const langOptions = langToggle.querySelectorAll('.lang-option');

    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const selectedLang = this.getAttribute('data-lang');
            if (selectedLang !== currentLang) {
                currentLang = selectedLang;
                updateLanguage(currentLang);
            }
        });
    });

    function updateLanguage(lang) {
        // Update active state
        langOptions.forEach(option => {
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(function(element) {
            const key = element.getAttribute('data-i18n');
            const keys = key.split('.');
            let translation = translations[lang];

            for (const k of keys) {
                translation = translation[k];
            }

            if (translation) {
                element.textContent = translation;
            }
        });

        // Save preference
        localStorage.setItem('nabu-lang', lang);
    }

    // Load saved language preference
    const savedLang = localStorage.getItem('nabu-lang') || 'es';
    if (savedLang !== 'es') {
        updateLanguage(savedLang);
    }


    // ========================================
    // Mobile Menu
    // ========================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('nav');

    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-list a').forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });


    // ========================================
    // Header Scroll Effect
    // ========================================
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });


    // ========================================
    // Hero Slider
    // ========================================
    const slides = document.querySelectorAll('.hero-slide');
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');
    const heroDots = document.getElementById('heroDots');
    
    let currentSlide = 0;
    let slideInterval;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('hero-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        heroDots.appendChild(dot);
    });

    const dots = document.querySelectorAll('.hero-dot');

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            dots[index].classList.remove('active');
        });
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
        resetInterval();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    sliderNext.addEventListener('click', nextSlide);
    sliderPrev.addEventListener('click', prevSlide);

    // Start auto-play
    startInterval();

    // Pause on hover
    const hero = document.getElementById('inicio');
    hero.addEventListener('mouseenter', () => clearInterval(slideInterval));
    hero.addEventListener('mouseleave', startInterval);


    // ========================================
    // Portfolio Filter
    // ========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Initialize portfolio - show all items on page load
    function initPortfolio() {
        portfolioItems.forEach(item => {
            item.classList.add('show');
            item.classList.remove('hide');
        });
    }

    // Run initialization
    initPortfolio();

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            });
        });
    });


    // ========================================
    // Lightbox
    // ========================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    let lightboxImages = [];
    let currentLightboxIndex = 0;

    // Collect all portfolio images
    portfolioItems.forEach((item, index) => {
        const img = item.querySelector('img');
        lightboxImages.push(img.src);
        
        item.addEventListener('click', function() {
            currentLightboxIndex = index;
            openLightbox(img.src);
        });
    });

    function openLightbox(src) {
        lightboxImage.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showLightboxImage(index) {
        currentLightboxIndex = index;
        lightboxImage.src = lightboxImages[currentLightboxIndex];
    }

    function nextLightboxImage() {
        const newIndex = (currentLightboxIndex + 1) % lightboxImages.length;
        showLightboxImage(newIndex);
    }

    function prevLightboxImage() {
        const newIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
        showLightboxImage(newIndex);
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', nextLightboxImage);
    lightboxPrev.addEventListener('click', prevLightboxImage);

    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextLightboxImage();
        } else if (e.key === 'ArrowLeft') {
            prevLightboxImage();
        }
    });


    // ========================================
    // Scroll to Top
    // ========================================
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // ========================================
    // Scroll Animations
    // ========================================
    const animateElements = document.querySelectorAll('.section-title, .section-subtitle, .product-card, .service-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });


    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // ========================================
    // Lazy Loading Images (Fallback)
    // ========================================
    if ('loading' in HTMLImageElement.prototype === false) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }


    // ========================================
    // Parallax Effect for Hero
    // ========================================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });


    // ========================================
    // Contact Info Animation
    // ========================================
    const contactCards = document.querySelectorAll('.contact-card');

    const contactObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
                contactObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    contactCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-20px)';
        card.style.transition = 'all 0.5s ease';
        contactObserver.observe(card);
    });


    // ========================================
    // Product Modal
    // ========================================
    const productModal = document.getElementById('productModal');
    const modalClose = document.getElementById('modalClose');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDesc = document.getElementById('modalDesc');
    const modalPrice = document.getElementById('modalPrice');
    const modalWhatsapp = document.getElementById('modalWhatsapp');
    const productCards = document.querySelectorAll('.product-card');

    // Product translations
    const productTranslations = {
        es: {
            'Sofá Contemporáneo': { title: 'Sofá Contemporáneo', desc: 'Sofá de diseño italiano con tapicería premium en tela importada. Estructura de madera maciza con acabado en roble natural. Cojines de espuma de alta densidad para máximo confort. Disponible en múltiples colores.' },
            'Cama Europea': { title: 'Cama Europea', desc: 'Cama king size con cabecero tapizado en cuero genuino. Base reforzada con listones de madera europea. Incluye sistema de amortiguación silenciosa. Diseño minimalista que combina con cualquier decoración.' },
            'Set Comedor': { title: 'Set Comedor', desc: 'Mesa de comedor extensible para 6-8 personas con superficie de mármol italiano. Sillas ergonómicas con estructura de acero inoxidable. Acabados en oro cepillado. Ideal para cenas elegantes.' },
            'Escritorio Design': { title: 'Escritorio Design', desc: 'Escritorio ejecutivo con superficie de vidrio templado. Estructura de aluminio con acabado mate. Incluye cajonera integrada con sistema soft-close. Diseño ergonómico para home office premium.' }
        },
        en: {
            'Sofá Contemporáneo': { title: 'Contemporary Sofa', desc: 'Italian design sofa with premium imported fabric upholstery. Solid wood frame with natural oak finish. High-density foam cushions for maximum comfort. Available in multiple colors.' },
            'Cama Europea': { title: 'European Bed', desc: 'King size bed with genuine leather upholstered headboard. Reinforced base with European wood slats. Includes silent damping system. Minimalist design that combines with any decor.' },
            'Set Comedor': { title: 'Dining Set', desc: 'Extendable dining table for 6-8 people with Italian marble surface. Ergonomic chairs with stainless steel frame. Brushed gold finishes. Ideal for elegant dinners.' },
            'Escritorio Design': { title: 'Design Desk', desc: 'Executive desk with tempered glass surface. Aluminum frame with matte finish. Includes integrated drawer unit with soft-close system. Ergonomic design for premium home office.' }
        }
    };

    productCards.forEach(card => {
        const viewBtn = card.querySelector('.btn-view');
        viewBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openProductModal(card);
        });

        card.addEventListener('click', function() {
            openProductModal(card);
        });
    });

    function openProductModal(card) {
        const title = card.getAttribute('data-product-title');
        const price = card.getAttribute('data-product-price');
        const image = card.getAttribute('data-product-image');
        const category = card.getAttribute('data-category');

        // Get translated content
        const translated = productTranslations[currentLang][title] || { title: title, desc: '' };

        modalImg.src = image;
        modalImg.alt = translated.title;
        modalTitle.textContent = translated.title;
        modalDesc.textContent = translated.desc;
        modalPrice.textContent = price;

        // Set category text
        const categoryTexts = {
            living: currentLang === 'es' ? 'Living' : 'Living',
            bedroom: currentLang === 'es' ? 'Dormitorio' : 'Bedroom',
            dining: currentLang === 'es' ? 'Comedor' : 'Dining',
            office: currentLang === 'es' ? 'Oficina' : 'Office'
        };
        modalCategory.textContent = categoryTexts[category] || category;

        // Update WhatsApp link with product name
        const whatsappMsg = currentLang === 'es'
            ? `Hola, me interesa más información sobre: ${translated.title}`
            : `Hello, I'm interested in more information about: ${translated.title}`;
        modalWhatsapp.href = `https://wa.me/19548257671?text=${encodeURIComponent(whatsappMsg)}`;

        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
        productModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeProductModal);

    productModal.addEventListener('click', function(e) {
        if (e.target === productModal) {
            closeProductModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && productModal.classList.contains('active')) {
            closeProductModal();
        }
    });


    // ========================================
    // Legal Modals (Privacy & Cookies)
    // ========================================
    const privacyModal = document.getElementById('privacyModal');
    const cookiesModal = document.getElementById('cookiesModal');
    const privacyLinks = document.querySelectorAll('[data-modal="privacyModal"]');
    const cookiesLinks = document.querySelectorAll('[data-modal="cookiesModal"]');
    const legalModalCloses = document.querySelectorAll('.legal-modal-close');

    // Open privacy modal
    document.querySelectorAll('[data-i18n="footer.privacy"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            privacyModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Open cookies modal
    document.querySelectorAll('[data-i18n="footer.cookies"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            cookiesModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close legal modals
    legalModalCloses.forEach(btn => {
        btn.addEventListener('click', function() {
            privacyModal.classList.remove('active');
            cookiesModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close on background click
    [privacyModal, cookiesModal].forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            privacyModal.classList.remove('active');
            cookiesModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });


    // ========================================
    // Cookie Banner
    // ========================================
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccept = document.getElementById('cookieAccept');
    const cookieDecline = document.getElementById('cookieDecline');

    // Check if user already made a choice
    const cookieChoice = localStorage.getItem('nabu-cookie-consent');

    if (!cookieChoice) {
        // Show banner after 1 second
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    cookieAccept.addEventListener('click', function() {
        localStorage.setItem('nabu-cookie-consent', 'accepted');
        cookieBanner.classList.remove('show');
    });

    cookieDecline.addEventListener('click', function() {
        localStorage.setItem('nabu-cookie-consent', 'declined');
        cookieBanner.classList.remove('show');
    });


    // ========================================
    // Console Welcome
    // ========================================
    console.log('%c NABU HOME ', 'background: #D4AF37; color: #fff; font-size: 20px; padding: 10px;');
    console.log('%c European Luxury Furniture Miami ', 'color: #1A1A1A; font-size: 14px;');
    console.log('%c 1900 N Bayshore Dr, Miami FL 33132 ', 'color: #666; font-size: 12px;');
    console.log('%c 📞 954-825-7671 ', 'color: #666; font-size: 12px;');
});
