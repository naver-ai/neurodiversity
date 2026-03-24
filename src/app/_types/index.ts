export interface TeamMember {
  id: string;
  name: string;
  nameEn?: string;
  role: string;
  affiliation: string;
  bio?: string;
  email?: string;
  website?: string;
  photo: string;
  researchInterests?: string[];
  note?: string;
  status: "current" | "alumni" | "collaborator";
}

export interface ResearchProject {
  id: string;
  title: string;
  titleEn?: string;
  status: "ongoing" | "completed";
  description: string;
  keywords: string[];
  members: string[];
  startYear: number;
  endYear?: number;
  participationOpen: boolean;
  participationDetails?: {
    target: string;
    period: string;
    compensation: string;
    contactEmail: string;
    description: string;
  };
  links?: { label: string; url: string }[];
}

export interface Publication {
  id: string;
  title: string;
  titleKo?: string;
  authors: string[];
  authorHighlights?: string[];
  venue: string;
  venueShort: string;
  venueType: "conference" | "journal" | "workshop";
  year: number;
  month?: number;
  award?: string;
  abstract?: string;
  doi?: string;
  paperUrl?: string;
  arxivUrl?: string;
  projectUrl?: string;
  keywords?: string[];
}
