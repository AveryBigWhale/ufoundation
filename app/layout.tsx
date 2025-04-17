
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'U Foundation',
  description: 'Charitable Foundation Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        <title>U foundation</title>
        <link 
          rel="icon" 
          type="image/svg+xml" 
          href="https://averybigwhale.github.io/ufoundation/icon.svg"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}