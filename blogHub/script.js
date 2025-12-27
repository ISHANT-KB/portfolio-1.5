// Blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    category: "Technology",
    excerpt:
      "Exploring the latest trends and technologies shaping the web development landscape in 2025.",
    date: "Dec 20, 2025",
    readTime: "5 min read",
    content: `
            <h2>Introduction</h2>
            <p>Web development is constantly evolving, with new technologies and frameworks emerging every year. In this article, we'll explore the key trends that are shaping the future of web development in 2025 and beyond.</p>
            
            <h2>1. AI-Powered Development Tools</h2>
            <p>Artificial Intelligence is revolutionizing how developers work. AI assistants are becoming more sophisticated, helping with code generation, debugging, and even architecture design. Tools powered by large language models are increasing productivity and allowing developers to focus on higher-level problems.</p>
            
            <h2>2. Web Components and Micro Frontends</h2>
            <p>The shift towards component-based architecture continues to grow. Web components provide a standard way to encapsulate functionality, while micro frontends allow teams to develop and deploy independent frontend modules. This approach improves scalability and team collaboration.</p>
            
            <h2>3. Edge Computing</h2>
            <p>Edge computing brings computation closer to the data source, reducing latency and improving performance. Edge functions and serverless computing are becoming essential tools for modern web applications.</p>
            
            <h2>4. Improved Developer Experience</h2>
            <p>Developer experience (DX) is becoming as important as user experience. Fast build times, hot module replacement, and better debugging tools are essential for productivity.</p>
            
            <h2>5. Performance Optimization</h2>
            <p>Core Web Vitals and performance metrics continue to drive optimization efforts. Zero-JavaScript approaches and static site generation are gaining popularity for their performance benefits.</p>
            
            <h2>Conclusion</h2>
            <p>The future of web development is exciting and full of possibilities. By staying updated with these trends and continuously learning, developers can create better, faster, and more user-friendly web applications.</p>
        `,
  },
  {
    id: 2,
    title: "Mastering User Experience Design",
    category: "Design",
    excerpt:
      "Learn the principles and practices that make digital products intuitive and delightful.",
    date: "Dec 18, 2025",
    readTime: "7 min read",
    content: `
            <h2>What is User Experience Design?</h2>
            <p>User Experience Design (UX Design) is the process of creating digital products that are intuitive, accessible, and delightful to use. It goes beyond aesthetics to focus on how users interact with your product.</p>
            
            <h2>Core Principles of UX Design</h2>
            <h3>1. User-Centered Design</h3>
            <p>Always put the user first. Understand their needs, pain points, and goals before making design decisions. Conduct user research, interviews, and usability testing to inform your designs.</p>
            
            <h3>2. Simplicity</h3>
            <p>Keep your designs simple and uncluttered. Remove unnecessary elements and focus on the essential features. A simple design is easier to understand and use.</p>
            
            <h3>3. Consistency</h3>
            <p>Maintain consistency in design patterns, colors, typography, and interactions. This helps users learn your product faster and reduces cognitive load.</p>
            
            <h3>4. Feedback</h3>
            <p>Provide clear feedback for user actions. Whether it's a button click or form submission, users should always know what's happening.</p>
            
            <h2>Design Process</h2>
            <p>A good UX design process includes research, ideation, prototyping, testing, and iteration. Each phase is important and contributes to creating better products.</p>
            
            <h2>Tools and Technologies</h2>
            <p>Modern UX designers use tools like Figma, Adobe XD, and Sketch for design. Prototyping tools like InVision and Framer help bring designs to life.</p>
            
            <h2>Conclusion</h2>
            <p>Great UX design is not magic—it's the result of careful planning, user research, and continuous iteration. By following these principles, you can create products that users love.</p>
        `,
  },
  {
    id: 3,
    title: "Getting Started with React Hooks",
    category: "Technology",
    excerpt:
      "A comprehensive guide to using React Hooks to manage state and side effects in functional components.",
    date: "Dec 15, 2025",
    readTime: "6 min read",
    content: `
            <h2>What are React Hooks?</h2>
            <p>React Hooks are functions that let you use state and other React features in functional components. Introduced in React 16.8, they've become the standard way to write React components.</p>
            
            <h2>Common Hooks</h2>
            <h3>useState</h3>
            <p>The <code>useState</code> hook allows you to add state to functional components. It returns an array with the current state and a function to update it.</p>
            
            <h3>useEffect</h3>
            <p>The <code>useEffect</code> hook lets you perform side effects in functional components. It runs after render and can be used for data fetching, subscriptions, and more.</p>
            
            <h3>useContext</h3>
            <p>The <code>useContext</code> hook lets you subscribe to React context without nesting. It's useful for passing data through the component tree.</p>
            
            <h2>Rules of Hooks</h2>
            <p>Hooks must be called at the top level of your component, not inside loops or conditions. Custom hooks must start with "use".</p>
            
            <h2>Best Practices</h2>
            <p>Keep your hooks simple and focused. Use custom hooks to extract logic from components. Always include dependencies in the dependency array for useEffect.</p>
            
            <h2>Conclusion</h2>
            <p>React Hooks make it easier to write clean and maintainable React components. Practice using them and they'll become second nature.</p>
        `,
  },
  {
    id: 4,
    title: "The Art of Minimalist Design",
    category: "Design",
    excerpt:
      "Discover how minimalism can improve your designs and create more impactful user experiences.",
    date: "Dec 12, 2025",
    readTime: "5 min read",
    content: `
            <h2>What is Minimalist Design?</h2>
            <p>Minimalist design is about doing more with less. It focuses on essential elements, clean layouts, and plenty of whitespace. This approach creates designs that are elegant, clear, and easy to use.</p>
            
            <h2>Benefits of Minimalism</h2>
            <p>Minimalist designs load faster, are easier to understand, and look more professional. They reduce cognitive load and help users focus on what matters.</p>
            
            <h2>Key Principles</h2>
            <p><strong>Less is More:</strong> Remove unnecessary elements and keep only what's essential. <strong>Whitespace:</strong> Use whitespace to create breathing room and improve readability. <strong>Typography:</strong> Focus on typography to create hierarchy and visual interest.</p>
            
            <h2>Examples</h2>
            <p>Many successful brands use minimalist design: Apple, Google, and Airbnb all embrace simplicity in their design.</p>
            
            <h2>Conclusion</h2>
            <p>Minimalist design is timeless and effective. By embracing simplicity, you can create designs that stand the test of time.</p>
        `,
  },
  {
    id: 5,
    title: "Building Accessible Web Applications",
    category: "Technology",
    excerpt:
      "Learn how to create web applications that are accessible to everyone, including people with disabilities.",
    date: "Dec 10, 2025",
    readTime: "8 min read",
    content: `
            <h2>Why Accessibility Matters</h2>
            <p>Web accessibility ensures that people with disabilities can access and use web applications effectively. It's not just a nice-to-have—it's a responsibility.</p>
            
            <h2>WCAG Guidelines</h2>
            <p>The Web Content Accessibility Guidelines (WCAG) provide a standard for accessibility. They cover four principles: Perceivable, Operable, Understandable, and Robust.</p>
            
            <h2>Practical Tips</h2>
            <p>Use semantic HTML, provide alt text for images, ensure sufficient color contrast, make keyboard navigation possible, and test with assistive technologies.</p>
            
            <h2>Common Issues</h2>
            <p>Many websites have accessibility issues: missing alt text, poor color contrast, unclear focus states, and inaccessible forms.</p>
            
            <h2>Tools and Resources</h2>
            <p>Use tools like WAVE, Axe, and Lighthouse to test accessibility. Read the WCAG guidelines and join the accessibility community.</p>
            
            <h2>Conclusion</h2>
            <p>Building accessible web applications benefits everyone. Start small, test often, and continuously improve.</p>
        `,
  },
  {
    id: 6,
    title: "Work-Life Balance for Developers",
    category: "Lifestyle",
    excerpt:
      "Tips and strategies for maintaining a healthy work-life balance as a developer.",
    date: "Dec 8, 2025",
    readTime: "6 min read",
    content: `
            <h2>The Challenge</h2>
            <p>Developers often struggle with work-life balance. The nature of the work, tight deadlines, and the tendency to over-commit can lead to burnout.</p>
            
            <h2>Set Boundaries</h2>
            <p>Establish clear boundaries between work and personal time. Set specific work hours and stick to them. Turn off notifications after work hours.</p>
            
            <h2>Take Regular Breaks</h2>
            <p>Taking breaks throughout the day improves productivity and mental health. Use the Pomodoro technique or simply step away from your desk regularly.</p>
            
            <h2>Exercise and Health</h2>
            <p>Regular exercise is essential for mental and physical health. Even a short walk can help clear your mind and reduce stress.</p>
            
            <h2>Learn Something New</h2>
            <p>Pursue hobbies and interests outside of work. This keeps your mind engaged and provides a healthy outlet for creativity.</p>
            
            <h2>Seek Support</h2>
            <p>Don't hesitate to seek help from friends, family, or a mental health professional. Remember, it's okay to say no.</p>
            
            <h2>Conclusion</h2>
            <p>Work-life balance is essential for long-term success and happiness. Prioritize your well-being and remember that you're more than your job.</p>
        `,
  },
];

