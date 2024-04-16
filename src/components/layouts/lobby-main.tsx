import { ProjectItem } from '@/features/menu-sections/types'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'
import { Icons } from '../ui/icons'

interface LobbyMainProps {
  projects: ProjectItem[]
}

export const LobbyMain = async ({ projects }: LobbyMainProps) => {
  return (
    <main className="z-[60] pt-24 text-neutral-900 lg:w-1/2 lg:py-24">
      <section id="about" className="mb-16 scroll-mt-16 font-medium opacity-90 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="relative top-0 z-[60] -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12  lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
          <h2 className="sr-only">About</h2>
          <p className="font-bold uppercase tracking-widest text-nier-light-900 ">ABOUT</p>
        </div>
        <p className="mb-4">
          Back in 2010, I decided to try my hand at building private servers for my favorite games with my friends and
          although I was successful in certain aspects I quickly gave up and forgot about it due to problems related to
          my personal life. Fast forward to today, I ended up giving another chance to
          <span className="font-bold transition-colors duration-150 hover:text-red-600"> programming </span>
          and
          <span className="font-bold transition-colors duration-150 hover:text-red-600"> game development</span>, but
          little did I know I was going to be pulled into the
          <span className="font-bold transition-colors duration-150 hover:text-red-600"> web development</span> side.
        </p>
        <p className="mb-4">
          My main focus these days is building accessible user-centered interfaces. I most enjoy building software in
          the sweet spot where design and engineering meet — things that look good but are also built well under the
          hood.
        </p>
        <p className="">
          In the free time I like to play Final Fantasy and Resident Evil games. When I&apos;m not at the computer,
          I&apos;m usually reading economic books or helping my uncles at their car workshop.
        </p>
      </section>

      <section id="experience" className="mb-16 scroll-mt-16 font-medium opacity-90 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="relative top-0 z-[60] -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12  lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
          <h2 className="sr-only">Experience</h2>
          <p className="font-bold uppercase tracking-widest text-nier-light-900">EXPERIENCE</p>
        </div>
        {/* <div className="mt-12"> */}
        <div className="">
          <a
            href="/resume"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-nier-light-900 transition-colors duration-150 hover:text-red-600 focus-visible:text-red-600"
          >
            <span>
              View Full{' '}
              <span className="inline-block">
                Résumé{' '}
                <Icons.externalLink className="pointer-events-none ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
              </span>
            </span>
          </a>
        </div>
      </section>

      <section id="projects" className="mb-16 scroll-mt-16 font-medium opacity-90 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="relative top-0 z-[60] -mx-6 mb-8 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
          <h2 className="sr-only">Projects</h2>
          <p className="font-bold uppercase tracking-widest text-nier-light-900 ">PROJECTS</p>
        </div>
        <ul className="group/list">
          {projects.map((project) => {
            return (
              <li key={`project-${project.id}`} className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
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
                    <p className="mt-2 text-sm leading-normal">{project.description}</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {project.technologies?.map((tec, index) => {
                        return (
                          <li className="mr-1.5 mt-2" key={`tec-${index}`}>
                            <span className="flex items-center rounded-full bg-nier-light-900/40 px-3 py-1 text-xs font-medium leading-5 text-nier-light-100/80 group-hover:bg-nier-light-900/50 group-hover:text-nier-light-100/90">
                              {tec}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <Image
                    src={urlForImage(project.titleImage)}
                    alt={project.description}
                    className="rounded border-2 border-nier-light-500/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    loading="lazy"
                    width={200}
                    height={48}
                    decoding="async"
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <footer className="relative z-[70] max-w-md pb-16 text-sm text-nier-light-900/80 sm:pb-0">
        <p>
          Designed in{' '}
          <a
            href="https://www.figma.com"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-nier-light-900 transition-colors duration-150 hover:text-red-600 focus-visible:text-red-600"
            aria-label="Figma (opens in a new tab)"
          >
            Figma{' '}
          </a>
          and coded in{' '}
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-nier-light-900 transition-colors duration-150 hover:text-red-600 focus-visible:text-red-600"
            aria-label="Visual Studio Code (opens in a new tab)"
          >
            Visual Studio Code{' '}
          </a>
          by yours truly. Built with{' '}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-nier-light-900 transition-colors duration-150 hover:text-red-600 focus-visible:text-red-600"
            aria-label="Next.js (opens in a new tab)"
          >
            Next.js{' '}
          </a>
          and{' '}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-nier-light-900 transition-colors duration-150 hover:text-red-600 focus-visible:text-red-600"
            aria-label="Tailwind CSS (opens in a new tab)"
          >
            Tailwind CSS
          </a>
          , Deployed with{' '}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-nier-light-900 transition-colors duration-150 hover:text-red-600 focus-visible:text-red-600"
            aria-label="Vercel (opens in a new tab)"
          >
            Vercel
          </a>
          . Content provided by{' '}
          <a
            href="https://www.sanity.io"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-nier-light-900 transition-colors duration-150 hover:text-red-600 focus-visible:text-red-600"
            aria-label="Sanity CMS (opens in a new tab)"
          >
            Sanity CMS
          </a>
          .
        </p>
      </footer>
    </main>
  )
}
