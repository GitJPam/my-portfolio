/* ================================================================
   JUAN PABLO ACOSTA MURILLO — JAVASCRIPT
   Animations, Interactions & Effects
   ================================================================ */

'use strict';

// ======================== I18N — TRANSLATIONS ========================
const i18nData = {
    es: {
        'nav-sobre': 'Sobre Mí', 'nav-habilidades': 'Habilidades',
        'nav-experiencia': 'Experiencia', 'nav-formacion': 'Formación', 'nav-contacto': 'Contacto',
        'hero-badge': '🇨🇴 Disponible para nuevas oportunidades',
        'hero-subtitle': 'Ingeniero de Sistemas con <strong>+15 años de experiencia</strong> en desarrollo de soluciones empresariales. Especializado en integraciones <span class="text-accent">EDI/EDIFACT</span>, transformación de datos, facturación electrónica y soporte crítico a producción.',
        'cta-contact': 'Contactar', 'cta-cv': 'Ver / Descargar CV',
        'stat-exp': 'Años de exp.', 'stat-int': 'Integraciones', 'stat-soporte': 'Nivel Soporte',
        'label-sobre': '👨‍💻 Perfil Profesional',
        'title-sobre': 'Sobre <span class="text-accent">Mí</span>',
        'about-p1': 'Soy un <strong class="text-accent">Ingeniero de Sistemas</strong> con más de 15 años de experiencia construyendo soluciones tecnológicas robustas en entornos empresariales exigentes. Mi carrera se ha desarrollado principalmente en <strong>Carvajal Tecnología y Servicios</strong>, donde evolucioné desde QA hasta Ingeniero Senior de Integraciones.',
        'label-contacto': '📬 Hablemos',
        'cta-title': '¿Tienes un proyecto o <span class="text-accent">una oportunidad</span>?',
        'cta-subtitle': 'Estoy disponible para nuevos retos profesionales. Ya sea una integración compleja, un proyecto backend o un equipo que necesite soporte técnico de nivel, me encantará escucharte.',
        'formacion-col1': 'Formación Académica',
        'footer-tagline': 'Ingeniero Backend | Integraciones Empresariales',
        'cv-file': 'cv/CV_Juan_Pablo_Acosta_Murillo_es.pdf',
        'roles': ['Ingeniero Backend', 'Especialista EDI/EDIFACT', 'Ingeniero de Integraciones', 'Experto SQL Server', 'Soporte Nivel 3'],
    },
    en: {
        'nav-sobre': 'About Me', 'nav-habilidades': 'Skills',
        'nav-experiencia': 'Experience', 'nav-formacion': 'Education', 'nav-contacto': 'Contact',
        'hero-badge': '🇨🇴 Open to new opportunities',
        'hero-subtitle': 'Systems Engineer with <strong>+15 years of experience</strong> in enterprise software development. Specialized in <span class="text-accent">EDI/EDIFACT</span> integrations, data transformation, electronic invoicing, and critical production support.',
        'cta-contact': 'Contact Me', 'cta-cv': 'View / Download CV',
        'stat-exp': 'Years of exp.', 'stat-int': 'Integrations', 'stat-soporte': 'Support Level',
        'label-sobre': '👨‍💻 Professional Profile',
        'title-sobre': 'About <span class="text-accent">Me</span>',
        'about-p1': 'I am a <strong class="text-accent">Systems Engineer</strong> with over 15 years of experience building robust technological solutions in demanding enterprise environments. My career has developed mainly at <strong>Carvajal Tecnología y Servicios</strong>, where I evolved from QA to Senior Integration Engineer.',
        'label-contacto': '📬 Let\'s Talk',
        'cta-title': 'Do you have a project or <span class="text-accent">an opportunity</span>?',
        'cta-subtitle': 'I am available for new professional challenges. Whether it\'s a complex integration, a backend project, or a team that needs top-level technical support, I\'d love to hear from you.',
        'formacion-col1': 'Academic Education',
        'footer-tagline': 'Backend Engineer | Enterprise Integrations',
        'cv-file': 'cv/CV_Juan_Pablo_Acosta_Murillo_en.pdf',
        'roles': ['Backend Engineer', 'EDI/EDIFACT Specialist', 'Integration Engineer', 'SQL Server Expert', 'Level 3 Support'],
    },
    fr: {
        'nav-sobre': 'À Propos', 'nav-habilidades': 'Compétences',
        'nav-experiencia': 'Expérience', 'nav-formacion': 'Formation', 'nav-contacto': 'Contact',
        'hero-badge': '🇨🇴 Disponible pour de nouvelles opportunités',
        'hero-subtitle': 'Ingénieur en Systèmes avec <strong>+15 ans d\'expérience</strong> dans le développement de solutions d\'entreprise. Spécialisé dans les intégrations <span class="text-accent">EDI/EDIFACT</span>, la transformation de données, la facturation électronique et le support critique en production.',
        'cta-contact': 'Me Contacter', 'cta-cv': 'Voir / Télécharger CV',
        'stat-exp': 'Ans d\'expér.', 'stat-int': 'Intégrations', 'stat-soporte': 'Niveau Support',
        'label-sobre': '👨‍💻 Profil Professionnel',
        'title-sobre': 'À Propos de <span class="text-accent">Moi</span>',
        'about-p1': 'Je suis un <strong class="text-accent">Ingénieur en Systèmes</strong> avec plus de 15 ans d\'expérience dans la construction de solutions technologiques robustes en environnements d\'entreprise exigeants. Ma carrière s\'est développée principalement chez <strong>Carvajal Tecnología y Servicios</strong>, où j\'ai évolué de QA à Ingénieur Senior en Intégrations.',
        'label-contacto': '📬 Parlons',
        'cta-title': 'Vous avez un projet ou <span class="text-accent">une opportunité</span> ?',
        'cta-subtitle': 'Je suis disponible pour de nouveaux défis professionnels. Qu\'il s\'agisse d\'une intégration complexe, d\'un projet backend ou d\'une équipe nécessitant un support technique de haut niveau, je serais ravi de vous écouter.',
        'formacion-col1': 'Formation Académique',
        'footer-tagline': 'Ingénieur Backend | Intégrations d\'Entreprise',
        'cv-file': 'cv/CV_Juan_Pablo_Acosta_Murillo_fr.pdf',
        'roles': ['Ingénieur Backend', 'Spécialiste EDI/EDIFACT', 'Ingénieur d\'Intégration', 'Expert SQL Server', 'Support Niveau 3'],
    }
};

