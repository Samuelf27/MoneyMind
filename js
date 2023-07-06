const menuItems = document.querySelectorAll("#menu a")

var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

//Função responsável por mostrar o menu ao clicar no botão
function mostrarMenu() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }
}

function abrirHome() {
    window.location.href = "./html/home.html";
}

function limparAtivo() {
    menuItems.forEach(item => {
        item.classList.remove("active");
    });
}

function adicionarAtivo(event) {
    limparAtivo();
    event.target.classList.add("active");
}

menuItems.forEach(item => {
    item.addEventListener("click", adicionarAtivo);
})