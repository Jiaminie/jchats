import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import VideoExample from '../ui/VideoExample';

const VideoExamples: React.FC = () => {
  const examples = [
    {
      category: 'For Fish Traders, Restaurants, Shops & Wholesalers',
      valueProposition: 'Show your products. Take orders. Get paid. All on WhatsApp.',
      scenarioIntro: 'Watch James, a fish trader in Nairobi, take a complete order:',
      bulletPoints: [
        "Customer asks what's available today",
        'Catalog appears with photos and prices',
        'Customer orders 5kg tilapia',
        'M-Pesa payment happens instantly',
        'Delivery scheduled for 3pm',
      ],
      resultStatement: 'Result: Order completed in 2 minutes. Payment received immediately.',
      videoPlaceholder: '🐟 Food & Retail Demo Video',
      layout: 'text-left' as const,
    },
    {
      category: 'For Salons, Clinics, Consultants & Professionals',
      valueProposition: 'Let clients book appointments and pay deposits automatically.',
      scenarioIntro: 'See how Grace, a salon owner in Mombasa, manages bookings:',
      bulletPoints: [
        'Client requests appointment for Saturday',
        'Available time slots appear automatically',
        'Client selects 2pm and pays KES 500 deposit',
        'Confirmation sent with calendar reminder',
        'Automated reminder sent day before',
      ],
      resultStatement: 'Result: No more double bookings. 80% fewer no-shows.',
      videoPlaceholder: '💇 Professional Services Demo Video',
      layout: 'text-right' as const,
    },
    {
      category: 'For Hotels, Airbnbs, Event Venues & Hospitality',
      valueProposition: 'Handle bookings, payments, and guest communication in one place.',
      scenarioIntro: 'Watch how Peter, a hotel manager in Kisumu, handles reservations:',
      bulletPoints: [
        'Guest inquires about room availability',
        'Room photos and rates appear instantly',
        'Guest books 2 nights and pays 50% deposit',
        'Booking confirmation with check-in details sent',
        'Automated check-in reminder 24 hours before',
      ],
      resultStatement: 'Result: 60% faster booking process. Zero payment disputes.',
      videoPlaceholder: '🏨 Hospitality Demo Video',
      layout: 'text-left' as const,
    },
    {
      category: 'For Delivery Services, Transport & Logistics',
      valueProposition: 'Track orders, assign drivers, and collect payments seamlessly.',
      scenarioIntro: 'See how Mary, a delivery service owner in Nakuru, manages orders:',
      bulletPoints: [
        'Customer requests package delivery',
        'Instant quote based on distance',
        'Customer pays via M-Pesa',
        'Driver assigned automatically',
        'Real-time tracking link sent to customer',
      ],
      resultStatement: 'Result: 3x more deliveries per day. 100% payment before pickup.',
      videoPlaceholder: '🚚 Logistics Demo Video',
      layout: 'text-right' as const,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: "text.primary",
              fontWeight: 700,
              mb: { xs: 6, md: 12 },
            }}
          >
            How JChats Works for Businesses Like Yours
          </Typography>
        </motion.div>
      </Container>

      {/* Video Examples - Stacked Vertically */}
      <Box>      
          {examples.map((example, index) => (
            <VideoExample
              key={index}
              category={example.category}
              valueProposition={example.valueProposition}
              scenarioIntro={example.scenarioIntro}
              bulletPoints={example.bulletPoints}
              resultStatement={example.resultStatement}
              videoPlaceholder={example.videoPlaceholder}
              layout={example.layout}
              delay={index * 0.2}
            />
          ))}
      </Box>
    </Box>
  );
};

export default VideoExamples;
