import React from "react";
import { Button, ButtonProps } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface WhatsAppButtonProps extends Omit<ButtonProps, "onClick"> {
  phoneNumber?: string;
  message?: string;
  children: React.ReactNode;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "+254704696287",
  message = "Hello! I would like to learn more about JChats.",
  children,
  ...buttonProps
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      variant="contained"
      startIcon={<WhatsAppIcon />}
      onClick={handleClick}
      sx={{
        backgroundColor: "#25D366",
        color: "#FFFFFF",
        padding: "16px 32px",
        fontSize: "1.125rem",
        fontWeight: 600,
        borderRadius: 0,
        textTransform: "none",
        boxShadow: "0 4px 6px rgba(37, 211, 102, 0.2)",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: "#1DA851",
          boxShadow: "0 6px 12px rgba(37, 211, 102, 0.3)",
          transform: "translateY(-2px)",
        },
        ...buttonProps.sx,
      }}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default WhatsAppButton;
