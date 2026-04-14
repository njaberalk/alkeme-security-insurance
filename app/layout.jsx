import { Poppins } from 'next/font/google'
import './globals.css'
import ScrollToTop from './ScrollToTop'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  metadataBase: new URL('https://alkemeins.com/security'),
  title: {
    template: '%s | ALKEME Insurance Services',
    default: 'Security Guard Insurance | ALKEME Insurance Services',
  },
  description: 'ALKEME Insurance Services provides specialized security guard insurance for armed and unarmed guard companies, executive protection, event security, and patrol services. Coverage for general liability, professional liability, firearms liability, and more.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ALKEME Insurance Services',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'ALKEME Insurance Services — Security Guard Insurance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Guard Insurance | ALKEME Insurance Services',
    description: 'Specialized security guard insurance for armed and unarmed guard companies, executive protection, event security, and patrol services across all 50 states.',
    images: ['https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://alkemeins.com/security/',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
