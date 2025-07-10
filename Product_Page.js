 // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Navbar scroll effect
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                // Back to top button
                const backToTop = document.querySelector('.back-to-top');
                if (window.pageYOffset > 300) {
                    backToTop.classList.add('show');
                } else {
                    backToTop.classList.remove('show');
                }
            });
            
            // Back to top button click
            document.querySelector('.back-to-top').addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Update year in footer
            document.getElementById('year').textContent = new Date().getFullYear();
            
            // Add to cart animation
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Add pulse effect
                    this.classList.add('active');
                    setTimeout(() => {
                        this.classList.remove('active');
                    }, 300);
                    
                    // Show success message
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'تمت إضافة المنتج إلى السلة',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true
                    });
                });
            });
            
            // Animate hero elements
            const heroTitle = document.querySelector('.hero-title');
            const heroSubtitle = document.querySelector('.hero-subtitle');
            const heroBtn = document.querySelector('.hero-btn');
            
            setTimeout(() => {
                heroTitle.style.animation = 'fadeInUp 1s ease forwards';
            }, 300);
            
            setTimeout(() => {
                heroSubtitle.style.animation = 'fadeInUp 1s ease forwards 0.3s';
            }, 600);
            
            setTimeout(() => {
                heroBtn.style.animation = 'fadeInUp 1s ease forwards 0.6s';
            }, 900);
            
            // Animate section header
            const sectionTitle = document.querySelector('.section-title');
            const sectionSubtitle = document.querySelector('.section-subtitle');
            
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        sectionTitle.style.animation = 'fadeInUp 1s ease forwards';
                        sectionSubtitle.style.animation = 'fadeInUp 1s ease forwards 0.3s';
                    }
                });
            }, { threshold: 0.1 });
            
            sectionObserver.observe(document.querySelector('.section-header'));
            
            // Animate product cards on scroll
            const animateOnScroll = () => {
                const cards = document.querySelectorAll('.product-card');
                cards.forEach((card, index) => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.2;
                    
                    if (cardPosition < screenPosition) {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, index * 100);
                    }
                });
            };
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // Run once on load
            
            // Shake navbar on scroll
            let lastScroll = 0;
            window.addEventListener('scroll', function() {
                const currentScroll = window.pageYOffset;
                if (currentScroll > 100 && currentScroll > lastScroll) {
                    const navbar = document.querySelector('.navbar');
                    navbar.style.animation = 'shake 0.5s ease';
                    setTimeout(() => {
                        navbar.style.animation = '';
                    }, 500);
                }
                lastScroll = currentScroll;
            });
            
            // Intersection Observer for products
            const productObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                        entry.target.style.opacity = '1';
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.product-card').forEach(card => {
                productObserver.observe(card);
            });
            
            // Create floating flowers
            function createFloatingFlowers() {
                const sections = ['.hero-section', '.products-section', '.footer'];
                const icons = ['fa-leaf', 'fa-heart', 'fa-seedling', 'fa-feather-alt', 'fa-spa'];
                const colors = ['var(--primary)', 'var(--secondary)', '#ff9a8b', '#e83e8c'];
                
                sections.forEach(section => {
                    const sectionEl = document.querySelector(section);
                    if (sectionEl) {
                        for (let i = 0; i < 5; i++) {
                            const flower = document.createElement('i');
                            flower.className = `fas ${icons[Math.floor(Math.random() * icons.length)]} floating-flower`;
                            
                            const size = Math.random() * 1.5 + 1;
                            const delay = Math.random() * 3;
                            const duration = Math.random() * 3 + 3;
                            const color = colors[Math.floor(Math.random() * colors.length)];
                            
                            flower.style.fontSize = `${size}rem`;
                            flower.style.color = color;
                            flower.style.animationDelay = `${delay}s`;
                            flower.style.animationDuration = `${duration}s`;
                            
                            flower.style.top = `${Math.random() * 80 + 10}%`;
                            flower.style.left = `${Math.random() * 80 + 10}%`;
                            
                            sectionEl.appendChild(flower);
                        }
                    }
                });
            }
            
            createFloatingFlowers();
        });

        // Filter functionality
document.querySelectorAll('.filter-group-title').forEach(title => {
    title.addEventListener('click', function() {
        const icon = this.querySelector('i.fa-chevron-down');
        const options = this.parentElement.querySelector('.filter-options, .price-range');
        
        if (options) {
            options.style.maxHeight = options.style.maxHeight ? null : options.scrollHeight + 'px';
            icon.style.transform = options.style.maxHeight ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    });
});

// Price range display
const priceRange = document.getElementById('priceRange');
const selectedPrice = document.getElementById('selectedPrice');

if (priceRange && selectedPrice) {
    priceRange.addEventListener('input', function() {
        const minPrice = 50;
        const maxPrice = 500;
        const currentValue = this.value;
        
        selectedPrice.textContent = `${currentValue} - ${maxPrice} ر.س`;
    });
}

// Reset filters
document.querySelector('.filter-sidebar button').addEventListener('click', function() {
    document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = true;
    });
    
    if (priceRange) {
        priceRange.value = 50;
        selectedPrice.textContent = '50 - 500 ر.س';
    }
    
    // Add any additional reset logic here
});