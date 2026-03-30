/**
 * Componente About
 * Seção sobre a empresa NGA Topografia
 */
import { COMPANY_HIGHLIGHTS, COMPANY_VALUES } from "@/constants/company";

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 bg-gray-50"
      aria-labelledby="sobre-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id="sobre-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Quem Somos
          </h2>
          <p className="text-gray-600 text-lg">Conheça a NGA Topografia</p>
        </div>

        {/* Highlights */}
        <div className="space-y-8 mb-12">
          {COMPANY_HIGHLIGHTS.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Valores */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY_VALUES.map((value) => (
              <div key={value.id} className="text-center">
                <h4 className="text-lg font-semibold text-green-600 mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}