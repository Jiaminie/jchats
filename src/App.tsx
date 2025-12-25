import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Zoom } from "@mui/material"; 
import { Header, Footer } from "./components";
import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import UseCasesPage from "./pages/UseCasesPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import GetStartedPage from "./pages/GetStartedPage";
import FaqPage from "./pages/FaqPage";
import PricingPage from "./pages/PricingPage";
import ScrollToTop from "./components/ScrollToTop";
import { StickyWhatsAppButton, ReturnToTopButton} from "./components/ui"; 

function App() {
  const [showReturnToTop, setShowReturnToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { 
        setShowReturnToTop(true);
      } else {
        setShowReturnToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      <ScrollToTop />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
      <StickyWhatsAppButton
        phoneNumber="254712345678"
        defaultMessage="Hi! I'd like to learn more about Jiaminie."
      />
      <Zoom in={showReturnToTop}>
        <Box
          sx={{
            position: 'fixed',
            bottom: 24, // Adjust this if it conflicts with other buttons
            right: 20, // Adjust this if it conflicts with other buttons
            zIndex: 1100, // Ensure it's above content but possibly below whatsapp
            display: showReturnToTop ? 'block' : 'none', // Ensure visibility is controlled by state
          }}
        >
          <ReturnToTopButton onClick={scrollToTop} />
        </Box>
      </Zoom>
    </Router>
  );
}

export default App;
