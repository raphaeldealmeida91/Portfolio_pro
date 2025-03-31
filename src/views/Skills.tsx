import { Box, Divider, Typography, useColorScheme } from "@mui/material";
import { BoxRowParentSkills } from "../styles/styles";
import { useTranslation } from "react-i18next";
import { BoxSkills } from "../components/Box/BoxSkills";
import { useSkills } from "../data/DataSkills";

const Skills = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  const { t } = useTranslation();
  const {
    FrontEndSkills,
    StyleSkills,
    BackEndSkills,
    ORMSkills,
    DatabaseSkills,
    APISkills,
    TestSkills,
    ToolsEnvSkills,
    ToolsEquipSkills,
    DevOpsSkills,
    ToolsVirtualSkills,
    ToolsLogicielSkills,
  } = useSkills();

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
            {t("skills")}
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
            mb: 3,
            "& span": { color: "#FF033E" },
          }}
          variant="h6"
        >
          {t("skillsPage")}
          <span> {t("dev")}</span>
        </Typography>
        <Box sx={BoxRowParentSkills}>
          <BoxSkills data={FrontEndSkills} />
          <BoxSkills data={StyleSkills} />
          <BoxSkills data={BackEndSkills} />
        </Box>
        <Box sx={BoxRowParentSkills}>
          <BoxSkills data={ORMSkills} />
          <BoxSkills data={DatabaseSkills} />
          <BoxSkills data={APISkills} />
        </Box>
        <Box sx={BoxRowParentSkills}>
          <BoxSkills data={TestSkills} />
          <BoxSkills data={ToolsEnvSkills} />
          <BoxSkills data={ToolsEquipSkills} />
        </Box>
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mt: { xs: 6, md: 3 },
            mb: 3,
            "& span": { color: "#00BFFF" },
          }}
          variant="h6"
        >
          {t("skillsPage")}
          <span> {t("network")}</span>
        </Typography>
        <Box sx={BoxRowParentSkills}>
          <BoxSkills data={DevOpsSkills} />
          <BoxSkills data={ToolsVirtualSkills} />
          <BoxSkills data={ToolsLogicielSkills} />
        </Box>
      </Box>
    </>
  );
};

export default Skills;
