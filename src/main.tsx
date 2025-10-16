import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import './i18n/i18n'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18n'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <CssBaseline />
      <App />
    </I18nextProvider>
  </StrictMode>,
)
