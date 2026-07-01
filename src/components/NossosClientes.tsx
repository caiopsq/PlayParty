import "./NossosClientes.css";

type Cliente = {
  nome: string;
  logo: string;
};

const clientes: Cliente[] = [
  { nome: "Qualifoco", logo: "https://www.qualifoco.com/wp-content/uploads/2025/02/logoqualifoco.png" },
  { nome: "FGV", logo: "https://portal.fgv.br/sites/default/themes/custom/portal/logo.svg" },
  { nome: "FNDS", logo: "https://www.fnds.gov.mz/images/fnds-%20logo.png" },
  { nome: "World Gym", logo: "https://worldgymacademia.com.br/wp-content/webp-express/webp-images/uploads/2025/12/Vermelha.png.webp" },
  {
    nome: "VIAÇÃO PIRACICABANA",
    logo: "https://www.piracicabanadf.com.br/wp-content/uploads/2023/12/Logo-piracicabana-df.png",
  },
  { nome: "AGEPOL", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwSWHegK9PPim31pFAR7o3C3TrL-F7MmBLHf3UzOLubA&s" },
  { nome: "ASSEFAZ", logo: "https://cdn.sanity.io/images/2gm6q1qy/production/abfb0940fb0283aef4eec58d22a732ca35fbdd30-168x168.svg" },
  {
    nome: "Condomínio Lake Side",
    logo: "https://lakeside.com.br/wp-content/uploads/Lake-side-Azul.png",
  },
];

export default function NossosClientes() {
  return (
    <section className="nossos-clientes" aria-labelledby="nossos-clientes-titulo">
      <div className="nossos-clientes__container">
        <h2 id="nossos-clientes-titulo" className="nossos-clientes__titulo">
          Nossos clientes
        </h2>

        <div className="nossos-clientes__grid">
          {clientes.map((cliente) => (
            <div key={cliente.nome} className="nossos-clientes__item">
              <img
                src={cliente.logo}
                alt={cliente.nome}
                className="nossos-clientes__logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
