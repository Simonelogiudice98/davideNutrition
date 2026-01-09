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
];

const FaqSection: React.FC = () => {
  const [expanded, setExpanded] = React.useState<number | false>(0);

  const handleChange =
    (panelIndex: number) => (_: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panelIndex : false);

  return (
    <Box component="section" id="faq" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth={false} sx={{ width: "min(1100px, 96%)", mx: "auto" }}>
        {/* Header */}
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
            Quick answers to the most common questions about visits, plans and follow-ups.
          </Typography>
        </Stack>

        {/* Content */}
        <Card variant="strongBorder" sx={{ p: 4 }}>
          <Stack spacing={1.25}>
            {FAQS.map((item, i) => (
              <Accordion
                key={i}
                expanded={expanded === i}
                onChange={handleChange(i)}
                sx={{
                  // un filo più “premium” rispetto al default:
                  "& .MuiAccordionSummary-root": { px: { xs: 2, sm: 2.25 }, py: 1.25 },
                  "& .MuiAccordionDetails-root": { px: { xs: 2, sm: 2.25 }, pb: 2 },
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
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {item.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}

            {/* Footer CTA */}
            <Box
              sx={{
                mt: 1,
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

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="/contact"
                  sx={{ flexShrink: 0 }}
                >
                  Contact
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};

export default FaqSection;
