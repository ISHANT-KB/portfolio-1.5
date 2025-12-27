// ===========================
// Mobile Menu Toggle
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
      });
    });
  }

  // Initialize form validation if contact form exists
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }
});

// ===========================
// Form Validation & Submission
// ===========================

function handleFormSubmit(event) {
  event.preventDefault();

  // Get form elements
  const form = event.target;
  const formMessage = document.getElementById("formMessage");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  // Reset message
  formMessage.textContent = "";
  formMessage.className = "";

  // Validate inputs
  if (!validateForm(nameInput, emailInput, subjectInput, messageInput)) {
    showMessage(formMessage, "Please fill in all fields correctly.", "error");
    return;
  }

  // Simulate form submission (in production, send to backend)
  submitForm(form, formMessage);
}

function validateForm(nameInput, emailInput, subjectInput, messageInput) {
  // Name validation
  if (!nameInput.value.trim()) {
    showMessage(
      document.getElementById("formMessage"),
      "Please enter your name.",
      "error"
    );
    return false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    showMessage(
      document.getElementById("formMessage"),
      "Please enter a valid email.",
      "error"
    );
    return false;
  }

  // Subject validation
  if (!subjectInput.value.trim()) {
    showMessage(
      document.getElementById("formMessage"),
      "Please enter a subject.",
      "error"
    );
    return false;
  }

  // Message validation
  if (!messageInput.value.trim()) {
    showMessage(
      document.getElementById("formMessage"),
      "Please enter a message.",
      "error"
    );
    return false;
  }

  return true;
}

function submitForm(form, messageElement) {
  // Simulate submission
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  // Simulate network delay
  setTimeout(() => {
    showMessage(
      messageElement,
      "Thank you! Your message has been sent successfully.",
      "success"
    );
    form.reset();
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;

    // Clear success message after 5 seconds
    setTimeout(() => {
      messageElement.textContent = "";
      messageElement.className = "";
    }, 5000);
  }, 1500);
}

function showMessage(element, message, type) {
  element.textContent = message;
  element.className = `form-message ${type}`;
}

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ===========================
// Intersection Observer for Animations
// ===========================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards on load
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(
    ".feature-card, .service-card, .project-card, .value-card, .mission-card"
  );
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
});

// ===========================
// Active Navigation Link
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach((link) => {
    if (
      link.getAttribute("href") === currentPage ||
      (currentPage === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ===========================
// Menu Toggle Animation
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      const spans = this.querySelectorAll("span");

      if (document.getElementById("navMenu").classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translateY(10px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translateY(-10px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  }
});
