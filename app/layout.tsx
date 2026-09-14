import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ARUMANIS — Sedang Dalam Pemeliharaan',
  description: 'Portal Infrastruktur Air Minum dan Sanitasi Kabupaten Cianjur sedang dalam pemeliharaan.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4eddf',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  )
}
