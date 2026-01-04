export const generateWhatsAppLink = (phone: string, message: string) => {
  const formattedPhone = phone.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
};

export const openWhatsAppChat = (businessType: string = "general") => {
  const messages: Record<string, string> = {
    general: "Hi! I'm interested in learning about JChats for my business.",
    logistics: "Hi! I'm interested in JChats for my logistics business.",
    retail: "Hi! I'm interested in JChats for my retail business.",
    food: "Hi! I'm interested in JChats for my restaurant/food business.",
    services: "Hi! I'm interested in JChats for my service business.",
  };

  const message = messages[businessType] || messages.general;
  const link = generateWhatsAppLink("+254704696287", message);
  window.open(link, "_blank");
};
