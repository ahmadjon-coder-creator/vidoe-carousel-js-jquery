// BEGIN SLIDING
var slideIndex = 1;
//var myTimer;
var slideshowContainer;
window.addEventListener("load", function () {
    showSlides(slideIndex);
    slideshowContainer = document.getElementsByClassName('carousel-inner')[0];
})
// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
    //clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
}
//Controls the current slide and resets interval if needed
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-slide");
    var clip = document.querySelectorAll('.clip')
    var dots = document.getElementsByClassName("carousel-dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        $('video').trigger('play');
        $('video').trigger('pause');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}