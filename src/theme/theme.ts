import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#25D366', // WhatsApp Green
      light: '#4ADE80',
      dark: '#1DA851',
      contrastText: '#000000',
    },
    secondary: {
      main: '#1F1F1F',
      light: '#404040',
      dark: '#000000',
      contrastText: '#F5F5F5',
    },
    background: {
      default: '#0A0A0A',
      paper: '#141414',
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#A0A0A0',
      disabled: '#666666',
    },
    grey: {
      900: '#0A0A0A',
      800: '#141414',
      700: '#1F1F1F',
      600: '#2A2A2A',
      500: '#666666',
      400: '#A0A0A0',
      300: '#D1D1D1',
      200: '#E5E5E5',
      100: '#F5F5F5',
    },
    success: {
      main: '#25D366',
      light: '#4ADE80',
      dark: '#1DA851',
    },
    error: {
      main: '#EF4444',
      light: '#F87171',
      dark: '#DC2626',
    },
    warning: {
      main: '#F59E0B',
      light: '#FBB040',
      dark: '#D97706',
    },
    info: {
      main: '#3B82F6',
      light: '#60A5FA',
      dark: '#2563EB',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
      textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1.125rem', // 18px - Large body text
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '1rem', // 16px - Regular body text
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    button: {
      fontSize: '1.125rem', // 18px
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          fontWeight: 600,
          padding: '16px 32px',
          fontSize: '1.125rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        containedPrimary: {
          backgroundColor: '#25D366',
          color: '#000000',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
          '&:hover': {
            backgroundColor: '#4ADE80',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderColor: '#25D366',
          color: '#25D366',
          '&:hover': {
            borderWidth: '2px',
            borderColor: '#4ADE80',
            backgroundColor: 'rgba(37, 211, 102, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#141414',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: 0,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
            transform: 'translateY(-4px)',
            borderColor: 'rgba(37, 211, 102, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(16px)',
          color: '#F5F5F5',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(37, 211, 102, 0.1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: 600,
          backgroundColor: '#1F1F1F',
          color: '#F5F5F5',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#141414',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.1)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(37, 211, 102, 0.3)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#25D366',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#25D366',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0A0A0A',
          borderLeft: '1px solid rgba(37, 211, 102, 0.1)',
        },
      },
    },
  },
});