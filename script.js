/* ── 0. MULTI-LANGUAGE LOCALIZATION (i18n) ── */
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
        hero_desc: "Full-stack engineer turning ideas into production-ready systems — from responsive web apps and mobile clients to cloud infrastructure and smart integrations.",
        hero_cta: "LET'S CONTACT",
        spin_badge_path: "FULL-STACK • DEVOPS • MOBILE • CLOUD • ENGINEER •",
        about_label: "(ABOUT ME)",
        about_text: "I am a Software and DevOps Engineer with practical experience in building websites, mobile apps using Flutter/Dart, and smart automation systems/bots. I transform complex ideas into stable, fast, and scalable software solutions.",
        about_cta: "LET'S CONTACT",
        stat_exp: "YEARS EXPERIENCE",
        stat_proj: "SUCCESSFUL PROJECTS",
        stat_users: "TOTAL USERS",
        stat_tech: "TECHNOLOGIES USED",
        work_label: "(SELECTED WORK)",
        work_proj1_chip1: "Students",
        work_proj1_chip2: "Services",
        work_proj1_chip3: "Faculty",
        work_proj1_title: "ZNU PLATFORM",
        work_proj1_cat: "Zagazig National University Platform — Web Portal + Flutter Mobile App",
        work_proj2_msg1: "Scanning tickets...",
        work_proj2_msg2: "Alert! Tickets available now",
        work_proj2_title: "TAZKARTI MONITOR",
        work_proj2_cat: "Tazkarti Monitoring Bot — Python / Asyncio / Telegram",
        work_proj3_msg1: "✓ Skills loaded",
        work_proj3_msg2: "✓ Ready for tasks",
        work_proj3_title: "AGENT ASSISTANT",
        work_proj3_cat: "Agent Assistant Chrome Extension — JS / LLM APIs",
        work_proj4_title: "MEDIA DOWNLOADER",
        work_proj4_cat: "Media Downloader Bot — Node.js / FFmpeg / Multi-Platform",
        work_see_all: "SEE ALL WORKS",
        services_label: "(SERVICES)",
        services_title_main: "SERVICE EXPERTISE",
        services_desc_main: "Combining deep technical experience with modern automation practices to deliver fast, scalable, and secure software solutions. My services cover full-stack development, cloud infrastructure, and smart task automation.",
        services_cta: "LET'S TALK",
        services_discover: "DISCOVER",
        service1_title: "Software Development",
        service1_desc: "Building fast, responsive websites and cross-platform mobile apps using Flutter and modern tech.",
        service2_title: "DevOps & Cloud",
        service2_desc: "Managing cloud infrastructure, setting up CI/CD, performance monitoring, and server scaling.",
        service3_title: "Automation & Bots",
        service3_desc: "Creating smart Telegram/WhatsApp automation bots, custom scrapers, and task script tools.",
        collab_sub_label: "Let's Get Started",
        collab_title_main: "LET'S COLLABORATE",
        footer_brand_desc: "I build, develop, and manage integrated systems and software with a focus on efficiency, automation, and scalability.",
        footer_sub_btn: "Email Me",
        footer_col_pages: "Pages",
        footer_col_projects: "Projects",
        footer_col_socials: "Socials",
        footer_copy: "© Copyright 2026 | Design By Men3em | All rights reserved"
    },
    ar: {
        logo: "منعم",
        nav_home: "الرئيسية",
        nav_about: "من أنا",
        nav_work: "أعمالي",
        nav_services: "الخدمات",
        nav_contact: "تواصل معي",
        hero_title_1: "برمجة",
        hero_title_2: "تكامل",
        hero_title_3: "توسع",
        hero_desc: "مهندس برمجيات يحوّل الأفكار لأنظمة جاهزة للإنتاج — من مواقع ويب وتطبيقات موبايل متكاملة، إلى بنية سحابية وتكاملات ذكية.",
        hero_cta: "تواصل معي",
        spin_badge_path: "فول ستاك • ديف أوبس • موبايل • سحابي • هندسة •",
        about_label: "(من أنا)",
        about_text: "مهندس برمجيات وDevOps بخبرة عملية في بناء مواقع الويب، تطبيقات الهواتف الذكية بـ Flutter/Dart، وأنظمة الأتمتة والبوتات الذكية. أحوّل الأفكار المعقدة لحلول برمجية مستقرة وسريعة وقابلة للتوسع.",
        about_cta: "تواصل معي",
        stat_exp: "سنوات الخبرة",
        stat_proj: "مشاريع ناجحة",
        stat_users: "إجمالي المستخدمين",
        stat_tech: "تقنية مستخدمة",
        work_label: "(أعمال مختارة)",
        work_proj1_chip1: "الطلاب",
        work_proj1_chip2: "الخدمات",
        work_proj1_chip3: "الكلية",
        work_proj1_title: "منصة جامعة الزقازيق الأهلية",
        work_proj1_cat: "منصة جامعة الزقازيق الأهلية — موقع ويب + تطبيق Flutter",
        work_proj2_msg1: "جاري فحص التذاكر...",
        work_proj2_msg2: "تنبيه! تذاكر متوفرة الآن",
        work_proj2_title: "بوت مراقبة تذكرتي",
        work_proj2_cat: "بوت مراقبة تذكرتي — Python / Asyncio / Telegram",
        work_proj3_msg1: "✓ تم تحميل المهارات",
        work_proj3_msg2: "✓ جاهز للمهام",
        work_proj3_title: "إضافة Agent Assistant",
        work_proj3_cat: "إضافة Agent Assistant — Chrome Extension / JS / LLM",
        work_proj4_title: "بوت تنزيل الوسائط",
        work_proj4_cat: "بوت تنزيل الوسائط — Node.js / FFmpeg / Multi-Platform",
        work_see_all: "رؤية كل الأعمال",
        services_label: "(خدماتي)",
        services_title_main: "خبرة الخدمات",
        services_desc_main: "أجمع بين الخبرة التقنية العميقة وممارسات الأتمتة الحديثة لتقديم حلول برمجية سريعة وقابلة للتوسع وآمنة. تشمل خدماتي التطوير المتكامل، البنية السحابية، وأتمتة المهام الذكية.",
        services_cta: "تواصل معي",
        services_discover: "اكتشف",
        service1_title: "تطوير البرمجيات",
        service1_desc: "بناء مواقع ويب سريعة وتطبيقات هواتف متعددة المنصات باستخدام Flutter وأحدث التقنيات.",
        service2_title: "DevOps والبنية السحابية",
        service2_desc: "إدارة البنية التحتية السحابية، إعداد أنابيب CI/CD، مراقبة الأداء وحل مشكلات الاستقرار والكفاءة.",
        service3_title: "البوتات وأتمتة المهام",
        service3_desc: "بوتات تيليجرام متطورة للمراقبة اللحظية، سحب البيانات، وأتمتة المهام.",
        collab_sub_label: "دعنا نبدأ",
        collab_title_main: "دعنا نتعاون",
        footer_brand_desc: "أقوم ببناء وتطوير وإدارة الأنظمة والبرمجيات المتكاملة مع التركيز على الكفاءة، الأتمتة، وقابلية التوسع.",
        footer_sub_btn: "راسلني",
        footer_col_pages: "الصفحات",
        footer_col_projects: "المشاريع",
        footer_col_socials: "الحسابات",
        footer_copy: "© حقوق النشر 2026 | تصميم وتطوير منعم | جميع الحقوق محفوظة"
    }
};

