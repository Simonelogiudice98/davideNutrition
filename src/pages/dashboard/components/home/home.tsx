import React, { useCallback } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import WhatYouGetSection from "../whatYouGetSection/whatYouGetSection";
import MeetOurExperts from "../meetOurExperts/meetOurExperts";
import FaqSection from "../faq/faqSection";
import TestimonialsSection from "../testimonial/testimonialSection";
import FloatingContacts from "../floatingContacts/FloatingContacts";

type Feature = {
  id: string;
  title: string;
  subtitle: string;
  Icon: React.ElementType;
  targetId: string;
};

const FEATURES: Feature[] = [
  {
    id: "what",
    title: "What you get",
    subtitle: "Personalised plan, practical guidance, recipes and follow-ups",
    Icon: RestaurantMenuIcon,
    targetId: "what-you-get",
  },
  {
    id: "expert",
    title: "Meet your expert",
    subtitle: "Initial assessment and tailored goals",
    Icon: PersonSearchIcon,
    targetId: "meet-expert",
  },
  {
    id: "testimonials",
    title: "Testimonials",
    subtitle: "Real stories and real results",
    Icon: FormatQuoteIcon,
    targetId: "testimonials",
  },
  {
    id: "faq",
    title: "FAQ",
    subtitle: "Common questions about plans, visits and timelines",
    Icon: HelpOutlineIcon,
    targetId: "faq",
  },
];

const Home: React.FC = () => {
  const goTo = useCallback((id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Box className="home" sx={{ py: { xs: 3, md: 4 } }}>
      <FloatingContacts
        whatsapp="+39333111222"
        email="info@davidenutrition.it"
        message="Hi Davide! I'd love to know more about your consultations."
      />

      {/* HERO PANEL (4 quick cards) */}
      <Container
        maxWidth={false}
        sx={{
          width: "min(1100px, 96%)",
          mx: "auto",
        }}
      >
        <Card variant="plain" sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography
            variant="h3"
            textAlign="center"
            sx={{ mb: 6, fontWeight: 900 }}
          >
            Get in shape with smart nutrition
          </Typography>

          <Grid container spacing={2}>
            {FEATURES.map(({ id, title, subtitle, Icon, targetId }) => (
              <Grid key={id} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  variant="softBorder"
                  sx={{
                    height: "100%",
                    transition: "transform .18s ease, border-color .18s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      borderColor: "primary.main",
                    },
                    "&:focus-within": {
                      outline: "2px solid",
                      outlineColor: "primary.main",
                      outlineOffset: "2px",
                    },
                  }}
                >
                  <CardActionArea
                    onClick={() => goTo(targetId)}
                    sx={{ height: "100%" }}
                    aria-label={`Go to section: ${title}`}
                  >
                    <CardContent sx={{ height: "100%" }}>
                      <Stack spacing={1.25} alignItems="center" textAlign="center">
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            display: "grid",
                            placeItems: "center",
                            borderRadius: 3,
                            border: "1px solid",
                            borderColor: "divider",
                            bgcolor: "rgba(245,196,0,.06)",
                          }}
                        >
                          <Icon sx={{ fontSize: 28, color: "primary.main" }} />
                        </Box>

                        <Typography fontWeight={900}>{title}</Typography>

                        <Typography variant="body2" color="text.secondary">
                          {subtitle}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>

      {/* SECTIONS */}
      <Box
        id="what-you-get"
        sx={{ mt: { xs: 2, md: 3 }, scrollMarginTop: 96 }}
      >
        <WhatYouGetSection />
      </Box>

      <Box
        id="meet-expert"
        sx={{ mt: { xs: 2, md: 3 }, scrollMarginTop: 96 }}
      >
        <MeetOurExperts
          fullName="Davide Maltagliati"
          role="Registered Nutritionist"
          bioShort="Registered nutritionist specialising in nutrition education and body recomposition."
          studies="MSc in Nutrition Science — London"
          registerId="AA_12345"
          photoUrl="/images/davide.jpg"
          ctaPrimaryText="Book a consultation"
          ctaSecondaryText="Message me on WhatsApp"
          onPrimary={() => console.log("book")}
          onSecondary={() => console.log("whatsapp")}
        />
      </Box>

      <Box
        id="testimonials"
        sx={{ mt: { xs: 2, md: 3 }, scrollMarginTop: 96 }}
      >
        <TestimonialsSection />
      </Box>

      <Box id="faq" sx={{ mt: { xs: 2, md: 3 }, scrollMarginTop: 96 }}>
        <FaqSection />
      </Box>
    </Box>
  );
};

export default Home;
