import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/core/redux/providers';

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
      <head>{/* <script src="/js/common.js" async  /> */}</head>
      <body className={inter.className}>
        <div className="container-fluid bg-blue1">
          <nav>{/* <Learn_Nav /> */}</nav>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
