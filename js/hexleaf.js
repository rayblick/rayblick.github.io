function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("asciileaf")) {
        image.src = "../img/hexleaf_crop.png";
    } else {
        image.src = "../img/asciileaf_crop.png";
    }
}
