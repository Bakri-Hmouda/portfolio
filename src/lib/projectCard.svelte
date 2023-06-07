<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';

	export let title: string;
	export let href: string = '';
	export let tech: string;
	export let index;
	let order = index + 1;
</script>

<a
	{href}
	target="_blank"
	class="group cursor-pointer rounded bg-gray-200 px-4 py-2 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
	in:fade={{ delay: order * 150, duration: 300 }}
>
	<div class="flex">
		<p
			class="mr-2 border-r border-gray-300 pr-2 transition-colors group-hover:border-gray-200 dark:border-gray-500 dark:group-hover:border-gray-400"
		>
			{order}
		</p>

		<div class="flex w-full items-center justify-between">
			<div>
				<h2 class="capitalize text-gray-800 dark:text-gray-50">{title}</h2>
				<p class="text-sm text-gray-500 transition-colors dark:group-hover:text-gray-400">
					built with {tech}
				</p>
			</div>
			<Icon icon="ph:link" class="text-lg opacity-0 transition-opacity group-hover:opacity-100" />
		</div>
	</div>
</a>
