console.log("Digital Village Connect Loaded");

// =============================
// Gallery Lightbox
// =============================

function openImage(src) {
    const lightbox = document.getElementById("lightbox");
    const image = document.getElementById("lightbox-img");

    if (lightbox && image) {
        lightbox.style.display = "flex";
        image.src = src;
    }
}

function closeImage() {
    const lightbox = document.getElementById("lightbox");

    if (lightbox) {
        lightbox.style.display = "none";
    }
}

const lightbox = document.getElementById("lightbox");

if (lightbox) {

    lightbox.addEventListener("click", function (e) {

        if (e.target === this) {

            closeImage();

        }

    });

}

// =============================
// Back To Top Button
// =============================

const mybutton = document.getElementById("topBtn");

if (mybutton) {

    window.addEventListener("scroll", function () {

        if (document.body.scrollTop > 300 ||

            document.documentElement.scrollTop > 300) {

            mybutton.style.display = "block";

        }

        else {

            mybutton.style.display = "none";

        }

    });

}

function topFunction() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

// =============================
// Scroll Animation
// =============================

const cards = document.querySelectorAll(".info-card");

function revealCards() {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            card.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealCards);

window.addEventListener("load", revealCards);
// ============================
// SEARCH
// ============================

function searchCards(){

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".gallery-item");

    cards.forEach(card=>{

        let text = card.innerText.toLowerCase();

        if(text.includes(input)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

}
// ==========================
// SEARCH POPUP
// ==========================

function toggleSearch(){

    event.preventDefault();

    const box=document.getElementById("searchBox");

    if(box.style.display==="block"){

        document.getElementById("searchBox").style.display="none";

    }

    else{

        box.style.display="block";

        document.getElementById("searchInput").focus();

    }

}

function searchTopic(e){

    if(e.key==="Enter"){

        let value=document.getElementById("searchInput").value.toLowerCase();

        if(value.includes("internet"))

            location.href="#internet";

        else if(value.includes("farmer") || value.includes("pm") || value.includes("soil"))

            location.href="#farmers";

        else if(value.includes("government") || value.includes("aadhaar") || value.includes("pan") || value.includes("digilocker"))

            location.href="#government";

        else if(value.includes("cyber") || value.includes("password") || value.includes("otp") || value.includes("phishing"))

            location.href="#safety";

        else if(value.includes("gallery"))

            location.href="#gallery";

        else

            alert("No matching topic found.");

        document.getElementById("searchBox").style.display="none";

    }

}
// ==========================
// DARK MODE
// ==========================

function toggleTheme(event){

    event.preventDefault();

    document.body.classList.toggle("dark-mode");

}
// ===========================
// MOBILE MENU
// ===========================

function toggleMenu(){

document.getElementById("navLinks").classList.toggle("show");

}
// ===========================
// ACTIVE NAVIGATION
// ===========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navLinks a[href^='#']");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});
// ===========================
// ANIMATED COUNTERS
// ===========================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;
            let count = 0;

            const update = () => {

                const increment = Math.ceil(target / 40);

                if (count < target) {
                    count += increment;

                    if (count > target) count = target;

                    counter.innerText = count;
                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

}, {
    threshold: 0.6
});

counters.forEach(counter => observer.observe(counter));
// ===========================
// SCROLL REVEAL
// ===========================

const revealElements = document.querySelectorAll(
    ".gallery-item, .stat-card, .info-card, .info-box, section"
);

revealElements.forEach(el => {
    el.classList.add("reveal");
});

function revealOnScroll() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
// ==========================
// DIGITAL TIPS
// ==========================

const tips = [

{
title:"🔒 Cyber Safety",
text:"Never share your OTP or bank PIN with anyone."
},

{
title:"📱 Smartphone",
text:"Always install apps only from trusted app stores."
},

{
title:"🌐 Internet",
text:"Use strong passwords containing letters, numbers and symbols."
},

{
title:"💳 Online Banking",
text:"Always verify the website before entering bank details."
},

{
title:"📧 Email",
text:"Avoid opening emails from unknown senders."
},

{
title:"🌾 Farmers",
text:"Check today's weather before planning farming activities."
}

];

const randomTip = tips[Math.floor(Math.random()*tips.length)];

document.getElementById("tipTitle").innerHTML = randomTip.title;
document.getElementById("tipText").innerHTML = randomTip.text;
// ==========================
// FAQ
// ==========================

const faqs = document.querySelectorAll(".faq-question");

faqs.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;

        if(answer.style.display === "block"){

            answer.style.display = "none";

        }else{

            answer.style.display = "block";

        }

    });

});
// ==========================
// PRELOADER
// ==========================

window.addEventListener("load", function(){

    const preloader = document.getElementById("preloader");

    setTimeout(function(){

        preloader.style.opacity = "0";

        setTimeout(function(){

            preloader.style.display = "none";

        },600);

    },1500);

});
// ==========================
// LIVE DATE & TIME
// ==========================

function updateClock(){

    const clock = document.getElementById("clock");

    if(!clock) return;

    const now = new Date();

    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric"
    };

    const date = now.toLocaleDateString("en-IN", options);

    const time = now.toLocaleTimeString("en-IN");

    clock.innerHTML = `📅 ${date} | 🕒 ${time}`;
}

setInterval(updateClock,1000);

updateClock();
// ==========================
// WELCOME POPUP
// ==========================

window.addEventListener("load", function(){

    setTimeout(function(){

        document.getElementById("welcomePopup").style.display="flex";

    },1200);

});

function closePopup(){

    document.getElementById("welcomePopup").style.display="none";

}
// ==========================
// SCROLL PROGRESS BAR
// ==========================

window.addEventListener("scroll", function(){

    let winScroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width =
        scrolled + "%";

});
// ==========================
// VISITOR COUNTER
// ==========================

let count = localStorage.getItem("visitorCount");

if(count === null){
    count = 1;
}
else{
    count = parseInt(count) + 1;
}

localStorage.setItem("visitorCount", count);

document.getElementById("visitorCount").innerHTML = count;
// ==========================
// SURVEY DASHBOARD CHARTS
// ==========================

// Digital Awareness (Bar Chart)

new Chart(document.getElementById("awarenessChart"), {
    type: "bar",
    data: {
        labels: ["Students","Youth","Farmers","Homemakers","Elderly"],
        datasets: [{
            label: "Awareness (%)",
            data: [90,85,65,60,40],
            backgroundColor: [
                "#0d6efd",
                "#198754",
                "#ffc107",
                "#dc3545",
                "#6f42c1"
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});




// ===============================
// Internet Usage Pattern Pie Chart
// ===============================

new Chart(document.getElementById("usageChart"), {
    type: "pie",
    data: {
        labels: [
            "Communication",
            "Education",
            "Entertainment",
            "Social Media",
            "Digital Payments"
        ],
        datasets: [{
            data: [35, 25, 20, 15, 5],
            backgroundColor: [
                "#0d6efd",   // Blue
                "#198754",   // Green
                "#ffc107",   // Yellow
                "#dc3545",   // Red
                "#6f42c1"    // Purple
            ],
            borderColor: "#ffffff",
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    padding: 15,
                    font: {
                        size: 14
                    }
                }
            },

            title: {
                display: true,
                text: "Purpose of Internet Usage",
                font: {
                    size: 18
                }
            },

            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ": " + context.raw + "%";
                    }
                }
            }
        }
    }
});
