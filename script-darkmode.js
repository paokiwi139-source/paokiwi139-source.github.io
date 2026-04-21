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