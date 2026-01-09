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
} from "@mui/material";

import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TimerIcon from "@mui/icons-material/Timer";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

type Benefit = {
  title: string;
  text: string;
  Icon: React.ElementType;
};

const BENEFITS: Benefit[] = [
  {
    title: "Personalised meal plan",
    text: "Built around your goals, preferences and routine (work, training, family).",
    Icon: RestaurantMenuIcon,
  },
  {
    title: "Smart grocery list",
    text: "A ready-to-use weekly list with quick swaps and budget-friendly options.",
    Icon: ShoppingCartIcon,
  },
  {
    title: "Fast recipes",
    text: "15–30 min meals with vegetarian and gluten-free alternatives.",
    Icon: TimerIcon,
  },
  {
    title: "Real progress tracking",
    text: "Check-ins and adjustments—no “see you in 6 months”.",
    Icon: QueryStatsIcon,
  },
];

type Step = { n: number; title: string; text: string; accent?: boolean };

const STEPS: Step[] = [
  {
    n: 1,
    title: "Initial assessment",
    text: "We review lifestyle, goals, food preferences and any clinical needs.",
  },
  {
    n: 2,
    title: "Your nutrition plan",
    text: "A flexible plan plus practical guidelines: what to eat, when, and how much.",
  },
  {
    n: 3,
    title: "Follow-ups & tweaks",
    text: "We track progress and adjust—no rigid “one-size-fits-all” approach.",
  },
  {
    n: 4,
    title: "Ongoing support",
    text: "Quick answers to real-life questions so you stay consistent without stress.",
    accent: true,
  },
];

const WhatYouGetSection: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth={false} sx={{ width: "min(1100px, 96%)", mx: "auto" }}>
        {/* Wrapper “premium” (niente border/shadow nel Container) */}
        <Card variant="strongBorder" sx={{ p: { xs: 2, sm: 3 } }}>
          {/* Header */}
          <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: 3 }}>
            <Chip
              label="What you get"
              sx={{
                bgcolor: "transparent",
                border: "1px solid",
                borderColor: "divider",
                color: "primary.main",
                fontWeight: 900,
              }}
            />

            <Typography variant="h3" sx={{ fontWeight: 900 }}>
              A clear plan you can actually stick to
            </Typography>

            <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
              Not “just a diet”. You’ll get a practical method to improve habits,
              keep your social life, and make progress sustainably.
            </Typography>
          </Stack>

          {/* Content */}
          <Grid container spacing={3} alignItems="stretch">
            {/* LEFT: steps */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card variant="plain" sx={{ height: "100%" }}>
                <Stack spacing={2}>
                  {/* Steps panel */}
                  <Card variant="darkBorder">
                    <CardContent sx={{ p: { xs: 2, sm: 2.25 } }}>
                      <Stack spacing={1.5}>
                        {STEPS.map((s, idx) => (
                          <React.Fragment key={s.n}>
                            <Stack direction="row" spacing={2} alignItems="flex-start">
                              <Box
                                sx={{
                                  width: 30,
                                  height: 30,
                                  borderRadius: 999,
                                  display: "grid",
                                  placeItems: "center",
                                  fontWeight: 900,
                                  border: "1px solid",
                                  borderColor: s.accent ? "primary.main" : "divider",
                                  color: s.accent ? "primary.main" : "text.primary",
                                  bgcolor: s.accent ? "rgba(245,196,0,.08)" : "transparent",
                                  flex: "0 0 auto",
                                  mt: "2px",
                                }}
                              >
                                {s.n}
                              </Box>

                              <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Typography sx={{ fontWeight: 900 }}>
                                  {s.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {s.text}
                                </Typography>
                              </Box>
                            </Stack>

                            {idx !== STEPS.length - 1 && (
                              <Divider sx={{ borderColor: "divider", ml: 5.5 }} />
                            )}
                          </React.Fragment>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>

                  {/* CTA row */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.25}
                    alignItems={{ sm: "center" }}
                    justifyContent="space-between"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={() =>
                        document.getElementById("meet-expert")?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        })
                      }
                      sx={{ flexShrink: 0 }}
                    >
                      Book your first visit
                    </Button>

                    <Typography variant="caption" color="text.secondary">
                      Typically replies within 24 hours • Online & in-person
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
            </Grid>

            {/* RIGHT: benefits */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={2}>
                {BENEFITS.map(({ title, text, Icon }) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={title}>
                    <Card
                      variant="darkBorder"
                      sx={{
                        height: "100%",
                        transition: "transform .18s ease, border-color .18s ease",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <CardContent sx={{ p: { xs: 2, sm: 2.25 } }}>
                        <Stack spacing={1.25}>
                          <Box
                            sx={{
                              width: 48,
                              height: 48,
                              display: "grid",
                              placeItems: "center",
                              borderRadius: 3,
                              border: "1px solid",
                              borderColor: "divider",
                              bgcolor: "rgba(245,196,0,.06)",
                            }}
                          >
                            <Icon sx={{ fontSize: 24, color: "primary.main" }} />
                          </Box>

                          <Typography sx={{ fontWeight: 900 }}>{title}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {text}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default WhatYouGetSection;
