import { useTranslation } from "react-i18next";

export const useSkills = () => {
  const { t } = useTranslation();

  return {
    FrontEndSkills: {
      title: "FrontEnd",
      items: ["ReactJs", "ViteJs", "Svelte", "NextJs", "Native", "Electron"],
    },

    StyleSkills: {
      title: "Style",
      items: ["CSS3", "Material U.I", "Chakra U.I", "TailwindCSS"],
    },

    BackEndSkills: {
      title: "BackEnd",
      items: ["NodeJs", "Express", "Fastify", "NestJs"],
    },

    ORMSkills: {
      title: "ORM",
      items: ["Sequelize", "Prisma", "Drizzle", "TypeORM", "Mongoose"],
    },

    DatabaseSkills: {
      title: t("database"),
      items: ["MySQL", "Postgres", "Neon", "Supabase", "MongoDB", "Redis"],
    },

    APISkills: {
      title: `API ${t("or")} Micro-services`,
      items: [
        "REST API",
        "WebSockets",
        "Google API",
        "Azure API",
        "OpenAi API",
        "Jira API",
        "Stripe API",
      ],
    },

    TestSkills: {
      title: "Test & documentation",
      items: ["Cypress", "Jest", "Storybook", "Swagger"],
    },

    ToolsEnvSkills: {
      title: t("toolsEnv"),
      items: [
        "Visual Studio Code",
        "Android Studio",
        "IntelliJ IDEA",
        "Mac",
        "Ubuntu",
        "Raspberry os",
      ],
    },

    ToolsEquipSkills: {
      title: t("tools"),
      items: [
        "Jira",
        "Confluence",
        "BitBucket",
        "Git",
        "Github",
        "Trello",
        "Figma",
        "Canva",
      ],
    },

    DevOpsSkills: {
      title: "DevOps",
      items: ["Docker", "Apache", "Nginx", "Prometheus", "Grafana", "Jenkins"],
    },

    ToolsVirtualSkills: {
      title: t("toolsVirtual"),
      items: ["Debian", "Ubuntu", "Kali", "Windows Server"],
    },

    ToolsLogicielSkills: {
      title: t("toolsLogiciel"),
      items: ["VMware", "Virtual Box", "UTM"],
    },

    ProtocolSkills: {
      title: t("protocols"),
      items: ["SSH", "SSL", "HTTP", "TCP/IP", "RDP", "VNC"],
    },

    ConfigurationNetworkSkills: {
      title: t("configNetwork"),
      items: ["DNS", "DHCP", "OSPF", "ACL", "VLAN", "NAT", "HSRP", "VTP"],
    },

    ScriptingSkills: {
      title: "Scripting",
      items: ["Bash", "Python", "JavaScript"],
    },
  };
};
