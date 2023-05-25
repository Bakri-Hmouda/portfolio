<script lang="ts">
	import { experiences } from '../lib/experience';
</script>

<!-- template -->
<svelte:head>
	<title>Bakri Hmouda</title>
</svelte:head>

<section class="m-auto mb-8 max-w-7xl px-4 md:px-8 lg:px-16">
	<div class="grid gap-8 md:grid-cols-2">
		<div id="about" class="h-fit rounded bg-slate-100 px-6 py-8 drop-shadow-sm dark:bg-gray-700">
			<h2 class="mb-2 text-xl capitalize">about</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita similique accusamus eaque
				deserunt placeat laudantium voluptatem error, molestias nobis, tenetur sapiente eos incidunt
				tempore vero numquam dolor, suscipit at velit.
			</p>
		</div>

		<div id="experience">
			<h2 class="mb-2 text-xl capitalize md:pt-8">Experience</h2>
			<ul class="relative border-l border-gray-200 dark:border-gray-700">
				{#each experiences as { date, title, company, body }}
					<li class="mb-10 ml-4">
						<div
							class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
						/>
						<div class="flex items-center justify-between">
							<p class="text-gray-400 dark:text-gray-500">{company}</p>
							<time class=" text-sm font-normal text-gray-400 dark:text-gray-500">{date}</time>
						</div>
						<div class="rounded-b p-2">
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
								{title}
							</h3>
							<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
								{body}
							</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
