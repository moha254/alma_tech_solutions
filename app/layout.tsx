import React from 'react';
import './globals.css'
// Temporarily comment out the font import until Next.js is properly set up
// import { Inter } from 'next/font/google'
import Footer from './components/Footer'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alma-tech',
  description: 'Task management application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  )
} 