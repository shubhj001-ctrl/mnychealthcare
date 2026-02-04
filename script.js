// =====================
// Firebase Initialization
// =====================
const firebaseConfig = {
    apiKey: "AIzaSyCL7lKu2YPbF00X-wI0U83U5vYF4OUVuTE",
    authDomain: "mnychealthcare.firebaseapp.com",
    projectId: "mnychealthcare",
    storageBucket: "mnychealthcare.firebasestorage.app",
    messagingSenderId: "1039065732246",
    appId: "1:1039065732246:web:fee9e8397aa2d1271b9eb7",
    measurementId: "G-1Q29VB9BB3"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

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

const validateName = (name) => {
    return name.trim().length >= 2;
};

const validateMessage = (message) => {
    return message.trim().length >= 10;
};

const showError = (field, message) => {
    const formGroup = field.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    formGroup.classList.add('error');
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
    field.setAttribute('aria-invalid', 'true');
};

const removeError = (field) => {
    const formGroup = field.parentElement;
    formGroup.classList.remove('error');
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
    field.setAttribute('aria-invalid', 'false');
};

// Real-time validation
if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    if (nameInput) {
        nameInput.addEventListener('blur', () => {
            if (!validateName(nameInput.value)) {
                showError(nameInput, 'Name must be at least 2 characters');
            } else {
                removeError(nameInput);
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            if (!validateEmail(emailInput.value)) {
                showError(emailInput, 'Please enter a valid email');
            } else {
                removeError(emailInput);
            }
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener('blur', () => {
            if (!validatePhone(phoneInput.value)) {
                showError(phoneInput, 'Please enter a valid phone number');
            } else {
                removeError(phoneInput);
            }
        });
    }

    if (messageInput) {
        messageInput.addEventListener('blur', () => {
            if (!validateMessage(messageInput.value)) {
                showError(messageInput, 'Message must be at least 10 characters');
            } else {
                removeError(messageInput);
            }
        });
    }
}

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
const loadStatsFromStorage = async () => {
    try {
        const db = firebase.firestore();
        const docSnap = await db.collection('website').doc('stats').get();
        
        let stats = {
            clients: 520,
            years: 10,
            transactions: 2567,
            uptime: 99
        };
        
        if (docSnap.exists) {
            stats = { ...stats, ...docSnap.data() };
        }

        // Update data-target attributes
        const counters = document.querySelectorAll('.stat-number');
        if (counters.length >= 4) {
            counters[0].setAttribute('data-target', stats.clients);
            counters[1].setAttribute('data-target', stats.years);
            counters[2].setAttribute('data-target', stats.transactions);
            counters[3].setAttribute('data-target', stats.uptime);
        }
    } catch (error) {
        console.error('Error loading stats:', error);
        // Fallback to defaults
        const counters = document.querySelectorAll('.stat-number');
        if (counters.length >= 4) {
            counters[0].setAttribute('data-target', 520);
            counters[1].setAttribute('data-target', 10);
            counters[2].setAttribute('data-target', 2567);
            counters[3].setAttribute('data-target', 99);
        }
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
async function loadBannerImage() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    try {
        // Wait for Firebase to be ready
        const db = firebase.firestore();
        const docSnap = await db.collection('website').doc('banner').get();
        let imageUrl = 'https://loremflickr.com/1200/600/healthcare'; // Default
        
        if (docSnap.exists && docSnap.data().imageUrl) {
            imageUrl = docSnap.data().imageUrl;
            console.log('Loaded banner image from Firebase:', imageUrl);
        } else {
            console.log('No banner image in Firebase, using default');
        }
        
        heroSection.style.backgroundImage = `url('${imageUrl}')`;
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
    } catch (error) {
        console.error('Error loading banner:', error);
        // Fallback to default
        heroSection.style.backgroundImage = `url('https://loremflickr.com/1200/600/healthcare')`;
    }
}

// =====================
const testimonialTrack = document.querySelector('.testimonials-track');

// Load testimonials from Firestore
async function loadTestimonialsFromStorage() {
    const testimonialTrack = document.querySelector('.testimonials-track');
    if (!testimonialTrack) return;
    
    try {
        const db = firebase.firestore();
        const querySnapshot = await db.collection('testimonials').get();
        const testimonials = [];
        
        querySnapshot.forEach((doc) => {
            testimonials.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        if (testimonials.length > 0) {
            // Clear existing testimonials
            testimonialTrack.innerHTML = '';
            
            // Add testimonials from Firestore
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
    } catch (error) {
        console.error('Error loading testimonials:', error);
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
document.addEventListener('DOMContentLoaded', async function() {
    // Load banner image - wait for it to complete
    await loadBannerImage();
    
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
// Newsletter Signup
// =====================
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            // Store newsletter subscription
            try {
                const subscribers = JSON.parse(localStorage.getItem('mnycNewsletterSubscribers') || '[]');
                if (!subscribers.includes(email)) {
                    subscribers.push(email);
                    localStorage.setItem('mnycNewsletterSubscribers', JSON.stringify(subscribers));
                }
            } catch (err) {
                console.error('Error saving subscription:', err);
            }

            // Show success message
            showNotification('Thank you for subscribing! Check your email for updates.', 'success');
            emailInput.value = '';
        } else {
            showNotification('Please enter a valid email address', 'error');
        }
    });
}

// =====================
// Admin Dashboard - Update Statistics
// =====================
const handleUpdateStats = async (event) => {
    event.preventDefault();
    
    try {
        const db = firebase.firestore();
        
        // Get form values
        const clientsCount = parseInt(document.getElementById('clientsCount').value);
        const yearsExperience = parseInt(document.getElementById('yearsExperience').value);
        const transactionsCount = parseInt(document.getElementById('transactionsCount').value);
        const uptimePercent = parseInt(document.getElementById('uptimePercent').value);
        
        // Validate inputs
        if (!clientsCount || !yearsExperience || !transactionsCount || !uptimePercent) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Prepare stats data
        const statsData = {
            clients: clientsCount,
            years: yearsExperience,
            transactions: transactionsCount,
            uptime: uptimePercent,
            updatedAt: new Date().toISOString()
        };
        
        // Save to Firestore
        await db.collection('website').doc('stats').set(statsData, { merge: true });
        
        console.log('Stats saved to Firestore:', statsData);
        
        // Reload stats immediately on the page
        await loadStatsFromStorage();
        
        // Trigger animation
        animateCounters();
        
        // Reset form
        document.getElementById('statsForm').reset();
        
        // Show success message
        showNotification('✅ Statistics updated successfully! Changes are live.', 'success');
        
        console.log('Stats updated and reloaded:', statsData);
    } catch (error) {
        console.error('Error updating statistics:', error);
        showNotification('❌ Error updating statistics. Please try again.', 'error');
    }
};

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
