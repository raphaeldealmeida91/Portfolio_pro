import {
  Box,
  Divider,
  IconButton,
  Typography,
  useColorScheme,
} from "@mui/material";
import { BoxParentSkills, BoxSkills } from "../styles/styles";
import Acenstream from "../assets/acenstream.jpeg";
import Koabuy from "../assets/Koabuy.png";
import Patterns from "../assets/patterns-in-your-life.webp";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const acenstream = [
  "ReactJs",
  "Material U.I",
  "Redux",
  "NodeJs",
  "Fastify",
  "Sequelize",
  "Postgres",
  "Electron",
  "Docker",
  "Socket.IO",
];

const koabuy = [
  "ViteJs",
  "Material U.I",
  "Redux",
  "NodeJs",
  "Fastify",
  "Prisma",
  "Postgres",
  "Neon",
  "Stripe",
  "DHL Express API",
  "Mondial Relay API",
];

const patternsInYourLife = [
  "ViteJs",
  "Material U.I",
  "Redux",
  "NodeJs",
  "Fastify",
  "Google Drive API",
];

const Projects = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  return (
    <>
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
            Projets
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
          padding: "60px 0",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            "& span": { color: "#FF033E" },
          }}
          variant="h6"
        >
          Projets dans le <span>développement</span>
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
          Voici un aperçu des derniers projets professionnels ou personnels sur
          lesquels j'ai travaillé.
        </Typography>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#FFF",
            borderRadius: "8px",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: 6,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
              gap: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Acenstream - Projet professionnel chez Acensi
            </Typography>
            <Typography variant="h6">2023-2025</Typography>
            <Typography variant="body2">
              Acenstream est un CMS multimédia qui permet de diffuser du contenu
              (images, vidéos, flux web et vidéos YouTube) sur un player codé en
              React et Electron. Ce player est installé dans un Raspberry Pi 4,
              branché à un téléviseur pour diffuser le contenu. Le Back-Office
              offre un contrôle optimal de la diffusion. Il permet de planifier,
              programmer et créer des événements, des playlists de médias, ainsi
              que des groupes d'écrans, pour une expérience simple et efficace.
              Grâce au WebSocket, la diffusion est en temps réel, offrant une
              maîtrise totale. De plus, grâce au protocole VNC, il est possible
              d'avoir une visibilité en temps réel des players.
            </Typography>
            <Box
              sx={{
                ...BoxParentSkills,
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {acenstream.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#F5F5F5",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              alt="Acenstream"
              src={Acenstream}
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              loading="lazy"
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#FFF",
            borderRadius: "8px",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: 6,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              alt="Koabuy"
              src={Koabuy}
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              loading="lazy"
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
              gap: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Koabuy - Projet personnel
              <IconButton
                sx={{ width: 32, height: 32, mb: 0.2, ml: 1 }}
                onClick={() =>
                  window.open("https://koabuy.onrender.com", "_blank")
                }
              >
                <OpenInNewIcon sx={{ width: 20, height: 20 }} />
              </IconButton>
            </Typography>
            <Typography variant="h6">2024-2025</Typography>
            <Typography variant="body2">
              Koabuy est un site permettant de créer sa propre boutique en ligne
              et de générer des revenus avec Stripe comme moyen de paiement. Le
              principe est similaire à Shopify, mais en plus simple et plus
              rapide. L’utilisateur peut créer sa boutique et ajouter ses
              produits en moins de deux minutes. Il pourra ensuite gérer sa
              boutique, ses produits et les transactions, jusqu’à l’envoi des
              articles via DHL ou Mondial Relay. Créez votre boutique e-commerce
              et soyez référencé sur le web !
            </Typography>
            <Box
              sx={{
                ...BoxParentSkills,
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {koabuy.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#F5F5F5",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#FFF",
            borderRadius: "8px",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: 6,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
              gap: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Patterns in your life - Projet personnel
              <IconButton
                sx={{ width: 32, height: 32, mb: 0.2, ml: 1 }}
                onClick={() =>
                  window.open("https://koabuy.onrender.com", "_blank")
                }
              >
                <OpenInNewIcon sx={{ width: 20, height: 20 }} />
              </IconButton>
            </Typography>
            <Typography variant="h6">2024</Typography>
            <Typography variant="body2">
              Patterns in your life est un site conçu pour vous aider à explorer
              et identifier les schémas qui influencent votre vie. Grâce à un
              questionnaire de 22 questions, vous pourrez évaluer la véracité
              des énoncés par rapport à votre enfance et à votre situation
              actuelle d’adulte. L’outil s’inspire du livre Je réinvente ma vie
              de Janet S. Klosko et Jeffrey Young, et vise à vous offrir une
              meilleure compréhension de vos comportements. Plongez dans une
              introspection enrichissante et commencez à transformer votre vie
              dès aujourd'hui !
            </Typography>
            <Box
              sx={{
                ...BoxParentSkills,
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {patternsInYourLife.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#F5F5F5",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              alt="Patterns"
              src={Patterns}
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              loading="lazy"
            />
          </Box>
        </Box>
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            "& span": { color: "#00BFFF" },
            mt: 6,
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
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#FFF",
            borderRadius: "8px",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: 6,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
              gap: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Configuration de machines AD DS, DNS, DHCP - Projet d'école
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.5 }}>
              <strong>Compétences développées :</strong>
              <ul>
                <li>
                  Installation et configuration d'Active Directory Domain
                  Services (AD DS) pour la gestion des utilisateurs et des
                  ressources.
                </li>
                <li>
                  Configuration des services DNS pour la résolution de noms et
                  l'acheminement du trafic réseau.
                </li>
                <li>
                  Mise en place du service DHCP pour l'attribution dynamique des
                  adresses IP aux clients.
                </li>
                <li>
                  Gestion des stratégies de groupe (GPO) pour le contrôle
                  centralisé des paramètres de sécurité et de configuration.
                </li>
                <li>
                  Surveillance et dépannage des services AD, DNS et DHCP pour
                  assurer leur disponibilité.
                </li>
                <li>
                  Application des meilleures pratiques en matière de sécurité
                  pour protéger l'environnement réseau.
                </li>
                <li>
                  Documentation des configurations et des procédures pour les
                  futurs administrateurs système.
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#FFF",
            borderRadius: "8px",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: 6,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
              gap: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Installation et configuration ainsi que la supervision des
              machines Nagios XI. - Projet d'école
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.5 }}>
              <strong>Compétences développées :</strong>
              <ul>
                <li>
                  Installation et configuration de Nagios XI pour la supervision
                  des infrastructures.
                </li>
                <li>
                  Mise en place de la surveillance des services réseau et des
                  équipements matériels.
                </li>
                <li>
                  Création de tableaux de bord personnalisés pour un suivi
                  efficace des performances.
                </li>
                <li>
                  Configuration des alertes et notifications pour une réponse
                  rapide aux incidents.
                </li>
                <li>
                  Analyse des journaux de supervision pour optimiser les
                  performances et la disponibilité.
                </li>
                <li>
                  Gestion des plugins Nagios pour étendre les capacités de
                  surveillance.
                </li>
                <li>
                  Élaboration de rapports sur la disponibilité et les
                  performances des systèmes surveillés.
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#FFF",
            borderRadius: "8px",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: 6,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
              gap: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              LAMP OCS - Projet d'école
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.5 }}>
              <strong>Compétences développées :</strong>
              <ul>
                <li>
                  Installation et configuration de l'environnement LAMP (Linux,
                  Apache, MySQL, PHP).
                </li>
                <li>
                  Développement d'applications web dynamiques avec PHP et MySQL.
                </li>
                <li>
                  Gestion des bases de données et optimisation des requêtes SQL.
                </li>
                <li>
                  Configuration d'Apache pour l'hébergement d'applications web
                  sécurisées.
                </li>
                <li>
                  Utilisation d'OCS Inventory pour la gestion et le suivi des
                  équipements informatiques.
                </li>
                <li>
                  Mise en œuvre de la sécurité des applications web et des bases
                  de données.
                </li>
                <li>
                  Développement de solutions de sauvegarde et de récupération
                  des données.
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#FFF",
            borderRadius: "8px",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: 6,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
              gap: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Apache - Projet d'école
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.5 }}>
              <strong>Compétences développées :</strong>
              <ul>
                <li>
                  Installation et configuration d'Apache pour des serveurs web.
                </li>
                <li>
                  Gestion des fichiers de configuration pour l'optimisation des
                  performances.
                </li>
                <li>
                  Mise en place de la sécurité avec des certificats SSL pour
                  HTTPS.
                </li>
                <li>
                  Configuration du module de réécriture d'URL pour un SEO
                  amélioré.
                </li>
                <li>
                  Application de règles de sécurité pour protéger les ressources
                  et les données.
                </li>
                <li>
                  Gestion des virtual hosts pour l'hébergement de plusieurs
                  sites.
                </li>
                <li>
                  Analyse des journaux d'accès et d'erreurs pour le débogage et
                  l'optimisation.
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#FFF",
            borderRadius: "8px",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: 6,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
              gap: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              NGINX - Projet d'école
              <IconButton
                sx={{ width: 32, height: 32, mb: 0.2, ml: 1 }}
                onClick={() =>
                  window.open(
                    "https://github.com/Raphalinho91/nginx-docker",
                    "_blank"
                  )
                }
              >
                <OpenInNewIcon sx={{ width: 20, height: 20 }} />
              </IconButton>
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.5 }}>
              <strong>Compétences développées :</strong>
              <ul>
                <li>
                  Maîtrise de l'installation et de l'initialisation de NGINX
                  avec Docker.
                </li>
                <li>
                  Configuration avancée de NGINX pour des applications web.
                </li>
                <li>
                  Gestion de la sécurité avec SSL et HTTPS pour les sites web.
                </li>
                <li>Optimisation des performances via la mise en cache.</li>
                <li>
                  Mise en œuvre de solutions de gestion des cookies et des
                  sessions.
                </li>
                <li>
                  Application de sécurités avancées pour les pages et les URLs,
                  ainsi que des limitations de requêtes.
                </li>
                <li>
                  Création et gestion de sous-domaines pour des projets
                  diversifiés.
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#FFF",
            borderRadius: "8px",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: 6,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
              gap: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              GLPI - Projet d'école
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.5 }}>
              <strong>Compétences développées :</strong>
              <ul>
                <li>
                  Installation et configuration de GLPI pour la gestion des
                  actifs informatiques.
                </li>
                <li>
                  Mise en place d'un système de tickets pour le suivi des
                  demandes et incidents.
                </li>
                <li>
                  Gestion des ressources matérielles et logicielles pour un
                  suivi précis.
                </li>
                <li>
                  Configuration des notifications et alertes pour une réactivité
                  améliorée.
                </li>
                <li>
                  Élaboration de rapports d'analyse pour optimiser la gestion du
                  parc informatique.
                </li>
                <li>
                  Utilisation des fonctionnalités d'inventaire automatique pour
                  une mise à jour en temps réel.
                </li>
                <li>
                  Formation des utilisateurs sur les bonnes pratiques et
                  l'utilisation de GLPI.
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#FFF",
            borderRadius: "8px",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: 6,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
              gap: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Pfsense ldaps - Projet d'école
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.5 }}>
              <strong>Compétences développées :</strong>
              <ul>
                <li>
                  Installation et configuration de pfSense pour une gestion
                  réseau sécurisée.
                </li>
                <li>
                  Intégration de LDAPS pour sécuriser les communications entre
                  les clients et le serveur LDAP.
                </li>
                <li>
                  Configuration des règles de pare-feu pour contrôler le trafic
                  réseau.
                </li>
                <li>
                  Mise en place de VPN pour sécuriser l'accès distant aux
                  ressources réseau.
                </li>
                <li>
                  Surveillance et dépannage des connexions et des performances
                  du réseau.
                </li>
                <li>
                  Élaboration de politiques de sécurité pour protéger
                  l'environnement réseau.
                </li>
                <li>
                  Documentation des configurations et des meilleures pratiques
                  pour une gestion future.
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#FFF",
            borderRadius: "8px",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: 6,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 2,
              gap: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Cisco Packet Tracer : VLAN, Routage Inter-VLAN, VTP, HSRP,
              OSPF-RIP, Filtrage ACL - Projet d'école
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.5 }}>
              <strong>Compétences développées :</strong>
              <ul>
                <li>
                  Création et gestion de VLAN pour segmenter le réseau et
                  améliorer la sécurité.
                </li>
                <li>
                  Configuration du routage inter-VLAN pour permettre la
                  communication entre les différents segments.
                </li>
                <li>
                  Utilisation de VTP (VLAN Trunking Protocol) pour simplifier la
                  gestion des VLAN sur le réseau.
                </li>
                <li>
                  Mise en place d'HSRP (Hot Standby Router Protocol) pour
                  assurer la redondance des routeurs.
                </li>
                <li>
                  Configuration des protocoles de routage OSPF et RIP pour
                  l'optimisation des chemins de données.
                </li>
                <li>
                  Application de filtrages ACL (Access Control Lists) pour
                  renforcer la sécurité réseau.
                </li>
                <li>
                  Simulation de scénarios de réseau complexe pour tester la
                  performance et la fiabilité des configurations.
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Projects;
