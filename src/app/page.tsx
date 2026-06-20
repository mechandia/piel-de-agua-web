import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Opportunity from "@/components/sections/Opportunity";
import Collections from "@/components/sections/Collections";
import Technology from "@/components/sections/Technology";
import SportsGrid from "@/components/sections/SportsGrid";
import Conservation from "@/components/sections/Conservation";
import Club from "@/components/sections/Club";
import Testimonials from "@/components/sections/Testimonials";
import Catalog from "@/components/sections/Catalog";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Opportunity />
      <Collections />
      <Technology />
      <SportsGrid />
      <Conservation />
      <Club />
      <Testimonials />
      <Catalog />
      <Contact />
    </main>
  );
}
