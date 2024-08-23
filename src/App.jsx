import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Career from "./components/Career";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import NotFound from "./components/NotFound";


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
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;