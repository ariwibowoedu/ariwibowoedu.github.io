function like() {
    var button = document.getElementById("loveButton");
    var message = document.getElementById("message");

    button.classList.add('clicked');
    message.textContent = "Thank You!";
    message.classList.add('float-message');

    setTimeout(function () {
        message.textContent = "";
        message.classList.remove('float-message');
    }, 3000);

}