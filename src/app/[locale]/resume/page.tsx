import { locales } from '@/config/site'
import { unstable_setRequestLocale as setRequestLocale } from 'next-intl/server'

export default function ResumePage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  return (
    <main className="relative flex min-h-screen flex-col text-white">
      <object
        data={`/pdf/renansui_cv_${locale}.pdf`}
        type="application/pdf"
        className="relative z-[10001] h-full w-full flex-1"
      />
    </main>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
