import { Socials } from '@/types'
import { Metadata } from 'next'

export const locales = ['en', 'pt-br']

export const socials: Socials[] = [
  { title: 'GitHub', href: 'https://github.com/RenanSui', icon: 'github' },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/renansui/',
    icon: 'linkedin',
  },
  { title: 'Gmail', href: 'mailto: renanddtao@gmail.com', icon: 'gmail' },
  {
    title: 'Whatsapp',
    href: 'https://api.whatsapp.com/send?phone=+5571985035606&text=Hello',
    icon: 'whatsapp',
  },
]

export const siteConfig = {
  name: 'Portfolio_1d1c1c',
  url: 'https://renansui.vercel.app',
  description: 'Personal Portfolio Website',
  mainNav: {
    socials: [
      ...socials.map((social) => ({
        title: social.title,
        href: social.href,
        icon: social.icon,
      })),
    ],
  },
}

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://renansui.vercel.app'),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    'nextjs',
    'react',
    'react server components',
    'resume',
    'sanity',
    'portfolio',
    'nier',
    'NieR:Automata',
  ],
  authors: [
    {
      name: 'renansui',
      url: 'https://renansui.vercel.app',
    },
  ],
  creator: 'renansui',
  openGraph: {
    type: 'website',
    locale: 'en',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: '/opengraph-image.png',
  },
  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    creator: '@adsjksui',
  },
  icons: {
    icon: '/favicon.ico',
  },
}
