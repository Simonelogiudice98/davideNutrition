import * as React from "react";
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
import { alpha, useTheme } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

type Plan = {
  id: string;
  label: string;
  title: string;
  description: string;
  price: string;
  priceHint: string;
  suitableFor: string;
  features: string[];
  icon: React.ReactNode;
  featured?: boolean;
};

function PlanCard({ plan }: { plan: Plan }) {
  const theme = useTheme();
  const brand = theme.palette.primary.main;

  return (
    <Card
      variant={plan.featured ? "strongBorder" : "softBorder"}
      sx={{
        height: "100%",
        overflow: "hidden",
        position: "relative",
        borderRadius: 0,
        border: "1.5px solid #F5C400",
        transition:
          "transform .18s ease, box-shadow .18s ease, border-color .18s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          border: "1.5px solid #F5C400",
        },
      }}
    >
      <CardContent
        sx={{
          position: "relative",
          p: { xs: 3, sm: 4 },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Box
            sx={{
              width: 46,
              height: 46,
              borderRadius: 999,
              display: "grid",
              placeItems: "center",
              backgroundColor: alpha(brand, plan.featured ? 0.14 : 0.08),
              boxShadow: `0 10px 26px ${alpha("#000", 0.35)}`,
              border: `1px solid #F5C400 `,
            }}
          >
            {plan.icon}
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 950,
                letterSpacing: -0.4,
                textTransform: "uppercase",
                color: "#F5C400"
              }}
            >
              {plan.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, opacity: 0.85, maxWidth: 420, mx: "auto" }}
            >
              {plan.description}
            </Typography>
          </Box>

          <Box sx={{ pt: 1 }}>
            <Typography
              sx={{
                fontSize: 46,
                lineHeight: 1.0,
                fontWeight: 950,
                letterSpacing: -1,
              }}
            >
              {plan.price}
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.75 }}>
              {plan.priceHint}
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Stack spacing={1.2} sx={{ flex: 1 }}>
          {plan.features.map((f) => (
            <Stack
              key={f}
              direction="row"
              spacing={1.2}
              sx={{
                justifyContent: "center",
                alignItems: "flex-start",
                textAlign: "left",
              }}
            >
              <CheckCircleIcon sx={{ mt: "2px", fontSize: 18, opacity: 0.9 }} />
              <Typography variant="body2" sx={{ opacity: 0.92 }}>
                {f}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" sx={{ opacity: 0.75, mb: 1 }}>
            <b>Suitable for:</b> {plan.suitableFor}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}




export default function NutritionPlan() {
  const theme = useTheme();
  const brand = theme.palette.primary.main;

  const plans: Plan[] = [
    {
      id: "weight",
      label: "Body Recomp",
      title: "Weight Management",
      description:
        "Supports your Weight loss/Body Recomposition journey",
      price: "160€",
      priceHint: "Program package",
      suitableFor:
        "Beginners getting into fitness, Gym-goers aiming for fat loss or body recomposition, Busy people who want structure without extremes",
      icon: <FitnessCenterIcon sx={{ color: brand }} />,
      features: [
        "First consultation/assessment (45 minutes)",
        "Nutritional plan (delivered within 7 days)",
        "Grocery Shopping List",
        "Weekly WhatsApp correspondence",
        "Two free follow-ups at 4 and 8 weeks (30 minutes each)" ,
      ],
    },
    {
      id: "proam",
      label: "Performance Support",
      title: "Pro / Amateur Athlete",
      description:
        "Performance nutrition for endurance & hybrid athletes — fueling, recovery, and race-day execution.",
      price: "180€",
      priceHint: "Program package",
      suitableFor: "Hyrox, Marathon runners, endurance & hybrid training",
      icon: <DirectionsRunIcon sx={{ color: brand }} />,
      features: [
        "Goal setting + training routine review",
        "Fueling strategy (pre/intra/post workout)",
        "Weekly plan updates based on training load",
        "Recovery and sleep-support guidelines",
        "Race-week or event protocol (if applicable)",
        "Check-ins and adjustments to keep progress steady",
      ],
    },
    {
      id: "combat",
      label: "Fight Camp Support",
      title: "Combat Sport Athlete",
      description:
        "Full fight-camp support: weight cut strategy, weigh-in protocol and performance-focused nutrition.",
      price: "240€",
      priceHint: "Covers up to 8 weeks",
      suitableFor: "MMA, Boxing, Kickboxing, Grappling",
      icon: <SportsMmaIcon sx={{ color: brand }} />,
      featured: true,
      features: [
        "Initial assessment + targets for fight camp",
        "Weekly tailored nutrition plan (training + rest days)",
        "Supplement & heat acclimation protocol (if needed)",
        "Custom weight-cut plan + water/sodium strategy",
        "Weigh-in + refuel protocol to perform at your best",
        "Post-fight recovery nutrition & adjustments",
        "Weekly check-ins and plan refinement",
      ],
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1.2} sx={{ mb: { xs: 4, md: 6 }, textAlign: "center" }}>
          <Typography
            variant="h3"
            color="#F5C400"
            sx={{ fontWeight: 950, letterSpacing: -0.6 }}
          >
            Choose your Nutrition Plan
          </Typography>
          <Typography sx={{ opacity: 0.8, mx: "auto" }}>
            Pick the nutrition path that suits your goals. All consultations are
            held online until further notice
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {plans.map((p) => (
            <Grid key={p.id} size={{ xs: 12, sm: 4 }}>
              <PlanCard plan={p} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
