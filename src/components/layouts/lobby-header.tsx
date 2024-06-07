import { Capitalize, getFormattedTranslation } from '@/lib/utils'
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
        <div
          className="relative animate-fade-in"
          style={{
            animationDelay: '1.3s',
            animationFillMode: 'both',
            animationDuration: '1s',
          }}
        >
          <p className="mb-4">
            Back in 2010, I decided to try my hand at building private servers
            for my favorite games with my friends and although I was successful
            in certain aspects I quickly gave up and forgot about it due to
            problems related to my personal life. Fast forward to today, I ended
            up giving another chance to
            <span className="font-bold transition-colors duration-150 hover:text-red-600">
              {' '}
              programming{' '}
            </span>
            and
            <span className="font-bold transition-colors duration-150 hover:text-red-600">
              {' '}
              game development
            </span>
            , but little did I know I was going to be pulled into the
            <span className="font-bold transition-colors duration-150 hover:text-red-600">
              {' '}
              web development
            </span>{' '}
            side.
          </p>
        </div>
        <div
          className="relative animate-fade-in"
          style={{
            animationDelay: '1.6s',
            animationFillMode: 'both',
            animationDuration: '1s',
          }}
        >
          <p className="mb-4">
            My main focus these days is building accessible user-centered
            interfaces. I most enjoy building software in the sweet spot where
            design and engineering meet — things that look good but are also
            built well under the hood.
          </p>
        </div>
        <div
          className="relative animate-fade-in"
          style={{
            animationDelay: '2s',
            animationFillMode: 'both',
            animationDuration: '1s',
          }}
        >
          <p className="">
            In the free time I like to play Final Fantasy and Resident Evil
            games. When I&apos;m not at the computer, I&apos;m usually reading
            economic books or helping my uncles at their car workshop.
          </p>
        </div>
      </Section>
    </div>
  )
}
