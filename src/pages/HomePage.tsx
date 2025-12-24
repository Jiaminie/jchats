import React from 'react';
import { Box } from '@mui/material';
import {
  Hero,
  Benefits,
  VideoExamples,
  SocialProofSection,
  GettingStarted,
  FAQ,
  FinalCTA,
} from '../components';

const HomePage: React.FC = () => {
  return (
    <Box>
      <Hero />
      <Benefits />
      <Box id="video-examples">
        <VideoExamples />
      </Box>
      <SocialProofSection />
      <GettingStarted />
      <FAQ />
      <FinalCTA />
    </Box>
  );
};

export default HomePage;
