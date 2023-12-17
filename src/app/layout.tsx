import type { Metadata } from 'next';
import { Alumni_Sans } from 'next/font/google'; //Roboto_Flex, Poppins, Oswald, Alumni Sans
import './globals.css';
import { Providers } from '@/core/redux/providers';
import { Footer, NavBar } from '@/theme';

const inter = Alumni_Sans({
  weight: ['100', '400'],
  subsets: ['latin'],

});

export const metadata: Metadata = {
  title: 'Starbazaar',
  description: 'Platform for Standards, Custom & Business Shoutouts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <script src="https://cdn.tailwindcss.com" async/> */}
        {/* <script src="/js/common.js" async/> */}
        <link
          rel="stylesheet"
          type='text/css'
          href="https://fonts.googleapis.com/css?display=optional&family=Roboto:300,400,500|Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
         />
      </head>
      <body className={inter.className + ' bg-blue1'}>
        <div className="w-100">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
