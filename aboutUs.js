// Display a welcome message dynamically
document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.textContent = "Welcome! We’re excited to share our journey with you.";
    welcomeMessage.style.fontStyle = "italic";
    welcomeMessage.style.color = "#0288d1";
    welcomeMessage.style.marginBottom = "15px";

    // Dynamically set the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;
});
