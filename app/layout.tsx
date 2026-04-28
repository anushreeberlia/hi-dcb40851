import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hi - Welcome to Our Project',
  description: 'A simple and friendly introduction to our project. Get to know us better.',
  openGraph: {
    title: 'Hi - Welcome to Our Project',
    description: 'A simple and friendly introduction to our project. Get to know us better.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Hi - Welcome Page",
              "description": "A friendly introduction to our project",
              "url": "https://example.com"
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}