import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography } from '@mui/material';

interface TimelineStep {
  day: number;
  title: string;
  duration: string;
  activities: string[];
  needed?: string;
}

interface CustomTimelineProps {
  steps: TimelineStep[];
}

const CustomTimeline: React.FC<CustomTimelineProps> = ({ steps }) => {
  return (
    <Timeline position="alternate">
      {steps.map((step, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {index < steps.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Day {step.day}
            </Typography>
            <Typography>{step.title}</Typography>
            <Typography color="text.secondary">Duration: {step.duration}</Typography>
            <ul>
              {step.activities.map((activity, i) => (
                <li key={i}>
                  <Typography color="text.secondary">{activity}</Typography>
                </li>
              ))}
            </ul>
            {step.needed && (
              <Typography color="primary.main">What's needed: {step.needed}</Typography>
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default CustomTimeline;