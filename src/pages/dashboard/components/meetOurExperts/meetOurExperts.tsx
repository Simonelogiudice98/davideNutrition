import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import VerifiedIcon from "@mui/icons-material/Verified";
import profilePhoto from "../../../../assets/images/expert/expert.jpg";

export type MeetOurExpertProps = {
  title?: string;
  subtitle?: string;
  fullName: string;
  role: string;
  bioShort?: string;
  studies?: string;
  registerId?: string;
  bullets?: string[];
  photoUrl?: string; // opzionale: se vuoi usare quello passato e non profilePhoto
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
  subtitle = "A science-led approach tailored to your lifestyle — clear, sustainable and results-driven.",
  fullName,
  role,
  bioShort = "Nutritionist focused on body recomposition, habit building and long-term adherence — no extreme plans, no guesswork.",
  studies,
  registerId,
  bullets = [
    "Initial assessment & lifestyle review",
    "Flexible, personalised meal plan",
    "Quick recipes + ready-to-use grocery list",
    "Follow-ups, adjustments and ongoing support",
  ],
  ctaPrimaryText = "Book your first visit",
  ctaSecondaryText = "Message on WhatsApp",
  onPrimary,
  onSecondary,
  className,
}) => {
  const imageSrc = profilePhoto;

  return (
    <Box
      component="section"
      className={className}
      sx={{ py: { xs: 4, md: 6 } }}
    >
      <Container
        maxWidth={false}
        sx={{ width: "min(1100px, 96%)", mx: "auto" }}
      >
        {/* Header (più compatto) */}
        <Stack
          spacing={1}
          alignItems="center"
          textAlign="center"
          sx={{ mb: 3 }}
        >
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

        {/* Main card */}
        <Card variant="softBorder" sx={{ overflow: "hidden" }}>
          <Grid container>
            {/* LEFT */}
            <Grid size={{ xs: 12, md: 7 }}>
              <CardContent sx={{ p: { xs: 2.25, sm: 3.25 } }}>
                <Stack spacing={2.25}>
                  {/* Identity */}
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar
                      sx={{
                        width: 54,
                        height: 54,
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
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={{ xs: 0.5, sm: 1 }}
                        alignItems={{ sm: "center" }}
                        flexWrap="wrap"
                      >
                        <Typography
                          sx={{
                            fontWeight: 900,
                            fontSize: { xs: 18, sm: 22 },
                            lineHeight: 1.1,
                          }}
                        >
                          {fullName}
                        </Typography>

                        {registerId && (
                          <Chip
                            size="small"
                            icon={<VerifiedIcon style={{ marginLeft: 6 }} />}
                            label={`Registration: ${registerId}`}
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

                  {/* Bio + tags */}
                  {(bioShort || studies) && (
                    <Stack spacing={1.25}>
                      {bioShort && (
                        <Typography
                          color="text.secondary"
                          sx={{ maxWidth: 680 }}
                        >
                          {bioShort}
                        </Typography>
                      )}

                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        useFlexGap
                      >
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
                          label="Sustainable lifestyle"
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

                  {/* Bullets in a cleaner 2-col grid */}
                  <Grid container spacing={1.25}>
                    {bullets.map((b, i) => (
                      <Grid key={i} size={{ xs: 12, sm: 6 }}>
                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="flex-start"
                        >
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
                            <CheckIcon
                              sx={{ fontSize: 16, color: "primary.main" }}
                            />
                          </Box>

                          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                            {b}
                          </Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>

                  {/* CTA block (più “conversion”) */}
                  <Card
                    variant="darkBorder"
                    sx={{
                      p: { xs: 1.5, sm: 2 },
                      bgcolor: "rgba(255,255,255,0.02)",
                    }}
                  >
                    <Stack spacing={1.25}>
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={1.25}
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

                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        useFlexGap
                      >
                        <Chip
                          size="small"
                          label="Online consultations"
                          sx={{
                            bgcolor: "rgba(255,255,255,0.03)",
                            border: "1px solid",
                            borderColor: "divider",
                          }}
                        />
                        <Chip
                          size="small"
                          label="In-person visits"
                          sx={{
                            bgcolor: "rgba(255,255,255,0.03)",
                            border: "1px solid",
                            borderColor: "divider",
                          }}
                        />
                        <Chip
                          size="small"
                          label="Follow-ups available"
                          sx={{
                            bgcolor: "rgba(255,255,255,0.03)",
                            border: "1px solid",
                            borderColor: "divider",
                          }}
                        />
                      </Stack>

                      <Typography variant="caption" color="text.secondary">
                        Typically replies within 24 hours • Clear pricing • No
                        spam
                      </Typography>
                    </Stack>
                  </Card>
                </Stack>
              </CardContent>
            </Grid>

            {/* RIGHT: image */}
            <Grid size={{ xs: 12, md: 5 }} order={{ xs: 0, md: 1 }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 420, sm: 460, md: "100%" },
                  minHeight: { md: 560 },
                  bgcolor: "background.default",
                }}
              >
                <Box
                  component="img"
                  src={imageSrc}
                  alt={fullName}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: { xs: "center 20%", md: "center" }, // ✅ sposta il focus verso l’alto
                    transform: { xs: "none", md: "scale(1.02)" },
                    backgroundColor: "background.default",
                  }}
                />

                {/* badge */}
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
                        boxShadow: "0 0 18px rgba(245,196,0,.25)",
                        flex: "0 0 auto",
                      }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 800 }}>
                      Personalised plans — built for real life.
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
