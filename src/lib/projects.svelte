<script>
	import X from 'lucide-svelte/icons/x';
	import Plus from 'lucide-svelte/icons/plus';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import RotateCw from 'lucide-svelte/icons/rotate-cw';
	import Home from 'lucide-svelte/icons/home';
	import { EllipsisVertical, Figma, Library, Menu, Search } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { activeSection } from './active_store';
	import ProjectCard from './project_card.svelte';

	onMount(() => {
		let observer = new IntersectionObserver(
			(entrie) => {
				if (entrie[0].isIntersecting) {
					activeSection.set('projects');
				}
			},
			{ threshold: 0.6 }
		);

		// @ts-ignore
		observer.observe(document.getElementById('projects'));
	});
</script>

<section id="projects" class="h-fit rounded-xl px-6 pb-24 pt-24 md:pb-6 lg:h-full">
	<div class="h-full rounded-xl bg-background">
		<div class="hidden h-12 items-center gap-6 md:flex">
			<div
				class="flex h-full items-center justify-between gap-24
				rounded-xl
				bg-[#292A25] p-6"
			>
				<span class="font-medium text-text">Projects</span>
				<X class="h-6 w-6 text-text" />
			</div>
			<Plus class="h-6 w-6 text-text" />
		</div>
		<div class="flex h-12 w-full items-center justify-between md:px-6">
			<div class="hidden flex-1 gap-2 md:flex">
				<ArrowLeft class="h-6 w-6 text-text" />
				<ArrowRight class="h-6 w-6 text-text" />
				<RotateCw class="h-6 w-6 text-text" />
				<Home class="h-6 w-6 text-text" />
			</div>
			<div
				class="flex h-12 flex-1 items-center gap-6 rounded-xl
				bg-[#292A25] px-6"
			>
				<Search class="h-6 w-6 text-[#585956]" />
				<span class="text-xs font-medium text-[#585956] md:text-sm"> Search </span>
				<EllipsisVertical class="ml-auto h-6 w-6 text-text md:hidden" />
			</div>
			<div class="hidden justify-end gap-2 md:flex md:flex-1">
				<Library class="h-6 w-6 text-text" />
				<Menu class="h-6 w-6 text-text" />
			</div>
		</div>
		<div
			class="grid w-full grid-cols-1 place-items-center
			gap-4 p-6 md:grid-cols-2 md:p-12 lg:grid-cols-3"
		>
			<ProjectCard
				src="knowa.webp"
				alt="knowa screenshot"
				title="Knowa"
				description="An AI powered Knowledge base management system"
				href="https://knowa.vercel.app/"
				githubRepo="https://github.com/Al-aqua/knowa"
			>
				<a href="https://www.figma.com/" aria-label="Figma link" target="_blank">
					<Figma class="h-6 w-6 text-text" />
				</a>
				<a href="https://kit.svelte.dev/" aria-label="SvelteKit link" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.5rem"
						height="1.5rem"
						viewBox="0 0 24 24"
						class="text-text"
						{...$$props}
					>
						<path
							fill="currentColor"
							d="M19.8 3.77a6.25 6.25 0 0 0-8.63-1.913L6.11 5.081a6.25 6.25 0 0 0-1.973 8.532a6.25 6.25 0 0 0 8.693 8.53l5.06-3.224a6.25 6.25 0 0 0 1.974-8.532A6.25 6.25 0 0 0 19.8 3.77m-1.352 5.004A6.26 6.26 0 0 0 15.65 7.5a1 1 0 0 0-1.525-1.003L9.066 9.72a1 1 0 1 0 1.075 1.686l2.109-1.343a4.25 4.25 0 1 1 4.567 7.17l-5.06 3.223a4.25 4.25 0 0 1-6.203-5.23A6.25 6.25 0 0 0 8.35 16.5a1 1 0 0 0 1.525 1.003l5.06-3.224a1 1 0 0 0-1.074-1.687l-2.109 1.344a4.25 4.25 0 0 1-4.567-7.17l5.06-3.223a4.25 4.25 0 0 1 6.203 5.23"
						/>
					</svg>
				</a>
				<a href="https://pocketbase.io/" aria-label="PocketBase link" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.5rem"
						height="1.5rem"
						viewBox="0 0 24 24"
						class="text-text"
						{...$$props}
					>
						<path
							fill="currentColor"
							d="M5.684 12a.63.63 0 0 1-.631-.632V4.421c0-.349.282-.632.631-.632h2.37q.69 0 1.287.139q.61.125 1.053.44q.454.303.715.82q.26.502.26 1.246q0 .718-.273 1.247a2.4 2.4 0 0 1-.715.869a3.1 3.1 0 0 1-1.053.503q-.598.165-1.273.164h-.46a.63.63 0 0 0-.632.632v1.52a.63.63 0 0 1-.632.631Zm1.279-4.888c0 .349.283.632.632.632h.343q1.56 0 1.56-1.31q0-.642-.404-.907q-.39-.264-1.156-.264h-.343a.63.63 0 0 0-.632.631Zm6.3 13.098a.63.63 0 0 1-.631-.631v-6.947a.63.63 0 0 1 .631-.632h2.203q.66 0 1.216.1q.57.09.984.328q.414.24.647.63q.246.39.246.982q0 .278-.09.554a1.5 1.5 0 0 1-.26.516a1.86 1.86 0 0 1-1.076.7a.03.03 0 0 0-.023.03c0 .015.01.028.025.03q.887.167 1.346.626q.466.465.466 1.297q0 .63-.246 1.083a2.15 2.15 0 0 1-.685.755a3.4 3.4 0 0 1-1.036.441a5.5 5.5 0 0 1-1.268.139zm1.271-5.542c0 .349.283.631.632.631h.21q.698 0 1.009-.264t.31-.743q0-.453-.323-.642q-.31-.202-.984-.202h-.222a.63.63 0 0 0-.632.632Zm0 3.463c0 .349.283.631.632.631h.39q1.528 0 1.528-1.108q0-.54-.376-.78q-.361-.24-1.152-.24h-.39a.63.63 0 0 0-.632.632zM1.389 0C.629 0 0 .629 0 1.389V15.03a1.4 1.4 0 0 0 1.389 1.39H8.21a.63.63 0 0 0 .63-.632a.63.63 0 0 0-.63-.63H1.389c-.078 0-.125-.05-.125-.128V1.39c0-.078.047-.125.125-.125H15.03c.078 0 .127.047.127.125v6.82a.63.63 0 0 0 .631.63a.63.63 0 0 0 .633-.63V1.389A1.4 1.4 0 0 0 15.032 0ZM15.79 7.578a.63.63 0 0 0-.632.633a.63.63 0 0 0 .631.63h6.822c.078 0 .125.05.125.128V22.61c0 .078-.047.125-.125.125H8.97c-.077 0-.127-.047-.127-.125v-6.82a.63.63 0 0 0-.631-.63a.63.63 0 0 0-.633.63v6.822A1.4 1.4 0 0 0 8.968 24h13.643c.76 0 1.389-.629 1.389-1.389V8.97a1.4 1.4 0 0 0-1.389-1.39Z"
						/>
					</svg>
				</a>
			</ProjectCard>
			<ProjectCard
				src="warqatech.webp"
				alt="warqatech website screenshot"
				title="Warqatech"
				description="The portfolio website for the tech startup warqatech"
				href="https://warqatech.com/"
				githubRepo="https://github.com/Al-aqua"
			>
				<a href="https://www.figma.com/" aria-label="Figma link" target="_blank">
					<Figma class="h-6 w-6 text-text" />
				</a>
				<a href="https://kit.svelte.dev/" aria-label="SvelteKit link" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.5rem"
						height="1.5rem"
						viewBox="0 0 24 24"
						class="text-text"
						{...$$props}
					>
						<path
							fill="currentColor"
							d="M19.8 3.77a6.25 6.25 0 0 0-8.63-1.913L6.11 5.081a6.25 6.25 0 0 0-1.973 8.532a6.25 6.25 0 0 0 8.693 8.53l5.06-3.224a6.25 6.25 0 0 0 1.974-8.532A6.25 6.25 0 0 0 19.8 3.77m-1.352 5.004A6.26 6.26 0 0 0 15.65 7.5a1 1 0 0 0-1.525-1.003L9.066 9.72a1 1 0 1 0 1.075 1.686l2.109-1.343a4.25 4.25 0 1 1 4.567 7.17l-5.06 3.223a4.25 4.25 0 0 1-6.203-5.23A6.25 6.25 0 0 0 8.35 16.5a1 1 0 0 0 1.525 1.003l5.06-3.224a1 1 0 0 0-1.074-1.687l-2.109 1.344a4.25 4.25 0 0 1-4.567-7.17l5.06-3.223a4.25 4.25 0 0 1 6.203 5.23"
						/>
					</svg>
				</a>
				<a href="https://firebase.google.com/" aria-label="Firebase link" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.5rem"
						height="1.5rem"
						viewBox="0 0 24 24"
						class="text-text"
						{...$$props}
					>
						<path
							fill="currentColor"
							d="m9.223 8.707l-2.312 4.334l1.09-6.715zm1.145-2.148L7.695 1.353a.5.5 0 0 0-.938.148L4 18.5l1.748 1.093l5.192 3.244a2 2 0 0 0 2.12 0L20 18.5L18.142 5.961a.5.5 0 0 0-.841-.287l-2.735 2.637l-2.125-3.984a.5.5 0 0 0-.882 0zm2.701 3.196L8.667 14L12 7.75zm-5.837 8.407l9.36-9.025l1.238 8.36L12 21.143z"
						/>
					</svg>
				</a>
			</ProjectCard>
			<ProjectCard
				src="./coming_soon.webp"
				alt="Coming Soon"
				title="Comming Soon"
				description="Will be available as soon as I finish working on it"
				href="https://github.com/Al-aqua"
				githubRepo="https://github.com/Al-aqua"
			/>
		</div>
	</div>
</section>
