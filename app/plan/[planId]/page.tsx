import Link from 'next/link'
import { ChallengeCard } from '../_components/challenge-card'
import { CourseTitle } from '../_components/course-title'

export default function Plan() {
	return (
		<div className="flex flex-col items-center w-full h-screen">
			<div className="px-4 py-6 md:px-6 md:py-12 lg:py-12 w-full">
				<CourseTitle />
				<div className="w-full px-10 mt-6 space-y-8">
					<h2 className="text-3xl font-bold">階段一：打下去</h2>
					<Link href="/plan/1/challenge/1">
						<ChallengeCard
							title="挑戰一，挑選你命中註定的鼓棒"
							date="Day 1"
							isFinished={true}
							isFeedback={true}
						/>
					</Link>
					<ChallengeCard
						title="挑戰二，第一次握鼓棒"
						date="Day 2"
						isFinished={true}
						isFeedback={false}
					/>
					<ChallengeCard
						title="挑戰三，節奏搖滾"
						date="Day 3"
						isFinished={false}
						isFeedback={false}
					/>
					<h2 className="text-3xl font-bold">階段一：打爆</h2>
					<ChallengeCard
						title="挑戰四，節奏 Rock n Roll"
						date="Day 3"
						isFinished={false}
						isFeedback={false}
					/>
				</div>
			</div>
		</div>
	)
}
