import { Coda } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout/Layout';
import { Metadata } from 'next';

const coda = Coda({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body className={coda.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
