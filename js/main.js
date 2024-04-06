
// Get the current year and set it in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

if ($('.text-slider').length === 1) {
    var typed_strings = $('.text-slider-items').text();
    var typed = new Typed('.text-slider', {
        strings: typed_strings.split(','),
        typeSpeed: 80,
        loop: true,
        backDelay: 1100,
        backSpeed: 30
    });
}