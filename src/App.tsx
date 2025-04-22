import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Navigation from "./components/Navigation";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import About from "./views/About";
import Skills from "./views/Skills";
import Experience from "./views/Experience";
import Contact from "./views/Contact";
import EpreuveE6 from "./views/EpreuveE6";
import ProjectsDevelopment from "./views/ProjectsDevelopment";
import ProjectsNetwork from "./views/ProjectsNetwork";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Navigation />
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects/development" element={<ProjectsDevelopment />} />
        <Route path="/projects/network" element={<ProjectsNetwork />} />
        <Route path="/epreuve-e6" element={<EpreuveE6 />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
