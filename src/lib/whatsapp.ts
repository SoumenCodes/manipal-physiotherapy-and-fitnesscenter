import { clinic } from "@/data/clinic";

export function whatsappUrl(message: string) {
  return `https://wa.me/${clinic.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export function bookServiceMessage(serviceTitle?: string) {
  if (!serviceTitle) {
    return `Hello ${clinic.shortName}, I'd like to book a physiotherapy appointment. Please share available slots.`;
  }
  return `Hello ${clinic.shortName}, I'd like to book an appointment for "${serviceTitle}". Please share available slots.`;
}

export function appointmentFormMessage(data: {
  fullName: string;
  phone: string;
  age: string | number;
  problem: string;
  preferredDate: string;
  message?: string;
}) {
  return [
    `*New Appointment Request*`,
    ``,
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `Age: ${data.age}`,
    `Concern: ${data.problem}`,
    `Preferred Date: ${data.preferredDate}`,
    data.message ? `Message: ${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}
