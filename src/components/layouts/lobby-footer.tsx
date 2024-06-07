import { LanguageToggler } from './language-toggler'

export async function LobbyFooter() {
  return (
    <div
      className="relative animate-fade-in"
      style={{
        animationDelay: '1s',
        animationFillMode: 'both',
        animationDuration: '1s',
      }}
    >
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

        <div className="relative z-[60] mb-auto ml-1 mt-2 flex justify-between gap-4">
          <LanguageToggler />
        </div>
      </footer>
    </div>
  )
}
