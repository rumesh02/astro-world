import TournamentHero from "../components/tournaments/TournamentHero";
import TournamentFormats from "../components/tournaments/TournamentFormats";
import ArenaGallery from "../components/tournaments/ArenaGallery";
import UpcomingFixtures from "../components/tournaments/UpcomingFixtures";
import HowToEnter from "../components/tournaments/HowToEnter";
import TournamentCTA from "../components/tournaments/TournamentCTA";

function Tournaments() {
  return (
    <>
      <TournamentHero />
      <TournamentFormats />
      <ArenaGallery />
      <UpcomingFixtures />
      <HowToEnter />
      <TournamentCTA />
    </>
  );
}

export default Tournaments;
