import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardHeading,
  CardSeparator,
} from '@/features/menu-sections/components/ui/card'
import { CardMenu } from '@/features/menu-sections/components/ui/card-menu'
import { SiteConfig } from '@/types'
import { CardMenuShell } from '../shells/card-menu-shell'
import { Icons } from '../ui/icons'

interface LobbyHeaderProps {
  siteConfig: SiteConfig
}

export const LobbyHeader = ({ siteConfig }: LobbyHeaderProps) => {
  return (
    <header className="sticky z-[60] lg:bottom-0 lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="lg:max-w-[400px]">
        <Card className="md:max-w-[1280px]">
          <CardHeader>
            <CardHeading className="text-2xl tracking-tight sm:text-3xl md:text-3xl">{siteConfig.author}</CardHeading>
          </CardHeader>
          <CardContent>
            <CardDescription as="h2" className="my-0 mb-2 font-medium">
              {siteConfig.position}
            </CardDescription>
            <CardSeparator />
            <div className="relative">
              <span className="max-w-xs py-2 opacity-0 md:text-lg lg:text-xl">{siteConfig.description}</span>
              <CardDescription className="absolute left-0 top-0 max-w-xs leading-normal">
                {siteConfig.description}
              </CardDescription>
            </div>
          </CardContent>
        </Card>

        <nav className="hidden lg:block">
          <CardMenu className="mt-12 py-2 text-nier-light-900">
            {siteConfig.navbarConfig.sidebarNav.map((nav) => (
              <CardMenuShell key={`project-${nav.id}`} nav={nav}></CardMenuShell>
            ))}
          </CardMenu>
        </nav>
      </div>

      <ul className="relative z-[60] ml-1 mt-8 flex items-center" aria-label="Social Media">
        {siteConfig.navbarConfig.socials.map((social) => {
          const Icon = social.icon ? Icons[social.icon] : Icons.externalLink

          return (
            <li className="group mr-2 shrink-0 text-xs" key={`social-${social.title}`}>
              <a className="block rounded p-1 transition-all duration-100" href={social.href} target="_blank">
                <span className="sr-only">{social.title}</span>
                <Icon className="pointer-events-none h-7 w-7 fill-nier-light-800 text-nier-light-800 transition-colors duration-150 group-hover:fill-nier-light-900 group-hover:text-nier-light-900" />
              </a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
