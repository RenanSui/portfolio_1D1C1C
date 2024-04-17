import { NierLattice } from '@/components/nier/nier-lattice'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { RodinPro } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { unstable_setRequestLocale as setRequestLocale } from 'next-intl/server'
import { ReactNode } from 'react'
import '../styles/globals.css'

export const metadata = {
  title: 'Renan Sui',
  description: "Renan Sui's Personal Portfolio",
  metadataBase: new URL('https://renansui.vercel.app'),
  icons: {
    icon: 'images/favicon.ico',
    shortcut: 'images/favicon.ico',
    apple: 'images/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: 'images/apple-touch-icon.png',
    },
  },
}

type RootLayoutProps = { children: ReactNode; params: { locale: string } }

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  setRequestLocale(locale)

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={cn('bg-black', RodinPro.className)} data-menu="0" data-nav="about">
        {children}
        <NierLattice />
        <TailwindIndicator />
      </body>
    </html>
  )
}
