// ======================================================
// AL SUFFAH ONLINE QURAN ACADEMY
// COMPLETE script.js
// ======================================================


// ======================================================
// MOBILE MENU
// ======================================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// ======================================================
// STICKY HEADER
// ======================================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";
    }

});


// ======================================================
// SCROLL ANIMATION
// ======================================================

const cards = document.querySelectorAll(
    ".about-box, .course-card, .price-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.7s";

        observer.observe(card);

    });

}


// ======================================================
// BACK TO TOP
// ======================================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.left = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#d4af37";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.display = "none";
topBtn.style.cursor = "pointer";
topBtn.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    topBtn.style.display =
        window.scrollY > 300 ? "block" : "none";

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==// ======================================================
// CONTACT FORM - WHATSAPP
// ======================================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const country = form.querySelectorAll('input[type="text"]')[1].value.trim();
        const message = form.querySelector("textarea").value.trim();

        const whatsappMessage =
`Assalamu Alaikum Al Suffah Online Quran Academy,

New Contact Form Message:

Name: ${name}
Email: ${email}
Country: ${country}

Message:
${message}`;

        const whatsappURL =
            "https://wa.me/923277624720?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

        form.reset();

    });

}


// ======================================================
// LANGUAGE SYSTEM
// ======================================================

let lang = "en";

const langBtn = document.querySelector(".lang-btn");


// ======================================================
// LANGUAGE DATA
// ======================================================

const languageData = {

    en: {

        navHome: "Home",
        navAbout: "About",
        navCourses: "Courses",
        navReviews: "Reviews",
        navFaq: "FAQ",
        navContact: "Contact",

        heroTitle:
            "Learn Quran Online With Qualified Quran Teacher",

        heroText:
            "One-to-One Online Quran Classes for Kids & Adults Worldwide. Learn Noorani Qaida, Quran Reading, Tajweed, Hifz and Islamic Studies from the comfort of your home.",

        heroBtn: "WhatsApp Now"

    },

    ur: {

        navHome: "ہوم",
        navAbout: "ہمارے بارے میں",
        navCourses: "کورسز",
        navReviews: "آراء",
        navFaq: "سوالات",
        navContact: "رابطہ",

        heroTitle:
            "مستند استاد کے ساتھ آن لائن قرآن سیکھیں",

        heroText:
            "بچوں اور بڑوں کے لیے دنیا بھر میں ون ٹو ون آن لائن قرآن کلاسز۔ نورانی قاعدہ، ناظرہ، تجوید، حفظِ قرآن اور اسلامیات گھر بیٹھے سیکھیں۔",

        heroBtn: "واٹس ایپ پر رابطہ کریں"

    }

};


// ======================================================
// HELPER FUNCTION
// ======================================================

function setText(selector, text) {

    const element = document.querySelector(selector);

    if (element) {
        element.innerText = text;
    }

}


// ======================================================
// NAVIGATION + HERO
// ======================================================

function updateNavigationAndHero() {

    const d = languageData[lang];

    setText(".nav-links li:nth-child(1) a", d.navHome);
    setText(".nav-links li:nth-child(2) a", d.navAbout);
    setText(".nav-links li:nth-child(3) a", d.navCourses);
    setText(".nav-links li:nth-child(4) a", d.navReviews);
    setText(".nav-links li:nth-child(5) a", d.navFaq);
    setText(".nav-links li:nth-child(6) a", d.navContact);

    setText(".hero h1", d.heroTitle);
    setText(".hero p", d.heroText);

    const heroBtn = document.querySelector(".hero .btn");

    if (heroBtn) {

        heroBtn.innerHTML =
            '<i class="fab fa-whatsapp"></i> ' +
            d.heroBtn;

    }

}


// ======================================================
// ABOUT + FEATURES + COURSES + FEES
// ======================================================

