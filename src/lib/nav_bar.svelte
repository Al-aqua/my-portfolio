<script>
	import LampDesk from 'lucide-svelte/icons/lamp-desk';
	import PanelsTopLeft from 'lucide-svelte/icons/panels-top-left';
	import MessageCircleCode from 'lucide-svelte/icons/message-circle-code';
	import Github from 'lucide-svelte/icons/github';
	import Twitter from 'lucide-svelte/icons/twitter';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Mail from 'lucide-svelte/icons/mail';
	import MessageCircle from 'lucide-svelte/icons/message-circle';
	import Phone from 'lucide-svelte/icons/phone';
	let activePage = 'home';
</script>

<header class="fixed top-0 z-10 h-svh w-svw p-6">
	<div class="flex h-full w-full flex-col items-center justify-between md:flex-row md:items-start">
		<nav
			class="flex items-center justify-center gap-4 rounded-xl
			bg-background/95 px-4 py-2 shadow-md shadow-background/25
			backdrop-blur-lg"
		>
			<a
				id="home"
				aria-label="Home page"
				class="flex h-10 w-10 items-center justify-center rounded-md
				{activePage === 'home' ? 'bg-primary shadow-md shadow-primary/25' : ''}
				transition-all duration-300"
				on:click={() => (activePage = 'home')}
				href="/"
			>
				<LampDesk class="h-6 w-6 text-text" />
			</a>
			<a
				id="projects"
				aria-label="Projects page"
				class="flex h-10 w-10 items-center justify-center rounded-md
				{activePage === 'projects' ? 'bg-primary shadow-md shadow-primary/25' : ''}
				transition-all duration-300"
				on:click={() => (activePage = 'projects')}
				href="/"
			>
				<PanelsTopLeft class="h-6 w-6 text-text" />
			</a>
			<a
				id="contact"
				aria-label="Contact page"
				class="flex h-10 w-10 items-center justify-center rounded-md
				{activePage === 'contact' ? 'bg-primary shadow-md shadow-primary/25' : ''}
				transition-all duration-300"
				on:click={() => (activePage = 'contact')}
				href="/"
			>
				<MessageCircleCode class="h-6 w-6 text-text" />
			</a>
			<span class="text-sm font-medium text-text transition-all"
				><span class="hidden md:inline">~/al-aqua</span>/{activePage}</span
			>
		</nav>

		<nav
			class="flex items-center justify-center gap-4 rounded-xl
			bg-background/95 px-4 py-2 shadow-md shadow-background/25
			backdrop-blur-lg"
		>
			<a
				id="github"
				aria-label="GitHub profile"
				class="flex h-10 w-10 items-center justify-center rounded-md"
				href="https://github.com/al-aqua"
				target="_blank"
			>
				<Github class="h-6 w-6 text-text" />
			</a>
			<a
				id="twitter"
				aria-label="Twitter profile"
				class="flex h-10 w-10 items-center justify-center rounded-md"
				href="https://x.com/the_alaqua?t=nXCGbIhHHAOygfJ_vlUh0Q&s=09"
				target="_blank"
			>
				<Twitter class="h-6 w-6 text-text" />
			</a>
			<a
				id="linkedin"
				aria-label="LinkedIn profile"
				class="flex h-10 w-10 items-center justify-center rounded-md"
				href="https://www.linkedin.com/in/mohammad-al-aqua-b3987b294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
				target="_blank"
			>
				<Linkedin class="h-6 w-6 text-text" />
			</a>
			<a
				id="email"
				aria-label="Email"
				class="flex h-10 w-10 items-center justify-center rounded-md"
				href="mailto:reiaqua@gmail.com"
				target="_blank"
			>
				<Mail class="h-6 w-6 text-text" />
			</a>
			<a
				id="whatsapp"
				aria-label="Whatsapp"
				class="flex h-10 w-10 items-center justify-center rounded-md"
				href="https://wa.me/qr/I66CWV3QB7DFA1"
				target="_blank"
			>
				<Phone class="fixed size-3 text-text" />
				<MessageCircle class="h-6 w-6 text-text" />
			</a>
		</nav>
	</div>
</header>
