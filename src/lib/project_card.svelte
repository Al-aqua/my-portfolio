<script>
	import { Github } from 'lucide-svelte';

	export let src;
	export let alt;
	export let title;
	export let description;
	export let href;
	export let githubRepo;
</script>

<div
	class="flex w-full flex-col gap-4 rounded-md border border-primary bg-[#292A25]
    p-3 duration-300 hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-primary/25 md:max-w-md"
>
	<a {href} aria-label="Link to the project" target="_blank">
		<img {src} {alt} class="aspect-[16/9] w-full rounded-lg" />
	</a>
	<div class="flex justify-between">
		<span class="text-lg font-medium text-accent">{title}</span>
		<a href={githubRepo} aria-label="GitHub link to the project" target="_blank">
			<Github class="h-6 w-6 text-text" />
		</a>
	</div>
	<p class="text-sm text-text">{description}</p>
	<div class="flex max-w-fit gap-2">
		<slot />
	</div>
</div>
