import React from 'react'
import { Box, Container } from '@mui/material'

import Home from './components/home/home'
import Header from '../header/header'
import Footer from '../footer/footer'

const Dashboard: React.FC = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Container component="main" sx={{ flex: 1, py: 2 }}>
        <Home />
      </Container>
      <Footer />
    </Box>
  )
}
export default Dashboard