// Mobile Menu Toggle
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
}

// Load Blog Articles
function loadBlogArticles() {
  const blogGrid = document.getElementById("blog-grid");
  if (!blogGrid) return;

  blogGrid.innerHTML = "";
  blogPosts.forEach((post) => {
    const article = createBlogCard(post);
    blogGrid.appendChild(article);
  });
}

// Create Blog Card
function createBlogCard(post) {
  const card = document.createElement("article");
  card.className = "blog-card";
  card.dataset.category = post.category;

  card.innerHTML = `
        <div class="blog-card-image"></div>
        <div class="blog-card-content">
            <div class="blog-card-header">
                <h3>${post.title}</h3>
                <span class="category">${post.category}</span>
            </div>
            <p>${post.excerpt}</p>
            <div class="blog-card-footer">
                <span>${post.date}</span>
                <span>${post.readTime}</span>
            </div>
        </div>
    `;

  card.addEventListener("click", () => {
    window.location.href = `article.html?id=${post.id}`;
  });

  return card;
}

// Filter Articles
function initFilter() {
  const filterButtons = document.querySelectorAll(".tag-btn");
  const blogCards = document.querySelectorAll(".blog-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;
      blogCards.forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Load Article Page
function loadArticlePage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    document.body.innerHTML =
      '<div class="no-articles"><p>Article not found</p></div>';
    return;
  }

  document.getElementById("article-category").textContent = post.category;
  document.getElementById("article-title").textContent = post.title;
  document.getElementById("article-date").textContent = post.date;
  document.getElementById("reading-time").textContent = post.readTime;
  document.getElementById("article-excerpt").textContent = post.excerpt;
  document.getElementById("article-body").innerHTML = post.content;

  // Set page title
  document.title = `${post.title} - BlogHub`;

  // Load related articles
  loadRelatedArticles(id);
}

