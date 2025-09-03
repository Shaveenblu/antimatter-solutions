import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Antimatter Solutions - Web Development Agency',
  description: 'Professional web development agency specializing in landing pages and modern web solutions. We help businesses create stunning digital experiences.',
  keywords: 'web development, landing pages, Next.js, React, web design, digital agency',
  authors: [{ name: 'Antimatter Solutions' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}