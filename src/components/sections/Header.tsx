import React, { useState } from "react";
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
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import WhatsAppButton from "../ui/WhatsAppButton";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const useCaseItems = [
    { label: "Food & Retail", href: "/use-cases#food-retail" },
    { label: "Professional Services", href: "/use-cases#professional" },
    { label: "Hospitality", href: "/use-cases#hospitality" },
    { label: "Logistics", href: "/use-cases#logistics" },
    { label: "Wholesale", href: "/use-cases#wholesale" },
    { label: "Real Estate", href: "/use-cases#real-estate" },
  ];

  const navigationItems = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Get Started", href: "/get-started" },
    { label: "Pricing", href: "/pricing" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "FAQ", href: "/faq" },
  ];

  const drawer = (
    <Box
      sx={{ width: 250, pt: 2, height: "100%", background: "background.default" }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "text.primary" }}>
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
            sx={{ cursor: "pointer", py: 2, textDecoration: "none" }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                color: "text.primary",
                fontWeight: 600,
                fontSize: "1.1rem",
              }}
            />
          </ListItem>
        ))}
        {/* Use Cases Dropdown for Mobile */}
        <ListItem
          button
          onClick={handleMenuClick} // Use handleMenuClick to open dropdown
          sx={{ cursor: "pointer", py: 2 }}
        >
          <ListItemText
            primary="Use Cases"
            primaryTypographyProps={{
              color: "text.primary",
              fontWeight: 600,
              fontSize: "1.1rem",
            }}
          />
          <KeyboardArrowDownIcon sx={{ color: "text.primary" }} />
        </ListItem>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "use-cases-button",
          }}
        >
          {useCaseItems.map((item) => (
            <MenuItem
              key={item.label}
              onClick={() => {
                handleMenuClose();
                handleDrawerToggle();
                window.location.href = item.href;
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>

        <ListItem sx={{ pt: 4 }}>
          <WhatsAppButton
            message="Hi! I'd like to learn more about JChats for my business."
            sx={{ width: "100%" }}
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
          backgroundColor: "rgba(10, 10, 10, 0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", py: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src="/logo.webp" alt="Logo" width={80} height={60} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  textDecoration: "none",
                  letterSpacing: "-0.02em",
                }}
                component={RouterLink}
                to="/"
              >
                JChats
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 5,
                alignItems: "center",
              }}
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.href}
                  sx={{
                    color: "text.secondary",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    transition: "color 0.2s",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
              {/* Use Cases Dropdown for Desktop */}
              <Box>
                <Link
                  id="use-cases-button"
                  aria-controls={anchorEl ? "use-cases-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={anchorEl ? "true" : undefined}
                  onClick={handleMenuClick}
                  sx={{
                    color: "text.secondary",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    transition: "color 0.2s",
                    "&:hover": {
                      color: "primary.main",
                    },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Use Cases <KeyboardArrowDownIcon />
                </Link>
                <Menu
                  id="use-cases-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    "aria-labelledby": "use-cases-button",
                  }}
                >
                  {useCaseItems.map((item) => (
                    <MenuItem
                      key={item.label}
                      onClick={() => {
                        handleMenuClose();
                        window.location.href = item.href;
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>

            {/* Desktop CTA Button */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <WhatsAppButton
                message="Hi! I'd like to learn more about JChats for my business."
                sx={{ px: 3, py: 1.5 }}
              >
                Talk to Us on WhatsApp
              </WhatsAppButton>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{
                display: { xs: "inline-flex", md: "none" },
                color: "text.primary",
              }}
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
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            bgcolor: "background.default",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
