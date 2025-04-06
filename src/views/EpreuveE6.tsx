import {
  Box,
  Button,
  Divider,
  Typography,
  useColorScheme,
} from "@mui/material";
import Project1PDF from "/projet-1-doc.pdf";
import Project2PDF from "/projet-2-doc.pdf";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useTranslation } from "react-i18next";

const EpreuveE6 = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  const { t } = useTranslation();
  const handleOpenProjects = (file: string) => {
    window.open(file, "_blank", "noopener,noreferrer");
  };

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
            Epreuve E6 / Projets pour le BTS
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
          gap: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "80%",
          }}
        >
          <Typography sx={{ fontWeight: "bold", display: "flex" }} variant="h6">
            Projet 1 - GLPI User avec LDAP Active Direcory
          </Typography>
          <Button
            id="btn-download-project1"
            startIcon={<FileDownloadIcon />}
            variant="contained"
            onClick={() => handleOpenProjects(Project1PDF)}
            sx={{
              display: "flex",
              backgroundColor: "rgb(76, 86, 106)",
              color: "#F1F1F1",
              textTransform: "initial",
              mt: 2,
            }}
          >
            {t("project1")}
          </Button>
          <Button
            id="btn-download-project1-doc"
            startIcon={<FileDownloadIcon />}
            variant="contained"
            onClick={() => handleOpenProjects(Project1PDF)}
            sx={{
              display: "flex",
              backgroundColor: "rgb(76, 86, 106)",
              color: "#F1F1F1",
              textTransform: "initial",
              mt: 2,
            }}
          >
            {t("project1Doc")}
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "80%",
          }}
        >
          <Typography sx={{ fontWeight: "bold", display: "flex" }} variant="h6">
            Projet 2 - Serveur Guacamole, bastion d'administration de poste avec
            SSH et RDP
          </Typography>
          <Button
            id="btn-download-project2"
            startIcon={<FileDownloadIcon />}
            variant="contained"
            onClick={() => handleOpenProjects(Project2PDF)}
            sx={{
              display: "flex",
              backgroundColor: "rgb(76, 86, 106)",
              color: "#F1F1F1",
              textTransform: "initial",
              mt: 2,
            }}
          >
            {t("project2")}
          </Button>
          <Button
            id="btn-download-project2-doc"
            startIcon={<FileDownloadIcon />}
            variant="contained"
            onClick={() => handleOpenProjects(Project2PDF)}
            sx={{
              display: "flex",
              backgroundColor: "rgb(76, 86, 106)",
              color: "#F1F1F1",
              textTransform: "initial",
              mt: 2,
            }}
          >
            {t("project2Doc")}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EpreuveE6;
