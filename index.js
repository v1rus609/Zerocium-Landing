// Add scale effect on button click
document.querySelector('.cta-button').addEventListener('click', function() {
    document.getElementById('cta-animation').classList.toggle('scaled');
});

// Load Lottie animation
var animation = lottie.loadAnimation({
    container: document.getElementById('cta-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'path_to_your_animation_file.json' // Replace with your actual animation file path
});
