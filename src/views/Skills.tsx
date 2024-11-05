import { Box, Divider, Typography, useColorScheme } from "@mui/material";
import {
  BoxCenter,
  BoxParentSkills,
  BoxRowParentSkills,
  BoxSkills,
} from "../styles/styles";

const frontEnd = ["ReactJs", "ViteJs", "NextJs", "Native", "Electron"];
const backEnd = ["NodeJs", "Express", "Fastify"];
const css = ["CSS3", "Material U.I", "Chakra U.I", "TailwindCSS"];
const test = ["Cypress", "Jest", "Storybook", "Swagger"];
const orm = ["Sequelize", "Prisma", "Drizzle", "TypeORM", "Mongoose"];
const database = ["MySQL", "Postgres", "Neon", "Supabase", "MongoDB", "Redis"];
const api = ["REST API", "WebSockets", "Google API", "Azure API", "OpenAi API"];
const toolsCode = [
  "Visual Studio Code",
  "Android Studio",
  "Ubuntu",
  "Mac",
  "Linux",
];
const toolsEquip = ["Jira", "Github", "Trello"];
const devOps = ["Docker", "Apache", "Nginx"];
const machineVirtuel = ["Debian", "Ubuntu", "Kali", "Windows Server"];
const toolsReseau = ["VMware", "Virtual Box", "UTM"];

const Skills = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
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
            Compétences
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
          Compétences ou outils dans le <span>développement</span>
        </Typography>
        <Box sx={BoxRowParentSkills}>
          <Box sx={BoxCenter}>
            <Typography sx={{ fontWeight: "bold", mb: 1 }} variant="h6">
              FrontEnd
            </Typography>
            <Box sx={BoxParentSkills}>
              {frontEnd.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#FFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={BoxCenter}>
            <Typography sx={{ fontWeight: "bold", mb: 1 }} variant="h6">
              Style
            </Typography>
            <Box sx={BoxParentSkills}>
              {css.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#FFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={BoxCenter}>
            <Typography sx={{ fontWeight: "bold", mb: 1 }} variant="h6">
              BackEnd
            </Typography>
            <Box sx={BoxParentSkills}>
              {backEnd.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#FFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box sx={BoxRowParentSkills}>
          <Box sx={BoxCenter}>
            <Typography sx={{ fontWeight: "bold", mb: 1 }} variant="h6">
              ORM
            </Typography>
            <Box sx={BoxParentSkills}>
              {orm.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#FFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={BoxCenter}>
            <Typography sx={{ fontWeight: "bold", mb: 1 }} variant="h6">
              Base de donnée
            </Typography>
            <Box sx={BoxParentSkills}>
              {database.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#FFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={BoxCenter}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              API ou Micro-services
            </Typography>
            <Box sx={BoxParentSkills}>
              {api.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#FFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box sx={BoxRowParentSkills}>
          <Box sx={BoxCenter}>
            <Typography sx={{ fontWeight: "bold", mb: 1 }} variant="h6">
              Test & documentation
            </Typography>
            <Box sx={BoxParentSkills}>
              {test.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#FFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={BoxCenter}>
            <Typography sx={{ fontWeight: "bold", mb: 1 }} variant="h6">
              IDE & environnement de developpement
            </Typography>
            <Box sx={BoxParentSkills}>
              {toolsCode.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#FFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={BoxCenter}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Outils pour le travail en équipe
            </Typography>
            <Box sx={BoxParentSkills}>
              {toolsEquip.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#FFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
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
          Compétences ou outils dans le <span>réseau</span>
        </Typography>
        <Box sx={BoxRowParentSkills}>
          <Box sx={BoxCenter}>
            <Typography sx={{ fontWeight: "bold", mb: 1 }} variant="h6">
              DevOps
            </Typography>
            <Box sx={BoxParentSkills}>
              {devOps.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#FFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={BoxCenter}>
            <Typography sx={{ fontWeight: "bold", mb: 1 }} variant="h6">
              Machine virtuel
            </Typography>
            <Box sx={BoxParentSkills}>
              {machineVirtuel.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#FFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={BoxCenter}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Logiciel de virtualisation
            </Typography>
            <Box sx={BoxParentSkills}>
              {toolsReseau.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    ...BoxSkills,
                    backgroundColor: isDark ? "#575757" : "#FFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "#FFF" : "#000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
