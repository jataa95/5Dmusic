import About from "@/components/About";
import Arc from "@/components/Arc";
import BestOf from "@/components/BestOf";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sessions from "@/components/Sessions";
import Studio from "@/components/Studio";
import Voices from "@/components/Voices";
import { VideoProvider } from "@/components/VideoModal";

export default function Home() {
  return (
    <VideoProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Studio />
        <Sessions />
        <BestOf />
        <Arc />
        <Cta />
        <Voices />
      </main>
      <Footer />
    </VideoProvider>
  );
}
