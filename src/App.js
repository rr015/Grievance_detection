import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AIAnalysisPage from "./pages/AIAnalysisPage";
import SocialMediaTrendsPage from "./pages/SocialMediaTrendsPage";
import PollutionControlIndexPage from "./pages/PollutionControlIndexPage";
import AboutUsPage from "./pages/AboutUsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-analysis" element={<AIAnalysisPage />} />
        <Route path="/discussion" element={<SocialMediaTrendsPage />} />
        <Route path="/pollution-control-index" element={<PollutionControlIndexPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
};

export default App;