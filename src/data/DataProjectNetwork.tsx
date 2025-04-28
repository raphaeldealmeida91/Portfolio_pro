import DHCP from "../docs/DHCP.pdf";
import DNS from "../docs/DNS.pdf";
import InterVlan from "../docs/InterVlan.pdf";
import NAT from "../docs/NAT.pdf";
import ACL from "../docs/ACL.pdf";
import VTP from "../docs/VTP.pdf";
import OSFP from "../docs/OSPF.pdf";
import HSRP from "../docs/HSRP.pdf";
import DHCPImg from "../assets/DHCP.png";
import DNSImg from "../assets/DNS.png";
import InterVlanImg from "../assets/VLAN.png";
import NATImg from "../assets/NAT.png";
import ACLImg from "../assets/ACL.png";
import VTPImg from "../assets/VTP.png";
import OSFPImg from "../assets/OSFP.png";
import HSRPImg from "../assets/HSRP.png";

export const ProjectsNetworkData = [
  {
    id: 1,
    title: "Serveur DHCP - Cisco Packet tracer",
    description: `Configuration d'un serveur DHCP pour l'attribution automatique d'adresses IP. 
    Compétences : gestion des pools d'adresses, configuration réseau dynamique, résolution de problèmes de connectivité.`,
    image: DHCPImg,
    namePage: "dhcp-cisco",
    pdfUrl: DHCP,
  },
  {
    id: 2,
    title: "Serveur DNS et serveur Web - Cisco Packet tracer",
    description: `Déploiement d'un serveur DNS pour la résolution de noms et d'un serveur Web pour l'hébergement de sites.
    Compétences : enregistrement de domaines, redirection d'URL, diagnostic des erreurs DNS.`,
    image: DNSImg,
    namePage: "dns-cisco",
    pdfUrl: DNS,
  },
  {
    id: 3,
    title: "VLAN et routage interVLAN - Cisco Packet tracer",
    description: `Création de VLAN pour segmenter un réseau et mise en place du routage interVLAN pour assurer la communication entre eux.
    Compétences : segmentation réseau, configuration de trunk, amélioration de la sécurité et de la performance réseau.`,
    image: InterVlanImg,
    namePage: "intervlan-cisco",
    pdfUrl: InterVlan,
  },
  {
    id: 4,
    title: "Configuration d’un NAT - Cisco Packet tracer",
    description: `Mise en place du NAT (Network Address Translation) pour permettre l'accès à Internet depuis un réseau privé.
    Compétences : translation d'adresses IP, sécurité des réseaux internes, gestion des flux sortants.`,
    image: NATImg,
    namePage: "nat-cisco",
    pdfUrl: NAT,
  },
  {
    id: 5,
    title: "Filtrage ACL - Cisco Packet tracer",
    description: `Création et application d'ACL (Access Control Lists) pour contrôler le trafic réseau et renforcer la sécurité.
    Compétences : filtrage du trafic, définition de règles d'accès, sécurisation de l'infrastructure.`,
    image: ACLImg,
    namePage: "acl-cisco",
    pdfUrl: ACL,
  },
  {
    id: 6,
    title:
      "Mise en place et utilisation du protocole VTP - Cisco Packet tracer",
    description: `Implémentation du protocole VTP (VLAN Trunking Protocol) pour simplifier la gestion des VLANs sur plusieurs switches.
    Compétences : centralisation de la gestion VLAN, synchronisation automatique, optimisation de la configuration réseau.`,
    image: VTPImg,
    namePage: "vtp-cisco",
    pdfUrl: VTP,
  },
  {
    id: 7,
    title: "Configuration OSPF - Cisco Packet tracer",
    description: `Déploiement du protocole de routage OSPF (Open Shortest Path First) pour un routage interne efficace.
    Compétences : conception d'architecture réseau scalable, calcul du meilleur chemin, gestion des routes dynamiques.`,
    image: OSFPImg,
    namePage: "ospf-cisco",
    pdfUrl: OSFP,
  },
  {
    id: 8,
    title: "Configuration HSRP - Cisco Packet tracer",
    description: `Mise en œuvre du protocole HSRP (Hot Standby Router Protocol) pour assurer la haute disponibilité réseau.
    Compétences : tolérance aux pannes, redondance de la passerelle par défaut, continuité de service en cas de défaillance.`,
    image: HSRPImg,
    namePage: "hsrp-cisco",
    pdfUrl: HSRP,
  },
];
