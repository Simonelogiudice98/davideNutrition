import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Stack,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import ReactCountryFlag from "react-country-flag";

import logo from "../../assets/img/logo.png";

type NavItem = { label: string; targetId: string };

const NAV: NavItem[] = [
  { label: "What you get", targetId: "what-you-get" },
  { label: "Meet your expert", targetId: "meet-expert" },
  { label: "Testimonials", targetId: "testimonials" },
  { label: "FAQ", targetId: "faq" },
];

const Header: React.FC = () => {
  const [langAnchor, setLangAnchor] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: scrolled
          ? "rgba(12,12,12,0.72)"
          : "rgba(12,12,12,0.45)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        transition: "background-color .2s ease, padding .2s ease",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          px: { xs: 1.5, sm: 3 }, 
          py: scrolled ? 1 : 1.5,
          minHeight: "unset",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          onClick={() => goTo("top")}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            userSelect: "none",
          }}
          aria-label="Go to top"
        >
          <Box
            component="img"
            src={logo}
            alt="Davide Nutrition"
            sx={{
              width: { xs: scrolled ? 42 : 48, sm: scrolled ? 44 : 54 },
              height: { xs: scrolled ? 42 : 48, sm: scrolled ? 44 : 54 },
            }}
          />
        </Box>

        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton
            size="large"
            onClick={(e) => setLangAnchor(e.currentTarget)}
            color="inherit"
            sx={{
              color: "primary.main",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 999,
              width: 44,
              height: 44,
            }}
            aria-label="Change language"
          >
            <LanguageIcon />
          </IconButton>

          <Menu
            anchorEl={langAnchor}
            open={Boolean(langAnchor)}
            onClose={() => setLangAnchor(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            MenuListProps={{
              sx: {
                p: 0.5,
                "& .MuiMenuItem-root": {
                  borderRadius: 0,
                  px: 1.25,
                  py: 0.9,
                  gap: 1,
                  fontWeight: 700,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.06)" },
                },
                "& .MuiListItemIcon-root": { minWidth: 34 },
              },
            }}
            PaperProps={{
              sx: {
                mt: 1,
                minWidth: 190,
                borderRadius: 0,
                border: "1px solid rgba(255,255,255,0.10)",
                backgroundColor: "rgba(12,12,12,0.90)",
                backdropFilter: "blur(10px)",
                backgroundImage: "none",
                boxShadow: "0 14px 40px rgba(0,0,0,0.45)",
                overflow: "hidden",
              },
            }}
          >
            <MenuItem
              onClick={() => {
                // i18n.changeLanguage("it");
                setLangAnchor(null);
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <ReactCountryFlag
                  countryCode="IT"
                  svg
                  style={{ width: 20, height: 14, borderRadius: 2 }}
                  title="Italiano"
                />
              </ListItemIcon>
              <ListItemText primary="Italiano" />
            </MenuItem>

            <MenuItem
              onClick={() => {
                // i18n.changeLanguage("en");
                setLangAnchor(null);
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{ width: 20, height: 14, borderRadius: 2 }}
                  title="English"
                />
              </ListItemIcon>
              <ListItemText primary="English" />
            </MenuItem>
          </Menu>

          <IconButton
            size="large"
            edge="end"
            onClick={() => setDrawerOpen((v) => !v)}
            sx={{
              color: "#F5C400",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 999,
              width: 44,
              height: 44,
              "&:hover": { backgroundColor: "rgba(245,196,0,0.08)" },
            }}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
          >
            <MenuIcon />
          </IconButton>
        </Stack>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: 320,
              bgcolor: "background.default",
              borderLeft: "1px solid",
              borderColor: "divider",
              backgroundImage: "none",
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography sx={{ fontWeight: 900 }}>Menu</Typography>
              <IconButton
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <CloseIcon />
              </IconButton>
            </Stack>

            <Divider sx={{ my: 2, borderColor: "divider" }} />

            <Stack spacing={0.75}>
              {NAV.map((n) => (
                <Button
                  key={n.targetId}
                  onClick={() => goTo(n.targetId)}
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    color: "text.primary",
                    fontWeight: 900,
                    borderRadius: 3,
                    py: 1.1,
                    backgroundColor: "rgba(255,255,255,0.02)",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.05)" },
                  }}
                >
                  {n.label}
                </Button>
              ))}
            </Stack>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
