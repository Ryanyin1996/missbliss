document.addEventListener("DOMContentLoaded", function() {
    const contactBtn = document.getElementById("contact-btn");
    
    if (contactBtn) {
        contactBtn.addEventListener("click", function() {
            window.location.href = "/contact";
        });
    }
});
