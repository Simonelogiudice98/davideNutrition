import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

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
  onPrimary,
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
          <Typography variant="h3" sx={{ fontWeight: 900, color: "#F5C400" }}>
            Meet the professional guiding your journey
          </Typography>
        </Stack>

        <Card variant="softBorder" sx={{ overflow: "hidden" }}>
          <Grid container>
            <Grid size={{ xs: 12, md: 7 }}>
              <CardContent sx={{ p: { xs: 2.25, sm: 3.25 } }}>
                <Stack spacing={2.25}>
                  {/* Nome e ruolo */}
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontWeight: 900,
                          fontSize: { xs: 18, sm: 22 },
                          lineHeight: 1.1,
                          color: "#F5C400",
                        }}
                      >
                        {fullName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {role}
                      </Typography>
                    </Box>
                  </Stack>

                  {/* Bio */}
                  {bioShort && (
                    <Typography color="text.secondary" sx={{ maxWidth: 680 }}>
                      {bioShort}
                    </Typography>
                  )}

                  <Divider sx={{ borderColor: "divider" }} />

                  <Typography color="text.secondary" sx={{ maxWidth: 680 }}>
                    The next step is simple!{" "}
                    <Box
                      component="span"
                      sx={{ color: "#F5C400", fontWeight: 700 }}
                    >
                      Schedule a FREE INTRODUCTORY CALL
                    </Box>{" "}
                    by clicking on the "Book Now" button below and map out your
                    nutrition plan.
                  </Typography>

                  <Button
                    variant="contained"
                    onClick={onPrimary}
                    sx={{
                      bgcolor: "#F5C400",
                      color: "#000",
                      fontWeight: 800,
                      px: 4,
                      py: 1.2,
                      borderRadius: 2,
                      width: "fit-content",
                      textTransform: "none",
                      fontSize: 15,
                      "&:hover": {
                        bgcolor: "#d4a900",
                      },
                    }}
                  >
                    Book Now
                  </Button>
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