let currentLang = localStorage.getItem('lang') || 'ar';

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Toggle document attributes for layout shift
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const header = document.getElementById('header');
    const hero = document.getElementById('home');
    const heroOverlay = document.querySelector('.hero-overlay-content');
    
    if (header) header.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    if (hero) hero.setAttribute('dir', 'ltr');
    if (heroOverlay) heroOverlay.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update Language Button text (show opposite option)
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
    }
}

// Initial application
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
    
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            localStorage.setItem('lang', currentLang);
            applyTranslations(currentLang);
        });
    }
});

/* ── 1. HEADER SCROLL ── */
const headerEl = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (headerEl) {
        headerEl.classList.toggle('scrolled', window.scrollY > 50);
    }
}, { passive: true });

/* ── 2. PARTICLE BACKGROUND ── */
(function () {
    const c = document.getElementById('bg-canvas');
    if (!c) return;
    const ctx = c.getContext('2d');
    let W, H;
    const mouse = { x: -999, y: -999 };

    function resize() { W = c.width = window.innerWidth; H = c.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

    const pts = Array.from({ length: 55 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - .5) * .35,
        vy: (Math.random() - .5) * .35,
        r: Math.random() * 1.3 + .5,
    }));

    (function loop() {
        ctx.clearRect(0, 0, W, H);
        pts.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
            const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy);
            if (d < 140) { p.x -= dx * (140 - d) / 140 * .018; p.y -= dy * (140 - d) / 140 * .018; }
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,138,0,.3)'; ctx.fill();
        });
        for (let i = 0; i < pts.length - 1; i++) {
            for (let j = i + 1; j < pts.length; j++) {
                const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
                if (d < 110) {
                    ctx.beginPath();
                    ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
                    ctx.strokeStyle = `rgba(255,138,0,${(1 - d / 110) * .08})`;
                    ctx.lineWidth = .5; ctx.stroke();
                }
            }
        }
        requestAnimationFrame(loop);
    })();
})();

