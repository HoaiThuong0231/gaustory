import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { FeaturedVideos } from "@/components/FeaturedVideos";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedCategories />
        <FeaturedVideos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