let currentLang = 'es';
let roleCyclerRoles = i18nData.es.roles;
let roleCyclerIdx = 0;

function setLanguage(lang) {
    if (!i18nData[lang]) return;
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    const t = i18nData[lang];

    // Update text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    // Update HTML elements (support inner HTML with tags)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Update CV button link
    const cvBtn = document.getElementById('ctaCV');
    if (cvBtn && t['cv-file']) cvBtn.href = t['cv-file'];

    // Update role cycler language
    roleCyclerRoles = t['roles'] || i18nData.es.roles;
    roleCyclerIdx = 0;
    const roleCyclerEl = document.getElementById('roleCycler');
    if (roleCyclerEl) roleCyclerEl.textContent = roleCyclerRoles[0];

    // Update active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
}

function initLanguage() {
    const saved = localStorage.getItem('portfolio-lang') || 'es';
    // Wire up lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });
    setLanguage(saved);
}


// ======================== DEBOUNCE UTILITY ========================
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// ======================== ANIMATED COUNTER ========================
function animateCounter(element, target, duration = 2000) {
    const startTime = performance.now();
    const start = 0;

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (target - start) * ease);
        element.textContent = current;
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

// ======================== PARTICLE SYSTEM ========================
function initParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;

    const count = window.innerWidth < 768 ? 20 : 50;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = (Math.random() * 20) + 's';
        p.style.animationDuration = (15 + Math.random() * 10) + 's';
        // Vary opacity and size slightly
        const size = 1 + Math.random() * 2.5;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.opacity = (0.2 + Math.random() * 0.5).toString();
        fragment.appendChild(p);
    }

    container.appendChild(fragment);
}

// ======================== NAVBAR ========================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!navbar) return;

    const onScroll = debounce(() => {
        const scrollY = window.scrollY;

        // Navbar scroll state
        if (scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top
        if (backToTop) {
            if (scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    }, 10);

    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile menu toggle
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('open');
            mobileMenu.classList.toggle('open');
            mobileToggle.classList.toggle('active');
            document.body.style.overflow = isOpen ? '' : 'hidden';
        });
    }

    // Back to top button
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

