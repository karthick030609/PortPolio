import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./compoents/Header";
import Home from "./compoents/Home";
import About from "./compoents/About";
import Services from "./compoents/Services";
import Skills from "./compoents/Skills";
import Projects from "./compoents/Projects";
import Contact from "./compoents/Contact";
import AdminPanel from "./admin/AdminPanel";

// Portfolio page — all existing sections unchanged
function Portfolio() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
