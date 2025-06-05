"use client";

import { useState, useEffect } from "react";

interface Noticia {
  id: number;
  titulo: string;
  resumen: string;
  fecha: string;
  categoria: string;
  contenido: string;
  destacada: boolean;
}

export default function Noticias() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [noticiaSeleccionada, setNoticiaSeleccionada] =
    useState<Noticia | null>(null);
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>("todas");

  useEffect(() => {
    // Cargar noticias desde el archivo JSON
    const cargarNoticias = async () => {
      try {
        const response = await fetch("/noticias.json");
        const data = await response.json();
        setNoticias(data.noticias);
      } catch (error) {
        console.error("Error cargando noticias:", error);
        // Datos de fallback en caso de error
        setNoticias([
          {
            id: 1,
            titulo: "Nuevos criterios de valoración inmobiliaria en 2024",
            resumen:
              "El Colegio de Arquitectos Técnicos actualiza los criterios de valoración para adaptarse a las nuevas tendencias del mercado inmobiliario.",
            fecha: "2024-01-15",
            categoria: "Normativa",
            contenido:
              "Las nuevas directrices incluyen criterios de sostenibilidad energética, accesibilidad universal y nuevas tecnologías constructivas que impactan directamente en el valor de los inmuebles.",
            destacada: true,
          },
          {
            id: 2,
            titulo:
              "El mercado inmobiliario en Madrid muestra signos de estabilización",
            resumen:
              "Los precios de la vivienda en la Comunidad de Madrid comienzan a estabilizarse tras varios años de crecimiento sostenido.",
            fecha: "2024-01-10",
            categoria: "Mercado",
            contenido:
              "Según los últimos datos del mercado, el precio medio por metro cuadrado se mantiene estable, lo que favorece la precisión en las tasaciones inmobiliarias.",
            destacada: false,
          },
          {
            id: 3,
            titulo: "Digitalización en el proceso de tasación: herramientas 3D",
            resumen:
              "La incorporación de tecnología 3D y realidad virtual revoluciona el proceso tradicional de tasación inmobiliaria.",
            fecha: "2024-01-05",
            categoria: "Tecnología",
            contenido:
              "Las nuevas herramientas permiten realizar valoraciones más precisas y ofrecer un servicio más completo a los clientes, incluyendo visitas virtuales y mediciones exactas.",
            destacada: true,
          },
        ]);
      }
    };

    cargarNoticias();
  }, []);

  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const categorias = [
    "todas",
    ...Array.from(new Set(noticias.map((n) => n.categoria))),
  ];

  const noticiasFiltradas =
    categoriaFiltro === "todas"
      ? noticias
      : noticias.filter((n) => n.categoria === categoriaFiltro);

  const noticiasDestacadas = noticiasFiltradas.filter((n) => n.destacada);
  const noticiasRegulares = noticiasFiltradas.filter((n) => !n.destacada);

  const getCategoriaColor = (categoria: string) => {
    const colores = {
      Normativa: "bg-blue-100 text-blue-800",
      Mercado: "bg-green-100 text-green-800",
      Tecnología: "bg-purple-100 text-purple-800",
      Sostenibilidad: "bg-emerald-100 text-emerald-800",
      Formación: "bg-orange-100 text-orange-800",
      Análisis: "bg-red-100 text-red-800",
    };
    return (
      colores[categoria as keyof typeof colores] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <section id="noticias" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Noticias del Sector
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Mantente informado sobre las últimas novedades en tasación
            inmobiliaria, normativas, tecnologías y tendencias del mercado.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaFiltro(categoria)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                categoriaFiltro === categoria
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </button>
          ))}
        </div>

        {/* Noticias Destacadas */}
        {noticiasDestacadas.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Noticias Destacadas
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {noticiasDestacadas.map((noticia, index) => (
                <article
                  key={noticia.id}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-l-4 border-blue-600"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoriaColor(
                        noticia.categoria
                      )}`}
                    >
                      {noticia.categoria}
                    </span>
                    <time className="text-sm text-gray-500">
                      {formatearFecha(noticia.fecha)}
                    </time>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {noticia.titulo}
                  </h4>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {noticia.resumen}
                  </p>

                  <button
                    onClick={() => setNoticiaSeleccionada(noticia)}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                  >
                    Leer más
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Noticias Regulares */}
        {noticiasRegulares.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Últimas Noticias
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {noticiasRegulares.map((noticia, index) => (
                <article
                  key={noticia.id}
                  className="bg-white p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoriaColor(
                        noticia.categoria
                      )}`}
                    >
                      {noticia.categoria}
                    </span>
                    <time className="text-sm text-gray-500">
                      {formatearFecha(noticia.fecha)}
                    </time>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {noticia.titulo}
                  </h4>

                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {noticia.resumen}
                  </p>

                  <button
                    onClick={() => setNoticiaSeleccionada(noticia)}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                  >
                    Leer más
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Modal de Noticia */}
        {noticiaSeleccionada && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoriaColor(
                      noticiaSeleccionada.categoria
                    )}`}
                  >
                    {noticiaSeleccionada.categoria}
                  </span>
                  <button
                    onClick={() => setNoticiaSeleccionada(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {noticiaSeleccionada.titulo}
                </h3>

                <time className="text-sm text-gray-500 mb-4 block">
                  {formatearFecha(noticiaSeleccionada.fecha)}
                </time>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {noticiaSeleccionada.resumen}
                </p>

                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {noticiaSeleccionada.contenido}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
