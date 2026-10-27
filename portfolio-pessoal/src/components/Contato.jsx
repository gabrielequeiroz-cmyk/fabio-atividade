
export default function Contato() {
  const email = "";
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
          {email ? (
            <a href={`mailto:${email}`}>{email}</a>
          ) : (
            <p>Adicionar e-mail</p>
          )}
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
