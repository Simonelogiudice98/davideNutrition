import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { alpha, useTheme, type SxProps, type Theme } from "@mui/material/styles";

type SeminarEnquiryValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

type SeminarEnquirySectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  onSubmit?: (values: SeminarEnquiryValues) => void | Promise<void>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SeminarEnquirySection({
  id = "general-enquiry",
  title = "General Enquiry",
  subtitle = `We also deliver evidence-based nutrition seminars for gyms, sporting organisations, teams, and corporate groups. Sessions are tailored to the audience and grounded in practical strategies that can be immediately applied. For seminar and speaking enquiries, please get in touch below.`,
  imageSrc,
  imageAlt = "Seminar photo",
  onSubmit,
}: SeminarEnquirySectionProps) {
  const theme = useTheme();


  const [values, setValues] = React.useState<SeminarEnquiryValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [touched, setTouched] = React.useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = React.useState(false);

  const setField =
    (k: keyof SeminarEnquiryValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [k]: e.target.value }));
    };

  const markTouched = (k: keyof SeminarEnquiryValues) => () =>
    setTouched((t) => ({ ...t, [k]: true }));

  const errors = React.useMemo(() => {
    const e: Partial<Record<keyof SeminarEnquiryValues, string>> = {};
    if (!values.firstName.trim()) e.firstName = "Required";
    if (!values.lastName.trim()) e.lastName = "Required";
    if (!values.email.trim()) e.email = "Required";
    else if (!EMAIL_RE.test(values.email)) e.email = "Invalid email";
    if (!values.phone.trim()) e.phone = "Required";
    if (!values.message.trim()) e.message = "Required";
    return e;
  }, [values]);

  const hasErrors = Object.keys(errors).length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      message: true,
    });

    if (hasErrors) return;

    try {
      setSubmitting(true);
      await onSubmit?.(values);

      setValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setTouched({});
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        scrollMarginTop: 96,
        position: "relative",        
      }}
    >
      <Container maxWidth={false} sx={{ width: "min(1100px, 96%)", mx: "auto" }}>

        <Card
          variant="strongBorder"
          sx={{
            width: "min(980px, 100%)",
            mx: "auto",
            overflow: "hidden",
            borderRadius: 0,
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={2.2}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 950,
                        letterSpacing: -0.4,
                        color: "#fff",
                      }}
                    >
                      {title}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1.2,
                        maxWidth: 520,
                        color: alpha("#fff", 0.9),
                      }}
                    >
                      {subtitle}
                    </Typography>
                  </Box>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={1.6}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          value={values.firstName}
                          onChange={setField("firstName")}
                          onBlur={markTouched("firstName")}
                          placeholder="First Name"
                          fullWidth
                          variant="filled"
                          error={!!(touched.firstName && errors.firstName)}
                          helperText={touched.firstName ? errors.firstName : " "}
                          InputProps={{ disableUnderline: true }}
                          sx={fieldSx(theme)}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          value={values.lastName}
                          onChange={setField("lastName")}
                          onBlur={markTouched("lastName")}
                          placeholder="Last Name"
                          fullWidth
                          variant="filled"
                          error={!!(touched.lastName && errors.lastName)}
                          helperText={touched.lastName ? errors.lastName : " "}
                          InputProps={{ disableUnderline: true }}
                          sx={fieldSx(theme)}
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          value={values.email}
                          onChange={setField("email")}
                          onBlur={markTouched("email")}
                          placeholder="Enter your email"
                          fullWidth
                          variant="filled"
                          error={!!(touched.email && errors.email)}
                          helperText={touched.email ? errors.email : " "}
                          InputProps={{ disableUnderline: true }}
                          sx={fieldSx(theme)}
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          value={values.phone}
                          onChange={setField("phone")}
                          onBlur={markTouched("phone")}
                          placeholder="Phone Number (Please Include Country Code)"
                          fullWidth
                          variant="filled"
                          error={!!(touched.phone && errors.phone)}
                          helperText={touched.phone ? errors.phone : " "}
                          InputProps={{ disableUnderline: true }}
                          sx={fieldSx(theme)}
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          value={values.message}
                          onChange={setField("message")}
                          onBlur={markTouched("message")}
                          placeholder="Add any information for your enquiry here..."
                          fullWidth
                          variant="filled"
                          multiline
                          minRows={4}
                          error={!!(touched.message && errors.message)}
                          helperText={touched.message ? errors.message : " "}
                          InputProps={{ disableUnderline: true }}
                          sx={fieldSx(theme)}
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          disabled={submitting}
                          sx={{
                            px: 3,
                            py: 1.2,
                            borderRadius: 999,
                            fontWeight: 900,
                            alignSelf: "flex-start",
                          }}
                        >
                          {submitting ? "Sending..." : "Submit Form"}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 440,
                    ml: { md: "auto" },
                    mx: { xs: "auto", md: 0 },
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 0,
                    border: "1px solid",
                    borderColor: alpha("#fff", 0.1),
                    boxShadow: "0 18px 70px rgba(0,0,0,.45)",
                    height: { xs: 260, sm: 320, md: 380 },
                    backgroundColor: "background.default",
                  }}
                >
                  <Box
                    component="img"
                    src={imageSrc}
                    alt={imageAlt}
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
                      pointerEvents: "none",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

function fieldSx(theme: Theme): SxProps<Theme> {
  const brand = theme.palette.primary.main;

  return {
    "& .MuiFilledInput-root": {
      backgroundColor: "#fff",
      borderRadius: 0,
      overflow: "hidden",
      border: `1px solid ${alpha("#000", 0.08)}`,
      transition:
        "transform .15s ease, box-shadow .15s ease, border-color .15s ease",
      "&:hover": { borderColor: alpha(brand, 0.35) },
      "&.Mui-focused": {
        borderColor: alpha(brand, 0.55),
        boxShadow: `0 10px 26px ${alpha("#000", 0.25)}, 0 0 0 2px ${alpha(
          brand,
          0.18
        )}`,
      },
      "&:before, &:after": { display: "none" },


      "& input:-webkit-autofill, & textarea:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px #fff inset",
        WebkitTextFillColor: "#111",
        caretColor: "#111",
        borderRadius: 0,
        transition: "background-color 9999s ease-out 0s",
      },
      "& input:-webkit-autofill:focus, & textarea:-webkit-autofill:focus": {
        WebkitBoxShadow: "0 0 0 1000px #fff inset",
      },
    },

    "& input, & textarea": { color: "#111", fontWeight: 700 },
    "& .MuiFormHelperText-root": { marginLeft: 0, opacity: 0.85 },
  };
}
