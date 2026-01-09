import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export type Testimonial = {
  name: string;
  subtitle?: string; // e.g. "Body recomposition • 12 weeks"
  text: string;
  rating?: number; // 1..5
  initials?: string; // fallback avatar
};

const defaultTestimonials: Testimonial[] = [
  {
    name: "Martina R.",
    subtitle: "Body recomposition • 12 weeks",
    text: "Davide gave me a sustainable method: a flexible plan, quick recipes and crystal-clear guidance. I improved energy and body composition without a “punishing diet”.",
    rating: 5,
    initials: "MR",
  },
  {
    name: "Luca P.",
    subtitle: "Fat loss • 8 kg",
    text: "Consistent follow-ups and realistic adjustments. The best part is I can manage meals with work and a social life. Concrete results, zero anxiety.",
    rating: 5,
    initials: "LP",
  },
  {
    name: "Giulia S.",
    subtitle: "Nutrition education",
    text: "For the first time I understood what to eat and when—without extremes. The grocery list and practical alternatives made everything easier and I feel in control.",
    rating: 5,
    initials: "GS",
  },
];

function Stars({ value = 5 }: { value?: number }) {
  const v = Math.max(0, Math.min(5, value));
  return (
    <Stack direction="row" spacing={0.25} aria-label={`Rating: ${v} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          sx={{
            fontSize: 18,
            color: i < v ? "primary.main" : "rgba(255,255,255,0.18)",
          }}
        />
      ))}
    </Stack>
  );
}

const getInitials = (t: Testimonial) =>
  (
    t.initials ??
    t.name
      .split(" ")
      .slice(0, 2)
      .map((x) => x[0]?.toUpperCase())
      .join("")
  ).slice(0, 2) || "DN";

export default function TestimonialsSection({
  testimonials = defaultTestimonials,
}: {
  testimonials?: Testimonial[];
}) {
  return (
    <Box component="section" id="testimonials" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth={false} sx={{ width: "min(1100px, 96%)", mx: "auto" }}>
        {/* Header */}
        <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: 3 }}>
          <Chip
            label="Testimonials"
            sx={{
              bgcolor: "transparent",
              border: "1px solid",
              borderColor: "divider",
              color: "primary.main",
              fontWeight: 900,
            }}
          />

          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            Real stories. Real results.
          </Typography>

          <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
            Feedback from people who followed a clear, sustainable and personalised
            journey—built for real life.
          </Typography>
        </Stack>

        {/* Grid */}
        <Grid container spacing={2}>
          {testimonials.slice(0, 3).map((t, idx) => (
            <Grid key={idx} size={{ xs: 12, md: 4 }}>
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
                  <Stack spacing={1.5} sx={{ height: "100%" }}>
                    {/* Top row */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: 2.5,
                          display: "grid",
                          placeItems: "center",
                          border: "1px solid",
                          borderColor: "divider",
                          bgcolor: "rgba(245,196,0,.06)",
                        }}
                        aria-hidden="true"
                      >
                        <FormatQuoteIcon sx={{ color: "primary.main", fontSize: 20 }} />
                      </Box>

                      <Stars value={t.rating ?? 5} />
                    </Stack>

                    {/* Quote */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.75,
                      }}
                    >
                      “{t.text}”
                    </Typography>

                    {/* Footer */}
                    <Stack
                      direction="row"
                      spacing={1.25}
                      alignItems="center"
                      sx={{ pt: 0.5, mt: "auto" }}
                    >
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: "rgba(245,196,0,.10)",
                          color: "primary.main",
                          fontWeight: 900,
                          border: "1px solid",
                          borderColor: "divider",
                        }}
                        aria-hidden="true"
                      >
                        {getInitials(t)}
                      </Avatar>

                      <Box sx={{ minWidth: 0 }}>
                        <Typography sx={{ fontWeight: 900, lineHeight: 1.1 }}>
                          {t.name}
                        </Typography>
                        {t.subtitle && (
                          <Typography variant="body2" color="text.secondary">
                            {t.subtitle}
                          </Typography>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
