const atividades = [
  {
    icone: "🏫",
    titulo: "Estágio Supervisionado",
    categoria: "Experiência acadêmica",
    descricao:
      "Atividades de suporte tecnológico em ambiente escolar, organização de dados, criação de planilhas e auxílio na utilização de plataformas digitais.",
    tecnologias: ["Suporte Técnico", "Google Drive", "Planilhas"],
  },
  {
    icone: "🌐",
    titulo: "Desenvolvimento Web",
    categoria: "Atividades práticas",
    descricao:
      "Desenvolvimento de páginas e aplicações web utilizando HTML, CSS, JavaScript e React.",
    tecnologias: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    icone: "📱",
    titulo: "Desenvolvimento Mobile",
    categoria: "Atividades práticas",
    descricao:
      "Criação de aplicações para dispositivos móveis, trabalhando com componentes, formulários e cálculos.",
    tecnologias: ["React Native", "JavaScript"],
  },
  {
    icone: "🔧",
    titulo: "Redes de Computadores",
    categoria: "Conhecimentos técnicos",
    descricao:
      "Atividades envolvendo endereçamento IP, diagnóstico de conectividade e manutenção de computadores.",
    tecnologias: ["Redes", "Windows", "Manutenção"],
  },
];

export default function Atividades() {
  return (
    <section id="atividades" className="secao">
      <div className="secao-titulo">
        <span className="subtitulo">FORMAÇÃO NA PRÁTICA</span>
        <h2>Atividades <span>acadêmicas</span></h2>
        <p>Experiências adquiridas durante minha formação.</p>
      </div>

      <div className="cards-grid">
        {atividades.map((atividade) => (
          <article className="card" key={atividade.titulo}>
            <div className="card-icone">{atividade.icone}</div>
            <span className="card-categoria">{atividade.categoria}</span>
            <h3>{atividade.titulo}</h3>
            <p>{atividade.descricao}</p>

            <div className="tags">
              {atividade.tecnologias.map((tecnologia) => (
                <span key={tecnologia}>{tecnologia}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

