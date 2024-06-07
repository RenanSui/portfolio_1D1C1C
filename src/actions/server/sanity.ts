'use server'

import { Project } from '@/types'
import { unstable_cache as cache, revalidateTag } from 'next/cache'
import { client } from '../../../sanity/lib/client'

export async function getProjects() {
  return await cache(
    async () => {
      const query = `
    *[_type == 'projects'] | order(_createdAt asc) {
      "id": _id,
      year,
      title,
      "slug": slug.current,
      titleImage,
      description,
      liveDemoLink,
      githubLink,
      technologies
    }`

      const projects = await client.fetch<Project[]>(query)

      return projects
        .sort((project1, project2) => project1.year - project2.year)
        .reverse()
    },
    ['projects'],
    {
      revalidate: false,
      tags: ['projects'],
    },
  )()
}

export async function revalidateItems() {
  revalidateTag('projects')
}
