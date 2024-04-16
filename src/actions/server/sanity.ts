'use server'

import { ProjectItem } from '@/features/menu-sections/types'
import { client } from '../../../sanity/lib/client'

export async function getProjects(): Promise<ProjectItem[]> {
  const query = `
    *[_type == 'projects'] | order(_createdAt asc) {
      "id": _id,
      title,
      "slug": slug.current,
      titleImage,
      description,
      liveDemoLink,
      githubLink
    }
  `

  return await client.fetch<ProjectItem[]>(query)
}
