<script>
	import LampDesk from 'lucide-svelte/icons/lamp-desk';
	import PanelsTopLeft from 'lucide-svelte/icons/panels-top-left';
	import Pickaxe from 'lucide-svelte/icons/pickaxe';
	import MessageCircleCode from 'lucide-svelte/icons/message-circle-code';
	import Github from 'lucide-svelte/icons/github';
	import Twitter from 'lucide-svelte/icons/twitter';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Mail from 'lucide-svelte/icons/mail';
	import MessageCircle from 'lucide-svelte/icons/message-circle';
	import Phone from 'lucide-svelte/icons/phone';
	let activePage = 'home';
</script>

<header class="sticky flex items-center justify-center p-6 md:justify-between">
	<!--TODO: add the right href to the links-->
	<nav
		class="flex items-center justify-center gap-4 rounded-xl
		bg-background/95 px-4 py-2 shadow-md shadow-background/25 backdrop-blur-lg"
	>
		<a
			id="home"
			class="flex h-10 w-10 items-center justify-center rounded-md
			{activePage === 'home' ? 'bg-primary shadow-md shadow-primary/25' : ''}
			transition-all duration-300"
			on:click={() => (activePage = 'home')}
			href="/"
		>
			<LampDesk class="h-6 w-6 text-text" />
		</a>
		<a
			id="skills"
			class="flex h-10 w-10 items-center justify-center rounded-md
			{activePage === 'skills' ? 'bg-primary shadow-md shadow-primary/25' : ''}
			transition-all duration-300"
			on:click={() => (activePage = 'skills')}
			href="/"
		>
			<PanelsTopLeft class="h-6 w-6 text-text" />
		</a>
		<a
			id="work"
			class="flex h-10 w-10 items-center justify-center rounded-md
			{activePage === 'work' ? 'bg-primary shadow-md shadow-primary/25' : ''}
			transition-all duration-300"
			on:click={() => (activePage = 'work')}
			href="/"
		>
			<Pickaxe class="h-6 w-6 text-text" />
		</a>
		<a
			id="contact"
			class="flex h-10 w-10 items-center justify-center rounded-md
			{activePage === 'contact' ? 'bg-primary shadow-md shadow-primary/25' : ''}
			transition-all duration-300"
			on:click={() => (activePage = 'contact')}
			href="/"
		>
			<MessageCircleCode class="h-6 w-6 text-text" />
		</a>
		<span class="text-sm font-medium text-text transition-all">~/al-aqua/{activePage}</span>
	</nav>

	<section
		class="fixed bottom-5 left-1/2 flex -translate-x-1/2 transform items-center justify-center gap-4 rounded-xl
		bg-background/95 px-4 py-2 shadow-md shadow-background/25 backdrop-blur-lg md:static md:translate-x-0"
	>
		<a
			id="github"
			class="flex h-10 w-10 items-center justify-center rounded-md"
			href="https://github.com/al-aqua"
			target="_blank"
		>
			<Github class="h-6 w-6 text-text" />
		</a>
		<a
			id="twitter"
			class="flex h-10 w-10 items-center justify-center rounded-md"
			href="https://x.com/the_alaqua?t=nXCGbIhHHAOygfJ_vlUh0Q&s=09"
			target="_blank"
		>
			<Twitter class="h-6 w-6 text-text" />
		</a>
		<a
			id="linkedin"
			class="flex h-10 w-10 items-center justify-center rounded-md"
			href="https://www.linkedin.com/in/mohammad-al-aqua-b3987b294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
			target="_blank"
		>
			<Linkedin class="h-6 w-6 text-text" />
		</a>
		<a
			id="email"
			class="flex h-10 w-10 items-center justify-center rounded-md"
			href="mailto:reiaqua@gmail.com"
			target="_blank"
		>
			<Mail class="h-6 w-6 text-text" />
		</a>
		<a
			id="whatsapp"
			class="flex h-10 w-10 items-center justify-center rounded-md"
			href="https://wa.me/qr/I66CWV3QB7DFA1"
			target="_blank"
		>
			<Phone class="fixed size-3 text-text" />
			<MessageCircle class="h-6 w-6 text-text" />
		</a>
	</section>
</header>
