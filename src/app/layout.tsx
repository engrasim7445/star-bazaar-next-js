import type { Metadata } from 'next';
import { Alumni_Sans } from 'next/font/google'; //Roboto_Flex, Poppins, Oswald, Alumni Sans
import './globals.css';
// import { Providers } from '@/core/redux/providers';
import { Footer } from '@/theme';
import { Providers } from '@/core/redux/providers';
import { NavbarConditional } from '@/theme/navbar/navbar-conditional';
import { NavBar } from '@/theme/navbar/navbar';
import { NavbarPublic } from '@/theme/navbar/navbar-public';
import { DialogAll } from '@/shared/dialogs/dialog-all';
// import { useEffect } from 'react';

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
  // useEffect(() => {
  //   console.log('called!')
  // })

  return (
    <html lang="en">
      <head>
        {/* <script src="https://cdn.tailwindcss.com" async/> */}
        {/* <script src="/js/common.js" async/> */}
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?display=optional&family=Roboto:300,400,500|Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        /> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className={inter.className + ' bg-blue1'}>
        <div className="w-100">
          <Providers>
            <NavBar />
            {/* <NavbarPublic /> */}
            {children}
            <Footer />
            <DialogAll  />
          </Providers>
        </div>
      </body>
    </html>
  );
}
