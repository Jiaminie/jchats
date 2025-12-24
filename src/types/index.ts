import React from 'react';

// Data model interfaces
export interface BusinessExample {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'food' | 'retail' | 'services';
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  customerName: string;
  businessType: string;
  location: string;
  photo: string;
}

export interface Statistic {
  id: string;
  number: string;
  label: string;
}

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'whatsapp';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  sx?: any;
  type?: 'button' | 'submit' | 'reset';
  component?: React.ElementType;
  to?: string;
  href?: string;
  [key: string]: any;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  sx?: any;
}

export interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
}