function updateMainSections() {

    if (lang === "ur") {

        setText(
            "#about .section-title h2",
            "الصفہ آن لائن قرآن اکیڈمی کے بارے میں"
        );

        setText(
            "#about .section-title p",
            "ہم دنیا بھر کے بچوں اور بڑوں کو خلوص، محنت اور بہترین معیار کے ساتھ ون ٹو ون آن لائن قرآن کی تعلیم فراہم کرتے ہیں۔"
        );

        setText(
            ".features .section-title h2",
            "الصفہ آن لائن قرآن اکیڈمی کیوں منتخب کریں؟"
        );

        setText(
            ".features .section-title p",
            "گھر بیٹھے آسان، معیاری اور ذاتی توجہ کے ساتھ قرآن سیکھیں۔"
        );

        setText(
            "#courses .section-title h2",
            "ہمارے کورسز"
        );

        setText(
            "#courses .section-title p",
            "اپنی ضرورت کے مطابق بہترین کورس منتخب کریں۔"
        );

        setText(
            "#fees .section-title h2",
            "کورس فیس"
        );

        setText(
            "#fees .section-title p",
            "فیس کا انحصار کورس، کلاس کے دورانیے اور شیڈول پر ہوتا ہے۔"
        );

    } else {

        setText(
            "#about .section-title h2",
            "About Al Suffah Online Quran Academy"
        );

        setText(
            "#about .section-title p",
            "Providing quality one-to-one online Quran education for children and adults worldwide with dedication, sincerity and excellence."
        );

        setText(
            ".features .section-title h2",
            "Why Choose Al Suffah Online Quran Academy?"
        );

        setText(
            ".features .section-title p",
            "Experience professional, personalized and convenient Quran learning from your home."
        );

        setText(
            "#courses .section-title h2",
            "Our Courses"
        );

        setText(
            "#courses .section-title p",
            "Choose the course that best matches your learning goals."
        );

        setText(
            "#fees .section-title h2",
            "Course Fees"
        );

        setText(
            "#fees .section-title p",
            "Our fees depend on the selected course, class duration and schedule."
        );

    }

}


// ======================================================
// ABOUT CARDS
// ======================================================

function updateAboutCards() {

    const cards = document.querySelectorAll(".about-box");

    if (cards.length < 3) return;

    if (lang === "ur") {

        setText(
            ".about-box:nth-child(1) h3",
            "ہمارا مشن"
        );

        setText(
            ".about-box:nth-child(1) p",
            "دنیا بھر کے ہر مسلمان تک آسان اور معیاری قرآن کی تعلیم پہنچانا۔"
        );

        setText(
            ".about-box:nth-child(2) h3",
            "ہمارا وژن"
        );

        setText(
            ".about-box:nth-child(2) p",
            "ہر طالب علم کے دل میں قرآن پاک کی محبت پیدا کرنا۔"
        );

        setText(
            ".about-box:nth-child(3) h3",
            "دنیا بھر میں کلاسز"
        );

        setText(
            ".about-box:nth-child(3) p",
            "گوگل میٹ کے ذریعے دنیا کے کسی بھی ملک سے کلاسیں حاصل کریں۔"
        );

    } else {

        setText(
            ".about-box:nth-child(1) h3",
            "Our Mission"
        );

        setText(
            ".about-box:nth-child(1) p",
            "To make Quran learning easy, accessible and effective for every Muslim around the world."
        );

        setText(
            ".about-box:nth-child(2) h3",
            "Our Vision"
        );

        setText(
            ".about-box:nth-child(2) p",
            "To inspire every student with the love of the Holy Quran and authentic Islamic knowledge."
        );

        setText(
            ".about-box:nth-child(3) h3",
            "Worldwide Classes"
        );

        setText(
            ".about-box:nth-child(3) p",
            "Join online Quran classes from any country through Google Meet with flexible timings."
        );

    }

}


// ======================================================
// FEATURES CARDS
// ======================================================

