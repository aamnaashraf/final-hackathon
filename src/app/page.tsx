import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HeroFive from "@/components/HeroFive";
import Herofour from "@/components/Herofour";
import Herosix from "@/components/Herosix";
import Herothree from "@/components/Herothree";
import Herotwo from "@/components/Herotwo";


export default function Home() {
  return (
    <div>
      <Hero />
      <Herotwo />
      <Herothree />
      <Herofour />
      <HeroFive />
      <Herosix />
      <Faq />
    </div>
  );
}
