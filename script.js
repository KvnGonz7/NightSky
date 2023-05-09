var board = document.getElementsByClassName('.container');

function draw() {
    setInterval(createStars, 30);
    setInterval(starFall, 2000);
    var canvas = document.getElementById("nightsky");
    var art = canvas.getContext("2d");
    art.beginPath();
    art.arc(240, 60, 0, Math.PI * 2, true);
    var color = art.createRadialGradient(100, 100, )
}