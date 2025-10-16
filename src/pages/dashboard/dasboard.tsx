import React from 'react'
import { Box, Container } from '@mui/material'
import Header from './components/header/header'
import Footer from './components/footer/footer'

const Dashboard: React.FC = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Container component="main" sx={{ flex: 1, py: 2 }}>
        Dashboard
      </Container>
      <Footer />
    </Box>
  )
}
export default Dashboard
