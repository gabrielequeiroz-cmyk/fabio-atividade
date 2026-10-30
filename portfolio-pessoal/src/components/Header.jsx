
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [aberto, setAberto] = useState(false);

  const links = [
    { nome: "Início", caminho: "/" },
    { nome: "Sobre", caminho: "/sobre" },
    { nome: "Atividades", caminho: "/atividades" },
    { nome: "Projetos", caminho: "/projetos" },
    { nome: "Eventos", caminho: "/eventos" },
    { nome: "Sites", caminho: "/sites" },
    { nome: "Habilidades", caminho: "/habilidades" },
    { nome: "Contato", caminho: "/contato" },
  ];

  return (
    <header className="header">
      <NavLink to="/" className="logo">
        Gabi<span>Lima</span>
      </NavLink>

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
        {links.map((link) => (
          <NavLink
            key={link.caminho}
            to={link.caminho}
            end={link.caminho === "/"}
            onClick={() => setAberto(false)}
            className={({ isActive }) => isActive ? "link-ativo" : ""}
          >
            {link.nome}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
