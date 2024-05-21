import { siteConfig } from '@/config/site'
import { getFormattedTranslation } from '@/lib/utils'
import { AnimatedShell } from '../shells/animated-shell'
import { CardMenuShell } from '../shells/card-menu-shell'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardHeading,
  CardSeparator,
} from '../ui/card'
import { Icons } from '../ui/icons'

type LobbyHeaderProps = {
  localeConfigPromise: ReturnType<typeof getFormattedTranslation>
}

export const LobbyHeader = async ({
  localeConfigPromise,
}: LobbyHeaderProps) => {
  const localeConfig = await localeConfigPromise

  return (
    <header className="sticky z-[60] lg:bottom-0 lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="lg:max-w-[400px]">
        <Card className="md:max-w-[1280px]">
          <CardHeader>
            <CardHeading className="text-2xl tracking-tight sm:text-3xl md:text-3xl">
              Renan Sui
            </CardHeading>
          </CardHeader>
          <CardContent>
            <CardDescription as="h2" className="my-0 mb-2 font-medium">
              {localeConfig.position}
            </CardDescription>
            <CardSeparator />
            <div className="relative">
              <span className="line-clamp-3 max-w-xs opacity-0 md:text-lg lg:text-xl">
                {localeConfig.description}
              </span>
              <CardDescription className="absolute left-0 top-0 line-clamp-3 max-w-xs leading-normal">
                {localeConfig.description}
              </CardDescription>
            </div>
          </CardContent>
        </Card>

        <nav className="hidden lg:block">
          <CardMenuShell sidebarNav={localeConfig.navbarConfig.navItems} />
        </nav>
      </div>

      <ul
        className="relative z-[60] ml-1 mt-8 flex items-center"
        aria-label="Social Media"
      >
        {siteConfig.mainNav.socials.map((social, index) => {
          const Icon = social.icon ? Icons[social.icon] : Icons.externalLink

          return (
            <li className="group mr-2 shrink-0 text-xs" key={`icon-${index}`}>
              <AnimatedShell
                animate={{
                  opacity: 1,
                  transition: { delay: 0.5 + index * 0.5, duration: 1 },
                }}
              >
                <a
                  className="block rounded p-1 transition-all duration-100"
                  href={social.href}
                  target="_blank"
                >
                  <span className="sr-only">{social.title}</span>
                  <Icon className="pointer-events-none h-7 w-7 fill-nier-light-800 text-nier-light-800 transition-colors duration-150 group-hover:fill-nier-light-900 group-hover:text-nier-light-900" />
                </a>
              </AnimatedShell>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
