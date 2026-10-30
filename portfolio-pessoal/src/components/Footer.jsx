
export default function Footer() {
  return (
    <footer className="footer">
      <a href="#inicio" className="logo">
        Gabi<span>Lima</span>
      </a>

      <p>
        © {new Date().getFullYear()} Gabriele Lima.
        Desenvolvido com React, JavaScript e CSS.
      </p>

      <a href="#inicio" className="voltar-topo">
        Voltar ao topo ↑
      </a>
    </footer>
  );
}
