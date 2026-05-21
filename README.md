# EcoConecta

## Usuários para teste

| Login  | Senha     | Nome             |
|--------|-----------|------------------|
| admin  | admin123  | Administrador    |
| user   | user123   | Usuário Teste    |

## Fluxo

1. Abra `index.html` (raiz) — os usuários acima são criados automaticamente no navegador
2. Faça login — você será redirecionado para `pages/recicle.html`
3. Em `index.html`, clique em "ESQUECI MINHA SENHA" para redefinir a senha em `pages/redefinirPass.html`

## Estrutura do projeto

```
/
├── index.html              # Página de login (entrada)
├── style/
│   └── style.css           # CSS compartilhado (reset, container, logo, botões, ajuda)
├── js/
│   └── auth.js             # Autenticação (login, register, usuarios localStorage)
├── images/
│   ├── image.png           # Logo
│   └── mundo.png           # Imagem de fundo / meia tela
├── pages/
│   ├── recicle.html        # Página principal pós-login
│   ├── selos.html          # Selos ecológicos
│   ├── impacto.html        # Métricas de impacto ambiental
│   ├── mapa.html           # Mapa interativo
│   ├── perfil.html         # Perfil do usuário logado
│   └── redefinirPass.html  # Redefinição de senha
└── README.md
```