function updateFeatureCards() {

    const cards = document.querySelectorAll(
        ".features .course-card"
    );

    if (cards.length < 6) return;

    const en = [
        ["One-to-One Classes", "Individual attention for every student."],
        ["Qualified Quran Teacher", "Learn with proper Tajweed and guidance."],
        ["Flexible Timings", "Choose a class schedule that suits your routine."],
        ["Google Meet Classes", "Simple and secure online learning experience."],
        ["Worldwide Students", "Available for students living anywhere in the world."],
        ["Quality Learning", "Step-by-step Quran education with dedication."]
    ];

    const ur = [
        ["ون ٹو ون کلاسز", "ہر طالب علم کے لیے انفرادی توجہ۔"],
        ["مستند قرآن استاد", "درست تجوید اور رہنمائی کے ساتھ سیکھیں۔"],
        ["لچکدار اوقات", "اپنی سہولت کے مطابق کلاس کا وقت منتخب کریں۔"],
        ["گوگل میٹ کلاسز", "آسان اور محفوظ آن لائن تعلیمی تجربہ۔"],
        ["دنیا بھر کے طلبہ", "دنیا کے کسی بھی ملک میں رہنے والے طلبہ کے لیے دستیاب۔"],
        ["معیاری تعلیم", "محنت اور توجہ کے ساتھ مرحلہ وار قرآن کی تعلیم۔"]
    ];

    const data = lang === "ur" ? ur : en;

    cards.forEach((card, index) => {

        const h3 = card.querySelector("h3");
        const p = card.querySelector("p");

        if (h3) h3.innerText = data[index][0];
        if (p) p.innerText = data[index][1];

    });

}


// ======================================================
// COURSE CARDS
// ======================================================

function updateCourseCards() {

    const cards = document.querySelectorAll(
        "#courses .course-card"
    );

    if (cards.length < 6) return;

    const en = [
        ["Noorani Qaida", "Start your Quran learning journey from the basics."],
        ["Quran Reading", "Read the Holy Quran correctly with confidence."],
        ["Tajweed", "Learn the rules of correct Quran pronunciation."],
        ["Hifz-ul-Quran", "Memorize the Holy Quran with proper revision."],
        ["Islamic Studies", "Learn Duas, Hadith and Islamic manners."],
        ["Basic Arabic", "Understand the language of the Holy Quran."]
    ];

    const ur = [
        ["نورانی قاعدہ", "قرآن سیکھنے کا آغاز بنیادی اصولوں سے کریں۔"],
        ["قرآن ناظرہ", "اعتماد کے ساتھ قرآن پاک درست پڑھنا سیکھیں۔"],
        ["تجوید", "قرآن پاک کی درست ادائیگی کے اصول سیکھیں۔"],
        ["حفظ القرآن", "مناسب دہرائی کے ساتھ قرآن پاک حفظ کریں۔"],
        ["اسلامیات", "دعائیں، احادیث اور اسلامی آداب سیکھیں۔"],
        ["بنیادی عربی", "قرآن پاک کی زبان کو سمجھنا سیکھیں۔"]
    ];

    const data = lang === "ur" ? ur : en;

    cards.forEach((card, index) => {

        const h3 = card.querySelector("h3");
        const p = card.querySelector("p");

        if (h3) h3.innerText = data[index][0];
        if (p) p.innerText = data[index][1];

    });

}


// ======================================================
// FEES CARD
// ======================================================

function updateFeesCard() {

    setText(
        "#fees .price-card h3",
        lang === "ur"
            ? "فیس کی تفصیلات درکار ہیں؟"
            : "Need Fee Details?"
    );

    setText(
        "#fees .price-card p",
        lang === "ur"
            ? "کورس فیس، دستیاب اوقات اور کلاس شیڈول کے بارے میں معلومات کے لیے واٹس ایپ پر رابطہ کریں۔"
            : "Please contact us on WhatsApp to discuss the course fee, available timings and class schedule."
    );

    const btn = document.querySelector("#fees .price-card .btn");

    if (btn) {

        btn.innerHTML =
            '<i class="fab fa-whatsapp"></i> ' +
            (lang === "ur"
                ? "واٹس ایپ پر رابطہ کریں"
                : "Contact on WhatsApp");

    }

}


// ======================================================
// VIDEO SECTION
// ======================================================

