// ==============================
// AL SUFFAH ONLINE QURAN ACADEMY
// script.js
// ==============================

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

// Sticky Header

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

}

});

// Scroll Animation

const cards=document.querySelectorAll(".about-box,.course-card,.price-card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".7s";

observer.observe(card);

});

// Back To Top

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.left="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#d4af37";
topBtn.style.color="#000";
topBtn.style.fontSize="22px";
topBtn.style.display="none";
topBtn.style.cursor="pointer";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

topBtn.style.display=(window.scrollY>300)?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};

// Contact Form

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! We will contact you soon.");

form.reset();

});

}

// ==============================
// Language System - Part 1
// ==============================

let lang = "en";

const langBtn = document.querySelector(".lang-btn");

const languageData = {

en:{

navHome:"Home",
navAbout:"About",
navCourses:"Courses",
navReviews:"Reviews",
navFaq:"FAQ",
navContact:"Contact",

heroTitle:"Learn Quran Online With Qualified Quran Teacher",

heroText:"One-to-One Online Quran Classes for Kids & Adults Worldwide. Learn Noorani Qaida, Quran Reading, Tajweed, Hifz and Islamic Studies from the comfort of your home.",

heroBtn:"WhatsApp Now"

},

ur:{

navHome:"ہوم",
navAbout:"ہمارے بارے میں",
navCourses:"کورسز",
navReviews:"آراء",
navFaq:"سوالات",
navContact:"رابطہ",

heroTitle:"مستند استاد کے ساتھ آن لائن قرآن سیکھیں",

heroText:"بچوں اور بڑوں کے لیے دنیا بھر میں ون ٹو ون آن لائن قرآن کلاسز۔ نورانی قاعدہ، ناظرہ، تجوید، حفظِ قرآن اور اسلامیات گھر بیٹھے سیکھیں۔",

heroBtn:"واٹس ایپ پر رابطہ کریں"

}

};

