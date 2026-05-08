/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Features from "./pages/Features";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import CattleManagement from "./pages/CattleManagement";
import AnimalTrading from "./pages/AnimalTrading";
import PetHospital from "./pages/PetHospital";
import FeedRetail from "./pages/FeedRetail";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/features" element={<Features />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/cattle-management" element={<CattleManagement />} />
          <Route path="/animal-trading" element={<AnimalTrading />} />
          <Route path="/pet-hospital" element={<PetHospital />} />
          <Route path="/feed-retail" element={<FeedRetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}
