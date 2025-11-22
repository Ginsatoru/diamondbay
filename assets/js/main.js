/**
 * Diamond Bay Bowling Club - Main JavaScript
 * Handles navigation, animations, and UI interactions
 */

(function () {
  "use strict";

  // =============================================
  // Configuration
  // =============================================
  const config = {
    scrollThreshold: 80,
    mobileBreakpoint: 1024,
    animationDuration: 300,
  };

  // =============================================
  // DOM Elements - Wait for DOM to be ready
  // =============================================
  let elements = {};

  const cacheElements = () => {
    elements = {
      navbar: document.getElementById("navbar"),
      navbarBg: document.getElementById("navbar-bg"),
      mobileMenuBtn: document.getElementById("mobile-menu-btn"),
      mobileMenu: document.getElementById("mobile-menu"),
      mobileMenuClose: document.getElementById("mobile-menu-close"),
      mobileMenuOverlay: document.getElementById("mobile-menu-overlay"),
      navLinks: document.querySelectorAll(".nav-link"),
      mobileNavLinks: document.querySelectorAll(".mobile-nav-link"),
      scrollTopBtn: document.getElementById("scroll-top-btn"),
    };
  };

  // =============================================
  // Navbar Functionality
  // =============================================
  const Navbar = {
    isScrolled: false,
    isMobileMenuOpen: false,

    init() {
      if (!elements.navbar) {
        console.warn("Navbar element not found");
        return;
      }
      this.bindEvents();
      this.handleScroll();
    },

    bindEvents() {
      // Scroll event with throttle
      let ticking = false;
      window.addEventListener("scroll", () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            this.handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      });

      // Mobile menu toggle (hamburger button)
      if (elements.mobileMenuBtn) {
        elements.mobileMenuBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.toggleMobileMenu();
        });
      }

      // Mobile menu close button (X button)
      if (elements.mobileMenuClose) {
        elements.mobileMenuClose.addEventListener("click", () => {
          this.closeMobileMenu();
        });
      }

      // Mobile menu overlay click to close
      if (elements.mobileMenuOverlay) {
        elements.mobileMenuOverlay.addEventListener("click", () => {
          this.closeMobileMenu();
        });
      }

      // Close mobile menu on nav link click
      if (elements.mobileMenu) {
        elements.mobileMenu.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", () => {
            if (this.isMobileMenuOpen) {
              this.closeMobileMenu();
            }
          });
        });
      }

      // Handle resize - close mobile menu on desktop
      window.addEventListener("resize", () => {
        if (
          window.innerWidth >= config.mobileBreakpoint &&
          this.isMobileMenuOpen
        ) {
          this.closeMobileMenu();
        }
      });

      // Handle escape key to close menu
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isMobileMenuOpen) {
          this.closeMobileMenu();
        }
      });
    },

    handleScroll() {
      const scrollY = window.scrollY;

      if (scrollY > config.scrollThreshold && !this.isScrolled) {
        this.isScrolled = true;
        elements.navbar?.classList.add("navbar-scrolled");
        elements.navbar?.classList.remove("navbar-transparent");
      } else if (scrollY <= config.scrollThreshold && this.isScrolled) {
        this.isScrolled = false;
        elements.navbar?.classList.remove("navbar-scrolled");
        elements.navbar?.classList.add("navbar-transparent");
      }

      // Show/hide scroll to top button
      if (elements.scrollTopBtn) {
        if (scrollY > 500) {
          elements.scrollTopBtn.classList.remove(
            "opacity-0",
            "pointer-events-none"
          );
          elements.scrollTopBtn.classList.add("opacity-100");
        } else {
          elements.scrollTopBtn.classList.add(
            "opacity-0",
            "pointer-events-none"
          );
          elements.scrollTopBtn.classList.remove("opacity-100");
        }
      }
    },

    toggleMobileMenu() {
      this.isMobileMenuOpen ? this.closeMobileMenu() : this.openMobileMenu();
    },

    openMobileMenu() {
      this.isMobileMenuOpen = true;
      document.body.classList.add("mobile-menu-open");
      elements.mobileMenuBtn?.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";

      // Animate hamburger to X
      const spans = elements.mobileMenuBtn?.querySelectorAll("span");
      if (spans && spans.length >= 3) {
        spans[0].classList.add("rotate-45", "translate-y-2");
        spans[1].classList.add("opacity-0");
        spans[2].classList.add("-rotate-45", "-translate-y-2");
      }
    },

    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      document.body.classList.remove("mobile-menu-open");
      elements.mobileMenuBtn?.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";

      // Animate X back to hamburger
      const spans = elements.mobileMenuBtn?.querySelectorAll("span");
      if (spans && spans.length >= 3) {
        spans[0].classList.remove("rotate-45", "translate-y-2");
        spans[1].classList.remove("opacity-0");
        spans[2].classList.remove("-rotate-45", "-translate-y-2");
      }
    },
  };

  // =============================================
  // Smooth Scroll
  // =============================================
  const SmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          const href = anchor.getAttribute("href");
          if (href && href !== "#") {
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              
              // Close mobile menu if open
              if (Navbar.isMobileMenuOpen) {
                Navbar.closeMobileMenu();
              }
              
              const navbarHeight = elements.navbar?.offsetHeight || 0;
              const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

              window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
              });
            }
          }
        });
      });

      // Scroll to top button
      if (elements.scrollTopBtn) {
        elements.scrollTopBtn.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    },
  };

  // =============================================
  // Counter Animation
  // =============================================
  const CounterAnimation = {
    init() {
      const counters = document.querySelectorAll("[data-counter]");

      if (counters.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      counters.forEach((counter) => observer.observe(counter));
    },

    animateCounter(element) {
      const target = parseInt(element.dataset.counter, 10);
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out cubic)
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeProgress * target);

        element.textContent = current.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target.toLocaleString();
        }
      };

      requestAnimationFrame(updateCounter);
    },
  };

  // =============================================
  // Image Lazy Loading
  // =============================================
  const LazyLoad = {
    init() {
      const lazyImages = document.querySelectorAll("img[data-src]");

      if (lazyImages.length === 0) return;

      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                img.classList.add("loaded");
                imageObserver.unobserve(img);
              }
            });
          },
          { rootMargin: "50px" }
        );

        lazyImages.forEach((img) => imageObserver.observe(img));
      } else {
        // Fallback for older browsers
        lazyImages.forEach((img) => {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        });
      }
    },
  };

  // =============================================
  // Form Handling
  // =============================================
  const FormHandler = {
    init() {
      const forms = document.querySelectorAll("form[data-ajax]");

      forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          this.handleSubmit(form);
        });
      });
    },

    handleSubmit(form) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalHTML = submitBtn?.innerHTML;

      // Show loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        `;
      }

      // Simulate form submission (replace with actual AJAX call)
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.innerHTML = `
            <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            Sent Successfully!
          `;
          submitBtn.classList.remove("bg-emerald");
          submitBtn.classList.add("bg-greenLight");

          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHTML;
            submitBtn.classList.remove("bg-greenLight");
            submitBtn.classList.add("bg-emerald");
            form.reset();
          }, 2500);
        }
      }, 1500);
    },
  };

  // =============================================
  // Initialize AOS with proper error handling
  // =============================================
  const initAOS = () => {
    if (typeof AOS === "undefined") {
      console.warn("AOS library not loaded");
      // Fallback: make all AOS elements visible
      document.querySelectorAll("[data-aos]").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    try {
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
        delay: 0,
        disable: false,
        anchorPlacement: "top-bottom",
      });

      // Refresh AOS after images load (in case layout shifts)
      window.addEventListener("load", () => {
        AOS.refresh();
      });
    } catch (error) {
      console.error("AOS initialization failed:", error);
      // Fallback: show all elements
      document.querySelectorAll("[data-aos]").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    }
  };

  // =============================================
  // Initialize Everything
  // =============================================
  const init = () => {
    // Cache DOM elements first
    cacheElements();

    // Initialize AOS
    initAOS();

    // Initialize all modules
    Navbar.init();
    SmoothScroll.init();
    CounterAnimation.init();
    LazyLoad.init();
    FormHandler.init();

    // Add loaded class to body for CSS transitions
    document.body.classList.add("loaded");

    console.log("Diamond Bay Bowling Club - Site initialized successfully");
  };

  // =============================================
  // Run on DOM ready
  // =============================================
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();