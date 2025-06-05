"use client";

export default function Trabajos() {
  const trabajos = [
    {
      id: 1,
      titulo: "Tasación de Vivienda Unifamiliar",
      descripcion:
        "Valoración completa de vivienda unifamiliar de 180m² en zona residencial premium.",
      tipo: "Vivienda",
      superficie: "180m²",
      valor: "350.000€",
      icon: "🏠",
    },
    {
      id: 2,
      titulo: "Tasación de Local Comercial",
      descripcion:
        "Evaluación de local comercial en primera línea con alto potencial de rentabilidad.",
      tipo: "Comercial",
      superficie: "120m²",
      valor: "280.000€",
      icon: "🏪",
    },
    {
      id: 3,
      titulo: "Tasación de Edificio Completo",
      descripcion:
        "Valoración integral de edificio residencial de 8 plantas con 24 viviendas.",
      tipo: "Edificio",
      superficie: "1.200m²",
      valor: "2.1M€",
      icon: "🏢",
    },
    {
      id: 4,
      titulo: "Tasación Industrial",
      descripcion:
        "Evaluación de nave industrial con instalaciones especializadas y maquinaria.",
      tipo: "Industrial",
      superficie: "800m²",
      valor: "450.000€",
      icon: "🏭",
    },
    {
      id: 5,
      titulo: "Tasación Terreno Urbano",
      descripcion:
        "Valoración de solar urbano con alta edificabilidad en zona de expansión.",
      tipo: "Terreno",
      superficie: "500m²",
      valor: "180.000€",
      icon: "🌍",
    },
    {
      id: 6,
      titulo: "Tasación Patrimonio Histórico",
      descripcion:
        "Evaluación especializada de inmueble histórico con valor patrimonial.",
      tipo: "Histórico",
      superficie: "250m²",
      valor: "420.000€",
      icon: "🏛️",
    },
  ];

  const servicios = [
    {
      icono: "📋",
      titulo: "Tasaciones Hipotecarias",
      descripcion:
        "Valoraciones para entidades financieras con certificación oficial",
    },
    {
      icono: "🏢",
      titulo: "Tasaciones Judiciales",
      descripcion: "Peritajes para procesos judiciales y herencias",
    },
    {
      icono: "📊",
      titulo: "Estudios de Mercado",
      descripcion: "Análisis comparativo de precios y tendencias del mercado",
    },
    {
      icono: "🔍",
      titulo: "Inspecciones Técnicas",
      descripcion: "Evaluación del estado constructivo y patologías",
    },
  ];

  const getBackgroundColor = (tipo: string) => {
    const colors = {
      Vivienda: "from-green-100 to-green-200",
      Comercial: "from-blue-100 to-blue-200",
      Edificio: "from-purple-100 to-purple-200",
      Industrial: "from-orange-100 to-orange-200",
      Terreno: "from-yellow-100 to-yellow-200",
      Histórico: "from-red-100 to-red-200",
    };
    return colors[tipo as keyof typeof colors] || "from-gray-100 to-gray-200";
  };

  return (
    <section id="trabajos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Mis Trabajos y Servicios
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Portfolio de tasaciones realizadas con metodología profesional y
            rigor técnico. Cada valoración se fundamenta en análisis exhaustivos
            del mercado y características específicas del inmueble.
          </p>
        </div>

        {/* Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{servicio.icono}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {servicio.titulo}
              </h3>
              <p className="text-gray-600">{servicio.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trabajos.map((trabajo, index) => (
            <div
              key={trabajo.id}
              className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                {/* Professional placeholder with icon */}
                <div
                  className={`w-full h-full bg-gradient-to-br ${getBackgroundColor(
                    trabajo.tipo
                  )} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-2">{trabajo.icon}</div>
                    <span className="text-sm font-medium text-gray-600">
                      {trabajo.tipo}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {trabajo.tipo}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {trabajo.titulo}
                </h3>
                <p className="text-gray-600 mb-4">{trabajo.descripcion}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Superficie:</span>
                    <div className="font-semibold text-gray-900">
                      {trabajo.superficie}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Valoración:</span>
                    <div className="font-semibold text-blue-600">
                      {trabajo.valor}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-xl shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              ¿Necesitas una tasación profesional?
            </h3>
            <p className="text-gray-600 mb-6">
              Contacta conmigo para obtener una valoración precisa y
              fundamentada de tu inmueble.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Solicitar Presupuesto
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
