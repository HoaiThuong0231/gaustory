import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedVideos } from "@/components/FeaturedVideos";
import { BestPicks } from "@/components/BestPicks";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedVideos />
        <BestPicks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
