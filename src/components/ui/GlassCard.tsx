import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

interface GlassCardProps {
  hover?: boolean;
  glow?: boolean;
}

const GlassCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'hover' && prop !== 'glow',
})<GlassCardProps>(({ hover = true, glow = false }) => ({
  background: 'rgba(20, 20, 20, 0.7)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: 'rgba(37, 211, 102, 0.15)',
  borderRadius: 0,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  
  // Gradient border effect
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(37, 211, 102, 0.6), transparent)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  
  // Shimmer effect
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'linear-gradient(45deg, transparent, rgba(37, 211, 102, 0.03), transparent)',
    transform: 'rotate(45deg)',
    opacity: 0,
    transition: 'opacity 0.5s ease',
  },
  
  ...(hover && {
    '&:hover': {
      borderColor: 'rgba(37, 211, 102, 0.4)',
      transform: 'translateY(-6px)',
      boxShadow: glow 
        ? '0 20px 60px rgba(37, 211, 102, 0.2), 0 0 40px rgba(37, 211, 102, 0.1)'
        : '0 20px 40px rgba(0, 0, 0, 0.3)',
      
      '&::before': {
        opacity: 1,
      },
      
      '&::after': {
        opacity: 1,
      },
    },
  }),
}));

export default GlassCard;

