import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Career from "./components/Career";
import NotFound from "./components/NotFound";
import IndivisualService from "./components/IndivisualSecvice";
import Form from "./components/Form";
import "./index.css";
import "aos/dist/aos.css";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";


function App() {
  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
    Aos.refresh();
  }, []);
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/ContactUs/Form" element={<Form />} />
        <Route
          path="/service-detail/:serviceType"
          element={<IndivisualService />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
