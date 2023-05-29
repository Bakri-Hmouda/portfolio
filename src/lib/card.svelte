<script lang="ts">
	// props
	export let title = 'untitled';
	export let level = 'beginner' as keyof typeof levels;

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
<div class="rounded bg-gray-200 px-4 py-6 drop-shadow-sm dark:bg-gray-800">
	<h4 class="mb-2 font-bold">{title}</h4>
	<span>Level: </span><span>{levels[level].title}</span>
	<div id="progress-bar" class=" h-1 w-full overflow-hidden rounded bg-gray-400 dark:bg-gray-200">
		<!-- render the width dynamically using the inline style tag -->
		<div style="width: {levels[level].level}" class=" h-full bg-rose-500 dark:bg-emerald-600" />
	</div>
</div>
