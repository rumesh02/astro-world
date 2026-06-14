import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Bookings from "../pages/Bookings";
import Gallery from "../pages/Gallery";
import Tournaments from "../pages/Tournaments";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="tournaments" element={<Tournaments />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
