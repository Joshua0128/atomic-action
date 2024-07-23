'use client'

import { UserButton } from '@clerk/nextjs'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

export const NavbarRoutes = () => {
	const pathname = usePathname()
	const router = useRouter()

	const isTeacherPage = false
	const isPlayerPage = pathname?.startsWith('/chapter')

	return (
		<div className="flex gap-x-2 ml-auto">
			<Link href="/teachers/courses">
				<Button size="sm" variant="link">
					體驗計畫
				</Button>
			</Link>
			<Link href="/teachers/courses">
				<Button size="sm" variant="link">
					學習成果
				</Button>
			</Link>
			<Link href="/teachers/courses">
				<Button size="sm" variant="link">
					共享社群
				</Button>
			</Link>
			<UserButton />
		</div>
	)
}