window.closeMobileMenu = function () {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileToggle = document.getElementById('mobileToggle');
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (mobileToggle) mobileToggle.classList.remove('active');
    document.body.style.overflow = '';
};

// ======================== SCROLL REVEAL ========================
function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    const revealCards = document.querySelectorAll('.reveal-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    };

    // Reveal sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealEls.forEach(el => sectionObserver.observe(el));

    // Reveal cards with stagger
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Find siblings and stagger them
                const parent = entry.target.parentElement;
                const siblings = parent.querySelectorAll('.reveal-card:not(.visible)');
                siblings.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 100);
                });
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealCards.forEach(card => cardObserver.observe(card));

    // Animate counters when hero stats visible
    const statValues = document.querySelectorAll('.stat-value');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target, 2200);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statValues.forEach(el => counterObserver.observe(el));
}

// ======================== FLIP CARDS — MOBILE ========================
function initFlipCards() {
    const flipCards = document.querySelectorAll('.service-card-flip');

    // On mobile, use click/tap to flip
    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                // Close all others
                flipCards.forEach(other => {
                    if (other !== card) other.classList.remove('flipped');
                });
                card.classList.toggle('flipped');
            }
        });

        // Touch events for better mobile UX
        let touchStartX = 0;
        let touchStartY = 0;

        card.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        card.addEventListener('touchend', (e) => {
            const dx = Math.abs(e.changedTouches[0].clientX - touchStartX);
            const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
            // Only flip if not scrolling
            if (dx < 10 && dy < 10 && window.innerWidth <= 768) {
                flipCards.forEach(other => {
                    if (other !== card) other.classList.remove('flipped');
                });
                card.classList.toggle('flipped');
            }
        });
    });
}

// ======================== ROLE CYCLER ========================
function initRoleCycler() {
    const el = document.getElementById('roleCycler');
    if (!el) return;

    const roles = roleCyclerRoles;
    let idx = roleCyclerIdx;

    setInterval(() => {
        el.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        el.style.opacity = '0';
        el.style.transform = 'translateY(-12px)';

        setTimeout(() => {
            idx = (idx + 1) % roleCyclerRoles.length;
            el.textContent = roleCyclerRoles[idx];
            roleCyclerIdx = idx;
            el.style.transform = 'translateY(12px)';
            el.style.opacity = '0';

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                });
            });
        }, 350);
    }, 2800);
}

// ======================== SMOOTH SCROLL FOR NAV ========================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
                const targetY = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
                window.scrollTo({ top: targetY, behavior: 'smooth' });
            }
        });
    });
}

// ======================== PARALLAX (SUBTLE) ========================
function initParallax() {
    const heroVisual = document.getElementById('heroVisual');
    if (!heroVisual || window.innerWidth < 1024) return;

    const onScroll = debounce(() => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            const parallaxOffset = scrolled * 0.08;
            heroVisual.style.transform = `translateY(${parallaxOffset}px)`;
        }
    }, 5);

    window.addEventListener('scroll', onScroll, { passive: true });
}

// ======================== ACTIVE NAV LINK ========================
function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links .nav-link, .mobile-menu .nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' });

    sections.forEach(section => observer.observe(section));
}

// ======================== CARD GLOW ON MOUSE MOVE ========================
function initCardGlow() {
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.background = `
                radial-gradient(circle at ${x}% ${y}%, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0.04) 40%, rgba(59,130,246,0.07) 100%)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = '';
        });
    });
}

// ======================== TECH PILL RIPPLE ========================
function initTechPills() {
    const pills = document.querySelectorAll('.tech-pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pill.style.transform = 'scale(0.95)';
            setTimeout(() => {
                pill.style.transform = '';
            }, 150);
        });
    });
}

// ======================== INIT ========================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initLanguage();
    initNavbar();
    initScrollReveal();
    initFlipCards();
    initRoleCycler();
    initSmoothScroll();
    initParallax();
    initActiveNavLinks();
    initCardGlow();
    initTechPills();

    // Trigger initial scroll to set navbar state
    window.dispatchEvent(new Event('scroll'));

    console.log('%c🚀 Juan Pablo Acosta | Portfolio', 'color:#3B82F6;font-size:16px;font-weight:bold;');
    console.log('%cIngeniero Backend | Integraciones Empresariales', 'color:#60A5FA;font-size:13px;');
});
