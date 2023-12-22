
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = windowHeight * 2; // Set to 50% of the window height

        var elementVisible = 250;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            //  reveals[i].style.marginTop = "10%";
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
