import { Metadata } from 'next'
import { ReactNode } from 'react'
import '../../styles/globals.css'
import { siteMetadata } from '@/config/site'

export const metadata: Metadata = { ...siteMetadata, title: `Studio - ${siteMetadata.title}` }

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
