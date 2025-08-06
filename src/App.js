import React, { useState } from "react";

import "./App.css";
import TopBar from "./components/Common/TopBar";
import Header from "./components/Header/Header";
import Hero3D from "./components/Hero/Hero3D"; // 👈 dùng Hero3D thay vì Hero
import Statistics from "./components/Common/Statistics";
import PropertiesSection from "./components/Properties/PropertiesSection";

import NewsSection from "./components/News/NewsSection";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer/Footer";
import FloatingContact from "./components/Common/FloatingContact";
// import { properties } from "./data/properties";
import properties from "./data/properties.json";

function App() {
  const [, setFilteredType] = useState("all"); // all | buy | rent

  const handleSelectTypeAndScroll = (type) => {
    const sectionIdMap = {
      home: "hero",
      featured: "featured",
      buy: "for-sale",
      rent: "for-rent",
      news: "news",
      contact: "contact",
    };

    if (type === "buy" || type === "rent") {
      setFilteredType(type);
    } else {
      setFilteredType("all");
    }

    const sectionId = sectionIdMap[type];
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App bg-gray-50 font-sans">
      <TopBar />
      <Header
        setFilteredType={setFilteredType}
        handleSelectTypeAndScroll={handleSelectTypeAndScroll}
      />
      <Hero3D id="hero" />
      <Statistics />
      <PropertiesSection
        id="featured"
        title="Featured Properties"
        properties={properties.filter((p) => p.featured)}
        showSort={false}
        showPagination={true}
      />
      <PropertiesSection
        id="for-sale"
        title="Properties for Sale"
        properties={properties.filter((p) => p.type === "buy")}
        showSort={true}
        showPagination={true}
      />
      <PropertiesSection
        id="for-rent"
        title="Properties for Rent"
        properties={properties.filter((p) => p.type === "rent")}
        showSort={true}
        showPagination={true}
      />
      <NewsSection id="news" />
      <ContactSection id="contact" />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
