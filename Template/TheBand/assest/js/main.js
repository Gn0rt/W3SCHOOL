let index = 0;
carousel();
function carousel() {
    let i;
    const slides = document.getElementsByClassName("slide");
    // console.log(x)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    index++;
    if (index > slides.length) {
        index = 1;
    }
    slides[index - 1].style.display = "block"
    setTimeout(carousel, 2000)
}