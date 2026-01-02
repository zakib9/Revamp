import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import Programs from "./components/sections/Programs";
import Trainers from "./components/sections/Trainers";
import About from "./components/sections/About";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Trainers />
      <Pricing />
      <Contact />
    </>
  );
}
