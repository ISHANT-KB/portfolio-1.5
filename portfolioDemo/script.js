// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light";
htmlElement.setAttribute("data-theme", currentTheme);
themeIcon.textContent = currentTheme === "dark" ? "☀️" : "🌙";

themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeIcon.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

// Mobile Navigation Toggle
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.getElementById("navLinks");

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Animate skill bars on scroll
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".skill-progress");
      progressBars.forEach((bar) => {
        bar.style.width = bar.style.width;
      });
    }
  });
}, observerOptions);

const skillsSection = document.querySelector(".skills");
observer.observe(skillsSection);

// Animate elements on scroll
const animateOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

// Observe section titles
document.querySelectorAll(".section-title").forEach((title) => {
  animateOnScroll.observe(title);
});

// Observe skill cards with stagger effect
document.querySelectorAll(".skill-card").forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
  animateOnScroll.observe(card);
});

// Observe project cards with stagger effect
document.querySelectorAll(".project-card").forEach((card, index) => {
  card.style.animationDelay = `${index * 0.15}s`;
  animateOnScroll.observe(card);
});

// Form submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});

// CV Download
const cvButton = document.getElementById("cvButton");
cvButton.addEventListener("click", (e) => {
  e.preventDefault();
  alert("CV download would start here. Connect this to your actual CV file.");
});

// Display services
function displayServices() {
  // Home page preview (first 3 services)
  previewContainer.innerHTML = servicesData
    .slice(0, 3)
    .map(
      (service) => `
        <div class="service-card">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `
    )
    .join("");

  // Services page (all services)
  fullContainer.innerHTML = servicesData
    .map(
      (service) => `
        <div class="service-card">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `
    )
    .join("");
}

// Navigation setup
function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const page = this.getAttribute("data-page");
      switchPage(page);

      // Update active nav link
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

// Switch pages
function switchPage(page) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((p) => p.classList.remove("active"));

  const targetPage = document.getElementById(page);
  if (targetPage) {
    targetPage.classList.add("active");
  }

  // Update nav links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    if (link.getAttribute("data-page") === page) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Handle Call button
function handleCall() {
  window.location.href = "tel:+919876543210";
}

// Handle WhatsApp button
function handleWhatsApp() {
  const phoneNumber = "+919876543210";
  const message =
    "Hi Elite Coaching, I am interested in your coaching services. Can you provide more information?";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}

// Handle contact form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";

  setTimeout(() => {
    document.getElementById("contactForm").reset();
    successMessage.style.display = "none";
  }, 3000);
}

// Handle WhatsApp from contact form
function handleFormWhatsApp() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (!name || !message) {
    alert("Please fill in Name and Message fields");
    return;
  }

  const phoneNumber = "+919876543210";
  const whatsappMessage = `Hi Elite Coaching, I'm ${name}. ${message}`;
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappUrl, "_blank");
}
