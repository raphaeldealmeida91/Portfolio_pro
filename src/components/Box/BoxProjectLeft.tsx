import { Box, IconButton, Typography, useColorScheme } from "@mui/material";
import { BoxChildrenSkills, BoxParentSkills } from "../../styles/styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface BoxProjectLeftProps {
  data: {
    title: string;
    period: string;
    description: string;
    stacks: string[];
    image: string;
    link: string | null;
  };
}

export const BoxProjectLeft: React.FC<BoxProjectLeftProps> = ({ data }) => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        backgroundColor: isDark ? "#3f3f3f" : "#FFF",
        borderRadius: "8px",
        justifyContent: "space-between",
        alignItems: "left",
        flexDirection: { xs: "column", md: "row" },
        mt: 6,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 2,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Box
          component="img"
          alt="Image"
          src={data.image}
          sx={{
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            objectFit: "cover",
            borderRadius: "8px",
            display: "block",
          }}
          loading="lazy"
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 2,
          gap: 1,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {data.title}
          {data.link && (
            <IconButton
              id="btn-koabuy"
              sx={{ width: 32, height: 32, mb: 0.2, ml: 1 }}
              onClick={() => window.open(data.link || "", "_blank")}
            >
              <OpenInNewIcon sx={{ width: 20, height: 20 }} />
            </IconButton>
          )}
        </Typography>
        <Typography variant="h6">{data.period}</Typography>
        <Typography variant="body2">{data.description}</Typography>
        <Box
          sx={{
            ...BoxParentSkills,
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          {data.stacks.map((stack, index) => (
            <Box
              key={index}
              sx={{
                ...BoxChildrenSkills,
                backgroundColor: isDark ? "#575757" : "#F5F5F5",
              }}
            >
              <Typography
                sx={{
                  color: isDark ? "#FFF" : "#000",
                }}
              >
                {stack}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
