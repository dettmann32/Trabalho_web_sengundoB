# EcoConecta

Projeto acadêmico de desenvolvimento web com foco em reciclagem, conscientização ambiental e navegação simples entre as telas do sistema. O projeto foi reorganizado para facilitar a manutenção do código, a apresentação em sala e a evolução visual das páginas.

## Usuários para teste

Os usuários abaixo podem ser utilizados para acessar o sistema durante os testes. 

| Login | Senha | Nome |
|-------|-------|------|
| admin | admin123 | Administrador |
| user | user123 | Usuário Teste |

## Fluxo de uso

1. Abra o arquivo `index.html` na raiz do projeto. 
2. Faça login com um dos usuários de teste. 
3. Após o login, o usuário será redirecionado para a página principal do sistema. 
4. Caso necessário, use a opção de redefinição de senha na tela inicial. 

## Estrutura do projeto

```text
/
├── index.html
├── README.md
├── images/
│   ├── image.png
│   └── mundo.png
├── js/
│   ├── auth.js
│   ├── menu.js
│   ├── crud.js
│   └── pages.js
├── style/
│   ├── style.css
│   ├── index.css
│   ├── agenda.css
│   ├── cooperativas.css
│   ├── desafios.css
│   ├── dicas.css
│   ├── impacto.css
│   ├── mapa.css
│   ├── noticias.css
│   ├── perfil.css
│   ├── ranking.css
│   ├── recicle.css
│   ├── redefinirPass.css
│   └── selos.css
└── pages/
    ├── agenda.html
    ├── cooperativas.html
    ├── desafios.html
    ├── dicas.html
    ├── impacto.html
    ├── mapa.html
    ├── noticias.html
    ├── perfil.html
    ├── ranking.html
    ├── recicle.html
    ├── redefinirPass.html
    └── selos.html
```

## Organização dos arquivos

- `index.html`: tela inicial do projeto e acesso ao sistema.
- `pages/`: páginas internas do site.
- `style/style.css`: arquivo global com estilos compartilhados.
- `style/*.css`: arquivos de estilo específicos de cada página, utilizando o estilo global como base.
- `js/auth.js`: script de autenticação e controle de acesso.
- `js/menu.js`: script de navegação e comportamento do menu.
- `js/crud.js`: script da tela funcional com CRUD.
- `js/pages.js`: interações complementares das páginas.
- `images/`: imagens usadas no projeto.

## Objetivo do projeto

O site foi desenvolvido para apresentar uma proposta acadêmica voltada à sustentabilidade, reciclagem e conscientização ambiental, utilizando HTML, CSS e JavaScript. A nova organização dos arquivos busca deixar o projeto mais claro, funcional e fácil de explicar durante a apresentação.