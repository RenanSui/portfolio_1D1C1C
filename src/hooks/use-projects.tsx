import { getProjects } from '@/actions/server/sanity'
import { ProjectItem } from '@/features/menu-sections/types'
import { useEffect, useState } from 'react'

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectItem[] | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await getProjects()
      setProjects(fetchedProjects)
    }
    fetchProjects()
  }, [])

  console.log({ projects })

  return projects
}
