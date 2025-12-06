// AI7 - تطوير مواقع احترافية
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 AI7 - تطوير مواقع احترافية جاهز للعمل!');
    
    // ===== تهيئة السنة الحالية =====
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // ===== التنقل الناعم =====
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // ===== تأثير التمرير للهيدر =====
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.main-header');
        const backToTopBtn = document.getElementById('back-to-top');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // تأثير الهيدر
        if (scrollTop > 100) {
            header.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
            header.style.padding = '15px 0';
        }
        
        // زر العودة للأعلى
        if (scrollTop > 300) {
            backToTopBtn.style.display = 'flex';
            backToTopBtn.style.justifyContent = 'center';
            backToTopBtn.style.alignItems = 'center';
        } else {
            backToTopBtn.style.display = 'none';
        }
        
        // تفعيل التنشيط للقسم الحالي
        const sections = document.querySelectorAll('section');
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
    
    // ===== زر العودة للأعلى =====
    document.getElementById('back-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===== أزرار طلب الخدمات =====
    document.querySelectorAll('.btn-order').forEach(button => {
        button.addEventListener('click', function() {
            const serviceName = this.getAttribute('data-service');
            showMessage(`جاري توجيهك لطلب خدمة "${serviceName}"...`, 'info');
            
            // تأثير النقر
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            setTimeout(() => {
                document.querySelector('#contact').scrollIntoView({
                    behavior: 'smooth'
                });
            }, 1500);
        });
    });
    
    // ===== أزرار التواصل =====
    document.querySelectorAll('.btn-contact').forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            let url = '#';
            let message = '';
            
            switch(type) {
                case 'email':
                    url = 'mailto:ai7.development@gmail.com?subject=طلب تطوير موقع إلكتروني&body=مرحباً، أود طلب موقع إلكتروني...';
                    message = 'جاري فتح بريدك الإلكتروني...';
                    break;
                case 'whatsapp':
                    url = 'https://wa.me/201558882436?text=مرحباً، أود طلب موقع إلكتروني من AI7';
                    message = 'جاري فتح الواتساب...';
                    break;
                case 'tiktok':
                    url = 'https://tiktok.com/@AI7_Tech';
                    message = 'جاري فتح تيك توك...';
                    break;
                case 'instagram':
                    url = 'https://instagram.com/AI7_Official';
                    message = 'جاري فتح إنستجرام...';
                    break;
            }
            
            showMessage(message, 'info');
            
            // تأثير النقر
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            setTimeout(() => {
                window.open(url, '_blank');
            }, 1000);
        });
    });
    
    // ===== تأثير الشعار =====
    const logo = document.querySelector('.site-logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // تأثير النقر
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    }
    
    // ===== تأثير الكتابة للنص الرئيسي =====
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.style.opacity = '0';
        heroTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
            heroTitle.style.opacity = '1';
        }
        
        setTimeout(typeWriter, 500);
    }
    
    // ===== إظهار جميع الأقسام عند التحميل =====
    setTimeout(() => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 300);
    
    // ===== تأثير النقر على البطاقات =====
    const cards = document.querySelectorAll('.about-card, .service-card, .contact-card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('btn') && 
                !e.target.classList.contains('btn-order') && 
                !e.target.classList.contains('btn-contact') &&
                !e.target.closest('button')) {
                
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            }
        });
    });
    
    // ===== تأثير التقنيات =====
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // ===== رسالة ترحيبية =====
    setTimeout(() => {
        showMessage('مرحباً بك في AI7! 🚀', 'info');
    }, 1500);
    
    // ===== وظيفة عرض الرسائل =====
    window.showMessage = function(text, type) {
        // إزالة الرسائل القديمة
        const oldMessages = document.querySelectorAll('.custom-message');
        oldMessages.forEach(msg => {
            msg.style.opacity = '0';
            msg.style.transform = 'translateY(100px)';
            setTimeout(() => {
                if (msg.parentNode) msg.remove();
            }, 300);
        });
        
        // إنشاء الرسالة الجديدة
        const message = document.createElement('div');
        message.className = 'custom-message';
        message.innerHTML = `
            <i class="fas fa-${type === 'info' ? 'info-circle' : 'check-circle'}"></i>
            <span>${text}</span>
        `;
        
        // تنسيق الرسالة
        message.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: ${type === 'info' ? 'var(--primary)' : 'var(--success)'};
            color: white;
            padding: 15px 25px;
            border-radius: var(--border-radius);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            z-index: 9999;
            transform: translateY(100px);
            opacity: 0;
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease;
            max-width: 350px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 12px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        `;
        
        document.body.appendChild(message);
        
        // إظهار الرسالة
        setTimeout(() => {
            message.style.transform = 'translateY(0)';
            message.style.opacity = '1';
        }, 10);
        
        // إخفاء الرسالة بعد 3.5 ثواني
        setTimeout(() => {
            message.style.transform = 'translateY(100px)';
            message.style.opacity = '0';
            setTimeout(() => {
                if (message.parentNode) {
                    message.remove();
                }
            }, 400);
        }, 3500);
        
        // إمكانية إغلاق الرسالة بالنقر
        message.addEventListener('click', function() {
            this.style.transform = 'translateY(100px)';
            this.style.opacity = '0';
            setTimeout(() => {
                if (this.parentNode) {
                    this.remove();
                }
            }, 300);
        });
    };
});

// تأثير التحميل
window.addEventListener('load', function() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">🚀</div>
            <h2>AI7</h2>
            <p>تطوير مواقع احترافية</p>
            <div class="loader-bar">
                <div class="loader-progress"></div>
            </div>
        </div>
    `;
    
    // تنسيق المؤشر
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #1e293b, #334155);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    const loaderContent = loader.querySelector('.loader-content');
    loaderContent.style.cssText = `
        text-align: center;
        color: white;
    `;
    
    const loaderLogo = loader.querySelector('.loader-logo');
    loaderLogo.style.cssText = `
        font-size: 4rem;
        margin-bottom: 20px;
        animation: float 2s ease-in-out infinite;
    `;
    
    loader.querySelector('h2').style.cssText = `
        font-size: 2.5rem;
        margin-bottom: 10px;
        background: linear-gradient(to right, #fff, #a5b4fc);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 800;
    `;
    
    loader.querySelector('p').style.cssText = `
        color: #a5b4fc;
        margin-bottom: 30px;
        font-size: 1.1rem;
    `;
    
    const loaderBar = loader.querySelector('.loader-bar');
    loaderBar.style.cssText = `
        width: 200px;
        height: 4px;
        background: rgba(255,255,255,0.2);
        border-radius: 2px;
        margin: 30px auto;
        overflow: hidden;
    `;
    
    const loaderProgress = loader.querySelector('.loader-progress');
    loaderProgress.style.cssText = `
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #4361ee, #f72585);
        border-radius: 2px;
        animation: loading 1.5s ease-in-out forwards;
    `;
    
    // تعريف animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes loading {
            0% { width: 0%; }
            100% { width: 100%; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(loader);
    
    // إخفاء المؤشر بعد التحميل
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            if (loader.parentNode) {
                loader.remove();
            }
            document.head.removeChild(style);
        }, 500);
    }, 1500);
});