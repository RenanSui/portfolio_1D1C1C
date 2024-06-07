import { getProjects } from '@/actions/server/sanity'
import { getFormattedTranslation } from '@/lib/utils'
import { LobbyExperience } from './lobby-experience'
import { LobbyProjects } from './lobby-projects'

type LobbyMainProps = {
  projectsPromise: ReturnType<typeof getProjects>
  localeConfigPromise: ReturnType<typeof getFormattedTranslation>
}

export const LobbyMain = async ({
  projectsPromise,
  localeConfigPromise,
}: LobbyMainProps) => {
  const projects = await projectsPromise
  const localeConfig = await localeConfigPromise

  return (
    <main className="relative">
      <LobbyExperience localeConfig={localeConfig} />
      <LobbyProjects projects={projects} localeConfig={localeConfig} />
    </main>
  )
}
