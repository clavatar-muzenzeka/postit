import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Post It',
  description: 'Post your ideas and thoughts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className="${inter.className} p-8">{children}</body>
   
    </html>
  );
}
