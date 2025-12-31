import React, { useState, useEffect } from 'react';
import { Fab, Zoom, Box, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useLocation } from 'react-router-dom';

interface StickyWhatsAppButtonProps {
  phoneNumber: string;
  defaultMessage: string;
}

const getContextualMessage = (pathname: string) => {
  switch (pathname) {
    case '/how-it-works':
      return "Hi! I saw 'How It Works' and want to learn more about JChats for my business.";
    case '/use-cases':
      return "Hi! I saw the Use Cases and want to discuss how JChats fits my business.";
    case '/pricing':
      return "Hi! I saw the pricing page. I do about [X] orders per month. What would my actual costs be?";
    case '/success-stories':
      return "Hi! I saw the success stories and want similar results. Let's talk!";
    case '/get-started':
      return "Hi! I want to start the onboarding process. When can we begin?";
    case '/faq':
      return "Hi! I have questions about JChats. Can we discuss?";
    default:
      return "Hi! I'd like to learn more about Jiaminie.";
  }
};

const StickyWhatsAppButton: React.FC<StickyWhatsAppButtonProps> = ({ phoneNumber, defaultMessage }) => {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contextualMessage = getContextualMessage(location.pathname);
  const message = contextualMessage || defaultMessage;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Zoom in={showButton}>
      <Fab
        color="primary"
        aria-label="whatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: { xs: 0, md: '50%' },
          left: { xs: 0, md: 24 },
          width: { xs: '100%', md: 56 },
          height: { xs: 56, md: 56 },
          borderRadius: { xs: 0, md: 0 },
          zIndex: 1200,
          backgroundColor: '#25D366',
          '&:hover': {
            backgroundColor: '#1DA851',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: { xs: 'row', md: 'column' } }}>
          <WhatsAppIcon sx={{ mr: { xs: 1, md: 0 } }} />
          <Typography variant="button" sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }}>
            WhatsApp Us
          </Typography>
        </Box>
      </Fab>
    </Zoom>
  );
};

export default StickyWhatsAppButton;