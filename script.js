/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MAHADEVA PORTFOLIO ENGINE — PIXEL GRID, TRANSLATIONS, SCROLL, SERVICES & REACT MODAL
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

document.documentElement.classList.add('js-active');

// Language setting & state
let currentLang = localStorage.getItem('lang') || 'en';

const translations = {
    en: {
        logo: "men3em",
        nav_home: "HOME",
        nav_about: "ABOUT",
        nav_work: "WORK",
        nav_services: "SERVICES",
        nav_contact: "CONTACT",
        
        hero_title_1: "CODE",
        hero_title_2: "INTEGRATE",
        hero_title_3: "SCALE",
        hero_cta: "LET'S CONTACT",
        hero_desc: "Full-stack engineer turning ideas into production-ready systems — from responsive web apps and mobile clients to cloud infrastructure and smart integrations.",
        
        about_label: "{ABOUT ME}",
        about_text: "I am a Software and DevOps Engineer with practical experience in building websites, mobile apps using Flutter/Dart, and smart automation systems/bots. I transform complex ideas into stable, fast, and scalable software solutions.",
        about_cta: "LET'S CONTACT",
        
        stat_exp: "YEARS EXPERIENCE",
        stat_proj: "SUCCESSFUL PROJECTS",
        stat_users: "TOTAL USERS",
        stat_tech: "TECHNOLOGIES USED",
        
        work_label: "{SELECTED WORK}",
        work_see_all: "SEE ALL WORKS",
        work_title: "Latest works",
        work_subtitle: "See how software engineering, DevOps, and automation transformed performance across platforms.",
        work_more_cases: "MORE CASE STUDIES",
        
        work_proj1_title: "Academic Portal Built for University Ecosystems",
        work_proj1_desc: "A secure, containerized academic portal serving 3 main hubs (Admin, Lecturer, and Student portals) alongside timetables and course tracking.",
        work_proj1_m1_lbl: "Active Students",
        work_proj1_m1_val: "1,000+",
        work_proj1_m2_lbl: "System Uptime",
        work_proj1_m2_val: "99.9%",
        work_proj1_m3_lbl: "Response Time",
        work_proj1_m3_val: "< 120ms",
        work_proj1_m4_lbl: "System Portals",
        work_proj1_m4_val: "3 Hubs",
        
        work_proj2_title: "Automated Ticket Monitor & Real-Time Alert Engine",
        work_proj2_desc: "A high-performance monitoring bot tracking seat categories and ticket availability with instant Telegram alerts.",
        work_proj2_m1_lbl: "Active Fans Alerted",
        work_proj2_m1_val: "7,000+",
        work_proj2_m2_lbl: "Checking Interval",
        work_proj2_m2_val: "5.0s",
        work_proj2_m3_lbl: "Notifications Sent",
        work_proj2_m3_val: "250K+",
        work_proj2_m4_lbl: "Success Rate",
        work_proj2_m4_val: "100%",
        
        work_proj3_title: "AI Expert Persona & Multi-Account Extension for VS Code",
        work_proj3_desc: "A productivity extension managing Antigravity accounts, real-time balances, and persistent prompt personas.",
        work_proj3_m1_lbl: "Active Developers",
        work_proj3_m1_val: "1,000+",
        work_proj3_m2_lbl: "Prompt Personas",
        work_proj3_m2_val: "1,440 Skills",
        work_proj3_m3_lbl: "Time Saved / Day",
        work_proj3_m3_val: "45 mins",
        work_proj3_m4_lbl: "Re-injection Speed",
        work_proj3_m4_val: "< 50ms",
        
        work_proj4_title: "Social Media Scraping & High-Speed Streaming Bot",
        work_proj4_desc: "A highly efficient Telegram downloader using yt-dlp, Railway container hosting, and auto-cleanup storage routines.",
        work_proj4_m1_lbl: "Supported Sites",
        work_proj4_m1_val: "1,000+",
        work_proj4_m2_lbl: "Processing Speed",
        work_proj4_m2_val: "4.8x Faster",
        work_proj4_m3_lbl: "Storage Saved",
        work_proj4_m3_val: "100%",
        work_proj4_m4_lbl: "Daily Downloads",
        work_proj4_m4_val: "12,000+",
        
        services_label: "{SERVICES}",
        services_title_main: "SERVICE EXPERTISE",
        services_desc_main: "Combining deep technical experience with modern automation practices to deliver fast, scalable, and secure software solutions. My services cover full-stack development, cloud infrastructure, and smart task automation.",
        services_cta: "LET'S TALK",
        
        service1_title: "Software Development",
        service1_desc: "Building fast, responsive websites and cross-platform mobile apps using Flutter and modern tech.",
        service2_title: "DevOps & Cloud",
        service2_desc: "Managing cloud infrastructure, setting up CI/CD, performance monitoring, and server scaling.",
        service3_title: "Automation & Bots",
        service3_desc: "Creating smart Telegram/WhatsApp automation bots, scrapers, and custom script tools.",
        
        services_discover: "DISCOVER",
        
        collab_sub_label: "Let's Get Started",
        collab_title_main: "LET'S COLLABORATE",
        gate_ready: "Are You Ready?",
        
        footer_brand_desc: "I build, develop, and manage integrated systems and software with a focus on efficiency, automation, and scalability.",
        footer_sub_btn: "Email Me",
        footer_col_pages: "Pages",
        footer_col_projects: "Projects",
        footer_col_socials: "Socials",
        footer_copy: "© Copyright 2026 | Design By Men3em | All rights reserved",

        tools_label: "{TECHNICAL STACK}",
        skills_title: "Tech Ecosystem",
        skills_subtitle: "A rich ecosystem of frameworks, scripting libraries, and cloud platforms crafted to build high-performance products, robust backends, and flawless automation pipelines.",
        skill1_title: "JAVASCRIPT / REACT",
        skill1_desc: "Build rich, highly-interactive web architectures with modular components and optimized rendering engines.",
        skill2_title: "FLUTTER DEVELOPMENT",
        skill2_desc: "Create beautiful, native high-performance mobile applications for Android, iOS, and Web from a single codebase.",
        skill3_title: "BACKEND INTEGRATIONS",
        skill3_desc: "Design robust API layers, database schemas, and secure microservices to connect platforms seamlessly.",
        skill4_title: "DEVOPS & SYSTEM ADMIN",
        skill4_desc: "Automate system deployment, set up continuous integration CI/CD pipelines, and secure cloud servers.",
        skill5_title: "CONTAINER & CLOUD SYSTEMS",
        skill5_desc: "Package applications in isolated Docker environments to guarantee scalability and zero downtime.",
        skill6_title: "AUTOMATION & AI AGENTS",
        skill6_desc: "Create intelligent bots, web scrapers, and automated scripts to speed up workflows and drive productivity."
    },
    ar: {
        logo: "منعم",
        nav_home: "الرئيسية",
        nav_about: "من أنا",
        nav_work: "مشاريعي",
        nav_services: "خدماتي",
        nav_contact: "اتصل بي",
        
        hero_title_1: "برمجة",
        hero_title_2: "تكامل",
        hero_title_3: "توسع",
        hero_cta: "تواصل معي",
        hero_desc: "مهندس برمجيات و DevOps أقوم بتحويل الأفكار إلى أنظمة جاهزة للتشغيل الفعلي — بدءًا من تطبيقات الويب والهواتف التفاعلية إلى البنية التحتية السحابية والأتمتة الذكية.",
        
        about_label: "{من أنا}",
        about_text: "أنا مهندس برمجيات و DevOps ذو خبرة عملية في بناء مواقع الويب وتطبيقات الهواتف باستخدام Flutter/Dart، وأنظمة الأتمتة والبوتات الذكية. أحول الأفكار المعقدة إلى حلول برمجية مستقرة وسريعة وقابلة للتوسع.",
        about_cta: "تواصل معي",
        
        stat_exp: "سنوات الخبرة",
        stat_proj: "المشاريع الناجحة",
        stat_users: "إجمالي المستخدمين",
        stat_tech: "التقنيات المستخدمة",
        
        work_label: "{أعمال مختارة}",
        work_see_all: "عرض جميع الأعمال",
        work_title: "آخر الأعمال",
        work_subtitle: "شاهد كيف ساهمت هندسة البرمجيات والـ DevOps والأتمتة في تحسين الأداء والنمو عبر المنصات المختلفة.",
        work_more_cases: "المزيد من المشاريع",
        
        work_proj1_title: "منصة أكاديمية متكاملة لإدارة الجامعات الأهلية",
        work_proj1_desc: "بوابة أكاديمية آمنة ومجهزة في حاويات برمجية تخدم 3 لوحات تحكم رئيسية (الأدمن، المحاضر، والطالب) مع تنظيم الجداول ومتابعة المقررات.",
        work_proj1_m1_lbl: "الطلاب النشطين",
        work_proj1_m1_val: "1,000+",
        work_proj1_m2_lbl: "جاهزية النظام",
        work_proj1_m2_val: "99.9%",
        work_proj1_m3_lbl: "سرعة الاستجابة",
        work_proj1_m3_val: "< 120ms",
        work_proj1_m4_lbl: "البوابات الإلكترونية",
        work_proj1_m4_val: "3 بوابات",
        
        work_proj2_title: "نظام فحص وتتبع التذاكر التلقائي لحظة بلحظة",
        work_proj2_desc: "بوت ذكي عالي الأداء لتتبع مقاعد وتذاكر المباريات وإرسال إشعارات فورية عبر تيليجرام.",
        work_proj2_m1_lbl: "المشجعين النشطين",
        work_proj2_m1_val: "7,000+",
        work_proj2_m2_lbl: "معدل فحص البيانات",
        work_proj2_m2_val: "5.0 ثوان",
        work_proj2_m3_lbl: "الإشعارات المرسلة",
        work_proj2_m3_val: "+250 ألف",
        work_proj2_m4_lbl: "معدل النجاح",
        work_proj2_m4_val: "100%",
        
        work_proj3_title: "إضافة VS Code لإدارة حسابات وحقن مهارات الذكاء الاصطناعي",
        work_proj3_desc: "أداة إنتاجية لإدارة حسابات Antigravity ومتابعة الأرصدة وحقن مهارات المطور الذكي تلقائياً.",
        work_proj3_m1_lbl: "المطورين النشطين",
        work_proj3_m1_val: "1,000+",
        work_proj3_m2_lbl: "مكتبة المهارات",
        work_proj3_m2_val: "1,440 مهارة",
        work_proj3_m3_lbl: "الوقت الموفر / يومياً",
        work_proj3_m3_val: "45 دقيقة",
        work_proj3_m4_lbl: "سرعة حقن المهارة",
        work_proj3_m4_val: "< 50ms",
        
        work_proj4_title: "بوت سحب وتحميل وسائط السوشيال ميديا فائق السرعة",
        work_proj4_desc: "بوت تليجرام عالي الكفاءة للتحميل المباشر من منصات السوشيال ميديا مع مسح فوري وتلقائي للخادم.",
        work_proj4_m1_lbl: "المواقع المدعومة",
        work_proj4_m1_val: "1,000+",
        work_proj4_m2_lbl: "سرعة المعالجة",
        work_proj4_m2_val: "4.8x أسرع",
        work_proj4_m3_lbl: "توفير مساحة السيرفر",
        work_proj4_m3_val: "100%",
        work_proj4_m4_lbl: "التحميلات اليومية",
        work_proj4_m4_val: "12,000+",
        
        services_label: "{خدماتي}",
        services_title_main: "خبراتي المهنية",
        services_desc_main: "دمج الخبرة البرمجية العميقة مع ممارسات الأتمتة الحديثة لتقديم حلول سريعة وآمنة وقابلة للتوسع. تغطي خدماتي تطوير الويب والموبايل بالكامل، البنية التحتية، والأتمتة الذكية.",
        services_cta: "دعنا نتحدث",
        
        service1_title: "تطوير البرمجيات",
        service1_desc: "بناء مواقع ويب تفاعلية وسريعة وتطبيقات هواتف ذكية متعددة المنصات باستخدام Flutter وأحدث الأطر البرمجية.",
        service2_title: "DevOps والبنية السحابية",
        service2_desc: "إدارة وتوسيع الخوادم السحابية، أتمتة عمليات البناء والنشر المستمر CI/CD، مراقبة الأداء ورفع كفاءة الأنظمة.",
        service3_title: "الأتمتة وبوتات المهام",
        service3_desc: "بناء بوتات أتمتة مخصصة على تيليجرام وواتساب، أدوات سحب البيانات التلقائي، وكتابة سكربتات تسريع العمليات.",
        
        services_discover: "اكتشف",
        
        collab_sub_label: "دعنا نبدأ",
        collab_title_main: "دعنا نتعاون",
        gate_ready: "هل أنت مستعد؟",
        
        footer_brand_desc: "أقوم ببناء وتطوير وإدارت الأنظمة والبرمجيات المتكاملة مع التركيز على الكفاءة، الأتمتة، وقابلية التوسع.",
        footer_sub_btn: "راسلني",
        footer_col_pages: "الصفحات",
        footer_col_projects: "المشاريع",
        footer_col_socials: "الحسابات",
        footer_copy: "© حقوق النشر 2026 | تصميم وتطوير منعم | جميع الحقوق محفوظة",

        tools_label: "{القدرات والتقنيات}",
        skills_title: "المنظومة التقنية",
        skills_subtitle: "منظومة غنية من إطارات العمل، لغات البرمجة، والأنظمة السحابية المصممة لإنشاء منتجات فائقة الأداء، خلفيات برمجية قوية، وأتمتة متكاملة بلا أخطاء.",
        skill1_title: "جاوا سكريبت / ريأكت",
        skill1_desc: "بناء تطبيقات ويب تفاعلية وسريعة للغاية باستخدام أحدث التقنيات وأفضل ممارسات البرمجة المهيكلة.",
        skill2_title: "تطوير الموبايل فلاتر",
        skill2_desc: "تطوير تطبيقات هواتف ذكية بأداء أصلي فائق السرعة لنظامي Android و iOS مع واجهات مستخدم مذهلة وسلسة.",
        skill3_title: "تكامل الأنظمة والخلفية البرمجية",
        skill3_desc: "تصميم وإدارة الخوادم، بناء الـ APIs، قواعد البيانات، والخدمات المصغرة لتكامل الأنظمة بأمان تام وكفاءة.",
        skill4_title: "العمليات والبنية التحتية",
        skill4_desc: "أتمتة عمليات النشر المستمر، إدارة خوادم لينكس، وإعداد البيئات البرمجية المتكاملة مع الأمان الفائق.",
        skill5_title: "الحاويات والأنظمة السحابية",
        skill5_desc: "تغليف وبناء الحاويات الافتراضية باستخدام Docker لضمان سرعة وموثوقية التشغيل وحل مشاكل توافق الأنظمة.",
        skill6_title: "الأتمتة ووكلاء الذكاء الاصطناعي",
        skill6_desc: "بناء بوتات ذكية، أتمتة المهام المتكررة، سحب البيانات تلقائياً، وتدشين وكلاء الذكاء الاصطناعي المساعدين."
    }
};

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Toggle document layout direction for RTL/LTR
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const header = document.getElementById('header');
    if (header) header.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
    }
}