function updateVideoSection() {

    setText(
        ".video-section h2",
        lang === "ur"
            ? "دیکھیں ہماری آن لائن قرآن کلاسز کیسے ہوتی ہیں"
            : "Watch How Our Online Quran Classes Work"
    );

    setText(
        ".video-section > p",
        lang === "ur"
            ? "ہماری مختصر تعارفی ویڈیو دیکھیں اور جانیں کہ ہماری آن لائن قرآن کلاسز کتنی آسان اور مؤثر ہیں۔"
            : "Watch our short introduction video to see how easy and effective our online Quran classes are."
    );

    setText(
        ".video-box p",
        lang === "ur"
            ? "تعارفی ویڈیو دیکھیں"
            : "Watch Introduction Video"
    );

}


// ======================================================
// REVIEWS
// ======================================================

function updateReviews() {

    setText(
        "#reviews .section-title h2",
        lang === "ur"
            ? "طلبہ کے تاثرات"
            : "Student Reviews"
    );

    setText(
        "#reviews .section-title p",
        lang === "ur"
            ? "دیکھیں ہمارے طلبہ اور والدین ہمارے بارے میں کیا کہتے ہیں۔"
            : "What our students and parents say about us."
    );

    const cards = document.querySelectorAll(
        "#reviews .course-card"
    );

    if (cards.length < 3) return;

    const en = [
        ["Excellent Teaching", "\"The teacher explains every lesson clearly. My child enjoys every class.\""],
        ["Highly Recommended", "\"Very professional online Quran classes with flexible timings.\""],
        ["Great Experience", "\"Alhamdulillah, my Quran reading has improved a lot.\""]
    ];

    const ur = [
        ["بہترین تدریس", "\"استاد ہر سبق بہت واضح انداز میں سمجھاتے ہیں۔ میرا بچہ ہر کلاس سے لطف اندوز ہوتا ہے۔\""],
        ["انتہائی قابلِ سفارش", "\"بہت بہترین آن لائن قرآن کلاسز اور اوقات میں بھی سہولت ہے۔\""],
        ["بہترین تجربہ", "\"الحمدللہ، میری قرآن پڑھنے کی صلاحیت میں بہت بہتری آئی ہے۔\""]
    ];

    const data = lang === "ur" ? ur : en;

    cards.forEach((card, index) => {

        setText(
            "#reviews .course-card:nth-child(" +
            (index + 1) +
            ") h3",
            data[index][0]
        );

        setText(
            "#reviews .course-card:nth-child(" +
            (index + 1) +
            ") p",
            data[index][1]
        );

    });

}


// ======================================================
// FAQ
// ======================================================

function updateFAQ() {

    setText(
        "#faq .section-title h2",
        lang === "ur"
            ? "اکثر پوچھے جانے والے سوالات"
            : "Frequently Asked Questions"
    );

    const cards = document.querySelectorAll(
        "#faq .about-box"
    );

    if (cards.length < 4) return;

    const en = [
        ["Which app is used for classes?", "We teach using Google Meet."],
        ["Do you teach kids and adults?", "Yes, online classes are available for all ages."],
        ["How can I join?", "Simply contact us on WhatsApp and we'll guide you."],
        ["Do you offer one-to-one classes?", "Yes, every student gets individual attention."]
    ];

    const ur = [
        ["کلاسز کے لیے کون سی ایپ استعمال ہوتی ہے؟", "ہم گوگل میٹ کے ذریعے پڑھاتے ہیں۔"],
        ["کیا بچوں اور بڑوں کو پڑھایا جاتا ہے؟", "جی ہاں، ہر عمر کے طلبہ کے لیے آن لائن کلاسز دستیاب ہیں۔"],
        ["میں کیسے شامل ہو سکتا ہوں؟", "بس واٹس ایپ پر رابطہ کریں، ہم آپ کی رہنمائی کریں گے۔"],
        ["کیا ون ٹو ون کلاسز ہوتی ہیں؟", "جی ہاں، ہر طالب علم کو انفرادی توجہ دی جاتی ہے۔"]
    ];

    const data = lang === "ur" ? ur : en;

    cards.forEach((card, index) => {

        const h3 = card.querySelector("h3");
        const p = card.querySelector("p");

        if (h3) h3.innerText = data[index][0];
        if (p) p.innerText = data[index][1];

    });

}


