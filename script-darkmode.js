document.addEventListener("DOMContentLoaded", function () {
  /* ===== DARK MODE ===== */

  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    const body = document.body;
    const icon = themeToggle.querySelector("i");

    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark");
    }

    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");

      if (icon) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
    } else {
      body.classList.remove("dark-mode");

      if (icon) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }
    }

    themeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");

        if (icon) {
          icon.classList.remove("fa-sun");
          icon.classList.add("fa-moon");
        }
      } else {
        localStorage.setItem("theme", "light");

        if (icon) {
          icon.classList.remove("fa-moon");
          icon.classList.add("fa-sun");
        }
      }
    });
  }

  /* ===== PROFILE FLIP + SPARKLES ===== */

  const profile = document.getElementById("profile-wrapper");
  const sparkles = document.querySelectorAll(".sparkle");

  if (profile) {
    profile.addEventListener("click", function () {
      sparkles.forEach(function (sparkle) {
        const angle = Math.random() * 2 * Math.PI;
        const distance = 60 + Math.random() * 60;

        const scale = 0.8 + Math.random() * 0.8;
        sparkle.style.fontSize = `${16 * scale}px`;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        sparkle.style.setProperty("--x", `${x}px`);
        sparkle.style.setProperty("--y", `${y}px`);
        sparkle.style.animationDelay = `${Math.random() * 0.2}s`;
      });

      profile.classList.add("active");

      setTimeout(function () {
        profile.classList.remove("active");
      }, 900);
    });
  }

  /* ===== MULTIPLE CENTERED PEEK GALLERIES ===== */

  const galleries = document.querySelectorAll(".gallery-section");

  galleries.forEach(function (gallery) {
    const images = gallery.querySelectorAll(".gallery-image");
    const prevBtn = gallery.querySelector(".gallery-btn.prev");
    const nextBtn = gallery.querySelector(".gallery-btn.next");

    if (!images.length || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function updateGallery() {
      images.forEach(function (image) {
        image.classList.remove("active", "prev", "next");
      });

      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      const nextIndex = (currentIndex + 1) % images.length;

      images[currentIndex].classList.add("active");
      images[prevIndex].classList.add("prev");
      images[nextIndex].classList.add("next");
    }

    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % images.length;
      updateGallery();
    });

    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateGallery();
    });

    updateGallery();
  });
});

/* ===== EXPAND / COLLAPSE SECTIONS ===== */

function toggleSection(id) {
  const section = document.getElementById(id);

  if (!section) return;

  section.style.display =
    section.style.display === "block" ? "none" : "block";
}

/* ===== REMEMBER SCROLL POSITION ===== */

const scrollKey = "lastScrollPosition";

window.addEventListener("load", function () {
  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/"
  ) {
    const savedPosition = sessionStorage.getItem(scrollKey);

    if (savedPosition) {
      window.scrollTo({
        top: parseInt(savedPosition),
        behavior: "smooth"
      });
    }
  }
});

window.addEventListener("beforeunload", function () {
  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/"
  ) {
    sessionStorage.setItem(scrollKey, window.scrollY);
  }
});
