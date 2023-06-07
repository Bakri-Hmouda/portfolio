<script lang="ts">
	import Project from '$lib/projectCard.svelte';
	import { projects } from '$lib/projects';
</script>

<section class=" m-auto mb-8 max-w-7xl rounded px-4 md:px-8 lg:px-16">
	<div class="">
		<div class="mb-2 flex items-center gap-2">
			<div class="h-1 w-4 rounded bg-green-500 drop-shadow-glow" />
			<h1 class="text-xl capitalize">Projects</h1>
		</div>
		<div class="mb-2 grid gap-2 md:grid-cols-2">
			{#each projects as project, index}
				<Project {...project} {index} />
			{/each}
		</div>
		<p class="text-xs text-gray-500">
			*More full-stack projects built with React, Next.js, and Express.js are not listed because
			they are neither hosted nor in production.
		</p>
	</div>
</section>
