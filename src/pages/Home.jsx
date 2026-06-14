import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import TournamentSpotlight from "../components/home/TournamentSpotlight";
import Testimonials from "../components/home/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <TournamentSpotlight />
      <HowItWorks />
      <Testimonials />
    </>
  );
}

export default Home;