/* ── 3. HERO PHOTO PARALLAX ON MOUSE ── */
(function () {
    const photo = document.getElementById('hero-photo');
    if (!photo) return;
    window.addEventListener('mousemove', e => {
        const xPct = (e.clientX / window.innerWidth  - .5) * 2;
        const yPct = (e.clientY / window.innerHeight - .5) * 2;
        photo.style.transform = `translate(${xPct * -8}px, ${yPct * -6}px) scale(1.04)`;
    }, { passive: true });
})();

/* ── 4. NAV ACTIVE ── */
(function () {
    const links = document.querySelectorAll('.nav-link');
    document.querySelectorAll('section[id]').forEach(sec => {
        new IntersectionObserver(([e]) => {
            if (e.isIntersecting)
                links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + sec.id));
        }, { threshold: .35 }).observe(sec);
    });
})();

/* ── 5. STATS COUNTER ── */
(function () {
    const grid = document.querySelector('.stats-grid');
    if (!grid) return;
    let done = false;
    new IntersectionObserver(([e], obs) => {
        if (!e.isIntersecting || done) return;
        done = true; obs.disconnect();
        document.querySelectorAll('.stat-n').forEach(el => {
            const target  = parseFloat(el.dataset.t);
            const isFloat = !!el.dataset.float;
            const t0 = performance.now();
            (function tick(now) {
                const p = Math.min((now - t0) / 2000, 1), ease = p * (2 - p);
                el.textContent = isFloat
                    ? (ease * target).toFixed(1) + '%'
                    : Math.floor(ease * target) + '+';
                if (p < 1) requestAnimationFrame(tick);
                else el.textContent = isFloat ? target + '%' : target + '+';
            })(t0);
        });
    }, { threshold: .25 }).observe(grid);
})();

/* ── 6. REVEAL ON SCROLL ── */
(function () {
    const selectors = [
        '.proj-card', '.srv-row', '.stat-card',
        '.about-text', '.collab-wrapper', '.footer-col',
        '.work-footer'
    ];
    selectors.forEach((sel, si) => {
        document.querySelectorAll(sel).forEach((el, i) => {
            el.classList.add('reveal');
            if (i === 1) el.classList.add('reveal-d1');
            if (i === 2) el.classList.add('reveal-d2');
            if (i === 3) el.classList.add('reveal-d3');
        });
    });

    const obs = new IntersectionObserver((entries, o) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                o.unobserve(entry.target);
            }
        });
    }, { threshold: .07 });

    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ── 7. CONTACT FORM ── */
(function () {
    const form = document.getElementById('cform');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn  = form.querySelector('button[type="submit"]');
        const orig = btn.innerHTML;
        
        const successMsg = currentLang === 'ar' ? 'تم الإرسال بنجاح' : 'Sent Successfully';
        btn.innerHTML = `<span>${successMsg}</span><span class="cta-arrow" style="background:#1a6b1a"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>`;
        btn.style.pointerEvents = 'none';
        
        setTimeout(() => { btn.innerHTML = orig; btn.style.pointerEvents = ''; form.reset(); }, 3500);
    });
})();

