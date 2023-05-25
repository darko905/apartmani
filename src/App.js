import { useState, useEffect } from "react";
import "./App.css";
import AboutPage from "./Pages/AboutPage";
import ApartmaniPage from "./Pages/ApartmaniPage";
import FaqPage from "./Pages/FaqPage";
import HomePage from "./Pages/HomePage";
import TetsominialPage from "./Pages/TetsominialPage";
import Wellness from "./Pages/Wellness";
import ApartmanDetails from "./components/ApartmanDetails";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Logo from './image/Logo/Logo.png';
import ContactPage from "./Pages/ContactPage";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-apartman">
          <img src={Logo} alt="Logo"/>
        </div>
       
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route
              index
              path="/apartmanDetails/:id"
              element={<ApartmanDetails />}
            />
            <Route index path="/apartmani" element={<ApartmaniPage />} />
            <Route index path="/faq" element={<FaqPage />} />
            <Route index path="/testominial" element={<TetsominialPage />} />
            <Route index path="/wellness" element={<Wellness />} />
            <Route index path="/about" element={<AboutPage />} />
            <Route index path="/contact" element={<ContactPage />} />
          </Routes>
          {/* <Footer/> */}
        </>
      )}
    </>
  );
}

export default App;
