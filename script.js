const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const buttonLabel = submitButton?.querySelector(".button-label");
  const defaultButtonLabel = buttonLabel?.textContent || "Enviar consulta";

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.setAttribute("aria-busy", "true");
    }
    if (buttonLabel) buttonLabel.textContent = "Enviando...";
    if (formStatus) {
      formStatus.textContent = "";
      delete formStatus.dataset.state;
    }

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "No se pudo enviar la consulta.");
      }

      contactForm.reset();
      if (formStatus) {
        formStatus.dataset.state = "success";
        formStatus.textContent =
          "¡Gracias por tu consulta! Nos pondremos en contacto a la brevedad.";
      }
    } catch (error) {
      if (formStatus) {
        formStatus.dataset.state = "error";
        formStatus.textContent =
          "No pudimos enviar tu consulta. Revisá tu conexión e intentá nuevamente.";
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.removeAttribute("aria-busy");
      }
      if (buttonLabel) buttonLabel.textContent = defaultButtonLabel;
    }
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
