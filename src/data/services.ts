import {
  Activity,
  Bone,
  HeartPulse,
  Trophy,
  Brain,
  Stethoscope,
  Hand,
  Spline,
  Home,
  Dumbbell,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  treats: string[];
};

export const services: Service[] = [
  {
    slug: "back-pain",
    title: "Back Pain Treatment",
    icon: Activity,
    description:
      "Evidence-based relief for chronic and acute back pain through manual therapy, posture correction and targeted exercise.",
    treats: ["Lower back pain", "Slipped disc", "Sciatica", "Postural strain"],
  },
  {
    slug: "neck-pain",
    title: "Neck Pain Treatment",
    icon: Bone,
    description:
      "Personalized care for stiff necks, cervical strain and tech-neck syndrome with mobilization and ergonomic guidance.",
    treats: ["Cervical pain", "Tech neck", "Stiffness", "Headaches from neck"],
  },
  {
    slug: "knee-pain",
    title: "Knee Pain Rehabilitation",
    icon: HeartPulse,
    description:
      "Restore strength, stability and pain-free movement after knee injury, arthritis or wear-and-tear.",
    treats: ["Osteoarthritis", "Ligament injuries", "Meniscus tears", "Post-op knee"],
  },
  {
    slug: "sports-injury",
    title: "Sports Injury Recovery",
    icon: Trophy,
    description:
      "Get back to your sport safely with sports-specific rehab, mobility work and return-to-play planning.",
    treats: ["Sprains & strains", "Tendinitis", "ACL recovery", "Performance care"],
  },
  {
    slug: "paralysis-rehab",
    title: "Paralysis Rehabilitation",
    icon: Brain,
    description:
      "Compassionate neuro-rehab for stroke, paralysis and weakness — rebuilding movement, balance and independence.",
    treats: ["Stroke recovery", "Hemiplegia", "Bell's palsy", "Neurological weakness"],
  },
  {
    slug: "post-surgery",
    title: "Post Surgery Physiotherapy",
    icon: Stethoscope,
    description:
      "Structured recovery plans after orthopaedic and joint replacement surgery — safe, monitored, milestone-driven.",
    treats: ["Knee replacement", "Hip replacement", "Fracture rehab", "Post-operative care"],
  },
  {
    slug: "shoulder-pain",
    title: "Shoulder Pain Therapy",
    icon: Hand,
    description:
      "Relief from frozen shoulder, rotator cuff issues and impingement with hands-on therapy and progressive loading.",
    treats: ["Frozen shoulder", "Rotator cuff", "Impingement", "Bursitis"],
  },
  {
    slug: "spondylosis",
    title: "Cervical & Lumbar Spondylosis",
    icon: Spline,
    description:
      "Long-term, gentle programs for spondylosis that ease pain, improve mobility and prevent flare-ups.",
    treats: ["Cervical spondylosis", "Lumbar spondylosis", "Nerve compression", "Stiffness"],
  },
  {
    slug: "home-visit",
    title: "Home Visit Physiotherapy",
    icon: Home,
    description:
      "Expert care delivered to your home — ideal for elderly, post-op and bed-bound patients across Jamshedpur.",
    treats: ["Elderly care", "Bed-bound patients", "Post-discharge", "Bedside rehab"],
  },
  {
    slug: "fitness-wellness",
    title: "Fitness & Wellness Programs",
    icon: Dumbbell,
    description:
      "Guided fitness, posture and wellness plans for everyday people who want to feel strong and stay pain-free.",
    treats: ["Strength training", "Posture correction", "Weight management", "Injury prevention"],
  },
];
