import React, { useEffect, useState } from "react";
import { Fab, Zoom, Box } from "@mui/material"; 
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

interface ReturnToTopButtonProps {
  onClick: () => void;
}

const ReturnToTopButton: React.FC<ReturnToTopButtonProps> = ({ onClick }) => {
  const [showButton, setShowButton] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Zoom in={showButton}>
      <Fab
        color="primary"
        aria-label="return to top"
        onClick={onClick}
        sx={{
          bottom: { xs: 0, md: 24 },
          right: { xs: 0, md: 20 },
          width: { xs: "100%", md: 56 },
          height: { xs: 56, md: 56 },
          borderRadius: { xs: 0, md: 0 },
          zIndex: 1200,
          backgroundColor: "#25D366", // WhatsApp Green
          "&:hover": {
            backgroundColor: "#1DA851",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "row", md: "column" },
          }}
        >
          <ArrowUpwardIcon sx={{ mr: { xs: 1, md: 0 } }} />
        </Box>
      </Fab>
    </Zoom>
  );
};

export default ReturnToTopButton;
