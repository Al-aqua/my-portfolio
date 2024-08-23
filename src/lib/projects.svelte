<script>
	import X from 'lucide-svelte/icons/x';
	import Plus from 'lucide-svelte/icons/plus';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import RotateCw from 'lucide-svelte/icons/rotate-cw';
	import Home from 'lucide-svelte/icons/home';
	import { EllipsisVertical, Library, Menu, Search } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { activeSection } from './active_store';

	onMount(() => {
		let observer = new IntersectionObserver(
			(entrie) => {
				if (entrie[0].isIntersecting) {
					activeSection.set('projects');
				}
			},
			{ threshold: 0.9 }
		);

		// @ts-ignore
		observer.observe(document.getElementById('projects'));
	});
</script>

<section id="projects" class="h-full rounded-xl px-6 pb-24 pt-24 md:pb-6">
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
	</div>
</section>
