const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const name = String(formData.get("nombre") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("telefono") || "").trim();
  const service = String(formData.get("consulta") || "").trim();
  const message = String(formData.get("mensaje") || "").trim();

  const subject = `Consulta desde Impuestos Puce: ${service}`;
  const body = [
    `Nombre: ${name}`,
    `Correo: ${email}`,
    `Teléfono: ${phone || "No informado"}`,
    `Consulta: ${service}`,
    "",
    "Mensaje:",
    message,
  ].join("\n");

  const mailto = new URL("mailto:solucionesagiles.ei@gmail.com");
  mailto.searchParams.set("subject", subject);
  mailto.searchParams.set("body", body);

  if (formStatus) {
    formStatus.textContent = "Abriendo tu aplicación de correo…";
  }
  window.location.href = mailto.toString();
});

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
