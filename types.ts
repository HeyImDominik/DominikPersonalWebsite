export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  stats?: { label: string; value: string }[];
  link?: string;
  year: string;
  image?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  rank?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string;
  location: string;
}

export enum SkillLevel {
  Expert = "Expert",
  Advanced = "Advanced",
  Intermediate = "Intermediate",
  Beginner = "Beginner"
}

export interface Skill {
  name: string;
  level: SkillLevel;
  category: 'tech' | 'soft' | 'core';
}