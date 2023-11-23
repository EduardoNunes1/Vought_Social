function submitForm() {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.innerHTML = '<i class="far fa-eye"><img src="src/img/olhinho-fechado.png"></i>';
        } else {
            passwordInput.type = 'password';
            togglePassword.innerHTML = '<i class="far fa-eye-slash"><img src="src/img/olhinho-aberto.png"></i>';
        }
    });
}

function logar() {
    var login = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    if (login == "adm" && senha == "012345") {
        // Certifique-se de que o caminho está correto
        location.href = "../../../home/home.html";
    } else {
        alert('email ou senha incorreto ⛔');
    }
}

// Adicione a chamada da função submitForm para vincular o evento de clique do botão de alternância de senha
submitForm();
