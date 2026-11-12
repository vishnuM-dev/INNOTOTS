import type { Metadata } from 'next';
import GalleryView from '@/components/gallery/GalleryView';

export const metadata: Metadata = {
  title: 'Gallery | InnoTots Preschool',
  description: 'A visual walkthrough of the joyful smiles, creative masterpieces and vibrant campus moments at InnoTots Preschool.',
  openGraph: {
    title: 'Gallery | InnoTots Preschool',
    description: 'A visual walkthrough of the joyful smiles, creative masterpieces and vibrant campus moments at InnoTots Preschool.',
  },
};

export default function GalleryPage() {
  return <GalleryView />;
}
