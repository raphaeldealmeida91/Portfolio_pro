import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  useColorScheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Launch } from "@mui/icons-material";
import DHCP from "../assets/dhcp.jpg";
import Nginx from "../assets/nginx.jpg";
import Glpi from "../assets/glpi.webp";
import Guacamole from "../assets/guacamole.png";
import OCS from "../assets/ocs.jpg";
import Lamp from "../assets/lamp.jpg";
import VNC from "../assets/vnc.png";
import CecUtils from "../assets/cecutils.webp";
import Pfsense from "../assets/pfsense.avif";

const projects = [
  {
    id: 1,
    title: "Serveur Web avec Nginx et PHP - Debian 12",
    description: `• Installation et configuration de Nginx\n• Création d’un site statique\n• Intégration de PHP via php-fpm\n• Validation du fonctionnement du serveur\n• Administration basique sous Debian`,
    image: Nginx,
    pdfUrl: "/docs/nginx_project.pdf",
  },
  {
    id: 2,
    title: "Serveur DHCP - Debian 12",
    description: `• Installation d’isc-dhcp-server\n• Configuration du fichier dhcpd.conf\n• Attribution dynamique et statique des IP\n• Vérification du fonctionnement DHCP\n• Gestion réseau automatisée`,
    image: DHCP,
    pdfUrl: "/docs/dhcp_project.pdf",
  },
  {
    id: 3,
    title: "Architecture LAMP 3-tiers avec DNS",
    description: `• Déploiement de Bind9, Apache, MySQL et PHP\n• Résolution DNS interne\n• Architecture 3-tiers séparée (Web / App / DB)\n• Tests avec site dynamique PHP/MySQL\n• Sécurisation de la pile serveur`,
    image: Lamp,
    pdfUrl: "/docs/lamp_project.pdf",
  },
  {
    id: 4,
    title: "Bastion d’administration avec Apache Guacamole",
    description: `• Installation sur Ubuntu 24\n• Accès distant via RDP, SSH, VNC\n• Interface web sécurisée\n• Configuration des connexions\n• Administration sans client local`,
    image: Guacamole,
    pdfUrl: "/docs/guacamole_project.pdf",
  },
  {
    id: 5,
    title: "Gestion d’inventaire avec OCS Inventory",
    description: `• Installation du serveur OCS 2.12\n• Déploiement d’agents sur postes clients\n• Collecte automatisée de données\n• Interface d’administration web\n• Vue globale du parc informatique`,
    image: OCS,
    pdfUrl: "/docs/ocs_project.pdf",
  },
  {
    id: 6,
    title: "Gestion des services IT avec GLPI",
    description: `• Déploiement de GLPI sous Debian 12\n• Intégration avec OCS Inventory\n• Gestion des utilisateurs et tickets\n• Suivi des matériels et interventions\n• Interface web intuitive`,
    image: Glpi,
    pdfUrl: "/docs/glpi_project.pdf",
  },
  {
    id: 7,
    title: "Pare-feu et sécurité réseau avec pfSense",
    description: `• Installation et configuration de pfSense\n• Règles de filtrage, NAT et VLAN\n• Redirection de ports\n• Configuration DHCP et multi-WAN\n• Supervision via interface graphique`,
    image: Pfsense,
    pdfUrl: "/docs/pfsense_project.pdf",
  },
  {
    id: 8,
    title: "Accès distant Raspberry Pi via VNC et Websockify",
    description: `• Installation de VNC Server sur Raspberry Pi OS\n• Configuration d’accès à distance via navigateur\n• Utilisation de Websockify pour relier VNC au web\n• Sécurisation des connexions via mot de passe\n• Utilisation dans un environnement sans écran`,
    image: VNC,
    pdfUrl: "/docs/raspi_vnc.pdf",
  },
  {
    id: 9,
    title: "Contrôle HDMI-CEC avec Raspberry Pi OS",
    description: `• Installation de libcec sur Raspberry Pi OS\n• Contrôle de la télévision via HDMI (allumage, veille)\n• Intégration avec une interface React pour pilotage\n• Communication entre navigateur et Pi via WebSockets\n• Automatisation du contrôle à distance de l’affichage`,
    image: CecUtils,
    pdfUrl: "/docs/raspi_cec.pdf",
  },
];

const ProjectsNetwork = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  const { t } = useTranslation();

  return (
    <Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px 0",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
            }}
            variant="h5"
          >
            {t("project")}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isDark ? "#282828" : "#F1F1F1",
          padding: "30px 0 60px 0",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            "& span": { color: "#00BFFF" },
          }}
          variant="h6"
        >
          Projets dans le <span>réseau</span>
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mt: 1,
            width: "80%",
          }}
          variant="body1"
        >
          Voici un aperçu des derniers projets d'écoles ou personnels sur
          lesquels j'ai travaillé.
        </Typography>
        <Box sx={{ padding: 4 }}>
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card
                  sx={{
                    borderRadius: "8px",
                    boxShadow: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardActionArea
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="280"
                      image={project.image}
                      alt={`Aperçu du projet ${project.title}`}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" fontWeight={600}>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        whiteSpace="pre-line"
                      >
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions>
                    <Button
                      size="small"
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noopener"
                      endIcon={<Launch />}
                      sx={{ ml: 1 }}
                    >
                      Voir la documentation
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsNetwork;
