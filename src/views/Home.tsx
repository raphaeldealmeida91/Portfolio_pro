import {
  Box,
  Button,
  Divider,
  Typography,
  useColorScheme,
} from "@mui/material";
import Me from "../assets/raphael_de_almeida.webp";
import { useTranslation } from "react-i18next";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Home = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  const { t } = useTranslation();
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
            Bonjour !
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
          <Box
            component="img"
            alt="Raphaël De Almeida"
            src={Me}
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
            width: { xs: "100%", md: "45%" },
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
              mb: 3,
            }}
            variant="h6"
          >
            {t("iAm")} <span>Raphaël</span> {t("iAmDev")}
          </Typography>
          <Typography
            sx={{
              "& span": { fontWeight: "bold" },
              width: { xs: "70%", md: "80%" },
              mb: 3,
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
          <Typography
            sx={{
              "& span": { fontWeight: "bold" },
              width: { xs: "70%", md: "80%" },
              mb: 3,
            }}
            variant="h6"
          >
            {t("workNow")}
            <span>Acensi</span>.
          </Typography>
          <Button
            startIcon={<FileDownloadIcon />}
            variant="contained"
            sx={{
              backgroundColor: "rgb(76, 86, 106)",
              color: "#F1F1F1",
              textTransform: "initial",
            }}
          >
            Mon CV
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
