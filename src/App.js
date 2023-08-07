import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Support from "./pages/Support";
import TeamStore from "./pages/TeamStore";
import Contact from "./pages/Contact";
import LatestNews from "./pages/LatestNews";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/team-usa-store" element={<TeamStore />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/latest-news" element={<LatestNews />} />
      </Routes>
    </div>
  );
}

export default App;
