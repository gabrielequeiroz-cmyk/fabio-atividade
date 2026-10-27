
const sites = [
  {
    titulo: "Portfólio NFT",
    descricao:
      "Site responsivo com cards NFT, efeitos de hover e animações.",
    imagem: "nft.png",
    tecnologias: ["React", "CSS", "Vite"],
    github: "https://github.com/gabrielequeiroz-cmyk/portfolio",
    link: "",
  },
  {
    titulo: "Auxílio ONG",
    descricao:
      "Interface web para campanhas e cadastro de usuários.",
    imagem: "ong.png",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    github: "",
    link: "",
  },
  {
    titulo: "Portfólio Pessoal",
    descricao:
      "Site para apresentar minha trajetória acadêmica e projetos.",
    imagem: "portfolio.png",
    tecnologias: ["React", "JavaScript", "CSS"],
    github: "",
    link: "",
  },
];

export default function Sites() {
  return (
    <section id="sites" className="secao fundo-alternativo">
      <div className="secao-titulo">
        <span className="subtitulo">DESENVOLVIMENTO WEB</span>
        <h2>Sites <span>desenvolvidos</span></h2>
        <p>Conheça alguns dos meus trabalhos.</p>
      </div>

      <div className="sites-grid">
        {sites.map((site) => (
          <article className="site-card" key={site.titulo}>
            <div className="site-imagem">
              <span className="site-placeholder">
                💻 {site.titulo}
              </span>

              <img
                src={`${import.meta.env.BASE_URL}projetos/${site.imagem}`}
                alt={`Captura de tela de ${site.titulo}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="site-conteudo">
              <h3>{site.titulo}</h3>
              <p>{site.descricao}</p>

              <div className="tags">
                {site.tecnologias.map((tecnologia) => (
                  <span key={tecnologia}>{tecnologia}</span>
                ))}
              </div>

              <div className="site-links">
                {site.github && (
                  <a href={site.github} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                )}

                {site.link && (
                  <a href={site.link} target="_blank" rel="noreferrer">
                    Ver site ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
