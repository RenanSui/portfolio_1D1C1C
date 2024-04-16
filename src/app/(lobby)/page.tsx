import { LobbyHeader } from '@/components/layouts/lobby-header'
import { LobbyMain } from '@/components/layouts/lobby-main'
import { siteConfig } from '@/config/site'
import { NierVignette } from '@/features/nier'

export default function IndexPage() {
  return (
    <div className="">
      <div className="pointer-events-none fixed left-0 top-0 h-full w-full bg-[url(/assets/wallpapers/light-theme-1440.png)] bg-cover" />

      <NierVignette variant="dark" className="fixed z-10" />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-16 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <LobbyHeader siteConfig={siteConfig} />
          <LobbyMain></LobbyMain>
        </div>
      </div>
    </div>
  )
}
