export interface SocialMediaLink {
  name: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  profilePicture?: string;
  role: string;
  university: string;
  universityWebsite: string;
  socialMedia: SocialMediaLink[];
}

export interface WebsiteInfo {
  title: string;
  description: string;
}

export interface NavigationItem {
  name: string;
  route: string;
}

export interface HomepageSection {
  AboutSection?: boolean;
  SelectedPublicationsSection?: boolean;
}

export type FontStyle = "sans" | "serif" | "mono";

export const personalInfo: PersonalInfo = {
  name: "London Dixon",
  profilePicture: "/profile.jpg", //optional
  role: "PhD Candidate",
  university: "University of Maryland",
  universityWebsite: "https://linguistics.umd.edu/",
  socialMedia: [
    { name: "LinkedIn", url: "https://linkedin.com/in/london-dixon" },
    { name: "ORCID", url: "https://orcid.org/0009-0005-4249-8622" },
  ],
};

export const websiteInfo: WebsiteInfo = {
  title: personalInfo.name,
  description: "PhD Candidate",
};

export const navigations: NavigationItem[] = [
  { name: "Projects", route: "/research_interests" },
  { name: "Publications and Presentations", route: "/publications_presentations" },
  { name: "Teaching", route: "/teaching" },
  { name: "CV", route: "/cv/cv.pdf" },
];

export const homepageSection: HomepageSection = {
  AboutSection: true,
};

export const fontStyle: FontStyle = "sans"; // "sans" | "serif" | "mono"
