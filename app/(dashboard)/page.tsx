import PlanCard from './_components/plan-card'

export default function Home() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
			<PlanCard />
			<PlanCard />
			<PlanCard />
			<PlanCard />
			<PlanCard />
			<PlanCard />
		</div>
	)
}
