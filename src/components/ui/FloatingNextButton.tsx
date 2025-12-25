import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useLocation, useNavigate } from 'react-router-dom';

interface FloatingNextButtonProps {}

const getNextRoute = (pathname: string): string | null => {
  switch (pathname) {
    case '/how-it-works':
      return '/use-cases';
    case '/use-cases':
      return '/pricing';
    case '/pricing':
      return '/success-stories';
    case '/success-stories':
      return '/get-started';
    case '/get-started':
      return '/faq';
    case '/faq':
      return null;
    default:
      return null;
  }
};

const FloatingNextButton: React.FC<FloatingNextButtonProps> = () => {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = document.documentElement.scrollHeight * 0.5; // 50% scroll
      if (window.scrollY > scrollThreshold) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextRoute = getNextRoute(location.pathname);

  if (!nextRoute) {
    return null; // Don't show button if there's no next page
  }

  const handleClick = () => {
    navigate(nextRoute);
  };

  return (
    <Zoom in={showButton}>
      <Fab
        color="primary"
        aria-label="next page"
        sx={{
          position: 'fixed',
          bottom: 80,
          right: 24,
          zIndex: 1100, // Below WhatsApp button
        }}
        onClick={handleClick}
      >
        <ArrowForwardIcon />
      </Fab>
    </Zoom>
  );
};

export default FloatingNextButton;