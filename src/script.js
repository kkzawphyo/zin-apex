// Global variables
let applicationsChart = null;
let successRateChart = null;

// Document ready
document.addEventListener('DOMContentLoaded', function() {
    initializeNavbar();
    initializeCharts();
    initializeContactForm();
    initializeScrollToTop();
    initializeAnimations();
});

// Navbar functionality
function initializeNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Active nav link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

// Charts initialization
function initializeCharts() {
    // Applications Chart Data
    const applicationsData = {
        labels: ['2023', '2024', '2025'],
        datasets: [
            {
                label: 'Spring Applied',
                data: [180, 220, 250],
                backgroundColor: '#94a3b8',
                borderColor: '#64748b',
                borderWidth: 1
            },
            {
                label: 'Spring Accepted',
                data: [165, 210, 240],
                backgroundColor: '#3b82f6',
                borderColor: '#2563eb',
                borderWidth: 1
            },
            {
                label: 'Fall Applied',
                data: [160, 190, 200],
                backgroundColor: '#cbd5e1',
                borderColor: '#94a3b8',
                borderWidth: 1
            },
            {
                label: 'Fall Accepted',
                data: [142, 178, 190],
                backgroundColor: '#1d4ed8',
                borderColor: '#1e40af',
                borderWidth: 1
            }
        ]
    };
    
    // Success Rate Chart Data
    const successRateData = {
        labels: ['2023', '2024', '2025'],
        datasets: [
            {
                label: 'Spring Intake',
                data: [91.7, 95.5, 96.0],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Fall Intake',
                data: [88.8, 93.7, 95.0],
                borderColor: '#1d4ed8',
                backgroundColor: 'rgba(29, 78, 216, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Average',
                data: [90.3, 94.6, 95.5],
                borderColor: '#059669',
                backgroundColor: 'rgba(5, 150, 105, 0.1)',
                tension: 0.4,
                borderDash: [5, 5],
                fill: true
            }
        ]
    };
    
    // Initialize Applications Chart
    const applicationsCtx = document.getElementById('applicationsChart');
    if (applicationsCtx) {
        applicationsChart = new Chart(applicationsCtx, {
            type: 'bar',
            data: applicationsData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: false
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }
    
    // Initialize Success Rate Chart
    const successRateCtx = document.getElementById('successRateChart');
    if (successRateCtx) {
        successRateChart = new Chart(successRateCtx, {
            type: 'line',
            data: successRateData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: false
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 80,
                        max: 100,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }
    
    // Handle tab switching for charts
    const chartTabs = document.querySelectorAll('#chartTabs button[data-bs-toggle="tab"]');
    chartTabs.forEach(tab => {
        tab.addEventListener('shown.bs.tab', function() {
            // Trigger chart resize when tab is shown
            setTimeout(() => {
                if (applicationsChart) applicationsChart.resize();
                if (successRateChart) successRateChart.resize();
            }, 200);
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const successToast = document.getElementById('successToast');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validate required fields
            if (!data.name || !data.email || !data.interest) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            // Show loading state
            submitButton.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';
            submitButton.disabled = true;
            
            // Simulate API call delay
            setTimeout(() => {
                // Reset form
                form.reset();
                
                // Show success toast
                if (successToast) {
                    const toast = new bootstrap.Toast(successToast);
                    toast.show();
                }
                
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
                console.log('Form submitted:', data);
            }, 2000);
        });
    }
}

// Scroll to top functionality
function initializeScrollToTop() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animation initialization
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.course-card, .office-card, .video-card, .activity-card, .achievement-card, .stat-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Video player functionality
function openVideo(videoId) {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(url, '_blank');
}

// Utility functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Initialize carousel auto-play with pause on hover
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#heroCarousel');
    if (carousel) {
        const bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true,
            touch: true
        });
        
        // Pause on hover
        carousel.addEventListener('mouseenter', function() {
            bsCarousel.pause();
        });
        
        // Resume on mouse leave
        carousel.addEventListener('mouseleave', function() {
            bsCarousel.cycle();
        });
    }
});

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Handle mobile menu closing when clicking outside
document.addEventListener('click', function(e) {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        if (!navbar.contains(e.target)) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    }
});

// Preloader (optional)
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Handle scroll events here if needed
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Error handling for charts
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'SCRIPT' && e.target.src.includes('chart.js')) {
        console.warn('Chart.js failed to load. Charts will not be displayed.');
        // Hide chart containers
        const chartContainers = document.querySelectorAll('.tab-pane');
        chartContainers.forEach(container => {
            if (container.querySelector('canvas')) {
                container.innerHTML = '<div class="text-center p-5"><p class="text-muted">Charts unavailable. Please check your internet connection.</p></div>';
            }
        });
    }
});

// Console welcome message
console.log(`
🎓 Zin Apex Education Website
   Study in Japan with confidence!
   
   This website was built with:
   - HTML5 & CSS3
   - Bootstrap 5
   - Chart.js
   - Vanilla JavaScript
   
   Contact: info@zinapex.edu
`);

// Export functions for global access
window.openVideo = openVideo;
window.scrollToSection = scrollToSection;