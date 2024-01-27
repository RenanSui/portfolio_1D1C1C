'use client'

import {
  NierButton,
  NierLine,
  NierPattern,
  NierVignette,
} from '@/features/nier'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const backToPage = () => router.push('/')

  return (
    <main className="relative flex min-h-screen flex-col bg-nier-light-100">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[url(/assets/wallpapers/light-theme-1440.png)] bg-cover" />

      <div className="mx-3 my-4 flex h-full max-h-[40px] gap-6 md:mx-12 ">
        <NierLine className="absolute h-[40px]" />
        <div className="flex h-[40px] w-full max-w-full gap-[56px] overflow-hidden pl-16">
          <NierButton className="tracking-widest" onClick={backToPage}>
            Portfolio
          </NierButton>
        </div>
      </div>

      <NierVignette variant={'light'} />

      <NierPattern variant="block" className="lg:py-0" />

      <h1 className="sr-only">Portfolio / CV</h1>

      <div className="flex flex-1 flex-col">
        <object
          data="pdf/resume_renan_neves_atualizado.pdf"
          type="application/pdf"
          className="z-[10000] h-full w-full flex-1 p-2"
        />
      </div>

      <NierPattern variant="block" />
    </main>
  )
}
