let lichtAn = false;

function buttonClickHandler() {
    if (lichtAn == false) {
        document.getElementsByClassName("meinBild")[0].src = "licht-an.png";
        addEventListener("load",function(){changeBackround('black')});
        function changeBackround (color) {
            document.body.style.background = color;
        }
    } else {
        document.getElementsByClassName("meinBild")[0].src = "licht-aus.png";
    }
    lichtAn = !lichtAn
}