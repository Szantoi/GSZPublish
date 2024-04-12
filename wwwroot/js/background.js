document.addEventListener("DOMContentLoaded", function () {
    var bg = document.getElementById("bg");
    var bgh = document.getElementById("bgh");
    var bgm = document.getElementById("bgm");
    var animationDuration = 5000;

    bg.style.backgroundImage = "url('/Image/Backgrund.png')";
    bgh.style.backgroundImage = "url('/Image/Backgrund_header.gif')";
    bgm.style.backgroundImage = "url('/Image/Backgrund_main.png')";

    setTimeout(function () {
        bgh.style.backgroundImage = "url('/Image/Backgrund_header.png')";
    }, animationDuration);
});