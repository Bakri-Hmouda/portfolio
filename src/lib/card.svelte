<script lang="ts">
	// imports
	import Icon from '@iconify/svelte';
	import { claim_space } from 'svelte/internal';

	// props
	export let title = 'untitled';
	export let level = 'beginner' as keyof typeof levels;
	export let icon = 'ic:baseline-adobe';

	// levels params
	const levels = {
		beginner: {
			title: 'Beginner',
			level: 1
		},
		intermediate: {
			title: 'Intermediate',
			level: 2
		},
		advancedIntermediate: {
			title: 'Advanced Intermediate',
			level: 3
		},
		advanced: {
			title: 'Advanced',
			level: 4
		},
		expert: {
			title: 'Expert',
			level: 5
		}
	};
</script>

<!-- template -->
<div class="rounded bg-gray-200 px-4 pb-6 pt-4 drop-shadow-sm dark:bg-gray-800">
	<div class="mb-10 flex justify-between">
		<h4 class="align-text-top text-base font-bold">{title}</h4>
		<Icon {icon} class="h-6 w-6" />
	</div>
	<span>Level: </span><span>{levels[level].title}</span>
	<div
		id="progress-bar"
		class="mt-1 grid h-1 w-full grid-cols-5 gap-0.5 overflow-hidden rounded bg-gray-400 dark:bg-gray-200"
	>
		<!-- render the width dynamically using the inline style tag -->
		<div class:bg-yellow-600={levels[level].level >= 1} />
		<div class:bg-green-600={levels[level].level >= 2} />
		<div class:bg-teal-600={levels[level].level >= 3} />
		<div class:bg-sky-600={levels[level].level >= 4} />
		<div class:bg-indigo-600={levels[level].level >= 5} />
	</div>
</div>