// Initial setting
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
    
    // Preloader dismiss
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            document.body.classList.remove('loading');
            // Remove preloader from DOM after transition
            setTimeout(() => {
                preloader.remove();
            }, 1000);
        }, 2000);
    }

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            localStorage.setItem('lang', currentLang);
            applyTranslations(currentLang);
        });
    }
});


/* ── 1. FIXED GLASS NAVBAR SCROLL & MOBILE DRAWER ── */
(function() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 40);
        }
    }, { passive: true });

    // Mobile Hamburger
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('modal-open');
        });

        // Close when clicking nav links
        mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.classList.remove('modal-open');
            });
        });
    }
})();


/* ── 2. NEW INTERACTIVE PIXEL GRID BACKGROUND ENGINE ── */
(function() {
    const gridContainer = document.getElementById('pixel-grid-container');
    if (!gridContainer) return;

    const columns = gridContainer.querySelectorAll('.pixel-column');
    if (!columns.length) return;

    // Signature Mahadeva Pastel Accent Palette
    const pastelColors = [
        '#dcffe4', // Green
        '#b0e3ff', // Blue
        '#ffe5f9', // Pink
        '#ffd9a8', // Orange
        '#eadfff', // Purple
        'transparent'
    ];

    // Build grid cells inside columns dynamically
    columns.forEach(col => {
        const cellCount = Math.floor(Math.random() * 4) + 6; // 6 to 9 rows
        for (let i = 0; i < cellCount; i++) {
            const cellHeight = Math.floor(Math.random() * 15) + 10; // 10% to 25% height
            const cell = document.createElement('div');
            cell.className = 'pixel-cell';
            cell.style.height = `${cellHeight}%`;

            const inner = document.createElement('div');
            inner.className = 'pixel-cell-inner';
            inner.style.backgroundColor = 'transparent';

            cell.appendChild(inner);
            col.appendChild(cell);
        }
    });

    // Color shifting rotation loop
    const cellsInner = gridContainer.querySelectorAll('.pixel-cell-inner');
    function triggerColorShift() {
        // Randomly colorize 25% of cells
        cellsInner.forEach(cell => {
            if (Math.random() > 0.72) {
                const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
                cell.style.backgroundColor = color;
                cell.style.transform = `scale(${Math.random() * 0.2 + 0.8})`;
                cell.parentElement.style.opacity = Math.random() * 0.15 + 0.05;
            } else {
                // Decay back to transparent
                cell.style.backgroundColor = 'transparent';
                cell.style.transform = 'scale(0.9)';
                cell.parentElement.style.opacity = '0';
            }
        });
    }

    triggerColorShift();
    setInterval(triggerColorShift, 2500);
})();


