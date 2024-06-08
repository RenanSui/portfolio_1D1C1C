import { getProjects } from '@/actions/server/sanity'
import { Capitalize, getFormattedTranslation } from '@/lib/utils'
import { LocaleType } from '@/types'
import { getLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '../../../sanity/lib/image'
import { Section } from '../shells/section'
import { Icons } from '../ui/icons'

type LobbyProjectsProps = {
  projects: Awaited<ReturnType<typeof getProjects>>
  localeConfig: Awaited<ReturnType<typeof getFormattedTranslation>>
}

export async function LobbyProjects({
  projects,
  localeConfig,
}: LobbyProjectsProps) {
  const { titles } = localeConfig.navbarConfig
  const locale = (await getLocale()) as LocaleType
  const intl = await getTranslations({ locale, namespace: 'Index' })
  const footer = {
    internal_link_1: intl(`navItems.projects.footer.internal_link_1`) ?? '',
  }

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
        id="projects"
        className="mb-16 scroll-mt-16 font-medium opacity-90 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <div className="relative top-0 z-[60] -mx-6 mb-8 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
          <h2 className="sr-only">{Capitalize(titles.projects)}</h2>
          <p className="font-bold uppercase tracking-widest text-nier-light-900 ">
            {titles.projects.toUpperCase()}
          </p>
        </div>
        <ul className="group/list">
          {projects.splice(0, 4).map((project, index) => {
            return (
              <li className="mb-12" key={`project-${project.id}`}>
                <div
                  className="relative animate-fade-in"
                  style={{
                    animationDelay: `${1 + index * 0.3}s`,
                    animationFillMode: 'both',
                    animationDuration: '1s',
                  }}
                >
                  <div className="group relative grid gap-4 p-2 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded bg-nier-light-800/15 transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:bg-transparent lg:group-hover:bg-nier-light-800/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <a
                          href={project.liveDemoLink}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group/link inline-flex items-baseline text-base font-medium leading-tight text-nier-light-900 hover:text-nier-light-900 focus-visible:text-nier-light-900"
                        >
                          <span className="clickable absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                          <span>{project.title}</span>
                          <span>
                            <Icons.externalLink className="pointer-events-none ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                          </span>
                        </a>
                      </h3>

                      <p className="mt-2 text-sm leading-normal">
                        {project.descriptions?.map((desc) => {
                          return desc.locale === locale ? desc.message : ''
                        })}
                      </p>

                      <ul
                        className="pointer-events-none mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        {project.technologies?.map((tec, index2) => {
                          return (
                            <li className="mr-1.5 mt-2" key={`tec-${index2}`}>
                              <span className="flex items-center rounded-full bg-nier-light-900/60 px-3 py-1 text-xs font-medium leading-5 text-nier-light-100 opacity-90">
                                {tec}
                              </span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <Image
                      src={urlForImage(project.titleImage)}
                      alt={project.descriptions
                        ?.map((desc) => {
                          return desc.locale === locale ? desc.message : ''
                        })
                        .join('')}
                      className="rounded border-2 border-nier-light-500/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      loading="lazy"
                      width={200}
                      height={48}
                      decoding="async"
                    />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <Link
          href={`/${locale}/archive`}
          className="group inline-flex items-baseline text-base font-medium leading-tight text-nier-light-900 transition-colors duration-150 hover:text-red-600 hover:underline focus-visible:text-red-600"
        >
          <span className="pointer-events-none">
            {footer.internal_link_1}
            <span className="inline-block">
              <Icons.internalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
            </span>
          </span>
        </Link>
      </Section>
    </div>
  )
}
