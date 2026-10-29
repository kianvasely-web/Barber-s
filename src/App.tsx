import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import About from "./components/About";
import Reviews from "./components/Reviews";
import CallToAction from "./components/CallToAction";
import Location from "./components/Location";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import StructuredData from "./components/StructuredData";

export default function App() {
  return (
    <>
      <a
        href="#servicios"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Reviews />
        <CallToAction />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <StructuredData />
    </>
  );
}
