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
      </Box>
    </>
  );
};

export default Projects;
