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
import { ProjectsSystemData } from "../data/DataProjectSystem";
import { ProjectsNetworkData } from "../data/DataProjectNetwork";

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
          Projets dans le <span>système</span>
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
            {ProjectsSystemData.map((project) => (
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
                      href={`system/${project.namePage}`}
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
            {ProjectsNetworkData.map((project) => (
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
                      href={`network/${project.namePage}`}
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
