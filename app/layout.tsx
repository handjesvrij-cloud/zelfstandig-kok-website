import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Maison Laurent — Private Chef voor Exclusieve Culinaire Belevingen',
  description:
    'Zelfstandig kok voor private dining, catering, bedrijfsevenementen, walking dinners en kookworkshops. Exclusieve culinaire belevingen op maat met verse, seizoensgebonden ingrediënten.',
  keywords: [
    'private chef',
    'zelfstandig kok',
    'private dining',
    'catering',
    'walking dinner',
    'kookworkshop',
    'bedrijfsevenementen',
    'culinaire evenementen',
  ],
  openGraph: {
    title: 'Maison Laurent — Private Chef',
    description:
      'Exclusieve culinaire belevingen op maat voor private dining, catering en bijzondere evenementen.',
    type: 'website',
    locale: 'nl_NL',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1c2b22',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
