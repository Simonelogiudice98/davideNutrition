import { alpha, createTheme } from "@mui/material/styles";

const brand = "#F5C400";
const bg = "#0c0c0c";
const paper = "#121212";

const border = `1px solid ${alpha("#fff", 0.06)}`;
const borderStrong = `1px solid ${alpha("#fff", 0.08)}`;

const shadowBase = "0 18px 70px rgba(0,0,0,.55)";
const ringGoldSoft = `0 0 0 1px ${alpha(brand, 0.12)}`;
const ringGoldStrong = `0 0 0 2px ${alpha(brand, 0.22)}`;

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: brand },
    background: {
      default: bg,
      paper,
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
          backgroundColor: bg,
          backgroundImage:
            "radial-gradient(900px 500px at 50% 0%, rgba(245,196,0,.08), transparent 60%)",
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
          props: { variant: "softBorder"},
          style: {
            border,
            backgroundColor: paper,
            boxShadow: `${shadowBase}, ${ringGoldSoft}`,
          },
        },

        {
          props: { variant: "plain" },
          style: {
            border: "none",
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        },

        {
          props: { variant: "darkBorder"},
          style: {
            border,
            backgroundColor: paper,
            boxShadow: shadowBase,
          },
        },

        {
          props: { variant: "strongBorder"},
          style: {
            border: borderStrong,
            backgroundColor: paper,
            boxShadow: `${shadowBase}, ${ringGoldStrong}`,
          },
        },
      ],
    },

    MuiCardActionArea: {
      styleOverrides: {
        root: {
          borderRadius: 18,
        },
      },
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
          border,
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "none",
          "&:before": { display: "none" },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 800,
        },
      },
    },
  },
});
