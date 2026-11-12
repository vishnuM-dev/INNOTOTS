import type { Metadata } from 'next';
import { Fredoka, Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'InnoTots Preschool',
  description: 'A joyful preschool where every little mind is nurtured with love, creativity and the magic of play-based learning.',
  openGraph: {
    title: 'InnoTots Preschool',
    description: 'A joyful preschool where every little mind is nurtured with love, creativity and the magic of play-based learning.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`} style={{ '--font-fredoka': fredoka.style.fontFamily, '--font-nunito': nunito.style.fontFamily } as React.CSSProperties}>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
