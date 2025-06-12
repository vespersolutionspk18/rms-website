
import Header from "./homecomponents/Header";
import Hero from "./homecomponents/Hero";
import Heroseparator from "./homecomponents/Heroseparator";
import LogoMarquee from "./homecomponents/LogoMarquee";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Heroseparator />
      <LogoMarquee />
    </div>
  );
}
