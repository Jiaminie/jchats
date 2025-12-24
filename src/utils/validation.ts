// Kenyan phone number validation
export const validateKenyanPhone = (phone: string) => {
  const pattern = /^(\+254|0)[17]\d{8}$/;
  return pattern.test(phone);
};

// Email validation
export const validateEmail = (email: string) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

// Business name validation (no special characters except & - ')
export const validateBusinessName = (name: string) => {
  const pattern = /^[a-zA-Z0-9\s&\-']+$/;
  return pattern.test(name) && name.length >= 2;
};

// URL validation
export const validateURL = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Format phone number for display
export const formatPhoneNumber = (phone: string) => {
  // Convert 07XX to +2547XX
  if (phone.startsWith('0')) {
    return `+254${phone.slice(1)}`;
  }
  return phone;
};

// Format currency (KES)
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
  }).format(amount);
};
