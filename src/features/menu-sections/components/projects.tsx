import { menuStateAtom, optionStateAtom } from '@/atoms/global'
import { NierLine, NierPattern, NierSuggestions } from '@/features/nier'
import { useItemByMouse } from '@/hooks/use-item-by-mouse'
import { activateAndClick } from '@/lib/utils'
import { useAtom } from 'jotai'
import { projectItems } from '../config'
import { ProjectItem } from '../types'
import {
  Card,
  CardButtonLink,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeading,
  CardImageLink,
  CardSeparator,
} from './ui/card'
import { CardMenu, CardMenuHeading, CardMenuItem } from './ui/card-menu'
import { SectionHeading } from './ui/section-heading'

const Projects = () => {
  const [, setOption] = useAtom(optionStateAtom)
  const [, setMenuState] = useAtom(menuStateAtom)

  const backToMenu = () => {
    setOption('')
    setMenuState('menu')
  }

  const { item, changeItem } = useItemByMouse<ProjectItem>(projectItems)

  return (
    <section className="z-[60] flex min-h-screen w-full flex-col bg-nier-500 text-nier-900">
      <NierPattern variant="block" />

      <div className="flex flex-1 flex-col pb-2">
        <SectionHeading onClick={backToMenu}>PROJECTS</SectionHeading>

        <div className="mx-3 flex h-full flex-row-reverse gap-6 py-8 md:mx-12 md:max-h-[800px]">
          {/* tablet and above */}
          <CardMenu className="ml-6 hidden flex-1 md:block">
            {projectItems.map((item) => (
              <CardMenuItem
                key={`project-${item.id}`}
                onClick={() => changeItem(item.id)}
                onMouseOver={(e) => activateAndClick(e.currentTarget)}
                data-active={item.id === 0 ? 'true' : 'false'}
              >
                <CardMenuHeading>{item.name}</CardMenuHeading>
              </CardMenuItem>
            ))}
          </CardMenu>

          {/* table and above project card */}
          {item && (
            <Card key={`item-${item.id}`} className="hidden flex-1 md:flex">
              <CardHeader>
                <CardHeading>{item.name}</CardHeading>
              </CardHeader>
              <CardContent>
                <CardImageLink
                  className={item.imagePreview}
                  href={item.liveDemoLink}
                />
                <CardSeparator className="mt-4" />
                <CardDescription>{item.description}</CardDescription>
                <CardSeparator />
              </CardContent>
              <CardFooter className="flex gap-4">
                <CardButtonLink href={item.liveDemoLink}>
                  Live demo
                </CardButtonLink>
                <CardButtonLink href={item.githubLink}>Github</CardButtonLink>
              </CardFooter>
            </Card>
          )}

          {/* mobile only project card */}
          <div className="flex w-full flex-col gap-8 md:hidden">
            {projectItems.map((project) => {
              return (
                <Card key={`item-${project.id}`} className="flex-1">
                  <CardHeader>
                    <CardHeading>{project.name}</CardHeading>
                  </CardHeader>
                  <CardContent>
                    <CardImageLink
                      className={project.imagePreview}
                      href={project.liveDemoLink}
                    />
                    <CardSeparator className="mt-4" />
                    <CardDescription>{project.description}</CardDescription>
                    <CardSeparator />
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <CardButtonLink href={project.liveDemoLink}>
                      Live demo
                    </CardButtonLink>
                    <CardButtonLink href={project.githubLink}>
                      Github
                    </CardButtonLink>
                  </CardFooter>
                </Card>
              )
            })}
          </div>

          <NierLine className="hidden md:flex" />
        </div>
      </div>

      <NierSuggestions onClick={backToMenu}>Preview a project</NierSuggestions>

      <NierPattern variant="block" />
    </section>
  )
}

export { Projects }