// Load Related Articles
function loadRelatedArticles(currentId) {
  const relatedGrid = document.getElementById("related-grid");
  if (!relatedGrid) return;

  const related = blogPosts.filter((p) => p.id !== currentId).slice(0, 3);
  relatedGrid.innerHTML = "";

  related.forEach((post) => {
    const card = createBlogCard(post);
    relatedGrid.appendChild(card);
  });
}

// Handle Contact Form
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formMessage = document.getElementById("form-message");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Validate form
    if (!name || !email || !subject || !message) {
      showFormMessage("Please fill out all fields", "error");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormMessage("Please enter a valid email address", "error");
      return;
    }

    // Simulate form submission
    showFormMessage(
      "Thank you for your message! We'll get back to you soon.",
      "success"
    );
    form.reset();

    // Clear message after 5 seconds
    setTimeout(() => {
      formMessage.classList.remove("success", "error");
    }, 5000);
  });
}

// Show Form Message
function showFormMessage(message, type) {
  const formMessage = document.getElementById("form-message");
  formMessage.textContent = message;
  formMessage.classList.remove("success", "error");
  formMessage.classList.add(type);
}

// Set Active Navigation Link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Initialize Everything
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  loadBlogArticles();
  initFilter();
  initContactForm();
  setActiveNavLink();

  // Check if we're on article page
  if (window.location.pathname.includes("article.html")) {
    loadArticlePage();
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
