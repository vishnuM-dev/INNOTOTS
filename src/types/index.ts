export interface Program {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  color: string;
  imagePath: string;
  ageRange: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
}
