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
import PdfViewer from "./components/PdfViewer";
import NGINX from "./docs/NGINX.pdf";
import DHCP from "./docs/DHCP.pdf";
import DNS from "./docs/DNS.pdf";
import InterVlan from "./docs/InterVlan.pdf";
import NAT from "./docs/NAT.pdf";
import ACL from "./docs/ACL.pdf";
import VTP from "./docs/VTP.pdf";
import OSFP from "./docs/OSPF.pdf";
import HSRP from "./docs/HSRP.pdf";
import TechMonitoring from "./views/TechMonitoring";

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
        <Route path="//tech-monitoring" element={<TechMonitoring />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
        /* System */
        <Route
          path={`/projects/nginx`}
          element={<PdfViewer pdfUrl={NGINX} />}
        />
        <Route path={`/projects/dhcp`} element={<PdfViewer pdfUrl={NGINX} />} />
        <Route
          path={`/projects/guacamole`}
          element={<PdfViewer pdfUrl={NGINX} />}
        />
        <Route path={`/projects/glpi`} element={<PdfViewer pdfUrl={NGINX} />} />
        <Route path={`/projects/vnc`} element={<PdfViewer pdfUrl={NGINX} />} />
        <Route
          path={`/projects/cec-utils`}
          element={<PdfViewer pdfUrl={NGINX} />}
        />
        /* Network */
        <Route
          path={`/projects/dhcp-cisco`}
          element={<PdfViewer pdfUrl={DHCP} />}
        />
        <Route
          path={`/projects/dns-cisco`}
          element={<PdfViewer pdfUrl={DNS} />}
        />
        <Route
          path={`/projects/intervlan-cisco`}
          element={<PdfViewer pdfUrl={InterVlan} />}
        />
        <Route
          path={`/projects/nat-cisco`}
          element={<PdfViewer pdfUrl={NAT} />}
        />
        <Route
          path={`/projects/acl-cisco`}
          element={<PdfViewer pdfUrl={ACL} />}
        />
        <Route
          path={`/projects/vtp-cisco`}
          element={<PdfViewer pdfUrl={VTP} />}
        />
        <Route
          path={`/projects/ospf-cisco`}
          element={<PdfViewer pdfUrl={OSFP} />}
        />
        <Route
          path={`/projects/hsrp-cisco`}
          element={<PdfViewer pdfUrl={HSRP} />}
        />
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
