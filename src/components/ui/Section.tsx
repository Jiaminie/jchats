import React from 'react';
import { Box, Container } from '@mui/material';

interface SectionProps {
  children: React.ReactNode;
  backgroundColor?: string;
  py?: any;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  backgroundColor,
  py = { xs: 8, md: 12 },
  maxWidth = 'lg',
  id,
}) => {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        backgroundColor,
        py,
      }}
    >
      <Container
        maxWidth={maxWidth}
        sx={{
          px: { xs: 2, sm: 3, md: 0 },
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Section;