import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import WorkIcon from "@mui/icons-material/Work";
import WalletIcon from "@mui/icons-material/Wallet";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";

const views = [
  { text: "home", icon: <HomeIcon />, nav: "/" },
  { text: "about", icon: <PersonIcon />, nav: "/about" },
  { text: "skills", icon: <WalletIcon />, nav: "/skills" },
  { text: "project", icon: <AccountTreeIcon />, nav: "/projects" },
  { text: "experience", icon: <WorkIcon />, nav: "/experience" },
  { text: "Contact", icon: <EmailIcon />, nav: "/contact" },
];

const getPreferredTheme = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

const Navigation = () => {
  const { mode, setMode } = useColorScheme();
  const isDark = mode === "dark";
  const [defaultMode, setDefaultMode] = useState<"dark" | "light" | null>(
    getPreferredTheme()
  );
  const [openMenu, setOpenMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const newMode = mediaQuery.matches ? "dark" : "light";
      setDefaultMode(newMode);
      if (mode === undefined) {
        setMode(newMode);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mode, setMode]);

  if (mode === undefined) {
    if (defaultMode) {
      setMode(defaultMode);
    } else {
      setMode("system");
    }
    return null;
  }

  const handleNavDrawer = (nav: string) => {
    setOpenMenu(false);
    navigate(nav);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: { xs: "20px 10px 20px 10px", sm: "20px 50px 20px 50px" },
        backgroundColor: isDark ? "#282828" : "#F1F1F1",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Button
          id="btn-title"
          onClick={() => navigate(views[0].nav)}
          sx={{ textTransform: "initial", color: isDark ? "#FFF" : "#000" }}
        >
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            Raphaël De Almeida
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {views.map(({ text, nav }, index) => (
          <Button
            id={`btn-nav-${index}`}
            key={index}
            onClick={() => navigate(nav)}
            sx={{
              textTransform: "initial",
              color: isDark ? "#FFF" : "#000",
              display: { xs: "none", lg: "flex" },
            }}
          >
            <Typography
              variant="body1"
              onClick={() => navigate(nav)}
              sx={{
                fontWeight: "bold",
              }}
            >
              {t(text)}
            </Typography>
          </Button>
        ))}

        {mode === "light" ? (
          <IconButton onClick={() => setMode("dark")} id="dark-mode">
            <DarkModeIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setMode("light")} id="light-mode">
            <LightModeIcon />
          </IconButton>
        )}
        <IconButton
          id="btn-language"
          onClick={
            i18n.language === "fr"
              ? () => changeLanguage("en")
              : () => changeLanguage("fr")
          }
        >
          <LanguageIcon />
        </IconButton>
        <IconButton
          id="btn-menu"
          sx={{ display: { xs: "flex", lg: "none" } }}
          onClick={
            openMenu ? () => setOpenMenu(false) : () => setOpenMenu(true)
          }
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          sx={{
            display: { xs: "flex", lg: "none" },
            "& .MuiDrawer-paper": {
              backdropFilter: "blur(5px)",
              backgroundColor: isDark
                ? "rgba(0, 0, 0, 0.4)"
                : "rgba(255, 255, 255, 0.8)",
            },
          }}
        >
          <Box sx={{ width: 250, height: "100%" }}>
            <List>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Button
                  id="btn-title-mobile"
                  onClick={() => handleNavDrawer(views[0].nav)}
                  sx={{
                    textTransform: "initial",
                    color: isDark ? "#FFF" : "#000",
                    mt: 2,
                    mb: 2,
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }} variant="h6">
                    Raphaël De Almeida
                  </Typography>
                </Button>
              </Box>
              <Divider />
              {views.map(({ text, icon, nav }, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    id={`btn-nav-mobile-${index}`}
                    onClick={() => handleNavDrawer(nav)}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <Typography sx={{ fontWeight: "bold" }} variant="body1">
                      {t(text)}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navigation;
