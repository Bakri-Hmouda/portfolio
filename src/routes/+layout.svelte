<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { footerData } from '$lib/experience';
	import '../app.css';
	import Icon from '@iconify/svelte';

	// load data
	export let data;

	let open = false;
	function openMenu() {
		open = !open;
	}

	// close nav menu on navigation
	afterNavigate(() => (open = false));

	// nav menu items
	let menuItems = [
		{ title: 'Home', href: '/' },
		{ title: 'Projects', href: '/projects' },
		{ title: 'Download CV', href: '/favicon.png' }
	];

	// current year
	const currentYear = new Date().getFullYear();
</script>

<header
	class="m-auto mb-8 flex w-full max-w-7xl flex-wrap items-center justify-between px-4 pt-12 md:mb-12 md:px-8 lg:px-16"
>
	<div>
		<h1 class="text-2xl">Bakri Hmouda</h1>
		<p class="text-gray-600 dark:text-gray-400">Frontend web developer</p>
	</div>

	<!-- nav bar -->
	<div class="relative">
		<!-- toggle menu open on mobile device -->
		<div on:click={openMenu} on:keypress={openMenu}>
			<Icon icon="ep:menu" class="cursor-pointer" />
		</div>

		<!-- nav -->
		{#if open}
			<nav
				class="absolute right-0 top-6 z-50 h-fit rounded bg-gray-200 p-1 drop-shadow-lg dark:bg-gray-600"
				transition:fade={{ duration: 300 }}
			>
				<ul class="">
					{#each menuItems as menuItem}
						<li>
							<a
								class="block whitespace-nowrap rounded px-6 py-4 hover:bg-gray-300 dark:hover:bg-gray-500"
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
	<div class="m-auto max-w-7xl px-4 py-12 md:px-8 lg:px-16">
		<div class="grid md:grid-cols-[1fr_1fr_2fr]">
			{#each footerData as { title, links }}
				<div>
					<h4 class="mb-2 text-xl text-gray-400">{title}</h4>
					<ul>
						{#each links as link}
							<li class="mb-1 flex items-center gap-2 transition-colors hover:text-emerald-600">
								<Icon icon={link.icon} class="text-gray-500" />
								<a class="w-full" href={link.href} target="_blank">
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}

			<h4 class="flex items-end justify-end text-xs text-gray-500">©{currentYear}/Bakri Hmouda</h4>
		</div>
	</div>
</footer>
