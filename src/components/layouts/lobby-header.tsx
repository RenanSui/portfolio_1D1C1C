import { Capitalize, getFormattedTranslation } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'
import { FocusText } from '../focus-text'
import { Section } from '../shells/section'

type LobbyHeaderProps = {
  localeConfigPromise: ReturnType<typeof getFormattedTranslation>
  locale: string
}

export async function LobbyHeader({
  localeConfigPromise,
  locale,
}: LobbyHeaderProps) {
  const localeConfig = await localeConfigPromise
  const intl = await getTranslations({ locale, namespace: 'Index' })
  const { titles } = localeConfig.navbarConfig

  const aboutInfo = {
    paragraph_1: intl(`navItems.about.info_1.paragraph_1`) ?? '',
    link_1: intl(`navItems.about.info_1.link_1`) ?? '',
    paragraph_2: intl(`navItems.about.info_1.paragraph_2`) ?? '',
    link_2: intl(`navItems.about.info_1.link_2`) ?? '',
    paragraph_3: intl(`navItems.about.info_1.paragraph_3`) ?? '',
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
        id="about"
        className="mb-16 scroll-mt-16 font-medium opacity-90 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <div className="relative top-0 z-[60] -mx-6 my-5 mb-4 w-screen px-6 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
          <h2 className="sr-only">{Capitalize(titles.about)}</h2>
          <p className="font-bold uppercase tracking-widest text-nier-light-900">
            {titles.about.toUpperCase()}
          </p>
        </div>
        <div className="prose">
          <p className="leading-loose">
            {aboutInfo.paragraph_1} <FocusText>Renan</FocusText>,{' '}
            {aboutInfo.paragraph_2}{' '}
            <FocusText>
              <a href="https://spenso.vercel.app" target="_blank">
                Spenso
              </a>
            </FocusText>
            , {aboutInfo.paragraph_3}
            {/* , a personal finance manager built with the latest Next.js features. */}
          </p>
        </div>
      </Section>
    </div>
  )
}
