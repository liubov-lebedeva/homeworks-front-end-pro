let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slide = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slide.length) {
        slideIndex = slide.length;
    }
    if (n < 1) {
        slideIndex = 1;
    }

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }


    slide[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";


    document.querySelector(".prev").style.display = slideIndex === 1 ? "none" : "block";
    document.querySelector(".next").style.display = slideIndex === slide.length ? "none" : "block";
}