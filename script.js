// =====================
// DOM Elements
// =====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const notification = document.getElementById('notification');

// =====================
// Mobile Navigation
// =====================
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        if (navMenu) navMenu.classList.toggle('active');
    });
}

// Close menu when link is clicked
if (navLinks) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });
}

// =====================
// Active Navigation Link & Scroll Brand Animation
// =====================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const scrollBrandText = document.querySelector('.scroll-brand-text');
    const heroBrand = document.querySelector('.hero-brand');
    
    // Get hero section and calculate scroll animation
    const heroSection = document.querySelector('.hero');
    const heroBottom = heroSection.offsetTop + heroSection.clientHeight;
    const scrollProgress = Math.min(window.pageYOffset / (heroBottom - window.innerHeight), 1);
    
    // Animate scroll brand text opacity
    if (scrollBrandText) {
        if (scrollProgress > 0.1) {
            scrollBrandText.classList.add('show');
        } else {
            scrollBrandText.classList.remove('show');
        }
    }
    
    // Fade out hero brand as you scroll
    if (heroBrand) {
        heroBrand.style.opacity = Math.max(1 - scrollProgress * 1.5, 0);
    }

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// =====================
// Form Validation & Submission
// =====================
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validatePhone = (phone) => {
    const re = /^[0-9\s\-\+\(\)]+$/;
    return phone === '' || re.test(phone);
};

const showError = (field, message) => {
    const formGroup = field.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    formGroup.classList.add('error');
    errorMessage.textContent = message;
};

const removeError = (field) => {
    const formGroup = field.parentElement;
    formGroup.classList.remove('error');
};

const showNotification = (message, type = 'success') => {
    notification.textContent = message;
    notification.className = `notification ${type} show`;

    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
};

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const formMessage = document.querySelector('.form-message');

    // Reset previous errors
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
    });

    let isValid = true;

    // Validate name
    if (nameInput.value.trim().length < 2) {
        showError(nameInput, 'Name must be at least 2 characters');
        isValid = false;
    } else {
        removeError(nameInput);
    }

    // Validate email
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email');
        isValid = false;
    } else {
        removeError(emailInput);
    }

    // Validate phone
    if (!validatePhone(phoneInput.value)) {
        showError(phoneInput, 'Please enter a valid phone number');
        isValid = false;
    } else {
        removeError(phoneInput);
    }

    // Validate subject
    if (subjectInput.value.trim().length < 3) {
        showError(subjectInput, 'Subject must be at least 3 characters');
        isValid = false;
    } else {
        removeError(subjectInput);
    }

    // Validate message
    if (messageInput.value.trim().length < 10) {
        showError(messageInput, 'Message must be at least 10 characters');
        isValid = false;
    } else {
        removeError(messageInput);
    }

    // If form is valid
    if (isValid) {
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            subject: subjectInput.value,
            message: messageInput.value,
            timestamp: new Date().toISOString()
        };

        console.log('Form submitted:', formData);

        // Show success message
        formMessage.textContent = 'Message sent successfully! We\'ll get back to you soon.';
        formMessage.className = 'form-message success';
        showNotification('Message sent successfully!', 'success');

        // Reset form
        contactForm.reset();

        // Clear success message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    } else {
        showNotification('Please fix the errors above', 'error');
    }
    });
}

// =====================
// Counter Animation
// =====================
const loadStatsFromStorage = () => {
    const stats = JSON.parse(localStorage.getItem('mnycStats')) || {
        clients: 500,
        years: 10,
        transactions: 100,
        uptime: 99
    };

    // Update data-target attributes
    const counters = document.querySelectorAll('.stat-number');
    if (counters.length >= 4) {
        counters[0].setAttribute('data-target', stats.clients);
        counters[1].setAttribute('data-target', stats.years);
        counters[2].setAttribute('data-target', stats.transactions);
        counters[3].setAttribute('data-target', stats.uptime);
    }
};

const animateCounters = () => {
    // Load latest stats from storage
    loadStatsFromStorage();
    
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 30);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stat-number')) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe stat numbers
document.querySelectorAll('.stat-number').forEach(counter => {
    observer.observe(counter);
});

// =====================
// Scroll Animations
// =====================
const animateOnScroll = () => {
    const elements = document.querySelectorAll(
        '.about-card, .service-card, .info-card, .section-header'
    );

    const inViewOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const inViewObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                inViewObserver.unobserve(entry.target);
            }
        });
    }, inViewOptions);

    elements.forEach(element => {
        inViewObserver.observe(element);
    });
};

// Call animation function when DOM is ready
document.addEventListener('DOMContentLoaded', animateOnScroll);

// =====================
// Smooth Scroll for Anchor Links
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================
// Add Input Focus Animation
// =====================
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'transform 0.2s ease';
    });

    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// =====================
