function convertToBase64(imgFile) {
    if (imgFile.files && imgFile.files[0]) {
        var readImg = new FileReader();
        readImg.readAsDataURL(imgFile.files[0]);

        readImg.onload = function(evnt) {
            var base64txt = document.getElementById("base64text");
            base64txt.value = evnt.target.result;
        };
    }
}
