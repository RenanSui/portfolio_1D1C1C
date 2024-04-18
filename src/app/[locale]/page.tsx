import { getProjects } from '@/actions/server/sanity'
import { LobbyHeader } from '@/components/layouts/lobby-header'
import { LobbyMain } from '@/components/layouts/lobby-main'
import { NierVignette } from '@/components/nier/nier-vignette'
import { AnimatedShell } from '@/components/shells/animated-shell'
import { locales, siteMetadata } from '@/config/site'
import { getFormattedTranslation } from '@/lib/utils'
import { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale as setRequestLocale } from 'next-intl/server'

export default async function IndexPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)

  const projects = await getProjects()
  const localeConfig = await getFormattedTranslation(locale)

  return (
    <AnimatedShell animate={{ opacity: 1, transition: { delay: 0, duration: 1 } }}>
      <div className="pointer-events-none fixed left-0 top-0 h-full w-full bg-[url(/assets/wallpapers/light-theme-1440.png)] bg-cover" />

      <NierVignette variant="dark" className="fixed z-10" />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-16 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <LobbyHeader localeConfig={localeConfig} />
          <AnimatedShell
            className="z-[60] pt-24 text-neutral-900 lg:w-1/2 lg:py-24"
            animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
          >
            <LobbyMain projects={projects} localeConfig={localeConfig}></LobbyMain>
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
    ...siteMetadata,
    description: intl('description'),
    openGraph: {
      ...siteMetadata.openGraph,
      description: intl('description'),
      locale,
    },
    twitter: {
      ...siteMetadata.twitter,
      description: intl('description'),
    },
  } satisfies Metadata
}
