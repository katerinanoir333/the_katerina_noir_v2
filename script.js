const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const accordions = [...document.querySelectorAll("[data-accordion], [data-faq]")];
const intentionButtons = [...document.querySelectorAll("[data-intention]")];
const intentionResult = document.querySelector("[data-intention-result]");
const accessForm = document.querySelector("[data-access-form]");
const formError = document.querySelector("[data-form-error]");
const formSuccess = document.querySelector("[data-form-success]");
const reveals = [...document.querySelectorAll(".reveal")];

const intentionCopy = {
  attention: {
    label: "The Proper Door",
    title: "Begin with etiquette.",
    copy: "Read the rules, apply with clarity, and understand that attention is considered through screening."
  },
  date: {
    label: "Dinner Date by Application",
    title: "Private planning follows screening.",
    copy: "Dinner date consideration requires the Veil Check, an aligned request, discretion, tribute culture, and mutual chemistry."
  },
  sponsor: {
    label: "Wardrobe or Ritual Sponsorship",
    title: "You may sponsor a mood.",
    copy: "Approved admirers may sponsor styling, beauty rituals, or preparation. Final presentation remains Katerina's."
  },
  gift: {
    label: "Thoughtful Gift",
    title: "Send with refinement.",
    copy: "Certificates, perfume, beauty rituals, books, candles, jewelry, wardrobe tributes, or dinner experiences are more aligned with The House than flowers."
  }
};

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
}

function closeNav() {
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function showIntention(key) {
  const selected = intentionCopy[key];

  intentionButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.intention === key);
  });

  intentionResult.innerHTML = `
    <p class="eyebrow">${selected.label}</p>
    <h3>${selected.title}</h3>
    <p>${selected.copy}</p>
  `;
}

function revealOnScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  reveals.forEach((item) => observer.observe(item));
}

function findFirstInvalidField() {
  const requiredFields = [...accessForm.querySelectorAll("[required]")];

  return requiredFields.find((field) => {
    if (field.type === "checkbox") return !field.checked;
    return !field.value.trim();
  });
}

async function validateForm(event) {
  event.preventDefault();
  formError.textContent = "";
  formSuccess.textContent = "";

  const honeypot = accessForm.querySelector("input[name='company']");
  if (honeypot?.value) {
    formError.textContent = "The application could not be processed.";
    return;
  }

  const firstInvalid = findFirstInvalidField();

  if (firstInvalid) {
    formError.textContent = "Please complete every required field and confirmation before requesting access.";
    firstInvalid.focus();
    return;
  }

  const submitButton = accessForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  try {
    const response = await fetch(accessForm.action, {
      method: "POST",
      body: new FormData(accessForm),
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      throw new Error("Formspree rejected the request.");
    }

    formSuccess.textContent = "Your application has been sent. Private details are shared at my discretion.";
    accessForm.reset();
  } catch (error) {
    formError.textContent = "The application could not be sent. Please try again, or send your introduction privately on Instagram.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Submit Application";
  }
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

navToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) closeNav();
});

accordions.forEach((accordion) => {
  accordion.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const item = button.closest(".accordion-item");
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

intentionButtons.forEach((button) => {
  button.addEventListener("click", () => showIntention(button.dataset.intention));
});

accessForm.addEventListener("submit", validateForm);
revealOnScroll();
