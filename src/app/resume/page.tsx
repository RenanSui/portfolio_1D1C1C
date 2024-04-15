import { NierButton, NierLine, NierPattern, NierVignette } from '@/features/nier'
import Link from 'next/link'

export default function ResumePage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-nier-light-100">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[url(/assets/wallpapers/light-theme-1440.png)] bg-cover" />

      <div className="mx-3 my-4 flex h-full max-h-[40px] gap-6 md:mx-12 ">
        <NierLine className="absolute hidden h-[40px] md:flex" />
        <div className="flex h-[40px] w-full max-w-full gap-[56px] overflow-hidden md:pl-16">
          <Link href="/">
            <NierButton className="tracking-widest">Portfolio</NierButton>
          </Link>
        </div>
      </div>

      <NierVignette variant={'light'} />

      <NierPattern variant="block" className="lg:py-0" />

      <h1 className="sr-only">Portfolio / CV</h1>

      <div className="mx-3 flex h-full flex-1 flex-wrap gap-6 pb-8 md:mx-12 md:max-h-[800px] md:flex-row-reverse lg:my-4">
        <div className="flex flex-1 flex-col">
          <object
            data="pdf/resume_renan_neves_atualizado.pdf"
            type="application/pdf"
            className="z-[10000] h-full w-full flex-1 p-2"
          />
        </div>
        <NierLine className="hidden md:flex" />
      </div>

      <NierPattern variant="block" />
    </main>
  )
}