/* ── 3. INTERSECTION OBSERVER FOR SCROLL REVEALS & TICKERS ── */
(function() {
    // Stats card entrance and ticking are now dynamically handled sequentially on scroll.

    // Scroll active link highlight indicator
    const links = document.querySelectorAll('.nav-link');
    document.querySelectorAll('section[id]').forEach(sec => {
        new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + sec.id));
            }
        }, { threshold: 0.3 }).observe(sec);
    });
})();


/* ── 4. SERVICES ACCORDION & 3D HOLOGRAM STAGE MORPH ENGINE ── */
(function() {
    const srvRows = document.querySelectorAll('.srv-row');
    const holograms = document.querySelectorAll('.stage-hologram');
    const servicesSection = document.getElementById('services');
    if (!srvRows.length || !servicesSection) return;

    let activationTimer = null;

    // Slower trigger: wider visible band, lower threshold
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Debounce: wait 600ms before switching row
                clearTimeout(activationTimer);
                const target = entry.target;
                activationTimer = setTimeout(() => {
                    activateRow(target);
                }, 600);
            }
        });
    }, {
        root: null,
        rootMargin: '-15% 0px -15% 0px',
        threshold: 0.4
    });

    srvRows.forEach(row => {
        observer.observe(row);
        
        row.addEventListener('click', () => {
            clearTimeout(activationTimer);
            activateRow(row);
        });
    });

    function activateRow(row) {
        srvRows.forEach(r => r.classList.remove('active'));
        row.classList.add('active');

        // Target active 3D hologram asset
        const serviceId = row.getAttribute('data-service');
        holograms.forEach(holo => {
            holo.classList.remove('active');
            if (holo.id === `holo-${serviceId}`) {
                holo.classList.add('active');
            }
        });
    }
})();


