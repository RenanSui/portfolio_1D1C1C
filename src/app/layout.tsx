import { JotaiProvider } from '@/components/providers'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { NierLattice } from '@/features/nier'
import { RodinPro } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn('bg-black', RodinPro.className)} data-menu="0">
        <JotaiProvider>{children}</JotaiProvider>
        <Toaster position="top-center" expand={false} />
        <NierLattice />
        <TailwindIndicator />
      </body>
    </html>
  )
}
