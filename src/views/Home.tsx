import {
  Box,
  Button,
  Divider,
  Skeleton,
  Slide,
  Typography,
  useColorScheme,
} from "@mui/material";
import Me from "../assets/raphael_de_almeida.webp";
import { useTranslation } from "react-i18next";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useState } from "react";
import CVPDF from "../assets/RaphaelDeAlmeida.pdf";

const Home = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  const { t } = useTranslation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleOpenCV = () => {
    window.open(CVPDF, "_blank", "noopener,noreferrer");
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
          {!isImageLoaded && (
            <Skeleton
              variant="rectangular"
              width={300}
              height={400}
              sx={{ borderRadius: "8px" }}
            />
          )}
          <Slide in={isImageLoaded} direction="right" timeout={500}>
            <Box
              component="img"
              alt="Raphaël De Almeida"
              src={Me}
              sx={{
                width: "300px",
                height: "auto",
                maxWidth: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                display: isImageLoaded ? "block" : "none",
              }}
              loading="lazy"
              onLoad={() => setIsImageLoaded(true)}
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
          <Box
            sx={{ width: { xs: "70%", md: "80%" }, mb: isImageLoaded ? 3 : 0 }}
          >
            {!isImageLoaded && (
              <Skeleton variant="text" width="100%" height={40} />
            )}
            <Slide in={isImageLoaded} direction="left" timeout={500}>
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
          <Box
            sx={{ width: { xs: "70%", md: "80%" }, mb: isImageLoaded ? 3 : 0 }}
          >
            {!isImageLoaded && (
              <Skeleton variant="text" width="100%" height={40} />
            )}
            <Slide in={isImageLoaded} direction="left" timeout={500}>
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
          <Box
            sx={{ width: { xs: "70%", md: "80%" }, mb: isImageLoaded ? 3 : 0 }}
          >
            {!isImageLoaded && (
              <Skeleton variant="text" width="100%" height={40} />
            )}
            <Slide in={isImageLoaded} direction="left" timeout={500}>
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
          <Box
            sx={{ width: { xs: "70%", md: "80%" }, mb: isImageLoaded ? 3 : 0 }}
          >
            {!isImageLoaded && (
              <Skeleton variant="text" width="100%" height={40} />
            )}
            <Slide in={isImageLoaded} direction="left" timeout={500}>
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
            sx={{ width: { xs: "70%", md: "80%" }, mb: isImageLoaded ? 3 : 0 }}
          >
            {!isImageLoaded && (
              <Skeleton variant="rectangular" width={120} height={40} />
            )}
            <Slide in={isImageLoaded} direction="left" timeout={500}>
              <Button
                startIcon={<FileDownloadIcon />}
                variant="contained"
                onClick={handleOpenCV}
                sx={{
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
