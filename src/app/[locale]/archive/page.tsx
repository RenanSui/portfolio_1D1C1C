import { getProjects } from '@/actions/server/sanity'
import { FocusText } from '@/components/focus-text'
import { NierVignette } from '@/components/nier/nier-vignette'
import { Section } from '@/components/shells/section'
import { Icons } from '@/components/ui/icons'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { locales } from '@/config/site'
import { unstable_setRequestLocale as setRequestLocale } from 'next-intl/server'
import Link from 'next/link'

export default async function ArchivePage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  const projects = await getProjects()

  return (
    <div
      className="relative animate-fade-in"
      style={{
        animationDelay: '0s',
        animationFillMode: 'both',
        animationDuration: '1s',
      }}
    >
      <div className="pointer-events-none fixed left-0 top-0 h-full w-full bg-[url(/assets/wallpapers/light-theme-1440.png)] bg-cover" />
      <NierVignette variant="dark" className="fixed z-10" />

      <div className="container relative min-h-screen px-6 py-6 lg:flex lg:justify-between lg:gap-4 lg:px-10 lg:py-0">
        <div className="mx-auto max-w-screen-xl pt-8 font-sans lg:py-16">
          <Section id="archive">
            <div className="-space-y-2">
              <Link
                className="group relative z-50 mb-2 inline-flex items-center font-semibold leading-tight text-nier-light-900 hover:text-red-600 hover:underline"
                href={`/${locale}`}
              >
                <span className="inline-block">
                  <Icons.internalLink className="ml-1 inline-block h-4 w-4 shrink-0 rotate-180 transition-transform group-hover:-translate-x-2 group-focus-visible:-translate-x-2 motion-reduce:transition-none" />
                </span>
                <span>Renan Sui</span>
              </Link>
              <h1 className="text-4xl font-bold tracking-tight text-nier-light-900 sm:text-5xl">
                All Projects
              </h1>
            </div>

            <Table className="mt-12 w-full border-collapse text-left">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] font-bold text-zinc-900">
                    Year
                  </TableHead>
                  <TableHead className="font-bold text-zinc-900">
                    Project
                  </TableHead>
                  <TableHead className="hidden w-[100px] font-bold text-zinc-900 lg:table-cell">
                    Made at
                  </TableHead>
                  <TableHead className="hidden font-bold text-zinc-900 lg:table-cell">
                    Built with
                  </TableHead>
                  <TableHead className="hidden font-bold text-zinc-900 sm:table-cell">
                    Link
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => {
                  return (
                    <TableRow key={`project-${project.id}`}>
                      <TableCell className="font-medium text-nier-light-900/70">
                        {project.year}
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="hidden font-bold sm:block">
                          <FocusText>{project.title}</FocusText>
                        </div>
                        <Link
                          href={project.liveDemoLink}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="View Full Résumé (opens in a new tab)"
                          className="group/link inline-flex items-baseline text-base font-medium leading-tight text-nier-light-900 transition-colors duration-150 hover:text-red-600 hover:underline focus-visible:text-red-600 sm:hidden"
                        >
                          <span className="pointer-events-none">
                            {project.title}
                            <span className="inline-block">
                              <Icons.externalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                            </span>
                          </span>
                        </Link>
                      </TableCell>
                      <TableCell className="hidden font-medium opacity-50 lg:table-cell"></TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <ul className="flex -translate-y-1.5 flex-wrap">
                          {project.technologies?.map((tech) => {
                            return (
                              <li
                                key={`project-${project.id}-tech-${tech}`}
                                className="my-1 mr-1.5"
                              >
                                <div className="flex items-center rounded-full bg-nier-light-900/60 px-3 py-1 text-xs font-medium leading-5 text-nier-light-100 opacity-90">
                                  {tech}
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Link
                          href={project.liveDemoLink}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="View Full Résumé (opens in a new tab)"
                          className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-nier-light-800/90 transition-colors duration-150 hover:text-red-600 hover:underline focus-visible:text-red-600"
                        >
                          <span className="pointer-events-none">
                            {project.liveDemoLink
                              .replace('https://', '')
                              .replace('http://', '')}
                            <span className="inline-block">
                              <Icons.externalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                            </span>
                          </span>
                        </Link>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Section>
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
