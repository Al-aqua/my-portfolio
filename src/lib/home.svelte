<script>
	import Sl from './sl.svelte';
</script>

<main class="flex h-full flex-col gap-6 p-6">
	<div class="flex gap-6">
		<section
			class="flex w-fit max-w-xl flex-col rounded-xl
		bg-background/95 p-6 shadow-md shadow-background/25 backdrop-blur-lg"
		>
			<span class="text-sm text-text md:text-lg">~ $ whoami</span>
			<h1 class="text-xl text-text md:text-3xl">
				Hey, <span class="whitespace-pre text-accent">I’m Mohammad Al-aqua</span>
			</h1>
			<h2 class="text-lg text-primary md:text-xl">Software Engineer and Full Stake Developer</h2>
			<p class="text-sm text-text md:text-lg">
				I’m a highly skilled developer who always gives his best in everything he does. With over
				three years of experience in developing and creating quality software, I have led and
				collaborated with teams on various projects. My expertise ranges from back-end development
				using <span class="font-medium text-accent">Laravel</span>,
				<span class="font-medium text-accent">Go</span>, and
				<span class="font-medium text-accent">Node.js</span> to front-end development with
				<span
					class="font-medium
			    text-accent">Flutter</span
				>, <span class="font-medium text-accent">React.js</span>,
				<span class="font-medium text-accent">Svelte</span>, and
				<span class="font-medium text-accent">HTMX</span>. Additionally, I specialize in integrating
				these technologies with APIs, utilizing both
				<span class="font-medium text-accent">RESTful</span> and
				<span class="font-medium text-accent">gRPC</span> approaches.
			</p>
		</section>
		<section
			class="ml-auto hidden h-fit w-fit max-w-xl items-center
		overflow-hidden rounded-xl bg-background/95 p-6 shadow-md
			shadow-background/25 backdrop-blur-lg md:flex"
		>
			<Sl />
		</section>
	</div>
	<section
		class="flex w-fit flex-col
		rounded-xl bg-background/95 p-6 shadow-md shadow-background/25
		backdrop-blur-lg"
	>
		<span class="text-sm text-text md:text-lg">~ $ ./get_location.sh</span>
		<p class="w-max text-sm text-text md:text-lg">Sana’a Yemen</p>
	</section>
</main>
