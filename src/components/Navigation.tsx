import {
  Box,
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

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        padding: "20px 0",
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => navigate(views[0].nav)}
          variant="h6"
        >
          Raphaël De Almeida
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {views.map(({ text, nav }, index) => (
          <Typography
            key={index}
            variant="body1"
            onClick={() => navigate(nav)}
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {t(text)}
          </Typography>
        ))}

        {mode === "light" ? (
          <IconButton onClick={() => setMode("dark")}>
            <DarkModeIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setMode("light")}>
            <LightModeIcon />
          </IconButton>
        )}
        <IconButton
          onClick={
            i18n.language === "fr"
              ? () => changeLanguage("en")
              : () => changeLanguage("fr")
          }
        >
          <LanguageIcon />
        </IconButton>
        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }}
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
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Box sx={{ width: 250 }}>
            <List>
              <Typography
                sx={{ fontWeight: "bold", textAlign: "center", mt: 2, mb: 2 }}
                onClick={() => navigate(views[0].nav)}
                variant="h6"
              >
                Raphaël De Almeida
              </Typography>
              <Divider />
              {views.map(({ text, icon, nav }, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => navigate(nav)}>
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
