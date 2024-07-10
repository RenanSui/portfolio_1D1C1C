export default function ResumePage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <object
        data="pdf/renansui_cv_pt-br.pdf"
        type="application/pdf"
        className="z-[10000] h-full w-full flex-1"
      />
    </main>
  )
}
