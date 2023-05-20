import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sushiman',
  description: 'Feel the taste of Japanese food',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} sushi__hide-scrollbar`}>
        {children}
      </body>
    </html>
  );
}
