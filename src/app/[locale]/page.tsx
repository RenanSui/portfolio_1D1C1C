import { getProjects } from '@/actions/server/sanity'
import { LobbyHeader } from '@/components/layouts/lobby-header'
import { LobbyMain } from '@/components/layouts/lobby-main'
import { NierVignette } from '@/components/nier/nier-vignette'
import { AnimatedShell } from '@/components/shells/animated-shell'
import { locales, siteConfig } from '@/config/site'
import { getTranslations, unstable_setRequestLocale as setRequestLocale } from 'next-intl/server'

export default async function IndexPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)

  const intl = await getTranslations({ locale, namespace: 'Index' })
  const projects = await getProjects()
  const intlSiteConfig = siteConfig(intl)

  return (
    <AnimatedShell animate={{ opacity: 1, transition: { delay: 0, duration: 1 } }}>
      <div className="pointer-events-none fixed left-0 top-0 h-full w-full bg-[url(/assets/wallpapers/light-theme-1440.png)] bg-cover" />

      <NierVignette variant="dark" className="fixed z-10" />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-16 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <LobbyHeader siteConfig={intlSiteConfig} />
          <AnimatedShell
            className="z-[60] pt-24 text-neutral-900 lg:w-1/2 lg:py-24"
            animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
          >
            <LobbyMain projects={projects} siteConfig={intlSiteConfig}></LobbyMain>
          </AnimatedShell>
        </div>
      </div>
    </AnimatedShell>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const intl = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: intl('title'),
    description: intl('description'),
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
}
