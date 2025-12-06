// Simple mobile menu toggle for the navbar
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".rightsection");

  if (!hamburger || !menu) return;

  hamburger.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("show");
  });

  // close menu when a nav link is clicked (mobile)
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("show");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
});

// =======================contact============================
const form = document.querySelector(".contact-form");
const statusDiv = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
      });

      if (response.ok) {
        if (statusDiv) statusDiv.innerHTML = "✅ Message sent successfully!";
        form.reset();
      } else {
        if (statusDiv)
          statusDiv.innerHTML = "❌ Something went wrong. Try again!";
      }
    } catch (error) {
      if (statusDiv)
        statusDiv.innerHTML = "⚠️ Network error. Please try later.";
    }
  });
}
