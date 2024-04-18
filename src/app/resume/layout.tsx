import { siteMetadata } from '@/config/site'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import '../../styles/globals.css'

export const metadata: Metadata = { ...siteMetadata, title: `Resume - ${siteMetadata.title}` }

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
