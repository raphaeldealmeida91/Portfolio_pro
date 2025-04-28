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
import NGINX from "../docs/NGINX.pdf";
import DHCP from "../docs/DHCP.pdf";
import DNS from "../docs/DNS.pdf";
import InterVlan from "../docs/InterVlan.pdf";
import NAT from "../docs/NAT.pdf";
import ACL from "../docs/ACL.pdf";
import VTP from "../docs/VTP.pdf";
import OSFP from "../docs/OSPF.pdf";
import HSRP from "../docs/HSRP.pdf";

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
        /* System */
        <Route
          key="nginx"
          path={`/projects/system/nginx`}
          element={<PdfViewer pdfUrl={NGINX} />}
        />
        <Route
          key="dhcp"
          path={`/projects/system/dhcp`}
          element={<PdfViewer pdfUrl={NGINX} />}
        />
        <Route
          key="guacamole"
          path={`/projects/system/guacamole`}
          element={<PdfViewer pdfUrl={NGINX} />}
        />
        <Route
          key="glpi"
          path={`/projects/system/glpi`}
          element={<PdfViewer pdfUrl={NGINX} />}
        />
        <Route
          key="vnc"
          path={`/projects/system/vnc`}
          element={<PdfViewer pdfUrl={NGINX} />}
        />
        <Route
          key="cec-utils"
          path={`/projects/system/cec-utils`}
          element={<PdfViewer pdfUrl={NGINX} />}
        />
        /* Network */
        <Route
          key="dhcp-cisco"
          path={`/projects/network/dhcp-cisco`}
          element={<PdfViewer pdfUrl={DHCP} />}
        />
        <Route
          key="dns-cisco"
          path={`/projects/network/dns-cisco`}
          element={<PdfViewer pdfUrl={DNS} />}
        />
        <Route
          key="intervlan-cisco"
          path={`/projects/network/intervlan-cisco`}
          element={<PdfViewer pdfUrl={InterVlan} />}
        />
        <Route
          key="nat-cisco"
          path={`/projects/network/nat-cisco`}
          element={<PdfViewer pdfUrl={NAT} />}
        />
        <Route
          key="acl-cisco"
          path={`/projects/network/acl-cisco`}
          element={<PdfViewer pdfUrl={ACL} />}
        />
        <Route
          key="vtp-cisco"
          path={`/projects/network/vtp-cisco`}
          element={<PdfViewer pdfUrl={VTP} />}
        />
        <Route
          key="ospf-cisco"
          path={`/projects/network/ospf-cisco`}
          element={<PdfViewer pdfUrl={OSFP} />}
        />
        <Route
          key="hsrp-cisco"
          path={`/projects/network/hsrp-cisco`}
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
