import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import profilePhoto from "../../../../assets/images/expert/expert.jpg";

export type MeetOurExpertProps = {
  title?: string;
  subtitle?: string;
  fullName: string;
  role: string;
  bioShort?: string;
  registerId?: string;
  bullets?: string[];
  photoUrl?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  className?: string;
};

const MeetOurExpert: React.FC<MeetOurExpertProps> = ({
  fullName,
  role,
  bioShort = "Nutritionist focused on body recomposition, habit building and long-term adherence — no extreme plans, no guesswork.",
  bullets = [
    "Initial assessment & lifestyle review",
    "Flexible, personalised meal plan",
    "Quick recipes + ready-to-use grocery list",
    "Follow-ups, adjustments and ongoing support",
  ],
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
        <Stack
          spacing={1}
          alignItems="center"
          textAlign="center"
          sx={{ mb: 3 }}
        >

          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            Meet the professional guiding your journey
          </Typography>

        </Stack>

        <Card variant="softBorder" sx={{ overflow: "hidden" }}>
          <Grid container>
            <Grid size={{ xs: 12, md: 7 }}>
              <CardContent sx={{ p: { xs: 2.25, sm: 3.25 } }}>
                <Stack spacing={2.25}>
                  <Stack direction="row" spacing={1.5} alignItems="center">

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

                      </Stack>

                      <Typography variant="body2" color="text.secondary">
                        {role}
                      </Typography>
                    </Box>
                  </Stack>

                  {(bioShort) && (
                    <Stack spacing={1.25}>
                      {bioShort && (
                        <Typography
                          color="text.secondary"
                          sx={{ maxWidth: 680 }}
                        >
                          {bioShort}
                        </Typography>
                      )}
                    </Stack>
                  )}

                  <Divider sx={{ borderColor: "divider" }} />

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
                </Stack>
              </CardContent>
            </Grid>
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
                    objectPosition: { xs: "center 20%", md: "center" }, 
                    transform: { xs: "none", md: "scale(1.02)" },
                    backgroundColor: "background.default",
                  }}
                />

              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default MeetOurExpert;
