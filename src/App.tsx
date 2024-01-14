import BecomePartner from "./components/BecomePartner";
import ClientFeedbackForm from "./components/ClientFeedbackForm";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./index.css";
import { useState } from "react";

const App: React.FC = () => {
  const [lightMode, setLightMode] = useState(false);

  const handleChangeTheme = () => {
    setLightMode(!lightMode);
  };
  return (
    <div className={`${lightMode ? "" : "dark"}`}>
      <div className="bg-[#F0F2F5] dark:bg-[#1f2937]">
        <NavBar lightMode={lightMode} onChangeTheme={handleChangeTheme} />
        <HeroSection />
        <ClientFeedbackForm />
        <BecomePartner />
        <Footer />
      </div>
    </div>
  );
};

export default App;
