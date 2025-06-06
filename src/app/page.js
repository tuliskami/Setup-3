import Image from "next/image";
import Footer from "./components/footer"
import Hero from "./components/hero";
import Pricing from "./components/pricing"

export default function Home() {
  return (
    <div>
      <Hero />
      <Pricing />
      <Footer />
    </div>
  );
}
