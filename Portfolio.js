function flipBadge(card) {
    card.classList.toggle("flipped");
}

document.addEventListener("DOMContentLoaded", () => {
    // Scroll Spy Navigation
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.remove("active", "bg-gray-800", "text-white");
                    link.classList.add("text-gray-600");
                });

                const activeId = entry.target.getAttribute("id");
                const activeLink = document.querySelector(`.nav-link[href="#${activeId}"]`);

                if (activeLink) {
                    activeLink.classList.add("active", "bg-gray-800", "text-white");
                    activeLink.classList.remove("text-gray-600");
                }
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
});
