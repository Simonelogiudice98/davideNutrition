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
import VerifiedIcon from "@mui/icons-material/Verified";

import fighter1 from "../../../../assets/images/testimonials/fighter_1.jpg";
import fighter2 from "../../../../assets/images/testimonials/fighter_2.jpg";
import fighter3 from "../../../../assets/images/testimonials/fighter_3.jpg";

export type TestimonialType = "client" | "expert";

export type Testimonial = {
  type?: TestimonialType;
  name: string;
  subtitle?: string; 
  text: string;
  rating?: number; 
  initials?: string;
  photoUrl?: string;
  tag?: string; 
};

const defaultTestimonials: Testimonial[] = [
  {
    type: "client",
    name: "Alex M.",
    subtitle: "Pro fighter • Lightweight",
    text: "Simple, structured and easy to follow. Weight cut was smoother, energy stayed high, and performance improved without extremes.",
    rating: 5,
    initials: "AM",
    photoUrl: fighter3,
    tag: "Pro Fighter",
  },
  {
    type: "client",
    name: "Sara K.",
    subtitle: "Kickboxing athlete",
    text: "The plan fits real training weeks. Clear targets, quick meals, and adjustments when schedule changes—no stress, just consistency.",
    rating: 5,
    initials: "SK",
    photoUrl: fighter2,
    tag: "Combat Sports",
  },
  {
    type: "client",
    name: "Marco D.",
    subtitle: "MMA athlete",
    text: "Follow-ups make the difference. We adapted macros and timing around sessions and the results came fast—strength, recovery, focus.",
    rating: 5,
    initials: "MD",
    photoUrl: fighter1,
    tag: "MMA",
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

function PhotoHeader({ t }: { t: Testimonial }) {
  const isExpert = t.type === "expert";

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        aspectRatio: "16 / 10",
        bgcolor: "rgba(255,255,255,0.03)",
      }}
    >
      {t.photoUrl ? (
        <Box
          component="img"
          src={t.photoUrl}
          alt={t.name}
          loading="lazy"
          decoding="async"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 25%",
            display: "block",
            filter: "contrast(1.05) saturate(0.95)",
          }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(600px 240px at 30% 20%, rgba(245,196,0,.10), transparent 60%)",
          }}
        />
      )}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {(t.tag || isExpert) && (
        <Box sx={{ position: "absolute", top: 10, left: 10 }}>
          <Chip
            size="small"
            label={isExpert ? "Expert" : t.tag}
            sx={{
              bgcolor: "rgba(12,12,12,0.65)",
              border: "1px solid",
              borderColor: "divider",
              color: "text.primary",
              backdropFilter: "blur(10px)",
              fontWeight: 900,
            }}
          />
        </Box>
      )}

      <Box sx={{ position: "absolute", left: 12, right: 12, bottom: 12 }}>
        <Stack direction="row" spacing={1.25} alignItems="center">
          <Avatar
            src={t.photoUrl}
            alt={t.name}
            sx={{
              width: 40,
              height: 40,
              bgcolor: "rgba(245,196,0,.10)",
              color: "primary.main",
              fontWeight: 900,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            {getInitials(t)}
          </Avatar>

          <Box sx={{ minWidth: 0 }}>
            <Stack direction="row" spacing={0.75} alignItems="center" flexWrap="wrap">
              <Typography sx={{ fontWeight: 900, lineHeight: 1.1 }}>
                {t.name}
              </Typography>

              {isExpert && (
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    px: 1,
                    py: 0.25,
                    borderRadius: 999,
                    border: "1px solid",
                    borderColor: "divider",
                    bgcolor: "rgba(245,196,0,.06)",
                    color: "primary.main",
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  <VerifiedIcon sx={{ fontSize: 14 }} />
                  Verified
                </Box>
              )}
            </Stack>

            {t.subtitle && (
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.72)" }}>
                {t.subtitle}
              </Typography>
            )}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default function TestimonialsSection({
  testimonials = defaultTestimonials,
}: {
  testimonials?: Testimonial[];
}) {
  return (
    <Box component="section" id="testimonials" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth={false} sx={{ width: "min(1100px, 96%)", mx: "auto" }}>
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
            Feedback from combat-sport athletes following a clear, sustainable and
            personalised approach.
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          {testimonials.slice(0, 3).map((t, idx) => (
            <Grid key={idx} size={{ xs: 12, md: 4 }}>
              <Card
                variant="darkBorder"
                sx={{
                  height: "100%",
                  transition: "transform .18s ease, border-color .18s ease",
                  "&:hover": { transform: "translateY(-3px)", borderColor: "primary.main" },
                }}
              >
                <CardContent sx={{ p: { xs: 2, sm: 2.25 }, height: "100%" }}>
                  <Stack spacing={1.5} sx={{ height: "100%" }}>
                    <PhotoHeader t={t} />

                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Stars value={t.rating ?? 5} />
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
                    </Stack>

                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.75 }}>
                      “{t.text}”
                    </Typography>

                    <Box sx={{ mt: "auto" }}>
                      <Typography variant="caption" color="text.secondary">
                        {t.type === "expert" ? "Nutrition professional" : "Athlete testimonial"}
                      </Typography>
                    </Box>
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
