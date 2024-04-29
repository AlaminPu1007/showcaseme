import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.scss';
import HeaderComponent from './components/layouts/header/HeaderComponent';
import FooterComponent from './components/layouts/footer/FooterComponent';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
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
    <html lang='en'>
      <body
        suppressHydrationWarning={true}
        className={`
          ${poppins.className}  bg-white duration-200 ease-in dark:bg-theme-dark-bg`}
      >
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
