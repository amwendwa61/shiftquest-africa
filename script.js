const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const interest = formData.get("interest");
    const message = formData.get("message").trim();

    const subject = encodeURIComponent(`ShiftQuest Africa enquiry: ${interest}`);
    const body = encodeURIComponent(
      `Hello ShiftQuest Africa,\\n\\n${message}\\n\\nName: ${name}\\nEmail: ${email}\\nInterest: ${interest}`
    );

    window.location.href =
      `mailto:admin.shiftquestafrica@gmail.com?subject=${subject}&body=${body}`;
  });
}
