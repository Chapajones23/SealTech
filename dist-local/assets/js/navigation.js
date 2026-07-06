/* =========================================================
   NAVBAR — Professional, stable, responsive navigation bar
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // Navbar scroll state
  const handleScroll = () => {
    if (window.scrollY > 12) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  // Mobile menu toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      navLinks.classList.toggle("is-open");
    });

    // Funga menu baada ya kubofya link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("is-active");
        navLinks.classList.remove("is-open");
      });
    });
  }
});