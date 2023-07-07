<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { footerData } from '$lib/experience';
	import '../app.css';
	import Icon from '@iconify/svelte';

	let open = false;
	function openMenu() {
		open = !open;
	}

	// close nav menu on navigation
	afterNavigate(() => (open = false));

	// nav menu items
	let menuItems = [
		{ title: 'Home', href: '/', download: null },
		{ title: 'Projects', href: '/projects', download: null },
		{ title: 'Download CV', href: '/Bakri-Hmouda.pdf', download: 'Bakri-Hmouda-Resume' }
	];

	// current year
	const currentYear = new Date().getFullYear();
</script>

<!-- template -->
<header
	class="m-auto mb-8 flex w-full max-w-7xl flex-wrap items-center justify-between px-4 pt-12 md:mb-12 md:px-8 lg:px-16"
>
	<a href="/">
		<h1 class="text-2xl">Bakri Hmouda</h1>
		<p class="text-gray-600 dark:text-gray-400">Frontend web developer</p>
	</a>

	<!-- nav bar -->
	<div class="relative">
		<!-- toggle menu open on mobile device -->
		<div on:click={openMenu} on:keypress={openMenu}>
			<Icon icon="ep:menu" class="cursor-pointer text-xl" />
		</div>

		<!-- nav -->
		{#if open}
			<nav
				class="absolute right-0 top-8 z-50 h-fit rounded bg-gray-200 p-1 drop-shadow-lg dark:bg-gray-600"
				transition:fade={{ duration: 300 }}
			>
				<ul class="">
					{#each menuItems as menuItem}
						<li>
							<a
								download={menuItem.download}
								class="block whitespace-nowrap rounded px-6 py-4 transition-colors hover:bg-gray-300 dark:hover:bg-gray-500"
								href={menuItem.href}>{menuItem.title}</a
							>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
	</div>
</header>

<main class="flex-1">
	<slot />
</main>

<!-- footer -->
<footer class="mt-auto bg-gray-950">
	<div class="m-auto max-w-7xl px-4 pb-6 pt-8 md:px-8 lg:px-16">
		<div class="grid gap-y-8 md:grid-cols-[1fr_1fr_2fr]">
			{#each footerData as { title, links }}
				<div>
					<h4 class="mb-2 text-xl text-gray-400">{title}</h4>
					<ul>
						{#each links as link}
							<li
								class="mb-1 flex items-center gap-2 text-gray-200 transition-colors hover:text-emerald-600"
							>
								<Icon icon={link.icon} />
								<a class="w-full" href={link.href} target="_blank" download={link.download}>
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}

			<h4 class="flex justify-center text-xs text-gray-500 md:items-end md:justify-end">
				©{currentYear}/Bakri Hmouda
			</h4>
		</div>
	</div>
</footer>
