// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// Navbar end

// Typing effect
const typingElement = document.getElementById("typing");
const roles = [
  "DevOps Engineer",
  "Cloud Architect",
  "Automation Builder",
  "Docker & Kubernetes Enthusiast",
];
let roleIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 60;
let delayBetween = 1500;

function type() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (roles.length) setTimeout(type, delayBetween);
});

document.querySelectorAll(".icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.add("active");
    setTimeout(() => {
      icon.classList.remove("active");
    }, 300); // efek balik setelah 0.3 detik
  });
});

AOS.init({
  duration: 1000, // durasi animasi (ms)
  once: true, // animasi cuma sekali, ga ulang pas scroll balik
});


