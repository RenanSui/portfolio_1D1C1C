import { Capitalize, getFormattedTranslation } from '@/lib/utils'
import { FocusText } from '../focus-text'
import { Section } from '../shells/section'

type LobbyHeaderProps = {
  localeConfigPromise: ReturnType<typeof getFormattedTranslation>
}

export async function LobbyHeader({ localeConfigPromise }: LobbyHeaderProps) {
  const localeConfig = await localeConfigPromise
  const { titles } = localeConfig.navbarConfig

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
            I&apos;m <FocusText>Renan</FocusText>, building things for the web.
            I enjoy working on frontend projects, playing video games, and
            skateboarding. Currently, I&apos;m building{' '}
            <FocusText>
              <a href="https://spenso.vercel.app" target="_blank">
                Spenso
              </a>
            </FocusText>
            , a personal finance manager built with the latest Next.js features.
          </p>
        </div>
      </Section>
    </div>
  )
}
