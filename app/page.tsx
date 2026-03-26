import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SplitFlapBoard from "./components/SplitFlapBoard";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SplitFlapBoard />
      </main>
    </>
  );
}
