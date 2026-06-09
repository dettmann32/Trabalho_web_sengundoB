function carregarUsuarios() {
const usuariosPadrao = [
    { login: "admin", senha: "admin123", perfil: "Administrador" },
    { login: "user", senha: "user123", perfil: "Usuário Teste" },
    { login: "candidato", senha: "cand!098", perfil: "Perfil do Candidato" },
    { login: "tutor", senha: "123456", perfil: "Perfil do tutor" },
    { login: "ong", senha: "ong$-135", perfil: "Perfil da ONG" },
    { login: "prefeitura", senha: "pref@456", perfil: "Perfil de prefeitura" },
    
];

localStorage.setItem("usuarios", JSON.stringify(usuariosPadrao));
}

function entrar(login, senha) {
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const mensagem = document.getElementById("mensagemLogin");

if (!login || !senha) {
    if (mensagem) {
        mensagem.style.color = "#c0392b";
        mensagem.textContent = "Preencha o login e a senha.";
    }
    return;
}

const usuarioEncontrado = usuarios.find(function (usuario) {
    return usuario.login === login && usuario.senha === senha;
});

if (!usuarioEncontrado) {
    if (mensagem) {
        mensagem.style.color = "#c0392b";
        mensagem.textContent = "Login ou senha inválidos.";
    }
    return;
}

localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

if (mensagem) {
    mensagem.style.color = "#2e7d32";
    mensagem.textContent = "Login realizado com sucesso.";
}

setTimeout(function () {
    window.location.href = "./pages/recicle.html";
}, 800);
}

function registrar() {
alert("A área de cadastro será implementada.");
}

function redefinirSenha(login, novaSenha, confirmarSenha) {
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const mensagem = document.getElementById("mensagemRedefinir");

if (!login || !novaSenha || !confirmarSenha) {
    if (mensagem) {
        mensagem.style.color = "#c0392b";
        mensagem.textContent = "Preencha todos os campos.";
    }
    return;
}

if (novaSenha !== confirmarSenha) {
    if (mensagem) {
        mensagem.style.color = "#c0392b";
        mensagem.textContent = "As senhas não coincidem.";
    }
    return;
}

const indiceUsuario = usuarios.findIndex(function (usuario) {
    return usuario.login === login;
});

if (indiceUsuario === -1) {
    if (mensagem) {
        mensagem.style.color = "#c0392b";
        mensagem.textContent = "Usuário não encontrado.";
    }
    return;
}

usuarios[indiceUsuario].senha = novaSenha;
localStorage.setItem("usuarios", JSON.stringify(usuarios));

if (mensagem) {
    mensagem.style.color = "#2e7d32";
    mensagem.textContent = "Senha redefinida com sucesso.";
}

setTimeout(function () {
    window.location.href = "../index.html";
}, 1200);
}

carregarUsuarios();

const formLogin = document.getElementById("formLogin");
const btnRegistrar = document.getElementById("btnRegistrar");
const formRedefinirSenha = document.getElementById("formRedefinirSenha");

if (formLogin) {
formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();

    entrar(login, senha);
});
}

if (btnRegistrar) {
btnRegistrar.addEventListener("click", function () {
    registrar();
});
}

if (formRedefinirSenha) {
formRedefinirSenha.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const login = document.getElementById("loginRecuperacao").value.trim();
    const novaSenha = document.getElementById("novaSenha").value.trim();
    const confirmarSenha = document.getElementById("confirmarSenha").value.trim();

    redefinirSenha(login, novaSenha, confirmarSenha);
});
}