/* ── 5. DYNAMIC REACT SHOWCASE DRAWER ENGINE (REACT INTEGRATION) ── */
(function() {
    const e = React.createElement;

    // Full Projects Dataset
    const projectsData = [
        {
            id: "znu",
            title: { en: "ZNU PLATFORM", ar: "منصة جامعة الزقازيق الأهلية" },
            category: { en: "Zagazig National University Platform — DevOps & Web Portal", ar: "منصة جامعة الزقازيق الأهلية — تكامل الـ DevOps والموقع الأكاديمي" },
            year: "2026",
            type: "DevOps / Cloud",
            tags: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Docker", "Supabase", "JWT", "TailwindCSS"],
            description: {
                en: "A secure, containerized academic portal serving 3 main hubs (Admin, Lecturer, and Student portals) alongside dynamic timetables, automated attendance, and course tracking.",
                ar: "بوابة أكاديمية آمنة ومجهزة في حاويات برمجية تخدم 3 لوحات تحكم رئيسية (الأدمن، المحاضر، والطالب) مع تنظيم الجداول ورصد الحضور والغياب ومتابعة المقررات."
            },
            features: {
                en: [
                    "Fully containerized microservices architecture using Docker & Docker Compose.",
                    "Robust authentication utilizing Supabase, JWT, and Google/Microsoft OAuth.",
                    "Automated PostgreSQL database schema initialization on first run.",
                    "Dynamic timetable generators, multi-role portal support, and course tracking dashboards."
                ],
                ar: [
                    "بنية برمجية معتمدة على حاويات Docker و Docker Compose لسهولة التشغيل والتطوير.",
                    "نظام مصادقة قوي ومرن بالاعتماد على Supabase و JWT وتسجيل الدخول بحسابات Google و Microsoft.",
                    "بناء وتهيئة قاعدة بيانات PostgreSQL تلقائياً بالكامل بمجرد بدء السيرفر.",
                    "أنظمة ديناميكية لإنشاء الجداول، لوحات تحكم متعددة الصلاحيات، وتتبع تقدم الطلاب الأكاديمي."
                ]
            },
            demoUrl: "https://www.znu-cs.online/",
            githubUrl: "https://github.com/men3emkhaled/academic-portal"
        },
        {
            id: "tazkarti",
            title: { en: "TAZKARTI MONITOR", ar: "بوت مراقبة تذكرتي" },
            category: { en: "Tazkarti Monitoring Bot — Python / Telebot / Neon PostgreSQL", ar: "بوت مراقبة تذكرتي — Python / Telebot / PostgreSQL" },
            year: "2026",
            type: "Automation",
            tags: ["Python", "Telebot", "PostgreSQL", "Docker", "Requests", "Multi-threading"],
            description: {
                en: "A high-performance automated ticketing monitor that continuously tracks availability, ticket categories, and fan queues on the Egyptian Tazkarti booking platform. Implemented with persistent caching in Neon PostgreSQL and multi-threaded check loops with dynamic proxy rotation to send instant Telegram alerts to thousands of active football fans.",
                ar: "بوت مؤتمت عالي الأداء لتتبع ومراقبة توافر التذاكر، فئات المقاعد، وطوابير الانتظار الجماهيرية على منصة تذكرتي لحجز المباريات المصرية. مبني باستخدام تتبع الحالات المخزنة في قاعدة بيانات Neon PostgreSQL، مع نظام تشغيل متعدد الخيوط وجدول فحص سريع مع تدوير البروكسيات لتفادي الحظر وإرسال إشعارات فورية لآلاف المشجعين."
            },
            features: {
                en: [
                    "Real-time Seat Categories Tracker: Detects when specific category tickets are sold out or re-opened.",
                    "Persistent Status Caching: Uses Neon PostgreSQL database to prevent duplicate and annoying duplicate notifications.",
                    "Multi-Threaded Architecture: Background API polling loops run concurrently alongside the interactive Telegram Bot interface.",
                    "Smart Fan Filtering: Automatically filters and targets match alerts for popular football clubs (Al Ahly, Zamalek, etc.)."
                ],
                ar: [
                    "مراقبة فئات التذاكر لحظياً: تتبع وتحديد نفاد التذاكر أو إعادة طرحها لكل درجة في الملعب.",
                    "حفظ مؤقت ذكي للحالة: الاعتماد على PostgreSQL لمنع تكرار الإرسال المزعج للمستخدمين عند استقرار البيانات.",
                    "بنية متعددة الخيوط (Multi-threading): تشغيل الفحص الدوري في الخلفية بالتزامن مع واجهة أوامر البوت التفاعلية.",
                    "تصفية جماهيرية مخصصة: تصفية المباريات تلقائياً للتركيز على الفرق ذات الشعبية الكبرى (الأهلي، الزمالك، الإسماعيلي، إلخ)."
                ]
            },
            demoUrl: "https://t.me/tazkaarti",
            githubUrl: "https://github.com/men3emkhaled"
        },
        {
            id: "agent-assistant",
            title: { en: "AGENT ASSISTANT", ar: "إضافة Agent Assistant" },
            category: { en: "Agent Assistant VS Code Extension — AI Expert Persona & Quota Management", ar: "إضافة Agent Assistant لـ VS Code — إدارة الحسابات وحقن مهارات الذكاء الاصطناعي" },
            year: "2026",
            type: "AI / VS Code",
            tags: ["TypeScript", "VS Code API", "AI Systems", "Prompt Injection", "Account Manager", "Developer Tools"],
            description: {
                en: "A powerful VS Code extension designed to streamline AI-assisted development. It manages multiple Antigravity accounts directly from the sidebar with real-time balance tracking, and automatically injects custom, persistent expert prompt personas (30+ skills) across all major AI agent configuration files (such as GEMINI.md, CLAUDE.md, and .cursorrules).",
                ar: "إضافة متطورة لـ VS Code مصممة لتنظيم وتسريع التطوير المعتمد على الذكاء الاصطناعي. تتيح إدارة حسابات Antigravity المتعددة مباشرة من الشريط الجانبي مع مراقبة الرصيد في الوقت الفعلي، وتقوم بحقن مهارات وخبرات الذكاء الاصطناعي المتخصصة (أكثر من 30 مهارة) تلقائياً في ملفات إعدادات الـ Agents (مثل GEMINI.md و CLAUDE.md و .cursorrules) لضمان ثبات هوية المساعد الذكي طوال الجلسة."
            },
            features: {
                en: [
                    "Multi-Account Management: Track balances in real-time and switch between Antigravity accounts with one click.",
                    "Persistent Skill Injection: Automatically writes instructions to GEMINI.md, CLAUDE.md, .cursorrules, and .vscode/settings.json.",
                    "Expert Persona Library: Over 30 pre-configured developer, design, infrastructure, and productivity skills.",
                    "Automatic Re-injection: Restores active skills on VS Code startup without manual intervention."
                ],
                ar: [
                    "إدارة الحسابات المتعددة: متابعة الأرصدة في الوقت الفعلي والتبديل بين حسابات Antigravity بنقرة واحدة.",
                    "حقن المهارات الثابت: كتابة التعليمات تلقائياً في ملفات GEMINI.md، CLAUDE.md، .cursorrules، وغيرها.",
                    "مكتبة مهارات برمجية غنية: أكثر من 30 مهارة متخصصة تغطي التطوير، التصميم، البنية التحتية والإنتاجية.",
                    "إعادة الحقن التلقائي: استعادة المهارات النشطة تلقائياً بمجرد فتح VS Code."
                ]
            },
            demoUrl: "https://open-vsx.org/extension/Men3emkhaled/agent-assistant",
            githubUrl: "https://github.com/men3emkhaled/agent-assistant-extension"
        }
    ];

    const ProjectHubComponent = () => {
        const [activeProject, setActiveProject] = React.useState(null);
        const [showArchive, setShowArchive] = React.useState(false);
        const [searchQuery, setSearchQuery] = React.useState("");
        const [activeFilter, setActiveFilter] = React.useState("All");
        const [lang, setLang] = React.useState(currentLang);

        React.useEffect(() => {
            const interval = setInterval(() => {
                if (currentLang !== lang) {
                    setLang(currentLang);
                }
            }, 100);
            return () => clearInterval(interval);
        }, [lang]);

        // Hash Navigation routing logic
        React.useEffect(() => {
            const handleHash = () => {
                const hash = window.location.hash;
                if (hash.startsWith("#/project/")) {
                    const id = hash.replace("#/project/", "");
                    const found = projectsData.find(p => p.id === id);
                    if (found) {
                        setActiveProject(found);
                        setShowArchive(false);
                        document.body.classList.add('modal-open');
                    }
                } else if (hash.startsWith("#/works")) {
                    setShowArchive(true);
                    setActiveProject(null);
                    document.body.classList.add('modal-open');
                    const parts = hash.split("?filter=");
                    if (parts.length > 1) {
                        setActiveFilter(parts[1]);
                    } else {
                        setActiveFilter("All");
                    }
                } else {
                    setActiveProject(null);
                    setShowArchive(false);
                    document.body.classList.remove('modal-open');
                }
            };

            window.addEventListener('hashchange', handleHash);
            handleHash(); // Run on mount
            
            return () => window.removeEventListener('hashchange', handleHash);
        }, []);

        const closeAll = () => {
            window.location.hash = "#work";
        };

        // Filter and Search Projects logic
        const filteredProjects = projectsData.filter(p => {
            const matchesQuery = p.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            
            if (activeFilter === "All") return matchesQuery;
            if (activeFilter === "Web") return matchesQuery && p.type.includes("Web");
            if (activeFilter === "Mobile") return matchesQuery && p.type.includes("Mobile");
            if (activeFilter === "DevOps") return matchesQuery && p.type.includes("DevOps");
            if (activeFilter === "Automation") return matchesQuery && p.type.includes("Automation");
            return matchesQuery;
        });

        // 1. Details Sidebar Drawer view
        if (activeProject) {
            const proj = activeProject;
            return e("div", { className: "hub-overlay active" }, [
                e("div", { className: "hub-bg", onClick: closeAll }),
                e("div", { className: "drawer-container" }, [
                    // Header
                    e("div", { className: "drawer-header" }, [
                        e("h2", { className: "drawer-title" }, proj.title[lang]),
                        e("button", { className: "drawer-close", onClick: closeAll }, "✕")
                    ]),
                    // Content
                    e("div", { className: "drawer-body" }, [
                        e("div", { className: "drawer-tags" }, 
                            proj.tags.map(t => e("span", { className: "drawer-tag", key: t }, t))
                        ),
                        e("p", { className: "drawer-desc" }, proj.description[lang]),
                        e("h3", { className: "drawer-features-title" }, lang === 'ar' ? "الميزات والقدرات" : "Key Features & Capabilities"),
                        e("ul", { className: "drawer-features-list" }, 
                            proj.features[lang].map((f, i) => e("li", { key: i }, f))
                        ),
                        // Actions
                        e("div", { className: "drawer-actions" }, [
                            e("a", { href: proj.demoUrl, target: "_blank", className: "pixel-btn" }, [
                                lang === 'ar' ? "رابط العرض" : "Live Demo", 
                                e("span", { className: "btn-arrow" }, " ↗")
                            ]),
                            e("a", { href: proj.githubUrl, target: "_blank", className: "pixel-btn btn-outline" }, [
                                "GitHub", 
                                e("span", { className: "btn-arrow" }, " ↗")
                            ])
                        ])
                    ])
                ])
            ]);
        }

        // 2. All Projects Gallery/Archive Modal view
        if (showArchive) {
            const filterTabs = ["All", "Web", "Mobile", "DevOps", "Automation"];
            return e("div", { className: "hub-overlay active" }, [
                e("div", { className: "hub-bg", onClick: closeAll }),
                e("div", { className: "archive-modal" }, [
                    // Header
                    e("div", { className: "archive-header" }, [
                        e("h2", { className: "drawer-title" }, lang === 'ar' ? "أرشيف المشاريع" : "Project Archive"),
                        e("button", { className: "drawer-close", onClick: closeAll }, "✕")
                    ]),
                    // Search and Filter Bar
                    e("div", { className: "archive-search-container" }, [
                        e("input", {
                            type: "text",
                            className: "archive-search-input",
                            placeholder: lang === 'ar' ? "ابحث عن مشروع أو مهارة..." : "Search project, tech or tool...",
                            value: searchQuery,
                            onChange: (e) => setSearchQuery(e.target.value)
                        }),
                        e("div", { className: "drawer-tags", style: { marginTop: "16px", marginBottom: 0 } }, 
                            filterTabs.map(tab => e("span", {
                                className: `drawer-tag ${activeFilter === tab ? "active" : ""}`,
                                style: { 
                                    cursor: "pointer", 
                                    borderColor: activeFilter === tab ? "var(--pastel-green)" : "rgba(255,255,255,0.08)",
                                    background: activeFilter === tab ? "rgba(140,255,167,0.05)" : "rgba(255,255,255,0.03)",
                                    color: activeFilter === tab ? "var(--pastel-green)" : "rgba(255,255,255,0.6)"
                                },
                                key: tab,
                                onClick: () => {
                                    setActiveFilter(tab);
                                    window.location.hash = `#/works?filter=${tab}`;
                                }
                            }, lang === 'ar' ? (
                                tab === "All" ? "الكل" :
                                tab === "Web" ? "مواقع" :
                                tab === "Mobile" ? "تطبيقات" :
                                tab === "DevOps" ? "سحابة و DevOps" : "أتمتة وبوتات"
                            ) : tab))
                        )
                    ]),
                    // List
                    e("div", { className: "archive-body" }, [
                        e("div", { className: "archive-list" }, 
                            filteredProjects.map(p => e("div", {
                                className: "archive-row-item",
                                key: p.id,
                                onClick: () => { window.location.hash = `#/project/${p.id}`; }
                            }, [
                                e("div", { className: "archive-row-left", key: "left" }, [
                                    e("span", { className: "archive-row-title" }, p.title[lang]),
                                    e("span", { className: "archive-row-subtitle" }, p.category[lang])
                                ]),
                                e("span", { className: "archive-row-right", key: "right" }, `● ${p.year}`)
                            ]))
                        )
                    ])
                ])
            ]);
        }

        return null;
    };

    // Mount to window variables for global access
    window.openProjectDetails = (id) => {
        window.location.hash = `#/project/${id}`;
    };

    window.openAllWorks = () => {
        window.location.hash = `#/works`;
    };

    window.openWorksWithFilter = (filter) => {
        window.location.hash = `#/works?filter=${filter}`;
    };

    // Render to DOM mount point
    const rootEl = document.getElementById('project-hub-root');
    if (rootEl) {
        const root = ReactDOM.createRoot(rootEl);
        root.render(e(ProjectHubComponent));
    }
})();

