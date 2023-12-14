import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/core/redux/providers';
import NavBar from '@/theme/navbar';
import Footer from '@/theme/footer';

const inter = Inter({ subsets: ['latin'] });

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
      </head>
      <body className={inter.className + ' bg-blue1'}>
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12">
            {children}
          </div>
        </div>

        {/* <NavBar /> */}
      </body>
    </html>
  );
}
