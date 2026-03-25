import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Confidence, Methodology } from "@/components/Methodology";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Confidence />
      <Methodology />
      <Contact />
      <Footer />
    </main>
  );
}
