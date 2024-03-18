const navbarToggler = document.querySelector('.navbar-toggler');
const startLearningBtn = document.getElementById('stbtn');

navbarToggler.addEventListener('click', function () {
    if (startLearningBtn.style.display === 'none') {
        startLearningBtn.style.display = 'block';
    } else {
        startLearningBtn.style.display = 'none';
    }
});
