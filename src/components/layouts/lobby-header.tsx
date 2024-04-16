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
            <CardDescription className="my-0 mb-2 font-medium">{siteConfig.position}</CardDescription>
            <CardSeparator />
            <CardDescription className="max-w-xs leading-normal">{siteConfig.description}</CardDescription>
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
            <li className="mr-2 shrink-0 text-xs" key={`social-${social.title}`}>
              <a
                className="block rounded p-1 text-nier-light-900 transition-all duration-100 hover:bg-nier-light-900/20"
                href={social.href}
                target="_blank"
              >
                <span className="sr-only">{social.title}</span>
                <Icon className="pointer-events-none h-7 w-7" aria-hidden="true" />
              </a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
