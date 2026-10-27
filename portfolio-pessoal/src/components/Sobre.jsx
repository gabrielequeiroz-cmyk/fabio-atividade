export default function Sobre() {
  return (
    <section id="sobre" className="secao fundo-alternativo">
      <div className="secao-titulo">
        <span className="subtitulo">MINHA TRAJETÓRIA</span>
        <h2>Sobre <span>mim</span></h2>
        <p>Um pouco sobre minha formação e meus objetivos.</p>
      </div>

      <div className="sobre-container">
        <div className="sobre-texto">
          <h3>Olá! Eu sou Gabriele Lima.</h3>

          <p>
            Sou estudante do curso Técnico em Informática
            do Instituto Federal de Mato Grosso do Sul (IFMS).
          </p>

          <p>
            Durante minha formação, venho desenvolvendo
            conhecimentos em programação, desenvolvimento web,
            redes de computadores e manutenção de equipamentos.
          </p>

          <p>
            Tenho interesse em criar soluções digitais,
            aprender novas tecnologias e aprimorar minhas
            habilidades para o mercado de trabalho.
          </p>
        </div>

        <div className="sobre-informacoes">
          <div className="info-card">
            <span>🎓</span>
            <div>
              <h4>Formação</h4>
              <p>Técnico em Informática</p>
            </div>
          </div>

          <div className="info-card">
            <span>🏫</span>
            <div>
              <h4>Instituição</h4>
              <p>Instituto Federal de Mato Grosso do Sul</p>
            </div>
          </div>

          <div className="info-card">
            <span>💻</span>
            <div>
              <h4>Área de interesse</h4>
              <p>Desenvolvimento de Software</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
