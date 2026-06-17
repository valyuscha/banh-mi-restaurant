import "@/App.css";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import OfferSection from "@/components/OfferSection";
import OrderOnline from "@/components/OrderOnline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LinkedInWatermark from "@/components/LinkedInWatermark";

function App() {
  return (
    <LanguageProvider>
      <div className="App bg-[#F9F3EA] min-h-screen antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <MenuSection />
          <Gallery />
          <OfferSection />
          <OrderOnline />
          <Contact />
        </main>
        <Footer />
        <LinkedInWatermark />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#112618",
              color: "#F9F3EA",
              border: "1px solid rgba(253,251,247,0.15)",
            },
          }}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
