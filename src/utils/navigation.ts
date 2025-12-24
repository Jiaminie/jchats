// Smooth scroll utility function
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Handle navigation clicks
export const handleNavClick = (href: string) => {
  if (href.startsWith('#')) {
    const sectionId = href.substring(1);
    scrollToSection(sectionId);
  } else {
    window.open(href, '_blank');
  }
};