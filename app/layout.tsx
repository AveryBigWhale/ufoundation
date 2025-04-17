// filepath: src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
          <title>U foundation</title> {/* 這裡是網頁標題 */}
          {/* <link rel="icon" href="/favicon.ico" /> 這是 favicon 路徑 */}
          {/* 可選：支援多尺寸 icon */}
          <link rel="icon" type="image/svg+xml" href="https://averybigwhale.github.io/ufoundation/icon.svg" />
          {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}