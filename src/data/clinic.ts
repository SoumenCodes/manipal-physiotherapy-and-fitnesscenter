export const clinic = {
  name: "Manipal Physiotherapy and Fitness Centre",
  nameHi: "मणिपाल फिजियोथेरेपी एंड फिटनेस सेंटर",
  shortName: "Manipal Physiotherapy",
  tagline: "Move Better. Live Pain Free.",
  phone: "+91 88275 96359",
  phoneRaw: "+918827596359",
  whatsappRaw: "918827596359",
  email: "ajit.anatomy@gmail.com",
  address: {
    line1: "Vijaya Gardens Road",
    line2: "Near Vardan Nursing Home",
    line3: "Jawarhartola, Baridih",
    city: "Jamshedpur",
    state: "Jharkhand",
    postal: "831017",
    country: "India",
  },
  hours: "Monday – Sunday · 9:00 AM – 9:00 PM",
  hoursShort: "Mon – Sun · 9 AM – 9 PM",
  mapsEmbed:
    "https://www.google.com/maps?q=Vijaya+Gardens+Road,+Baridih,+Jamshedpur,+Jharkhand+831017&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Manipal+Physiotherapy+Baridih+Jamshedpur",
} as const;

export const fullAddress = `${clinic.address.line1}, ${clinic.address.line2}, ${clinic.address.line3}, ${clinic.address.city}, ${clinic.address.state} ${clinic.address.postal}`;
