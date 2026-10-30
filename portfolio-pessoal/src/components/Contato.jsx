
export default function Contato() {
  const email = "gabriele.queiroz@estudante.ifms.edu.br";
  const github = "https://github.com/gabrielequeiroz-cmyk";

  return (
    <section id="contato" className="secao fundo-alternativo">
      <div className="secao-titulo">
        <span className="subtitulo">VAMOS NOS CONECTAR</span>
        <h2>Entre em <span>contato</span></h2>
        <p>Conheça meus trabalhos e entre em contato.</p>
      </div>

      <div className="contato-container">
        <div className="contato-card">
          <span>✉️</span>
          <h3>E-mail</h3>
            <a
             href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent("Contato pelo Portfólio")}`}
             target="_blank"
             rel="noopener noreferrer"
             >
              Acessar meu E-mail
            </a>
        </div>

        <div className="contato-card">
          <span>💻</span>
          <h3>GitHub</h3>
          <a href={github} target="_blank" rel="noreferrer">
            Acessar meu GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
