import { Capitalize, getFormattedTranslation } from '@/lib/utils'
import Link from 'next/link'
import { Section } from '../shells/section'
import { Icons } from '../ui/icons'
import { getLocale, getTranslations } from 'next-intl/server'

type LobbyExperienceProps = {
  localeConfig: Awaited<ReturnType<typeof getFormattedTranslation>>
}

export async function LobbyExperience({ localeConfig }: LobbyExperienceProps) {
  const { titles } = localeConfig.navbarConfig
  const locale = await getLocale()
  const intl = await getTranslations({ locale, namespace: 'Index' })
  const footer = {
    external_link_1: intl(`navItems.experience.footer.external_link_1`) ?? '',
  }

  return (
    <div
      className="relative animate-fade-in"
      style={{
        animationDelay: '1s',
        animationFillMode: 'both',
        animationDuration: '1s',
      }}
    >
      <Section
        id="experience"
        className="mb-16 scroll-mt-16 font-medium opacity-90 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <div className="relative top-0 z-[60] -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12  lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
          <h2 className="sr-only">{Capitalize(titles.experience)}</h2>
          <p className="font-bold uppercase tracking-widest text-nier-light-900">
            {titles.experience.toUpperCase()}
          </p>
        </div>

        <Link
          href={`/${locale}/resume`}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
          className="group/link inline-flex items-baseline text-base font-medium leading-tight text-nier-light-900 transition-colors duration-150 hover:text-red-600 hover:underline focus-visible:text-red-600"
        >
          <span className="pointer-events-none">
            {footer.external_link_1}
            <span className="inline-block">
              <Icons.externalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
            </span>
          </span>
        </Link>
      </Section>
    </div>
  )
}
