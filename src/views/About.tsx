import { Box, Divider, Typography, useColorScheme } from "@mui/material";
import VSC from "../assets/vsc.png";
import Boxe from "../assets/boxe.jpeg";

const About = () => {
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
            A propos de moi !
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
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "50%" },
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: { xs: "center", md: "flex-end" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              "& span": { fontWeight: "bold" },
              width: { xs: "70%", md: "80%" },
              mb: 2,
            }}
            variant="body1"
          >
            Je crée des sites web et des applications depuis maintenant{" "}
            <span>2 ans</span>.
          </Typography>
          <Typography
            sx={{
              "& span": { fontWeight: "bold" },
              width: { xs: "70%", md: "80%" },
              mb: 2,
            }}
            variant="body1"
          >
            Je suis <span>passionné</span> passionné et <span>créatif</span>. Je
            me soucie de l'accessibilité, de la <span>qualité</span> et des
            performmances.
          </Typography>
          <Typography
            sx={{
              "& span": { fontWeight: "bold" },
              width: { xs: "70%", md: "80%" },
            }}
            variant="body1"
          >
            J'aime les technologies backend et frontend, et j'aime la logique et
            les interfaces étonnantes.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "50%" },
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            alt="Visual studio code"
            src={VSC}
            sx={{
              width: { xs: "300px", sm: "300px", md: "300px" },
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
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 0",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "50%" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            alt="Boxe"
            src={Boxe}
            sx={{
              width: { xs: "300px", sm: "300px", md: "300px" },
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
            display: "flex",
            width: { xs: "100%", md: "50%" },
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
            mt: { xs: 4, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              "& span": { fontWeight: "bold" },
              width: { xs: "70%", md: "80%" },
              mb: 2,
            }}
            variant="body1"
          >
            Je vis près de Paris 🇫🇷.
          </Typography>
          <Typography
            sx={{
              "& span": { fontWeight: "bold" },
              width: { xs: "70%", md: "80%" },
              mb: 2,
            }}
            variant="body1"
          >
            J'aime créer, découvrir et apprendre de nouvelles choses. J'aime la
            musique, les films, les séries et les mangas.
          </Typography>
          <Typography
            sx={{
              "& span": { fontWeight: "bold" },
              width: { xs: "70%", md: "80%" },
              mb: 2,
            }}
            variant="body1"
          >
            La boxe, la musculation ou le sport en général m'aident à me sentir
            bien, mais j'aime aussi jouer aux jeux vidéos ou lire des livres.
          </Typography>
          <Typography
            sx={{
              "& span": { fontWeight: "bold" },
              width: { xs: "70%", md: "80%" },
              mb: 2,
            }}
            variant="body1"
          >
            J'aime aussi les voyages, découvir de nouvelles cultures, goûter de
            nouveaux plats et m'aventurer dans de nouveaux lieux.
          </Typography>
          <Typography
            sx={{
              "& span": { fontWeight: "bold" },
              width: { xs: "70%", md: "80%" },
            }}
            variant="body1"
          >
            Le code est aussi un aspect important dans ma vie aujourd'hui.
            J'aime me lancer des défis et réaliser ce que j'imagine.
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
          padding: "40px 0",
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
              width: "80%",
            }}
            variant="h6"
          >
            Maintenant que vous me connaissez, je serais ravi de faire votre
            connaissance !
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
