'use client'

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { revalidateItems } from '@/actions/server/sanity'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return (
    <>
      <button className="m-1 rounded bg-white p-1" onClick={revalidateItems}>
        Revalidate Items
      </button>

      <NextStudio config={config} />
    </>
  )
}
