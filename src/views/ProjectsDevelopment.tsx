import { Box, Divider, Typography, useColorScheme } from "@mui/material";
import { BoxProjectRight } from "../components/Box/BoxProjectRight";
import {
  AcensignePro,
  AcenstreamPro,
  BesnikPro,
  KoabuyPro,
  LeloponalobiPro,
  ManageFreelancePro,
  PatternsInYourLifePro,
  QuickitPro,
  SFRPro,
  Society2ProductionPro,
} from "../data/DataProjectDev";
import { BoxProjectLeft } from "../components/Box/BoxProjectLeft";
import { useTranslation } from "react-i18next";

const ProjectsDevelopment = () => {
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
        <BoxProjectRight data={AcenstreamPro} />
        <BoxProjectLeft data={SFRPro} />
        <BoxProjectRight data={AcensignePro} />
        <BoxProjectLeft data={KoabuyPro} />
        <BoxProjectRight data={PatternsInYourLifePro} />
        <BoxProjectLeft data={Society2ProductionPro} />
        <BoxProjectRight data={LeloponalobiPro} />
        <BoxProjectLeft data={BesnikPro} />
        <BoxProjectRight data={ManageFreelancePro} />
        <BoxProjectLeft data={QuickitPro} />
      </Box>
    </Box>
  );
};

export default ProjectsDevelopment;
