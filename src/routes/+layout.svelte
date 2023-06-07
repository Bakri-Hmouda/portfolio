<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { each } from 'svelte/internal';
	import '../app.css';
	import Icon from '@iconify/svelte';

	let closed = true;
	function openMenu() {
		closed = !closed;
	}

	// close nav menu on navigation
	afterNavigate(() => (closed = true));

	let menuItems = [
		{ title: 'Home', href: '/' },
		{ title: 'Projects', href: '/projects' },
		{ title: 'Download CV', href: '/favicon.png' }
	];
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
		<nav
			class:hidden={closed}
			class="absolute right-0 top-6 z-50 h-fit rounded bg-gray-200 p-1 drop-shadow-lg dark:bg-gray-600"
		>
			<ul class="">
				{#each menuItems as menuItem}
					<li>
						<a
							class="block whitespace-nowrap rounded px-6 py-4 hover:bg-gray-300 dark:hover:bg-gray-500"
							href={menuItem.href}>{menuItem.title}</a
						>
					</li>{/each}
			</ul>
		</nav>
	</div>
</header>

<main class="flex-1">
	<slot />
</main>

<!-- footer -->
<footer class="mt-auto bg-gray-950">
	<div class="m-auto max-w-7xl px-4 py-12 md:px-8 lg:px-16">
		<div class="grid grid-cols-3">
			<div>
				<h4 class="text-xl text-gray-400">Contact</h4>
				<ul>
					<li>
						<a class="transition-colors hover:text-emerald-600" href="tel:0096171450221">Phone</a>
					</li>
					<li>
						<a class="transition-colors hover:text-emerald-600" href="mailto:bakri.hmouda@gmail.com"
							>Email</a
						>
					</li>
				</ul>
			</div>
			<div>
				<h4 class="text-xl text-gray-400">Links</h4>
			</div>
		</div>
	</div>
</footer>
