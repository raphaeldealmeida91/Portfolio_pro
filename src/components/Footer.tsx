import { Box, Typography, useColorScheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  const { t } = useTranslation();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 0",
          flexDirection: { xs: "column", md: "row" },
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "65%" },
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
            mt: { xs: 4, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", width: "100%", mb: 3 }}
            variant="h6"
          >
            {t("talkIt")}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", width: { xs: "80%", md: "100%" }, mb: 3 }}
            variant="body1"
          >
            {t("paragraphFooter")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "35%" },
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Box
            onClick={() =>
              window.open("https://github.com/Raphalinho91", "_blank")
            }
            sx={{
              display: "flex",
              width: 100,
              height: 90,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(76, 86, 106)",
              color: "#F1F1F1",
              clipPath:
                "polygon(50% 0px, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
              "&:hover": {
                backgroundColor: "#F1F1F1",
                color: "rgb(76, 86, 106)",
                transition: "clip-path .3s,background-color .3s",
              },
              cursor: "pointer",
            }}
          >
            <GitHubIcon sx={{ width: "50%", height: "50%" }} />
          </Box>
          <Box
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/raphaël-de-almeida-985a9b279/",
                "_blank"
              )
            }
            sx={{
              display: "flex",
              width: 100,
              height: 90,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(76, 86, 106)",
              color: "#F1F1F1",
              clipPath:
                "polygon(50% 0px, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
              "&:hover": {
                backgroundColor: "#F1F1F1",
                color: "rgb(76, 86, 106)",
                transition: "clip-path .3s,background-color .3s",
              },
              cursor: "pointer",
            }}
          >
            <LinkedInIcon sx={{ width: "50%", height: "50%" }} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0px",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: isDark ? "#282828" : "#F1F1F1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold", width: "100%" }} variant="h6">
            Copyright © Raphaël De Almeida - 2024
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
