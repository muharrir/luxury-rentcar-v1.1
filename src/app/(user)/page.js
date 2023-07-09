import Hero from "@/components/organisms/Hero";
import PopularCars from "@/components/organisms/PopularCars";
import Benefit from "@/components/organisms/Benefit";
import Faq from "@/components/organisms/Faq";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularCars />
      <Benefit />
      <Faq />
      <Footer />
    </>
  );
}
