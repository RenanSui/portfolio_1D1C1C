import { NierLattice } from '@/components/nier/nier-lattice'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { RodinPro } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { unstable_setRequestLocale as setRequestLocale } from 'next-intl/server'
import { ReactNode } from 'react'
import '../../styles/globals.css'
import { siteMetadata } from '@/config/site'

export const metadata: Metadata = siteMetadata

type LocaleLayoutProps = { children: ReactNode; params: { locale: string } }

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
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
