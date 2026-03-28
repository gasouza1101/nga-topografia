/**
 * Componente About
 * Seção sobre a empresa
 */
export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 bg-gray-50"
      aria-labelledby="sobre-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2
          id="sobre-heading"
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
        >
          Quem Somos
        </h2>

        <div className="space-y-4">
          <p className="text-gray-600 text-lg leading-relaxed">
            A NGA Topografia atua com excelência e precisão no mercado há mais de uma década,
            oferecendo serviços especializados em levantamento topográfico, georreferenciamento
            e regularização de terrenos.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Nosso compromisso é entregar soluções técnicas de alta qualidade, cumprindo prazos
            e superando as expectativas de nossos clientes. Contamos com equipe experiente e
            equipamentos de última geração para garantir precisão em todos os nossos projetos.
          </p>

          {/* Valores */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Precisão</h3>
              <p className="text-sm text-gray-600">
                Medições exatas com equipamentos de ponta
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Confiabilidade</h3>
              <p className="text-sm text-gray-600">
                Resultados certificados e reconhecidos
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Eficiência</h3>
              <p className="text-sm text-gray-600">
                Prazos respeitados e atendimento personalizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}