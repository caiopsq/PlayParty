import "./NossosClientes.css";

type Cliente = {
  nome: string;
  logo: string;
};

const clientes: Cliente[] = [
  {
    nome: "Qualifoco",
    logo: "/img/clientes/logoqualifoco.png"
  },
  {
    nome: "FGV",
    logo: "/img/clientes/fgv_logo.svg"
  },
  {
    nome: "FNDS",
    logo: "/img/clientes/fnds-logo.png"
  },
  {
    nome: "World Gym",
    logo: "/img/clientes/worldgym.png"
  },
  {
    nome: "VIAÇÃO PIRACICABANA",
    logo: "/img/clientes/Logo-piracicabana-df.png",
  },
  {
    nome: "AGEPOL",
    logo: "/img/clientes/agepol_logo.png"
  },
  {
    nome: "ASSEFAZ",
    logo: "/img/clientes/assefaz_logo.svg"
  },
  {
    nome: "Condomínio Lake Side",
    logo: "/img/clientes/Lake_side_logo.png",
  },
  {
    nome: "Rede D'or",
    logo: "/img/clientes/RedeDor_logo.svg",
  },
  {
    nome: "Agro Brasília",
    logo: "/img/clientes/logo_AgroBrasilia.png",
  },
  {
    nome: "Capital Moto Week",
    logo: "/img/clientes/cmw_logo.avif",
  },
  {
    nome: "Senac",
    logo: "/img/clientes/logo_senac.svg",
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
