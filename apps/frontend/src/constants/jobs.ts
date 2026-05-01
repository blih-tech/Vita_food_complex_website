export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  reportsTo: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const JOBS: Job[] = [
  {
    id: "production-manager",
    title: "Production Manager",
    location: "Debre Sina, Ethiopia",
    type: "Full-time",
    department: "Operations",
    reportsTo: "Operations Director",
    summary:
      "We are looking for an experienced Production Manager to oversee daily manufacturing operations at our Debre Sina facility. You will ensure quality standards, optimize production workflows, and lead a team of dedicated professionals.",
    responsibilities: [
      "Oversee daily production operations across all manufacturing lines",
      "Ensure quality standards and compliance with food safety regulations",
      "Manage and mentor production team members",
      "Optimize production workflows and reduce waste",
      "Coordinate with quality control and supply chain teams",
      "Monitor production metrics and report on performance",
    ],
    requirements: [
      "Bachelor's degree in Engineering, Food Science, or related field",
      "5+ years of experience in production management",
      "Strong leadership and team management skills",
      "Knowledge of food manufacturing processes",
      "Excellent problem-solving and analytical abilities",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Health insurance and wellness programs",
      "Professional development opportunities",
      "Collaborative and supportive work environment",
    ],
  },
  {
    id: "quality-control",
    title: "Quality Control Specialist",
    location: "Debre Sina, Ethiopia",
    type: "Full-time",
    department: "Quality Assurance",
    reportsTo: "Quality Manager",
    summary:
      "We are seeking a detail-oriented Quality Control Specialist to monitor and maintain product quality standards across our manufacturing facility. You will play a critical role in ensuring every product meets our rigorous quality benchmarks.",
    responsibilities: [
      "Conduct regular quality inspections of raw materials and finished products",
      "Maintain documentation of quality control procedures and test results",
      "Investigate and resolve quality-related issues and customer complaints",
      "Ensure compliance with food safety regulations and industry standards",
      "Collaborate with production teams to implement quality improvements",
      "Calibrate and maintain quality testing equipment",
    ],
    requirements: [
      "Bachelor's degree in Food Science, Chemistry, or related field",
      "3+ years of experience in quality control within food manufacturing",
      "Knowledge of ISO 22000, HACCP, and other food safety standards",
      "Strong analytical and problem-solving skills",
      "Attention to detail and excellent documentation abilities",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Health insurance and wellness programs",
      "Ongoing training and certification support",
      "Modern laboratory and testing facilities",
    ],
  },
  {
    id: "marketing-lead",
    title: "Marketing Lead",
    location: "Addis Ababa, Ethiopia",
    type: "Full-time",
    department: "Marketing",
    reportsTo: "General Manager",
    summary:
      "We are looking for a creative and strategic Marketing Lead to drive brand awareness and market growth for Vita products. You will develop and execute comprehensive marketing strategies across multiple channels.",
    responsibilities: [
      "Develop and implement comprehensive marketing strategies and campaigns",
      "Manage brand positioning and messaging across all channels",
      "Lead digital marketing initiatives including social media and content",
      "Analyze market trends and competitor activities to identify opportunities",
      "Collaborate with sales teams to align marketing with business goals",
      "Manage marketing budget and measure campaign ROI",
    ],
    requirements: [
      "Bachelor's degree in Marketing, Business, or related field",
      "5+ years of marketing experience, preferably in FMCG or food industry",
      "Strong understanding of digital marketing and social media strategies",
      "Excellent communication and leadership skills",
      "Data-driven mindset with strong analytical capabilities",
    ],
    benefits: [
      "Competitive salary with performance-based incentives",
      "Health insurance and wellness benefits",
      "Creative freedom and professional growth opportunities",
      "Dynamic and collaborative team environment",
    ],
  },
];

export function getJobById(id: string): Job | undefined {
  return JOBS.find((job) => job.id === id);
}

export function getAllJobIds(): string[] {
  return JOBS.map((job) => job.id);
}
