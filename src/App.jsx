import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Career from "./components/Career";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/ContactUs/Form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;