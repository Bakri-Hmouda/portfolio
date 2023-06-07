<script lang="ts">
	// imports
	import Icon from '@iconify/svelte';

	// props
	export let title = 'untitled';
	export let level = 'beginner' as keyof typeof levels;
	export let icon = 'ic:baseline-adobe';

	// levels params
	const levels = {
		beginner: {
			title: 'Beginner',
			level: '20%'
		},
		intermediate: {
			title: 'Intermediate',
			level: '40%'
		},
		advancedIntermediate: {
			title: 'Advanced Intermediate',
			level: '60%'
		},
		advanced: {
			title: 'Advanced',
			level: '80%'
		},
		expert: {
			title: 'Expert',
			level: '100%'
		}
	};
</script>

<!-- template -->
<div class="rounded bg-gray-200 px-4 pb-6 pt-4 shadow-sm dark:bg-gray-800">
	<div class="mb-10 flex justify-between">
		<h4 class="align-text-top text-base font-bold">{title}</h4>
		<Icon {icon} class="h-6 w-6" />
	</div>
	<span>Level: </span><span>{levels[level].title}</span>
	<div
		id="progress-bar"
		class="mt-1 h-1 w-full gap-0.5 overflow-hidden rounded bg-gray-400 shadow-inner dark:bg-gray-200"
	>
		<!-- render the width dynamically using the inline style tag -->
		<div style="width:{levels[level].level};" class="h-full bg-green-600" />
	</div>
</div>
