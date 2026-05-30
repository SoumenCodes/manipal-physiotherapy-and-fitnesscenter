import clinicInterior from "@/assets/clinic-interior.jpg";
import treatmentBack from "@/assets/treatment-back.jpg";
import treatmentRehab from "@/assets/treatment-rehab.jpg";
import treatmentShoulder from "@/assets/treatment-shoulder.jpg";
import equipmentTens from "@/assets/equipment-tens.jpg";
import reception from "@/assets/reception.jpg";
import heroPhysio from "@/assets/hero-physio.jpg";

export type GalleryItem = {
  src: string;
  alt: string;
  category: "interior" | "sessions" | "equipment" | "care";
};

export const gallery: GalleryItem[] = [
  { src: clinicInterior, alt: "Spacious modern physiotherapy treatment hall", category: "interior" },
  { src: reception, alt: "Reception and waiting area at our Jamshedpur clinic", category: "interior" },
  { src: treatmentBack, alt: "Therapist guiding spine mobility exercise", category: "sessions" },
  { src: treatmentRehab, alt: "Gait training on parallel bars during rehab", category: "sessions" },
  { src: treatmentShoulder, alt: "Shoulder rehabilitation with resistance bands", category: "sessions" },
  { src: heroPhysio, alt: "Senior patient knee rehabilitation session", category: "care" },
  { src: equipmentTens, alt: "Electrotherapy and ultrasound therapy equipment", category: "equipment" },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "interior", label: "Clinic Interior" },
  { id: "sessions", label: "Treatment Sessions" },
  { id: "equipment", label: "Equipment" },
  { id: "care", label: "Patient Care" },
] as const;
