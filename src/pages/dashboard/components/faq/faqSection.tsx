import React from "react";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

type Faq = { q: string; a: React.ReactNode };

const FAQS: Faq[] = [
  {
    q: "What should I expect from the nutrition consultation?",
    a: "A thorough initial assessment, clear goals and a personalised plan with practical guidelines. The focus is on sustainable habits—not a rigid “one-size-fits-all” diet.",
  },
  {
    q: "Who is this service for?",
    a: "Anyone looking to improve body composition, energy, performance or meal management. It can also be adapted to vegetarian/vegan and gluten-free needs.",
  },
  {
    q: "How long does the consultation last?",
    a: "Typically 45–60 minutes for the first appointment. Follow-ups are usually 20–30 minutes (depending on your case).",
  },
  {
    q: "Will I receive a plan after the visit?",
    a: "Yes. You’ll receive a personalised meal plan, a grocery list, quick recipes and actionable guidelines.",
  },
  {
    q: "Can I book follow-ups?",
    a: "Absolutely. Scheduled check-ins help track progress and make targeted adjustments over time.",
  },
  {
    q: "Is it suitable for clinical conditions?",
    a: "Yes, after an evaluation. When medical guidance is needed, we coordinate with your physician.",
  },

  {
    q: "Do you offer online consultations?",
    a: "Yes—online consultations are available. You’ll receive the same plan, resources and follow-ups as in-person visits.",
  },
  {
    q: "How do I book a consultation?",
    a: "You can book through the Contact page or message directly on WhatsApp. We’ll confirm availability and next steps.",
  },
];

const FaqSection: React.FC = () => {
  const [expanded, setExpanded] = React.useState<number | false>(0);

  const handleChange =
    (panelIndex: number) => (_: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panelIndex : false);

  return (
    <Box component="section" id="faq" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth={false} sx={{ width: "min(1100px, 96%)", mx: "auto" }}>
        <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: 3 }}>
          <Chip
            label="FAQ"
            sx={{
              bgcolor: "transparent",
              border: "1px solid",
              borderColor: "divider",
              color: "primary.main",
              fontWeight: 900,
            }}
          />
          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            Frequently asked questions
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
            Quick answers to common questions about visits, plans and follow-ups.
          </Typography>
        </Stack>

        <Card variant="softBorder" sx={{ p: { xs: 2, sm: 3 } }}>
          <Grid container spacing={1.25}>
            {FAQS.map((item, i) => (
              <Grid key={i} size={{ xs: 12, md: 6 }}>
                <Accordion
                  expanded={expanded === i}
                  onChange={handleChange(i)}
                  sx={{
                    transition: "border-color .18s ease, background-color .18s ease",
                    "&:hover": {
                      borderColor: "primary.main",
                      backgroundColor: "rgba(255,255,255,0.02)",
                    },
                    "& .MuiAccordionSummary-root": {
                      px: { xs: 2, sm: 2.25 },
                      py: 1.25,
                      cursor: "pointer",
                    },
                    "& .MuiAccordionDetails-root": {
                      px: { xs: 2, sm: 2.25 },
                      pb: 2,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === i ? (
                        <RemoveRoundedIcon sx={{ color: "primary.main" }} />
                      ) : (
                        <AddRoundedIcon sx={{ color: "primary.main" }} />
                      )
                    }
                    aria-controls={`faq-content-${i}`}
                    id={`faq-header-${i}`}
                  >
                    <Typography sx={{ fontWeight: 900 }}>{item.q}</Typography>
                  </AccordionSummary>

                  <AccordionDetails id={`faq-content-${i}`}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.75 }}
                    >
                      {item.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              mt: 2,
              p: { xs: 2, sm: 2.25 },
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "rgba(255,255,255,0.02)",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.25}
              alignItems={{ sm: "center" }}
              justifyContent="space-between"
            >
              <Box>
                <Typography sx={{ fontWeight: 900 }}>Still have questions?</Typography>
                <Typography variant="body2" color="text.secondary">
                  Send a message and we’ll get back to you as soon as possible.
                </Typography>
              </Box>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1} sx={{ flexShrink: 0 }}>
                <Button variant="contained" color="primary" size="large" href="/contact">
                  Contact
                </Button>

              </Stack>
            </Stack>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default FaqSection;
