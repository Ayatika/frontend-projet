document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            window.location.href = "./Dashboard/dashboard.html";
        });
    }
});


