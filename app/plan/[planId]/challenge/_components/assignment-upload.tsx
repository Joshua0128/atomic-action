'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ToastAction } from '@/components/ui/toast'

import { useToast } from '@/components/ui/use-toast'

const AssignmentUpload = () => {
	const { toast } = useToast()

	const onUpload = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		toast({
			variant: 'default',
			title: '文件上傳中...',
			description: '正在上傳您的檔案，請稍候...',
			action: <ToastAction altText="Try again">關閉</ToastAction>,
		})
	}

	return (
		<section className="w-full max-w-md mx-auto py-12 md:py-16">
			<div className="space-y-4">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tighter">
						上傳你的作業 (.zip)
					</h2>
					<p className="text-muted-foreground">
						請上傳您要選擇並上傳到伺服器的 .zip 檔案。
					</p>
				</div>
				<form className="space-y-4">
					<div className="grid gap-2">
						<Label htmlFor="file">文件</Label>
						<div className="flex items-center gap-2">
							<Input
								id="file"
								type="file"
								accept=".zip"
								className="flex-1"
							/>
						</div>
					</div>
					<Button type="submit" className="w-full" onClick={onUpload}>
						上傳
					</Button>
				</form>
			</div>
		</section>
	)
}

export default AssignmentUpload