/* ── 12. SCROLL REVEAL COLLAB GATE ENGINE ── */
(function() {
    const wrapper = document.querySelector('.contact-scroll-wrapper');
    const gateLeft = document.querySelector('.gate-left');
    const gateRight = document.querySelector('.gate-right');
    const gateContent = document.querySelector('.gate-content');
    if (!wrapper || !gateLeft || !gateRight || !gateContent) return;

    function updateGate() {
        if (window.innerWidth <= 991) {
            // Reset mobile state
            gateContent.style.opacity = '';
            gateContent.style.transform = '';
            gateLeft.style.transform = '';
            gateRight.style.transform = '';
            gateLeft.style.opacity = '';
            gateRight.style.opacity = '';
            return;
        }

        const rect = wrapper.getBoundingClientRect();
        const totalHeight = rect.height;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const wrapperTop = wrapper.offsetTop;
        const scrollRange = totalHeight - window.innerHeight;
        
        if (scrollRange <= 0) return;
        
        let progress = (scrollTop - wrapperTop) / scrollRange;
        progress = Math.max(0, Math.min(1, progress));
        
        if (progress < 0.45) {
            // Closed gate, fully visible "Are you ready?" text
            gateContent.style.opacity = '1';
            gateContent.style.transform = 'scale(1)';
            gateLeft.style.transform = 'translateX(0)';
            gateRight.style.transform = 'translateX(0)';
            gateLeft.style.opacity = '1';
            gateRight.style.opacity = '1';
        } else if (progress >= 0.45 && progress < 0.95) {
            // Fade out text first (from 0.45 to 0.65 progress)
            const textProg = Math.max(0, Math.min(1, (progress - 0.45) / 0.2));
            gateContent.style.opacity = (1 - textProg).toString();
            gateContent.style.transform = `scale(${1 - textProg * 0.1})`;
            
            // Split gate (from 0.55 to 0.95 progress)
            const splitProg = Math.max(0, Math.min(1, (progress - 0.55) / 0.4));
            
            // Left half slides left, right half slides right
            gateLeft.style.transform = `translateX(${-splitProg * 101}%)`;
            gateRight.style.transform = `translateX(${splitProg * 101}%)`;
            
            // Gradually fade out gate halves slightly to make transition to content completely seamless
            const fadeOut = Math.max(0, Math.min(1, (progress - 0.75) / 0.2));
            gateLeft.style.opacity = (1 - fadeOut * 0.5).toString();
            gateRight.style.opacity = (1 - fadeOut * 0.5).toString();
        } else {
            // Fully open
            gateContent.style.opacity = '0';
            gateLeft.style.transform = 'translateX(-101%)';
            gateRight.style.transform = 'translateX(101%)';
            gateLeft.style.opacity = '0';
            gateRight.style.opacity = '0';
        }
    }

    // Run on scroll and on load/resize
    window.addEventListener('scroll', updateGate, { passive: true });
    window.addEventListener('resize', updateGate);
    // Delay slightly to ensure layout and offsetTop are computed correctly
    setTimeout(updateGate, 100);
})();

