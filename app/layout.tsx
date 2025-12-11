import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import FaviconRotator from '../components/FaviconRotator';
import AutoPopup from '../components/site/auto-popup';
import BubbleBackground from '../components/BubbleBackground'; // <-- Import

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Global Immigration Service',
  description: 'Expert guidance for work visas, study permits, permanent residency, and citizenship.',
  icons: {
    icon: '/IMG-20251014-WA0007.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FaviconRotator />
        <BubbleBackground /> {/* 👈 Background bubbles */}
        {children}
        <AutoPopup />
      </body>
    </html>
  );
}
