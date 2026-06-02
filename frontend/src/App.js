import "@/App.css";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import OfferSection from "@/components/OfferSection";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="App bg-[#FDFBF7] min-h-screen antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <MenuSection />
          <Gallery />
          <OfferSection />
          <Reservation />
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#234B33",
              color: "#FDFBF7",
              border: "1px solid rgba(253,251,247,0.15)",
            },
          }}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
