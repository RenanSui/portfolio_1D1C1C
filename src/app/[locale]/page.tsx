import { getProjects } from '@/actions/server/sanity'
import { LobbyFooter } from '@/components/layouts/lobby-footer'
import { LobbyHeader } from '@/components/layouts/lobby-header'
import { LobbyMain } from '@/components/layouts/lobby-main'
import { LobbySidebar } from '@/components/layouts/lobby-sidebar'
import { NierVignette } from '@/components/nier/nier-vignette'
import { locales, siteMetadata } from '@/config/site'
import { getFormattedTranslation } from '@/lib/utils'
import { Metadata } from 'next'
import {
  getTranslations,
  unstable_setRequestLocale as setRequestLocale,
} from 'next-intl/server'

export default async function IndexPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  /**
   * To avoid sequential waterfall requests, multiple promises are passed to fetch data parallelly.
   * These promises are also passed to the `Lobby` component, making them hot promises. This means they can execute without being awaited, further preventing sequential requests.
   * @see https://www.youtube.com/shorts/A7GGjutZxrs
   * @see https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching
   */
  const projectsPromise = getProjects()
  const localeConfigPromise = getFormattedTranslation(locale)

  return (
    <div
      className="relative animate-fade-in"
      style={{
        animationDelay: '0s',
        animationFillMode: 'both',
        animationDuration: '1s',
      }}
    >
      <div className="pointer-events-none fixed left-0 top-0 h-full w-full bg-[url(/assets/wallpapers/light-theme-1440.png)] bg-cover" />
      <NierVignette variant="dark" className="fixed z-10" />
      <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-6 lg:flex lg:justify-between lg:gap-4 lg:px-10 lg:py-0">
        <LobbySidebar localeConfigPromise={localeConfigPromise} />
        <div className="relative overflow-x-hidden pt-24 font-sans lg:w-1/2 lg:py-24">
          <LobbyHeader localeConfigPromise={localeConfigPromise} />
          <LobbyMain
            projectsPromise={projectsPromise}
            localeConfigPromise={localeConfigPromise}
          />
          <LobbyFooter />
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
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
