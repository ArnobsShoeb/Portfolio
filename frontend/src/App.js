import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App(){
  return (
    <Router>
      <Header />
      <div>
        <NavigationBar />
      
      </div>
      <div>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Resume />} />
      </Routes>
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;
