   // Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add hover effect to category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow-lg');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-lg');
        });
    });

     // Add hover effect to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 40px rgba(232, 62, 140, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 30px rgba(232, 62, 140, 0.1)';
        });
    });

    // Video Fallback for Mobile
  document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-background video');
    if (window.innerWidth < 768) {
      video.style.display = 'none';
      document.querySelector('.video-overlay').style.background = 'rgba(232, 62, 140, 0.4)';
    }
  });

   // Update year automatically
  document.querySelector('.year').textContent = new Date().getFullYear();

    // Initialize AOS Animation
        AOS.init({
            duration: 1000,
            once: true
        });
        
        // Create Floating Petals
        function createPetals() {
            const container = document.getElementById('petals-container');
            const petalTypes = ['🌸', '🌹', '🌺', '🌻', '🌼', '🌷', '💮', '🏵️'];
            
            for (let i = 0; i < 20; i++) {
                const petal = document.createElement('div');
                petal.className = 'petal';
                petal.innerHTML = petalTypes[Math.floor(Math.random() * petalTypes.length)];
                
                // Random position
                const posX = Math.random() * 100;
                
                // Random size
                const size = Math.random() * 20 + 15;
                
                // Random animation duration (5-15s)
                const duration = Math.random() * 10 + 5;
                
                // Random delay (0-5s)
                const delay = Math.random() * 5;
                
                petal.style.left = `${posX}%`;
                petal.style.fontSize = `${size}px`;
                petal.style.animationDuration = `${duration}s`;
                petal.style.animationDelay = `${delay}s`;
                
                container.appendChild(petal);
            }
        }
        
        // Language Toggle
        document.getElementById('languageToggle').addEventListener('click', function() {
            document.body.classList.toggle('english');
            
            // Toggle Arabic/English text
            document.querySelectorAll('.arabic-text').forEach(el => {
                el.classList.toggle('hidden-lang');
            });
            
            document.querySelectorAll('.english-text').forEach(el => {
                el.classList.toggle('hidden-lang');
            });
            
            // Change HTML lang attribute and direction
            if (document.body.classList.contains('english')) {
                document.documentElement.lang = 'en';
                document.documentElement.dir = 'ltr';
            } else {
                document.documentElement.lang = 'ar';
                document.documentElement.dir = 'rtl';
            }
        });
        
        // Back to Top Button
        window.addEventListener('scroll', function() {
            const backToTop = document.querySelector('.back-to-top');
            if (window.pageYOffset > 300) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        });
        
        document.querySelector('.back-to-top').addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            createPetals();
        });

        // جعل قائمة التصفية قابلة للطي على الجوال
document.querySelectorAll('.filter-group-title').forEach(title => {
  title.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      title.parentElement.classList.toggle('active');
    }
  });
});

// إخفاء/إظهار القائمة عند تغيير حجم الشاشة
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.querySelectorAll('.filter-options').forEach(options => {
      options.style.maxHeight = 'none';
    });
  }
});