/* ── 13. SCROLL REVEAL CATEGORY CAROUSEL ENGINE ── */
(function() {
    const wrapper = document.querySelector('.skills-scroll-wrapper');
    const skillsSec = document.getElementById('skills');
    const slides = document.querySelectorAll('.skills-section .stack-slide');
    if (!wrapper || !skillsSec || !slides.length) return;

    function updateSkillsAnimation() {
        // Only run scroll-driven absolute carousel on desktop screens (width > 991px)
        if (window.innerWidth <= 991) {
            slides.forEach(slide => {
                slide.classList.add('active');
            });
            return;
        }

        const rect = wrapper.getBoundingClientRect();
        const totalHeight = rect.height;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const wrapperTop = wrapper.offsetTop;
        const scrollRange = totalHeight - window.innerHeight;
        
        if (scrollRange <= 0) return;
        
        let progress = (scrollTop - wrapperTop) / scrollRange;
        progress = Math.max(0, Math.min(1, progress));
        
        // Determine active slide index based on progress (4 slides)
        const slideCount = slides.length;
        const activeIndex = Math.min(slideCount - 1, Math.floor(progress * slideCount));
        
        slides.forEach((slide, i) => {
            if (i === activeIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    // Run on scroll, resize, and load
    window.addEventListener('scroll', updateSkillsAnimation, { passive: true });
    window.addEventListener('resize', updateSkillsAnimation);
    
    // Set initial layout states on load
    setTimeout(updateSkillsAnimation, 100);
})();

/* ── 14. SCROLL REVEAL SEQUENTIAL STAT CARDS ENGINE ── */
(function() {
    const wrapper = document.querySelector('.about-scroll-wrapper');
    const aboutSec = document.getElementById('about');
    const cards = document.querySelectorAll('.about-section .stat-card');
    if (!wrapper || !aboutSec || !cards.length) return;

    // Define card animation progress ranges sequentially
    const ranges = [
        { start: 0.1, end: 0.3 },   // Card 1
        { start: 0.3, end: 0.5 },   // Card 2
        { start: 0.5, end: 0.7 },   // Card 3
        { start: 0.7, end: 0.9 }    // Card 4
    ];

    // Tracker for counting animations to prevent duplicate running
    const animatedCards = [false, false, false, false];

    function updateStatsAnimation() {
        // Only run scroll animation on desktop screens (width > 991px)
        if (window.innerWidth <= 991) {
            // Reset mobile states
            cards.forEach((card, i) => {
                card.style.opacity = '';
                card.style.transform = '';
                
                // If not animated on mobile, ensure text gets target immediately
                const numEl = card.querySelector('.stat-number');
                if (numEl && !animatedCards[i]) {
                    animatedCards[i] = true;
                    numEl.textContent = numEl.getAttribute('data-t') + '+';
                }
            });
            return;
        }

        const rect = wrapper.getBoundingClientRect();
        const totalHeight = rect.height;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const wrapperTop = wrapper.offsetTop;
        const scrollRange = totalHeight - window.innerHeight;
        
        if (scrollRange <= 0) return;
        
        let progress = (scrollTop - wrapperTop) / scrollRange;
        progress = Math.max(0, Math.min(1, progress));
        
        cards.forEach((card, i) => {
            const range = ranges[i];
            let cardProg = (progress - range.start) / (range.end - range.start);
            cardProg = Math.max(0, Math.min(1, cardProg));
            
            // Cubic ease out for straight, snappy translations
            const eased = cardProg * cardProg * (3 - 2 * cardProg);
            
            // Apply straight snappy translation without blur or rotate
            card.style.opacity = eased.toString();
            card.style.transform = `translateY(${(1 - eased) * 45}px)`;

            // Trigger counting animation precisely when this card starts revealing!
            if (cardProg > 0.05 && !animatedCards[i]) {
                animatedCards[i] = true;
                const numEl = card.querySelector('.stat-number');
                if (numEl) {
                    const target = parseInt(numEl.getAttribute('data-t'), 10);
                    const startTime = performance.now();
                    const duration = 1200; // Snappy counting animation duration

                    function tick(now) {
                        const elapsed = now - startTime;
                        const prog = Math.min(elapsed / duration, 1);
                        const easeNum = prog * (2 - prog);
                        
                        numEl.textContent = Math.floor(easeNum * target) + '+';
                        
                        if (prog < 1) {
                            requestAnimationFrame(tick);
                        } else {
                            numEl.textContent = target + '+';
                        }
                    }
                    requestAnimationFrame(tick);
                }
            }
        });
    }

    // Run on scroll, resize, and load
    window.addEventListener('scroll', updateStatsAnimation, { passive: true });
    window.addEventListener('resize', updateStatsAnimation);
    
    // Set initial layout states on load
    setTimeout(updateStatsAnimation, 100);
})();



