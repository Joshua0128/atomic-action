import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'

export const Sidebar = () => {
	return (
		<div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
			<div className="flex flex-col mt-10 pt-20 items-center w-full">
				<Avatar className="border w-36 h-36">
					<AvatarImage
						src="/avator.png"
						className="object-cover w-full h-full"
					/>
				</Avatar>
			</div>
			<div className="flex flex-col items-center mt-10 w-full px-3">
				<h1 className="text-xl">黃伯超</h1>
				<Progress
					className="mt-5 w-full"
					value={87}
					max={100}
					indicatorColor="bg-emerald-500"
				/>
			</div>
		</div>
	)
}
