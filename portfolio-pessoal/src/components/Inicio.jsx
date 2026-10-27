
export default function Inicio() {
  return (
    <section id="inicio" className="inicio">
      <div className="inicio-conteudo">
        <span className="subtitulo">OLÁ, SEJA BEM-VINDO(A)!</span>

        <h1>
          Eu sou <span>Gabriele Lima.</span>
        </h1>

        <h2>Estudante de Informática | Desenvolvedora em formação</h2>

        <p>
          Sou estudante do Instituto Federal de Mato Grosso do Sul
          (IFMS), com interesse em programação, tecnologia e
          desenvolvimento de aplicações web.
        </p>

        <p>
          Neste portfólio apresento minha trajetória acadêmica,
          minhas habilidades e os projetos que desenvolvi
          durante minha formação.
        </p>

        <div className="inicio-botoes">
          <a href="#projetos" className="btn btn-primario">
            Ver projetos
          </a>
          <a href="#contato" className="btn btn-secundario">
            Entrar em contato
          </a>
        </div>
      </div>

      <div className="inicio-decoracao" aria-hidden="true">
        <div className="circulo">{"</>"}</div>
      </div>
    </section>
  );
}
