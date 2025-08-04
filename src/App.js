import React from "react";
import "./App.css";
import TopBar from "./components/Common/TopBar";
import Header from "./components/Header/Header";
import Hero3D from "./components/Hero/Hero3D"; // 👈 dùng Hero3D thay vì Hero
import Statistics from "./components/Common/Statistics";
import PropertiesSection from "./components/Properties/PropertiesSection";
import QuickLinks from "./components/Common/QuickLinks";
import NewsSection from "./components/News/NewsSection";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer/Footer";
import FloatingContact from "./components/Common/FloatingContact";

function App() {
  return (
    <div className="App bg-gray-50 font-sans">
      <TopBar />
      <Header />
      <Hero3D /> {/* 👈 gọi Hero3D ở đây */}
      <Statistics />
      <PropertiesSection />
      <QuickLinks />
      <NewsSection />
      <ContactSection />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
