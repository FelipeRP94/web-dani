"use client";

export default function ComoTrabajo() {
  const principios = [
    {
      icono: "✅",
      titulo: "Profesionalidad",
      descripcion:
        "Arquitecto técnico colegiado con formación continua y metodología actualizada según normativas vigentes.",
      detalles: [
        "Colegiado oficial en el Colegio de Arquitectos Técnicos",
        "Formación especializada en valoraciones inmobiliarias",
        "Seguimiento de normativas UNE y ECO 805/2003",
      ],
    },
    {
      icono: "🎯",
      titulo: "Veracidad",
      descripcion:
        "Informes objetivos basados en datos reales del mercado y características técnicas verificables.",
      detalles: [
        "Análisis comparativo exhaustivo del mercado",
        "Inspección presencial de todos los inmuebles",
        "Documentación fotográfica detallada",
      ],
    },
    {
      icono: "📊",
      titulo: "Rigor Técnico",
      descripcion:
        "Aplicación de metodologías contrastadas y uso de herramientas profesionales de valoración.",
      detalles: [
        "Método de comparación de mercado",
        "Análisis de costes de reposición",
        "Evaluación de ingresos y rentabilidad",
      ],
    },
    {
      icono: "⏱️",
      titulo: "Rapidez",
      descripcion:
        "Entrega de informes en plazos establecidos sin comprometer la calidad del trabajo realizado.",
      detalles: [
        "Informes entregados en 48-72 horas",
        "Disponibilidad para consultas urgentes",
        "Comunicación constante durante el proceso",
      ],
    },
  ];

  const proceso = [
    {
      numero: "01",
      titulo: "Contacto Inicial",
      descripcion:
        "Recepción de solicitud y análisis de documentación preliminar del inmueble.",
    },
    {
      numero: "02",
      titulo: "Inspección in situ",
      descripcion:
        "Visita técnica detallada para evaluar estado, características y entorno del inmueble.",
    },
    {
      numero: "03",
      titulo: "Análisis de Mercado",
      descripcion:
        "Estudio comparativo de transacciones similares y tendencias del sector.",
    },
    {
      numero: "04",
      titulo: "Cálculo de Valoración",
      descripcion:
        "Aplicación de metodologías técnicas para determinar el valor de mercado.",
    },
    {
      numero: "05",
      titulo: "Informe Final",
      descripcion:
        "Elaboración de documento técnico completo con conclusiones y justificación.",
    },
  ];

  return (
    <section id="metodologia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Cómo Trabajo
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Mi metodología se basa en principios fundamentales de
            profesionalidad, transparencia y rigor técnico para garantizar
            valoraciones precisas y confiables.
          </p>
        </div>

        {/* Principios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {principios.map((principio, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{principio.icono}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {principio.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {principio.descripcion}
                  </p>
                  <ul className="space-y-2">
                    {principio.detalles.map((detalle, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {detalle}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proceso de Trabajo */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 lg:p-12 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Proceso de Valoración
            </h3>
            <p className="text-lg text-gray-600">
              Metodología paso a paso para garantizar la máxima precisión
            </p>
          </div>

          <div className="space-y-8">
            {proceso.map((paso, index) => (
              <div
                key={index}
                className="flex items-center space-x-6 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {paso.numero}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {paso.titulo}
                  </h4>
                  <p className="text-gray-600">{paso.descripcion}</p>
                </div>
                {index < proceso.length - 1 && (
                  <div className="hidden lg:block w-12 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Certificaciones y Avales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-card">
              <div className="text-4xl mb-4">🏛️</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Colegio Oficial
              </h4>
              <p className="text-gray-600 text-sm">
                Colegiado en el Colegio de Arquitectos Técnicos
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-card">
              <div className="text-4xl mb-4">📜</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Certificación UNE
              </h4>
              <p className="text-gray-600 text-sm">
                Metodología según normativa UNE 157001
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-card">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Seguro Profesional
              </h4>
              <p className="text-gray-600 text-sm">
                Cobertura completa de responsabilidad civil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
