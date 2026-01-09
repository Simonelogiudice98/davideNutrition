import {
  Box,
  Container,
  Stack,
  Typography,
  Link as MuiLink,
  IconButton,
  useTheme,
  alpha,
  Divider,
  Button,
} from "@mui/material";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type Props = {
  brand?: string;
  year?: number;
  email: string;
  whatsappUrl: string;
  privacyHref?: string;
  cookiesHref?: string;
  showBackToTop?: boolean;
};

const Footer: React.FC<Props> = ({
  brand = "Davide Nutrition",
  year = new Date().getFullYear(),
  email,
  whatsappUrl,
  privacyHref = "/privacy",
  cookiesHref = "/cookies",
  showBackToTop = true,
}) => {
  const theme = useTheme();
  const accent = theme.palette.primary.main;

  const linkSx = {
    color: alpha(theme.palette.common.white, 0.72),
    textDecoration: "none",
    fontSize: 12,
    "&:hover": { color: accent },
  } as const;

  const onTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: { xs: 3, md: 3.5 },
        backgroundColor: theme.palette.background.default,
        backgroundImage:
          "radial-gradient(900px 260px at 15% 0%, rgba(245,196,0,0.06), transparent 55%)",
        borderTop: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
      }}
    >
      <Container maxWidth={false} sx={{ width: "min(1100px, 96%)", mx: "auto" }}>
        <Stack spacing={2}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
          >
            <Box>
              <Typography sx={{ fontWeight: 900, letterSpacing: -0.2 }}>
                {brand}
              </Typography>
              <Typography
                sx={{ color: alpha(theme.palette.common.white, 0.62), fontSize: 12, mt: 0.5 }}
              >
                Evidence-based nutrition • Online & in-person consultations
              </Typography>
            </Box>

            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                startIcon={<MailOutlineIcon />}
                component="a"
                href={`mailto:${email}`}
                sx={{
                  borderColor: alpha(theme.palette.common.white, 0.14),
                  color: alpha(theme.palette.common.white, 0.85),
                  "&:hover": { borderColor: alpha(accent, 0.55), color: accent },
                }}
              >
                Email
              </Button>

              <Button
                variant="outlined"
                color="primary"
                size="small"
                startIcon={<WhatsAppIcon />}
                component="a"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                sx={{
                  borderColor: alpha(theme.palette.common.white, 0.14),
                  color: alpha(theme.palette.common.white, 0.85),
                  "&:hover": { borderColor: alpha(accent, 0.55), color: accent },
                }}
              >
                WhatsApp
              </Button>

              {showBackToTop && (
                <IconButton
                  onClick={onTop}
                  aria-label="Back to top"
                  size="small"
                  sx={{
                    borderRadius: 999,
                    border: `1px solid ${alpha(theme.palette.common.white, 0.14)}`,
                    bgcolor: alpha(theme.palette.common.white, 0.04),
                    color: alpha(theme.palette.common.white, 0.82),
                    "&:hover": {
                      bgcolor: alpha(theme.palette.common.white, 0.08),
                      borderColor: alpha(accent, 0.55),
                      color: accent,
                    },
                  }}
                >
                  <KeyboardArrowUpIcon fontSize="small" />
                </IconButton>
              )}
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: alpha(theme.palette.common.white, 0.08) }} />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.2}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent="space-between"
          >
            <Typography sx={{ color: alpha(theme.palette.common.white, 0.55), fontSize: 12 }}>
              © {year} {brand}. All rights reserved.
            </Typography>

            <Stack direction="row" spacing={1.2} alignItems="center">
              <MuiLink href={privacyHref} sx={linkSx}>
                Privacy
              </MuiLink>
              <MuiLink href={cookiesHref} sx={linkSx}>
                Cookies
              </MuiLink>

              
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
