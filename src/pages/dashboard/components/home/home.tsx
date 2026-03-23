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
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MeetOurExperts from "../meetOurExperts/meetOurExperts";
import FaqSection from "../faq/faqSection";
import TestimonialsSection from "../testimonial/testimonialSection";
import FloatingContacts from "../floatingContacts/FloatingContacts";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import heroImg from "../../../../assets/images/hero/hero-nutrition.jpg";
import NutritionPlan from "../nutritionalPlan/nutritionalPlan";
import SeminarEnquirySection from "../seminarEnquirySection/seminarEnquirySection";
import seminarImg from "../../../../assets/images/hero/seminar.jpg";

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
    title: "Choose your plan",
    subtitle: "Pick a plan that matches your goal",
    Icon: RestaurantMenuIcon,
    targetId: "plans",
  },
  {
    id: "expert",
    title: "Meet your Expert",
    subtitle: "Meet Davide UK Registered Nutritionist",
    Icon: PersonSearchIcon,
    targetId: "meet-expert",
  },
  {
    id: "testimonials",
    title: "Testimonials",
    subtitle: "Real stories and real results",
    Icon: EmojiEventsIcon,
    targetId: "testimonials",
  },
  {
    id: "faq",
    title: "Frequently Asked Questions",
    subtitle: "Frequently Asked Questions",
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

      <Container
        maxWidth={false}
        sx={{ width: "min(1100px, 96%)", mx: "auto" }}
      >
        <Card variant="plain" sx={{ p: { xs: 2, sm: 3 } }}>
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack
                spacing={2}
                alignItems={{ xs: "center", md: "flex-start" }}
                textAlign={{ xs: "center", md: "left" }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "'montserrat', sans-serif",
                    color: "#F5C400",
                  }}
                >
                  Davide Nutrition
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{ maxWidth: 650, fontWeight: "bold", color: "#F5C400" }}
                >
                  practical nutrition for athletes, gym-goers , active
                  individuals, and complete beginners
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: "italic" }}
                >
                  If you want to change your body, build better habits, and feel
                  confident with food, you’re in the right place. Whether you’re
                  just getting started or training hard already, we’ll build a
                  plan that fits your life and gets results.
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Card variant="darkBorder" sx={{ overflow: "hidden" }}>
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 260, sm: 320, md: 360 },
                    bgcolor: "background.default",
                  }}
                >
                  <Box
                    component="img"
                    src={heroImg}
                    alt="Combat-sport nutrition coaching"
                    loading="lazy"
                    decoding="async"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      filter: "contrast(1.05) saturate(0.95)",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.70) 100%)",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      left: 14,
                      right: 14,
                      bottom: 14,
                      p: 1.1,
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor: "divider",
                      bgcolor: "rgba(12,12,12,0.65)",
                      backdropFilter: "blur(10px)",
                      opacity: 0.5,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 800 }}>
                      Built for performance & real life.
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Training-focused nutrition support
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3.5 }}>
            <Grid container spacing={2}>
              {FEATURES.map(({ id, title, subtitle, Icon, targetId }) => (
                <Grid key={id} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Card
                    variant="plain"
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
                        <Stack
                          spacing={1.25}
                          alignItems="center"
                          textAlign="center"
                        >
                          <Box
                            sx={{
                              width: 56,
                              height: 56,
                              display: "grid",
                              placeItems: "center",
                              borderRadius: 3,
                              border: "2px solid",
                              borderColor: "#F5C400",
                              bgcolor: "rgba(245,196,0,.06)",
                            }}
                          >
                            <Icon
                              sx={{ fontSize: 28, color: "primary.main" }}
                            />
                          </Box>

                          <Typography color="#F5C400" 
                            sx={{ fontWeight: 900, }}
                          >
                            {title}
                          </Typography>

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
          </Box>
        </Card>
      </Container>

      <Box id="meet-expert" sx={{ mt: { xs: 2, md: 3 }, scrollMarginTop: 96 }}>
        <MeetOurExperts
          fullName="Davide Maltagliati"
          role="UK Registered Nutritionist"
          bioShort="Davide is a Registered Associate Nutritionist (ANutr) and Human Nutrition graduate, experienced in weight management and sports nutrition. He supports athletes, gym-goers, active individuals, and complete beginners using practical nutrition strategies that fit real life and drive real results.
          He also specialises in combat sports nutrition, helping fighters fuel training, manage weight safely, and perform at their best throughout camp and competition.
          Davide has worked with
          European and Intercontinental
          Muay Thai and kickboxing
          champions, bringing elite-level
          experience into a tailored plan
          built around your goals."
          photoUrl="/images/davide.jpg"
          ctaPrimaryText="Book a consultation"
          ctaSecondaryText="Message me on WhatsApp"
          onPrimary={() => console.log("book")}
        />
      </Box>

      <Box id="plans" sx={{ mt: { xs: 2, md: 3 }, scrollMarginTop: 96 }}>
        <NutritionPlan />
      </Box>
      <Box id="testimonials" sx={{ mt: { xs: 2, md: 3 }, scrollMarginTop: 96 }}>
        <TestimonialsSection />
      </Box>

      <Box id="faq" sx={{ mt: { xs: 2, md: 3 }, scrollMarginTop: 96 }}>
        <FaqSection />
      </Box>

      <Box sx={{ mt: { xs: 2, md: 3 } }}>
        <SeminarEnquirySection
          id="seminar"
          imageSrc={seminarImg}
          onSubmit={(values) => {
            console.log(values);
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
