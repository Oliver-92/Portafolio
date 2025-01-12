// Function to manage the form
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    // Avoid default sending and redirection
    e.preventDefault();

    // Obtén el formulario
    const form = e.target;
    // Collect form data
    const formData = new FormData(form);
    // Element for the message
    const messageElement = document.getElementById("formMessage");
    // Language of the page (default "es")
    const userLanguage = document.documentElement.lang || "es";
    // Sending the form data
    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            // If it was sent correctly
            messageElement.textContent = userLanguage === "es"
                ? "Mensaje enviado correctamente."
                : "Message sent successfully.";
            messageElement.style.color = "green";
        } else {
            // If there is an error in the submission
            messageElement.textContent = userLanguage === "es"
                ? "Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo."
                : "There was an error sending the message. Please try again.";
            messageElement.style.color = "red";
        }
    } catch (error) {
        // If a connection or fetch error occurs
        messageElement.textContent = userLanguage === "es"
            ? "Error de conexión. Intente nuevamente más tarde."
            : "Connection error. Please try again later.";
        messageElement.style.color = "red";
    }
    // Display the message
    messageElement.style.display = "block";
});