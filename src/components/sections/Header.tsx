import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Close as CloseIcon 
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import WhatsAppButton from '../ui/WhatsAppButton';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const drawer = (
    <Box sx={{ width: 250, pt: 2, height: '100%', bgcolor: 'background.default' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem 
            key={item.label}
            component={RouterLink}
            to={item.href}
            onClick={handleDrawerToggle}
            sx={{ cursor: 'pointer', py: 2, textDecoration: 'none' }}
          >
            <ListItemText 
              primary={item.label} 
              primaryTypographyProps={{ 
                color: 'text.primary', 
                fontWeight: 600,
                fontSize: '1.1rem'
              }} 
            />
          </ListItem>
        ))}
        <ListItem sx={{ pt: 4 }}>
          <WhatsAppButton
            message="Hi! I'd like to learn more about JChats for my business."
            sx={{ width: '100%' }}
          >
            Talk to Us
          </WhatsAppButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(10, 10, 10, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo.avif" alt="Logo" width={50} height={50}/>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                }}
                component={RouterLink}
                to="/"
              >
                JChats
              </Typography>
            </Box>
            
            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5, alignItems: 'center' }}>
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.href}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    '&:hover': { 
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
            
            {/* Desktop CTA Button */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <WhatsAppButton
                message="Hi! I'd like to learn more about JChats for my business."
                sx={{ px: 3, py: 1.5 }}
              >
                Talk to Us on WhatsApp
              </WhatsAppButton>
            </Box>
            
            {/* Mobile Menu Button */}
            <IconButton
              sx={{ display: { xs: 'inline-flex', md: 'none' }, color: 'text.primary' }}
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250, bgcolor: 'background.default' },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;