document.addEventListener("DOMContentLoaded", function () {
    var bgh = document.getElementById("bgh");
    var bgf = document.getElementById("bgf");
    var animationDuration = 5000;

    bgh.style.backgroundImage = "url('/Image/header-backgrund.gif')";
    bgf.style.backgroundImage = "url('/Image/footer-backgrund.png')";


    setTimeout(function () {
        bgh.style.backgroundImage = "url('/Image/header-backgrund.png')";
    }, animationDuration);
});