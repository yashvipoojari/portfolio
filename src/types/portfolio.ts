export interface Social {
  github: string;
  instagram: string;
  linkedin: string;
  email: string;
  phone: string;
  website: string;
}

export interface Profile {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  specialization: string;
  location: string;
  yearsOfExperience: string | number;
  bio: string;
  avatarSvg: string;
  social: Social;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  link: string;
  image: string;
  highlight: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface Service {
  num: string;
  /** Lucide icon name — mapped to the component in ServicesSection */
  icon: 'Server' | 'Brain' | 'Monitor' | 'Cloud';
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PortfolioData {
  profile: Profile;
  stats: Stat[];
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  services: Service[];
  nav: NavLink[];
  footerNav: NavLink[];
}