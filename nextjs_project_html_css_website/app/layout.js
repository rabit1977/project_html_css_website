'use client'
import './globals.css';
import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import AOS from 'aos';
import 'aos/dist/aos.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sushiman',
  description: 'Feel the taste of Japanese food',
};

export default function RootLayout({ children }) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <html lang='en'>
      <body className={`${inter.className} sushi__hide-scrollbar`}>
        {children}
      </body>
    </html>
  );
}