// ======================================================
// CONTACT
// ======================================================

function updateContact() {

    setText(
        "#contact .section-title h2",
        lang === "ur"
            ? "ہم سے رابطہ کریں"
            : "Contact Us"
    );

    setText(
        "#contact .section-title p",
        lang === "ur"
            ? "آج ہی قرآن سیکھنے کا اپنا سفر شروع کریں۔"
            : "Start your Quran learning journey today."
    );

    const inputs = document.querySelectorAll(
        "#contact input"
    );

    if (inputs.length >= 3) {

        inputs[0].placeholder =
            lang === "ur" ? "آپ کا نام" : "Your Name";

        inputs[1].placeholder =
            lang === "ur" ? "ای میل ایڈریس" : "Email Address";

        inputs[2].placeholder =
            lang === "ur" ? "ملک" : "Country";

    }

    const textarea = document.querySelector(
        "#contact textarea"
    );

    if (textarea) {

        textarea.placeholder =
            lang === "ur"
                ? "اپنا پیغام لکھیں"
                : "Write your message";

    }

    const btn = document.querySelector(
        "#contact .btn"
    );

    if (btn) {

        btn.innerText =
            lang === "ur"
                ? "پیغام بھیجیں"
                : "Send Message";

    }

}


// ======================================================
// FOOTER
// ======================================================

function updateFooter() {

    setText(
        ".footer-box h2",
        lang === "ur"
            ? "الصفہ آن لائن قرآن اکیڈمی"
            : "Al Suffah Online Quran Academy"
    );

    setText(
        ".footer-box:first-child p",
        lang === "ur"
            ? "گھر بیٹھے مستند استاد کے ساتھ آن لائن قرآن پاک سیکھیں۔"
            : "Learn the Holy Quran online with qualified Quran teacher from the comfort of your home."
    );

    const footerBoxes = document.querySelectorAll(
        ".footer-box"
    );

    if (footerBoxes.length >= 3) {

        const quickLinksTitle =
            footerBoxes[1].querySelector("h3");

        const socialTitle =
            footerBoxes[2].querySelector("h3");

                if (quickLinksTitle) {

            quickLinksTitle.innerText =
                lang === "ur"
                    ? "فوری لنکس"
                    : "Quick Links";
        }

        if (socialTitle) {

            socialTitle.innerText =
                lang === "ur"
                    ? "ہمیں فالو کریں"
                    : "Follow Us";
        }

    }

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        copyright.innerHTML =
            lang === "ur"
                ? `© ${new Date().getFullYear()} الصفہ آن لائن قرآن اکیڈمی۔ جملہ حقوق محفوظ ہیں۔`
                : `© ${new Date().getFullYear()} Al Suffah Online Quran Academy. All Rights Reserved.`;

    }

}


// ======================================================
// LANGUAGE BUTTON
// ======================================================

if (langBtn) {

    langBtn.addEventListener("click", () => {

        lang = lang === "en" ? "ur" : "en";

        updateNavigationAndHero();
        updateMainSections();
        updateAboutCards();
        updateFeatureCards();
        updateCourseCards();
        updateFeesCard();
        updateVideoSection();
        updateReviews();
        updateFAQ();
        updateContact();
        updateFooter();

        langBtn.innerHTML =
            lang === "en"
                ? "🌐 English | اردو"
                : "🌐 اردو | English";

    });

}


// ======================================================
// VIDEO PLAY BUTTON
// ======================================================

const playBtn = document.querySelector(".play-btn");

if (playBtn) {

    playBtn.addEventListener("click", () => {

        window.open(
            "https://youtu.be/YOUR_VIDEO_LINK",
            "_blank"
        );

    });

}


// ======================================================
// INITIAL LANGUAGE
// ======================================================

updateNavigationAndHero();
updateMainSections();
updateAboutCards();
updateFeatureCards();
updateCourseCards();
updateFeesCard();
updateVideoSection();
updateReviews();
updateFAQ();
updateContact();
updateFooter();

console.log("Al Suffah Online Quran Academy Loaded Successfully.");
       
