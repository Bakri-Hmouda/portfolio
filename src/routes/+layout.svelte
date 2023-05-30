<script>
	import '../app.css';
</script>

<header class="m-auto mb-8 max-w-7xl px-4 pt-12 md:mb-12 md:px-8 lg:px-16">
	<h1 class="text-2xl">Bakri Hmouda</h1>
	<p class="text-gray-600 dark:text-gray-400">Frontend web developer</p>
</header>

<main>
	<slot />
</main>

<footer class=" bg-gray-950">
	<div class="m-auto max-w-7xl px-4 py-12 md:px-8 lg:px-16">
		<div class="grid grid-cols-3">
			<div>
				<h4 class="text-xl text-gray-400">Contact</h4>
				<ul>
					<li>
						<a class="transition-colors hover:text-emerald-600" href="tel:0096171450221">Phone</a>
					</li>
					<li>
						<a
							class="transition-colors hover:text-emerald-600"
							href="emailto:bakri.hmouda@gmail.com">Email</a
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
