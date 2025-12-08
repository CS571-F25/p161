import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Destinations from "./components/Destinations";
import Navigation from "./components/Navigation";
import Favorites from "./components/Favorites";
import DestinationDetail from "./components/DestinationDetail";

function App() {
  return (
    <HashRouter>
      <Navigation />

      {/* Creating the routes for all the pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
