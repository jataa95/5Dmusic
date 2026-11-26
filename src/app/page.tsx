import About from "@/components/About";
import BestOf from "@/components/BestOf";
import Dimensions from "@/components/Dimensions";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import Sessions from "@/components/Sessions";
import Studio from "@/components/Studio";
import Voices from "@/components/Voices";
import { VideoProvider } from "@/components/VideoModal";

export default function Home() {
  return (
    <VideoProvider>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <About />
        <Studio />
        <Sessions />
        <BestOf />
        <Dimensions />
        <Cta />
        <Voices />
      </main>
      <Footer />
    </VideoProvider>
  );
}
