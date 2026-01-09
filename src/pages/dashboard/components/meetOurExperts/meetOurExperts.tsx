import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
  Avatar,
  Divider,
  Grid,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import VerifiedIcon from "@mui/icons-material/Verified";
import profilePhoto from '../../../../assets/images/expert/expert.jpg';

export type MeetOurExpertProps = {
  title?: string;
  subtitle?: string;
  fullName: string;
  role: string;
  bioShort?: string;
  studies?: string;
  registerId?: string;
  bullets?: string[];
  photoUrl: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  className?: string;
};

const getInitials = (name: string): string => {
  const initials = name
    .trim()
    .split(/\s+/)
    .map((s) => s.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
  return initials || "DN";
};

const MeetOurExpert: React.FC<MeetOurExpertProps> = ({
  title = "Meet your expert",
  subtitle = "A science-led approach, tailored to your lifestyle—clear, sustainable and results-driven.",
  fullName,
  role,
  bioShort = "Nutritionist focused on body recomposition, habit building and long-term adherence—no extreme plans, no guesswork.",
  studies,
  registerId,
  bullets = [
    "Initial assessment & lifestyle audit",
    "Flexible, personalised meal plan",
    "Quick recipes + ready-to-use grocery list",
    "Real follow-ups and adjustments",
  ],
  ctaPrimaryText = "Book your first visit",
  ctaSecondaryText = "Message on WhatsApp",
  onPrimary,
  onSecondary,
  className,
}) => {
  return (
    <Box component="section" className={className} sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth={false} sx={{ width: "min(1100px, 96%)", mx: "auto" }}>
        {/* Header */}
        <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: 3 }}>
          <Chip
            label={title}
            sx={{
              bgcolor: "transparent",
              border: "1px solid",
              borderColor: "divider",
              color: "primary.main",
              fontWeight: 900,
            }}
          />

          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            Meet the professional guiding your journey
          </Typography>

          <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
            {subtitle}
          </Typography>
        </Stack>

        {/* Main layout */}
        <Card variant="softBorder" sx={{ overflow: "hidden" }}>
          <Grid container>
            {/* LEFT: Content */}
            <Grid size={{ xs: 12, md: 7 }}>
              <CardContent sx={{ p: { xs: 2.25, sm: 3.25 } }}>
                <Stack spacing={2.25}>
                  {/* Identity row */}
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar
                      sx={{
                        width: 52,
                        height: 52,
                        bgcolor: "rgba(245,196,0,.10)",
                        color: "primary.main",
                        fontWeight: 900,
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      {getInitials(fullName)}
                    </Avatar>

                    <Box sx={{ minWidth: 0 }}>
                      <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                        <Typography
                          sx={{
                            fontWeight: 900,
                            fontSize: { xs: 18, sm: 20 },
                            lineHeight: 1.1,
                          }}
                        >
                          {fullName}
                        </Typography>

                        {registerId && (
                          <Chip
                            size="small"
                            icon={<VerifiedIcon style={{ marginLeft: 6 }} />}
                            label={`Register: ${registerId}`}
                            sx={{
                              bgcolor: "rgba(245,196,0,.06)",
                              color: "primary.main",
                              border: "1px solid",
                              borderColor: "divider",
                              "& .MuiChip-icon": { color: "primary.main" },
                            }}
                          />
                        )}
                      </Stack>

                      <Typography variant="body2" color="text.secondary">
                        {role}
                      </Typography>
                    </Box>
                  </Stack>

                  {(bioShort || studies) && (
                    <Stack spacing={1.25}>
                      {bioShort && (
                        <Typography color="text.secondary" sx={{ maxWidth: 680 }}>
                          {bioShort}
                        </Typography>
                      )}

                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {studies && (
                          <Chip
                            label={studies}
                            size="small"
                            sx={{
                              bgcolor: "rgba(255,255,255,0.03)",
                              border: "1px solid",
                              borderColor: "divider",
                            }}
                          />
                        )}
                        <Chip
                          label="Evidence-based"
                          size="small"
                          sx={{
                            bgcolor: "rgba(255,255,255,0.03)",
                            border: "1px solid",
                            borderColor: "divider",
                          }}
                        />
                        <Chip
                          label="Sustainable habits"
                          size="small"
                          sx={{
                            bgcolor: "rgba(255,255,255,0.03)",
                            border: "1px solid",
                            borderColor: "divider",
                          }}
                        />
                      </Stack>
                    </Stack>
                  )}

                  <Divider sx={{ borderColor: "divider" }} />

                  {/* Bullets as a “feature grid” */}
                  <Grid container spacing={1.25}>
                    {bullets.map((b, i) => (
                      <Grid key={i} size={{ xs: 12, sm: 6 }}>
                        <Stack direction="row" spacing={1} alignItems="flex-start">
                          <Box
                            sx={{
                              width: 22,
                              height: 22,
                              borderRadius: 999,
                              display: "grid",
                              placeItems: "center",
                              border: "1px solid",
                              borderColor: "divider",
                              bgcolor: "rgba(245,196,0,.06)",
                              flex: "0 0 auto",
                              mt: "2px",
                            }}
                          >
                            <CheckIcon sx={{ fontSize: 16, color: "primary.main" }} />
                          </Box>

                          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                            {b}
                          </Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>

                  {/* CTA row */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.25}
                    sx={{ pt: 0.5 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={onPrimary}
                      fullWidth
                    >
                      {ctaPrimaryText}
                    </Button>

                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      onClick={onSecondary}
                      fullWidth
                      sx={{
                        borderColor: "divider",
                        "&:hover": { borderColor: "primary.main" },
                      }}
                    >
                      {ctaSecondaryText}
                    </Button>
                  </Stack>

                  <Typography variant="caption" color="text.secondary">
                    Typically replies within 24 hours • Online & in-person sessions
                  </Typography>
                </Stack>
              </CardContent>
            </Grid>

            {/* RIGHT: Photo + badge */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 320, md: "100%" },
                  minHeight: { md: 520 },
                  bgcolor: "background.default",
                }}
              >
                <Box
                  component="img"
                  src={profilePhoto}
                  alt={fullName}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(1.02)",
                    filter: "contrast(1.05) saturate(0.95)",
                  }}
                />

                {/* Bottom badge */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 16,
                    right: 16,
                    bottom: 16,
                    p: 1.25,
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    bgcolor: "rgba(12,12,12,0.65)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        bgcolor: "primary.main",
                        boxShadow: "0 0 18px rgba(245,196,0,.35)",
                        flex: "0 0 auto",
                      }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 800 }}>
                      Personalised plans, built for real life.
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default MeetOurExpert;
