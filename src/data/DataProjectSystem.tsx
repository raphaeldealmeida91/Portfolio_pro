import NGINX from "../docs/NGINX.pdf";
import GLPI from "../docs/GLPI.pdf";
import VNC from "../docs/VNC.pdf";
import Guacamole from "../docs/Guacamole.pdf";
import CEC_UTILS from "../docs/CEC_UTILS.pdf";
import BLocky from "../docs/Blocky.pdf";
import NGINXImg from "../assets/nginx.jpg";
import DHCPImg from "../assets/dhcp.jpg";
import GLPIImg from "../assets/glpi.webp";
import GUACAMOLEImg from "../assets/guacamole.avif";
import BLOCKYImg from "../assets/blocky.jpeg";
import VNCImg from "../assets/vnc.png";
import CECUTILSImg from "../assets/cecutils.webp";

export const ProjectsSystemData = [
  {
    id: 1,
    title: "Serveur Web avec Nginx, PHP et SSL - Debian 12",
    description: `Installation et configuration d'un serveur Web sécurisé avec Nginx, PHP et certificat SSL.
    Compétences : gestion d'un serveur Web sous Linux, sécurisation HTTPS, administration des services PHP et Nginx.`,
    image: NGINXImg,
    namePage: "nginx",
    pdfUrl: NGINX,
  },
  {
    id: 2,
    title: "Serveur DHCP - Debian 12",
    description: `Mise en place d'un serveur DHCP pour l'attribution dynamique d'adresses IP sur un réseau local.
    Compétences : configuration d'étendues d'adresses, gestion d'attributions statiques, dépannage de la connectivité réseau.`,
    image: DHCPImg,
    namePage: "dhcp",
    pdfUrl: GLPI,
  },
  {
    id: 3,
    title: "Bastion d’administration avec Apache Guacamole",
    description: `Déploiement d'un bastion sécurisé d'accès distant via navigateur Web avec Apache Guacamole.
    Compétences : sécurisation des connexions RDP, SSH et VNC, centralisation des accès, authentification des utilisateurs.`,
    image: GUACAMOLEImg,
    namePage: "guacamole",
    pdfUrl: Guacamole,
  },
  {
    id: 4,
    title:
      "Gestion des services informatiques et des utilisateurs avec GLPI et Active Directory",
    description: `Installation et configuration de GLPI pour la gestion de parc informatique et des demandes d'assistance.
    Compétences : gestion des assets IT, tickets d'incidents, administration de solutions de gestion ITSM (IT Service Management).`,
    image: GLPIImg,
    namePage: "glpi",
    pdfUrl: GLPI,
  },
  {
    id: 5,
    title:
      "Blocky solution pour bloquer les publicités et les sites malveillants sur un réseau + Grafana/Prometheus",
    description: `Déploiement de Blocky pour bloquer les publicités et sites malveillants via un filtrage DNS.
    Compétences : configuration et gestion de Blocky, filtrage DNS, sécurisation des réseaux, gestion des accès réseau, monitoring et supervision du réseau.`,
    image: BLOCKYImg,
    namePage: "blocky",
    pdfUrl: BLocky,
  },
  {
    id: 6,
    title: "Accès distant Raspberry Pi via VNC et Websockify",
    description: `Mise en place d'un accès distant sécurisé à un Raspberry Pi via VNC couplé à Websockify pour utilisation depuis un navigateur.
    Compétences : configuration de VNC Server, tunnels Websockify, gestion de la sécurité des accès distants.`,
    image: VNCImg,
    namePage: "vnc",
    pdfUrl: VNC,
  },
  {
    id: 7,
    title: "Contrôle des télés via HDMI-CEC avec Raspberry Pi OS",
    description: `Développement d'une solution pour piloter des téléviseurs via le protocole HDMI-CEC à l'aide d'un Raspberry Pi.
    Compétences : utilisation du protocole CEC, scripts d'automatisation en ligne de commande, interaction avec des équipements audiovisuels.`,
    image: CECUTILSImg,
    namePage: "cec-utils",
    pdfUrl: CEC_UTILS,
  },
];
