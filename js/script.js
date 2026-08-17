const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});

// =========================
// WHATSAPP BOOKING
// =========================

const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("bookingName").value;
        const phone = document.getElementById("bookingPhone").value;
        const service = document.getElementById("bookingService").value;
        const date = document.getElementById("bookingDate").value;
        const time = document.getElementById("bookingTime").value;

        const selectedDate = new Date(date);
        const today = new Date();

        today.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            alert("Please choose today or a future date.");
            return;
        }

        const formattedDate = new Date(date).toLocaleDateString("en-GH", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        const message = `
        ✂️ NEW APPOINTMENT REQUEST

        👤 Customer: ${name}
        📞 Phone: ${phone}
        ✂️ Service: ${service}
        📅 Date: ${formattedDate}
        🕐 Time: ${time}

        Please confirm this appointment with the customer.
        `;

        const whatsappNumber = "233240000000";

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

    });

}