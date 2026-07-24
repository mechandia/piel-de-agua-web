import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Opportunity from "@/components/sections/Opportunity";
import Collections from "@/components/sections/Collections";
import Technology from "@/components/sections/Technology";
import Attributes from "@/components/sections/Attributes";
import SportsGrid from "@/components/sections/SportsGrid";
import Conservation from "@/components/sections/Conservation";
import Testimonials from "@/components/sections/Testimonials";
import Catalog from "@/components/sections/Catalog";
import SizeChart from "@/components/sections/SizeChart";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Opportunity />
      <Collections />
      <Technology />
      <Attributes />
      <SportsGrid />
      <Conservation />
      <Testimonials />
      <Catalog />
      <SizeChart />
      <Contact />
    </main>
  );
}
