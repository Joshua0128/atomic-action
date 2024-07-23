import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'

export const Sidebar = () => {
	return (
		<div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
			<div className="flex flex-col mt-10 items-center w-full">
				<Avatar className="border w-36 h-36">
					<AvatarImage
						src="/avator.png"
						className="object-cover w-full h-full"
					/>
				</Avatar>
			</div>
			<div>
				<h1 className="flex flex-col items-center justify-center mt-5">
					黃伯超
				</h1>
				<Progress
					className="mt-5 w-full"
					value={50}
					max={100}
					indicatorColor="bg-blue-500"
				/>
			</div>
		</div>
	)
}
