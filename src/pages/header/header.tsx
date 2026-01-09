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
  Button,
  Drawer,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import ReactCountryFlag from "react-country-flag";

import logo from "../../assets/img/davide_nutrition_circle_pad60.svg";

type NavItem = { label: string; targetId: string };

const NAV: NavItem[] = [
  { label: "What you get", targetId: "what-you-get" },
  { label: "Meet your expert", targetId: "meet-expert" },
  { label: "Testimonials", targetId: "testimonials" },
  { label: "FAQ", targetId: "faq" },
];

const WHATSAPP_URL = "https://wa.me/39333111222";
const CONTACT_URL = "/contact";

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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? "rgba(12,12,12,0.72)" : "rgba(12,12,12,0.45)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        transition: "background-color .2s ease, padding .2s ease",
      }}
    >
      <Toolbar
        sx={{
          width: "min(1100px, 96%)",
          mx: "auto",
          px: { xs: 1, sm: 2 },
          py: scrolled ? 1 : 1.5,
          minHeight: "unset",
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
              width: scrolled ? 44 : 54,
              height: scrolled ? 44 : 54,
              borderRadius: "50%",
            
            }}
          />
          <Typography
            sx={{
              fontWeight: 900,
              color: "#F5C400",
              letterSpacing: -0.3,
              display: { xs: "none", sm: "block" },
            }}
          >
            Davide Nutrition
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          spacing={0.5}
          sx={{ display: { xs: "none", md: "flex" }, mr: 1.5 }}
        >
          {NAV.map((n) => (
            <Button
              key={n.targetId}
              onClick={() => goTo(n.targetId)}
              sx={{
                color: "text.secondary",
                fontWeight: 800,
                borderRadius: 999,
                px: 1.5,
                "&:hover": { color: "text.primary", backgroundColor: "rgba(255,255,255,0.04)" },
              }}
            >
              {n.label}
            </Button>
          ))}
        </Stack>

        <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<WhatsAppIcon />}
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            sx={{
              borderColor: "divider",
              "&:hover": { borderColor: "primary.main" },
            }}
          >
            WhatsApp
          </Button>

          <Button variant="contained" color="primary" href={CONTACT_URL}>
            Book
          </Button>
        </Stack>

        <IconButton
          size="large"
          onClick={(e) => setLangAnchor(e.currentTarget)}
          color="inherit"
          sx={{
            ml: 1,
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
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              backgroundImage: "none",
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
          onClick={() => setDrawerOpen(true)}
          sx={{
            ml: 1,
            display: { xs: "inline-flex", md: "none" },
            color: "text.primary",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 999,
            width: 44,
            height: 44,
          }}
          aria-label="Open menu"
        >
          <MenuIcon />
        </IconButton>

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
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography sx={{ fontWeight: 900 }}>Menu</Typography>
              <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close menu">
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

            <Divider sx={{ my: 2, borderColor: "divider" }} />

            <Stack spacing={1}>
              <Button
                variant="contained"
                color="primary"
                href={CONTACT_URL}
                size="large"
                fullWidth
              >
                Book a consultation
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<WhatsAppIcon />}
                onClick={() => window.open(WHATSAPP_URL, "_blank")}
                size="large"
                fullWidth
                sx={{ borderColor: "divider", "&:hover": { borderColor: "primary.main" } }}
              >
                WhatsApp
              </Button>
            </Stack>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
