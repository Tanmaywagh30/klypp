import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Klypp - Fashion from mall brands, delivered in 60 minutes',
  description: 'Klypp connects you to real-time inventory from premium mall stores. Get fashion delivered in under 60 minutes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

