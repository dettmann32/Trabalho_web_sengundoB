const STORAGE_KEY = "ecoconecta_usuarios";

function carregarUsuarios(){
  const padrao = {
    admin: { senha: "admin123", nome: "Administrador" },
    user:  { senha: "user123",  nome: "Usuário Teste" },
    tutor: { senha: "123456", nome: "Perfil do tutor" },
    ong:{ senha: "ong$-135", nome: "Perfil da ONG" },
    prefeitura:{ senha: "pref@456", nome: "Perfil de prefeitura"}, 
  };

  const existentes = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  let alterou = false;
  for(const chave in padrao){
    if(!existentes[chave]){
      existentes[chave] = padrao[chave];
      alterou = true;
    }
  }
  if(alterou) localStorage.setItem(STORAGE_KEY, JSON.stringify(existentes));
}

function entrar(){
  const login = document.getElementById("login").value.trim();
  const senha = document.getElementById("senha").value;

  if(login === "" || senha === ""){
    alert("Preencha todos os campos");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if(!usuarios[login]){
    alert("Usuário não encontrado");
    return;
  }

  if(usuarios[login].senha !== senha){
    alert("Senha incorreta");
    return;
  }

  localStorage.setItem("ecoconecta_logado", JSON.stringify({
    login: login,
    nome: usuarios[login].nome
  }));

  window.location.href = "pages/recicle.html";
}

function registrar(){
  const login = prompt("Novo nome de usuário:");
  if(!login || login.trim() === "") return;

  const usuarios = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if(usuarios[login.trim()]){
    alert("Usuário já existe");
    return;
  }

  const senha = prompt("Nova senha:");
  if(!senha || senha.trim() === "") return;

  usuarios[login.trim()] = { senha: senha.trim(), nome: login.trim() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
  alert("Usuário cadastrado com sucesso!");
}
