document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const icon = themeToggle.querySelector("i");

    // If no preference is saved, set dark mode as default
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "dark");
    }

    // Apply saved preference (or default to dark mode)
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon"); // Show moon icon
    } else {
        body.classList.remove("dark-mode");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun"); // Show sun icon
    }

    // Toggle theme on click
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon"); // Change to moon
        } else {
            localStorage.setItem("theme", "light");
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun"); // Change back to sun
        }
    });
});

function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display = 
    section.style.display === "block" ? "none" : "block";
}
document.body.classList.toggle("light-mode");

const profile = document.getElementById("profile-wrapper");
const sparkles = document.querySelectorAll(".sparkle");

profile.addEventListener("click", () => {

    // RANDOMIZE EACH SPARKLE
    sparkles.forEach(sparkle => {
        const angle = Math.random() * 2 * Math.PI; // full circle
        const distance = 60 + Math.random() * 60;  // how far it travels

        const scale = 0.8 + Math.random() * 0.8;
sparkle.style.fontSize = `${16 * scale}px`;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        sparkle.style.setProperty("--x", `${x}px`);
        sparkle.style.setProperty("--y", `${y}px`);
        sparkle.style.animationDelay = `${Math.random() * 0.2}s`;
    });

    // TRIGGER ANIMATION
    profile.classList.add("active");

    setTimeout(() => {
        profile.classList.remove("active");
    }, 900);
});
