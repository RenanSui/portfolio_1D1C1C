'use client'
import { BootScreen } from '@/components/boot-screen'
import { LoadingScreen } from '@/components/loading-screen'
import { MainMenu } from '@/components/main-menu'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
	const [showLoading, setShowLoading] = useState(false)
	const [showBootScreen, setShowBootScreen] = useState(true)
	const [showMainMenu, setShowMainMenu] = useState(false)

	return (
		<>
			<main className="relative h-screen w-screen bg-black text-zinc-100">
				{showBootScreen && <BootScreen {...{ setShowLoading }} />}
				<AnimatePresence>
					{showLoading && (
						<LoadingScreen
							{...{ setShowBootScreen, setShowLoading, setShowMainMenu }}
						/>
					)}
					{showMainMenu && <MainMenu />}
				</AnimatePresence>
			</main>
		</>
	)
}
