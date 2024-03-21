import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';
import './globals.css'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-[#002310] via-[#002F24] to-[#002310] text-[#fefae0]`}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
