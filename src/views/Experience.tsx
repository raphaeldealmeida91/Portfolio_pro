import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Box, Divider, Typography, useColorScheme } from "@mui/material";

const Experience = () => {
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
            Expériences
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
            "& span": { color: "red" },
          }}
          variant="h6"
        >
          Mes études et mon parcours professionnel
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "80%",
            flexDirection: "column",
          }}
        >
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
            }}
            position="right"
          >
            <TimelineItem className="timeline-item">
              <TimelineOppositeContent>
                <Typography color="textSecondary">2019 - 2023</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{ backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2" }}
                />
                <TimelineConnector
                  sx={{ backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2" }}
                />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2",
                  margin: 1,
                  borderRadius: "10px",
                }}
              >
                <Typography variant="h6" component="span" fontWeight="bold">
                  Lycée Joseph Talma - Brunoy
                </Typography>
                <Typography>
                  Baccalauréat général
                  <br />- Mathématique
                  <br />- Sciences Economiques et sociales
                  <br />- Histoire Géographie, Géopolitique et Science Politique
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem className="timeline-item">
              <TimelineOppositeContent>
                <Typography color="textSecondary">avril - mai 2023</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{ backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2" }}
                />
                <TimelineConnector
                  sx={{ backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2" }}
                />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2",
                  margin: 1,
                  borderRadius: "10px",
                }}
              >
                <Typography variant="h6" component="span" fontWeight="bold">
                  Yllona - Développeur Front-End au Brésil
                </Typography>
                <Typography>
                  J'ai effectué 3 semaines de stages chez Yllona. J'ai travaillé
                  sur leur application Web Conexte qui met en relation des
                  sociétés. Les librairies utilisés sont :<br />
                  - ReactJs
                  <br />
                  - Material U.I <br />
                  Mission réalisé :<br />
                  - Création de Landing Page
                  <br />- Création de la page Contact de l'application Web
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem className="timeline-item">
              <TimelineOppositeContent>
                <Typography color="textSecondary">2023 - 2025</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{ backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2" }}
                />
                <TimelineConnector
                  sx={{ backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2" }}
                />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2",
                  margin: 1,
                  borderRadius: "10px",
                }}
              >
                <Typography variant="h6" component="span" fontWeight="bold">
                  Efrei - BTS SIO
                </Typography>
                <Typography>
                  J'ai intégré la Grande École d'Ingénieurs Généraliste et
                  Expert du Numérique à Paris, Efrei. J'y est effectué un BTS
                  SIO (Services Informatiques aux Organisations), avec comme
                  spécialité SISR (Solutions d'Infrastructure, Systèmes et
                  Réseaux). J'ai pu travailler et améliorer mes compétences en
                  développement dans mon entreprise comme j'étais en alternance
                  chez Acensi. Ce BTS m'a permis d'acquérir des compétences dans
                  le réseau et le développement.
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem className="timeline-item">
              <TimelineOppositeContent>
                <Typography color="textSecondary">2023 - 2025</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{ backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2" }}
                />
                <TimelineConnector
                  sx={{ backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2" }}
                />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  backgroundColor: isDark ? "#3f3f3f" : "#F2F2F2",
                  margin: 1,
                  borderRadius: "10px",
                }}
              >
                <Typography variant="h6" component="span" fontWeight="bold">
                  Acensi - Développeur Web Full-Stack
                </Typography>
                <Typography>
                  Mon rôle de Développeur Web chez Acensi couvre tout le cycle
                  de développement logiciel en full stack. Mes missions incluent
                  :<br />- Détection et résolution de bugs
                  <br />- Tests front-end et back-end avec Cypress et Jest
                  <br />- Ajout de nouvelles fonctionnalités et amélioration des
                  existantes
                  <br />- Refacto de code et ajout d'une nouvelle achitecture
                  dans le Front & le Back
                  <br />
                  Technologies utilisées :
                  <br />- Front-end : ReactJs, Redux, MaterialUI
                  <br />- Back-end : NodeJs, Fastify, PostgreSQL, Sequelize,
                  Socket.io
                  <br />
                  Outils et méthode :
                  <br />- Suivi des bugs et gestion des tâches avec Jira
                  (méthode Agile)
                  <br />- CI/CD avec Jenkins pour automatiser les tests et
                  garantir la qualité du code
                  <br />
                  Grâce à ces outils et pratiques, je développe des applications
                  web robustes et performantes, en veillant à répondre aux
                  besoins des utilisateurs et aux objectifs du projet.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
