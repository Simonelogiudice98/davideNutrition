import { alpha, createTheme } from "@mui/material/styles";

const brand = "#f5c400ff";
const cardBorder = `1px solid ${alpha("#fff", 0.06)}`;
const cardShadow = "2px 4px 4px rgba(245, 196, 0)";
const strongShadow = "4px 4px 10px rgba(245, 196, 0)";
const darkShadow = "0 18px 70px rgba(0,0,0,.55)";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: brand },
    background: {
      default: "#0c0c0c",
      paper: "#121212",
    },
    divider: alpha("#fff", 0.08),
  },
  shape: { borderRadius: 18 },
  typography: {
    fontFamily: ["Inter", "system-ui", "sans-serif"].join(","),
    h2: { fontWeight: 900, letterSpacing: -0.6 },
    h3: { fontWeight: 900, letterSpacing: -0.4 },
    body1: { lineHeight: 1.65 },
    body2: { lineHeight: 1.7 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            "radial-gradient(900px 500px at 50% 0%, rgba(245,196,0,.10), transparent 60%)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
       variants: [
    {
      props: { variant: "softBorder" },
      style: {
        border: cardBorder,
        boxShadow: cardShadow,
        backgroundColor: "#121212",
        
      },
    },
    {
      props: { variant: "plain" },
      style: {
        border: "none",
        boxShadow: "none",
        backgroundColor: "transparent",
      },
    },
    {
      props: { variant: "darkBorder" },
      style: {
        border: cardBorder,
        boxShadow: darkShadow,
      },
    },
    {
      props: { variant: "strongBorder" },
      style: {
        border: cardBorder,
        boxShadow: strongShadow,
      },
    },
  ],
    },

    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 800, borderRadius: 999 },
        containedPrimary: {
          boxShadow: `0 12px 32px ${alpha(brand, 0.22)}`,
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: cardBorder,
          borderRadius: 16,
          overflow: "hidden",
          "&:before": { display: "none" },
        },
      },
    },
  },
});
