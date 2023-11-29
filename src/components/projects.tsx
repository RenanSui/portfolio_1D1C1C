import { optionStateAtom } from '@/atoms/global'
import { projectItems } from '@/db/projects'
import { useBackToMenu } from '@/hooks/use-back-menu'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { useSelectKeyboard } from '@/hooks/use-select-keyboard'
import { useAtom } from 'jotai'
import { useCallback, useEffect, useRef } from 'react'
import { NierLine } from './nier/nier-line'
import { NierPattern } from './nier/nier-pattern'
import { NierSuggestions } from './nier/nier-suggestions'
import { ProjectCard } from './projects/project-card'
import { ProjectItem } from './projects/project-item'
import { Header } from './ui/header'

const Projects = () => {
  const [, setOptionState] = useAtom(optionStateAtom)
  const [projectId, setProjectId] = useLocalStorage('projectId', '0')

  const backToMenu = useCallback(() => setOptionState(''), [setOptionState])

  const ProjectsRef = useRef<HTMLDivElement>(null)

  const changeProject = () => {
    const localStorageValue = localStorage.getItem('projectId')

    setProjectId(
      localStorageValue ? (JSON.parse(localStorageValue) as string) : '0',
    )
  }

  useSelectKeyboard(ProjectsRef)

  useBackToMenu(backToMenu)

  const projectItem = projectItems[Number(projectId)]

  useEffect(() => {
    setTimeout(() => null)
  }, [projectId])

  return (
    <section className="z-[60] flex min-h-screen w-full flex-col bg-nier-500 text-nier-900">
      <NierPattern variant="block" />

      <div className="flex flex-1 flex-col pb-2">
        <Header onClick={backToMenu}>PROJECTS</Header>

        <div className="mx-3 flex h-full flex-row-reverse gap-6 py-8 md:mx-12 md:max-h-[800px]">
          {/* tablet and above */}
          <div className="hidden flex-1 flex-col gap-4 bg-nier-600 shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:flex">
            <div className="mx-3 mt-2 h-[1px] bg-nier-700 opacity-70" />
            <section
              className="projects flex cursor-default flex-col gap-2"
              ref={ProjectsRef}
              data-elementtype="projectShell"
            >
              {projectItems.map((item) => (
                <ProjectItem
                  key={item.id}
                  id={String(item.id)}
                  onClick={changeProject}
                >
                  {item.name}
                </ProjectItem>
              ))}
            </section>
          </div>
          {/* <div className="mx-3 mb-2 mt-auto h-[1px] bg-nier-700 opacity-70" /> */}

          {/* table and above project card */}
          {projectItem && (
            <ProjectCard
              className="hidden flex-1 md:flex"
              key={projectItem.id} // change Card
              projectItems={projectItem}
            />
          )}

          {/* mobile only project card */}
          <div className="flex w-full flex-col gap-8 md:hidden">
            {projectItems.map((item) => (
              <ProjectCard key={item.id} projectItems={item} />
            ))}
          </div>

          <NierLine />
        </div>
      </div>

      <NierSuggestions onClick={backToMenu}>Preview a project</NierSuggestions>

      <NierPattern variant="block" />
    </section>
  )
}

export { Projects }
