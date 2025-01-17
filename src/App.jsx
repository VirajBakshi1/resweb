import { useState } from '../node_modules/react'
import { BrowserRouter as Router, Route, Routes } from '../node_modules/react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import Journey from './pages/Journey/Journey';
import Projects from './pages/Projects/Projects';
import Team from './pages/Team/Team';
import TRS from './pages/TRS/TRS';
import Robocon from './pages/Robocon/Robocon';
import Sponsors from './pages/Sponsors/Sponsors';
import PapersPublished from './pages/PapersPublished/PapersPublished';
import ContactUs from './pages/ContactUs/Contact';
import Patents from './pages/Patents/Patents';
import IEEE from './pages/IEEE/Ieee';
import Competitions from './pages/Competitions/Competitions';
import Mindspark from './pages/Mindspark/Mindspark';
import Robotex from './pages/Robotex/Robotex';
import DistinguishedAlumni from './pages/DistinguishedAlumini/DistinguishedAlumini';
import Gallery2024 from './pages/Gallery/2024/Gallery2024';
import AwardsPage from './pages/Awardspage/Awardspage';
import MediaCoveragePage from './pages/MediaCoverage/MediaCoveragePage';
import FTC from './pages/FTC/FTC';
import VideoPreloader from './pages/Home/Video-Preloader';
import SocialOutreach from './pages/SocialOutreach/SocialOutreach';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoPreloader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/trs" element={<TRS />} />
        <Route path="/robocon" element={<Robocon />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/papersPublished" element={<PapersPublished />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/patents" element={<Patents />} />
        <Route path="/ieee" element={<IEEE />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/mindspark" element={<Mindspark />} />
        <Route path="/robotex" element={<Robotex />} />
        <Route path="/distinguishedAlumni" element={<DistinguishedAlumni />} />
        <Route path="/gallery2024" element={<Gallery2024 />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/media-coverage" element={<MediaCoveragePage />} />
        <Route path="/FTC" element={<FTC />} />
        <Route path="/socialOutreach" element={<SocialOutreach />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App