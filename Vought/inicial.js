document.addEventListener('DOMContentLoaded', function () {
    var curtirButtons = document.querySelectorAll('.curtir-btn');

    curtirButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            button.classList.toggle('ativo');
        });
    });
});



