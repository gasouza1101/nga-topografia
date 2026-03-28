const services = [
  "Levantamento Topográfico",
  "Georreferenciamento",
  "Regularização de Terrenos",
  "Projetos Técnicos",
];

export default function Services() {
  return (
    <section id="servicos" className="bg-gray-100 py-20">
      <h2 className="text-2xl text-center font-bold mb-10">
        Serviços
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-6 shadow rounded">
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}