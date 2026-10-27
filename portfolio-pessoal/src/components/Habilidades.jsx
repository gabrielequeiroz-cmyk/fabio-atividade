
const habilidades = [
  {
    icone: "🌐",
    titulo: "Frontend",
    itens: ["HTML5", "CSS3", "JavaScript", "React", "Vite"],
  },
  {
    icone: "📱",
    titulo: "Desenvolvimento Mobile",
    itens: ["React Native", "JavaScript", "Componentes"],
  },
  {
    icone: "🛠️",
    titulo: "Ferramentas",
    itens: ["Git", "GitHub", "VS Code", "npm"],
  },
  {
    icone: "💻",
    titulo: "Outros conhecimentos",
    itens: ["Redes", "Windows", "Suporte Técnico"],
  },
];

export default function Habilidades() {
  return (
    <section id="habilidades" className="secao">
      <div className="secao-titulo">
        <span className="subtitulo">CONHECIMENTOS</span>
        <h2>Minhas <span>habilidades</span></h2>
        <p>Tecnologias e ferramentas que utilizo.</p>
      </div>

      <div className="cards-grid">
        {habilidades.map((habilidade) => (
          <article className="card" key={habilidade.titulo}>
            <div className="card-icone">{habilidade.icone}</div>
            <h3>{habilidade.titulo}</h3>

            <div className="tags">
              {habilidade.itens.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
