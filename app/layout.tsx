import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WellnessGo - Personalized Health Plan',
  description: 'Life changing results with WellnessGo once and for all!',
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

