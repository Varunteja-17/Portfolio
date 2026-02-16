document.addEventListener('DOMContentLoaded', () => {

  /* ================= REVEAL ANIMATION ================= */
  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    reveals.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();


  /* ================= CURSOR GLOW ================= */
  const cursor = document.querySelector('.cursor-glow');

  document.addEventListener('mousemove', (e) => {
    if (cursor) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    }
  });


  /* ================= FOOTER YEAR ================= */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


/* ================= TYPEWRITER EFFECT ================= */
const roles = [
  "🎓 B.Tech CSE (Data Science)",
  "📊 AI & ML Enthusiast",
  "💻 Full Stack Learner",
  "📈 Data Analysis & Visualization",
  "🎨 UI/UX Developer",
  "🤖 Machine Learning Enthusiast",
  " Prompt Engineer"
];

const typeElement = document.querySelector(".typewriter");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  if (!typeElement) return;

  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typeElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      setTimeout(() => isDeleting = true, 1200);
    }

  } else {
    typeElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 80);
}

typeEffect();

  /* ================= NAVBAR SHADOW ================= */

  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });


  /* ================= ACTIVE NAV LINK ================= */

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

});

// 5. Contact Form Submission (EmailJS Version)

(function () {
    emailjs.init("YUp9FEwhJDG8sGqxZ");
})();

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;

        btn.disabled = true;
        btn.textContent = 'Sending...';

        emailjs.sendForm(
            "service_45s1twa",
            "template_e2boatb",
            this
        )
        .then(() => {
            btn.textContent = 'Message Sent! ✨';
            contactForm.reset();
        })
        .catch((error) => {
            console.error(error);
            btn.textContent = 'Failed ❌';
        })
        .finally(() => {
            setTimeout(() => {
                btn.disabled = false;
                btn.textContent = originalText;
            }, 3000);
        });
    });
}
