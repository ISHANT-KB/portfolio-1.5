function handleSubmit(e) {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  e.target.reset();
}

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
