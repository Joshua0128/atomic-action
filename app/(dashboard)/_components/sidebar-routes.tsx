'use client'

import { Compass, Layout } from 'lucide-react'
import { SidebarItem } from './sidebar-item'

const guestRoutes = [
	{
		icon: Layout,
		label: '我的學習計畫',
		href: '/',
	},
	{
		icon: Compass,
		label: '學習計畫列表',
		href: '/search',
	},
]

export const SidebarRoutes = () => {
	const routes = guestRoutes

	return (
		<div className="flex flex-col w-full">
			{routes.map((route) => (
				<SidebarItem
					key={route.href}
					icon={route.icon}
					label={route.label}
					href={route.href}
				/>
			))}
		</div>
	)
}