/* ── 8. DYNAMIC PROJECT SHOWCASE HUB (REACT SPA ENGINE) ── */
(function () {
    const e = React.createElement;

    // Rich Data Source for All Projects
    const projectsData = [
        {
            id: "znu",
            title: { en: "ZNU PLATFORM", ar: "منصة جامعة الزقازيق الأهلية" },
            category: { en: "Zagazig National University Platform — Web Portal + Flutter Mobile App", ar: "منصة جامعة الزقازيق الأهلية — موقع ويب + تطبيق Flutter" },
            year: "2023",
            type: "Web / Mobile",
            tags: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Docker", "Supabase", "JWT", "TailwindCSS"],
            description: {
                en: "A secure, containerized academic portal designed for managing university ecosystems. Features separate portals for students and doctors to manage accounts, courses, dynamic timetables, interactive quizzes, and automated attendance tracking.",
                ar: "منصة أكاديمية آمنة ومؤتمتة بالكامل لإدارة البيئة التعليمية والجامعية. توفر لوحات تحكم مستقلة للطلاب وأعضاء هيئة التدريس لإدارة الحسابات، المواد، الجداول الدراسية الديناميكية، الاختبارات التفاعلية، ورصد الحضور والغياب."
            },
            features: {
                en: [
                    "Fully containerized microservices architecture using Docker & Docker Compose.",
                    "Robust authentication utilizing Supabase, JWT, and Google/Microsoft OAuth.",
                    "Automated PostgreSQL database schema initialization on first run.",
                    "Dynamic timetable generators, interactive student quizzes, and course tracking dashboards."
                ],
                ar: [
                    "بنية برمجية معتمدة على حاويات Docker و Docker Compose لسهولة التشغيل والتطوير.",
                    "نظام مصادقة قوي ومرن بالاعتماد على Supabase و JWT وتسجيل الدخول بحسابات Google و Microsoft.",
                    "بناء وتهيئة قاعدة بيانات PostgreSQL تلقائياً بالكامل بمجرد بدء السيرفر.",
                    "أنظمة ديناميكية لإنشاء الجداول، اختبارات تفاعلية، ولوحات تحكم شاملة لمتابعة تقدم الطلاب الأكاديمي."
                ]
            },
            demoUrl: "https://www.znu-cs.online/",
            githubUrl: "https://github.com/men3emkhaled/academic-portal",
            visualType: "znu"
        },
        {
            id: "tazkarti",
            title: { en: "TAZKARTI MONITOR", ar: "بوت مراقبة تذكرتي" },
            category: { en: "Tazkarti Monitoring Bot — Python / Telebot / Neon PostgreSQL", ar: "بوت مراقبة تذكرتي — Python / Telebot / PostgreSQL" },
            year: "2024",
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
            githubUrl: "https://github.com/men3emkhaled",
            visualType: "tazkarti"
        },
        {
            id: "agent-assistant",
            title: { en: "AGENT ASSISTANT", ar: "إضافة Agent Assistant" },
            category: { en: "Agent Assistant VS Code Extension — AI Expert Persona & Quota Management", ar: "إضافة Agent Assistant لـ VS Code — إدارة الحسابات وحقن مهارات الذكاء الاصطناعي" },
            year: "2025",
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
            githubUrl: "https://github.com/men3emkhaled/agent-assistant-extension",
            visualType: "agent"
        },
        {
            id: "media-downloader",
            title: { en: "MEDIA DOWNLOADER", ar: "بوت تنزيل الوسائط" },
            category: { en: "Social Media Downloader Bot — Python / yt-dlp / Telegram", ar: "بوت تحميل السوشيال ميديا — Python / yt-dlp / Telegram" },
            year: "2024",
            type: "DevOps / Automation",
            tags: ["Python", "yt-dlp", "Telegram Bot API", "Neon DB", "Docker", "Railway"],
            description: {
                en: "A highly efficient Telegram bot powered by Python and yt-dlp, designed to download and stream video content from thousands of social media platforms (Facebook, TikTok, Instagram, etc.). Configured for instant deployment on Railway and backed by a Neon PostgreSQL database to manage user interactions with automatic disk-space cleanup routines.",
                ar: "بوت تليجرام عالي الكفاءة مبني بلغة بايثون ومكتبة yt-dlp، مصمم لتحميل ومشاركة مقاطع الفيديو من آلاف منصات التواصل الاجتماعي (فيسبوك، تيك توك، إنستغرام، إلخ). مهيأ بالكامل للرفع المباشر على منصة Railway ومدعوم بقاعدة بيانات Neon PostgreSQL لإدارة المستخدمين مع نظام تنظيف تلقائي للملفات لتوفير مساحة السيرفر."
            },
            features: {
                en: [
                    "Multi-Platform Support: Leverages yt-dlp core to scrape and download media from thousands of active streaming platforms.",
                    "Automated Cache Cleanup: Instantly purges downloaded media files from server storage post-delivery to minimize disk footprints.",
                    "Neon PostgreSQL Integration: Stores and manages user accounts and logs transaction statistics securely.",
                    "Dockerized Railway Deployment: Packaged using multi-stage Docker builds optimized for server environments with minimal resource consumption."
                ],
                ar: [
                    "دعم آلاف المنصات: استخدام محرك yt-dlp القوي لاستخراج وتحميل الفيديوهات من منصات البث المختلفة.",
                    "التنظيف التلقائي للمساحة: حذف مقاطع الفيديو من السيرفر فور إرسالها للمستخدم للحفاظ على سعة التخزين.",
                    "قاعدة بيانات Neon PostgreSQL: تخزين بيانات المستخدمين ورصد عمليات التحميل وسجلات الحركة بأمان.",
                    "تكامل مع Docker و Railway: مهيأ بحاوية Docker مخصصة وخفيفة للرفع الفوري على خوادم Railway بأقل استهلاك للموارد."
                ]
            },
            demoUrl: "https://t.me/socdownloaderegybot",
            githubUrl: "https://github.com/men3emkhaled/socialdownloader",
            visualType: "dl"
        }
    ];

    const ProjectHubComponent = () => {
        const [activeProject, setActiveProject] = React.useState(null);
        const [showArchive, setShowArchive] = React.useState(false);
        const [searchQuery, setSearchQuery] = React.useState("");
        const [activeFilter, setActiveFilter] = React.useState("All");
        const [lang, setLang] = React.useState(currentLang);

        // Detect language switch instantly
        React.useEffect(() => {
            const interval = setInterval(() => {
                if (currentLang !== lang) {
                    setLang(currentLang);
                }
            }, 200);
            return () => clearInterval(interval);
        }, [lang]);

        // Hash Routing Logic for direct back-button support
        React.useEffect(() => {
            const handleHash = () => {
                const hash = window.location.hash;
                if (hash.startsWith("#/project/")) {
                    const id = hash.replace("#/project/", "");
                    const found = projectsData.find(p => p.id === id);
                    if (found) {
                        setActiveProject(found);
                        setShowArchive(false);
                    }
                } else if (hash.startsWith("#/works")) {
                    setShowArchive(true);
                    setActiveProject(null);
                    const parts = hash.split("?filter=");
                    if (parts.length > 1) {
                        setActiveFilter(parts[1]);
                    } else {
                        setActiveFilter("All");
                    }
                } else {
                    setActiveProject(null);
                    setShowArchive(false);
                }
            };
            window.addEventListener("hashchange", handleHash);
            handleHash();
            return () => window.removeEventListener("hashchange", handleHash);
        }, []);

        const closeHub = () => {
            window.location.hash = "#work"; // Returns to work section
        };

        const viewProject = (id) => {
            window.location.hash = `#/project/${id}`;
        };

        if (!activeProject && !showArchive) return null;

        // Render Dynamic Visual Mockups for the Modal Preview
        const renderVisualPreview = (type) => {
            if (type === "znu") {
                return e('div', { className: 'pv-znu', style: { width: '100%', height: '100%', position: 'relative' } },
                    e('div', { className: 'pv-mockup' },
                        e('div', { className: 'pm-bar' }, e('span'), e('span'), e('span')),
                        e('img', { src: 'image.png', alt: 'ZNU Portal', className: 'pm-img' })
                    ),
                    e('div', { className: 'pv-mobile' },
                        e('img', { src: 'image copy.png', alt: 'ZNU Mobile App', className: 'pm-mobile-img' })
                    )
                );
            }
            if (type === "tazkarti") {
                return e('div', { className: 'pv-tazkarti', style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                    e('div', { className: 'pv-bot' },
                        e('div', { className: 'bot-hd' },
                            e('div', { className: 'bot-av' }, 'T'),
                            e('div', null, e('b', null, 'Tazkarti Monitor'), e('small', null, 'bot · 7,000+ users'))
                        ),
                        e('div', { className: 'bot-msg' }, lang === 'ar' ? 'جاري فحص التذاكر...' : 'Scanning tickets...'),
                        e('div', { className: 'bot-msg bot-alert' }, lang === 'ar' ? 'تنبيه! تذاكر متوفرة الآن' : 'Alert! Tickets available now')
                    )
                );
            }
            if (type === "agent") {
                return e('div', { className: 'pv-agent', style: { width: '100%', height: '100%' } },
                    e('img', { src: 'image copy 2.png', alt: 'Agent Assistant VS Code Extension', className: 'pv-full-img' })
                );
            }
            if (type === "dl") {
                return e('div', { className: 'pv-dl', style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                    e('div', { className: 'pv-dl-ui' },
                        e('div', { className: 'dl-row' }, e('span', null, 'video_4K.mp4'), e('span', { className: 'dl-pct' }, '92%')),
                        e('div', { className: 'dl-track' }, e('div', { className: 'dl-fill', style: { width: '92%' } })),
                        e('div', { className: 'dl-plats' }, e('span', null, 'YouTube'), e('span', null, 'Facebook'), e('span', null, 'Instagram'), e('span', null, 'TikTok'))
                    )
                );
            }
            return null;
        };

        // Filter and Search Logic
        const filteredProjects = projectsData.filter(p => {
            const matchesFilter = activeFilter === "All" || p.type.includes(activeFilter);
            const titleText = (p.title[lang] || p.title.en).toLowerCase();
            const descText = (p.description[lang] || p.description.en).toLowerCase();
            const query = searchQuery.toLowerCase();
            const matchesSearch = titleText.includes(query) || descText.includes(query);
            return matchesFilter && matchesSearch;
        });

        // ── RENDER SHOWCASE DETAILS VIEW ──
        if (activeProject) {
            return e('div', { className: 'ph-modal-backdrop', onClick: closeHub },
                e('div', { className: 'ph-modal-container', onClick: (e) => e.stopPropagation() },
                    e('button', { className: 'ph-close-btn', onClick: closeHub }, '✕'),
                    
                    // Left Panel: Immersive Visuals
                    e('div', { className: 'ph-visual-panel' },
                        renderVisualPreview(activeProject.visualType)
                    ),

                    // Right Panel: Details and Text
                    e('div', { className: 'ph-info-panel' },
                        e('div', { className: 'ph-meta' },
                            e('span', { className: 'ph-year-badge' }, activeProject.year),
                            e('span', null, activeProject.type)
                        ),
                        e('h2', { className: 'ph-title' }, activeProject.title[lang] || activeProject.title.en),
                        e('p', { className: 'ph-subtitle' }, activeProject.category[lang] || activeProject.category.en),
                        
                        e('div', { className: 'ph-tag-cloud' },
                            activeProject.tags.map(t => e('span', { key: t, className: 'ph-tag' }, t))
                        ),

                        e('h3', { className: 'ph-heading' }, lang === 'ar' ? 'نظرة عامة' : 'PROJECT OVERVIEW'),
                        e('p', { className: 'ph-desc' }, activeProject.description[lang] || activeProject.description.en),

                        e('h3', { className: 'ph-heading' }, lang === 'ar' ? 'الميزات الرئيسية' : 'CORE CAPABILITIES'),
                        e('ul', { className: 'ph-features-list' },
                            (activeProject.features[lang] || activeProject.features.en).map((f, i) => 
                                e('li', { key: i, className: 'ph-feature-item' },
                                    e('svg', { width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '3' },
                                        e('polyline', { points: '20 6 9 17 4 12' })
                                    ),
                                    e('span', null, f)
                                )
                            )
                        ),

                        // Action Buttons
                        e('div', { className: 'ph-actions-row' },
                            e('a', { href: activeProject.demoUrl, target: '_blank', rel: 'noopener noreferrer', className: 'cta-btn' },
                                e('span', null, lang === 'ar' ? 'زيارة المشروع' : 'LIVE DEMO'),
                                e('span', { className: 'cta-arrow' },
                                    e('svg', { width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' },
                                        e('path', { d: 'M5 12h14M12 5l7 7-7 7' })
                                    )
                                )
                            ),
                            e('a', { href: activeProject.githubUrl, target: '_blank', rel: 'noopener noreferrer', className: 'cta-btn cta-dark' },
                                e('span', null, lang === 'ar' ? 'كود المصدر' : 'SOURCE CODE'),
                                e('span', { className: 'cta-arrow' },
                                    e('svg', { width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' },
                                        e('path', { d: 'M5 12h14M12 5l7 7-7 7' })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }

        // ── RENDER ARCHIVE DASHBOARD VIEW ──
        if (showArchive) {
            return e('div', { className: 'ph-modal-backdrop', onClick: closeHub },
                e('div', { className: 'ph-modal-container', onClick: (e) => e.stopPropagation() },
                    e('button', { className: 'ph-close-btn', onClick: closeHub }, '✕'),

                    e('div', { className: 'ph-archive-container' },
                        e('div', { className: 'ph-archive-header' },
                            e('div', null,
                                e('h2', { className: 'ph-title', style: { marginBottom: '4px' } }, lang === 'ar' ? 'أرشيف الأعمال' : 'PROJECT ARCHIVE'),
                                e('p', { className: 'ph-subtitle', style: { marginBottom: '0' } }, lang === 'ar' ? 'قائمة كاملة بجميع الأنظمة والتطبيقات البرمجية' : 'Complete catalog of developed systems & applications')
                            ),
                            e('div', { className: 'ph-search-bar' },
                                e('svg', { className: 'ph-search-icon', width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' },
                                    e('circle', { cx: '11', cy: '11', r: '8' }),
                                    e('line', { x1: '21', y1: '21', x2: '16.65', y2: '16.65' })
                                ),
                                e('input', {
                                    type: 'text',
                                    placeholder: lang === 'ar' ? 'ابحث عن مشروع...' : 'Search projects...',
                                    value: searchQuery,
                                    onChange: (el) => setSearchQuery(el.target.value)
                                })
                            )
                        ),

                        // Filters cloud
                        e('div', { className: 'ph-filter-row' },
                            ["All", "Web", "Mobile", "Automation", "DevOps"].map(cat => 
                                e('button', {
                                    key: cat,
                                    className: `ph-filter-btn ${activeFilter === cat ? 'active' : ''}`,
                                    onClick: () => setActiveFilter(cat)
                                }, lang === 'ar' && cat === 'All' ? 'الكل' : cat)
                            )
                        ),

                        // Scrollable grid
                        e('div', { className: 'ph-archive-grid' },
                            filteredProjects.map(p => 
                                e('div', { key: p.id, className: 'ph-archive-card', onClick: () => viewProject(p.id) },
                                    e('div', { className: 'ph-ac-top' },
                                        e('span', { className: 'ph-ac-year' }, p.year),
                                        e('span', { className: 'ph-ac-arrow' },
                                            e('svg', { width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' },
                                                e('path', { d: 'M7 17L17 7M17 7H7M17 7v10' })
                                            )
                                        )
                                    ),
                                    e('div', { className: 'ph-ac-bottom' },
                                        e('h3', { className: 'ph-ac-title' }, p.title[lang] || p.title.en),
                                        e('p', { className: 'ph-ac-cat' }, p.category[lang] || p.category.en)
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }

        return null;
    };

    // Global triggers
    window.openProjectDetails = (id) => {
        window.location.hash = `#/project/${id}`;
    };
    window.openAllWorks = () => {
        window.location.hash = "#/works";
    };
    window.openWorksWithFilter = (filter) => {
        window.location.hash = `#/works?filter=${filter}`;
    };

    // Mount React App on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('project-hub-root');
        if (container) {
            const root = ReactDOM.createRoot(container);
            root.render(e(ProjectHubComponent));
        }
    });
})();

