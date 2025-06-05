import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trabajos from "@/components/Trabajos";
import ComoTrabajo from "@/components/ComoTrabajo";
import Noticias from "@/components/Noticias";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Trabajos />
      <ComoTrabajo />
      <Noticias />
      <Contacto />
      <Footer />
    </main>
  );
}
