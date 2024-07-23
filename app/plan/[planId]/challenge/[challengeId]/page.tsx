'use client'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowLeftIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'
import AssignmentUpload from '../_components/assignment-upload'

export default function Challenge({
	params,
}: {
	params: {
		planId: string
		challengeId: string
	}
}) {
	const router = useRouter()

	const onBack = () => {
		router.back()
	}

	return (
		<div className="flex flex-col min-h-screen w-full pr-64">
			<div className="flex flex-col w-full max-w-3xl px-4 py-6 md:px-6 md:py-12 lg:px-8 lg:py-16 overflow-y-auto">
				<div className="flex items-center mb-4">
					<Button variant={'ghost'} onClick={onBack}>
						<ArrowLeftIcon className="w-4 h-4" />
						<span>Back</span>
					</Button>
					<div className="h-6 w-[1px] bg-muted mx-4" />
					<h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
						Mastering Responsive Design: A Beginner&apos;s Guide
					</h1>
				</div>
				<div className="prose prose-gray dark:prose-invert overflow-auto">
					<p>
						In the ever-evolving world of web development,
						responsive design has become a crucial aspect of
						creating seamless user experiences. As the number of
						devices and screen sizes continues to grow, it&apos;s
						essential for developers to understand the principles of
						responsive design and how to implement them effectively.
					</p>
					<p>
						We&apos;ll also dive into practical techniques and best
						practices to ensure your web applications adapt
						gracefully to various screen sizes and devices.
					</p>
					<h2>Understanding Responsive Design</h2>
					<p>
						Responsive design is an approach to web development that
						aims to create websites and web applications that
						provide an optimal viewing and interaction experience
						across a wide range of devices, from desktop computers
						to mobile phones.
					</p>
					<p>The core principles of responsive design include:</p>
					<ul>
						<li>
							Flexible Grids: Using a flexible grid system that
							can adapt to different screen sizes.
						</li>
						<li>
							Fluid Images and Media: Ensuring that images,
							videos, and other media scale proportionally to the
							available space.
						</li>
						<li>
							Media Queries: Applying specific styles based on
							device characteristics, such as screen size,
							resolution, and orientation.
						</li>
					</ul>
					<h2>Implementing Responsive Design</h2>
					<p>
						To implement responsive design, you can follow these
						steps:
					</p>
					<ol>
						<li>
							<strong>Set up a Flexible Grid System:</strong> Use
							a CSS framework like Tailwind CSS or create your own
							grid system using CSS Flexbox or CSS Grid.
						</li>
						<li>
							<strong>Optimize Images and Media:</strong> Ensure
							that images, videos, and other media scale
							proportionally to the available space. You can use
						</li>
						<li>
							<strong>Utilize Media Queries:</strong> Use media
							queries to apply specific styles based on device
							characteristics, such as screen size, resolution,
							and orientation.
						</li>
						<li>
							<strong>Test and Iterate:</strong> Test your design
							on various devices and screen sizes, and make
							adjustments as needed to ensure a consistent and
							optimal user experience.
						</li>
					</ol>
					<p>
						By following these principles and techniques, you can
						create responsive web applications that provide a
						seamless experience for users, regardless of the device
						they&apos;re using.
					</p>
				</div>
			</div>
			<AssignmentUpload />
			<div className="hidden md:block fixed right-0 top-20 bottom-0 w-64 bg-muted p-6 overflow-auto">
				<h2 className="text-lg font-bold mb-4">Todo List</h2>
				<div className="space-y-2">
					<div className="flex items-center gap-2">
						<Checkbox />
						<span>Finish responsive design article</span>
					</div>
					<div className="flex items-center gap-2">
						<Checkbox />
						<span>Implement mobile-friendly navigation</span>
					</div>
					<div className="flex items-center gap-2">
						<Checkbox />
						<span>Optimize images for faster loading</span>
					</div>
					<div className="flex items-center gap-2">
						<Checkbox />
						<span>Test design on various devices</span>
					</div>
					<div className="flex items-center gap-2">
						<Checkbox />
						<span>Write a blog post about responsive design</span>
					</div>
					<div className="flex items-center gap-2">
						<Checkbox />
						<span>
							Attend a webinar on the latest CSS techniques
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
