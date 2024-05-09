import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.scss';
import HeaderComponent from './components/layouts/header/HeaderComponent';
import FooterComponent from './components/layouts/footer/FooterComponent';
import React from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '100', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Alamin's Portfolio Showcase",
  description: 'A curated collection of projects and work by Alamin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark scroll-smooth'>
      <body
        suppressHydrationWarning={true}
        className={`
          ${poppins.className} bg-[#f5f7fe] ease-in dark:bg-theme-dark-bg dark:bg-[url('../../public/assets/bg-image.png')]`}
      >
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
