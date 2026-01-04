import React from "react";
import { Box, Container } from "@mui/material";

import Home from "./components/home/home";
import Header from "../header/header";
import Footer from "../footer/footer";

const Dashboard: React.FC = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Container component="main" sx={{ flex: 1, py: 2 }}>
        <Home />
      </Container>
      <Footer
        email="info@davide-nutrition.com"
        whatsappUrl="https://wa.me/39XXXXXXXXXX?text=Ciao%20Davide%2C%20vorrei%20prenotare"
        privacyHref="/privacy"
        cookiesHref="/cookies"
      />
    </Box>
  );
};
export default Dashboard;
