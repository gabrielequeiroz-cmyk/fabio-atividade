
const projetos = [
  {
    numero: "01",
    titulo: "Portfólio NFT",
    descricao:
      "Aplicação web desenvolvida com React e Vite, utilizando componentes reutilizáveis, cards NFT, animações e layout responsivo.",
    participacao:
      "Participação no desenvolvimento dos componentes, estilização e organização do projeto em equipe.",
    tecnologias: ["React", "Vite", "CSS", "Git"],
  },
  {
    numero: "02",
    titulo: "Auxílio ONG",
    descricao:
      "Projeto web voltado à organização de campanhas e cadastro de usuários, com interface para doadores e voluntários.",
    participacao:
      "Desenvolvimento de componentes da interface utilizando HTML e JavaScript.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    numero: "03",
    titulo: "Calculadora de IP",
    descricao:
      "Aplicação que analisa endereços IPv4 e apresenta classe, máscara, rede, broadcast e intervalo de hosts.",
    participacao:
      "Desenvolvimento da interface e funcionalidades de cálculo.",
    tecnologias: ["React Native", "JavaScript"],
  },
  {
    numero: "04",
    titulo: "Agenda de Atendimento",
    descricao:
      "Projeto de aplicação web para organização de atendimentos e gerenciamento de informações.",
    participacao:
      "Participação no desenvolvimento e configuração do frontend.",
    tecnologias: ["Next.js", "React", "JavaScript"],
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="secao fundo-alternativo">
      <div className="secao-titulo">
        <span className="subtitulo">MEUS TRABALHOS</span>
        <h2>Projetos <span>desenvolvidos</span></h2>
        <p>Aplicações desenvolvidas durante minha formação.</p>
      </div>

      <div className="cards-grid">
        {projetos.map((projeto) => (
          <article className="card" key={projeto.numero}>
            <span className="projeto-numero">{projeto.numero}</span>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>

            <h4>Minha participação</h4>
            <p>{projeto.participacao}</p>

            <div className="tags">
              {projeto.tecnologias.map((tecnologia) => (
                <span key={tecnologia}>{tecnologia}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