// Ripple Effect on Buttons
// =====================
const buttons = document.querySelectorAll('.btn, .service-link, .nav-link');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        if (this.classList.contains('btn')) {
            this.style.transform = 'translateY(-2px)';
        }
    });

    button.addEventListener('mouseleave', function(e) {
        if (this.classList.contains('btn')) {
            this.style.transform = 'translateY(0)';
        }
    });
});

// =====================
// Page Load Animation
// =====================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// =====================
// Parallax Effect (Optional)
// =====================
const parallaxElements = document.querySelectorAll('.hero-image');

window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
        const scrollPosition = window.pageYOffset;
        element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});

// =====================
// Testimonials Slider
// =====================
// Homepage Banner Image
// =====================
function loadBannerImage() {
    const bannerImage = localStorage.getItem('mnycBannerImage');
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        // Use stored image if available, otherwise use default
        const imageUrl = bannerImage || 'https://loremflickr.com/1200/600/healthcare';
        heroSection.style.backgroundImage = `url('${imageUrl}')`;
    }
}

// =====================
const testimonialTrack = document.querySelector('.testimonials-track');

// Load testimonials from localStorage
function loadTestimonialsFromStorage() {
    const STORAGE_KEY = 'mnycTestimonials';
    const testimonials = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    
    if (testimonials.length > 0 && testimonialTrack) {
        // Clear existing testimonials
        testimonialTrack.innerHTML = '';
        
        // Add testimonials from storage
        testimonials.forEach(testimonial => {
            const stars = '⭐'.repeat(testimonial.rating);
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.innerHTML = `
                <div class="testimonial-header">
                    <div class="testimonial-avatar">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <div class="testimonial-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
                <div class="testimonial-rating">
                    ${stars}
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
            `;
            testimonialTrack.appendChild(card);
        });
        
        // Re-attach navigation listeners after testimonials are loaded
        attachTestimonialNavigation();
    }
}

// Attach navigation event listeners
function attachTestimonialNavigation() {
    const track = document.querySelector('.testimonials-track');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    console.log('attachTestimonialNavigation called');
    console.log('Track found:', !!track);
    console.log('Prev button found:', !!prevBtn);
    console.log('Next button found:', !!nextBtn);
    
    if (!track || !prevBtn || !nextBtn) {
        console.log('Missing required elements, returning');
        return;
    }
    
    // Clone buttons to remove old event listeners
    const newPrev = prevBtn.cloneNode(true);
    const newNext = nextBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrev, prevBtn);
    nextBtn.parentNode.replaceChild(newNext, nextBtn);
    
    // Get fresh references
    const freshPrev = document.querySelector('.testimonial-prev');
    const freshNext = document.querySelector('.testimonial-next');
    
    console.log('Fresh prev button:', !!freshPrev);
    console.log('Fresh next button:', !!freshNext);
    
    // Add click handlers
    freshPrev.addEventListener('click', function(e) {
        console.log('Prev button clicked');
        e.preventDefault();
        e.stopPropagation();
        const currentTrack = document.querySelector('.testimonials-track');
        if (currentTrack) {
            console.log('Scrolling left by 380px');
            currentTrack.scrollBy({
                left: -380,
                behavior: 'smooth'
            });
        }
    });
    
    freshNext.addEventListener('click', function(e) {
        console.log('Next button clicked');
        e.preventDefault();
        e.stopPropagation();
        const currentTrack = document.querySelector('.testimonials-track');
        if (currentTrack) {
            console.log('Scrolling right by 380px');
            currentTrack.scrollBy({
                left: 380,
                behavior: 'smooth'
            });
        }
    });
}

// Load testimonials on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load banner image
    loadBannerImage();
    
    // Small delay to ensure DOM is fully ready
    setTimeout(function() {
        loadTestimonialsFromStorage();
        attachTestimonialNavigation();
    }, 100);
});

// Listen for storage changes (when admin adds/edits testimonials)
window.addEventListener('storage', function(e) {
    if (e.key === 'mnycTestimonials') {
        loadTestimonialsFromStorage();
    }
});

// =====================
// FAQ Accordion
// =====================
const faqCards = document.querySelectorAll('.faq-card');
faqCards.forEach(card => {
    const header = card.querySelector('.faq-header');
    if (header) {
        header.addEventListener('click', () => {
            faqCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                }
            });
            card.classList.toggle('active');
        });
    }
});

// =====================
// Console Welcome Message
// =====================
console.log('%cWelcome to MNYC Healthcare!', 'font-size: 20px; color: #0066cc; font-weight: bold;');
console.log('%cModern, Beautiful & Interactive Healthcare Solutions', 'font-size: 14px; color: #666;');
