import React from 'react';
import { Button } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import type { ButtonProps } from '../../types';

const CustomButton: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  onClick,
  fullWidth = false,
  startIcon,
  sx,
  type = 'button',
  ...rest
}) => {
  const getButtonProps = () => {
    switch (variant) {
      case 'primary':
        return {
          variant: 'contained' as const,
          color: 'primary' as const,
          sx: {
            py: 2,
            px: 4,
            fontSize: size === 'large' ? '1.125rem' : '1rem',
            fontWeight: 600,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #25D366 0%, #1DA851 100%)',
            color: '#000000',
            textTransform: 'none',
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
            minHeight: 44,
            '&:hover': {
              boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
              background: 'linear-gradient(135deg, #4ADE80 0%, #25D366 100%)',
              transform: 'translateY(-2px)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            },
          },
        };
      
      case 'secondary':
        return {
          variant: 'outlined' as const,
          sx: {
            py: 2,
            px: 4,
            fontSize: size === 'large' ? '1.125rem' : '1rem',
            textTransform: 'none',
            borderWidth: 2,
            borderColor: 'primary.main',
            color: 'primary.main',
            borderRadius: 2,
            minHeight: 44,
            '&:hover': {
              borderWidth: 2,
              borderColor: 'primary.light',
              backgroundColor: 'rgba(37, 211, 102, 0.1)',
              transform: 'translateY(-2px)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            },
          },
        };
      
      case 'whatsapp':
        return {
          variant: 'contained' as const,
          startIcon: startIcon || <WhatsApp />,
          sx: {
            backgroundColor: '#25D366',
            color: '#000000',
            py: 2,
            px: 4,
            fontSize: size === 'large' ? '1.125rem' : '1rem',
            fontWeight: 600,
            textTransform: 'none',
            minHeight: 44,
            borderRadius: 2,
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
            '&:hover': {
              backgroundColor: '#4ADE80',
              boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
              transform: 'translateY(-2px)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            },
          },
        };
      
      default:
        return {};
    }
  };

  const buttonProps = getButtonProps();

  return (
    <Button
      {...buttonProps}
      {...rest}
      size={size}
      onClick={onClick}
      fullWidth={fullWidth}
      type={type}
      sx={{
        ...buttonProps.sx,
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;