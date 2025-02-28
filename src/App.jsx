import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import BuyNow from "./pages/BuyNow/BuyNow";
import Navbar from "./shared/Navbar/Navbar";
import Footer from "./shared/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

const Layout = () => {
  const location = useLocation();
  const validRoutes = ["/", "/about", "/contact", "/buy"];
  const showLayout = validRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {showLayout && <Navbar />}
      <Outlet />
      {showLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buy" element={<BuyNow />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
