import FaqSection from "./components/Layouts/FaqSection";
import FooterSection from "./components/Layouts/FooterSection";
import HeroSection from "./components/Layouts/HeroSection";
import ProdSection from "./components/Layouts/ProductSection";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <ProdSection />
      <FaqSection/>
      <FooterSection />
    </>
  );
}

export default App;
