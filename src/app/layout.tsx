// import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import './globals.css';

import { Inter, Work_Sans } from 'next/font/google';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'How Frontend mentor can help you',
};

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  variable: '--font-workSans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${workSans.variable}`}>
      <body
        className={cn(
          `min-h-screen  antialiased flex flex-col items-center  relative`
        )}
      >
        <Header />
        <div className='flex justify-center'>{children}</div>
      </body>
    </html>
  );
}
