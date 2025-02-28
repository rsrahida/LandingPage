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
import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
import image3 from "./assets/images/image3.png";
import Details from "./pages/Details/Details";

const Layout = () => {
  const location = useLocation();
  const validRoutes = ["/", "/about", "/contact", "/buy"];
  const showLayout = validRoutes.includes(location.pathname);

  return (
    <>
      {showLayout && <Navbar />}
      <Outlet />
      {showLayout && <Footer />}
    </>
  );
};

const App = () => {
  const features = [
    {
      id: 1,
      title: "Light, Fast & Powerful",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
      image: image1,
      category: "Performance",
      rating: 4.5,
      addedDate: "2025-02-28",
    },
    {
      id: 2,
      title: "Title Goes Here",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
      image: image2,
      category: "Design",
      rating: 3.8,
      addedDate: "2025-02-20",
    },
    {
      id: 3,
      title: "Another Feature",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
      image: image3,
      category: "Usability",
      rating: 4.2,
      addedDate: "2025-02-25",
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home features={features} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buy" element={<BuyNow />} />
          <Route
            path="/details/:id"
            element={<Details features={features} />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
