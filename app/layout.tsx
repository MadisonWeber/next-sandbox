import type { Metadata } from 'next';
import './globals.css';
import AppBar from '@/components/AppBar';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'the useless store',
  description: 'A fake store filled with fake items',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 min-h-screen">
        <AppBar />
        <div className="w-full h-screen pt-30 p-10 bg-gray-950">{children}</div>
        <Toaster
          toastOptions={{
            className: 'bg-slate-800 text-white text-sm border border-slate-700',
            style: { background: 'black', color: 'white' },
            iconTheme: {
              primary: '#337ab7',
              secondary: 'white',
            },
          }}
          position="bottom-right"
        />
      </body>
    </html>
  );
}
