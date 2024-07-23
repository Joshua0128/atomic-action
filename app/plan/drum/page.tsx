import { Progress } from '@/components/ui/progress'

export default function Plan() {
	return (
		<div>
			<h1>Drum</h1>
			<Progress value={50} max={100} />
		</div>
	)
}
