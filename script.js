/*  Parameters in API call
    data=HelloWorld
    size=200x200   [ 10 - 1000]   [integer]x[integer]
    margin=50      [ 0 - 50 ]     [integer]
    color=000         FFFFFF
    bgcolor=099       FFFFFF
    ecc=L           L,M,Q,H
    format=png       png,jpg
*/

const base_api_url = "https://api.qrserver.com/v1/create-qr-code/?";
var textInput = document.getElementById("textInput");
const qr_image_container = document.getElementById("qr-image-container");
const qr_image = document.getElementById("qr-image");
const error = document.getElementById("error");

function showQR() {
    var encodedData = encodeURIComponent(textInput.value);
    let url = base_api_url + "data=" + encodedData + "&size=200x200";
    qr_image.src = url;
}

function loadQR() {
    let timer;
    clearTimeout(timer);

    if (textInput.value === "") {
        qr_image_container.style.display = "none";
        error.innerHTML = "Input cannot be empty";
        return;
    } else {
        qr_image_container.style.display = "grid";
        error.innerHTML = "";
        qr_image.src = "./loading.gif";

        timer = setTimeout(() => {
            showQR();
        }, 800);
    }
}

textInput.value = "Hello, World!";
loadQR();

