<script>
	import Card from '$lib/card.svelte';
	import { experiences, skills } from '$lib/experience';
</script>

<!-- template -->
<svelte:head>
	<title>Bakri Hmouda</title>
</svelte:head>

<section class="m-auto mb-8 max-w-7xl px-4 md:px-8 lg:px-16">
	<div class="grid gap-8 md:grid-cols-2">
		<div id="about" class="h-fit rounded bg-gray-100 px-6 py-8 drop-shadow-sm dark:bg-gray-700">
			<h2 class="mb-2 text-xl capitalize">about</h2>
			<p class="text-gray-500 dark:text-gray-400">
				Passionate about creating captivating and user-friendly web experiences, I am a frontend web
				developer with expertise in utilizing Adobe Creative Suite. With a strong foundation in web
				development and design principles, I recently completed a comprehensive bootcamp to further
				enhance my skills. By combining my technical knowledge and creativity, I strive to deliver
				visually appealing and engaging websites that exceed client expectations. I am dedicated to
				continuous learning and staying up-to-date with the latest industry trends to provide
				innovative solutions in the ever-evolving world of web development.
			</p>
		</div>

		<div id="experience">
			<h2 class="mb-2 text-xl capitalize md:pt-8">Experience</h2>
			<ul class="relative border-l border-gray-200 dark:border-gray-700">
				{#each experiences as { date, title, company, body }}
					<li class="mb-10 ml-4">
						<div
							class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded border border-white bg-gray-200 dark:border-gray-800 dark:bg-gray-700"
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

<section class="m-auto">
	<div class="bg-gray-100 px-6 py-8 dark:bg-gray-700">
		<div class="relative m-auto max-w-7xl md:px-8 lg:px-16">
			<h2 class="mb-2 text-xl capitalize">Skills</h2>
			<div class=" grid gap-2 lg:grid-cols-3">
				{#each skills as skill}
					<Card title={skill.title} level={skill.level} icon={skill.icon} />
				{/each}
			</div>
		</div>
	</div>
</section>
