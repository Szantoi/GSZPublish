document.addEventListener("DOMContentLoaded", function () {
    var bg = document.getElementById("bg");
    var bgh = document.getElementById("bgh");
    var animationDuration = 5000;

    bgh.style.backgroundImage = "url('/Image/Backgrund_header.gif')";

    bg.style.backgroundImage = "url('/Image/Backgrund.png')";

    setTimeout(function () {
        bgh.style.backgroundImage = "url('/Image/Backgrund_header_2.png')";
    }, animationDuration);
});