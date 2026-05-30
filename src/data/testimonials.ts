export type Testimonial = {
  name: string;
  age: number;
  condition: string;
  review: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ramesh Kumar",
    age: 58,
    condition: "Lower Back Pain",
    review:
      "I had severe back pain for almost two years. After six weeks of treatment with Dr. Ajit, I'm back to my morning walks. The team is genuinely caring.",
    rating: 5,
  },
  {
    name: "Sunita Sharma",
    age: 64,
    condition: "Knee Osteoarthritis",
    review:
      "Climbing stairs used to be impossible. The personalized exercise plan worked wonders. I feel ten years younger.",
    rating: 5,
  },
  {
    name: "Arjun Singh",
    age: 26,
    condition: "Sports Injury (ACL)",
    review:
      "Recovered fully after my ACL surgery thanks to their structured rehab. Returned to football stronger than before. Highly recommended.",
    rating: 5,
  },
  {
    name: "Meera Devi",
    age: 71,
    condition: "Post-Stroke Rehab",
    review:
      "After my mother's stroke, the home visit therapy was a blessing. She can walk with support now. Thank you for the patience and care.",
    rating: 5,
  },
  {
    name: "Vikash Mahato",
    age: 42,
    condition: "Frozen Shoulder",
    review:
      "My frozen shoulder is completely cured. The clinic is clean, modern, and the staff treats you like family. Best physio in Jamshedpur.",
    rating: 5,
  },
  {
    name: "Priya Banerjee",
    age: 34,
    condition: "Neck Pain (Tech Neck)",
    review:
      "Working from home left me with constant neck pain. The posture correction sessions and exercises changed everything. Pain-free now.",
    rating: 5,
  },
  {
    name: "Rajesh Mishra",
    age: 67,
    condition: "Cervical Spondylosis",
    review:
      "Excellent care, modern equipment and very affordable. The doctor explains everything patiently. My spondylosis pain is 90% better.",
    rating: 5,
  },
  {
    name: "Anita Kumari",
    age: 48,
    condition: "Post Knee Replacement",
    review:
      "Six weeks after my knee replacement, I'm walking comfortably. The rehab plan was milestone-based and easy to follow. Truly grateful.",
    rating: 5,
  },
];
