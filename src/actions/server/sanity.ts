'use server'

import { ProjectItem } from '@/features/menu-sections/types'
import { unstable_cache as cache, revalidateTag } from 'next/cache'
import { client } from '../../../sanity/lib/client'

export async function getProjects(): Promise<ProjectItem[]> {
  return await cache(
    async () => {
      const query = `
    *[_type == 'projects'] | order(_createdAt asc) {
      "id": _id,
      title,
      "slug": slug.current,
      titleImage,
      description,
      liveDemoLink,
      githubLink
    }`

      return await client.fetch<ProjectItem[]>(query)
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
