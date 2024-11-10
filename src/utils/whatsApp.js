export const handleChatClick = (name) => {
  const phoneNumber = "+918111827681"; // Replace with the actual phone number
  const message = `Hello! I would like to learn English. My Native language is ${name}`; // Replace with your message
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

export const handleEnquiryFormClick = ({ name, phone, location, message }) => {
  const phoneNumber = "+918111827681";
  const messageContent = ` NAME : ${name}\n PHONE : ${phone}\n LOCATION : ${location}\n MESSAGE : ${message}`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};
