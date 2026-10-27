import { useState } from "react";

export default function Header() {
  const [aberto, setAberto] = useState(false);

  const links = [
    ["Início", "inicio"],
    ["Sobre", "sobre"],
    ["Atividades", "atividades"],
    ["Projetos", "projetos"],
    ["Eventos", "eventos"],
    ["Sites", "sites"],
    ["Habilidades", "habilidades"],
    ["Contato", "contato"],
  ];

  return (
    <header className="header">
      <a href="#inicio" className="logo">
        Gabi<span>Lima.</span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setAberto(!aberto)}
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={aberto}
      >
        {aberto ? "✕" : "☰"}
      </button>

      <nav className={aberto ? "nav ativo" : "nav"}>
        {links.map(([nome, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setAberto(false)}
          >
            {nome}
          </a>
        ))}
      </nav>
    </header>
  );
}
