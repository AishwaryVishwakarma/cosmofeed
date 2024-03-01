import {ReduxProvider} from '@/redux/Provider';
import type {Metadata} from 'next';
import localFont from 'next/font/local';

import './globals.scss';

const helvetica = localFont({
  src: '../../public/fonts/Helvetica-Neue.otf',
  variable: '--helvetica',
});

const hiragino = localFont({
  src: '../../public/fonts/Hiragino-Kaku-Gothic-StdN.otf',
  variable: '--hiragino',
});

export const metadata: Metadata = {
  title: 'Urban',
  description:
    'Discover the next frontier in online shopping with Urban – your premier destination for the latest trends in fashion, home decor, gadgets, and more. Explore a curated selection of top-quality products from emerging and established brands, all conveniently accessible at your fingertips. ',
  creator: 'Aishwary Vishwakarma',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${helvetica.variable} ${hiragino.variable}`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