if(langBtn){

langBtn.addEventListener("click",()=>{

lang=(lang==="en")?"ur":"en";

document.querySelector(".nav-links li:nth-child(1) a").innerText=languageData[lang].navHome;
document.querySelector(".nav-links li:nth-child(2) a").innerText=languageData[lang].navAbout;
document.querySelector(".nav-links li:nth-child(3) a").innerText=languageData[lang].navCourses;
document.querySelector(".nav-links li:nth-child(4) a").innerText=languageData[lang].navReviews;
document.querySelector(".nav-links li:nth-child(5) a").innerText=languageData[lang].navFaq;
document.querySelector(".nav-links li:nth-child(6) a").innerText=languageData[lang].navContact;

document.querySelector(".hero h1").innerText=languageData[lang].heroTitle;
document.querySelector(".hero p").innerText=languageData[lang].heroText;

document.querySelector(".hero .btn").innerHTML='<i class="fab fa-whatsapp"></i> '+languageData[lang].heroBtn;

langBtn.innerHTML=(lang==="en")?"🌐 English | اردو":"🌐 اردو | English";

updateSectionLanguage();
updateRemainingLanguage();
updateVideoLanguage();
updateCardsLanguage();
updateFooterLanguage();

});
// ==============================
// Language System - Part 2
// ==============================

function updateSectionLanguage() {

const d = languageData[lang];

// About
document.querySelector("#about .section-title h2").innerText =
(lang==="en")
? "About Al Suffah Online Quran Academy"
: "الصفہ آن لائن قرآن اکیڈمی کے بارے میں";

document.querySelector("#about .section-title p").innerText =
(lang==="en")
? "Providing quality one-to-one online Quran education for children and adults worldwide with dedication, sincerity and excellence."
: "ہم دنیا بھر کے بچوں اور بڑوں کو خلوص، محنت اور بہترین معیار کے ساتھ ون ٹو ون آن لائن قرآن کی تعلیم فراہم کرتے ہیں۔";

// Why Choose Us
document.querySelector(".features .section-title h2").innerText =
(lang==="en")
? "Why Choose Al Suffah Online Quran Academy?"
: "الصفہ آن لائن قرآن اکیڈمی کیوں منتخب کریں؟";

document.querySelector(".features .section-title p").innerText =
(lang==="en")
? "Experience professional, personalized and convenient Quran learning from your home."
: "گھر بیٹھے آسان، معیاری اور ذاتی توجہ کے ساتھ قرآن سیکھیں۔";

// Courses
document.querySelector("#courses .section-title h2").innerText =
(lang==="en")
? "Our Courses"
: "ہمارے کورسز";

document.querySelector("#courses .section-title p").innerText =
(lang==="en")
? "Choose the course that best matches your learning goals."
: "اپنی ضرورت کے مطابق بہترین کورس منتخب کریں۔";

// Fees
document.querySelector("#fees .section-title h2").innerText =
(lang==="en")
? "Course Fees"
: "کورس فیس";

document.querySelector("#fees .section-title p").innerText =
(lang==="en")
? "Our fees depend on the selected course, class duration and schedule."
: "فیس کا انحصار کورس، کلاس کے دورانیے اور شیڈول پر ہوتا ہے۔";

}

// ==============================
// Language System - Part 3
// ==============================

function updateRemainingLanguage() {

// Reviews
document.querySelector("#reviews .section-title h2").innerText =
(lang==="en") ? "Student Reviews" : "طلبہ کے تاثرات";

document.querySelector("#reviews .section-title p").innerText =
(lang==="en")
? "What our students and parents say about us."
: "دیکھیں ہمارے طلبہ اور والدین ہمارے بارے میں کیا کہتے ہیں۔";

// FAQ
document.querySelector("#faq .section-title h2").innerText =
(lang==="en")
? "Frequently Asked Questions"
: "اکثر پوچھے جانے والے سوالات";

// Contact
document.querySelector("#contact .section-title h2").innerText =
(lang==="en")
? "Contact Us"
: "ہم سے رابطہ کریں";

document.querySelector("#contact .section-title p").innerText =
(lang==="en")
? "Start your Quran learning journey today."
: "آج ہی اپنی قرآن سیکھنے کی شروعات کریں۔";

// Footer
document.querySelector(".footer-box h2").innerText =
(lang==="en")
? "Al Suffah Online Quran Academy"
: "الصفہ آن لائن قرآن اکیڈمی";

document.querySelector(".copyright").innerHTML =
(lang==="en")
? `© ${new Date().getFullYear()} Al Suffah Online Quran Academy. All Rights Reserved.`
: `© ${new Date().getFullYear()} الصفہ آن لائن قرآن اکیڈمی۔ جملہ حقوق محفوظ ہیں۔`;

}

// ==============================
// Language System - Part 4
// Video Section
// ==============================

function updateVideoLanguage(){

const videoTitle=document.querySelector(".video-section h2");
const videoText=document.querySelector(".video-section p");
const videoBtn=document.querySelector(".video-box p");

if(lang==="en"){

videoTitle.innerText="Watch How Our Online Quran Classes Work";

videoText.innerText="Watch our short introduction video to see how easy and effective our online Quran classes are.";

videoBtn.innerText="Watch Introduction Video";

}else{

videoTitle.innerText="دیکھیں ہماری آن لائن قرآن کلاسز کیسے ہوتی ہیں";

videoText.innerText="ہماری مختصر تعارفی ویڈیو دیکھیں اور جانیں کہ ہماری آن لائن قرآن کلاسز کتنی آسان اور مؤثر ہیں۔";

videoBtn.innerText="تعارفی ویڈیو دیکھیں";

}

}

// ==============================
// Language System - Part 5
// About & Courses
// ==============================

function updateCardsLanguage(){

const aboutCards=document.querySelectorAll(".about-box");

if(lang==="ur"){

aboutCards[0].querySelector("h3").innerText="ہمارا مشن";
aboutCards[0].querySelector("p").innerText="دنیا بھر کے ہر مسلمان تک آسان اور معیاری قرآن کی تعلیم پہنچانا۔";

aboutCards[1].querySelector("h3").innerText="ہمارا وژن";
aboutCards[1].querySelector("p").innerText="ہر طالب علم کے دل میں قرآن پاک کی محبت پیدا کرنا۔";

aboutCards[2].querySelector("h3").innerText="دنیا بھر میں کلاسز";
aboutCards[2].querySelector("p").innerText="گوگل میٹ کے ذریعے دنیا کے کسی بھی ملک سے کلاسیں حاصل کریں۔";

}else{

aboutCards[0].querySelector("h3").innerText="Our Mission";
aboutCards[0].querySelector("p").innerText="To make Quran learning easy, accessible and effective for every Muslim around the world.";

aboutCards[1].querySelector("h3").innerText="Our Vision";
aboutCards[1].querySelector("p").innerText="To inspire every student with the love of the Holy Quran and authentic Islamic knowledge.";

aboutCards[2].querySelector("h3").innerText="Worldwide Classes";
aboutCards[2].querySelector("p").innerText="Join online Quran classes from any country through Google Meet with flexible timings.";

}

}
// ==============================
// Language System - Part 6
// FAQ + Contact + Footer
// ==============================

function updateFooterLanguage(){

if(lang==="ur"){

// Contact
document.querySelector("#contact .btn").innerText="پیغام بھیجیں";

// Footer
document.querySelector(".footer-box h3").innerText="فوری لنکس";

document.querySelector(".footer-box p").innerText=
"گھر بیٹھے مستند استاد کے ساتھ آن لائن قرآن پاک سیکھیں۔";

}else{

// Contact
document.querySelector("#contact .btn").innerText="Send Message";

// Footer
document.querySelector(".footer-box h3").innerText="Quick Links";

document.querySelector(".footer-box p").innerText=
"Learn the Holy Quran online with qualified Quran teacher from the comfort of your home.";

}

}

alert("SCRIPT JS LOADED");