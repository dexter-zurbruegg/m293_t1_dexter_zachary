document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'confirmation.html';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'main-content.html';
});