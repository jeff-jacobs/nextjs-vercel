import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

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
      <body className={inter.className}>
        <div style={{
          margin: '0 auto',
          padding: '40px',
          maxWidth: '1200px',
        }}>
          <div style={{
            marginBottom: '50px',
          }}>
            <Link href="/">Home</Link> &nbsp;
            <Link href="/todos">Todos</Link>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
