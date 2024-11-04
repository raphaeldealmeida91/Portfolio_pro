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
          backgroundColor: isDark ? "#282828" : "#F9F9F9",
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
            backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2",
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
                    backgroundColor: isDark ? "#575757" : "#FFF",
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
            backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2",
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
                    backgroundColor: isDark ? "#575757" : "#FFF",
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
            backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2",
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
              Patterns in your life est un site permettant de tester sa
              personnalité et de déceler ses schémas.
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
                    backgroundColor: isDark ? "#575757" : "#FFF",
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
            backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2",
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
            <Typography variant="body2">
              Active Directory est un service annuaire LDAP mis en place par
              Microsoft pour les machines Windows Serveur. Il permet
              d’administrer des ressources telles que les ordinateurs, des
              dossiers de partages, mais aussi des comptes utilisateurs par
              l’intermédiaire d’un système d’Identification/Authentification.
              L'objectif principal d'Active Directory est de fournir des
              services centralisés d'identification et d'authentification à un
              réseau d'ordinateurs utilisant le système Windows.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2",
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
            <Typography variant="body2">
              Nagios XI est une plateforme de supervision puissante et évolutive
              permettant le suivi des ressources informatiques, des services et
              des infrastructures réseau en temps réel. Utilisée principalement
              dans des environnements IT, Nagios XI offre une interface
              intuitive ainsi que des outils avancés de surveillance et
              d'alerte. Elle propose une solution complète et centralisée pour
              assurer la disponibilité et la performance des systèmes d'une
              infrastructure. Grâce à sa capacité de personnalisation et à la
              richesse de ses options de surveillance, Nagios XI s'avère être un
              outil précieux pour les administrateurs réseau.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2",
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
            <Typography variant="body2">
              LAMP est une pile logicielle open source, composée de Linux,
              Apache, MySQL et PHP, utilisée pour créer et héberger des
              applications web dynamiques. Grâce à sa structure modulaire, elle
              fournit une solution flexible et abordable pour le développement
              web, adaptée aux petites et grandes entreprises.
              <br />
              OCS Inventory NG est un outil de gestion d’inventaire permettant
              de suivre les équipements matériels et logiciels d’une
              infrastructure IT. Avec des fonctionnalités d’inventaire,
              d’alertes, de rapports et de déploiement logiciel, il facilite la
              gestion centralisée des actifs informatiques. Sa flexibilité en
              fait un outil précieux pour les administrateurs réseau, dans un
              cadre scolaire ou professionnel.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2",
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
            <Typography variant="body2">
              Apache est un serveur web open source largement utilisé pour
              héberger des sites et des applications web. Connu pour sa
              stabilité, sa sécurité et sa flexibilité, Apache permet de gérer
              des requêtes HTTP et de servir des pages web aux utilisateurs.
              Avec une grande capacité de personnalisation via des modules, il
              prend en charge différents langages et architectures, ce qui en
              fait un choix privilégié pour les entreprises de toutes tailles et
              un standard dans le développement web.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2",
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
            <Typography variant="body2">
              GLPI (Gestion Libre de Parc Informatique) est un outil open source
              de gestion des services informatiques, permettant le suivi des
              ressources, la gestion d'inventaire, et le support technique.
              Utilisé pour le Helpdesk et la gestion d’incidents, GLPI propose
              une interface intuitive et des fonctionnalités avancées comme la
              gestion de tickets, le suivi des équipements et des interventions,
              et la génération de rapports. Grâce à ses options de
              personnalisation et son extensibilité via des plugins, GLPI est un
              outil incontournable pour optimiser la gestion des services IT.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2",
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
            <Typography variant="body2">
              Pfsense est un pare-feu open source robuste et flexible, utilisé
              pour sécuriser les réseaux et gérer le trafic. Il offre une
              interface web intuitive pour configurer des fonctionnalités
              avancées de sécurité, comme le routage, le VPN, et les règles de
              pare-feu. Intégré avec LDAP, pfSense peut s’appuyer sur des
              annuaires d’entreprise pour l'authentification centralisée des
              utilisateurs, facilitant ainsi la gestion des accès et la sécurité
              réseau dans des environnements complexes. Sa polyvalence et ses
              capacités de personnalisation en font un choix privilégié pour les
              administrateurs réseaux.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2",
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
              VLAN, Routage Inter Vlan - Projet d'école
            </Typography>
            <Typography variant="body2">
              Les VLANs (Virtual Local Area Networks) sont des réseaux virtuels
              créés pour segmenter un réseau physique en plusieurs sous-réseaux
              isolés. Cette segmentation améliore la sécurité et l’efficacité du
              réseau en séparant les flux de données, permettant ainsi de
              regrouper les dispositifs selon des départements, services, ou
              fonctions spécifiques sans nécessiter d’infrastructure physique
              séparée. Cette configuration est souvent réalisée à l’aide de
              Cisco Packet Tracer, qui permet de simuler et de visualiser le
              fonctionnement des VLANs dans un environnement virtuel.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Projects;
