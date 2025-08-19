import React, { useState } from "react";
import "./App.css";
import TopBar from "./components/Common/TopBar";
import Header from "./components/Header/Header";
import Hero3D from "./components/Hero/Hero3D";
import Statistics from "./components/Common/Statistics";
import PropertiesSection from "./components/Properties/PropertiesSection";
import NewsSection from "./components/News/NewsSection";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer/Footer";
import FloatingContact from "./components/Common/FloatingContact";
import properties from "./data/properties.json";
import {
  HashRouter as Router, // 🔥 thay vì BrowserRouter
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

// Support Pages
import HelpCenter from "./pages/Support/HelpCenter";
import PostingGuide from "./pages/Support/PostingGuide";
import PostingRules from "./pages/Support/PostingRules";
import FAQ from "./pages/Support/FAQ";

// About Pages
import Introduction from "./pages/About/Introduction";
import Careers from "./pages/About/Careers";
import Contact from "./pages/About/Contact";
import PrivacyPolicy from "./pages/About/PrivacyPolicy";
import TermsOfService from "./pages/About/TermsOfService";
//News Pages
import NewsList from "./components/News/NewsList";
import NewsDetail from "./components/News/NewsDetail";
//Feedback Section
import FeedbackSection from "./components/Contact/FeedbackSection";
function AppContent() {
  const [, setFilteredType] = useState("all");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectTypeAndScroll = (type) => {
    const sectionIdMap = {
      hero: "hero",
      featured: "featured",
      "for-sale": "for-sale",
      "for-rent": "for-rent",
      news: "news",
      contact: "contact",
      feedback: "feedback",
    };

    if (type === "for-sale") {
      setFilteredType("buy");
    } else if (type === "for-rent") {
      setFilteredType("rent");
    } else {
      setFilteredType("all");
    }

    const sectionId = sectionIdMap[type];
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Hàm gọi từ Header/Footer
  const goToSection = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        handleSelectTypeAndScroll(section);
      }, 100);
    } else {
      handleSelectTypeAndScroll(section);
    }
  };

  return (
    <div className="App bg-gray-50 font-sans">
      <TopBar />
      <Header goToSection={goToSection} />

      <Routes>
        <Route
          path="/"
          element={
            <>
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
              <FeedbackSection />
            </>
          }
        />
        {/* Support Routes */}
        <Route path="/support/help-center" element={<HelpCenter />} />
        <Route path="/support/posting-guide" element={<PostingGuide />} />
        <Route path="/support/posting-rules" element={<PostingRules />} />
        <Route path="/support/faq" element={<FAQ />} />
        {/* About Routes */}
        <Route path="/about/introduction" element={<Introduction />} />
        <Route path="/about/careers" element={<Careers />} />
        <Route path="/about/contact" element={<Contact />} />
        <Route path="/about/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about/terms-of-service" element={<TermsOfService />} />
        {/* News Routes */}
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        ``
      </Routes>

      <Footer goToSection={goToSection} />
      <FloatingContact />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
