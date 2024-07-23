'use client'

import {
	Card,
	CardContent,
	CardTitle,
	CardDescription,
} from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function PlanCard() {
	const router = useRouter()
	return (
		<Card className="w-full max-w-sm rounded shadow-md">
			<Image
				src="/placeholder.png"
				width={200}
				height={200}
				alt="Course thumbnail"
				className="rounded-t-lg object-cover w-full h-[200px]"
			/>
			<CardContent className="p-6 space-y-4">
				<div className="space-y-2">
					<CardTitle className="text-xl font-semibold">
						爆裂鼓手的三十天養成
					</CardTitle>
					<CardDescription className="text-muted-foreground">
						三十天的時間，踏上成為傳奇鼓手的道路。
					</CardDescription>
				</div>
				<div className="flex items-center gap-4">
					<Avatar className="border">
						<AvatarFallback>阿爆</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<div className="font-medium">阿爆老師</div>
						<div className="text-sm text-muted-foreground"></div>
					</div>
				</div>
				<Button
					className="w-full bg-emerald-300"
					variant={'default'}
					onClick={() => router.push('/plan/drum')}
				>
					加入課程
				</Button>
			</CardContent>
		</Card>
	)
}
