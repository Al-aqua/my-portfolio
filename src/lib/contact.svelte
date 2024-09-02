<script>
	import Mail from 'lucide-svelte/icons/mail';
	import Phone from 'lucide-svelte/icons/phone';
	import { activeSection } from './active_store.js';
	import { onMount } from 'svelte';

	onMount(() => {
		let observer = new IntersectionObserver(
			(entrie) => {
				if (entrie[0].isIntersecting) {
					activeSection.set('contact');
				}
			},
			{ threshold: 0.5 }
		);

		// @ts-ignore
		observer.observe(document.getElementById('contact'));
	});
</script>

<section id="contact" class="flex h-full items-center justify-center p-6">
	<div
		class="flex w-fit max-w-xl flex-col rounded-xl bg-background/95
		p-6 shadow-md shadow-background/25 backdrop-blur-lg"
	>
		<span class="text-sm text-text md:text-lg">~ $ contact_me.sh</span>
		<p class="text-sm text-text md:text-lg">
			Like what you saw and want something amazing built just for you?
			<span class="font-medium text-accent">Let's connect! Reach out, </span>
			and I'll bring your ideas to life.
			<br />
			<span class="pt-4 font-bold text-secondary">
				<Mail class="mr-1 inline" />Email:
				<a
					aria-label="Email"
					href="mailto:reiaqua0@gmail.com"
					target="_blank"
					class="font-bold text-accent underline">reiaqua0@gmail.com</a
				></span
			>

			<br />
			<span class="font-bold text-secondary">
				<Phone class="mr-1 inline" />Phone:
				<a
					aria-label="Phone number"
					href="tel:+967772550218"
					target="_blank"
					class="font-bold text-accent underline">+967 772 550 218</a
				>
			</span>
		</p>
	</div>
</section>
