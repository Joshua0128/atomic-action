import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface ChallengeCardProps {
	date: string
	title: string
	isFinished?: boolean
	isFeedback?: boolean
}

export const ChallengeCard = ({
	date,
	title,
	isFinished,
	isFeedback,
}: ChallengeCardProps) => {
	return (
		<div className="border-primary shadow-sm">
			<Card>
				<CardHeader className="flex space-y-4">
					<div>
						<Badge variant="date">{date}</Badge>
					</div>
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-wrap gap-2">
					<div className="space-x-2">
						<Badge
							className={cn(
								'bg-slate-500',
								isFinished && 'bg-emerald-500'
							)}
						>
							{isFinished ? '已完成' : '未完成'}
						</Badge>
						<Badge
							variant={'default'}
							className={cn(
								'bg-slate-500',
								isFeedback && 'bg-amber-500'
							)}
						>
							{isFeedback ? 'Mentor已回覆' : 'Mentor尚未回覆'}
						</Badge>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
