import Door from "./components/Door";
import Hero from "./components/Hero";
import Story from "./components/Story";
import ScratchSection from "./components/ScratchSection";
import RSVP from "./components/RSVP";
import FAQ from "./components/FAQ";
import Closing from "./components/Closing";

export default function App() {
  return (
    <>
      <Door />
      <main className="relative">
        <Hero />
        <Story />
        <ScratchSection />
        <RSVP />
        <FAQ />
        <Closing />
      </main>
    </>
  );
}
