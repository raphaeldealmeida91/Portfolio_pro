import { Box, Typography, useColorScheme } from "@mui/material";
import {
  BoxCenter,
  BoxChildrenSkills,
  BoxParentSkills,
} from "../../styles/styles";

interface BoxSkillsProps {
  data: {
    title: string;
    items: string[];
  };
}

export const BoxSkills: React.FC<BoxSkillsProps> = ({ data }) => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  return (
    <Box sx={BoxCenter}>
      <Typography sx={{ fontWeight: "bold", mb: 1 }} variant="h6">
        {data.title}
      </Typography>
      <Box sx={BoxParentSkills}>
        {data.items.map((item, index) => (
          <Box
            key={index}
            sx={{
              ...BoxChildrenSkills,
              backgroundColor: isDark ? "#575757" : "#FFF",
            }}
          >
            <Typography
              sx={{
                color: isDark ? "#FFF" : "#000",
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
