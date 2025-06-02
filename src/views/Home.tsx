import {
  Box,
  Button,
  Divider,
  Slide,
  Typography,
  useColorScheme,
} from "@mui/material";
import Me from "../assets/raphael_de_almeida.jpeg";
import { useTranslation } from "react-i18next";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CVPDF from "/DEALMEIDARaphaelCVDevOps.pdf";

const Home = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  const { t } = useTranslation();

  const handleOpenFile = (file: string) => {
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
          overflowX: "hidden",
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
            {t("goodMorning")}
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
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "45%" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Slide in={true} direction="right" timeout={500}>
            <Box
              component="img"
              alt="Raphaël De Almeida"
              src={Me}
              sx={{
                width: "300px",
                height: "400px",
                maxWidth: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                display: "block",
              }}
              loading="lazy"
            />
          </Slide>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "45%" },
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
            mt: { xs: 4, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box sx={{ width: { xs: "70%", md: "80%" }, mb: 3 }}>
            <Slide in={true} direction="left" timeout={500}>
              <Typography
                sx={{
                  "& span": { fontWeight: "bold" },
                }}
                variant="h6"
              >
                {t("iAm")} <span>Raphaël</span> {t("iAmDev")}
              </Typography>
            </Slide>
          </Box>
          <Box sx={{ width: { xs: "70%", md: "80%" }, mb: 3 }}>
            <Slide in={true} direction="left" timeout={500}>
              <Typography
                sx={{
                  "& span": { fontWeight: "bold" },
                }}
                variant="h6"
              >
                {t("craftSite")}
                <span>conception</span>
                {t("andOf")}
                <span>design</span>
                {t("of")}
                <span>{t("development")}</span>
                {t("andOf2")}
                <span>{t("deployment")}</span>.
              </Typography>
            </Slide>
          </Box>
          <Box sx={{ width: { xs: "70%", md: "80%" }, mb: 3 }}>
            <Slide in={true} direction="left" timeout={500}>
              <Typography
                sx={{
                  "& span": { fontWeight: "bold" },
                }}
                variant="h6"
              >
                {t("craftSite")}
                <span>conception</span>
                {t("andOf")}
                <span>design</span>
                {t("of")}
                <span>{t("development")}</span>
                {t("andOf2")}
                <span>{t("deployment")}</span>.
              </Typography>
            </Slide>
          </Box>
          <Box sx={{ width: { xs: "70%", md: "80%" }, mb: 3 }}>
            <Slide in={true} direction="left" timeout={500}>
              <Typography
                sx={{
                  "& span": { fontWeight: "bold" },
                }}
                variant="h6"
              >
                {t("workNow")}
                <span>Acensi</span>.
              </Typography>
            </Slide>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: { xs: "70%", md: "100%" },
              mb: 3,
              justifyContent: { xs: "center", md: "flex-start" },
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: 4, md: 2 },
            }}
          >
            <Slide in={true} direction="left" timeout={500}>
              <Button
                id="btn-download-cv-dev"
                startIcon={<FileDownloadIcon />}
                variant="contained"
                onClick={() => handleOpenFile(CVPDF)}
                sx={{
                  display: "flex",
                  backgroundColor: "rgb(76, 86, 106)",
                  color: "#F1F1F1",
                  textTransform: "initial",
                }}
              >
                {t("cv")}
              </Button>
            </Slide>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
