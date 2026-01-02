import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { HelmetProvider } from '@dr.pogodin/react-helmet'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import { theme } from './theme/theme'
import { NotificationProvider } from './hooks/useNotification'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)
