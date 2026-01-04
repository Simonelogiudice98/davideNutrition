
import {
  Box,
  Container,
  Stack,
  Typography,
  Link as MuiLink,
  IconButton,
  useTheme,
  alpha,
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


const Footer:React.FC<Props> = ({
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

  const iconSx = {
    color: alpha(theme.palette.common.white, 0.75),
    "&:hover": { color: accent },
  } as const;

  const onTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 2.2,
        background:
          `radial-gradient(900px 260px at 15% 0%, rgba(255, 215, 0, 0.12), transparent 55%), #0B0B0B`,
        borderTop: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
      }}
    >
      <Container maxWidth="lg">
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
            <IconButton
              component="a"
              href={`mailto:${email}`}
              aria-label="Email"
              size="small"
              sx={iconSx}
            >
              <MailOutlineIcon fontSize="small" />
            </IconButton>

            <IconButton
              component="a"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              size="small"
              sx={iconSx}
            >
              <WhatsAppIcon fontSize="small" />
            </IconButton>

            <Box sx={{ width: 8 }} />

            <MuiLink href={privacyHref} sx={linkSx}>
              Privacy
            </MuiLink>
            <MuiLink href={cookiesHref} sx={linkSx}>
              Cookies
            </MuiLink>

            {showBackToTop && (
              <>
                <Box sx={{ width: 10 }} />
                <IconButton
                  onClick={onTop}
                  aria-label="Torna su"
                  size="small"
                  sx={{
                    borderRadius: 999,
                    border: `1px solid ${alpha(theme.palette.common.white, 0.14)}`,
                    bgcolor: alpha(theme.palette.common.white, 0.04),
                    color: alpha(theme.palette.common.white, 0.78),
                    "&:hover": {
                      bgcolor: alpha(theme.palette.common.white, 0.08),
                      borderColor: alpha(accent, 0.4),
                      color: accent,
                    },
                  }}
                >
                  <KeyboardArrowUpIcon fontSize="small" />
                </IconButton>
              </>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
export default Footer;