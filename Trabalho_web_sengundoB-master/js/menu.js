document.addEventListener("DOMContentLoaded", () => {
  const botaoMenu = document.getElementById("botaoMenu");
  const menuDropdown = document.getElementById("menuDropdown");

  if (!botaoMenu || !menuDropdown) return;

  botaoMenu.setAttribute("aria-expanded", "false");

  botaoMenu.addEventListener("click", (event) => {
      event.stopPropagation();
      menuDropdown.classList.toggle("aberto");

      const aberto = menuDropdown.classList.contains("aberto");
      botaoMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  document.addEventListener("click", (event) => {
      const clicouNoBotao = botaoMenu.contains(event.target);
      const clicouNoMenu = menuDropdown.contains(event.target);

      if (!clicouNoBotao && !clicouNoMenu) {
          menuDropdown.classList.remove("aberto");
          botaoMenu.setAttribute("aria-expanded", "false");
      }
  });

  const links = menuDropdown.querySelectorAll("a");
  links.forEach((link) => {
      link.addEventListener("click", () => {
          menuDropdown.classList.remove("aberto");
          botaoMenu.setAttribute("aria-expanded", "false");
      });
  });
});